import React, { useState } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  Cpu,
  Globe,
  Github,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Mic,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Square,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'simulation'>('architecture');

  // Wheelchair Simulator State
  const [wheelchairCommand, setWheelchairCommand] = useState<'STOP' | 'FORWARD' | 'BACKWARD' | 'LEFT' | 'RIGHT'>('STOP');
  const [hardwareLogs, setHardwareLogs] = useState<string[]>([
    '[SYS_INIT] Microcontroller UART Baud 9600 Ready',
    '[VOICE_MODULE] Speaker model initialized: Listening for commands...',
  ]);

  // Grocery Store Simulator State
  const [groceryCategory, setGroceryCategory] = useState<'all' | 'fruits' | 'vegetables' | 'dairy'>('all');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({
    'Organic Bananas (1 Dozen)': 1,
    'Fresh Farm Milk (1L)': 2,
  });

  const groceryProducts = [
    { id: '1', name: 'Fresh Apples (1kg)', category: 'fruits', price: 120, icon: '🍎' },
    { id: '2', name: 'Organic Bananas (1 Dozen)', category: 'fruits', price: 60, icon: '🍌' },
    { id: '3', name: 'Farm Tomatoes (1kg)', category: 'vegetables', price: 40, icon: '🍅' },
    { id: '4', name: 'Fresh Spinach (Bunch)', category: 'vegetables', price: 30, icon: '🥬' },
    { id: '5', name: 'Fresh Farm Milk (1L)', category: 'dairy', price: 65, icon: '🥛' },
    { id: '6', name: 'Organic Butter (200g)', category: 'dairy', price: 90, icon: '🧈' },
  ];

  if (!project) return null;

  const isWheelchair = project.id === 'voice-wheelchair';

  const handleVoiceTrigger = (cmd: 'STOP' | 'FORWARD' | 'BACKWARD' | 'LEFT' | 'RIGHT') => {
    setWheelchairCommand(cmd);
    const timestamp = new Date().toLocaleTimeString();
    let motorAction = '';
    switch (cmd) {
      case 'FORWARD':
        motorAction = 'M1_PWM: 255 (CW), M2_PWM: 255 (CW) | Status: MOVING FORWARD';
        break;
      case 'BACKWARD':
        motorAction = 'M1_PWM: 200 (CCW), M2_PWM: 200 (CCW) | Status: REVERSING';
        break;
      case 'LEFT':
        motorAction = 'M1_PWM: 0 (BRAKE), M2_PWM: 255 (CW) | Status: PIVOT LEFT';
        break;
      case 'RIGHT':
        motorAction = 'M1_PWM: 255 (CW), M2_PWM: 0 (BRAKE) | Status: PIVOT RIGHT';
        break;
      case 'STOP':
      default:
        motorAction = 'M1_PWM: 0, M2_PWM: 0 (ALL HIGH IMPEDANCE) | Status: EMERGENCY BRAKE';
        break;
    }

    setHardwareLogs((prev) => [
      `[${timestamp}] [VOICE_RECOG] Received Word: "${cmd}"`,
      `[${timestamp}] [MCU_ISR] Executing Case: ${cmd} -> ${motorAction}`,
      ...prev.slice(0, 4),
    ]);
  };

  const handleAddToCart = (productName: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productName]: (prev[productName] || 0) + 1,
    }));
  };

  const handleUpdateQty = (productName: string, delta: number) => {
    setCartItems((prev) => {
      const current = prev[productName] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productName];
        return copy;
      }
      return { ...prev, [productName]: next };
    });
  };

  const totalCartCount = (Object.values(cartItems) as number[]).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                isWheelchair
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
              }`}
            >
              {isWheelchair ? <Cpu className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-sans">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs (Deep Architecture vs Live Interactive Demo) */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-950/40 border-b border-slate-800/80">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'architecture'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Detailed Architecture &amp; Methodology
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {activeTab === 'architecture' ? (
            <>
              {/* Project Overview */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Methodology: Problem -> Idea -> Implementation -> Testing */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>ENGINEERING METHODOLOGY &amp; EXECUTION:</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem Statement */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                      01. The Problem
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.modalDetails.problem}
                    </p>
                  </div>

                  {/* Idea & Solution */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      02. The Technical Idea
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.modalDetails.idea}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                      03. Implementation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.modalDetails.implementation}
                    </p>
                  </div>

                  {/* Testing */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-mono font-bold text-purple-400 uppercase">
                      04. Testing &amp; Validation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.modalDetails.testing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hardware / Software Signal Pipeline */}
              {project.flow && (
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/20 space-y-3">
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SYSTEM SIGNAL PIPELINE FLOW:</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {project.flow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <div className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-cyan-800/80 text-cyan-200">
                          {step}
                        </div>
                        {idx < project.flow!.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {project.pipelineDetails && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                      {project.pipelineDetails.map((pDetail) => (
                        <div key={pDetail.step} className="text-[11px] font-mono text-slate-400">
                          <span className="text-cyan-300 font-semibold">{pDetail.step}:</span> {pDetail.description}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  VERIFIED FEATURES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT I LEARNED SECTION */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950/30 to-slate-950 border border-cyan-500/30 space-y-3">
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>WHAT I LEARNED:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.modalDetails.whatILearned.map((item, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Interactive Simulator View */
            <div className="space-y-6">
              {isWheelchair ? (
                /* Wheelchair Simulator */
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                        <Mic className="w-4 h-4" />
                        VOICE COMMAND HARDWARE CONTROLLER
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                        STATE: {wheelchairCommand}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-mono">
                      Test voice triggers to observe microcontroller logic and motor driver H-bridge response:
                    </p>

                    {/* Voice Command Control Buttons */}
                    <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto py-2">
                      <div></div>
                      <button
                        onClick={() => handleVoiceTrigger('FORWARD')}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 font-mono text-xs cursor-pointer transition-all ${
                          wheelchairCommand === 'FORWARD'
                            ? 'bg-emerald-500 text-slate-950 font-bold border-white shadow-lg'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <ArrowUp className="w-4 h-4" />
                        <span>FORWARD</span>
                      </button>
                      <div></div>

                      <button
                        onClick={() => handleVoiceTrigger('LEFT')}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 font-mono text-xs cursor-pointer transition-all ${
                          wheelchairCommand === 'LEFT'
                            ? 'bg-emerald-500 text-slate-950 font-bold border-white shadow-lg'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>LEFT</span>
                      </button>

                      <button
                        onClick={() => handleVoiceTrigger('STOP')}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 font-mono text-xs cursor-pointer transition-all ${
                          wheelchairCommand === 'STOP'
                            ? 'bg-rose-500 text-white font-bold border-white shadow-lg'
                            : 'bg-slate-900 text-rose-400 border-slate-700 hover:border-rose-500'
                        }`}
                      >
                        <Square className="w-4 h-4" />
                        <span>STOP</span>
                      </button>

                      <button
                        onClick={() => handleVoiceTrigger('RIGHT')}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 font-mono text-xs cursor-pointer transition-all ${
                          wheelchairCommand === 'RIGHT'
                            ? 'bg-emerald-500 text-slate-950 font-bold border-white shadow-lg'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>RIGHT</span>
                      </button>

                      <div></div>
                      <button
                        onClick={() => handleVoiceTrigger('BACKWARD')}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 font-mono text-xs cursor-pointer transition-all ${
                          wheelchairCommand === 'BACKWARD'
                            ? 'bg-emerald-500 text-slate-950 font-bold border-white shadow-lg'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <ArrowDown className="w-4 h-4" />
                        <span>BACKWARD</span>
                      </button>
                      <div></div>
                    </div>
                  </div>

                  {/* Microcontroller & H-Bridge Live Serial Monitor */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                    <div className="text-slate-400 flex items-center justify-between border-b border-slate-800 pb-1">
                      <span>UART / FIRMWARE LOG OUTPUT</span>
                      <span className="text-emerald-400">115200 BAUD</span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      {hardwareLogs.map((log, i) => (
                        <div key={i} className="text-cyan-300">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Grocery Store Simulator */
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                        <ShoppingCart className="w-4 h-4" />
                        GROCERY INTERACTIVE STOREFRONT PREVIEW
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                        Cart Items: {totalCartCount}
                      </span>
                    </div>

                    {/* Filter categories */}
                    <div className="flex gap-2">
                      {(['all', 'fruits', 'vegetables', 'dairy'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setGroceryCategory(cat)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono uppercase cursor-pointer ${
                            groceryCategory === cat
                              ? 'bg-cyan-500 text-slate-950 font-bold'
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Product grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {groceryProducts
                        .filter((p) => groceryCategory === 'all' || p.category === groceryCategory)
                        .map((prod) => (
                          <div
                            key={prod.id}
                            className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{prod.icon}</span>
                              <div>
                                <div className="text-xs font-bold text-slate-200 font-sans">
                                  {prod.name}
                                </div>
                                <div className="text-[11px] font-mono text-cyan-400">
                                  ₹{prod.price}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleAddToCart(prod.name)}
                              className="w-full py-1 rounded bg-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-xs font-mono border border-cyan-500/40 transition-colors"
                            >
                              + Add to Cart
                            </button>
                          </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="text-xs font-mono font-bold text-slate-300">
                        LIVE CART STATE (Vanilla JS DOM Model):
                      </div>
                      {Object.keys(cartItems).length === 0 ? (
                        <div className="text-xs text-slate-500 font-mono">Cart is empty</div>
                      ) : (
                        <div className="space-y-1">
                          {Object.entries(cartItems).map(([item, qty]) => (
                            <div
                              key={item}
                              className="flex items-center justify-between text-xs font-mono text-slate-300"
                            >
                              <span>{item}</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleUpdateQty(item, -1)}
                                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span>{qty}</span>
                                <button
                                  onClick={() => handleUpdateQty(item, 1)}
                                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Repository (github.com/tamilselvi08)</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
