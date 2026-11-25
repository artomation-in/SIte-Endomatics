import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Sparkles, Lock } from 'lucide-react';
import { BILLING_DETAILS } from '../data';
import { ClinicalReveal } from './motion/ClinicalMotion';

const pillars = [
  {
    icon: Sparkles,
    title: 'Real-Time Charge Capture',
    description: 'Every consultation, lab assay, medication dose, and bed-hour maps automatically to billing codes.',
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Submission Claim Scrub',
    description: 'Autonomous AI audits every line item against payer rules before claims leave your facility.',
  },
  {
    icon: Lock,
    title: 'Tamper-Evident Audit Trail',
    description: 'HIPAA & SOC2 Type II verified reconciliation that eliminates unbilled services completely.',
  },
];

export default function BillingIntelligence() {
  return (
    <section
      id="billing-intelligence"
      className="py-16 sm:py-24 bg-white border-y border-slate-200/70 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-24 right-0 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(38,97,156,0.05)_0%,transparent_70%)] blur-2xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Simple Editorial Narrative */}
          <ClinicalReveal className="lg:col-span-5 space-y-7">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-ink leading-tight">
                Unified{' '}
                <span className="bg-gradient-to-r from-steel-teal via-[#2B7A9E] to-clinical-mint bg-clip-text text-transparent">
                  clinical-to-financial
                </span>{' '}
                ledger.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-medium">
                Clinical documentation and financial ledgers run as one—eliminating manual coding delays and recovering missed charges in real time.
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface-tonal border border-steel-teal/15 flex items-center justify-center text-steel-teal shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink">{pillar.title}</h3>
                      <p className="font-sans text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ClinicalReveal>

          {/* Right Column: Clean, Serene Material Ledger Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="m3-surface-elevated rounded-3xl overflow-hidden bg-white"
            >
              {/* Card Header */}
              <div className="px-6 py-5 bg-surface-tonal/60 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base font-bold text-ink">Live Revenue Reconciliation</p>
                  <p className="text-xs text-muted-grey mt-0.5">Synchronized directly from EHR, LIS &amp; Pharmacy</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clinical-mint/15 text-clinical-mint text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-clinical-mint animate-pulse" />
                  0.00% Leakage
                </span>
              </div>

              {/* Ledger Rows */}
              <div className="divide-y divide-slate-100">
                {BILLING_DETAILS.map((entry, idx) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-bg-light/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0" />
                      <span className="font-sans text-sm font-semibold text-ink">{entry.label}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-surface-tonal text-steel-teal font-mono text-[10px] font-semibold uppercase">
                        {entry.status}
                      </span>
                      <span className="font-mono text-sm font-bold text-ink tabular-nums">{entry.amount}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clean Summary Footer */}
              <div className="px-6 py-5 bg-bg-light/70 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-600">
                  <span>
                    <strong className="text-ink">98.4%</strong> Clean Claim Rate
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>Zero Unbilled Items</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted-grey font-medium">Total Reconciled</span>
                  <span className="font-display text-xl font-extrabold text-steel-teal tabular-nums">
                    $1,227.50
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
