import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Zap,
  Search,
  FileText,
  Cpu,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommand: () => void;
  onToggleCircuitMode: () => void;
  isCircuitMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  onToggleCircuitMode,
  isCircuitMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Toolkit', href: '#skills' },
    { label: 'Internships', href: '#internships' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-emerald-500 p-[1px] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm text-slate-100 group-hover:text-cyan-400 transition-colors font-mono">
                <span>TAMIL SELVI S</span>
                <span className="text-[10px] font-normal px-1.5 py-0.2 bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 rounded">
                  ECE
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                FROM CIRCUITS TO CODE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 rounded-full hover:bg-slate-800/70 transition-all font-sans cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Circuit Mode Button */}
            <button
              onClick={onToggleCircuitMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                isCircuitMode
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
              title="Toggle Interactive Circuit Bus"
            >
              <Zap className={`w-3.5 h-3.5 ${isCircuitMode ? 'text-cyan-400 fill-cyan-400' : 'text-slate-400'}`} />
              <span className="font-semibold">Circuit Mode</span>
              {isCircuitMode && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
            </button>

            {/* Quick Command search trigger */}
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors font-mono cursor-pointer"
              title="Open Command Center (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <kbd className="text-[10px] px-1 bg-slate-800 rounded text-slate-400 border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#resume');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-lg font-mono transition-transform hover:scale-102 shadow-sm font-semibold cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleCircuitMode}
              className={`p-2 rounded-lg border text-xs ${
                isCircuitMode
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
              title="Toggle Circuit Mode"
            >
              <Zap className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCommand}
              className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg"
              title="Search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-left text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900 rounded-lg border border-transparent hover:border-slate-800 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleCircuitMode();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{isCircuitMode ? 'Disable Circuit Mode' : 'Enable Circuit Mode'}</span>
            </button>

            <button
              onClick={() => {
                handleNavClick('#resume');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-mono"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>

          <div className="pt-3 flex items-center justify-center gap-4 text-slate-400">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-900 rounded-lg hover:text-cyan-300"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-900 rounded-lg hover:text-cyan-300"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2 bg-slate-900 rounded-lg hover:text-cyan-300"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
