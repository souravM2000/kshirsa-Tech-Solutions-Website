import React from 'react';
import { Cpu, Cloud, Code2, Users, Layers, Headphones } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  // Map icon names to Lucide icons
  const renderIcon = (iconName: ServiceItem['iconName']) => {
    const iconClass = 'w-7 h-7 text-[#00B887]';
    switch (iconName) {
      case 'ai':
        return <Cpu className={iconClass} />;
      case 'cloud':
        return <Cloud className={iconClass} />;
      case 'appDev':
        return <Code2 className={iconClass} />;
      case 'consulting':
        return <Users className={iconClass} />;
      case 'modernization':
        return <Layers className={iconClass} />;
      case 'support':
        return <Headphones className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092D3A] tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base text-slate-600">
            End-to-end technology solutions tailored to accelerate growth, modernize operations, and drive real business outcomes.
          </p>
        </div>

        {/* 6 Visual Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-7 shadow-card border border-slate-100 hover:border-emerald-200/80 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with subtle mint hover glow */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center mb-5 group-hover:bg-[#00B887]/10 group-hover:scale-105 transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#092D3A] mb-3 group-hover:text-[#006B4F] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
              </div>

              {/* Highlight Badges / Sub-services */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {service.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-50/70 text-[#006B4F] border border-emerald-100/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
