import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { CircuitModeOverlay } from './components/CircuitModeOverlay';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Internships } from './components/Internships';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Learning } from './components/Learning';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [isCircuitMode, setIsCircuitMode] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommandEvent = () => {
      setIsCommandOpen(true);
    };

    window.addEventListener('open-command-palette', handleOpenCommandEvent);
    return () => {
      window.removeEventListener('open-command-palette', handleOpenCommandEvent);
    };
  }, []);

  return (
    <div
      className={`min-h-screen text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 ${
        isCircuitMode ? 'bg-circuit-mode-active' : 'bg-slate-950'
      }`}
    >
      {/* Precision Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Primary Top Navigation Bar */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onToggleCircuitMode={() => setIsCircuitMode(!isCircuitMode)}
        isCircuitMode={isCircuitMode}
      />

      {/* Interactive Circuit Mode System Bus Overlay */}
      <CircuitModeOverlay
        isActive={isCircuitMode}
        onClose={() => setIsCircuitMode(false)}
      />

      {/* Main Portfolio Sections */}
      <main className="space-y-0">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Journey />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Education />
        <Interests />
        <Learning />
        <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onToggleCircuitMode={() => setIsCircuitMode(!isCircuitMode)}
        isCircuitMode={isCircuitMode}
      />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
