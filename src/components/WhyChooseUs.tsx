import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { TechLaptopGraphic } from './TechLaptopGraphic';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    'Experienced Developers & Tech Architects',
    'End-to-End IT Services & Solutions',
    'Agile & Collaborative Approach',
    'Focus on Quality, Performance & Scalability',
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Differentiators & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Small uppercase heading */}
            <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase mb-3 inline-block">
              WHY CHOOSE KSHIRSA?
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight leading-tight">
              Your Strategic Technology Partner
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From idea to execution, we help you leverage technology to innovate, grow and stay ahead.
            </p>

            {/* 4 Key Differentiators with Emerald Checkmarks */}
            <div className="mt-8 space-y-4">
              {differentiators.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#00B887]">
                    <CheckCircle2 className="w-4 h-4 text-[#00B887]" />
                  </div>
                  <span className="text-base font-semibold text-[#092D3A] group-hover:text-[#006B4F] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Button href="#contact" variant="primary" size="lg" showArrow>
                Let's Build Together
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Laptop with Cloud & Floating Badges */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <TechLaptopGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
