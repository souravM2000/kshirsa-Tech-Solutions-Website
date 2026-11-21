import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LotusHeroGraphic } from './LotusBrand';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowRight } from 'lucide-react';
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
      className="relative pt-24 pb-10 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#E8FAF3] via-[#F4FCF9] to-white"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Elegant category pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-emerald-200/90 shadow-2xs mb-4 sm:mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-[#00B887] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold text-[#006B4F] tracking-wide">
                Enterprise Technology Solutions
              </span>
            </div>

            {/* Main Punchy Value Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-[#092D3A] tracking-tight leading-[1.18] font-display pb-1">
              Simplifying Technology.
              <span className="block mt-1 sm:mt-3 gradient-text-emerald-teal">
                Empowering Businesses.
              </span>
            </h1>

            {/* Clean, spacious description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
              We architect resilient cloud solutions, bespoke AI platforms, and enterprise software systems designed to scale your operations.
            </p>

            {/* Spacious CTAs */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-xs sm:text-base font-bold shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white text-[#092D3A] border border-slate-200 text-xs sm:text-base font-bold hover:border-[#00B887] hover:text-[#006B4F] hover:bg-emerald-50/40 transition-all duration-200 active:scale-95 shadow-2xs"
              >
                Explore Services
              </a>
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
