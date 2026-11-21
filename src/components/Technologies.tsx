import React from 'react';
import { TechLogo } from './TechLogos';
import { technologiesData } from '../data/technologies';
import { Reveal } from './Reveal';

export const Technologies: React.FC = () => {
  // Split into two balanced tracks for a sleek dual-direction or dual-row enterprise logo stream
  const row1 = technologiesData.slice(0, 11);
  const row2 = technologiesData.slice(11);

  const loopRow1 = [...row1, ...row1, ...row1];
  const loopRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="technologies" className="py-8 sm:py-12 md:py-16 bg-white border-y border-emerald-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Enterprise Architecture &amp; Stack
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight leading-[1.2] pb-1 font-display">
            Built on Industry-Standard Technology
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
            From resilient cloud infrastructure to advanced AI and full-stack enterprise systems, we engineer solutions designed for scale, security, and long-term durability.
          </p>
        </Reveal>
      </div>

      {/* Sleek Dual Logo Marquees */}
      <div className="space-y-4 marquee-pause">
        {/* Track 1: Moving Left */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track flex items-center gap-6">
            {loopRow1.map((tech, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8FDFB] border border-slate-100 hover:border-emerald-200/80 hover:bg-white hover:shadow-card transition-all duration-300 group cursor-default shrink-0"
              >
                <span className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <TechLogo id={tech.iconId} size={28} />
                </span>
                <span className="text-sm font-bold text-slate-600 group-hover:text-[#092D3A] transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right (reverse) */}
        <div className="overflow-hidden py-1">
          <div className="flex items-center gap-6 animate-marquee-reverse">
            {loopRow2.map((tech, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8FDFB] border border-slate-100 hover:border-emerald-200/80 hover:bg-white hover:shadow-card transition-all duration-300 group cursor-default shrink-0"
              >
                <span className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <TechLogo id={tech.iconId} size={28} />
                </span>
                <span className="text-sm font-bold text-slate-600 group-hover:text-[#092D3A] transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
