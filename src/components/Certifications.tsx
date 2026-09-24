import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  X,
  FileCheck,
  Download,
} from 'lucide-react';
import { certificationsData, personalData } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-slate-950">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-circuit-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Verified technical certifications in IIoT, Edge Analytics, 5G Wireless Standards, and AI
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header Icon + Organization */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{cert.issuer}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    VERIFIED
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans">
                  {cert.title}
                </h3>

                {/* Skills Gained Tags */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Competencies Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Status: <strong className="text-emerald-400">Completed</strong>
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 text-xs font-mono border border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl text-slate-100 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-cyan-300 uppercase">
                  VERIFIED CREDENTIAL
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Card */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/20 text-center space-y-3 font-mono">
              <div className="text-[10px] text-cyan-400 uppercase tracking-widest">
                CERTIFICATE OF COMPLETION
              </div>
              <div className="text-xs text-slate-400">This certifies that</div>
              <div className="text-lg font-bold text-white font-sans">
                {personalData.name}
              </div>
              <div className="text-xs text-slate-400">has successfully completed</div>
              <div className="text-sm font-bold text-cyan-300 px-2 py-1 bg-cyan-950/60 rounded border border-cyan-800">
                {selectedCert.title}
              </div>
              <div className="text-xs text-emerald-400 font-semibold">
                Issued by: {selectedCert.issuer}
              </div>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                ID: {selectedCert.credentialId} • Tamil Nadu, India
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
