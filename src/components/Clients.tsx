import React from 'react';
import { Landmark, HeartPulse, Building2, ShoppingCart, Truck, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import { motion } from 'framer-motion';

const industries = [
  {
    name: 'FinTech & Banking',
    icon: <Landmark className="w-5 h-5 text-[#00B887]" />,
    description: 'High-throughput transactional pipelines, secure payment gateways, and regulatory compliance.',
    color: 'from-blue-500/10 to-emerald-500/5 dark:from-blue-500/5 dark:to-emerald-500/5',
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: <HeartPulse className="w-5 h-5 text-[#00B887]" />,
    description: 'HIPAA-ready clinical data platforms, telemedicine portals, and diagnostic AI models.',
    color: 'from-rose-500/10 to-emerald-500/5 dark:from-rose-500/5 dark:to-emerald-500/5',
  },
  {
    name: 'Enterprise SaaS',
    icon: <Building2 className="w-5 h-5 text-[#00B887]" />,
    description: 'Multi-tenant cloud architectures, microservices modernization, and automated CI/CD.',
    color: 'from-violet-500/10 to-emerald-500/5 dark:from-violet-500/5 dark:to-emerald-500/5',
  },
  {
    name: 'E-Commerce & Retail',
    icon: <ShoppingCart className="w-5 h-5 text-[#00B887]" />,
    description: 'Headless storefronts, real-time inventory synchronizers, and personalized recommendation engines.',
    color: 'from-orange-500/10 to-emerald-500/5 dark:from-orange-500/5 dark:to-emerald-500/5',
  },
  {
    name: 'Logistics & Supply Chain',
    icon: <Truck className="w-5 h-5 text-[#00B887]" />,
    description: 'End-to-end telemetry tracking, fleet route optimizers, and automated warehouse APIs.',
    color: 'from-amber-500/10 to-emerald-500/5 dark:from-amber-500/5 dark:to-emerald-500/5',
  },
  {
    name: 'EdTech & Learning',
    icon: <GraduationCap className="w-5 h-5 text-[#00B887]" />,
    description: 'Interactive learning platforms, adaptive assessment algorithms, and virtual classroom tools.',
    color: 'from-teal-500/10 to-emerald-500/5 dark:from-teal-500/5 dark:to-emerald-500/5',
  },
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-10 sm:py-14 md:py-20 bg-white dark:bg-[#070F0D] relative overflow-hidden">
      {/* Dark mode grid */}
      <div className="hidden dark:block absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00B887] dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Domain Expertise
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.2] pb-1 font-display">
            Industries We Transform
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tailoring modern architectures and engineering discipline to the regulatory and operational demands of mission-critical sectors.
          </p>
        </Reveal>

        {/* 6 Clean Industry Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((ind, i) => (
            <motion.div key={i} variants={staggerItem}>
              <div className={`h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${ind.color} bg-[#F8FDFB] dark:bg-[#0D1F1A] border border-slate-100 dark:border-emerald-900/40 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-[#0D2520] hover:shadow-card-hover dark:hover:shadow-[0_16px_40px_rgba(0,184,135,0.1)] transition-all duration-300 group flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-100/60 dark:border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/40 transition-all duration-300">
                      {ind.icon}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#092D3A] dark:text-white group-hover:text-[#006B4F] dark:group-hover:text-emerald-400 transition-colors font-display mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {ind.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
