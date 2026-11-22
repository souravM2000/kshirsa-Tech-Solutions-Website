import React, { useState } from 'react';
import { LotusBrand } from './LotusBrand';
import { Mail, Linkedin, Twitter, ArrowUp, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | null>(null);

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'Technologies', href: '/#technologies' },
    { label: 'How We Work', href: '/#process' },
    { label: 'Why Choose Us', href: '/#why-us' },
    { label: 'Industries', href: '/#clients' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-[#002E23] dark:bg-[#040D0A] text-white pt-12 pb-8 border-t border-emerald-900/80 dark:border-emerald-900/40 relative overflow-hidden">
      {/* Large faded brand wordmark watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-[11vw] font-black uppercase tracking-widest text-emerald-950/60 dark:text-emerald-900/30 whitespace-nowrap font-display"
          style={{ userSelect: 'none' }}
        >
          KSHIRSA
        </span>
      </div>

      {/* Top glow line */}
      <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-emerald-900/70 dark:border-emerald-900/40">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <LotusBrand size="md" inverted />
              <p className="mt-4 text-emerald-100/80 text-sm max-w-sm leading-relaxed font-sans">
                Kshirsa Technology Solutions is a technology consultancy and engineering partner delivering resilient Cloud, AI, and scalable enterprise software solutions worldwide.
              </p>
              <div className="mt-3.5 inline-block px-3 py-1 rounded-full bg-[#004D3B] dark:bg-emerald-900/50 text-emerald-300 text-xs font-semibold border border-emerald-700/40 dark:border-emerald-500/20">
                Simplifying Technology. Empowering Businesses.
              </div>
              <div className="mt-3.5 flex items-center gap-2 text-xs text-emerald-300/80">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {[
                { href: 'https://linkedin.com', Icon: Linkedin, label: 'Kshirsa LinkedIn' },
                { href: 'https://twitter.com', Icon: Twitter, label: 'Kshirsa Twitter' },
                { href: 'mailto:contact.kshirsatech@gmail.com', Icon: Mail, label: 'Email Kshirsa' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-full bg-[#004D3B] dark:bg-emerald-900/50 hover:bg-[#00B887] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-emerald-700/30 dark:border-emerald-500/20 hover:border-emerald-500/50"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3.5 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white dark:hover:text-emerald-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3.5 font-display">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              {[
                'AI & Generative AI',
                'Cloud Architecture',
                'Application Engineering',
                'IT Advisory & Strategy',
                'Legacy Modernization',
                '24/7 SLA Maintenance',
              ].map((s) => (
                <li key={s}>
                  <a href="/#services" className="hover:text-white dark:hover:text-emerald-300 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Consultation */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3.5 font-display">
              Get In Touch
            </h4>
            <p className="text-xs text-emerald-100/80 mb-3">
              Ready to start your next technology initiative?
            </p>
            <a
              href="/#contact"
              className="inline-block px-4 py-2 rounded-full bg-[#00B887] text-white text-xs font-bold hover:bg-[#009B71] transition-all shadow-button-glow"
            >
              Request a Consultation
            </a>
            <div className="mt-5 text-xs text-emerald-300/80 space-y-1">
              <span className="block">Email: contact.kshirsatech@gmail.com</span>
              <span className="block">Location: Kolkata, West Bengal, India</span>
              <span className="block mt-1">Hours: Mon - Fri, 9am - 6pm IST</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p>&copy; {currentYear} KSHIRSA TECHNOLOGY SOLUTIONS. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white dark:hover:text-emerald-300 transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <Link
              to="/terms"
              className="hover:text-white dark:hover:text-emerald-300 transition-colors underline cursor-pointer font-semibold text-emerald-300"
            >
              Terms &amp; Conditions
            </Link>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#004D3B] dark:bg-emerald-900/50 hover:bg-[#00B887] text-white flex items-center justify-center transition-colors shadow-button-glow border border-emerald-700/30 dark:border-emerald-500/20"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Accessible Privacy Modal */}
      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm">
          <motion.div
            className="bg-white dark:bg-[#0D1F1A] text-slate-800 dark:text-slate-200 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-emerald-100 dark:border-emerald-900/60"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-[#092D3A] dark:text-white mb-3 font-display">Privacy Policy</h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-3 max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>KSHIRSA TECHNOLOGY SOLUTIONS</strong> (Kolkata, West Bengal, India) respects the privacy of our clients and site visitors.
                Any information submitted through our contact forms is used solely to evaluate technical inquiries, provide project estimates, and facilitate professional communications.
              </p>
              <p>
                We do not sell, rent, or distribute personal or business data to third-party advertisers. All enterprise client IP, proprietary business code, and project details are held in strictest confidence under mutual non-disclosure standards.
              </p>
              <p>
                For official data protection or compliance requests, please reach out to{' '}
                <a href="mailto:contact.kshirsatech@gmail.com" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">
                  contact.kshirsatech@gmail.com
                </a>.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-full bg-[#00B887] text-white text-xs font-bold hover:bg-[#009B71]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
};
