import React, { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../types';
import { sendContactEmail } from '../services/emailService';
import { Reveal } from './Reveal';

const SuccessState: React.FC<{ message: string; onReset: () => void }> = ({ message, onReset }) => (
  <motion.div
    className="text-center py-10 px-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative w-20 h-20 mx-auto mb-5">
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-900/50"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <svg viewBox="0 0 80 80" className="w-20 h-20 relative z-10">
        <circle cx="40" cy="40" r="36" stroke="#00B887" strokeWidth="4" fill="none" />
        <path
          d="M24 40 L35 51 L56 29"
          stroke="#00B887"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="check-draw"
          style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-[#092D3A] dark:text-white mb-2 font-display">Message Sent!</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">{message}</p>
    <button
      onClick={onReset}
      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00B887] text-white font-bold text-sm shadow-button-glow hover:bg-[#009B71] transition-all"
    >
      Send Another Message
    </button>
  </motion.div>
);

interface FloatingFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  optional?: boolean;
}

const FloatingField: React.FC<FloatingFieldProps> = ({
  id, name, label, type = 'text', value, onChange, error,
  multiline = false, rows = 4, required = false, optional = false,
}) => {
  const baseClass = `w-full px-4 rounded-xl border text-sm text-[#092D3A] dark:text-white bg-white dark:bg-[#0D2520]/60 transition-all duration-200 ${
    error
      ? 'border-red-400 ring-2 ring-red-200 dark:ring-red-500/20'
      : 'border-slate-200 dark:border-emerald-900/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-500/20'
  } focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600`;

  return (
    <div className="floating-label-wrap">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder=" "
          className={`${baseClass} resize-y pt-6 pb-2`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`${baseClass} h-14`}
        />
      )}
      <label htmlFor={id} className="dark:text-slate-400">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
        {optional && <span className="text-slate-400 ml-1 font-normal lowercase">(optional)</span>}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1 text-xs text-red-500 flex items-center gap-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            <AlertCircle className="w-3 h-3" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (formData.phone.trim() && !/^[0-9+\s()-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message);
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Direct transmission could not be completed.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Submission failed. Please email us directly at contact.kshirsatech@gmail.com');
    }
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', companyName: '', service: 'AI & Generative AI', message: '' });
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#F4FCF9]/80 dark:bg-[#080F0D] relative overflow-hidden">
      {/* Dark mode ambient */}
      <div className="hidden dark:block absolute top-0 right-0 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden dark:block absolute bottom-0 left-0 w-72 h-72 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-bold tracking-widest text-[#00B887] dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.2] pb-1 font-display">
            Direct Engineering Inquiry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have a project in mind or need an architectural roadmap? Speak directly with our principal engineers.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact Info */}
          <Reveal direction="left" className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#092D3A] dark:text-white mb-3 font-display">
                Partner with Kshirsa
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                Whether you need dedicated squad augmentation, cloud architecture advisory, or an enterprise AI rollout, we provide transparent consulting and rapid execution.
              </p>

              <div className="space-y-3.5">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D1F1A] shadow-xs border border-emerald-100/80 dark:border-emerald-900/40 hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/40 transition-colors">
                    <Mail className="w-5 h-5 text-[#00B887]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:contact.kshirsatech@gmail.com"
                      className="text-sm font-semibold text-[#092D3A] dark:text-white hover:text-[#00B887] dark:hover:text-emerald-400 transition-colors break-all"
                    >
                      contact.kshirsatech@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D1F1A] shadow-xs border border-emerald-100/80 dark:border-emerald-900/40">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00B887]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Headquarters</span>
                    <span className="text-sm font-semibold text-[#092D3A] dark:text-white">Kolkata, West Bengal, India</span>
                  </div>
                </div>

                {/* Resend info */}
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-500/20 text-xs text-[#006B4F] dark:text-emerald-400">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Powered by Resend transactional mail services. Fast, secure, and encrypted.</span>
                </div>
              </div>
            </div>

            {/* Commitment badge */}
            <div className="p-4 rounded-2xl bg-[#E5F8F2] dark:bg-emerald-900/20 border border-emerald-200/90 dark:border-emerald-500/20 text-xs text-[#006B4F] dark:text-emerald-400 leading-relaxed">
              <strong className="font-bold block text-sm text-[#004D3B] dark:text-emerald-300 mb-1">Our Commitment:</strong>
              All technical inquiries receive an initial architecture and scoping response within 24 business hours under strict confidentiality.
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal direction="right" className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0D1F1A] rounded-3xl p-5 sm:p-7 md:p-9 shadow-card dark:shadow-none border border-emerald-100 dark:border-emerald-900/40 relative overflow-hidden">
              {/* Dark mode glow top */}
              <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent rounded-full" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <SuccessState key="success" message={statusMessage} onReset={resetForm} />
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          className="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-xs text-red-700 dark:text-red-400 flex items-start gap-2.5"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                          <span>{statusMessage}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingField
                        id="fullName" name="fullName" label="Full Name"
                        value={formData.fullName} onChange={handleChange}
                        error={errors.fullName} required
                      />
                      <FloatingField
                        id="email" name="email" label="Business Email" type="email"
                        value={formData.email} onChange={handleChange}
                        error={errors.email} required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingField
                        id="phone" name="phone" label="Phone Number" type="tel"
                        value={formData.phone} onChange={handleChange}
                        error={errors.phone} optional
                      />
                      <FloatingField
                        id="companyName" name="companyName" label="Company Name"
                        value={formData.companyName} onChange={handleChange}
                        optional
                      />
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="service" className="block text-xs font-bold text-[#092D3A] dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Service Interested In
                      </label>
                      <select
                        id="service" name="service"
                        value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-emerald-900/60 bg-white dark:bg-[#0D2520]/60 text-sm text-[#092D3A] dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-500/20 transition-all"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>

                    <FloatingField
                      id="message" name="message" label="Project Description / Requirements"
                      value={formData.message} onChange={handleChange}
                      error={errors.message} multiline rows={4} required
                    />

                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white font-bold text-sm shadow-button-glow hover:shadow-glow-emerald transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                        whileHover={status !== 'submitting' ? { scale: 1.01 } : {}}
                        whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
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
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
