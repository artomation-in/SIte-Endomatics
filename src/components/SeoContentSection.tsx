import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, Activity, Server, Pill, ArrowUpRight } from 'lucide-react';

const facts = [
  { label: 'Billing Accuracy', value: '98.4%' },
  { label: 'Admission Time', value: '4 min' },
  { label: 'Discharge Speed', value: '3.2x' },
  { label: 'Revenue Leakage', value: '0.00%' },
  { label: 'ER Wait Saved', value: '14 min' },
  { label: 'ICU Handover', value: '<2s' },
  { label: 'Stock Assurance', value: '99.9%' },
  { label: 'Go-Live Speed', value: '14 days' },
];

const capabilities = [
  { icon: Activity, title: 'Outpatient (OPD)', text: 'Smart consultation queues & digital e-prescribing.' },
  { icon: Server, title: 'Inpatient (IPD)', text: 'Live bed heatmaps, nursing charts & shift handovers.' },
  { icon: ShieldCheck, title: 'Emergency Triage', text: 'Priority routing, color triage & crash-cart sync.' },
  { icon: Pill, title: 'Medication Guard', text: 'Double-verified drug & allergy safety screening.' },
  { icon: Activity, title: 'Inventory Control', text: 'Predictive reorder thresholds & batch-expiry tracking.' },
];

const faqs = [
  {
    q: 'What is ENDOMATICS AI-Native Hospital Management System?',
    a: 'ENDOMATICS is an AI-native Hospital Management System (HMS) designed to streamline outpatient department (OPD) queueing, inpatient ward (IPD) tracking, emergency room (ER) triage response, billing ledgers, pharmacy inventory control, and medical logistics on an automated operating layer.',
  },
  {
    q: 'How does ENDOMATICS achieve a 0.00% revenue leakage rate in medical billing?',
    a: 'ENDOMATICS unifies clinical documentation directly with financial billing ledgers in real-time. By automatically scanning every active medical event, physician fee, prescription check, bed assignment, and laboratory panel directly on a tamper-evident audit ledger, ENDOMATICS eliminates unbilled services and recovers leakage instantaneously.',
  },
  {
    q: 'What are the core clinical benefits of using ENDOMATICS HMS?',
    a: 'Key clinical benefits of ENDOMATICS include an average of 14 minutes saved on ER wait times, a 3.2x faster inpatient discharge cycle, 100% verified drug-allergy safety compliance checks, under 2 seconds auto-generated ICU shift summaries, and automated rapid medication inventory reordering.',
  },
  {
    q: 'How long does it take to implement ENDOMATICS in a healthcare facility?',
    a: 'ENDOMATICS features a highly structured onboarding and implementation pathway completed in exactly 14 days, split across three phases (Ward and Department setup, Custom Tariff mapping, and seamless Database migration) ensuring zero patient workflow disruption.',
  },
  {
    q: 'Is ENDOMATICS compliant with patient privacy laws and clinical guidelines?',
    a: 'Absolutely. ENDOMATICS complies with HIPAA, HITECH, Joint Commission (JCI) handover standards, and operates on high-security SOC2 Type II database infrastructure with robust access controls and end-to-end telemetry auditing.',
  },
  {
    q: 'Does ENDOMATICS support ABDM, ABHA ID, and NABH standards in India?',
    a: 'Yes. ENDOMATICS supports Ayushman Bharat Digital Mission (ABDM) M1/M2/M3 workflows, ABHA Health ID scan-and-share OPD check-ins, and NABH-aligned clinical handovers, allergy verification, and audit logs.',
  },
  {
    q: 'How does ENDOMATICS handle TPA insurance, PM-JAY, and GST hospital billing?',
    a: 'ENDOMATICS automates multi-payer split billing across cash, TPA insurance, and PM-JAY packages with GST-compliant invoicing and pre-submission claim scrubbing, achieving 0.00% revenue leakage.',
  },
];

export default function SeoContentSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-10 lg:py-12 lg:min-h-[calc(100vh-72px)] flex items-center bg-white border-t border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-ink leading-tight">
              Hospital Management System —{' '}
              <span className="bg-gradient-to-r from-steel-teal via-[#2B7A9E] to-clinical-mint bg-clip-text text-transparent">
                Metrics, Modules &amp; Answers
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/hms-india"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-tonal border border-steel-teal/15 text-xs font-semibold text-steel-teal hover:bg-steel-teal hover:text-white transition-colors"
            >
              <span>India HMS (ABDM &amp; NABH)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/abdm-integration"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-bg-light border border-slate-200/80 text-xs font-semibold text-ink hover:border-steel-teal/30 transition-colors"
            >
              <span>ABHA Integration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Single-View 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Compact 4x2 Metrics + Compact 5 Modules */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="font-display text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Certified Metrics
              </h3>
              <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl bg-bg-light/80 border border-slate-200/75 p-2.5 text-center"
                  >
                    <dd className="font-display text-lg font-extrabold text-steel-teal leading-none">
                      {f.value}
                    </dd>
                    <dt className="text-[10px] font-semibold text-slate-600 mt-1 truncate">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-display text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Standard Modules
              </h3>
              <div className="m3-surface rounded-2xl divide-y divide-slate-100 overflow-hidden bg-white">
                {capabilities.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="px-3.5 py-2.5 flex items-center gap-3">
                      <div className="h-7 w-7 rounded-lg bg-surface-tonal border border-steel-teal/15 flex items-center justify-center shrink-0">
                        <Icon className="h-3.5 w-3.5 text-steel-teal" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-xs font-bold text-ink leading-tight">{c.title}</h4>
                        <p className="font-sans text-[11px] text-slate-500 truncate">{c.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Compact Interactive FAQ Accordion */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2.5">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                        ? 'bg-white border-steel-teal/25 shadow-[0_6px_20px_rgba(38,97,156,0.06)]'
                        : 'bg-bg-light/60 border-slate-200/75 hover:bg-white'
                      }`}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[13px] font-bold text-ink leading-snug" itemProp="name">
                        {faq.q}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-steel-teal text-white' : 'bg-white border border-slate-200 text-steel-teal'
                          }`}
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div className="px-4 pb-3.5 pt-1 border-t border-slate-100/80">
                            <p className="font-sans text-xs text-slate-600 leading-relaxed" itemProp="text">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
