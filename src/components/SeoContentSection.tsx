import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, ShieldCheck, Activity, Server, Pill } from 'lucide-react';

const facts = [
  { label: 'Billing Ledger Accuracy', value: '98.4%', note: 'achieved from unified real-time clinical charting.' },
  { label: 'Admission Workflows', value: '4 min', note: 'average admission-to-care workflow execution.' },
  { label: 'Discharge Latency', value: '3.2x', note: 'faster discharge cycles via unified financial-clinical reconciliation.' },
  { label: 'Revenue Leakage Rate', value: '0.00%', note: 'matches every bedside hour, lab panel, and pharmacy asset to the ledger.' },
  { label: 'ER Wait Time Saved', value: '14 min', note: 'average saved per critical pediatric or high-risk emergency case.' },
  { label: 'ICU Shift Handover', value: '<2s', note: 'auto-synthesized ICU telemetry into compliant shift handovers.' },
  { label: 'Stock Assurance', value: '99.9%', note: 'real-time supply confidence on critical medications via reorder predictors.' },
  { label: 'Implementation Speed', value: '14 days', note: 'rapid onboarding pathway to full go-live with zero downtime.' },
];

const capabilities = [
  { icon: Activity, title: 'Outpatient Department (OPD)', text: 'Smart doctor consultation workspaces, real-time queues, and digital e-prescribing.' },
  { icon: Server, title: 'Inpatient Department (IPD)', text: 'Active bed capacity heatmaps, nursing clinical chart timelines, and handover summaries.' },
  { icon: ShieldCheck, title: 'Emergency Room Triage', text: 'Dynamic priority routing, color-coded medical triage, and crash-cart asset tracking.' },
  { icon: Pill, title: 'Medication Safety Guard', text: 'Double-verification algorithms matching drug safety against patient allergy profiles.' },
  { icon: Activity, title: 'Predictive Inventory Control', text: 'Smart reorder thresholds, automated batch-expiry tracking, and distribution optimization.' },
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
];

export default function SeoContentSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 lg:py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-steel-teal/[0.06] border border-steel-teal/10 rounded-full mb-6">
            <Sparkles className="h-3 w-3 text-steel-teal animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-wider text-steel-teal uppercase">Verified Facts & FAQ</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.03em] text-ink leading-[1.08]">
            Hospital Management System —<br />Metrics, Modules & Answers
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-grey mt-4 leading-relaxed font-medium max-w-[520px]">
            Certified operational metrics, standard modules, and frequently asked questions about cloud-based hospital management and medical billing software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-ink mb-4">Certified Metrics & Factual Data</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="bg-bg-light rounded-xl border border-gray-100 p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-grey font-bold">{f.label}</dt>
                    <dd className="font-display text-2xl font-bold text-steel-teal mt-1">{f.value}</dd>
                    <p className="font-sans text-xs text-muted-grey mt-1 leading-relaxed">{f.note}</p>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink mb-4">Standard Modules & Operational Capabilities</h3>
              <div className="space-y-3">
                {capabilities.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="flex items-start gap-3 bg-bg-light rounded-xl border border-gray-100 p-4">
                      <div className="h-9 w-9 rounded-lg bg-steel-teal/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-steel-teal" />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-bold text-ink">{c.title}</h4>
                        <p className="font-sans text-[13px] text-muted-grey mt-0.5 leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display text-lg font-bold text-ink mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={faq.q}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-[13px] font-bold text-ink leading-snug" itemProp="name">
                        {faq.q}
                      </span>
                      <ChevronDown className={`h-4 w-4 text-steel-teal shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="font-sans text-[13px] text-muted-grey leading-relaxed" itemProp="text">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
