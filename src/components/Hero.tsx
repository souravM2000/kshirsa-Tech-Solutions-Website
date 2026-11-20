import React from 'react';
import { Button } from './Button';
import { LotusHeroGraphic } from './LotusBrand';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-mesh-radial"
    >
      {/* Background flowing curved ribbons & soft wave shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-[450px] h-[450px] bg-emerald-50/70 rounded-full blur-2xl pointer-events-none -z-10" />
      
      {/* Curved background SVG ribbons representing the reference design's fluid green waves */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover opacity-35"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C 300 350, 700 50, 1540 250 L 1540 600 L -100 600 Z"
            fill="url(#waveGrad1)"
          />
          <path
            d="M-50 320 C 400 480, 850 180, 1500 360 L 1500 600 L -50 600 Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C2EFE1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F4FCF9" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8EE1C7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E5F8F2" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Tagline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Main Company Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#092D3A] tracking-tight leading-[1.15] uppercase font-sans">
              KSHIRSA
              <span className="block mt-1 font-bold text-2xl sm:text-3xl md:text-4xl text-[#092D3A]">
                TECHNOLOGY SOLUTIONS
              </span>
            </h1>

            {/* Tagline with Emerald Green Highlight */}
            <div className="mt-5 sm:mt-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092D3A] leading-tight">
                Simplifying Technology.
                <span className="block text-[#00B887]">Empowering Businesses.</span>
              </h2>
            </div>

            {/* Short Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              A trusted tech consultancy & services company, delivering innovative and scalable IT solutions for businesses of all sizes.
            </p>

            {/* Two CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Button href="#services" variant="primary" size="lg" showArrow>
                Explore Our Services
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Talk to Our Experts
              </Button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-10 pt-6 border-t border-emerald-100/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Top IT Talent</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lotus Logo showcased with radial aura */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <LotusHeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
