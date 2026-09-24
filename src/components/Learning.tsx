import React from 'react';
import { Sparkles, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { alwaysLearningData } from '../data/portfolioData';

export const Learning: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-emerald-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>GROWTH MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            ALWAYS LEARNING
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Committed to continuous technical growth, deeper system understanding, and daily refinement
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* 5 Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alwaysLearningData.map((item, idx) => (
            <div
              key={item.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>ACTIVE FOCUS</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.goal}
                </p>
              </div>

              {/* Progress bar visual */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Continuous Dedication</span>
                  <span className="text-emerald-400 font-bold">In Progress</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
