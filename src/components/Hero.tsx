import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Shield, Activity, Users, DollarSign, Clock, X, Check, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [aiSuggestionApplied, setAiSuggestionApplied] = useState(false);

  // Fictional live patient status data for the interactive mockup
  const patients = [
    { name: 'Liam Vance', ward: 'ER-04', status: 'critical', pulse: 104, oxygen: '91%' },
    { name: 'Marcus Brody', ward: 'ICU-12', status: 'stable', pulse: 72, oxygen: '98%' },
    { name: 'Sarah Lin', ward: 'OPD-A3', status: 'transitional', pulse: 84, oxygen: '96%' },
    { name: 'Amara Diop', ward: 'IPD-402', status: 'stable', pulse: 68, oxygen: '99%' },
  ];

  return (
    <section id="hero-section" className="relative min-h-screen lg:h-screen lg:min-h-[720px] flex items-center pt-20 pb-10 lg:pt-24 lg:pb-14 overflow-hidden bg-bg-light bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Premium ambient light flare backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-steel-teal/[0.03] to-transparent rounded-full filter blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-tr from-teal-500/[0.02] to-transparent rounded-full filter blur-[80px] pointer-events-none select-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Hero Text Panel */}
          <div id="hero-left-panel" className="lg:col-span-6 flex flex-col items-start text-left" itemScope itemType="https://schema.org/SoftwareApplication">
            <meta itemProp="applicationCategory" content="BusinessApplication" />
            <meta itemProp="operatingSystem" content="Web-based, Cloud-Native" />
            
            {/* Highly converting enterprise trust validation badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.02 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-steel-teal/[0.06] border border-steel-teal/10 rounded-full mb-6"
              id="hero-trust-badge"
            >
              <Sparkles className="h-3 w-3 text-steel-teal animate-pulse" />
              <span className="font-mono text-[9px] font-bold tracking-wider text-steel-teal uppercase">
                AI-Native Core • HIPAA compliant • SOC2 Certified
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 id="hero-headline" className="font-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.02] font-extrabold tracking-[-0.04em] text-ink mb-4">
              <motion.span
                className="block"
                itemProp="name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Hospital Intelligence,
              </motion.span>
              <motion.span
                className="block text-steel-teal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                Built for Humans.
              </motion.span>
            </h1>

            {/* Descriptive Subtext */}
            <motion.p
              id="hero-subtext"
              itemProp="description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-relaxed max-w-[560px] font-medium mb-6"
            >
              Endomatics unifies OPD, IPD, Emergency, and Billing into one beautifully cohesive, adaptive operating system.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <button
                onClick={onOpenDemo}
                className="bg-steel-teal hover:bg-steel-teal/90 text-white font-sans text-sm sm:text-base font-semibold py-4 px-6 md:px-8 rounded-full shadow-[0_10px_30px_rgba(38,97,156,0.25)] hover:shadow-[0_15px_35px_rgba(38,97,156,0.35)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 tracking-tight"
              >
                Book a Demo
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 text-muted-grey hover:text-ink font-sans text-sm sm:text-base font-semibold group transition-all duration-300 cursor-pointer"
              >
                <span>Watch Overview</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-lg font-normal">→</span>
              </button>
            </motion.div>
          </div>

              {/* Right Hero Interactive Mockup Dashboard - Simplified for Mobile */}
          <div id="hero-right-panel" className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.06)] border border-gray-100/90 overflow-hidden relative"
            >
              {/* Dashboard Mockup Header */}
              <div className="bg-steel-teal px-4 py-2.5 border-b border-steel-teal/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="font-mono text-[9px] text-white/70 uppercase tracking-wider ml-2">
                    Console // reception-panel
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-2.5 py-0.5 rounded border border-white/15 text-[9px] font-mono text-white">
                  <Sparkles className="h-2.5 w-2.5 text-white/90" />
                  <span>AI Copilot Active</span>
                </div>
              </div>
              {/* Dashboard Content Container */}
              <div className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  
                  {/* Left Column: Minimal Triage Queue Sidebar */}
                  <div className="lg:col-span-5 lg:border-r lg:border-gray-100 lg:pr-4 space-y-3">
                    {/* Queue Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-steel-teal opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-steel-teal"></span>
                        </span>
                        <span className="font-mono text-[9px] text-ink font-semibold uppercase tracking-wider">Live Triage Queue</span>
                      </div>
                      <span className="text-[8px] font-mono text-muted-grey">
                        3 Active
                      </span>
                    </div>

                    {/* Highly minimal, dense queue layout */}
                    <div className="space-y-1.5">
                      {/* Patient 1 - Critical */}
                      <div className="py-1.5 border-b border-gray-50">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-alert-danger shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-xs text-ink">Liam Vance</p>
                              <div className="flex items-center gap-1 font-mono text-[8px] text-muted-grey mt-0.5">
                                <span>ER-04</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-alert-danger font-medium">104 bpm</span>
                                <span className="text-gray-300">•</span>
                                <span>91% O₂</span>
                              </div>
                            </div>
                          </div>
                          <span className="bg-alert-danger/5 text-alert-danger text-[8px] font-mono px-1.5 py-0.5 rounded border border-alert-danger/10 font-semibold uppercase">
                            Critical
                          </span>
                        </div>
                      </div>

                      {/* Patient 2 - Urgent (Interactive) */}
                      <div className={`p-2 rounded-lg border transition-all duration-300 ${aiSuggestionApplied ? 'bg-steel-teal/[0.02] border-steel-teal/15' : 'border-gray-100/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)]'}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-xs text-ink">Sarah Lin</p>
                              <div className="flex items-center gap-1 font-mono text-[8px] text-muted-grey mt-0.5">
                                <span>OPD-A3</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-amber-500 font-medium">84 bpm</span>
                                <span className="text-gray-300">•</span>
                                <span>96% O₂</span>
                              </div>
                            </div>
                          </div>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border transition-all duration-300 font-semibold uppercase ${aiSuggestionApplied ? 'bg-steel-teal/10 text-steel-teal border-steel-teal/10' : 'bg-amber-500/5 text-amber-600 border-amber-500/10'}`}>
                            {aiSuggestionApplied ? 'Optimized' : 'Urgent'}
                          </span>
                        </div>
                        {/* Status detail when applied */}
                        <p className={`text-[8px] font-mono mt-1 transition-colors duration-300 ${aiSuggestionApplied ? 'text-steel-teal' : 'text-muted-grey'}`}>
                          {aiSuggestionApplied ? 'Re-routed: Room 4 (Peds)' : 'Assigned: Box 3 (Std)'}
                        </p>
                      </div>

                      {/* Patient 3 - Standard */}
                      <div className="py-1.5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-steel-teal shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-xs text-ink">Marcus Brody</p>
                              <div className="flex items-center gap-1 font-mono text-[8px] text-muted-grey mt-0.5">
                                <span>ICU-12</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-steel-teal font-medium">72 bpm</span>
                                <span className="text-gray-300">•</span>
                                <span>98% O₂</span>
                              </div>
                            </div>
                          </div>
                          <span className="bg-steel-teal/5 text-steel-teal text-[8px] font-mono px-1.5 py-0.5 rounded border border-steel-teal/10 font-semibold uppercase">
                            Stable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Stats & AI Assistant Panel */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
                    
                    {/* Key Stats Row (KPI Cards) */}
                    <div>
                      <p className="font-mono text-[8px] text-muted-grey uppercase tracking-wider mb-1.5 font-bold">Patient Data Overview</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 bg-bg-light rounded border border-gray-100 flex flex-col justify-between">
                          <span className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-semibold">Patient Load</span>
                          <p className="font-display text-sm font-bold text-ink mt-0.5">142</p>
                          <span className="text-[7px] text-muted-grey mt-0.5">Admitted</span>
                        </div>
                        <div className="p-2 bg-bg-light rounded border border-gray-100 flex flex-col justify-between">
                          <span className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-semibold">Emergency (ER)</span>
                          <p className="font-display text-sm font-bold text-ink mt-0.5">1 <span className="text-[8px] font-sans font-semibold text-alert-danger">Critical</span></p>
                          <span className="text-[7px] text-muted-grey mt-0.5">Liam Vance (Active)</span>
                        </div>
                        <div className="p-2 bg-bg-light rounded border border-gray-100 flex flex-col justify-between">
                          <span className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-semibold">Walk-ins (OPD)</span>
                          <p className="font-display text-sm font-bold text-ink mt-0.5">2 <span className="text-[8px] font-sans font-semibold text-amber-500">Wait</span></p>
                          <span className="text-[7px] text-muted-grey mt-0.5">Avg: 12m</span>
                        </div>
                      </div>
                    </div>

                    {/* Active Staff & Allocation */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[8px] text-muted-grey uppercase tracking-wider font-bold">Active Staff & Patient Allocation</span>
                        <span className="text-[8px] font-mono text-steel-teal font-semibold uppercase">88% Live Coverage</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 bg-bg-light/80 p-2 rounded border border-gray-100">
                        {/* Stat 1 */}
                        <div className="bg-white p-2 rounded border border-gray-50 flex items-center gap-2">
                          <div className="h-6.5 w-6.5 rounded bg-steel-teal/10 flex items-center justify-center text-steel-teal font-bold text-[10px]">
                            12
                          </div>
                          <div className="text-left leading-none">
                            <p className="font-semibold text-[10px] text-ink">Physicians On-Duty</p>
                            <p className="text-[7.5px] text-muted-grey mt-0.5 font-mono">3 on standby/on-call</p>
                          </div>
                        </div>
                        {/* Stat 2 */}
                        <div className="bg-white p-2 rounded border border-gray-50 flex items-center gap-2">
                          <div className="h-6.5 w-6.5 rounded bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-[10px]">
                            1:4
                          </div>
                          <div className="text-left leading-none">
                            <p className="font-semibold text-[10px] text-ink">Doc-Patient Ratio</p>
                            <p className="text-[7.5px] text-muted-grey mt-0.5 font-mono">Optimal safety range</p>
                          </div>
                        </div>
                        {/* Stat 3 */}
                        <div className="bg-white p-2 rounded border border-gray-50 flex items-center gap-2">
                          <div className="h-6.5 w-6.5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-[10px]">
                            18
                          </div>
                          <div className="text-left leading-none">
                            <p className="font-semibold text-[10px] text-ink">Active Consults</p>
                            <p className="text-[7.5px] text-muted-grey mt-0.5 font-mono">Real-time OPD lines</p>
                          </div>
                        </div>
                        {/* Stat 4 */}
                        <div className="bg-white p-2 rounded border border-gray-50 flex items-center gap-2">
                          <div className="h-6.5 w-6.5 rounded bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                            94%
                          </div>
                          <div className="text-left leading-none">
                            <p className="font-semibold text-[10px] text-ink">Response SLA</p>
                            <p className="text-[7.5px] text-muted-grey mt-0.5 font-mono">Avg triage response &lt;3m</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Integrated AI Assistant */}
                    <div className={`p-3 rounded-lg border transition-all duration-300 ${aiSuggestionApplied ? 'bg-steel-teal/[0.01] border-steel-teal/15' : 'bg-bg-light border-gray-100'}`}>
                      <div className="flex items-start gap-2.5">
                        <div className={`h-7 w-7 rounded flex items-center justify-center shrink-0 transition-all duration-300 ${aiSuggestionApplied ? 'bg-steel-teal/10 text-steel-teal' : 'bg-ink/5 text-ink'}`}>
                          <Sparkles className="h-3.5 w-3.5" />
                        </div>
                        <div className="space-y-2 w-full">
                          <div className="text-left">
                            <p className="text-[9px] font-mono uppercase tracking-wider text-steel-teal font-bold">AI Queue Optimizer Recommendation</p>
                            <p className="text-[11px] text-ink/80 mt-1 font-medium leading-relaxed">
                              {aiSuggestionApplied ? (
                                <span>OPD flow optimized. Re-routed <strong className="text-steel-teal font-semibold">Sarah Lin</strong> to Room 4 to minimize pediatric waiting times by <span className="text-steel-teal font-bold">14m</span>.</span>
                              ) : (
                                <span>Re-route <strong className="text-steel-teal font-semibold">Sarah Lin</strong> (Pediatric Walk-In) from Box 3 to Room 4 for immediate specialist consult.</span>
                              )}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                            <div className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-steel-teal animate-pulse" />
                              <span className="text-[8px] font-mono text-muted-grey">Confidence Level: 97%</span>
                            </div>
                            
                            <button 
                              onClick={() => setAiSuggestionApplied(!aiSuggestionApplied)}
                              className={`text-[8px] font-mono font-bold py-1 px-3 rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer border ${aiSuggestionApplied ? 'bg-steel-teal/10 hover:bg-steel-teal/20 text-steel-teal border-steel-teal/10' : 'bg-ink hover:bg-black text-white border-ink'}`}
                            >
                              {aiSuggestionApplied ? 'Restore' : 'Apply'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Lightbox Video Player Modal for Overview Video */}
      {showVideo && (
        <div id="video-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Elegant high fidelity presentation fallback instead of raw video */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white bg-gradient-to-br from-[#0B1513] to-ink">
              <Activity className="h-16 w-16 text-steel-teal animate-pulse mb-6" />
              <h3 className="font-display text-3xl font-bold mb-3">Endomatics Clinical Operating Core</h3>
              <p className="text-sm text-muted-grey max-w-lg mb-8 leading-relaxed">
                Watch how our system orchestrates live queues, bed sensors, automated stock logs, and touchless charge captures in real time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full text-left">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-steel-teal font-mono text-xs uppercase font-semibold">
                    <Shield className="h-4 w-4" />
                    <span>01 // Clinical</span>
                  </div>
                  <p className="text-xs text-muted-grey">Prescriptions seamlessly route into nurse rosters and bedside diagnostics dashboards instantly.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-steel-teal font-mono text-xs uppercase font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>02 // Financial</span>
                  </div>
                  <p className="text-xs text-muted-grey">Real-time charge triggers map every syringe, bedside hour, and lab assay straight to the patient ledger.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-steel-teal font-mono text-xs uppercase font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>03 // Operations</span>
                  </div>
                  <p className="text-xs text-muted-grey">Predictive queues balance nurse shifts and expedite inpatient transfers with zero delay bottlenecks.</p>
                </div>
              </div>
              <button
                onClick={onOpenDemo}
                className="mt-8 bg-steel-teal hover:bg-steel-teal/90 text-white font-sans text-xs font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
              >
                Schedule Interactive Demonstration Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
