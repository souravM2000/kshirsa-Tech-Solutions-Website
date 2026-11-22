import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LotusHeroGraphic } from './LotusBrand';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Lenis from 'lenis';

export const Hero: React.FC = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden
        bg-gradient-to-b from-[#E8FAF3] via-[#F4FCF9] to-white
        dark:from-[#071511] dark:via-[#09181382] dark:to-[#070F0D]"
    >
      {/* Brand ambient glows */}
      <div className="absolute top-0 right-0 -mr-32 -mt-16 w-[520px] h-[520px] bg-gradient-to-br from-[#8EE1C7]/30 via-[#C2EFE1]/20 to-transparent dark:from-emerald-500/10 dark:via-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-24 w-[400px] h-[400px] bg-gradient-to-tr from-[#00B887]/12 via-[#E5F8F2]/50 to-transparent dark:from-emerald-600/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Dark mode extra glow spots */}
      <div className="hidden dark:block absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* SVG wave ribbons */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg viewBox="0 0 1440 600" className="w-full h-full object-cover opacity-50 dark:opacity-20" fill="none" preserveAspectRatio="none">
          <path d="M-100 180 C 320 320, 720 40, 1540 220 L 1540 600 L -100 600 Z" fill="url(#brandGrad1)" />
          <path d="M-50 290 C 380 440, 860 160, 1500 320 L 1500 600 L -50 600 Z" fill="url(#brandGrad2)" />
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

      {/* Dotted grid */}
      <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 dark:bg-emerald-900/40 border border-emerald-200/90 dark:border-emerald-500/30 shadow-sm mb-5 sm:mb-7 w-max backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#00B887] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#006B4F] dark:text-emerald-300 tracking-wide uppercase">
                Enterprise Technology Solutions
              </span>
              <Sparkles className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.15] font-display pb-1"
            >
              Simplifying Technology.
              <span className="block mt-1 sm:mt-3 gradient-text-emerald-teal">
                Empowering Businesses.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-sans"
            >
              We architect resilient cloud solutions, bespoke AI platforms, and enterprise software systems designed to scale your operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-sm sm:text-base font-bold shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white dark:bg-white/5 dark:backdrop-blur-sm text-[#092D3A] dark:text-white border border-slate-200 dark:border-white/10 text-sm sm:text-base font-bold hover:border-[#00B887] dark:hover:border-emerald-500/50 hover:text-[#006B4F] dark:hover:text-emerald-300 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 transition-all duration-200 active:scale-95 shadow-sm"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-8"
            >
              {[
                { label: 'Happy Clients', value: '25+' },
                { label: 'On-Time Delivery', value: '100%' },
                { label: 'SLA Uptime', value: '99.9%' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#092D3A] dark:text-white font-display gradient-text-emerald-teal">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Graphic with parallax */}
          <div className="lg:col-span-5 flex items-center justify-center mt-4 lg:mt-0">
            <motion.div
              style={reduced ? {} : { x: parallaxX, y: parallaxY }}
              className="w-full max-w-[300px] sm:max-w-sm lg:max-w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <LotusHeroGraphic />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
