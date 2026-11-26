import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Shield,
  Activity,
  DollarSign,
  Clock,
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { LivePulseWaveform } from './motion/ClinicalMotion';

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [aiSuggestionApplied, setAiSuggestionApplied] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative min-h-[auto] lg:min-h-[780px] flex items-center pt-24 pb-14 lg:pt-28 lg:pb-20 overflow-hidden bg-bg-light"
    >
      {/* Architectural Clinical Backdrop: Soft Mesh + Precision Grid */}
      <div className="absolute inset-0 clinical-grid-bg opacity-45 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(38,97,156,0.10)_0%,rgba(43,179,163,0.06)_45%,transparent_72%)] blur-2xl pointer-events-none select-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 left-[-6%] w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,179,163,0.08)_0%,transparent_70%)] blur-2xl pointer-events-none select-none"
      />

      {/* Precision Concentric SVG Rings behind Right Stage */}
      <svg
        aria-hidden="true"
        className="hidden lg:block absolute right-[2%] top-1/2 -translate-y-1/2 w-[640px] h-[640px] pointer-events-none select-none opacity-60"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="190" stroke="rgba(38,97,156,0.08)" strokeWidth="1" strokeDasharray="4 6" />
        <motion.circle
          cx="300"
          cy="300"
          r="250"
          stroke="rgba(43,179,163,0.12)"
          strokeWidth="1"
          strokeDasharray="8 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        />
        <circle cx="300" cy="300" r="295" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
      </svg>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Panel: Editorial Designer Typography */}
          <div
            id="hero-left-panel"
            className="lg:col-span-6 flex flex-col items-start text-left"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            <meta itemProp="applicationCategory" content="BusinessApplication" />
            <meta itemProp="operatingSystem" content="Web-based, Cloud-Native" />

            {/* Clinical OS Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              id="hero-trust-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-steel-teal/15 shadow-[0_4px_16px_rgba(38,97,156,0.07)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-clinical-mint" />
              </span>
              <span className="font-sans text-xs font-semibold text-steel-teal tracking-tight">
                Autonomous Hospital Operating System
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <h1
              id="hero-headline"
              className="font-display text-[42px] sm:text-[54px] lg:text-[66px] leading-[1.03] font-extrabold tracking-[-0.035em] text-ink mb-6"
            >
              <span
                itemProp="name"
                className="block font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-steel-teal mb-2.5"
              >
                ENDOMATICS · Cloud HMS
              </span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Hospital{' '}
                <span className="bg-gradient-to-r from-steel-teal via-[#2B7A9E] to-clinical-mint bg-clip-text text-transparent">
                  Intelligence,
                </span>
              </motion.span>
              <motion.span
                className="block mt-1 font-bold text-ink/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                Built for{' '}
                <span className="relative inline-block">
                  Humans.
                  <motion.svg
                    viewBox="0 0 220 12"
                    fill="none"
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 overflow-visible"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2 8 C 60 2, 160 2, 218 8"
                      stroke="#2BB3A3"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.svg>
                </span>
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              id="hero-subtext"
              itemProp="description"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-[520px] font-medium mb-8"
            >
              Unify OPD, IPD, Emergency, Pharmacy, and Revenue Cycle Management inside one calm, AI-native operating layer—engineered for zero leakage and human speed.
            </motion.p>

            {/* Material 3 Action Cluster */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9"
            >
              <motion.button
                type="button"
                onClick={onOpenDemo}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm sm:text-[15px] font-semibold py-3.5 px-7 rounded-full shadow-[0_12px_28px_rgba(38,97,156,0.28)] hover:shadow-[0_16px_36px_rgba(38,97,156,0.36)] transition-all cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setShowVideo(true)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white text-ink font-sans text-sm sm:text-[15px] font-semibold py-3 px-5 rounded-full border border-slate-200/90 shadow-xs transition-all cursor-pointer group"
              >
                <span className="w-7 h-7 rounded-full bg-surface-tonal flex items-center justify-center text-steel-teal group-hover:bg-steel-teal group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span>Watch Overview</span>
              </motion.button>
            </motion.div>

            {/* Editorial KPI Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-[520px] pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4"
            >
              {[
                { value: '0.00%', label: 'Revenue Leakage' },
                { value: '14 Days', label: 'Full Go-Live' },
                { value: '98.4%', label: 'Billing Accuracy' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-lg sm:text-xl font-extrabold text-ink tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] text-muted-grey uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Panel: Spatial Layered AI Command Center */}
          <div id="hero-right-panel" className="lg:col-span-6 relative lg:py-6">
            {/* Top-Right Floating Satellite: Autonomous Claim Scrub */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: [0, -5, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.45 },
                scale: { duration: 0.5, delay: 0.45 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="hidden sm:flex items-center gap-3 m3-surface-elevated rounded-2xl px-4 py-2.5 absolute -top-2 right-2 lg:-right-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-clinical-mint/15 flex items-center justify-center text-clinical-mint">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted-grey uppercase font-bold tracking-wider">
                  Claim Scrub AI
                </p>
                <p className="font-display text-xs font-extrabold text-ink">
                  99.4% Clean · <span className="text-clinical-mint">$0 Leakage</span>
                </p>
              </div>
            </motion.div>

            {/* Primary Elevated Clinical Console */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="w-full m3-surface-elevated rounded-3xl overflow-hidden relative z-10"
            >
              {/* Console Top Bar */}
              <div className="bg-surface-tonal/95 px-4 sm:px-5 py-3 border-b border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    Console // AI-Triage-Core
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-full border border-steel-teal/15 shadow-2xs">
                  <Cpu className="h-3 w-3 text-steel-teal" />
                  <span className="font-mono text-[9px] font-bold text-steel-teal uppercase tracking-wider">
                    AI Copilot Active
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left: Live Triage Queue */}
                  <div className="lg:col-span-5 lg:border-r lg:border-slate-100 lg:pr-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-mint opacity-50" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-clinical-mint" />
                        </span>
                        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider">
                          Live Triage
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-muted-grey">3 Active</span>
                    </div>

                    <div className="space-y-2">
                      {/* Patient 1 - Critical with ECG */}
                      <div className="p-2.5 rounded-xl bg-alert-danger/[0.03] border border-alert-danger/15">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-xs text-ink">Liam Vance</p>
                            <p className="font-mono text-[9px] text-muted-grey mt-0.5">
                              ER-04 • <span className="text-alert-danger font-semibold">104 bpm</span> • 91% O₂
                            </p>
                          </div>
                          <span className="bg-alert-danger/10 text-alert-danger text-[8px] font-mono px-2 py-0.5 rounded-full font-bold uppercase">
                            Critical
                          </span>
                        </div>
                        <div className="mt-1.5">
                          <LivePulseWaveform color="#C94B2C" height={18} speedSec={1.8} className="w-full" />
                        </div>
                      </div>

                      {/* Patient 2 - Interactive AI Re-routed Card */}
                      <motion.div
                        layout
                        className={`p-2.5 rounded-xl border transition-colors duration-300 ${
                          aiSuggestionApplied
                            ? 'bg-clinical-mint/[0.06] border-clinical-mint/30'
                            : 'bg-bg-light border-slate-200/70'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-xs text-ink">Sarah Lin</p>
                            <p className="font-mono text-[9px] text-muted-grey mt-0.5">
                              OPD-A3 • <span className="text-amber-600 font-semibold">84 bpm</span> • 96% O₂
                            </p>
                          </div>
                          <span
                            className={`text-[8px] font-mono px-2 py-0.5 rounded-full font-bold uppercase transition-colors ${
                              aiSuggestionApplied
                                ? 'bg-clinical-mint/15 text-clinical-mint'
                                : 'bg-amber-500/10 text-amber-700'
                            }`}
                          >
                            {aiSuggestionApplied ? 'Optimized' : 'Urgent'}
                          </span>
                        </div>
                        <p
                          className={`text-[9px] font-mono mt-1.5 font-medium ${
                            aiSuggestionApplied ? 'text-steel-teal' : 'text-muted-grey'
                          }`}
                        >
                          {aiSuggestionApplied ? '✓ Routed: Room 4 (Peds Fast-Track)' : 'Assigned: Box 3 (Standard)'}
                        </p>
                      </motion.div>

                      {/* Patient 3 - Stable */}
                      <div className="p-2.5 rounded-xl bg-bg-light/70 border border-slate-100">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-xs text-ink">Marcus Brody</p>
                            <p className="font-mono text-[9px] text-muted-grey mt-0.5">
                              ICU-12 • <span className="text-steel-teal font-semibold">72 bpm</span> • 98% O₂
                            </p>
                          </div>
                          <span className="bg-steel-teal/10 text-steel-teal text-[8px] font-mono px-2 py-0.5 rounded-full font-bold uppercase">
                            Stable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: KPI Strip + AI Optimizer Card */}
                  <div className="hidden lg:flex lg:col-span-7 flex-col justify-between space-y-3.5">
                    <div>
                      <p className="font-mono text-[9px] text-muted-grey uppercase tracking-wider mb-2 font-bold">
                        Real-Time Telemetry
                      </p>
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-2.5 bg-bg-light rounded-xl border border-slate-100">
                          <span className="font-mono text-[8px] text-muted-grey uppercase font-bold">Patient Load</span>
                          <p className="font-display text-lg font-extrabold text-ink mt-0.5">142</p>
                          <span className="text-[9px] text-muted-grey">Admitted</span>
                        </div>
                        <div className="p-2.5 bg-bg-light rounded-xl border border-slate-100">
                          <span className="font-mono text-[8px] text-muted-grey uppercase font-bold">Emergency</span>
                          <p className="font-display text-lg font-extrabold text-ink mt-0.5">
                            1 <span className="text-[10px] font-sans font-semibold text-alert-danger">Crit</span>
                          </p>
                          <span className="text-[9px] text-muted-grey">ER-04 Active</span>
                        </div>
                        <div className="p-2.5 bg-bg-light rounded-xl border border-slate-100">
                          <span className="font-mono text-[8px] text-muted-grey uppercase font-bold">OPD Wait</span>
                          <p className="font-display text-lg font-extrabold text-steel-teal mt-0.5">
                            {aiSuggestionApplied ? '4m' : '12m'}
                          </p>
                          <span className="text-[9px] text-clinical-mint font-semibold">
                            {aiSuggestionApplied ? '-66% AI Saved' : '2 Waiting'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Telemetry Waveform Strip */}
                    <div className="p-3 rounded-xl bg-bg-light/80 border border-slate-100 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[8px] text-muted-grey uppercase tracking-wider font-bold">
                          Autonomous Ledger &amp; Vitals Sync
                        </p>
                        <p className="text-[11px] font-semibold text-ink mt-0.5">
                          1,420 Allergy Checks · 100% Verified
                        </p>
                      </div>
                      <LivePulseWaveform color="#26619C" height={24} className="w-24 shrink-0" />
                    </div>

                    {/* Interactive AI Queue Optimizer Card */}
                    <div
                      className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                        aiSuggestionApplied
                          ? 'bg-clinical-mint/[0.06] border-clinical-mint/30'
                          : 'm3-surface-tonal'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            aiSuggestionApplied
                              ? 'bg-clinical-mint text-white'
                              : 'bg-steel-teal text-white'
                          }`}
                        >
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div className="w-full space-y-2">
                          <div>
                            <p className="text-[9px] font-mono uppercase tracking-wider text-steel-teal font-bold">
                              AI Queue Optimizer Recommendation
                            </p>
                            <p className="text-xs text-ink/85 mt-1 font-medium leading-relaxed">
                              {aiSuggestionApplied ? (
                                <span>
                                  OPD flow balanced. <strong className="text-steel-teal">Sarah Lin</strong> routed to Room 4 — pediatric wait reduced by <strong className="text-clinical-mint">14m</strong>.
                                </span>
                              ) : (
                                <span>
                                  Re-route <strong className="text-steel-teal">Sarah Lin</strong> (Pediatric Walk-In) from Box 3 to Room 4 for immediate specialist consult.
                                </span>
                              )}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-steel-teal/10 pt-2">
                            <span className="text-[9px] font-mono text-slate-500 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-clinical-mint" />
                              Confidence: 97%
                            </span>

                            <motion.button
                              type="button"
                              whileTap={{ scale: 0.96 }}
                              onClick={() => setAiSuggestionApplied(!aiSuggestionApplied)}
                              className={`text-[10px] font-mono font-bold py-1.5 px-3.5 rounded-full uppercase tracking-wider transition-all cursor-pointer ${
                                aiSuggestionApplied
                                  ? 'bg-white text-steel-teal border border-steel-teal/20 hover:bg-slate-50'
                                  : 'bg-ink text-white hover:bg-steel-teal shadow-xs'
                              }`}
                            >
                              {aiSuggestionApplied ? 'Restore' : 'Apply AI Route'}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Left Floating Satellite: ICU Shift Synthesis */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: [0, 5, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.55 },
                scale: { duration: 0.5, delay: 0.55 },
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="hidden sm:flex items-center gap-3 m3-surface-elevated rounded-2xl px-4 py-2.5 absolute -bottom-2 left-2 lg:-left-4 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-surface-tonal flex items-center justify-center text-steel-teal">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[9px] text-muted-grey uppercase font-bold tracking-wider">
                  ICU Handover AI
                </p>
                <p className="font-display text-xs font-extrabold text-ink">
                  &lt; 2.0s <span className="text-steel-teal font-semibold">Auto-Synthesized</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview Lightbox */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            id="video-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-[#0B1628] border border-white/10 p-6 sm:p-10 text-center text-white"
            >
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                aria-label="Close overview"
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-steel-teal/20 border border-steel-teal/30 mb-5">
                <Activity className="h-7 w-7 text-clinical-mint animate-pulse" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                ENDOMATICS Clinical Operating Core
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
                See how our AI-native architecture orchestrates live queues, bed sensors, automated stock logs, and touchless charge captures in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-clinical-mint font-mono text-xs uppercase font-semibold">
                    <Shield className="h-4 w-4" />
                    <span>01 // Clinical</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Prescriptions seamlessly route into nurse rosters and bedside diagnostics dashboards instantly.
                  </p>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-clinical-mint font-mono text-xs uppercase font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>02 // Financial</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Real-time charge triggers map every syringe, bedside hour, and lab assay straight to the patient ledger.
                  </p>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-clinical-mint font-mono text-xs uppercase font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>03 // Operations</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Predictive queues balance nurse shifts and expedite inpatient transfers with zero delay bottlenecks.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowVideo(false);
                  onOpenDemo();
                }}
                className="mt-8 inline-flex items-center gap-2 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-full transition-colors cursor-pointer"
              >
                <span>Schedule Interactive Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
