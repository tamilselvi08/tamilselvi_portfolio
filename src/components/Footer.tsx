import React from 'react';
import {
  Cpu,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Code2,
  Zap,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      {/* Background circuit grid */}
      <div className="absolute inset-0 bg-circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Concept */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-slate-100 font-mono tracking-tight">
                {personalData.name}
              </div>
              <div className="text-xs text-cyan-400 font-mono">
                FROM CIRCUITS TO CODE • ECE 2026
              </div>
            </div>
          </div>

          {/* Core Recruiter Statement */}
          <div className="text-center md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-300">
              &ldquo;I AM AN ECE STUDENT WHO BUILDS BOTH SOFTWARE AND HARDWARE SOLUTIONS.&rdquo;
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-mono border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-500">
            © {new Date().getFullYear()} {personalData.name}. All verified portfolio facts based on official resume.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
