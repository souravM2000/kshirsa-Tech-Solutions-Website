import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ShieldCheck, Server, Zap, CheckCircle2, Terminal } from 'lucide-react';

export const TechLaptopGraphic: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Background radial ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-400/20 via-teal-300/10 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Glass Architectural Showcase Card */}
      <div className="relative rounded-3xl bg-[#092D3A] text-white p-6 sm:p-7 shadow-2xl border border-emerald-500/30 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              kshirsa.engine.prod
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SYSTEMS OPERATIONAL
          </span>
        </div>

        {/* Real-time Architecture Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Card 1 */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Response Latency</span>
            </div>
            <div className="text-xl font-bold font-display text-white">&lt; 14ms</div>
            <span className="text-[10px] text-emerald-400 font-medium">99.99% Uptime SLA</span>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Server className="w-3.5 h-3.5 text-teal-400" />
              <span>Cloud Topology</span>
            </div>
            <div className="text-xl font-bold font-display text-white">Multi-Region</div>
            <span className="text-[10px] text-teal-300 font-medium">Auto-Scaling Nodes</span>
          </div>
        </div>

        {/* Live Architecture Code Stream */}
        <div className="bg-[#051A22] rounded-xl p-4 border border-emerald-900/50 font-mono text-xs text-slate-300 space-y-1.5 mb-5">
          <div className="text-emerald-400 text-[11px] font-semibold">// Architecture Specification</div>
          <div className="flex items-center justify-between text-slate-400">
            <span>&bull; Security &amp; Compliance:</span>
            <span className="text-white font-semibold">Zero-Trust &bull; OWASP Top 10</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span>&bull; Deployment Pipeline:</span>
            <span className="text-emerald-300 font-semibold">Continuous CI/CD</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span>&bull; Architecture Paradigm:</span>
            <span className="text-white font-semibold">Cloud-Native Microservices</span>
          </div>
        </div>

        {/* Floating Trust Indicator */}
        <motion.div
          className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-900/60 to-slate-900/80 border border-emerald-500/30"
          animate={reduced ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Guaranteed Delivery Standard</div>
              <div className="text-[10px] text-slate-400">Audited architecture with zero tech debt</div>
            </div>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
};
