import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Radio,
  FileCode,
  CheckCircle2,
  Phone,
  Layers,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [cardMode, setCardMode] = useState<'front' | 'specs'>('front');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Circuit Grid & ambient glows */}
      <div className="absolute inset-0 bg-circuit-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

      {/* Decorative subtle SVG circuit traces in background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pcb-trace" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M 10,10 L 60,10 L 80,30 L 110,30 M 30,60 L 50,80 L 100,80 M 80,100 L 100,120"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1"
            />
            <circle cx="10" cy="10" r="2.5" fill="#38bdf8" />
            <circle cx="110" cy="30" r="2.5" fill="#10b981" />
            <circle cx="30" cy="60" r="2.5" fill="#38bdf8" />
            <circle cx="100" cy="80" r="2.5" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-trace)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Concept Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wider">
                FROM CIRCUITS TO CODE
              </span>
              <span className="text-slate-600 font-mono">|</span>
              <span className="text-xs font-mono text-emerald-400">
                SOFTWARE × EMBEDDED
              </span>
            </div>

            {/* Main Greeting and Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">{personalData.shortName}</span> <span className="inline-block animate-bounce origin-bottom">👋</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
                {personalData.headline}
              </h2>
              
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium">
                {personalData.subheadline}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              &ldquo;{personalData.heroDescription}&rdquo;
            </p>

            {/* Location & Institution Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalData.college}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                <span>CGPA: <strong>8.33</strong></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-102 cursor-pointer font-sans"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 hover:border-cyan-500/50 transition-all backdrop-blur-md cursor-pointer font-sans"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500">CONNECT:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: UNIQUE "ENGINEERING IDENTITY CARD" */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md interactive-card">
              
              {/* Glow backdrop behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-emerald-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* The Futuristic PCB Identity Card */}
              <div className="relative bg-slate-950/90 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-xl overflow-hidden font-mono">
                
                {/* Circuit Card Top Header with Microchip Notch */}
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></div>
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                      IC-ID: TS-ECE-2026
                    </span>
                  </div>
                  <div className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono uppercase">
                    SYS_STATUS: ACTIVE
                  </div>
                </div>

                {/* Circuit board graphical corner lines */}
                <svg
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-40"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 100,0 L 60,0 L 40,20 L 0,20 M 100,40 L 70,40 L 50,60"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                  />
                  <circle cx="40" cy="20" r="3" fill="#38bdf8" />
                  <circle cx="70" cy="40" r="3" fill="#10b981" />
                </svg>

                {/* Name & Academic Title */}
                <div className="text-center py-2 space-y-1">
                  <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    ENGINEERING IDENTITY
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white font-sans">
                    TAMIL SELVI S
                  </h3>
                  <div className="inline-block text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-full border border-emerald-800/60">
                    ECE STUDENT • 8.33 CGPA
                  </div>
                </div>

                {/* The Two Architectural Pillars: CODE & CIRCUIT */}
                <div className="grid grid-cols-2 gap-3 my-5">
                  
                  {/* Pillar 1: CODE */}
                  <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 text-center relative overflow-hidden group hover:border-cyan-400 transition-colors">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-cyan-300 font-mono tracking-wider">
                      [ CODE ]
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Web & Logic
                    </div>
                    <div className="mt-2 text-[10px] text-cyan-400/80 font-mono">
                      JS • Java • HTML/CSS
                    </div>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  </div>

                  {/* Pillar 2: CIRCUIT */}
                  <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3 text-center relative overflow-hidden group hover:border-emerald-400 transition-colors">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-1.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-emerald-300 font-mono tracking-wider">
                      [ CIRCUIT ]
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Hardware & Sensors
                    </div>
                    <div className="mt-2 text-[10px] text-emerald-400/80 font-mono">
                      Embedded C • Microcontrollers
                    </div>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  </div>

                </div>

                {/* Technology Matrix Grid */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="font-semibold text-slate-200">JAVA:</span> Core OOP
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="font-semibold text-slate-200">WEB:</span> HTML, CSS, JS
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span className="font-semibold text-slate-200">EMBEDDED:</span> C, Motors
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span className="font-semibold text-slate-200">IoT:</span> Edge, Sensors
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pin Connections & Status */}
                <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">STATUS:</span>
                    <span className="text-cyan-400 font-bold tracking-wider flex items-center gap-1">
                      BUILDING
                      <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                    </span>
                  </div>
                  <div className="text-slate-500 font-mono">
                    PORT: 8080/UART
                  </div>
                </div>

                {/* Integrated Hardware IC Pins Graphic at Bottom */}
                <div className="mt-3 flex justify-between px-2 pt-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2.5 bg-gradient-to-b from-slate-600 to-amber-500/70 rounded-b-xs"
                      title={`Pin ${i + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
