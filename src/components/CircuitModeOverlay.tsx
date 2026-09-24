import React from 'react';
import { Cpu, Zap, Radio, Globe, Code2, X, ChevronRight, Sparkles } from 'lucide-react';

interface CircuitModeOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

export const CircuitModeOverlay: React.FC<CircuitModeOverlayProps> = ({ isActive, onClose }) => {
  if (!isActive) return null;

  const circuitNodes = [
    {
      id: 'ece',
      name: 'ECE',
      subtitle: 'Electronics & Comm. Engg',
      targetId: 'about',
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500/60',
      glowColor: 'shadow-amber-500/20',
      icon: Cpu,
      detail: '8.33 CGPA • Hardware Fundamentals',
    },
    {
      id: 'embedded',
      name: 'EMBEDDED',
      subtitle: 'Sensors & Microcontrollers',
      targetId: 'skills',
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/60',
      glowColor: 'shadow-cyan-500/20',
      icon: Zap,
      detail: 'Embedded C • Voice Wheelchair',
    },
    {
      id: 'iot',
      name: 'IoT',
      subtitle: 'Edge & Connected Systems',
      targetId: 'interests',
      color: 'from-teal-400 to-emerald-500',
      borderColor: 'border-teal-500/60',
      glowColor: 'shadow-teal-500/20',
      icon: Radio,
      detail: 'IIoT NPTEL • Edge Analytics',
    },
    {
      id: 'web',
      name: 'WEB',
      subtitle: 'Frontend UI & Interactions',
      targetId: 'internships',
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/60',
      glowColor: 'shadow-indigo-500/20',
      icon: Globe,
      detail: 'Qbatzclay Intern • Grocery Site',
    },
    {
      id: 'software',
      name: 'SOFTWARE',
      subtitle: 'Integrated Solutions',
      targetId: 'projects',
      color: 'from-emerald-400 to-cyan-500',
      borderColor: 'border-emerald-500/60',
      glowColor: 'shadow-emerald-500/20',
      icon: Code2,
      detail: 'Java • SQL • Real-World Delivery',
    },
  ];

  const handleNodeClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full bg-slate-950/95 border-b border-cyan-500/40 backdrop-blur-xl shadow-2xl py-3 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Title badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-cyan-300 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              CIRCUIT MODE ACTIVE
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Interactive System Bus: Click any node to jump directly to that section
            </p>
          </div>
        </div>

        {/* The Animated PCB Nodes Pipeline */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-1 px-1 scrollbar-none">
          {circuitNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => handleNodeClick(node.targetId)}
                  className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border ${node.borderColor} bg-slate-900/90 hover:bg-slate-800 transition-all hover:scale-105 shadow-md ${node.glowColor} cursor-pointer shrink-0`}
                  title={`Jump to ${node.name}: ${node.subtitle}`}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center bg-gradient-to-br ${node.color} text-slate-950 font-bold`}>
                    <Icon className="w-3 h-3 text-slate-950" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-mono font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      {node.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono hidden lg:block">
                      {node.detail}
                    </div>
                  </div>
                </button>

                {index < circuitNodes.length - 1 && (
                  <div className="flex items-center text-cyan-400/60 shrink-0">
                    <div className="w-2 sm:w-4 h-[2px] bg-gradient-to-r from-cyan-500/50 to-emerald-500/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-cyan-300 animate-pulse"></div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 -ml-1 text-cyan-400 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Close Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
            title="Exit Circuit Mode"
          >
            <X className="w-3.5 h-3.5" />
            <span>Close Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};
