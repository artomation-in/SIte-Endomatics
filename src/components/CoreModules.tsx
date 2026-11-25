import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Pill,
  TrendingUp,
  DollarSign,
  FileText,
  Layers,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Activity,
  Cpu,
} from 'lucide-react';
import { LivePulseWaveform } from './motion/ClinicalMotion';

const aiFeatures = [
  {
    id: 'ai-queue',
    shortLabel: 'Queue AI',
    title: 'Queue Optimization',
    metric: '-14m',
    metricLabel: 'ER Wait Saved',
    tags: ['Real-Time Triage', 'Dynamic Routing', '97% Confidence'],
    description:
      'Continuously parses patient registrations to dynamically optimize clinical triage paths across every department.',
    icon: Sparkles,
  },
  {
    id: 'ai-med',
    shortLabel: 'Safety Guard',
    title: 'Medication Safety',
    metric: '100%',
    metricLabel: 'Allergy Verified',
    tags: ['Drug-Drug Screen', 'Batch Expiry', 'Zero Error'],
    description:
      'Double-verifies electronic prescriptions against allergy profiles, medication history, and live batch expiration.',
    icon: Pill,
  },
  {
    id: 'ai-capacity',
    shortLabel: 'Capacity AI',
    title: 'Capacity Forecast',
    metric: '72h',
    metricLabel: 'ICU Horizon',
    tags: ['Bed Heatmaps', 'Surge Modeling', '94% Accuracy'],
    description:
      'Predicts bed, ward, and ICU occupancy up to 72 hours ahead, optimizing discharge windows and nurse rosters.',
    icon: TrendingUp,
  },
  {
    id: 'ai-billing',
    shortLabel: 'Leakage Audit',
    title: 'Leakage Audit',
    metric: '0.00%',
    metricLabel: 'Revenue Leakage',
    tags: ['Auto Charge Capture', 'EHR-to-CPT', 'Audit Ledger'],
    description:
      'Tracks administered drugs, lab panels, and bed-hours, reconciling clinical logs directly with billing ledgers.',
    icon: DollarSign,
  },
  {
    id: 'ai-handover',
    shortLabel: 'Auto-Handover',
    title: 'Shift Handover',
    metric: '<2s',
    metricLabel: 'Synthesis',
    tags: ['Vitals Telemetry', 'JCI Compliant', 'Peer-Reviewed'],
    description:
      'Converts complex patient telemetry and nursing logs into structured, peer-reviewed shift handover documents.',
    icon: FileText,
  },
  {
    id: 'ai-stock',
    shortLabel: 'Stock Predictor',
    title: 'Stock Predictor',
    metric: '99.9%',
    metricLabel: 'Supply Assurance',
    tags: ['Burn-Rate ML', 'Auto-PO Trigger', 'FIFO Rotation'],
    description:
      'Models department burn rates to automatically trigger restocking orders before critical supplies run low.',
    icon: Layers,
  },
];

const AUTO_ADVANCE_MS = 3500;

/* ─── Compact, Crisp Material HMS Simulation Screens ──────────────────────────────── */

function QueueScreen() {
  const patients = [
    { name: 'Amara Diop', dept: 'OPD-Cardiology', token: 'T-042', status: 'checked-in', initials: 'AD' },
    { name: 'Raj Patel', dept: 'Lab Collection', token: 'T-043', status: 'ai-routed', initials: 'RP' },
    { name: 'Eva Müller', dept: 'OPD-General', token: 'T-044', status: 'waiting', initials: 'EM' },
  ];
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-mint opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-clinical-mint" />
          </span>
          Live Triage Queue
        </span>
        <span className="font-mono text-[10px] text-muted-grey">3 Active</span>
      </div>
      <div className="space-y-2">
        {patients.map((p, idx) => (
          <motion.div
            key={p.token}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className={`p-2.5 rounded-xl border flex items-center justify-between ${p.status === 'ai-routed'
              ? 'bg-surface-tonal/70 border-steel-teal/25'
              : 'bg-bg-light/70 border-slate-200/70'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white border border-steel-teal/15 flex items-center justify-center text-[10px] font-bold text-steel-teal font-mono">
                {p.initials}
              </div>
              <div>
                <p className="font-semibold text-xs text-ink">{p.name}</p>
                <p className="font-mono text-[9px] text-muted-grey">
                  {p.dept} • {p.token}
                </p>
              </div>
            </div>
            {p.status === 'ai-routed' ? (
              <span className="text-[9px] font-mono text-steel-teal font-bold bg-white px-2.5 py-0.5 rounded-full border border-steel-teal/15 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Routed
              </span>
            ) : p.status === 'checked-in' ? (
              <span className="text-[9px] font-mono text-clinical-mint font-bold bg-clinical-mint/10 px-2.5 py-0.5 rounded-full">
                Checked In
              </span>
            ) : (
              <span className="text-[9px] font-mono text-amber-700 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                Waiting
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="bg-surface-tonal border border-steel-teal/15 rounded-xl p-3 flex items-start gap-2.5">
        <Clock className="w-4 h-4 text-steel-teal shrink-0 mt-0.5" />
        <p className="text-xs text-ink/85 font-medium leading-snug">
          <strong className="text-steel-teal">AI Route:</strong> Raj Patel redirected to Lab Wing B — wait reduced from 18m to 4m.
        </p>
      </div>
    </div>
  );
}

function MedicationScreen() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-steel-teal" />
          Prescription Safety Check
        </span>
        <span className="font-mono text-[9px] text-clinical-mint font-bold bg-clinical-mint/10 px-2 py-0.5 rounded-full">
          Auto-Verified
        </span>
      </div>
      <div className="bg-bg-light/70 rounded-2xl border border-slate-200/70 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm text-ink">Ceftriaxone IV (2g)</p>
            <p className="font-mono text-[10px] text-muted-grey">Patient: Liam Vance • #ER-204</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-white border border-steel-teal/15 flex items-center justify-center">
            <Pill className="w-4 h-4 text-steel-teal" />
          </div>
        </div>
        <div className="border-t border-slate-200/70 pt-2.5 space-y-2">
          {[
            { label: 'Allergy Profile', value: 'No matches' },
            { label: 'Drug Interaction', value: 'Clear' },
            { label: 'Inventory Batch', value: 'Valid • Exp 2026' },
          ].map((c, idx) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.06 }}
              className="flex items-center justify-between"
            >
              <span className="text-xs text-muted-grey font-medium">{c.label}</span>
              <span className="flex items-center gap-1 text-xs text-clinical-mint font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {c.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-clinical-mint/10 border border-clinical-mint/25 rounded-xl p-2.5 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0" />
        <p className="text-xs text-ink font-medium">Verified — approved for pharmacy release.</p>
      </div>
    </div>
  );
}

function CapacityScreen() {
  const days = [
    { label: 'Sat', load: 78, peak: false },
    { label: 'Sun', load: 85, peak: false },
    { label: 'Mon', load: 94, peak: true },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-steel-teal" />
          72h Occupancy Forecast
        </span>
        <span className="font-mono text-[9px] text-steel-teal font-bold bg-surface-tonal px-2.5 py-0.5 rounded-full">
          AI Predicted
        </span>
      </div>
      <div className="bg-bg-light/70 rounded-2xl border border-slate-200/70 p-4">
        <div className="flex items-end justify-between gap-4 h-28">
          {days.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-1.5">
              <span className={`font-display text-xs font-bold ${d.peak ? 'text-steel-teal' : 'text-ink'}`}>
                {d.load}%
              </span>
              <div className="w-full bg-white rounded-t-xl overflow-hidden flex items-end h-16 border border-slate-200/60">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${d.load}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-t-lg ${d.peak ? 'bg-steel-teal' : 'bg-steel-teal/35'}`}
                />
              </div>
              <span className="font-mono text-[10px] text-muted-grey uppercase font-semibold">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface-tonal border border-steel-teal/15 rounded-xl p-3 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-steel-teal shrink-0 mt-0.5" />
        <p className="text-xs text-ink/85 font-medium leading-snug">
          <strong className="text-steel-teal">Peak Alert:</strong> Monday hits 94% — AI recommends expediting 12 Sunday discharges.
        </p>
      </div>
    </div>
  );
}

function BillingScreen() {
  const charges = [
    { item: 'OPD Consultation', source: 'EHR', amount: '$150.00' },
    { item: 'Hematology Panel', source: 'LIS', amount: '$85.00' },
    { item: 'Ceftriaxone IV (2g)', source: 'Rx', amount: '$42.50' },
    { item: 'IPD Bed — Room 402', source: 'ADT', amount: '$600.00' },
  ];
  return (
    <div className="space-y-2.5">
      <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-1.5">
        <DollarSign className="w-4 h-4 text-steel-teal" />
        Auto-Captured Charges
      </span>
      <div className="bg-bg-light/70 rounded-2xl border border-slate-200/70 p-3 space-y-1.5">
        {charges.map((c) => (
          <div key={c.item} className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-clinical-mint shrink-0" />
              <span className="text-xs text-ink font-medium">{c.item}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-muted-grey bg-white px-2 py-0.5 rounded-full border border-slate-200/60">
                {c.source}
              </span>
              <span className="text-xs font-mono text-ink font-bold">{c.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-clinical-mint/10 border border-clinical-mint/25 rounded-xl p-3">
        <div>
          <p className="text-[9px] font-mono text-clinical-mint font-bold uppercase tracking-wider">Leakage Audit</p>
          <p className="text-xs text-ink/85 font-medium">2 unlogged bed-hours recovered</p>
        </div>
        <span className="font-display text-base font-extrabold text-steel-teal">+$200.00</span>
      </div>
    </div>
  );
}

function HandoverScreen() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-steel-teal" />
          ICU Shift Handover
        </span>
        <LivePulseWaveform color="#2BB3A3" height={18} className="w-20" />
      </div>
      <div className="bg-bg-light/70 rounded-2xl border border-slate-200/70 p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <div>
            <p className="font-semibold text-sm text-ink">Patient #12 — Marcus B.</p>
            <p className="font-mono text-[10px] text-muted-grey">MRN: #20241204 • ICU-12</p>
          </div>
          <span className="text-[9px] font-mono text-steel-teal font-bold bg-white px-2.5 py-0.5 rounded-full border border-steel-teal/15">
            Stable
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2.5">
          {[
            { label: 'HR', value: '72 bpm' },
            { label: 'SpO₂', value: '98%' },
            { label: 'BP', value: '120/80' },
          ].map((v) => (
            <div key={v.label} className="bg-white rounded-xl border border-slate-100 p-2 text-center">
              <p className="font-mono text-[8px] text-muted-grey uppercase font-bold">{v.label}</p>
              <p className="font-display text-xs font-bold text-ink mt-0.5">{v.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-surface-tonal border border-steel-teal/15 rounded-xl p-2.5">
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider mb-0.5">
            AI Synthesized Summary
          </p>
          <p className="text-xs text-ink/85 font-medium leading-relaxed italic">
            &ldquo;Post-op state stable. Normal sinus rhythm, SpO₂ sustained on room air.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

function StockScreen() {
  return (
    <div className="space-y-2.5">
      <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider flex items-center gap-1.5">
        <Layers className="w-4 h-4 text-steel-teal" />
        Pharmacy Stock Monitor
      </span>
      <div className="bg-bg-light/70 rounded-2xl border border-slate-200/70 p-3.5 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="font-semibold text-xs text-ink">Ceftriaxone IV</p>
            <span className="text-xs font-mono text-amber-600 font-bold">14% remaining</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-200/60">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '14%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-amber-500 rounded-full"
            />
          </div>
          <p className="font-mono text-[9px] text-muted-grey mt-1">Threshold: 15% • 21 vials left</p>
        </div>
        <div className="border-t border-slate-200/70 pt-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="font-semibold text-xs text-ink">Normal Saline</p>
            <span className="text-xs font-mono text-clinical-mint font-bold">82% remaining</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-200/60">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-clinical-mint rounded-full"
            />
          </div>
          <p className="font-mono text-[9px] text-muted-grey mt-1">Healthy stock • 410 units</p>
        </div>
      </div>
      <div className="bg-surface-tonal border border-steel-teal/15 rounded-xl p-2.5 flex items-center gap-2">
        <Activity className="w-4 h-4 text-steel-teal shrink-0" />
        <p className="text-xs text-ink/85 font-medium">
          Auto-PO <strong className="text-steel-teal">#9403</strong> triggered — 200 vials approved.
        </p>
      </div>
    </div>
  );
}

const screenMap: Record<string, React.FC> = {
  'ai-queue': QueueScreen,
  'ai-med': MedicationScreen,
  'ai-capacity': CapacityScreen,
  'ai-billing': BillingScreen,
  'ai-handover': HandoverScreen,
  'ai-stock': StockScreen,
};

/* ─── Single-Viewport Bento + Spatial AI Stage ──────────────────────────────────── */

export default function CoreModules() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + aiFeatures.length) % aiFeatures.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aiFeatures.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = aiFeatures[activeIndex];
  const ActiveIcon = active.icon;
  const ScreenComponent = screenMap[active.id];

  return (
    <section
      id="features"
      className="py-10 lg:py-14 lg:min-h-[calc(100vh-72px)] flex items-center bg-white border-b border-slate-200/70 relative overflow-hidden"
    >
      <div className="absolute inset-0 clinical-grid-bg opacity-35 pointer-events-none" />

      <div
        className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* LEFT COLUMN: Compact Header + 2x3 Interactive AI Bento Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-steel-teal tracking-[0.14em] uppercase font-bold bg-surface-tonal border border-steel-teal/15 px-3 py-1 rounded-full">
                <Cpu className="w-3 h-3 text-steel-teal" />
                <span>AI-Native Operations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-clinical-mint animate-pulse" />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-ink mt-3 leading-[1.08]">
                <span className="bg-gradient-to-r from-steel-teal via-[#2B7A9E] to-clinical-mint bg-clip-text text-transparent">
                  Autonomous intelligence
                </span>{' '}
                at every care point.
              </h2>

              <p className="font-sans text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
                Six specialized neural engines running continuously beneath your hospital workflows.
              </p>
            </div>

            {/* 2x3 Bento Selector Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {aiFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`relative text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden group ${isSelected
                      ? 'bg-surface-tonal/90 border-steel-teal/35 shadow-[0_6px_20px_rgba(38,97,156,0.08)]'
                      : 'bg-bg-light/60 border-slate-200/70 hover:bg-white hover:border-slate-300/80'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isSelected
                          ? 'bg-steel-teal text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200/70 group-hover:text-steel-teal'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`font-display text-sm font-extrabold tracking-tight ${isSelected ? 'text-steel-teal' : 'text-ink/80'
                          }`}
                      >
                        {feature.metric}
                      </span>
                    </div>

                    <p className="font-display text-xs sm:text-[13px] font-bold text-ink leading-tight">
                      {feature.title}
                    </p>
                    <p className="font-mono text-[9px] text-muted-grey uppercase tracking-wider mt-0.5">
                      {feature.metricLabel}
                    </p>

                    {/* Active Auto-Advance Progress Line */}
                    {isSelected && (
                      <motion.div
                        key={`progress-${activeIndex}-${isPaused ? 'p' : 'r'}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isPaused ? 0 : 1 }}
                        transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-steel-teal to-clinical-mint"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Designer Dark-Clinical Spatial Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B1628] p-5 sm:p-7 relative overflow-hidden shadow-[0_24px_60px_rgba(11,22,40,0.22)] border border-white/10">
              {/* Ambient Neural Glow & Concentric Precision Rings */}
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(43,179,163,0.22)_0%,rgba(38,97,156,0.12)_45%,transparent_75%)] blur-2xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(38,97,156,0.22)_0%,transparent_70%)] blur-2xl pointer-events-none"
              />

              {/* Top Stage Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-clinical-mint">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-clinical-mint font-bold uppercase tracking-wider">
                        Engine {String(activeIndex + 1).padStart(2, '0')} // Live
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous AI engine"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next AI engine"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Elevated Crisp Material Simulation Card inside Dark Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl relative z-10"
                >
                  {ScreenComponent && <ScreenComponent />}
                </motion.div>
              </AnimatePresence>

              {/* Bottom Narrative + Capability Chips */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-md">
                  {active.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.07] border border-white/10 font-mono text-[9px] font-semibold text-clinical-mint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
