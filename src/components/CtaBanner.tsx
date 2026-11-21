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
    <section className="py-8 sm:py-12 md:py-16 relative bg-[#F8FDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden px-5 py-8 sm:px-10 sm:py-12 md:px-16 md:py-16 text-center border border-emerald-700/50 shadow-card-emerald"
            style={{
              background: 'linear-gradient(135deg, #003628 0%, #004D3B 50%, #00261D 100%)',
            }}
          >
            {/* Ambient glows inside banner */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase bg-emerald-900/60 border border-emerald-500/40 px-3.5 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
                Start Your Digital Transformation
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] pb-1 font-display">
                Let's Build Something Great Together.
              </h2>

              <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
                Whether you need high-velocity software engineering, cloud migration, or enterprise AI advisory, our senior engineers are ready to deliver.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-xs sm:text-base font-bold shadow-button-glow hover:shadow-glow-emerald hover:scale-105 transition-all duration-200 active:scale-95"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:contact.kshirsatech@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/10 text-white border border-emerald-400/40 text-xs sm:text-base font-bold hover:bg-white/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact.kshirsatech@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
