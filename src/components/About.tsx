import React from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  Code2,
  CheckCircle2,
  Sparkles,
  Award,
  Terminal,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>CORE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            WHO AM I?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Deep Narrative & Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm font-semibold">
                <Terminal className="w-4 h-4" />
                <span>bio.overview // resume_verified</span>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {personalData.aboutBio}
              </p>

              {/* Career Goal & Objective block */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CAREER GOAL</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  {personalData.careerObjective}
                </p>
              </div>

              {/* Verified core competencies checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>B.E. ECE at V.S.B College of Engineering Technical Campus</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Frontend Web Development & Embedded Systems Dual Focus</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Proven Internship Delivery at Qbatzclay & Emglitz</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hands-on Hardware Interfacing & Responsive Web Design</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Exact 3 Highlight Cards requested */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: 8.33 CGPA */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-cyan-500/20 flex items-center justify-between group">
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                  8.33
                </div>
                <div className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                  CGPA
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  V.S.B College of Engineering Technical Campus
                </div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7" />
              </div>
            </div>

            {/* Card 2: 2 Internship Experiences */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-emerald-500/20 flex items-center justify-between group">
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                  2
                </div>
                <div className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                  Internship Experiences
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Qbatzclay (Web) &amp; Emglitz (Embedded)
                </div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
            </div>

            {/* Card 3: 2 Major Projects */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-teal-500/20 flex items-center justify-between group">
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-mono">
                  2
                </div>
                <div className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                  Major Projects
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Grocery Web App &amp; Voice Wheelchair
                </div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
