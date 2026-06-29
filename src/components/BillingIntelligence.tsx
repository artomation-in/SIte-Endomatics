import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Heart,
  Activity,
  FlaskConical,
  LineChart,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface ModuleHighlight {
  features: string[];
  aiIntelligence: string[];
  compliance: string[];
}

export default function BillingIntelligence() {
  const [selectedId, setSelectedId] = useState('opd');

  const modules = [
    {
      id: 'opd',
      label: 'Outpatient',
      fullTitle: 'Outpatient Department',
      icon: Stethoscope,
      keyMetric: '42',
      metricLabel: 'active consultations',
      stats: [
        { label: 'Consultations', value: '42' },
        { label: 'Avg Wait', value: '6 min' },
        { label: 'Allergy Clear', value: '100%' },
      ],
      status: 'All channels active',
    },
    {
      id: 'ipd',
      label: 'Inpatient',
      fullTitle: 'Inpatient Department',
      icon: Heart,
      keyMetric: '88%',
      metricLabel: 'bed occupancy',
      stats: [
        { label: 'Occupancy', value: '88%' },
        { label: 'Admitted', value: '14' },
        { label: 'Discharge', value: '8' },
      ],
      status: 'ICU and ward balanced',
    },
    {
      id: 'er',
      label: 'Emergency',
      fullTitle: 'Emergency Department',
      icon: Activity,
      keyMetric: '3',
      metricLabel: 'awaiting triage',
      stats: [
        { label: 'Waiting', value: '3' },
        { label: 'Critical', value: '1' },
        { label: 'Triage Speed', value: '1.8m' },
      ],
      status: 'Priority channels active',
    },
    {
      id: 'pharmacy',
      label: 'Pharmacy',
      fullTitle: 'Medication & Pharmacy',
      icon: FlaskConical,
      keyMetric: '98.4%',
      metricLabel: 'supply level',
      stats: [
        { label: 'Allergy Checks', value: '1,420' },
        { label: 'Supply', value: '98.4%' },
        { label: 'Restocks', value: '3 POs' },
      ],
      status: 'Drug safety verified',
    },
    {
      id: 'billing',
      label: 'Billing',
      fullTitle: 'Billing & Financials',
      icon: LineChart,
      keyMetric: '0.00%',
      metricLabel: 'revenue leakage',
      stats: [
        { label: 'Accuracy', value: '98.4%' },
        { label: 'Leakage', value: '0.00%' },
        { label: 'Reconciled', value: '184' },
      ],
      status: 'Ledger synchronized',
    },
    {
      id: 'logistics',
      label: 'Logistics',
      fullTitle: 'Inventory & Assets',
      icon: Layers,
      keyMetric: '99.9%',
      metricLabel: 'supply assurance',
      stats: [
        { label: 'Asset Use', value: '94%' },
        { label: 'Critical', value: 'Safe' },
        { label: 'Assurance', value: '99.9%' },
      ],
      status: 'All assets tracked',
    },
  ];

  const highlights: Record<string, ModuleHighlight> = {
    opd: {
      features: [
        'Autonomous consultation queue routing and token synchronization.',
        'Digital e-Prescription with drug-drug allergy scanning.',
        'Interactive SOAP notes for general medicine and pediatrics.',
        'Direct connection to laboratory and imaging systems.',
      ],
      aiIntelligence: [
        'DeepNLP structures physician input into validated EHR schemas.',
        'Wait-time prediction adjusts schedules during emergencies.',
        'Symptom-to-Protocol assistant suggests matching diagnostics.',
      ],
      compliance: [
        'Real-time allergy cross-checks against global drug indexes.',
        'Automatic ICD-11 coding verification before check-out.',
      ],
    },
    ipd: {
      features: [
        'Live bed occupancy tracking across ICUs and wards.',
        'Automated nursing duty schedules and vital charts.',
        'Standardized shift handover with auto-generated summaries.',
        'Length of stay forecasting for discharge planners.',
      ],
      aiIntelligence: [
        'Clinical deterioration risk scores from vital feeds.',
        'Adaptive bed allocation recommending optimization paths.',
        'Discharge note synthesizer mapping inpatient histories.',
      ],
      compliance: [
        'Warning triggers for vitals crossing safe thresholds.',
        'Joint Commission compliant shift handovers.',
      ],
    },
    er: {
      features: [
        'Dynamic triage classification using ESI algorithms.',
        'Ambulance GPS telemetry and arrival tracking.',
        'Crash-cart tracking with NFC/RFID monitoring.',
        'Priority bypass for cardiac and stroke cases.',
      ],
      aiIntelligence: [
        'Trauma categorization routing immediate staff response.',
        'Vitals alarm filtering to prevent alert fatigue.',
        'ICU-to-ER resource leveling matching surge demands.',
      ],
      compliance: [
        'Mandatory check-offs for ESI Level 1 patients.',
        'Automatic timeline logging for cardiac guidelines.',
      ],
    },
    pharmacy: {
      features: [
        'Dual-pharmacist verification for high-risk medications.',
        'Drug database synced with regional stock counts.',
        'Auto-generation of purchase orders via triggers.',
        'Barcode validation between patients and dosage.',
      ],
      aiIntelligence: [
        'Drug-drug and drug-food allergy analytical checkers.',
        'Demand prediction based on seasonal trends.',
        'Generic alternative advisor suggesting equivalents.',
      ],
      compliance: [
        'FDA safety guidelines in prescription screening.',
        'Double-authorized narcotic logs with signature tracking.',
      ],
    },
    billing: {
      features: [
        'Real-time charge capture mapping to billing records.',
        'Instant claim pre-audits scanning insurance codes.',
        'Multi-payer split calculations for co-pays.',
        'Bedside reconciliation highlighting missed procedures.',
      ],
      aiIntelligence: [
        'Revenue leakage finder scanning charts for missed fees.',
        'Predictive claim rejection identifying errors early.',
        'Autonomous EHR-to-CPT mapping of medical notes.',
      ],
      compliance: [
        'HIPAA-compliant tamper-evident transaction logging.',
        'Direct updates from Medicare/Medicaid schedules.',
      ],
    },
    logistics: {
      features: [
        'NFC/RFID tracking for ventilators and diagnostic carts.',
        'Sterilization shelf-life tracking for surgical packs.',
        'Equipment health logs with calibration alerts.',
        'Material request queues with priority routing.',
      ],
      aiIntelligence: [
        'Predictive maintenance identifying sensor failures.',
        'Surgical bundle analysis matching physician preferences.',
        'Smart warehouse stock leveling for resource placement.',
      ],
      compliance: [
        'Device safety compliance reports on demand.',
        'End-to-end trace history for implantable supplies.',
      ],
    },
  };

  const active = modules.find(m => m.id === selectedId)!;
  const activeHighlight = highlights[selectedId];

  return (
    <section id="billing-intelligence" className="py-10 lg:py-12 bg-white border-y border-gray-150/40 relative overflow-hidden">
      {/* Dot grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.25] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 text-left">
          <span className="font-mono text-[9px] text-steel-teal tracking-[0.1em] uppercase font-bold bg-steel-teal/[0.05] px-2 py-0.5 rounded">
            Operating Systems
          </span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-ink mt-2">
            Hospital Modules
          </h2>
          <p className="font-sans text-xs text-muted-grey mt-1.5 leading-relaxed font-medium max-w-xl">
            Six integrated departments running on a unified intelligence layer — from patient intake through discharge and billing.
          </p>
        </div>

        {/* Module Selector */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          {modules.map((module) => {
            const isActive = selectedId === module.id;
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedId(module.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold font-sans whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-bg-light border-steel-teal/15 shadow-[0_2px_12px_rgba(38,97,156,0.015)] text-steel-teal'
                    : 'bg-white border-gray-100 text-muted-grey hover:text-ink hover:border-gray-150 hover:bg-bg-light/30'
                }`}
              >
                <IconComponent className={`h-3.5 w-3.5 ${isActive ? 'text-steel-teal' : 'text-muted-grey'}`} />
                <span>{module.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content — Left Features, Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column — Features */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Module Name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink mb-6">
                  {active.fullTitle}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {activeHighlight.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0 mt-1.5" />
                      <span className="font-sans text-xs text-muted-grey leading-relaxed font-medium">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI Intelligence */}
                <h4 className="font-mono text-[9px] text-steel-teal font-bold uppercase tracking-wider mb-2.5">
                  AI Intelligence
                </h4>
                <div className="space-y-3 mb-6">
                  {activeHighlight.aiIntelligence.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-steel-teal/30 shrink-0 mt-1.5" />
                      <span className="font-sans text-xs text-muted-grey leading-relaxed font-medium">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Compliance */}
                <h4 className="font-mono text-[9px] text-muted-grey font-bold uppercase tracking-wider mb-2.5">
                  Compliance
                </h4>
                <div className="space-y-3">
                  {activeHighlight.compliance.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-slate-200 shrink-0 mt-1.5" />
                      <span className="font-sans text-xs text-muted-grey leading-relaxed font-medium">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column — Module Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-bg-light rounded-xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] h-full flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center border border-gray-100">
                      <active.icon className="h-3.5 w-3.5 text-steel-teal" />
                    </div>
                    <span className="font-display text-[13px] font-bold text-ink">
                      {active.fullTitle}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-muted-grey uppercase tracking-wider font-semibold bg-white px-1.5 py-0.5 rounded border border-gray-100">
                    Module
                  </span>
                </div>

                {/* Key Metric */}
                <div className="mb-1">
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-ink tracking-tighter leading-none">
                    {active.keyMetric}
                  </span>
                </div>
                <span className="font-mono text-[8px] text-muted-grey uppercase tracking-wider font-semibold">
                  {active.metricLabel}
                </span>

                {/* Divider */}
                <div className="border-t border-gray-100 my-5" />

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {active.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="font-mono text-[8px] text-muted-grey uppercase tracking-wider font-bold block mb-1">
                        {stat.label}
                      </span>
                      <span className="font-display text-sm font-bold text-ink">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100">
                  <ShieldCheck className="h-3 w-3 text-muted-grey shrink-0" />
                  <span className="font-mono text-[8px] text-muted-grey font-medium">
                    {active.status}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-muted-grey">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-muted-grey" />
            <span>HIPAA, SOC2 Type II verified</span>
          </div>
          <div className="font-medium">
            Endomatics Hospital Management System
          </div>
        </div>

      </div>
    </section>
  );
}
