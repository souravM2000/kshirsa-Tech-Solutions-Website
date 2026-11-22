import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import Lenis from 'lenis';

export const CtaBanner: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 sm:py-14 md:py-18 relative bg-[#F8FDFB] dark:bg-[#070F0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 text-center border border-emerald-700/50 dark:border-emerald-500/20 shadow-card-emerald dark-noise"
            style={{
              background: 'linear-gradient(135deg, #003628 0%, #004D3B 50%, #00261D 100%)',
            }}
          >
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/8 rounded-full blur-2xl" />
            </div>

            {/* Grid overlay for GenZ effect */}
            <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase bg-emerald-900/60 border border-emerald-500/40 px-3.5 py-1.5 rounded-full inline-block mb-4 sm:mb-5">
                Start Your Digital Transformation
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] pb-1 font-display">
                Let's Build Something{' '}
                <span className="gradient-text-emerald-teal">Great Together.</span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-emerald-100/85 max-w-2xl mx-auto leading-relaxed">
                Whether you need high-velocity software engineering, cloud migration, or enterprise AI advisory, our senior engineers are ready to deliver.
              </p>

              {/* CTAs */}
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-sm sm:text-base font-bold shadow-button-glow hover:shadow-glow-emerald hover:scale-105 transition-all duration-200 active:scale-95 group"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="mailto:contact.kshirsatech@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/10 text-white border border-emerald-400/40 text-sm sm:text-base font-bold hover:bg-white/20 hover:border-emerald-400/60 transition-all duration-200 backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all sm:break-normal text-sm">contact.kshirsatech@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
