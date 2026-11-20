import React from 'react';
import { Users, Trophy, Rocket, Handshake } from 'lucide-react';
import { HighlightStat } from '../types';

export const Stats: React.FC = () => {
  const stats: HighlightStat[] = [
    {
      value: '25+',
      numberValue: 25,
      suffix: '+',
      title: '25+ Happy Clients',
      description: 'Global enterprises and ambitious tech ventures',
      icon: 'users',
    },
    {
      value: 'Top Tier',
      numberValue: 100,
      suffix: '%',
      title: 'Expert Developers',
      description: 'from Top IT Companies',
      icon: 'trophy',
    },
    {
      value: '100%',
      numberValue: 100,
      suffix: '%',
      title: 'On-Time Delivery',
      description: '& Proven Results',
      icon: 'rocket',
    },
    {
      value: 'Enduring',
      numberValue: 98,
      suffix: '%',
      title: 'Long-Term',
      description: 'Client Partnerships',
      icon: 'handshake',
    },
  ];

  const renderIcon = (type: HighlightStat['icon']) => {
    const iconClass = 'w-6 h-6 text-[#006B4F]';
    switch (type) {
      case 'users':
        return <Users className={iconClass} />;
      case 'trophy':
        return <Trophy className={iconClass} />;
      case 'rocket':
        return <Rocket className={iconClass} />;
      case 'handshake':
        return <Handshake className={iconClass} />;
    }
  };

  return (
    <section className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal mint-tinted banner matching reference image */}
        <div className="bg-[#E5F8F2] rounded-3xl p-6 md:p-8 border border-emerald-200/70 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200/60">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                } group`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {renderIcon(stat.icon)}
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#092D3A] leading-tight">
                    {stat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#006B4F] font-medium mt-0.5">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
