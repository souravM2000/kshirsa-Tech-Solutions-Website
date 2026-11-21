import React, { useRef } from 'react';
import { Users, Trophy, Rocket, Handshake } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { HighlightStat } from '../types';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const stats: HighlightStat[] = [
  {
    value: '25+',
    numberValue: 25,
    suffix: '+',
    title: 'Happy Clients',
    description: 'Global enterprises and ambitious tech ventures',
    icon: 'users',
  },
  {
    value: 'Top Tier',
    numberValue: 100,
    suffix: '%',
    title: 'Expert Developers',
    description: 'From Top IT Companies',
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
  const cls = 'w-5 h-5 text-emerald-300';
  switch (type) {
    case 'users': return <Users className={cls} />;
    case 'trophy': return <Trophy className={cls} />;
    case 'rocket': return <Rocket className={cls} />;
    case 'handshake': return <Handshake className={cls} />;
  }
};

interface StatCardProps {
  stat: HighlightStat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  const isCountable = stat.value === '25+' || stat.value === '100%';

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="flex flex-col items-center text-center px-4 py-8 group"
    >
      {/* Icon Pill */}
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-emerald-400/20 flex items-center justify-center mb-4 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
        {renderIcon(stat.icon)}
      </div>

      {/* Primary Value */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2 font-display">
        {isCountable && inView && !reduced ? (
          <CountUp
            start={0}
            end={stat.numberValue}
            duration={2}
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          <span>{stat.value}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-white tracking-tight">{stat.title}</h3>

      {/* Description */}
      <p className="text-xs text-emerald-200/80 mt-1 max-w-[200px] leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-6 md:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden shadow-card-emerald border border-emerald-800/60"
            style={{
              background: 'linear-gradient(135deg, #004D3B 0%, #006047 45%, #003628 100%)',
            }}
          >
            {/* Ambient inner soft glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-80 h-40 bg-emerald-400/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-teal-400/15 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-emerald-700/50"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
