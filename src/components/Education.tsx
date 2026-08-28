import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            EDUCATION
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Rigorous undergraduate engineering curriculum with solid academic standing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => {
            const isCollege = idx === 0;

            return (
              <div
                key={edu.institution}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none ${
                    isCollege ? 'bg-cyan-500' : 'bg-emerald-500'
                  }`}
                />

                <div className="space-y-4">
                  {/* Top bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-right">
                      <div className="text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                        {edu.score}
                      </div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        {edu.scoreLabel}
                      </div>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-1 font-mono">
                      {edu.institution}
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {edu.highlights && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Record Status:</span>
                  <span className="text-emerald-400 font-semibold">
                    {isCollege ? 'Enrolled (2023 - Present)' : 'Graduated (2023)'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
