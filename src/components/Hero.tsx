import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LotusHeroGraphic } from './LotusBrand';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Lenis from 'lenis';

export const Hero: React.FC = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse parallax on hero graphic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-1, 1], ['-8px', '8px']);
  const parallaxY = useTransform(springY, [-1, 1], ['-6px', '6px']);

  useEffect(() => {
    if (reduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reduced, mouseX, mouseY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-[#E8FAF3] via-[#F4FCF9] to-white"
    >
      {/* Brand color gradient ambient glows & curved wave shapes */}
      <div className="absolute top-0 right-0 -mr-32 -mt-16 w-[620px] h-[620px] bg-gradient-to-br from-[#8EE1C7]/35 via-[#C2EFE1]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-24 w-[480px] h-[480px] bg-gradient-to-tr from-[#00B887]/15 via-[#E5F8F2]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Signature curved ribbon SVG waves for rich brand gradient flow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover opacity-50"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 180 C 320 320, 720 40, 1540 220 L 1540 600 L -100 600 Z"
            fill="url(#brandGrad1)"
          />
          <path
            d="M-50 290 C 380 440, 860 160, 1500 320 L 1500 600 L -50 600 Z"
            fill="url(#brandGrad2)"
          />
          <defs>
            <linearGradient id="brandGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C2EFE1" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#E5F8F2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="brandGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8EE1C7" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#C2EFE1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F4FCF9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dotted grid texture overlay */}
      <div className="absolute inset-0 dot-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small corporate pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/90 shadow-xs mb-4 w-max">
              <span className="w-2 h-2 rounded-full bg-[#00B887] animate-pulse" />
              <span className="text-xs font-bold text-[#006B4F] uppercase tracking-wider">
                Technology Consultancy &bull; Kolkata
              </span>
            </div>

            {/* Main Company Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#092D3A] tracking-tight leading-[1.08] font-display">
              KSHIRSA
              <span className="block mt-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-slate-800">
                TECHNOLOGY SOLUTIONS
              </span>
            </h1>

            {/* Tagline */}
            <div className="mt-4 sm:mt-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#092D3A] tracking-tight leading-tight font-display">
                Simplifying Technology.
                <span className="block gradient-text-emerald-teal">
                  Empowering Businesses.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
              We architect resilient cloud solutions, bespoke AI platforms, and enterprise software systems designed to accelerate your growth and modernize critical operations.
            </p>

            {/* CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-base font-bold shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#092D3A] border-2 border-slate-200 text-base font-bold hover:border-[#00B887] hover:text-[#006B4F] hover:bg-emerald-50/40 transition-all duration-200 active:scale-95"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-8 pt-5 border-t border-emerald-200/60 flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B887]" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B887]" />
                <span>100% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B887]" />
                <span>Senior IT Talent</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic with parallax */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              style={reduced ? {} : { x: parallaxX, y: parallaxY }}
              className="w-full"
            >
              <LotusHeroGraphic />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
