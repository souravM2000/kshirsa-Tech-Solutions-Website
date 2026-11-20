import React, { useState } from 'react';
import { LotusBrand } from './LotusBrand';
import { Mail, Linkedin, Twitter, ArrowUp, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004D3B] text-white pt-16 pb-12 border-t border-emerald-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/80">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <LotusBrand size="md" inverted />
              <p className="mt-4 text-emerald-100/90 text-sm max-w-sm leading-relaxed">
                Kshirsa Technology Solutions is a technology consultancy and IT services company providing modern, scalable, and innovative technology solutions to businesses worldwide.
              </p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full bg-[#006B4F] text-emerald-200 text-xs font-semibold">
                Simplifying Technology. Empowering Businesses.
              </div>

              {/* Location Badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-200/90">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#006B4F] hover:bg-[#00B887] text-white flex items-center justify-center transition-colors"
                aria-label="Kshirsa LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#006B4F] hover:bg-[#00B887] text-white flex items-center justify-center transition-colors"
                aria-label="Kshirsa Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact.kshirsatech@gmail.com"
                className="w-9 h-9 rounded-full bg-[#006B4F] hover:bg-[#00B887] text-white flex items-center justify-center transition-colors"
                aria-label="Email Kshirsa"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/80">
              <li>
                <a href="/#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/#technologies" className="hover:text-white transition-colors">Technologies</a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="/#clients" className="hover:text-white transition-colors">Clients</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/80">
              <li>
                <a href="/#services" className="hover:text-white transition-colors">AI & Generative AI</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Cloud Solutions</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Application Development</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">IT Consulting & Advisory</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Modernization & Migration</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Maintenance & Support</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-4">
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

            <div className="mt-6 text-xs text-emerald-200/80 space-y-1">
              <span className="block">Email: contact.kshirsatech@gmail.com</span>
              <span className="block">Location: Kolkata, West Bengal, India</span>
              <span className="block mt-1">Hours: Mon - Fri, 9am - 6pm</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80">
          <p>
            &copy; {currentYear} KSHIRSA TECHNOLOGY SOLUTIONS. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <Link
              to="/terms"
              className="hover:text-white transition-colors underline cursor-pointer font-semibold text-emerald-300 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#006B4F] text-emerald-200 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Privacy Modal */}
      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-emerald-100">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#092D3A] mb-3">
              Privacy Policy
            </h3>
            <div className="text-xs text-slate-600 space-y-3 max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>KSHIRSA TECHNOLOGY SOLUTIONS</strong> (Kolkata, West Bengal, India) respects the privacy of our clients and site visitors.
                Any information submitted through our contact forms is used solely to evaluate technical inquiries, provide project estimates, and facilitate professional communications.
              </p>
              <p>
                We do not sell, rent, or distribute personal or business data to third-party advertisers. All enterprise client IP, proprietary business code, and project details are held in strictest confidence under mutual non-disclosure standards.
              </p>
              <p>
                For official data protection or compliance requests, please reach out to{' '}
                <a href="mailto:contact.kshirsatech@gmail.com" className="text-emerald-600 font-semibold underline">
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
          </div>
        </div>
      )}
    </footer>
  );
};
