import React, { useState } from 'react';
import {
  Cpu,
  Coffee,
  FileCode,
  Code2,
  Palette,
  LayoutGrid,
  Database,
  Binary,
  Radio,
  Zap,
  Mic,
  Gauge,
  Wifi,
  Server,
  Antenna,
  Layout,
  Sparkles,
  Info,
  Layers,
  Terminal,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return Coffee;
      case 'FileCode':
        return FileCode;
      case 'Cpu':
        return Cpu;
      case 'Code2':
        return Code2;
      case 'Palette':
        return Palette;
      case 'LayoutGrid':
        return LayoutGrid;
      case 'Database':
        return Database;
      case 'Binary':
        return Binary;
      case 'Radio':
        return Radio;
      case 'Zap':
        return Zap;
      case 'Mic':
        return Mic;
      case 'Gauge':
        return Gauge;
      case 'Wifi':
        return Wifi;
      case 'Server':
        return Server;
      case 'Antenna':
        return Antenna;
      case 'Layout':
        return Layout;
      case 'Sparkles':
        return Sparkles;
      default:
        return Code2;
    }
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Java & Programming' },
    { id: 'web', label: 'Web Development' },
    { id: 'database', label: 'Database' },
    { id: 'embedded', label: 'Embedded Systems' },
    { id: 'interests', label: 'Core Interests' },
  ];

  const filteredGroups = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((group) => group.categoryKey === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-900/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>AUTHENTIC RESUME COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            MY TOOLKIT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Verified technologies in Software Development &amp; Embedded Systems — No simulated percentages
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid by Groups */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.categoryTitle} className="space-y-4">
              
              {/* Group Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h3 className="text-base sm:text-lg font-bold font-mono text-slate-200 tracking-wider">
                    {group.categoryTitle}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  {group.badge}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((skill) => {
                  const Icon = getSkillIcon(skill.iconName);
                  const isHovered = hoveredSkill?.name === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`glass-panel p-5 rounded-2xl border transition-all duration-300 interactive-card relative overflow-hidden group cursor-pointer ${
                        isHovered
                          ? 'border-cyan-400/80 bg-slate-900/95 shadow-xl shadow-cyan-500/10 -translate-y-1'
                          : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/50'
                      }`}
                    >
                      {/* Top Row: Icon + Name + Tag */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isHovered
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-slate-800 text-cyan-400'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              {skill.tag}
                            </span>
                          </div>
                        </div>

                        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all"></div>
                      </div>

                      {/* Explanation (Shown clearly & highlighted on hover) */}
                      <p className="text-xs text-slate-300 leading-relaxed min-h-[38px]">
                        {skill.description}
                      </p>

                      {/* Hardware / Code Spec Tag */}
                      {skill.specs && (
                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span className="text-slate-500">SPEC:</span>
                          <span className="text-cyan-400/90 truncate ml-2">
                            {skill.specs}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Notice Footer */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All skills listed are derived directly from Tamil Selvi&apos;s verified curriculum and internship deliverables.
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>100% Resume Accurate</span>
          </div>
        </div>

      </div>
    </section>
  );
};
