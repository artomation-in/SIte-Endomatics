import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Stethoscope,
  Pill,
  FlaskConical,
  DollarSign,
  BarChart3,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Activity,
  Brain,
  CheckCircle2,
  Search,
  Plus,
  Clock,
  FileCheck2,
  ScanBarcode,
} from 'lucide-react';

interface ModuleScreen {
  id: string;
  label: string;
  fullTitle: string;
  icon: React.ElementType;
  subtitle: string;
  aiCapabilities: { title: string; summary: string }[];
}

const modules: ModuleScreen[] = [
  {
    id: 'reception',
    label: 'Reception',
    fullTitle: 'Front Desk & Queue',
    icon: Users,
    subtitle: 'Patient intake, OCR registration, and dynamic token routing',
    aiCapabilities: [
      { title: 'OCR Auto-Registration', summary: 'Populates demographics from ID scans in under 3 seconds.' },
      { title: 'Queue Balancing', summary: 'Redirects walk-ins to open consultation rooms automatically.' },
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical',
    fullTitle: 'Doctor EHR Workspace',
    icon: Stethoscope,
    subtitle: 'Unified patient chart, ambient SOAP scribe, and decision support',
    aiCapabilities: [
      { title: 'Ambient SOAP Scribe', summary: 'Structures live consultation notes into S/O/A/P fields.' },
      { title: 'Differential Assistant', summary: 'Ranks likely diagnoses from vitals, labs, and symptoms.' },
    ],
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    fullTitle: 'Dispensing & Inventory',
    icon: Pill,
    subtitle: 'Barcode verification, allergy screening, and batch expiry control',
    aiCapabilities: [
      { title: 'Allergy & Interaction Guard', summary: 'Cross-checks every e-Rx against patient allergy history.' },
      { title: 'FIFO Expiry Predictor', summary: 'Flags near-expiry batches for ward redistribution.' },
    ],
  },
  {
    id: 'laboratory',
    label: 'Laboratory',
    fullTitle: 'LIS Sample Workbench',
    icon: FlaskConical,
    subtitle: 'Specimen chain-of-custody, turnaround tracking, and critical alerts',
    aiCapabilities: [
      { title: 'Critical Value Escalation', summary: 'Notifies attending physicians immediately on abnormal results.' },
      { title: 'Longitudinal Trends', summary: 'Surfaces multi-visit biomarker shifts automatically.' },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    fullTitle: 'RCM & Claim Scrubber',
    icon: DollarSign,
    subtitle: 'Real-time charge capture, CPT coding, and zero-leakage auditing',
    aiCapabilities: [
      { title: 'Auto Charge Capture', summary: 'Maps clinical events, drugs, and bed-hours directly to ledger.' },
      { title: 'Pre-Submission Scrub', summary: 'Catches coding mismatches before payer submission.' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    fullTitle: 'Operations Command',
    icon: BarChart3,
    subtitle: '72-hour bed forecasting, department throughput, and margin insights',
    aiCapabilities: [
      { title: '72h Capacity Forecast', summary: 'Predicts ICU and ward occupancy with 94% accuracy.' },
      { title: 'Anomaly Detection', summary: 'Identifies discharge bottlenecks across shifts.' },
    ],
  },
];

/* ─── 1. Reception: Realistic OPD Check-In Table & Token Desk ──────────── */
function ReceptionApp() {
  const rows = [
    { token: 'T-041', name: 'Amara Diop', mrn: 'MRN-8841', dept: 'Cardiology · Rm 2B', wait: '2m', status: 'In Room' },
    { token: 'T-042', name: 'Raj Patel', mrn: 'MRN-8842', dept: 'Lab Wing B (AI Routed)', wait: '4m', status: 'Routed' },
    { token: 'T-043', name: 'Eva Müller', mrn: 'MRN-8843', dept: 'General OPD · Box 1', wait: '9m', status: 'Waiting' },
    { token: 'T-044', name: 'Noah Kim', mrn: 'MRN-8844', dept: 'Pediatrics · Rm 4', wait: '6m', status: 'Checked In' },
  ];

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <div className="w-full pl-8 pr-3 py-2 rounded-xl bg-bg-light border border-slate-200/80 text-xs text-slate-400">
            Search patient name, MRN, or phone...
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-steel-teal text-white text-xs font-semibold shadow-2xs">
          <Plus className="w-3.5 h-3.5" />
          <span>New Check-In</span>
        </div>
      </div>

      {/* Queue Table */}
      <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-bg-light border-b border-slate-200/70 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2">Token</div>
          <div className="col-span-4">Patient</div>
          <div className="col-span-4">Assignment</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        <div className="divide-y divide-slate-100">
          {rows.map((r, i) => (
            <motion.div
              key={r.token}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.04 }}
              className={`grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs ${
                r.status === 'Routed' ? 'bg-surface-tonal/50' : ''
              }`}
            >
              <div className="col-span-2 font-mono font-bold text-ink">{r.token}</div>
              <div className="col-span-4">
                <p className="font-semibold text-ink">{r.name}</p>
                <p className="text-[10px] text-muted-grey">{r.mrn}</p>
              </div>
              <div className="col-span-4 text-slate-600 font-medium flex items-center gap-1.5">
                {r.status === 'Routed' && <Sparkles className="w-3 h-3 text-steel-teal shrink-0" />}
                <span className="truncate">{r.dept}</span>
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    r.status === 'Routed'
                      ? 'bg-steel-teal/10 text-steel-teal'
                      : r.status === 'In Room'
                        ? 'bg-clinical-mint/15 text-clinical-mint'
                        : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {r.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom AI Bar */}
      <div className="rounded-xl bg-surface-tonal/70 border border-steel-teal/15 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs text-ink">
          <Clock className="w-4 h-4 text-steel-teal shrink-0" />
          <span>
            <strong>AI Queue Balancer:</strong> Redirected Raj Patel to Lab Wing B, cutting wait from 18m to 4m.
          </span>
        </div>
        <span className="text-[11px] font-semibold text-steel-teal shrink-0">Avg Wait: 5m</span>
      </div>
    </div>
  );
}

/* ─── 2. Clinical: Realistic Doctor EHR Chart & SOAP Scribe ────────────── */
function ClinicalApp() {
  return (
    <div className="space-y-4">
      {/* Patient Chart Header */}
      <div className="rounded-2xl bg-bg-light border border-slate-200/80 p-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-steel-teal text-white flex items-center justify-center font-bold text-xs">
            LV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm text-ink">Liam Vance</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-alert-danger/10 text-alert-danger">
                Allergy: Penicillin
              </span>
            </div>
            <p className="text-[11px] text-muted-grey">34y Male · MRN #20241204 · Bed ER-04</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80">
            <span className="text-muted-grey">HR </span>
            <strong className="text-alert-danger">104</strong>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80">
            <span className="text-muted-grey">SpO₂ </span>
            <strong className="text-alert-danger">91%</strong>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80">
            <span className="text-muted-grey">BP </span>
            <strong className="text-ink">148/92</strong>
          </div>
        </div>
      </div>

      {/* 2-Column EHR Body: SOAP Note + AI Decision Support */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        <div className="md:col-span-7 rounded-2xl border border-slate-200/80 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-steel-teal" />
              SOAP Clinical Note
            </span>
            <span className="text-[10px] text-clinical-mint font-semibold">Ambient Scribe Active</span>
          </div>
          <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
            <div>
              <span className="font-bold text-ink">Subjective:</span> Acute substernal chest pain radiating to left arm; onset 45m prior.
            </div>
            <div>
              <span className="font-bold text-ink">Objective:</span> Diaphoretic, mild tachypnea. ECG shows 1.5mm ST depression in V4–V6.
            </div>
            <div>
              <span className="font-bold text-ink">Plan:</span> Stat high-sensitivity Troponin I, Cardiology consult, Aspirin 325mg PO.
            </div>
          </div>
        </div>

        <div className="md:col-span-5 rounded-2xl bg-surface-tonal/70 border border-steel-teal/15 p-4 space-y-3">
          <span className="text-xs font-bold text-steel-teal flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Differential Ranking
          </span>
          <div className="space-y-2">
            {[
              { dx: 'NSTEMI', prob: 87 },
              { dx: 'Unstable Angina', prob: 9 },
              { dx: 'Pulmonary Embolism', prob: 4 },
            ].map((item) => (
              <div key={item.dx} className="bg-white rounded-xl p-2.5 border border-slate-200/70">
                <div className="flex justify-between text-xs font-semibold text-ink mb-1">
                  <span>{item.dx}</span>
                  <span className="text-steel-teal">{item.prob}%</span>
                </div>
                <div className="h-1.5 bg-bg-light rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.prob}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-steel-teal rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. Pharmacy: Realistic e-Rx Dispensing & Batch Counter ──────────── */
function PharmacyApp() {
  const orders = [
    { rx: 'RX-9041', drug: 'Ceftriaxone IV 2g', patient: 'Liam Vance', batch: 'B-2026A', check: 'Cleared', state: 'Dispensed' },
    { rx: 'RX-9042', drug: 'Metformin 500mg', patient: 'Amara Diop', batch: 'B-2025K', check: 'Verifying', state: 'In Queue' },
    { rx: 'RX-9043', drug: 'Atorvastatin 20mg', patient: 'Marcus Brody', batch: 'B-2026C', check: 'Cleared', state: 'Ready' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-ink">
          <ScanBarcode className="w-4 h-4 text-steel-teal" />
          <span>e-Prescription Verification Queue</span>
        </div>
        <span className="text-[11px] font-semibold text-clinical-mint bg-clinical-mint/10 px-2.5 py-1 rounded-full">
          98.4% Stock Readiness
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-bg-light border-b border-slate-200/70 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2">Rx ID</div>
          <div className="col-span-4">Medication</div>
          <div className="col-span-3">Batch</div>
          <div className="col-span-3 text-right">Safety</div>
        </div>
        <div className="divide-y divide-slate-100">
          {orders.map((o) => (
            <div key={o.rx} className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs">
              <div className="col-span-2 font-mono font-bold text-ink">{o.rx}</div>
              <div className="col-span-4">
                <p className="font-semibold text-ink">{o.drug}</p>
                <p className="text-[10px] text-muted-grey">{o.patient}</p>
              </div>
              <div className="col-span-3 font-mono text-[11px] text-slate-600">{o.batch}</div>
              <div className="col-span-3 text-right">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    o.check === 'Cleared' ? 'bg-clinical-mint/15 text-clinical-mint' : 'bg-amber-500/10 text-amber-700'
                  }`}
                >
                  {o.check === 'Cleared' && <ShieldCheck className="w-3 h-3" />}
                  {o.check}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-amber-50/70 border border-amber-200/70 px-4 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>FIFO Expiry Alert:</strong> 12 Amoxicillin batches expire in 28d — suggested transfer to Ward B3.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── 4. Laboratory: Realistic LIS Accession & Critical Value Workbench ─── */
function LaboratoryApp() {
  const samples = [
    { id: 'S-4891', test: 'Troponin I (High-Sens)', patient: 'Liam Vance · ER-04', result: '2.4 ng/mL', flag: 'Critical' },
    { id: 'S-4892', test: 'Complete Blood Count', patient: 'Sarah Lin · OPD-A3', result: '6.8 ×10⁹/L', flag: 'Normal' },
    { id: 'S-4893', test: 'Lipid Panel', patient: 'Marcus Brody · ICU-12', result: 'Pending', flag: 'Processing' },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-alert-danger/[0.04] border border-alert-danger/20 p-3.5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-alert-danger shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold text-alert-danger">Critical Value Escalated · S-4891</p>
            <p className="text-slate-700 mt-0.5">
              Troponin I measured at <strong>2.4 ng/mL</strong> (Ref &lt;0.04). Attending physician notified automatically.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-alert-danger/20 text-alert-danger shrink-0">
          STAT
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-bg-light border-b border-slate-200/70 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2">Accession</div>
          <div className="col-span-5">Assay &amp; Patient</div>
          <div className="col-span-3">Result</div>
          <div className="col-span-2 text-right">Flag</div>
        </div>
        <div className="divide-y divide-slate-100">
          {samples.map((s) => (
            <div key={s.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs">
              <div className="col-span-2 font-mono font-bold text-ink">{s.id}</div>
              <div className="col-span-5">
                <p className="font-semibold text-ink">{s.test}</p>
                <p className="text-[10px] text-muted-grey">{s.patient}</p>
              </div>
              <div className="col-span-3 font-mono font-semibold text-ink">{s.result}</div>
              <div className="col-span-2 text-right">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    s.flag === 'Critical'
                      ? 'bg-alert-danger/10 text-alert-danger'
                      : s.flag === 'Normal'
                        ? 'bg-clinical-mint/15 text-clinical-mint'
                        : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {s.flag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 5. Billing: Realistic RCM Ledger & Claim Scrubber ────────────────── */
function BillingApp() {
  const items = [
    { code: '99214', service: 'OPD Consultation — Dr. Rao', source: 'EHR', amount: '$150.00' },
    { code: '85025', service: 'Hematology Panel (CBC)', source: 'LIS', amount: '$85.00' },
    { code: 'J0696', service: 'Ceftriaxone IV (2g)', source: 'Pharmacy', amount: '$42.50' },
    { code: '0120', service: 'IPD Ward Bed — Room 402 (6h)', source: 'ADT', amount: '$600.00' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-bg-light border border-slate-200/70 p-3">
          <p className="text-[11px] text-muted-grey">Today&apos;s Captured</p>
          <p className="font-display text-lg font-extrabold text-ink mt-0.5">$48,250</p>
        </div>
        <div className="rounded-xl bg-bg-light border border-slate-200/70 p-3">
          <p className="text-[11px] text-muted-grey">Clean Claim Rate</p>
          <p className="font-display text-lg font-extrabold text-steel-teal mt-0.5">98.4%</p>
        </div>
        <div className="rounded-xl bg-clinical-mint/10 border border-clinical-mint/25 p-3">
          <p className="text-[11px] text-clinical-mint font-semibold">Revenue Leakage</p>
          <p className="font-display text-lg font-extrabold text-ink mt-0.5">0.00%</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-bg-light border-b border-slate-200/70 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2">CPT</div>
          <div className="col-span-6">Auto-Captured Line Item</div>
          <div className="col-span-2">Source</div>
          <div className="col-span-2 text-right">Amount</div>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map((c) => (
            <div key={c.code} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-xs">
              <div className="col-span-2 font-mono text-steel-teal font-bold">{c.code}</div>
              <div className="col-span-6 font-medium text-ink truncate">{c.service}</div>
              <div className="col-span-2 text-[11px] text-muted-grey">{c.source}</div>
              <div className="col-span-2 text-right font-mono font-bold text-ink">{c.amount}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-tonal/70 border border-steel-teal/15 px-4 py-2.5 flex items-center justify-between text-xs">
        <span className="flex items-center gap-2 text-ink font-medium">
          <FileCheck2 className="w-4 h-4 text-steel-teal" />
          Recovered 2 unlogged bed-hours on Room 402
        </span>
        <strong className="font-mono text-steel-teal">+$200.00</strong>
      </div>
    </div>
  );
}

/* ─── 6. Analytics: Realistic Hospital Command Dashboard ──────────────── */
function AnalyticsApp() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {[
          { label: 'Avg Stay', value: '3.2d', delta: '-0.4d' },
          { label: 'Bed Turnover', value: '94%', delta: '+2.1%' },
          { label: 'OPD Wait', value: '6m', delta: '-3m' },
          { label: 'Rev / Bed', value: '$1,840', delta: '+8%' },
        ].map((k) => (
          <div key={k.label} className="rounded-xl bg-bg-light border border-slate-200/70 p-3">
            <p className="text-[11px] text-muted-grey">{k.label}</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="font-display text-base font-extrabold text-ink">{k.value}</span>
              <span className="text-[10px] font-semibold text-clinical-mint">{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-steel-teal" />
              72h Bed Occupancy
            </span>
            <span className="text-[10px] text-steel-teal font-semibold">Forecast</span>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {[62, 68, 74, 78, 85, 88, 94, 91, 86, 82, 79, 75].map((h, i) => (
              <div key={i} className="flex-1 h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.45, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-t-sm ${
                    h > 90 ? 'bg-alert-danger/75' : h > 80 ? 'bg-amber-400/80' : 'bg-steel-teal/60'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
          <span className="text-xs font-bold text-ink block mb-3">Department SLA Score</span>
          <div className="space-y-2.5">
            {[
              { dept: 'Emergency', score: 96, color: 'bg-clinical-mint' },
              { dept: 'Outpatient', score: 91, color: 'bg-steel-teal' },
              { dept: 'Pharmacy', score: 88, color: 'bg-steel-teal' },
              { dept: 'Inpatient', score: 85, color: 'bg-amber-400' },
            ].map((d, i) => (
              <div key={d.dept} className="flex items-center gap-2 text-xs">
                <span className="text-slate-600 w-20 shrink-0">{d.dept}</span>
                <div className="flex-1 h-2 bg-bg-light rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.score}%` }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full ${d.color} rounded-full`}
                  />
                </div>
                <span className="font-mono text-[11px] font-bold text-ink w-8 text-right">{d.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const screenComponents: Record<string, React.FC> = {
  reception: ReceptionApp,
  clinical: ClinicalApp,
  pharmacy: PharmacyApp,
  laboratory: LaboratoryApp,
  billing: BillingApp,
  analytics: AnalyticsApp,
};

const AUTO_SLIDE_MS = 3000;

export default function ModuleScreens() {
  const [selectedId, setSelectedId] = useState('reception');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedId((prev) => {
        const idx = modules.findIndex((m) => m.id === prev);
        return modules[(idx + 1) % modules.length].id;
      });
    }, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = modules.find((m) => m.id === selectedId)!;
  const ScreenComponent = screenComponents[selectedId];

  return (
    <section id="module-screens" className="py-14 sm:py-20 bg-bg-light relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Clean Editorial Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            Every department, one interface.
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed font-medium">
            Switch between live departmental workspaces to see how clinical teams interact with embedded intelligence in daily practice.
          </p>
        </div>

        {/* Full-Width Clinical Application Window (Distinct from CoreModules) */}
        <div
          className="m3-surface-elevated rounded-3xl overflow-hidden bg-white relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Auto-slide progress bar */}
          <div className="h-[2px] w-full bg-slate-100 overflow-hidden">
            <motion.div
              key={`${selectedId}-${isPaused ? 'paused' : 'running'}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? 0 : 1 }}
              transition={{ duration: AUTO_SLIDE_MS / 1000, ease: 'linear' }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-steel-teal to-clinical-mint"
            />
          </div>
          {/* App Window Title Bar */}
          <div className="px-5 py-3 bg-bg-light border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span className="text-xs font-semibold text-slate-600">
                Endomatics OS · {active.fullTitle}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-clinical-mint">
              <span className="w-2 h-2 rounded-full bg-clinical-mint" />
              <span>Synchronized</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[470px]">
            {/* Left OS Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3 bg-bg-light/60 border-b lg:border-b-0 lg:border-r border-slate-200/80 p-4 sm:p-5 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold text-slate-400 px-2.5 mb-2">Departments</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1">
                  {modules.map((module) => {
                    const isActive = selectedId === module.id;
                    const IconComponent = module.icon;
                    return (
                      <button
                        key={module.id}
                        type="button"
                        onClick={() => setSelectedId(module.id)}
                        className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                          isActive ? 'text-steel-teal' : 'text-slate-600 hover:text-ink hover:bg-white/70'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="app-sidebar-pill"
                            transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                            className="absolute inset-0 rounded-xl bg-white border border-slate-200/80 shadow-2xs -z-0"
                          />
                        )}
                        <IconComponent className="w-4 h-4 relative z-10 shrink-0" />
                        <span className="relative z-10">{module.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Embedded AI Context for Selected Module */}
              <div className="hidden lg:block pt-4 border-t border-slate-200/80 space-y-2.5">
                <p className="text-[11px] font-semibold text-steel-teal flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Active AI Assist</span>
                </p>
                {active.aiCapabilities.map((cap) => (
                  <div key={cap.title} className="rounded-xl bg-white border border-slate-200/70 p-3">
                    <p className="text-xs font-bold text-ink">{cap.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{cap.summary}</p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Right Main Application Canvas */}
            <div className="lg:col-span-8 xl:col-span-9 p-5 sm:p-7 bg-white flex flex-col justify-between">
              <div>
                <div className="mb-5 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink">{active.fullTitle}</h3>
                    <p className="text-xs text-muted-grey mt-0.5">{active.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-tonal text-steel-teal text-[11px] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>HIPAA Audited</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ScreenComponent />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
