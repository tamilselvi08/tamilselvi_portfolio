import React, { useState } from 'react';
import {
  Layers,
  ChevronRight,
  ExternalLink,
  Github,
  Sparkles,
  Cpu,
  Globe,
  CheckCircle2,
  Zap,
  Mic,
  Eye,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            PROJECTS THAT TURNED IDEAS INTO REALITY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Directly translating engineering requirements into tangible digital &amp; physical products
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Major Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isWheelchair = project.id === 'voice-wheelchair';

            return (
              <div
                key={project.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between interactive-card group relative overflow-hidden ${
                  isWheelchair
                    ? 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10'
                    : 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10'
                }`}
              >
                {/* Special Callout Badge for Hardware-Software Integration */}
                {isWheelchair && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-[10px] font-mono font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>FLAGSHIP EMBEDDED INTEGRATION</span>
                  </div>
                )}

                <div>
                  {/* Top Meta info */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                      PROJECT 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 mb-4">
                    {project.subtitle} {project.period && `• ${project.period}`}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    &ldquo;{project.description}&rdquo;
                  </p>

                  {/* Visual Flow for Voice Wheelchair or Grocery */}
                  {project.flow && (
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 mb-6 space-y-2">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>SIGNAL &amp; EXECUTION PIPELINE:</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.flow.map((step, sIdx) => (
                          <React.Fragment key={step}>
                            <div
                              className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${
                                isWheelchair
                                  ? 'bg-emerald-950/80 border-emerald-800/80 text-emerald-300'
                                  : 'bg-cyan-950/80 border-cyan-800/80 text-cyan-300'
                              }`}
                            >
                              {step}
                            </div>
                            {sIdx < project.flow!.length - 1 && (
                              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      HIGHLIGHTED CAPABILITIES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 6).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isWheelchair ? 'text-emerald-400' : 'text-cyan-400'
                            }`}
                          />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Tech stack pills & interactive buttons */}
                <div>
                  {/* Tech stack */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-[11px] font-mono text-slate-500 mr-1">TECH:</span>
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold transition-all shadow-md cursor-pointer ${
                        isWheelchair
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950'
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Render Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
