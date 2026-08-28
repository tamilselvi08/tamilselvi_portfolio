import React, { useState } from 'react';
import {
  GitCommit,
  ArrowDown,
  Cpu,
  Zap,
  Globe,
  Briefcase,
  Layers,
  Sparkles,
  ChevronRight,
  Code2,
} from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return Cpu;
      case 1:
        return Zap;
      case 2:
        return Globe;
      case 3:
        return Briefcase;
      case 4:
        return Layers;
      case 5:
        return Sparkles;
      default:
        return GitCommit;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-slate-950">
      {/* Circuit grid background */}
      <div className="absolute inset-0 bg-circuit-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <GitCommit className="w-3.5 h-3.5" />
            <span>GROWTH TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            MY JOURNEY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            From foundational circuit theory to hands-on firmware &amp; client-facing web engineering
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Desktop & Mobile Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Circuit Trace Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-emerald-500 to-teal-400 rounded-full opacity-40"></div>

          <div className="space-y-8 sm:space-y-12">
            {journeyTimeline.map((item, idx) => {
              const Icon = getStepIcon(idx);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex items-center flex-col sm:flex-row ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Content Card (Half width on sm+) */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div
                      className={`glass-panel p-6 rounded-2xl border transition-all duration-300 ${
                        activeStep === idx
                          ? 'border-cyan-400/60 bg-slate-900/90 shadow-lg shadow-cyan-500/10 scale-102'
                          : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                          {item.tag}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 mb-2 font-sans flex items-center gap-2">
                        <span>{item.title}</span>
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                        activeStep === idx
                          ? 'bg-gradient-to-tr from-cyan-500 to-emerald-500 text-slate-950 border-white shadow-[0_0_15px_rgba(56,189,248,0.6)] scale-110'
                          : 'bg-slate-950 text-cyan-400 border-cyan-500/40'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty counterpart spacer for balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
