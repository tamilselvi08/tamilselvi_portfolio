import React from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  personalData,
  educationData,
  internshipsData,
  projectsData,
  skillsData,
  certificationsData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono font-bold text-slate-200 uppercase">
              Resume Preview // TamilSelvi_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-sm sm:text-base text-cyan-400 font-semibold font-mono">
              {personalData.degree}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.email}
              </span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                LinkedIn
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-300"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                GitHub
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.location}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalData.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.institution} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution}</div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-slate-400 text-xs">{edu.period}</div>
                    <div className="text-cyan-300 font-bold">{edu.scoreLabel}: {edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              INTERNSHIPS
            </h2>
            <div className="space-y-4">
              {internshipsData.map((internship) => (
                <div key={internship.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm font-bold text-white">
                      {internship.role} <span className="text-emerald-400 font-normal">| {internship.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">{internship.period}</div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {internship.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm font-bold text-white">
                      {proj.title} <span className="text-cyan-400 text-xs font-normal">({proj.category})</span>
                    </div>
                    {proj.period && <div className="text-xs font-mono text-slate-400">{proj.period}</div>}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {proj.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Programming:</span>{' '}
                <span className="text-slate-400 font-mono">Java, JavaScript, Embedded C</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web Development:</span>{' '}
                <span className="text-slate-400 font-mono">HTML, CSS, Bootstrap</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Database:</span>{' '}
                <span className="text-slate-400 font-mono">SQL</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Embedded Systems:</span>{' '}
                <span className="text-slate-400 font-mono">Microcontrollers, Sensors, Actuators, Voice Recognition, Motor Drivers</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
              {certificationsData.map((c) => (
                <li key={c.id}>
                  <strong className="text-slate-200">{c.title}</strong> — {c.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Declaration */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="font-bold text-slate-300 uppercase font-mono">DECLARATION</div>
            <p className="italic">
              &ldquo;I hereby declare that all the information provided in this resume is true and accurate to the best of my knowledge and belief.&rdquo;
            </p>
            <div className="pt-2 font-mono text-slate-300 font-semibold">
              TAMIL SELVI S
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
