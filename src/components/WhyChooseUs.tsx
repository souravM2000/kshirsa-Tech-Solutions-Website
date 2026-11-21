import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users2, TrendingUp, ArrowRight } from 'lucide-react';
import { TechLaptopGraphic } from './TechLaptopGraphic';
import { Reveal } from './Reveal';
import Lenis from 'lenis';

const differentiators = [
  {
    icon: <Users2 className="w-5 h-5 text-emerald-600" />,
    title: 'Senior Engineering Leadership',
    desc: 'Battle-tested tech architects and principal developers from premier IT enterprises.',
  },
  {
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    title: 'End-to-End Delivery Ownership',
    desc: 'From initial architecture blueprints to deployment and 24/7 SLA operations.',
  },
  {
    icon: <Shield className="w-5 h-5 text-emerald-600" />,
    title: 'Security & Zero Technical Debt',
    desc: 'Strict code reviews, OWASP compliance, and clean modular code that stands the test of time.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    title: 'Agile Velocity & Predictable Timelines',
    desc: 'Transparent sprints, weekly staging demos, and guaranteed 100% on-time milestone delivery.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const WhyChooseUs: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="py-8 sm:py-12 md:py-16 relative bg-[#F4FCF9]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* Left Column: Differentiators */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Why Partner With Kshirsa
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight leading-[1.2] pb-1 font-display">
                Your Strategic Technology Partner
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed font-sans">
                We combine deep technical mastery with business acumen to build software that drives compounding enterprise value.
              </p>
            </Reveal>

            {/* List */}
            <div className="mt-6 space-y-3">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100/90 shadow-card hover:border-emerald-200 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#092D3A] group-hover:text-[#006B4F] transition-colors font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white font-bold text-sm shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95 group"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <Reveal direction="right" className="w-full">
              <TechLaptopGraphic />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
