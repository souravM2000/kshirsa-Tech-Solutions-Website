import React from 'react';
import { Cpu, Cloud, Code2, BarChart3, ArrowUp } from 'lucide-react';

export const TechLaptopGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center mx-auto">
      {/* Background soft glowing green aura & elliptical ground */}
      <div className="absolute inset-x-4 bottom-4 h-32 bg-gradient-to-t from-emerald-300/40 via-emerald-200/20 to-transparent rounded-[100%] blur-2xl -z-10" />
      <div className="absolute bottom-6 w-3/4 h-8 bg-emerald-400/25 rounded-[100%] blur-md -z-10" />

      {/* Floating Badge 1: AI Chip (Top Left) */}
      <div
        className="absolute top-6 left-6 md:top-10 md:left-8 bg-white/95 backdrop-blur-md px-3.5 py-3 rounded-2xl shadow-card border border-emerald-100/80 flex items-center gap-2.5 animate-float-slow z-20"
        style={{ animationDuration: '5s' }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-[#006B4F]">
          <Cpu className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider block">Cognitive</span>
          <span className="text-xs font-bold text-[#092D3A]">AI Models</span>
        </div>
      </div>

      {/* Floating Badge 2: Cloud Sync (Top Middle) */}
      <div
        className="absolute -top-2 md:top-2 right-1/3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-card border border-emerald-100/80 flex items-center gap-2 animate-float-slow z-20"
        style={{ animationDuration: '6.5s', animationDelay: '1s' }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
          <Cloud className="w-5 h-5 text-[#00B887]" />
        </div>
        <span className="text-xs font-bold text-[#092D3A] pr-1">Multi-Cloud</span>
      </div>

      {/* Floating Badge 3: Code Brackets (Center Left) */}
      <div
        className="absolute bottom-16 -left-2 md:left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-card border border-emerald-100/80 flex items-center gap-2.5 animate-float-slow z-20"
        style={{ animationDuration: '5.8s', animationDelay: '2s' }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-[#006B4F]">
          <Code2 className="w-5 h-5 text-[#006B4F]" />
        </div>
        <div>
          <span className="text-xs font-bold text-[#092D3A]">Clean Code</span>
          <span className="text-[10px] text-slate-500 block">Modern Stack</span>
        </div>
      </div>

      {/* Floating Badge 4: Analytics (Top Right) */}
      <div
        className="absolute top-12 right-2 md:right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-card border border-emerald-100/80 flex items-center gap-2 animate-float-slow z-20"
        style={{ animationDuration: '6s', animationDelay: '1.5s' }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
          <BarChart3 className="w-5 h-5 text-[#009B71]" />
        </div>
        <span className="text-xs font-bold text-[#092D3A]">High Scalability</span>
      </div>

      {/* High-Fidelity 3D-Styled Laptop Mockup with Illuminated Neon Cloud Display */}
      <div className="relative z-10 w-[88%] max-w-[440px] transition-transform duration-500 hover:scale-[1.02]">
        {/* Laptop Screen Bezel */}
        <div className="relative bg-[#0d1f27] p-2.5 md:p-3 rounded-t-2xl shadow-2xl border-t border-x border-slate-700">
          {/* Web camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-600" />

          {/* Screen Content */}
          <div className="relative bg-gradient-to-b from-[#061e24] via-[#092830] to-[#041419] rounded-lg h-52 md:h-60 overflow-hidden flex flex-col items-center justify-center border border-emerald-900/40">
            {/* Subtle background grid on screen */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(#00B887 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Glowing Neon Cloud Interface matching the reference design */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Outer neon halo */}
              <div className="absolute w-36 h-36 rounded-full bg-emerald-400/20 blur-xl animate-pulse" />

              {/* Holographic Cloud Icon with Upward Arrow */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg viewBox="0 0 120 100" className="w-24 h-24 filter drop-shadow-[0_0_15px_#00B887]" fill="none">
                  <path
                    d="M30 75C21 75 14 68 14 59C14 51.5 19 45 26.5 43.5C28.5 28 41.5 16 57 16C70 16 81.5 24.5 85.5 37C94.5 38 102 45.5 102 55C102 66 93 75 82 75H30Z"
                    stroke="#00B887"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    fill="rgba(0, 184, 135, 0.15)"
                  />
                  {/* Arrow up inside cloud */}
                  <path
                    d="M58 64V38M58 38L47 49M58 38L69 49"
                    stroke="#50E6FF"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Status bar under cloud */}
              <div className="mt-1 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B887] animate-ping" />
                <span className="text-[10px] font-mono text-emerald-300">CLOUD ARCHITECTURE ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Base / Keyboard Body */}
        <div className="relative h-4.5 bg-gradient-to-b from-[#8FA0A8] to-[#59666E] rounded-b-xl shadow-xl flex items-center justify-center border-t border-slate-400">
          {/* Thumb groove */}
          <div className="w-16 h-1 bg-[#475258] rounded-b-md" />
        </div>
      </div>
    </div>
  );
};
