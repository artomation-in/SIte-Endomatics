import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { ClinicalReveal, TactileCard } from './motion/ClinicalMotion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white overflow-hidden border-t border-slate-200/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ClinicalReveal id="testimonials-header" className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span
            id="testimonials-badge"
            className="inline-flex items-center font-mono text-[10px] text-steel-teal tracking-[0.12em] uppercase font-bold bg-surface-tonal border border-steel-teal/15 px-3 py-1 rounded-full"
          >
            Clinical Validation
          </span>
          <h2 id="testimonials-title" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mt-3">
            In active operations.
          </h2>
          <p id="testimonials-desc" className="font-sans text-sm sm:text-base text-muted-grey mt-3 leading-relaxed font-medium">
            Read how chief clinicians and hospital administrators evaluate our unified operating state after migration.
          </p>
        </ClinicalReveal>

        {/* 2-Column Material Cards */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              id={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TactileCard className="p-6 sm:p-8 h-full flex flex-col justify-between bg-bg-light/50 relative overflow-hidden">
                <Quote className="w-8 h-8 text-steel-teal/15 mb-4" />
                <blockquote className="relative z-10 font-display text-base sm:text-lg text-ink leading-relaxed font-medium mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="border-t border-slate-200/70 pt-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-bold text-ink">{t.author}</span>
                    <span className="font-sans text-xs text-muted-grey mt-0.5">{t.role}</span>
                  </div>
                  <span className="font-mono text-[10px] text-steel-teal uppercase tracking-wider font-bold bg-surface-tonal px-3 py-1 rounded-full border border-steel-teal/15">
                    {t.hospital}
                  </span>
                </div>
              </TactileCard>
            </motion.div>
          ))}
        </div>

        {/* Compliance Validation Row */}
        <div
          id="testimonials-footer"
          className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8"
        >
          {[
            { code: 'HIPAA', label: 'Compliant Infrastructure' },
            { code: 'SOC2 Type II', label: 'Certified Operational Safety' },
            { code: 'GDPR', label: 'Privacy Enforced Kernels' },
          ].map((badge) => (
            <div
              key={badge.code}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-tonal/70 border border-slate-200/70"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-steel-teal" />
              <span className="font-mono text-xs font-bold text-ink">{badge.code}</span>
              <span className="font-sans text-[11px] text-muted-grey">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
