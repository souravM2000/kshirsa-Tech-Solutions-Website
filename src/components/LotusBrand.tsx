import React from 'react';

interface LotusBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  inverted?: boolean;
}

export const LotusBrand: React.FC<LotusBrandProps> = ({
  className = '',
  size = 'md',
  showText = true,
  inverted = false,
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    hero: 'w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80',
  };

  const textStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    hero: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Lotus Emblem representation matching the original logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <img
          src="/kshirsa-logo.jpg"
          alt="Kshirsa Logo"
          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-black tracking-wider uppercase font-sans ${textStyles[size]} ${
              inverted ? 'text-white' : 'text-[#092D3A]'
            }`}
          >
            KSHIRSA
          </span>
          <span
            className={`font-semibold tracking-widest text-[9px] md:text-[10px] uppercase ${
              inverted ? 'text-emerald-300' : 'text-[#006B4F]'
            }`}
          >
            TECHNOLOGY SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};

export const LotusHeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center mx-auto">
      {/* Outer ambient glowing rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200/40 via-emerald-100/30 to-transparent blur-3xl animate-pulse-glow" />
      
      {/* Decorative concentric soft rings matching the reference */}
      <div className="absolute w-[95%] h-[95%] rounded-full border border-emerald-300/40 pointer-events-none" />
      <div className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-emerald-400/30 pointer-events-none" />
      <div className="absolute w-[70%] h-[70%] rounded-full bg-emerald-50/60 backdrop-blur-sm shadow-inner pointer-events-none" />

      {/* Floating subtle tech badges around lotus */}
      <div className="absolute top-4 right-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-card border border-emerald-100 flex items-center gap-2 animate-float-slow text-xs font-semibold text-emerald-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        AI & Cloud Native
      </div>

      <div className="absolute bottom-10 left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-card border border-emerald-100 flex items-center gap-2 animate-float-slow text-xs font-semibold text-[#092D3A]" style={{ animationDelay: '2s' }}>
        <span className="w-2 h-2 rounded-full bg-[#006B4F]" />
        Scalable Architecture
      </div>

      {/* Main Lotus Image from root */}
      <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center p-6 filter drop-shadow-[0_20px_35px_rgba(0,184,135,0.22)]">
        <img
          src="/kshirsa-logo.jpg"
          alt="Kshirsa Technology Solutions Lotus"
          className="w-full h-full object-contain max-h-[380px] hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );
};
