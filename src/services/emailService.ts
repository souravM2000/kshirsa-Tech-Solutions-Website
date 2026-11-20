import { ContactFormData } from '../types';

export interface EmailSendResult {
  success: boolean;
  message: string;
  isFallback?: boolean;
}

/**
 * Sends contact form data via Resend API.
 *
 * Security model:
 * - The API key is injected by GitHub Actions at build time from a GitHub Secret.
 * - It is NOT committed to git or stored in .env files in the repository.
 * - For a send-only Resend key, the blast radius of exposure is limited to
 *   someone sending emails through your Resend account (monitorable + revocable).
 *
 * To set up:
 * 1. Add RESEND_API_KEY to GitHub → Settings → Secrets → Actions
 * 2. The workflow injects it as VITE_RESEND_API_KEY during npm run build
 * 3. For local dev, add it to your local .env (which is gitignored)
 */
export async function sendContactEmail(formData: ContactFormData): Promise<EmailSendResult> {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY as string | undefined;
  const toEmail = 'contact.kshirsatech@gmail.com';
  const fromEmail = 'Kshirsa Inquiries <onboarding@resend.dev>';

  if (!apiKey) {
    // No key at all — graceful mailto fallback
    return {
      success: true,
      isFallback: true,
      message: 'Your inquiry has been prepared. Click the button below to send via your email client.',
    };
  }

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#092D3A;max-width:600px;margin:0 auto;border:1px solid #E5F8F2;border-radius:12px;padding:24px;">
      <div style="border-bottom:2px solid #00B887;padding-bottom:16px;margin-bottom:20px;">
        <h2 style="color:#004D3B;margin:0 0 6px 0;">New Inquiry — Kshirsa Website</h2>
        <span style="color:#00B887;font-size:13px;font-weight:bold;text-transform:uppercase;">Service: ${formData.service}</span>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr><td style="padding:8px 0;font-weight:bold;width:140px;color:#006B4F;">Name:</td><td>${formData.fullName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#006B4F;">Email:</td><td><a href="mailto:${formData.email}" style="color:#00B887;">${formData.email}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#006B4F;">Phone:</td><td>${formData.phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#006B4F;">Company:</td><td>${formData.companyName || 'Not specified'}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#006B4F;">Service:</td><td>${formData.service}</td></tr>
      </table>
      <div style="background:#F4FCF9;border-left:4px solid #00B887;padding:16px;border-radius:6px;">
        <h4 style="margin:0 0 8px 0;color:#004D3B;">Project Overview:</h4>
        <p style="margin:0;white-space:pre-wrap;font-size:14px;">${formData.message}</p>
      </div>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #E5F8F2;font-size:12px;color:#64748B;">
        Sent via Kshirsa Technology Solutions Contact Portal &bull; Kolkata, West Bengal, India
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: formData.email,
        subject: `New Inquiry: ${formData.service} — ${formData.companyName || formData.fullName}`,
        html,
      }),
    });

    const data = await response.json() as { id?: string; message?: string };

    if (response.ok && data.id) {
      return {
        success: true,
        message: 'Your inquiry was delivered to our team. We will respond within 24 business hours.',
      };
    }

    console.error('Resend API error:', data);
    return {
      success: false,
      message: 'Submission could not be completed. Please use the email link below.',
    };
  } catch (err) {
    console.error('Network error:', err);
    return {
      success: false,
      message: 'Could not reach the server. Please use the email link below.',
    };
  }
}

/**
 * Pre-filled mailto fallback — always works, no server required.
 */
export function buildMailtoUrl(formData: ContactFormData): string {
  const subject = encodeURIComponent(
    `Project Inquiry: ${formData.service} — ${formData.companyName || formData.fullName}`
  );
  const body = encodeURIComponent(
    `Hello Kshirsa Solutions Team,\n\n` +
      `I would like to inquire about your ${formData.service} services.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Company: ${formData.companyName || 'N/A'}\n` +
      `Service: ${formData.service}\n\n` +
      `Project:\n${formData.message}\n\nBest regards,\n${formData.fullName}`
  );
  return `mailto:contact.kshirsatech@gmail.com?subject=${subject}&body=${body}`;
}
