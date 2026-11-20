import React from 'react';
import { Button } from './Button';
import { Building2, Landmark, HeartPulse, ShoppingCart, Truck, GraduationCap } from 'lucide-react';

export const Clients: React.FC = () => {
  const industries = [
    { name: 'FinTech & Banking', icon: <Landmark className="w-4 h-4 text-[#006B4F]" /> },
    { name: 'Healthcare & Life Sciences', icon: <HeartPulse className="w-4 h-4 text-[#006B4F]" /> },
    { name: 'Enterprise SaaS', icon: <Building2 className="w-4 h-4 text-[#006B4F]" /> },
    { name: 'E-Commerce & Retail', icon: <ShoppingCart className="w-4 h-4 text-[#006B4F]" /> },
    { name: 'Logistics & Supply Chain', icon: <Truck className="w-4 h-4 text-[#006B4F]" /> },
    { name: 'EdTech & Learning', icon: <GraduationCap className="w-4 h-4 text-[#006B4F]" /> },
  ];

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wide Mint Banner Matching Reference Design */}
        <div className="bg-[#E5F8F2] rounded-3xl p-8 md:p-12 border border-emerald-200/80 shadow-sm relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            {/* Left side: Heading & Description */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092D3A] tracking-tight">
                Trusted by 25+ Businesses
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium">
                Across industries, we help clients turn ideas into impactful solutions.
              </p>
            </div>

            {/* Vertical Divider for desktop */}
            <div className="hidden lg:block h-16 w-px bg-emerald-300/60" />

            {/* Right side: Action CTA */}
            <div className="shrink-0">
              <Button href="#contact" variant="primary" size="lg" showArrow>
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Industry Verticals Bar (Future client logos can be seamlessly dropped here) */}
          <div className="mt-8 pt-6 border-t border-emerald-200/70">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B4F] block mb-3">
              Industries We Empower
            </span>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-emerald-100 text-xs font-semibold text-[#092D3A] shadow-2xs hover:bg-white transition-colors"
                >
                  {ind.icon}
                  <span>{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
