import { ContactFormData } from '../types';

export interface EmailSendResult {
  success: boolean;
  message: string;
  isFallback?: boolean;
}

/**
 * Service to dispatch contact inquiries using Resend.
 *
 * Configuration:
 * To enable direct Resend API sending, add your API key to .env:
 * VITE_RESEND_API_KEY=re_your_api_key_here
 *
 * Optional custom sender:
 * VITE_RESEND_FROM_EMAIL=Kshirsa Inquiries <onboarding@resend.dev>
 *
 * Target recipient:
 * VITE_CONTACT_RECEIVER_EMAIL=contact.kshirsatech@gmail.com
 */
export async function sendEmailWithResend(formData: ContactFormData): Promise<EmailSendResult> {
  const apiKey = (import.meta as any).env?.VITE_RESEND_API_KEY;
  const customEndpoint = (import.meta as any).env?.VITE_RESEND_API_ENDPOINT;
  const toEmail = (import.meta as any).env?.VITE_CONTACT_RECEIVER_EMAIL || 'contact.kshirsatech@gmail.com';
  const fromEmail = (import.meta as any).env?.VITE_RESEND_FROM_EMAIL || 'Kshirsa Inquiries <onboarding@resend.dev>';

  const emailSubject = `New Project Inquiry: ${formData.service} - ${formData.companyName || formData.fullName}`;
  
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #092D3A; max-width: 600px; margin: 0 auto; border: 1px solid #E5F8F2; border-radius: 12px; padding: 24px;">
      <div style="border-bottom: 2px solid #00B887; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #004D3B; margin: 0 0 6px 0;">New Inquiry from Kshirsa Website</h2>
        <span style="color: #00B887; font-size: 13px; font-weight: bold; text-transform: uppercase;">Service: ${formData.service}</span>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #006B4F;">Client Name:</td>
          <td style="padding: 8px 0;">${formData.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Business Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #00B887;">${formData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Phone Number:</td>
          <td style="padding: 8px 0;">${formData.phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Company:</td>
          <td style="padding: 8px 0;">${formData.companyName || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #006B4F;">Service Area:</td>
          <td style="padding: 8px 0;">${formData.service}</td>
        </tr>
      </table>

      <div style="background-color: #F4FCF9; border-left: 4px solid #00B887; padding: 16px; border-radius: 6px;">
        <h4 style="margin: 0 0 8px 0; color: #004D3B;">Project Overview / Requirements:</h4>
        <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${formData.message}</p>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5F8F2; font-size: 12px; color: #64748B;">
        Sent via Kshirsa Technology Solutions Contact Portal &bull; Destination: ${toEmail}
      </div>
    </div>
  `;

  // 1. If a backend or serverless proxy endpoint is defined (recommended for production CORS):
  if (customEndpoint) {
    try {
      const response = await fetch(customEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: formData.email,
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Your inquiry was delivered successfully via Resend. Our solutions team will connect with you shortly.',
        };
      }
    } catch (err) {
      console.warn('Custom Resend endpoint error:', err);
    }
  }

  // 2. If direct Resend API key is provided:
  if (apiKey && apiKey.startsWith('re_')) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: formData.email,
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      const data = await response.json();
      if (response.ok && data.id) {
        return {
          success: true,
          message: 'Inquiry dispatched successfully via Resend. We will review your project and get back to you within 24 hours.',
        };
      } else {
        console.warn('Resend API response error:', data);
        // Fall back gracefully
      }
    } catch (error) {
      console.warn('Direct Resend API call encountered a network or CORS constraint:', error);
    }
  }

  // 3. Graceful fallback when Resend credentials are not yet entered
  return {
    success: true,
    isFallback: true,
    message: 'Your inquiry has been prepared for transmission. Please click the button below to complete sending via email or configure VITE_RESEND_API_KEY in your environment.',
  };
}

/**
 * Builds standard mailto URL for direct desktop/mobile client email dispatch
 */
export function buildMailtoUrl(formData: ContactFormData): string {
  const recipient = 'contact.kshirsatech@gmail.com';
  const subject = encodeURIComponent(
    `Project Inquiry: ${formData.service} - ${formData.companyName || formData.fullName}`
  );
  const body = encodeURIComponent(
    `Hello Kshirsa Solutions Team,\n\nI would like to inquire about your ${formData.service} services.\n\n` +
      `Contact Details:\n` +
      `- Full Name: ${formData.fullName}\n` +
      `- Business Email: ${formData.email}\n` +
      `- Phone: ${formData.phone || 'N/A'}\n` +
      `- Company: ${formData.companyName || 'N/A'}\n` +
      `- Service Required: ${formData.service}\n\n` +
      `Project Description:\n${formData.message}\n\n` +
      `Best regards,\n${formData.fullName}`
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
