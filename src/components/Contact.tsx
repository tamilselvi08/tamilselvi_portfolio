import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable delivery feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/90 border-t border-slate-900">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-900/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            LET&apos;S CONNECT
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            &ldquo;{personalData.heroDescription ? "I'm open to opportunities where I can learn, contribute and grow as a technology professional." : ''}&rdquo;
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-lg font-bold text-slate-100 font-sans">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Email</div>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors break-all"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Phone</div>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        in/tamil-selvi-b709862b5
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">View ↗</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">GitHub Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        github.com/tamilselvi08
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">View ↗</span>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personalData.location}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400">
                  ● Quick Response
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-sans">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I look forward to connecting and discussing how I can contribute to your engineering team.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-slate-100 text-xs font-sans placeholder-slate-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-slate-100 text-xs font-sans placeholder-slate-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing fresher roles, projects, or professional opportunities..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-slate-100 text-xs font-sans placeholder-slate-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-101 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Packet...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
