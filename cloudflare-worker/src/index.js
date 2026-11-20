/**
 * Cloudflare Worker: Secure Resend Email Proxy
 * Kshirsa Technology Solutions
 *
 * This Worker runs on Cloudflare's 100% Free Tier (100,000 requests/day).
 * It holds the RESEND_API_KEY securely on the server-side as an encrypted secret,
 * receives form submissions from your website, and dispatches them via Resend.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // 1. Handle CORS Preflight request
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // 2. Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed. Use POST.' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Verify Resend API Key is set in Cloudflare Secrets
    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY secret is not configured in Cloudflare Worker.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 4. Parse & validate request payload
    let payload;
    try {
      payload = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON request payload.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { fullName, email, phone, companyName, service, message } = payload;

    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: fullName, email, message.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const toEmail = env.TO_EMAIL || 'contact.kshirsatech@gmail.com';
    const fromEmail = env.FROM_EMAIL || 'Kshirsa Inquiries <onboarding@resend.dev>';
    const serviceName = service || 'General Inquiry';

    // 5. Construct email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #092D3A; max-width: 600px; margin: 0 auto; border: 1px solid #E5F8F2; border-radius: 12px; padding: 24px;">
        <div style="border-bottom: 2px solid #00B887; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #004D3B; margin: 0 0 6px 0;">New Project Inquiry</h2>
          <span style="color: #00B887; font-size: 13px; font-weight: bold; text-transform: uppercase;">Service: ${serviceName}</span>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #006B4F;">Full Name:</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Business Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00B887;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Phone:</td>
            <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Company:</td>
            <td style="padding: 8px 0;">${companyName || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Service Area:</td>
            <td style="padding: 8px 0;">${serviceName}</td>
          </tr>
        </table>
        <div style="background-color: #F4FCF9; border-left: 4px solid #00B887; padding: 16px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #004D3B;">Project Description:</h4>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5F8F2; font-size: 12px; color: #64748B;">
          Delivered securely via Cloudflare Worker Proxy &bull; Kshirsa Technology Solutions &bull; Kolkata, West Bengal, India
        </div>
      </div>
    `;

    // 6. Forward payload to Resend API
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `New Inquiry: ${serviceName} — ${companyName || fullName}`,
          html: emailHtml,
        }),
      });

      const resendData = await resendResponse.json();

      if (resendResponse.ok) {
        return new Response(
          JSON.stringify({ success: true, id: resendData.id }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        return new Response(
          JSON.stringify({ error: resendData.message || 'Resend API returned an error.' }),
          { status: resendResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } catch (err) {
      return new Response(
        JSON.stringify({ error: 'Network error contacting Resend API: ' + err.message }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};
