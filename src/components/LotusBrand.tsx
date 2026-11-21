import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ShieldCheck, Sparkles } from 'lucide-react';

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
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    hero: 'w-48 h-48 md:w-60 md:h-60',
  };

  const textStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    hero: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <img
          src="/kshirsa-logo.jpg"
          alt="Kshirsa Technology Solutions Logo"
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-300 hover:scale-105"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-black tracking-wider uppercase font-display ${textStyles[size]} ${
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
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center mx-auto">
      {/* Radiant ambient glow */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,184,135,0.28) 0%, rgba(78,203,171,0.12) 50%, transparent 70%)',
        }}
        animate={reduced ? {} : { scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glass Showcase Card */}
      <div className="relative z-10 w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center bg-white/70 backdrop-blur-xl border border-emerald-200/70 shadow-card-emerald">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 rounded-3xl dot-grid opacity-25 pointer-events-none" />

        {/* Top subtle badge */}
        <div className="relative z-10 mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-[#006B4F]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Innovate &bull; Modernize &bull; Scale</span>
        </div>

        {/* Center Logo with float */}
        <motion.div
          className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center"
          animate={reduced ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/kshirsa-logo.jpg"
            alt="Kshirsa Official Brand Emblem"
            loading="lazy"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,184,135,0.25)]"
          />
        </motion.div>

        {/* Bottom trust tag */}
        <div className="relative z-10 mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/90 px-4 py-2 rounded-xl border border-slate-100 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Enterprise Consulting &bull; Kolkata, India</span>
        </div>
      </div>
    </div>
  );
};
