import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-8 lg:py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div id="testimonials-header" className="text-center max-w-xl mx-auto mb-8 lg:mb-10">
          <span id="testimonials-badge" className="font-mono text-xs text-steel-teal tracking-[0.08em] uppercase font-semibold">
            Validation
          </span>
          <h2 id="testimonials-title" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mt-3">
            In active operations.
          </h2>
          <p id="testimonials-desc" className="font-sans text-sm text-muted-grey mt-4 leading-relaxed">
            Read how chief clinicians and hospital administrators evaluate our unified operating state after migration.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              id={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#F7F8FA] rounded-xl p-5 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between relative group hover:shadow-md transition-shadow"
            >
              {/* Quote text */}
              <blockquote className="relative z-10 font-display italic text-base sm:text-lg text-ink leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-gray-200/50 pt-4 flex flex-col">
                <span className="font-sans text-xs font-semibold text-ink">
                  {t.author}
                </span>
                <span className="font-sans text-[11px] text-muted-grey mt-0.5">
                  {t.role}
                </span>
                <span className="font-mono text-[10px] text-steel-teal uppercase tracking-wider mt-2 font-medium">
                  {t.hospital}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Clinical Validation Row */}
        <div id="testimonials-footer" className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-60">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-ink">HIPAA</span>
            <span className="font-sans text-[10px] text-muted-grey">Compliant Infrastructure</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-ink">SOC2 Type II</span>
            <span className="font-sans text-[10px] text-muted-grey">Certified Operational Safety</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-ink">GDPR</span>
            <span className="font-sans text-[10px] text-muted-grey">Privacy Enforced Kernels</span>
          </div>
        </div>

      </div>
    </section>
  );
}
