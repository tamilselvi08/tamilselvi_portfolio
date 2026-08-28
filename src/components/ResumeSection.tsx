import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Printer,
  ShieldCheck,
  User,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData, internshipsData, projectsData, educationData, certificationsData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Trigger confetti celebratory effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#34d399', '#f59e0b'],
    });

    // Create a real downloadable text/PDF fallback file
    const resumeContent = `TAMIL SELVI S
B.E. Electronics & Communication Engineering
Email: ${personalData.email} | Phone: ${personalData.phone}
LinkedIn: ${personalData.linkedin}
GitHub: ${personalData.github}
Location: ${personalData.location}

==================================================
CAREER OBJECTIVE
==================================================
${personalData.careerObjective}

==================================================
EDUCATION
==================================================
1. ${educationData[0].degree}
   ${educationData[0].institution} (2023 - Present)
   CGPA: ${educationData[0].score}

2. ${educationData[1].degree}
   ${educationData[1].institution} (2022 - 2023)
   Score: ${educationData[1].score}

==================================================
INTERNSHIPS
==================================================
1. ${internshipsData[0].role} | ${internshipsData[0].company} (${internshipsData[0].period})
${internshipsData[0].responsibilities.map((r) => `   * ${r}`).join('\n')}

2. ${internshipsData[1].role} | ${internshipsData[1].company} (${internshipsData[1].period})
${internshipsData[1].responsibilities.map((r) => `   * ${r}`).join('\n')}

==================================================
PROJECTS
==================================================
1. ${projectsData[0].title} (${projectsData[0].category} - ${projectsData[0].period})
   Tech: ${projectsData[0].technologies.join(', ')}
   Description: ${projectsData[0].description}
${projectsData[0].features.map((f) => `   * ${f}`).join('\n')}

2. ${projectsData[1].title} (${projectsData[1].category})
   Tech: ${projectsData[1].technologies.join(', ')}
   Description: ${projectsData[1].description}
${projectsData[1].features.map((f) => `   * ${f}`).join('\n')}

==================================================
TECHNICAL SKILLS
==================================================
* Programming: Java, JavaScript, Embedded C
* Web Development: HTML, CSS, Bootstrap
* Database: SQL
* Embedded Systems: Microcontrollers, Sensors, Actuators, Voice Recognition Module, Motor Drivers

==================================================
CERTIFICATIONS
==================================================
${certificationsData.map((c) => `* ${c.title} - ${c.issuer}`).join('\n')}
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'TamilSelvi_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-slate-950">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              WANT THE COMPLETE STORY?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my resume to learn more about my education, internship experience, projects, skills and certifications.
            </p>
          </div>

          {/* Quick Resume Metadata Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Degree</div>
              <div className="text-xs font-bold text-slate-200 truncate font-sans">B.E. ECE (8.33)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Internships</div>
              <div className="text-xs font-bold text-slate-200 font-sans">2 Companies</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Projects</div>
              <div className="text-xs font-bold text-slate-200 font-sans">Web &amp; Embedded</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Status</div>
              <div className="text-xs font-bold text-emerald-400 font-sans">Available (Fresher)</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-102 cursor-pointer font-sans"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer font-sans"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Interactive Resume Preview</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Resume file downloaded successfully!</span>
            </div>
          )}

          <div className="text-[11px] font-mono text-slate-500">
            Target File: <span className="text-slate-400">/resume/TamilSelvi_Resume.pdf</span> • Verified Contact: {personalData.email}
          </div>

        </div>

      </div>
    </section>
  );
};
