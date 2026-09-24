import React, { useEffect, useState } from 'react';
import {
  Search,
  X,
  Home,
  User,
  GitCommit,
  Cpu,
  Briefcase,
  Layers,
  Award,
  GraduationCap,
  Sparkles,
  FileText,
  Mail,
  Zap,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleCircuitMode: () => void;
  isCircuitMode: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleCircuitMode,
  isCircuitMode,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    {
      id: 'home',
      label: 'Home',
      category: 'Navigation',
      description: 'Back to top & Identity Card',
      icon: Home,
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'about',
      label: 'About Me',
      category: 'Navigation',
      description: 'Who am I? Bio and key statistics',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'journey',
      label: 'My Journey',
      category: 'Navigation',
      description: 'Interactive timeline: ECE to Software',
      icon: GitCommit,
      action: () => {
        document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'skills',
      label: 'Toolkit & Skills',
      category: 'Navigation',
      description: 'Java, Web, SQL, Embedded Systems',
      icon: Cpu,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'internships',
      label: 'Internship Experience',
      category: 'Navigation',
      description: 'Qbatzclay (Web) & Emglitz (Embedded)',
      icon: Briefcase,
      action: () => {
        document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'projects',
      label: 'Projects',
      category: 'Navigation',
      description: 'Grocery Website & Voice Wheelchair',
      icon: Layers,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'certifications',
      label: 'Certifications',
      category: 'Navigation',
      description: 'NPTEL IIoT, Infosys Edge, 4G/5G, AI in Action',
      icon: Award,
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'education',
      label: 'Education',
      category: 'Navigation',
      description: 'V.S.B College of Engineering (8.33 CGPA)',
      icon: GraduationCap,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'interests',
      label: 'What I Like to Build',
      category: 'Navigation',
      description: 'Web, Smart Hardware, Connected Systems',
      icon: Sparkles,
      action: () => {
        document.getElementById('interests')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume',
      label: 'Download Resume',
      category: 'Actions',
      description: 'Download TamilSelvi_Resume.pdf',
      icon: FileText,
      action: () => {
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'circuit-mode',
      label: isCircuitMode ? 'Disable Circuit Mode' : 'Enable Circuit Mode',
      category: 'Interactive',
      description: 'Toggle interactive PCB bus connection flow',
      icon: Zap,
      action: () => {
        onToggleCircuitMode();
        onClose();
      },
    },
    {
      id: 'contact',
      label: "Let's Connect",
      category: 'Contact',
      description: `${personalData.email} | Contact Form`,
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
          setSelectedIndex(0);
          // Trigger open via parent
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev === 0 ? (filteredCommands.length || 1) - 1 : prev - 1
          );
        } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose, onToggleCircuitMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3 bg-slate-950/50">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 text-sm font-sans"
            placeholder="Type a command or jump to section (e.g., Projects, Circuit Mode, Resume)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-slate-400 bg-slate-800/80 border border-slate-700 rounded font-mono">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-100'
                      : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium flex items-center gap-2">
                        {cmd.label}
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                          {cmd.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-normal">
                        {cmd.description}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 text-cyan-400 transition-transform ${
                      isSelected ? 'translate-x-1 opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 border-t border-slate-800/80 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 mr-1">↑</kbd>
              <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 mr-1">↓</kbd>
              Navigate
            </span>
            <span>
              <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 mr-1">↵</kbd>
              Select
            </span>
          </div>
          <span className="text-cyan-400/80">From Circuits to Code</span>
        </div>
      </div>
    </div>
  );
};
