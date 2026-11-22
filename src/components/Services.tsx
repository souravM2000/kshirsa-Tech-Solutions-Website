import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Code2, Users, Layers, Headphones } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import Lenis from 'lenis';

const renderIcon = (iconName: ServiceItem['iconName']) => {
  const iconClass = 'w-7 h-7 text-[#00B887]';
  switch (iconName) {
    case 'ai': return <Cpu className={iconClass} />;
    case 'cloud': return <Cloud className={iconClass} />;
    case 'appDev': return <Code2 className={iconClass} />;
    case 'consulting': return <Users className={iconClass} />;
    case 'modernization': return <Layers className={iconClass} />;
    case 'support': return <Headphones className={iconClass} />;
    default: return <Code2 className={iconClass} />;
  }
};

const GlowCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className={`glow-card ${className ?? ''}`}>
      {children}
    </div>
  );
};

export const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-14 md:py-20 bg-[#F4FCF9]/80 dark:bg-[#080F0D] relative overflow-hidden">
      {/* Dark mode ambient */}
      <div className="hidden dark:block absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden dark:block absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-bold tracking-widest text-[#00B887] dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.2] pb-1 font-display">
            High-Impact Technology Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            End-to-end technology solutions tailored to accelerate growth, modernize operations, and drive measurable business outcomes.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={staggerItem} className="h-full">
              <GlowCard className="group h-full bg-white dark:bg-[#0D1F1A] rounded-2xl p-6 sm:p-7 shadow-card dark:shadow-none border border-slate-100 dark:border-emerald-900/40 hover:border-emerald-200/80 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-card-hover dark:hover:shadow-[0_16px_40px_-4px_rgba(0,184,135,0.12)] hover:-translate-y-1.5 flex flex-col justify-between cursor-default">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-100/60 dark:border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-[#00B887]/15 dark:group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                    {renderIcon(service.iconName)}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#092D3A] dark:text-white mb-2.5 group-hover:text-[#006B4F] dark:group-hover:text-emerald-400 transition-colors font-display">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 font-sans">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-emerald-900/40 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50/80 dark:bg-emerald-900/30 text-[#006B4F] dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-500/20 group-hover:bg-emerald-100/80 dark:group-hover:bg-emerald-800/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom micro-prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            Need a custom technical capability or dedicated engineering squad?{' '}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-[#00B887] dark:text-emerald-400 hover:text-[#007C5B] dark:hover:text-emerald-300 font-bold underline underline-offset-4 ml-1"
            >
              Discuss your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
