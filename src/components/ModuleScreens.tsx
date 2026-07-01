import React, { useState } from 'react';
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
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  FileText,
  Search,
  Activity,
  Zap,
  Brain,
  Eye,
} from 'lucide-react';

interface ModuleScreen {
  id: string;
  label: string;
  fullTitle: string;
  icon: React.ElementType;
  tagline: string;
  aiFeatures: { title: string; description: string }[];
}

const modules: ModuleScreen[] = [
  {
    id: 'reception',
    label: 'Reception',
    fullTitle: 'Smart Reception Console',
    icon: Users,
    tagline: 'AI-Powered Patient Flow & Registration',
    aiFeatures: [
      { title: 'Auto-Registration', description: 'OCR reads ID cards and populates patient forms in under 3 seconds.' },
      { title: 'Queue Intelligence', description: 'Predicts department wait times and routes patients to fastest path.' },
      { title: 'Repeat Visitor Recognition', description: 'Biometric and history matching pre-fills returning patient records instantly.' },
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical',
    fullTitle: 'Clinical Workspace',
    icon: Stethoscope,
    tagline: 'Unified EHR & Decision Support',
    aiFeatures: [
      { title: 'SOAP Note Synthesizer', description: 'AI transcribes consultations into structured clinical notes in real-time.' },
      { title: 'Differential Diagnosis', description: 'Suggests top differential diagnoses ranked by symptom-pattern matching.' },
      { title: 'Drug Interaction Guard', description: 'Screens prescriptions against patient history and allergy profiles.' },
    ],
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    fullTitle: 'Pharmacy Operations Hub',
    icon: Pill,
    tagline: 'Medication Safety & Inventory Intelligence',
    aiFeatures: [
      { title: 'Batch Expiry Predictor', description: 'Forecasts drug expiry risk and auto-triggers FIFO redistribution.' },
      { title: 'Smart Dispensing', description: 'Double-verification AI matches barcode scans to prescription orders.' },
      { title: 'Restock Optimizer', description: 'ML models consumption patterns and generates purchase orders proactively.' },
    ],
  },
  {
    id: 'laboratory',
    label: 'Laboratory',
    fullTitle: 'Laboratory Information System',
    icon: FlaskConical,
    tagline: 'Sample Tracking & Result Intelligence',
    aiFeatures: [
      { title: 'Specimen Tracker', description: 'Real-time barcode chain-of-custody from collection to result delivery.' },
      { title: 'Abnormal Value Flagging', description: 'AI flags critical lab values and auto-notifies attending physician.' },
      { title: 'Trend Analysis', description: 'Longitudinal patient lab trends visualized with predictive markers.' },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    fullTitle: 'Revenue Cycle Command',
    icon: DollarSign,
    tagline: 'Zero-Leakage Financial Intelligence',
    aiFeatures: [
      { title: 'Auto Charge Capture', description: 'Every clinical action auto-maps to billing codes with 0.00% leakage.' },
      { title: 'Claim Scrubber', description: 'Pre-submission AI audits insurance claims for denial-prone errors.' },
      { title: 'Revenue Forecasting', description: 'Predicts monthly revenue streams by department and payer mix.' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    fullTitle: 'Intelligence Analytics Dashboard',
    icon: BarChart3,
    tagline: 'Predictive Insights & Operational Intelligence',
    aiFeatures: [
      { title: 'Occupancy Forecasting', description: '72-hour bed and ICU occupancy prediction with 94% accuracy.' },
      { title: 'Department Benchmarking', description: 'Cross-department KPI comparison with automated anomaly detection.' },
      { title: 'Custom Report Builder', description: 'Natural language queries generate compliance-ready clinical reports.' },
    ],
  },
];

/* ─── Mini dashboard mockup components for each module ────────────────── */

function ReceptionScreen() {
  return (
    <div className="space-y-3">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-steel-teal opacity-40" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-steel-teal" />
          </span>
          <span className="font-mono text-[9px] text-ink font-semibold uppercase tracking-wider">Live Check-In Queue</span>
        </div>
        <span className="font-mono text-[8px] text-muted-grey">Today • 12 registrations</span>
      </div>

      {/* Queue items */}
      <div className="space-y-1.5">
        {[
          { name: 'Amara Diop', dept: 'OPD-Cardiology', time: '2 min ago', status: 'checked-in', token: 'T-042' },
          { name: 'Raj Patel', dept: 'Lab Collection', time: 'Just now', status: 'ai-routed', token: 'T-043' },
          { name: 'Eva Müller', dept: 'OPD-General', time: 'Pending', status: 'scanning', token: 'T-044' },
        ].map((p, i) => (
          <div key={i} className="bg-white p-2 rounded-lg border border-gray-100/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-bg-light border border-gray-100 flex items-center justify-center text-[8px] font-bold text-ink font-mono">
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-[10px] text-ink">{p.name}</p>
                <p className="font-mono text-[8px] text-muted-grey">{p.dept} • {p.token}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {p.status === 'ai-routed' && (
                <span className="text-[7px] font-mono text-steel-teal font-bold bg-steel-teal/5 px-1.5 py-0.5 rounded border border-steel-teal/10 flex items-center gap-0.5">
                  <Sparkles className="w-2 h-2" /> AI Routed
                </span>
              )}
              {p.status === 'checked-in' && (
                <span className="text-[7px] font-mono text-emerald-600 font-bold bg-emerald-50/50 px-1.5 py-0.5 rounded border border-emerald-100/30">
                  Checked In
                </span>
              )}
              {p.status === 'scanning' && (
                <span className="text-[7px] font-mono text-amber-600 font-bold bg-amber-50/50 px-1.5 py-0.5 rounded border border-amber-100/30 flex items-center gap-0.5">
                  <Eye className="w-2 h-2" /> ID Scan
                </span>
              )}
              <span className="text-[7px] font-mono text-muted-grey">{p.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2.5 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider">Smart Route Suggestion</p>
          <p className="text-[10px] text-ink/80 font-medium mt-0.5">Raj Patel redirected to Lab Wing B — estimated wait reduced from 18m to 4m based on current queue density.</p>
        </div>
      </div>
    </div>
  );
}

function ClinicalScreen() {
  return (
    <div className="space-y-3">
      {/* Patient header */}
      <div className="bg-white rounded-lg border border-gray-100/80 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-steel-teal/10 flex items-center justify-center text-[9px] font-bold text-steel-teal font-mono">LV</div>
            <div>
              <p className="font-semibold text-[11px] text-ink">Liam Vance</p>
              <p className="font-mono text-[8px] text-muted-grey">MRN: #20241204 • Male, 34y • ER-04</p>
            </div>
          </div>
          <span className="text-[7px] font-mono text-alert-danger font-bold bg-alert-danger/5 px-1.5 py-0.5 rounded border border-alert-danger/10 uppercase">Critical</span>
        </div>
        {/* Vitals strip */}
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: 'Heart Rate', value: '104 bpm', danger: true },
            { label: 'SpO₂', value: '91%', danger: true },
            { label: 'BP', value: '148/92', danger: false },
            { label: 'Temp', value: '38.2°C', danger: false },
          ].map((v, i) => (
            <div key={i} className={`p-1.5 rounded border text-center ${v.danger ? 'bg-alert-danger/[0.03] border-alert-danger/10' : 'bg-bg-light border-gray-100/60'}`}>
              <p className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-bold">{v.label}</p>
              <p className={`font-display text-[10px] font-bold mt-0.5 ${v.danger ? 'text-alert-danger' : 'text-ink'}`}>{v.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI SOAP Note */}
      <div className="bg-bg-light rounded-lg border border-gray-100/60 p-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[8px] text-steel-teal font-bold uppercase tracking-wider flex items-center gap-1">
            <Brain className="w-3 h-3" /> AI-Generated SOAP Note
          </span>
          <span className="font-mono text-[7px] text-muted-grey">Auto-transcribed • 1.2s</span>
        </div>
        <div className="font-sans text-[10px] text-ink/80 leading-relaxed italic bg-white p-2 rounded border border-gray-100/40">
          <p><strong className="text-ink not-italic">S:</strong> Patient presents with acute chest pain radiating to left arm, onset 45 min prior.</p>
          <p className="mt-1"><strong className="text-ink not-italic">A:</strong> Suspected NSTEMI — troponin pending, ECG shows ST depression in V4-V6.</p>
        </div>
      </div>

      {/* AI differential */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2.5 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider">Differential Diagnosis Engine</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {['NSTEMI (87%)', 'Unstable Angina (9%)', 'PE (4%)'].map((d, i) => (
              <span key={i} className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border ${i === 0 ? 'text-steel-teal bg-steel-teal/10 border-steel-teal/15' : 'text-muted-grey bg-white border-gray-100'}`}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PharmacyScreen() {
  return (
    <div className="space-y-3">
      {/* Dispensing queue */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-ink font-semibold uppercase tracking-wider">Active Prescriptions</span>
        <span className="font-mono text-[8px] text-emerald-600 font-bold bg-emerald-50/50 px-1.5 py-0.5 rounded border border-emerald-100/30">All Verified</span>
      </div>

      <div className="space-y-1.5">
        {[
          { drug: 'Ceftriaxone IV 2g', patient: 'Liam Vance', status: 'dispensed', safety: 'passed' },
          { drug: 'Metformin 500mg', patient: 'Amara Diop', status: 'verifying', safety: 'checking' },
          { drug: 'Atorvastatin 20mg', patient: 'Marcus Brody', status: 'queued', safety: 'passed' },
        ].map((rx, i) => (
          <div key={i} className="bg-white p-2 rounded-lg border border-gray-100/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Pill className={`w-3.5 h-3.5 ${rx.status === 'dispensed' ? 'text-emerald-600' : rx.status === 'verifying' ? 'text-amber-500' : 'text-muted-grey'}`} />
              <div>
                <p className="font-semibold text-[10px] text-ink">{rx.drug}</p>
                <p className="font-mono text-[8px] text-muted-grey">{rx.patient}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {rx.safety === 'passed' && <ShieldCheck className="w-3 h-3 text-emerald-600" />}
              {rx.safety === 'checking' && <Activity className="w-3 h-3 text-amber-500 animate-pulse" />}
              <span className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase ${
                rx.status === 'dispensed' ? 'text-emerald-600 bg-emerald-50/50 border-emerald-100/30' :
                rx.status === 'verifying' ? 'text-amber-600 bg-amber-50/50 border-amber-100/30' :
                'text-muted-grey bg-bg-light border-gray-100'
              }`}>
                {rx.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Stock alert */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: 'Stock Level', value: '98.4%', color: 'text-ink' },
          { label: 'Expiring (30d)', value: '12 items', color: 'text-amber-600' },
          { label: 'Auto-Orders', value: '3 POs', color: 'text-steel-teal' },
        ].map((s, i) => (
          <div key={i} className="bg-bg-light p-1.5 rounded border border-gray-100/60 text-center">
            <p className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-bold">{s.label}</p>
            <p className={`font-display text-[10px] font-bold mt-0.5 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* AI insight */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2.5 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider">Expiry Risk Alert</p>
          <p className="text-[10px] text-ink/80 font-medium mt-0.5">12 Amoxicillin batches expire in 28 days — AI recommends redistribution to high-consumption ward B3.</p>
        </div>
      </div>
    </div>
  );
}

function LaboratoryScreen() {
  return (
    <div className="space-y-3">
      {/* Active samples */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-ink font-semibold uppercase tracking-wider">Sample Pipeline</span>
        <div className="flex items-center gap-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[8px] text-emerald-600 font-semibold">8 Active</span>
        </div>
      </div>

      <div className="space-y-1.5">
        {[
          { test: 'Troponin I (High-Sensitivity)', patient: 'Liam Vance', id: 'S-4891', status: 'processing', urgent: true },
          { test: 'Complete Blood Count', patient: 'Sarah Lin', id: 'S-4892', status: 'completed', urgent: false },
          { test: 'Lipid Panel', patient: 'Marcus Brody', id: 'S-4893', status: 'collected', urgent: false },
        ].map((s, i) => (
          <div key={i} className={`bg-white p-2 rounded-lg border flex items-center justify-between ${s.urgent ? 'border-alert-danger/15' : 'border-gray-100/80'}`}>
            <div className="flex items-center gap-2">
              <FlaskConical className={`w-3.5 h-3.5 ${s.urgent ? 'text-alert-danger' : s.status === 'completed' ? 'text-emerald-600' : 'text-muted-grey'}`} />
              <div>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-[10px] text-ink">{s.test}</p>
                  {s.urgent && <AlertTriangle className="w-2.5 h-2.5 text-alert-danger" />}
                </div>
                <p className="font-mono text-[8px] text-muted-grey">{s.patient} • {s.id}</p>
              </div>
            </div>
            <span className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase ${
              s.status === 'completed' ? 'text-emerald-600 bg-emerald-50/50 border-emerald-100/30' :
              s.status === 'processing' ? 'text-amber-600 bg-amber-50/50 border-amber-100/30' :
              'text-muted-grey bg-bg-light border-gray-100'
            }`}>
              {s.status}
            </span>
          </div>
        ))}
      </div>

      {/* AI flagged result */}
      <div className="bg-alert-danger/[0.03] border border-alert-danger/10 rounded-lg p-2.5 flex items-start gap-2">
        <AlertTriangle className="w-3 h-3 text-alert-danger shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-alert-danger font-bold uppercase tracking-wider">Critical Value Detected</p>
          <p className="text-[10px] text-ink/80 font-medium mt-0.5">Troponin I: <strong className="text-alert-danger">2.4 ng/mL</strong> (ref: &lt;0.04) — Auto-notification sent to Dr. Vance, ER-04 attending physician.</p>
        </div>
      </div>

      {/* AI trend note */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2.5 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider">Trend Intelligence</p>
          <p className="text-[10px] text-ink/80 font-medium mt-0.5">Sarah Lin's WBC count shows 3-visit downward trend — AI suggests follow-up immunology panel.</p>
        </div>
      </div>
    </div>
  );
}

function BillingScreen() {
  return (
    <div className="space-y-3">
      {/* Revenue summary */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: 'Today Revenue', value: '$48,250', trend: '+12%' },
          { label: 'Leakage', value: '0.00%', trend: 'Zero' },
          { label: 'Claims Filed', value: '184', trend: '98.4% clean' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-2 rounded-lg border border-gray-100/80 text-center">
            <p className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-bold">{s.label}</p>
            <p className="font-display text-sm font-bold text-ink mt-0.5">{s.value}</p>
            <p className="font-mono text-[7px] text-steel-teal font-semibold mt-0.5">{s.trend}</p>
          </div>
        ))}
      </div>

      {/* Auto-captured charges */}
      <div>
        <span className="font-mono text-[9px] text-ink font-semibold uppercase tracking-wider">Auto-Captured Charges</span>
        <div className="mt-1.5 space-y-1">
          {[
            { item: 'OPD Consultation — Dr. Rao', amount: '$150.00', source: 'EHR' },
            { item: 'Hematology Panel (CBC)', amount: '$85.00', source: 'LIS' },
            { item: 'Ceftriaxone IV (2g)', amount: '$42.50', source: 'Pharmacy' },
            { item: 'IPD Bed — Room 402 (6h)', amount: '$600.00', source: 'ADT' },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between bg-white p-1.5 rounded border border-gray-100/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                <span className="text-[9px] text-ink font-medium">{c.item}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[7px] font-mono text-muted-grey bg-bg-light px-1 py-0.5 rounded border border-gray-100">{c.source}</span>
                <span className="text-[9px] font-mono text-ink font-bold">{c.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2.5 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[9px] font-mono text-steel-teal font-bold uppercase tracking-wider">Revenue Recovery</p>
          <p className="text-[10px] text-ink/80 font-medium mt-0.5">Detected 2 unlogged bed-hours for Room 402 — auto-reconciled <strong className="text-steel-teal">+$200.00</strong> to patient ledger.</p>
        </div>
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div className="space-y-2">
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-1">
        {[
          { label: 'Avg LOS', value: '3.2d', change: '-0.4d' },
          { label: 'Bed Turn', value: '94%', change: '+2%' },
          { label: 'OPD Wait', value: '6m', change: '-3m' },
          { label: 'Rev/Bed', value: '$1,840', change: '+8%' },
        ].map((k, i) => (
          <div key={i} className="bg-white p-1.5 rounded border border-gray-100/80 text-center">
            <p className="font-mono text-[7px] text-muted-grey uppercase tracking-wider font-bold">{k.label}</p>
            <p className="font-display text-[10px] font-bold text-ink mt-0.5">{k.value}</p>
            <p className="font-mono text-[7px] text-emerald-600 font-bold">{k.change}</p>
          </div>
        ))}
      </div>

      {/* Forecast + Benchmarks side by side */}
      <div className="grid grid-cols-2 gap-1.5">
        {/* Occupancy forecast */}
        <div className="bg-white rounded border border-gray-100/80 p-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[7px] text-ink font-bold uppercase tracking-wider flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5 text-steel-teal" /> 72h Forecast
            </span>
            <span className="font-mono text-[6.5px] text-steel-teal font-bold">AI</span>
          </div>
          <div className="flex items-end gap-0.5 h-8">
            {[62, 68, 74, 78, 85, 88, 94, 91, 86, 82, 79, 75].map((h, i) => (
              <div key={i} className="flex-1">
                <div
                  className={`w-full rounded-sm ${h > 90 ? 'bg-alert-danger/60' : h > 80 ? 'bg-amber-400/60' : 'bg-steel-teal/40'}`}
                  style={{ height: `${(h / 100) * 32}px` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-0.5">
            <span className="font-mono text-[6px] text-muted-grey">Now</span>
            <span className="font-mono text-[6px] text-muted-grey">+72h</span>
          </div>
        </div>

        {/* Department benchmarks */}
        <div className="bg-bg-light rounded border border-gray-100/60 p-2">
          <span className="font-mono text-[7px] text-ink font-bold uppercase tracking-wider">Dept Performance</span>
          <div className="mt-1.5 space-y-1">
            {[
              { dept: 'Emergency', score: 96, color: 'bg-emerald-500' },
              { dept: 'OPD', score: 91, color: 'bg-steel-teal' },
              { dept: 'Pharmacy', score: 88, color: 'bg-steel-teal' },
              { dept: 'IPD', score: 85, color: 'bg-amber-400' },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="font-mono text-[7px] text-muted-grey w-14 shrink-0">{d.dept}</span>
                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.score}%` }} />
                </div>
                <span className="font-mono text-[7px] text-ink font-bold w-6 text-right">{d.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI insight */}
      <div className="bg-steel-teal/[0.03] border border-steel-teal/10 rounded-lg p-2 flex items-start gap-2">
        <Sparkles className="w-3 h-3 text-steel-teal shrink-0 mt-0.5" />
        <div>
          <p className="text-[8px] font-mono text-steel-teal font-bold uppercase tracking-wider">Anomaly Detected</p>
          <p className="text-[9px] text-ink/80 font-medium mt-0.5">IPD discharge rate dropped 18% — AI correlates with reduced discharge summary completion by night shift.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen renderer map ─────────────────────────────────────────────── */
const screenComponents: Record<string, React.FC> = {
  reception: ReceptionScreen,
  clinical: ClinicalScreen,
  pharmacy: PharmacyScreen,
  laboratory: LaboratoryScreen,
  billing: BillingScreen,
  analytics: AnalyticsScreen,
};

/* ─── Main exported component ─────────────────────────────────────────── */

export default function ModuleScreens() {
  const [selectedId, setSelectedId] = useState('reception');
  const active = modules.find(m => m.id === selectedId)!;
  const ScreenComponent = screenComponents[selectedId];

  return (
    <section id="module-screens" className="py-10 lg:py-12 bg-bg-light relative overflow-hidden">
      {/* Soft background grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.25] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 text-left">
          <span className="font-mono text-[9px] text-steel-teal tracking-[0.1em] uppercase font-bold bg-steel-teal/[0.05] px-2 py-0.5 rounded">
            Module Screens
          </span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-ink mt-2">
            Every department, one intelligent interface.
          </h2>
          <p className="font-sans text-xs text-muted-grey mt-1.5 leading-relaxed font-medium max-w-xl">
            Experience each hospital module as your staff sees it — unified dashboards enhanced with embedded AI intelligence at every interaction point.
          </p>
        </div>

        {/* Module Tab Selector - Enhanced for Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {modules.map((module) => {
            const isActive = selectedId === module.id;
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedId(module.id)}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[11px] font-bold font-sans whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-steel-teal border-steel-teal text-white shadow-[0_2px_12px_rgba(38,97,156,0.15)]'
                    : 'bg-white border-gray-100 text-muted-grey hover:text-ink hover:border-gray-150 hover:bg-bg-light/30'
                }`}
                style={{ outline: 'none' }}
              >
                <IconComponent className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-muted-grey'}`} />
                <span>{module.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content: AI Features (Left) + Dashboard Mockup (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: Module Info + AI Features */}
          <div className="hidden lg:flex lg:col-span-7 lg:flex-col lg:gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 h-auto lg:h-full"
              >
                {/* Unified Module Info + AI Features Card */}
                {/* Unified Module Info + AI Features Card */}
                <div className="bg-white rounded-2xl border border-gray-200/60 shadow-[0_12px_40px_rgba(0,0,0,0.04)] flex-1 flex flex-col overflow-hidden relative">
                  
                  {/* Module header strip */}
                  <div className="px-6 pt-6 pb-5 border-b border-gray-100/80 bg-gradient-to-b from-gray-50/50 to-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-steel-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="flex items-center gap-4 relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-steel-teal to-steel-teal/90 flex items-center justify-center shadow-[0_4px_12px_rgba(38,97,156,0.25)] border border-white/20">
                        <active.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg sm:text-xl font-extrabold text-ink leading-tight tracking-tight">{active.fullTitle}</h3>
                        <p className="font-mono text-[9px] text-steel-teal uppercase tracking-[0.08em] font-bold mt-1.5">{active.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Features section */}
                  <div className="px-6 py-6 flex-1">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-5 h-5 rounded bg-steel-teal/10 flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-steel-teal" />
                      </div>
                      <span className="font-mono text-[10px] text-ink tracking-[0.1em] uppercase font-extrabold">
                        AI Capabilities
                      </span>
                    </div>

                    <div className="space-y-0 relative">
                      {active.aiFeatures.map((feature, i) => (
                        <div key={i} className="flex items-stretch gap-4 relative">
                          {/* Numbered step with dashed connecting line */}
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-steel-teal/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative z-10">
                              <span className="font-mono text-[10px] font-extrabold text-steel-teal">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                            </div>
                            {i < active.aiFeatures.length - 1 && (
                              <div className="w-px flex-1 border-l-2 border-dashed border-gray-150/60 my-1" />
                            )}
                          </div>
                          {/* Content */}
                          <div className="pb-6 pt-0.5">
                            <p className="font-display text-[15px] font-bold text-ink leading-tight">{feature.title}</p>
                            <p className="font-sans text-xs text-muted-grey leading-relaxed mt-1.5 font-medium">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-sans text-steel-teal font-bold group cursor-pointer hover:text-black transition-colors">
                      <span>Explore full documentation</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse" />
                      <span className="font-mono text-[9px] text-muted-grey font-bold uppercase tracking-wider">
                        System Active
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="col-span-1 lg:col-span-5">
            <div className="bg-white rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.04)] border border-gray-100/90 overflow-hidden h-auto lg:h-full flex flex-col">
              {/* Mockup window header */}
              <div className="bg-steel-teal px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="font-mono text-[9px] text-white/70 uppercase tracking-wider ml-2"
                    >
                      Console // {active.id}-panel
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-2.5 py-0.5 rounded border border-white/15 text-[9px] font-mono text-white">
                  <Sparkles className="h-2.5 w-2.5 text-white/90" />
                  <span>AI Active</span>
                </div>
              </div>

              {/* Mockup content area */}
              <div className="p-3 lg:p-4 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
