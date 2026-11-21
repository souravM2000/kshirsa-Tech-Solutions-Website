import React from 'react';
import { TechLogo } from './TechLogos';

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 md:py-24 bg-gradient-to-b from-[#F4FCF9]/50 via-white to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00B887] uppercase bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Modern Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092D3A] tracking-tight">
            Our Technology Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We engineer enterprise-grade solutions using battle-tested frameworks, modern cloud architectures, and cutting-edge AI technologies.
          </p>
        </div>

        {/* Primary Visual Logo Strip */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-emerald-100/70">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-9 py-2">
            {/* Java */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="java" size={28} />
              <span className="text-sm font-bold text-[#E76F00]">Java</span>
            </div>

            {/* Spring Boot */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="springboot" size={28} />
              <span className="text-sm font-bold text-[#6DB33F] leading-tight">Spring<br/><span className="text-xs font-normal">Boot</span></span>
            </div>

            {/* .NET */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="dotnet" size={28} />
              <span className="text-sm font-bold text-[#512BD4]">.NET</span>
            </div>

            {/* C# */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="csharp" size={28} />
              <span className="text-sm font-bold text-[#9B4F96]">C#</span>
            </div>

            {/* React */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="react" size={28} />
              <span className="text-sm font-bold text-[#087ea4]">React</span>
            </div>

            {/* Next.js */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="nextjs" size={28} />
              <span className="text-sm font-bold text-black">NEXT<span className="text-xs">.js</span></span>
            </div>

            {/* NestJS */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="nestjs" size={28} />
              <span className="text-sm font-bold text-[#E0234E]">NestJS</span>
            </div>

            {/* Angular */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="angular" size={28} />
              <span className="text-sm font-bold text-[#DD0031]">Angular</span>
            </div>

            {/* Ionic */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="ionic" size={28} />
              <span className="text-sm font-bold text-[#3880FF]">Ionic</span>
            </div>

            {/* React Native */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors">
              <TechLogo id="reactnative" size={28} />
              <span className="text-sm font-bold text-[#087ea4] leading-tight">React<br/><span className="text-xs font-normal">Native</span></span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px h-10 bg-slate-200 mx-2" />

            {/* Cloud Group */}
            <div className="flex items-center gap-5">
              <div title="AWS" className="hover:scale-105 transition-transform">
                <TechLogo id="aws" size={32} />
              </div>
              <div title="Microsoft Azure" className="hover:scale-105 transition-transform">
                <TechLogo id="azure" size={30} />
              </div>
              <div title="Google Cloud" className="hover:scale-105 transition-transform">
                <TechLogo id="gcp" size={30} />
              </div>
            </div>
          </div>

          {/* Subtitle tag below reference strip */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
            <span>+ Python</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>JavaScript</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>TypeScript</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>LLMs & AI Agents</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>and more...</span>
          </div>
        </div>
      </div>
    </section>
  );
};
