import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import Lenis from 'lenis';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export const HowWeWork: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Architecture & Scoping',
      description: 'We audit your technical landscape, understand business drivers, and establish clear architectural milestones and success metrics.',
      icon: <Compass className="w-6 h-6 text-[#00B887]" />,
      deliverables: ['Tech Stack Audit', 'Scope & Estimation', 'Risk Assessment'],
    },
    {
      step: '02',
      title: 'Design',
      subtitle: 'System Blueprint',
      description: 'Our architects construct resilient cloud blueprints, database schemas, API contracts, and intuitive UX flows designed for scale.',
      icon: <Palette className="w-6 h-6 text-[#00B887]" />,
      deliverables: ['Cloud Architecture', 'API Specifications', 'UX Wireframes'],
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Agile Engineering',
      description: 'Senior developers execute rapid, transparent bi-weekly sprints with automated CI/CD pipelines, test coverage, and weekly demos.',
      icon: <Code2 className="w-6 h-6 text-[#00B887]" />,
      deliverables: ['Clean TypeScript / Java / .NET', 'Automated CI/CD', 'Weekly Demos'],
    },
    {
      step: '04',
      title: 'Scale',
      subtitle: 'Launch & Evolution',
      description: 'We orchestrate zero-downtime deployment, telemetry monitoring, and proactive SLA-backed support to scale alongside your user growth.',
      icon: <Rocket className="w-6 h-6 text-[#00B887]" />,
      deliverables: ['Production Release', '24/7 Telemetry', 'SLA Engineering'],
    },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-14 md:py-20 bg-white dark:bg-[#070F0D] relative overflow-hidden">
      {/* Dark mode grid pattern */}
      <div className="hidden dark:block absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-bold tracking-widest text-[#00B887] dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.2] pb-1 font-display">
            How We Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A battle-tested 4-stage engineering lifecycle designed for speed, predictable milestones, and zero technical debt.
          </p>
        </Reveal>

        {/* 4 Steps Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((item, idx) => (
            <motion.div key={item.step} variants={staggerItem} className="relative group">
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-6 h-0.5 bg-gradient-to-r from-emerald-300/60 dark:from-emerald-500/30 to-transparent z-20" />
              )}

              <div className="h-full bg-[#F8FDFB] dark:bg-[#0D1F1A] rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-emerald-900/40 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-[#0D2520] hover:shadow-card-hover dark:hover:shadow-[0_16px_40px_-4px_rgba(0,184,135,0.12)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600/35 dark:text-emerald-500/40 font-display group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-100/60 dark:border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/40 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#092D3A] dark:text-white font-display">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#006B4F] dark:text-emerald-400 uppercase tracking-wider block mb-3">
                    {item.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-emerald-900/40">
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-500/20 text-[#006B4F] dark:text-emerald-400"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA link below timeline */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#006B4F] dark:text-emerald-400 hover:text-[#00B887] dark:hover:text-emerald-300 transition-colors group"
          >
            <span>Have questions about our sprint workflow? Let's talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
