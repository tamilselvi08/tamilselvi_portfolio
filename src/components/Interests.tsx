import React from 'react';
import { Sparkles, Layout, Cpu, Wifi, Antenna, ArrowRight, Code2 } from 'lucide-react';
import { interestAreasData } from '../data/portfolioData';

export const Interests: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return Layout;
      case 'Cpu':
        return Cpu;
      case 'Wifi':
        return Wifi;
      case 'Antenna':
        return Antenna;
      default:
        return Code2;
    }
  };

  return (
    <section id="interests" className="py-20 md:py-28 relative bg-slate-950">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DOMAIN PASSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            WHAT I LIKE TO BUILD
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Key focus areas where electronics intuition converges with modern software interfaces
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* 4 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interestAreasData.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <div
                key={item.title}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden interactive-card"
              >
                {/* Top ambient color glow */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1} // DOMAIN
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags at bottom */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
