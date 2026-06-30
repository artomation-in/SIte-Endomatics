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
  ArrowRight,
  AlertTriangle,
  Activity,
} from 'lucide-react';

const aiFeatures = [
  {
    id: 'ai-queue',
    title: 'Queue Optimization',
    description:
      'Continuously parses patient registrations to dynamically optimize clinical triage paths, reducing average wait times across all departments.',
    icon: Sparkles,
  },
  {
    id: 'ai-med',
    title: 'Medication Safety Guard',
    description:
      'Double-verifies electronic prescriptions against patient allergy profiles, medication history, and live inventory batch expiration dates before release.',
    icon: Pill,
  },
  {
    id: 'ai-capacity',
    title: 'Capacity Forecasting',
    description:
      'Predicts bed, ward, and ICU occupancy up to 72 hours in advance, optimizing clinical discharge windows and nursing schedules.',
    icon: TrendingUp,
  },
  {
    id: 'ai-billing',
    title: 'Smart Leakage Audit',
    description:
      'Tracks administered drugs, lab tests, and clinical bed-hours, automatically reconciling clinical action logs with billing ledgers.',
    icon: DollarSign,
  },
  {
    id: 'ai-handover',
    title: 'Auto-Handover Summaries',
    description:
      'Converts complex patient telemetry and raw nursing logs into highly structured, peer-reviewed shift handover documents.',
    icon: FileText,
  },
  {
    id: 'ai-stock',
    title: 'Active Stock Predictor',
    description:
      'Models department-level consumption patterns and medication burn rates to automatically trigger restocking orders of critical medical supplies.',
    icon: Layers,
  },
];

const AUTO_ADVANCE_MS = 5500;

/* ─── Per-feature clean HMS screens ──────────────────────────────────── */

function QueueScreen() {
  const patients = [
    { name: 'Amara Diop', dept: 'OPD-Cardiology', token: 'T-042', status: 'checked-in', initials: 'AD' },
    { name: 'Raj Patel', dept: 'Lab Collection', token: 'T-043', status: 'ai-routed', initials: 'RP' },
    { name: 'Eva Müller', dept: 'OPD-General', token: 'T-044', status: 'waiting', initials: 'EM' },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-steel-teal opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-steel-teal" />
          </span>
          Live Triage Queue
        </span>
        <span className="font-mono text-[11px] text-muted-grey">3 Active</span>
      </div>
      <div className="space-y-2">
        {patients.map((p) => (
          <div
            key={p.token}
            className={`p-2.5 rounded-lg border flex items-center justify-between ${
              p.status === 'ai-routed'
                ? 'bg-steel-teal/[0.03] border-steel-teal/15'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-bg-light border border-gray-100 flex items-center justify-center text-[11px] font-bold text-ink font-mono">
                {p.initials}
              </div>
              <div>
                <p className="font-semibold text-[13px] text-ink">{p.name}</p>
                <p className="font-mono text-[11px] text-muted-grey">{p.dept} • {p.token}</p>
              </div>
            </div>
            {p.status === 'ai-routed' ? (
              <span className="text-[11px] font-mono text-steel-teal font-bold bg-steel-teal/5 px-2 py-1 rounded border border-steel-teal/10 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Routed
              </span>
            ) : p.status === 'checked-in' ? (
              <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50/50 px-2 py-1 rounded border border-emerald-100/30">
                Checked In
              </span>
            ) : (
              <span className="text-[11px] font-mono text-amber-600 font-bold bg-amber-50/50 px-2 py-1 rounded border border-amber-100/30">
                Waiting
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-3 flex items-start gap-2">
        <Clock className="w-4 h-4 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[11px] font-mono text-steel-teal font-bold uppercase tracking-wider">AI Route Applied</p>
          <p className="text-[13px] text-ink/80 font-medium mt-0.5">Raj Patel redirected to Lab Wing B — wait reduced from 18m to 4m.</p>
        </div>
      </div>
    </div>
  );
}

function MedicationScreen() {
  return (
    <div className="space-y-3">
      <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-steel-teal" />
        Prescription Safety Check
      </span>
      <div className="bg-white rounded-lg border border-gray-100 p-3.5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-[15px] text-ink">Ceftriaxone IV (2g)</p>
            <p className="font-mono text-[11px] text-muted-grey mt-0.5">Patient: Liam Vance • #ER-204</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-steel-teal/10 flex items-center justify-center">
            <Pill className="w-5 h-5 text-steel-teal" />
          </div>
        </div>
        <div className="border-t border-gray-100 pt-3 space-y-2">
          {[
            { label: 'Allergy Profile', value: 'No matches', passed: true },
            { label: 'Drug Interaction', value: 'Clear', passed: true },
            { label: 'Inventory Batch', value: 'Valid • expires 2026', passed: true },
          ].map((c) => (
            <div key={c.label} className="flex items-center justify-between">
              <span className="text-[13px] text-muted-grey font-medium">{c.label}</span>
              <span className="flex items-center gap-1.5 text-[13px] text-emerald-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-emerald-50/40 border border-emerald-100/30 rounded-lg p-3 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <p className="text-[13px] text-emerald-700 font-medium">Verified — auto-approved for pharmacy release.</p>
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-steel-teal" />
          72h Occupancy Forecast
        </span>
        <span className="font-mono text-[11px] text-steel-teal font-bold">AI Predicted</span>
      </div>
      <div className="bg-white rounded-lg border border-gray-100 p-4">
        <div className="flex items-end justify-between gap-4 h-32">
          {days.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-2">
              <span className={`font-display text-sm font-bold ${d.peak ? 'text-steel-teal' : 'text-ink'}`}>{d.load}%</span>
              <div className="w-full bg-bg-light rounded-t-md overflow-hidden flex items-end h-20">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${d.load}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-t-md ${d.peak ? 'bg-steel-teal' : 'bg-steel-teal/30'}`}
                />
              </div>
              <span className="font-mono text-[11px] text-muted-grey uppercase font-semibold">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-3 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[11px] font-mono text-steel-teal font-bold uppercase tracking-wider">Peak Alert</p>
          <p className="text-[13px] text-ink/80 font-medium mt-0.5">Monday hits 94% — AI recommends expediting 12 Sunday discharges.</p>
        </div>
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
    <div className="space-y-3">
      <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
        <DollarSign className="w-4 h-4 text-steel-teal" />
        Auto-Captured Charges
      </span>
      <div className="bg-white rounded-lg border border-gray-100 p-3 space-y-2">
        {charges.map((c) => (
          <div key={c.item} className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-[13px] text-ink font-medium">{c.item}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-muted-grey bg-bg-light px-1.5 py-0.5 rounded border border-gray-100">{c.source}</span>
              <span className="text-[13px] font-mono text-ink font-bold">{c.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-3">
        <div>
          <p className="text-[11px] font-mono text-steel-teal font-bold uppercase tracking-wider">Leakage Audit</p>
          <p className="text-[13px] text-ink/80 font-medium mt-0.5">2 unlogged bed-hours recovered</p>
        </div>
        <span className="font-display text-lg font-bold text-steel-teal">+$200.00</span>
      </div>
    </div>
  );
}

function HandoverScreen() {
  return (
    <div className="space-y-3">
      <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
        <FileText className="w-4 h-4 text-steel-teal" />
        ICU Shift Handover
      </span>
      <div className="bg-white rounded-lg border border-gray-100 p-3.5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-[15px] text-ink">Patient #12 — Marcus B.</p>
            <p className="font-mono text-[11px] text-muted-grey mt-0.5">MRN: #20241204 • ICU-12</p>
          </div>
          <span className="text-[11px] font-mono text-steel-teal font-bold bg-steel-teal/10 px-2 py-1 rounded">Stable</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: 'HR', value: '72 bpm' },
            { label: 'SpO₂', value: '98%' },
            { label: 'BP', value: '120/80' },
          ].map((v) => (
            <div key={v.label} className="bg-bg-light rounded-md border border-gray-100 p-2 text-center">
              <p className="font-mono text-[11px] text-muted-grey uppercase tracking-wider font-bold">{v.label}</p>
              <p className="font-display text-sm font-bold text-ink mt-0.5">{v.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-md p-2.5">
          <p className="text-[11px] font-mono text-steel-teal font-bold uppercase tracking-wider mb-1">AI Synthesized Summary</p>
          <p className="text-[13px] text-ink/80 font-medium leading-relaxed italic">
            "Post-op state stable. Normal sinus rhythm, SpO₂ sustained on room air. Plan: transition to standard ward AM."
          </p>
        </div>
      </div>
    </div>
  );
}

function StockScreen() {
  return (
    <div className="space-y-3">
      <span className="font-mono text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
        <Layers className="w-4 h-4 text-steel-teal" />
        Pharmacy Stock Monitor
      </span>
      <div className="bg-white rounded-lg border border-gray-100 p-3.5 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-[15px] text-ink">Ceftriaxone IV</p>
            <span className="text-[13px] font-mono text-amber-600 font-bold">14% remaining</span>
          </div>
          <div className="h-2.5 bg-bg-light rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '14%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-amber-500 rounded-full"
            />
          </div>
          <p className="font-mono text-[11px] text-muted-grey mt-1.5">Threshold: 15% • 21 vials left</p>
        </div>
        <div className="border-t border-gray-100 pt-3">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-[15px] text-ink">Normal Saline</p>
            <span className="text-[13px] font-mono text-emerald-600 font-bold">82% remaining</span>
          </div>
          <div className="h-2.5 bg-bg-light rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-emerald-500 rounded-full"
            />
          </div>
          <p className="font-mono text-[11px] text-muted-grey mt-1.5">Healthy stock • 410 units</p>
        </div>
      </div>
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-3 flex items-center gap-2">
        <Activity className="w-4 h-4 text-steel-teal shrink-0" />
        <p className="text-[13px] text-ink/80 font-medium">Auto-PO <strong className="text-steel-teal">#9403</strong> triggered — 200 vials approved.</p>
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

/* ─── Main component ──────────────────────────────────────────────────── */

export default function CoreModules() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + aiFeatures.length) % aiFeatures.length;
      setDirection(next >= activeIndex ? 1 : -1);
      setActiveIndex(next);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
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
      className="py-14 sm:py-16 lg:py-20 bg-white border-t border-gray-150/40 relative overflow-hidden"
    >
      {/* Soft background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 text-center">
          <span className="font-mono text-[10px] text-steel-teal tracking-[0.12em] uppercase font-bold bg-steel-teal/[0.06] px-2.5 py-1 rounded">
            AI-Native Operations
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink mt-3 leading-tight">
            Autonomous intelligence at every care point.
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-grey mt-3 leading-relaxed font-medium">
            Endomatics replaces disconnected systems with real-time clinical intelligence, anticipating patient flows and securing operational integrity.
          </p>
        </div>

        {/* Full-width carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrow Controls */}
          <button
            onClick={goPrev}
            aria-label="Previous feature"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-muted-grey hover:text-steel-teal hover:border-steel-teal/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next feature"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-muted-grey hover:text-steel-teal hover:border-steel-teal/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>

          {/* Panel Stage */}
          <div className="overflow-hidden rounded-2xl">
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) goNext();
                    else if (info.offset.x > 80) goPrev();
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden min-h-[420px] lg:min-h-[440px]">
                    {/* Left: HMS Screen */}
                    <div className="relative w-full lg:w-[45%] min-h-[280px] lg:min-h-full bg-bg-light/50 overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100 p-5 sm:p-6 flex items-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`screen-${active.id}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full"
                        >
                          {ScreenComponent && <ScreenComponent />}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Right: Content */}
                    <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-steel-teal/10 to-pulse-teal/15 mb-6 shadow-[0_4px_16px_rgba(38,97,156,0.08)]">
                        <ActiveIcon className="h-8 w-8 sm:h-9 sm:w-9 text-steel-teal" strokeWidth={1.75} />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight">
                        {active.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-base sm:text-lg text-muted-grey leading-relaxed mt-4 max-w-lg font-medium">
                        {active.description}
                      </p>

                      {/* Counter + Progress */}
                      <div className="mt-8 flex items-center gap-3">
                        <span className="font-mono text-xs text-steel-teal uppercase tracking-[0.15em] font-bold">
                          {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="w-8 h-px bg-gray-200" />
                        <span className="font-mono text-xs text-muted-grey/60 uppercase tracking-[0.15em] font-bold">
                          {String(aiFeatures.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Auto-advance progress bar */}
                      <div className="mt-3 h-0.5 w-40 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          key={activeIndex}
                          className="h-full bg-steel-teal rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                          style={{ width: '100%', transformOrigin: 'left' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {aiFeatures.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => goTo(idx)}
                aria-label={`Go to ${feature.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-steel-teal'
                    : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
