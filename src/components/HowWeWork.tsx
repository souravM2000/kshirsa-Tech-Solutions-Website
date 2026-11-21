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
    <section id="process" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight font-display">
            How We Work
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A battle-tested 4-stage engineering lifecycle designed for speed, predictable milestones, and zero technical debt.
          </p>
        </Reveal>

        {/* 4 Steps Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((item, idx) => (
            <motion.div key={item.step} variants={staggerItem} className="relative group">
              <div className="h-full bg-[#F8FDFB] rounded-2xl p-6 border border-slate-100 hover:border-emerald-300 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-emerald-600/40 font-display group-hover:text-emerald-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#092D3A] font-display">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#006B4F] uppercase tracking-wider block mb-3">
                    {item.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-emerald-100 text-[#006B4F]"
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
            className="inline-flex items-center gap-2 text-sm font-bold text-[#006B4F] hover:text-[#00B887] transition-colors"
          >
            <span>Have questions about our sprint workflow? Let's talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
