import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import { ContactFormData } from '../types';
import { Button } from './Button';
import { sendContactEmail, buildMailtoUrl } from '../services/emailService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'AI & Generative AI',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isFallbackMode, setIsFallbackMode] = useState<boolean>(false);

  const servicesList = [
    'AI & Generative AI',
    'Cloud Solutions',
    'Application Development',
    'IT Consulting & Advisory',
    'Modernization & Migration',
    'Maintenance & Support',
    'General Technology Inquiry',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    // Phone is optional now, but if provided, must be valid
    if (formData.phone.trim() && !/^[0-9+\s()-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project or requirements';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      // Dispatch via Resend integration service
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message);
        setIsFallbackMode(Boolean(result.isFallback));
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Direct transmission could not be completed.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Direct transmission failed. Please use the email button below to contact our team directly.');
    }
  };

  const handleOpenMailClient = () => {
    const mailto = buildMailtoUrl(formData);
    window.location.href = mailto;
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      service: 'AI & Generative AI',
      message: '',
    });
    setStatus('idle');
    setErrors({});
    setIsFallbackMode(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F4FCF9]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092D3A] tracking-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have an idea, a challenge, or a project in mind? Let's discuss how technology can help your business move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left Column: Contact Information Cards & Value Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#092D3A] mb-4">
                Partner with Kshirsa's Tech Experts
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Whether you need a dedicated development squad, an AI roadmap, or cloud architecture guidance, we provide transparent consulting and rapid execution.
              </p>

              {/* Contact Information Cards (Updated: No direct phone, official email + Kolkata location) */}
              <div className="space-y-4">
                {/* Official Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-emerald-100 hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-[#006B4F]">
                    <Mail className="w-5 h-5 text-[#00B887]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:contact.kshirsatech@gmail.com"
                      className="text-sm font-semibold text-[#092D3A] hover:text-[#00B887] transition-colors break-all"
                    >
                      contact.kshirsatech@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-[#006B4F]">
                    <MapPin className="w-5 h-5 text-[#00B887]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Headquarters</span>
                    <span className="text-sm font-semibold text-[#092D3A]">
                      Kolkata, West Bengal, India
                    </span>
                  </div>
                </div>

                {/* Resend Powered Indicator */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 text-xs text-[#006B4F]">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Powered by Resend transactional mail services. Fast, secure, and encrypted.</span>
                </div>
              </div>
            </div>

            {/* Response Promise Banner */}
            <div className="p-5 rounded-2xl bg-[#E5F8F2] border border-emerald-200 text-xs text-[#006B4F] leading-relaxed">
              <strong className="font-bold block text-sm text-[#004D3B] mb-1">Our Commitment:</strong>
              All business inquiries receive an initial architecture and project scoping response within 24 business hours under strict confidentiality.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 md:p-10 shadow-card border border-emerald-100 relative">
              {status === 'success' ? (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00B887] flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-[#00B887]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#092D3A] mb-2">Inquiry Prepared!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    {statusMessage}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button onClick={handleOpenMailClient} variant="primary" size="md">
                      Send via Email Client <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                    </Button>
                    <Button onClick={resetForm} variant="secondary" size="md">
                      Send Another Message
                    </Button>
                  </div>
                  {isFallbackMode && (
                    <p className="text-[11px] text-slate-400 mt-4 max-w-sm mx-auto">
                      Tip: To enable direct background sending without client prompt, set your <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">VITE_RESEND_API_KEY</code> in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">.env</code>.
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                      <div>
                        <span>{statusMessage}</span>
                        <button
                          type="button"
                          onClick={handleOpenMailClient}
                          className="block underline font-semibold mt-1"
                        >
                          Click here to open email directly
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50 hover:bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50 hover:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number (Optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                        Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50 hover:bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                        Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#092D3A] mb-1.5 uppercase tracking-wide">
                      Project Description / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project goals, technical requirements, or timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#092D3A] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-y ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50 hover:bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-full bg-[#00B887] text-white font-bold text-sm shadow-button-glow hover:bg-[#009B71] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Dispatching via Resend...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
