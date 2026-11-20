import { ContactFormData } from '../types';

export interface EmailSendResult {
  success: boolean;
  message: string;
}

/**
 * Sends contact form data ONLY through the Cloudflare Worker Proxy.
 * All direct Resend API calls and fallbacks have been removed from the client.
 */
export async function sendContactEmail(formData: ContactFormData): Promise<EmailSendResult> {
  const proxyUrl = import.meta.env.VITE_CONTACT_PROXY_URL as string | undefined;

  console.log('[Contact Service] Using Proxy URL:', proxyUrl ? `${proxyUrl.substring(0, 15)}...` : 'NOT SET');

  if (!proxyUrl || !proxyUrl.startsWith('http')) {
    console.error('[Contact Service] VITE_CONTACT_PROXY_URL is missing or invalid:', proxyUrl);
    return {
      success: false,
      message: 'Cloudflare Worker endpoint is not configured. Please set VITE_CONTACT_PROXY_URL.',
    };
  }

  try {
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || undefined,
        companyName: formData.companyName || undefined,
        service: formData.service,
        message: formData.message,
      }),
    });

    const data = (await response.json()) as { success?: boolean; error?: string; id?: string };

    if (response.ok && (data.success || data.id)) {
      return {
        success: true,
        message: 'Your inquiry was delivered to our team. We will respond within 24 business hours.',
      };
    }

    console.error('[Contact Service] Cloudflare Worker returned an error:', data);
    return {
      success: false,
      message: data.error || 'Submission failed on server. Please try again later.',
    };
  } catch (err: any) {
    console.error('[Contact Service] Network error calling Cloudflare Worker:', err);
    return {
      success: false,
      message: `Failed to connect to Cloudflare Worker proxy: ${err.message || 'Network error'}`,
    };
  }
}

/**
 * Pre-filled mailto fallback URL helper (kept as simple mail client link if needed)
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
