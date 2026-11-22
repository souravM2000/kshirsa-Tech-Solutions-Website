import React from 'react';
import { TechLogo } from './TechLogos';
import { technologiesData } from '../data/technologies';
import { Reveal } from './Reveal';

export const Technologies: React.FC = () => {
  const row1 = technologiesData.slice(0, 11);
  const row2 = technologiesData.slice(11);

  const loopRow1 = [...row1, ...row1, ...row1];
  const loopRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="technologies" className="py-10 sm:py-14 md:py-18 bg-white dark:bg-[#070F0D] border-y border-emerald-100/50 dark:border-emerald-900/30 relative overflow-hidden">
      {/* Dark mode ambient */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#070F0D] via-[#08130F] to-[#070F0D] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 sm:mb-10 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#00B887] dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Enterprise Architecture &amp; Stack
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight leading-[1.2] pb-1 font-display">
            Built on Industry-Standard Technology
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From resilient cloud infrastructure to advanced AI and full-stack enterprise systems, we engineer solutions designed for scale, security, and long-term durability.
          </p>
        </Reveal>
      </div>

      {/* Sleek Dual Logo Marquees */}
      <div className="space-y-4 marquee-pause relative z-10">
        {/* Track 1: Moving Left */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track flex items-center gap-5">
            {loopRow1.map((tech, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#F8FDFB] dark:bg-[#0D1F1A]/80 border border-slate-100 dark:border-emerald-900/40 hover:border-emerald-200/80 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-[#0D2520] hover:shadow-card dark:hover:shadow-[0_4px_20px_rgba(0,184,135,0.1)] transition-all duration-300 group cursor-default shrink-0 backdrop-blur-sm"
              >
                <span className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <TechLogo id={tech.iconId} size={26} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#092D3A] dark:group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right (reverse) */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-reverse flex items-center gap-5">
            {loopRow2.map((tech, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#F8FDFB] dark:bg-[#0D1F1A]/80 border border-slate-100 dark:border-emerald-900/40 hover:border-emerald-200/80 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-[#0D2520] hover:shadow-card dark:hover:shadow-[0_4px_20px_rgba(0,184,135,0.1)] transition-all duration-300 group cursor-default shrink-0 backdrop-blur-sm"
              >
                <span className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <TechLogo id={tech.iconId} size={26} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#092D3A] dark:group-hover:text-white transition-colors whitespace-nowrap">
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
