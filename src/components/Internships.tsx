import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Radio,
  ArrowRight,
} from 'lucide-react';
import { internshipsData } from '../data/portfolioData';

export const Internships: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="internships" className="py-20 md:py-28 relative bg-slate-950">
      {/* Circuit Trace Background Overlay */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            WHERE I GAINED REAL EXPERIENCE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Two industry internships across Client-Facing Web Development &amp; Embedded Hardware Engineering
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* The Two Major Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internshipsData.map((internship, index) => {
            const isWeb = internship.type === 'Software';
            const num = `0${index + 1}`;

            return (
              <div
                key={internship.id}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Background ambient accent */}
                <div
                  className={`absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 pointer-events-none ${
                    isWeb ? 'bg-cyan-500' : 'bg-emerald-500'
                  }`}
                />

                <div>
                  {/* Card Header with index, role, company & date */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                          {num} — {internship.badge}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{internship.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                        {internship.role}
                      </h3>
                      
                      <div className="text-base font-semibold text-emerald-400 font-mono mt-0.5 flex items-center gap-1.5">
                        <span>@{internship.company}</span>
                      </div>
                    </div>

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isWeb
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      }`}
                    >
                      {isWeb ? <Globe className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-3 my-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      KEY DELIVERABLES &amp; IMPACT:
                    </div>
                    <ul className="space-y-2.5">
                      {internship.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isWeb ? 'text-cyan-400' : 'text-emerald-400'
                            }`}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requested Visual Workflow Pipeline */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 my-4 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>ENGINEERING WORKFLOW PIPELINE:</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 pt-1">
                      {internship.flow.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <div
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
                              isWeb
                                ? 'bg-cyan-950/70 border-cyan-800 text-cyan-300'
                                : 'bg-emerald-950/70 border-emerald-800 text-emerald-300'
                            }`}
                          >
                            {step}
                          </div>

                          {sIdx < internship.flow.length - 1 && (
                            <ChevronRight
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isWeb ? 'text-cyan-500/60' : 'text-emerald-500/60'
                              }`}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills at bottom */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">STACK:</span>
                  {internship.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
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
