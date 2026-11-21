import React from 'react';
import { Landmark, HeartPulse, Building2, ShoppingCart, Truck, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import { motion } from 'framer-motion';

const industries = [
  {
    name: 'FinTech & Banking',
    icon: <Landmark className="w-5 h-5 text-[#00B887]" />,
    description: 'High-throughput transactional pipelines, secure payment gateways, and regulatory compliance.',
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: <HeartPulse className="w-5 h-5 text-[#00B887]" />,
    description: 'HIPAA-ready clinical data platforms, telemedicine portals, and diagnostic AI models.',
  },
  {
    name: 'Enterprise SaaS',
    icon: <Building2 className="w-5 h-5 text-[#00B887]" />,
    description: 'Multi-tenant cloud architectures, microservices modernization, and automated CI/CD.',
  },
  {
    name: 'E-Commerce & Retail',
    icon: <ShoppingCart className="w-5 h-5 text-[#00B887]" />,
    description: 'Headless storefronts, real-time inventory synchronizers, and personalized recommendation engines.',
  },
  {
    name: 'Logistics & Supply Chain',
    icon: <Truck className="w-5 h-5 text-[#00B887]" />,
    description: 'End-to-end telemetry tracking, fleet route optimizers, and automated warehouse APIs.',
  },
  {
    name: 'EdTech & Learning',
    icon: <GraduationCap className="w-5 h-5 text-[#00B887]" />,
    description: 'Interactive learning platforms, adaptive assessment algorithms, and virtual classroom tools.',
  },
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-8 sm:py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Domain Expertise
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight leading-[1.2] pb-1 font-display">
            Industries We Transform
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600">
            Tailoring modern architectures and engineering discipline to the regulatory and operational demands of mission-critical sectors.
          </p>
        </Reveal>

        {/* 6 Clean Industry Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((ind, i) => (
            <motion.div key={i} variants={staggerItem}>
              <div className="h-full p-6 rounded-2xl bg-[#F8FDFB] border border-slate-100 hover:border-emerald-300 hover:bg-white hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                      {ind.icon}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-[#092D3A] group-hover:text-[#006B4F] transition-colors font-display mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
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
