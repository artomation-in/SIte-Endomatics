import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Network, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenDemo: () => void;
}

export default function CTASection({ onOpenDemo }: CTASectionProps) {
  return (
    <section
      id="cta-section"
      className="w-full bg-gradient-to-br from-steel-teal via-steel-teal to-steel-teal-dark text-white py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Animated concentric clinical pulse rings */}
      <svg
        className="absolute -right-24 -bottom-24 w-[480px] h-[480px] pointer-events-none select-none opacity-25"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        {[90, 140, 190].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="#A8D6CF"
            strokeWidth="1"
            initial={{ scale: 0.92, opacity: 0.2 }}
            animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '200px 200px' }}
          />
        ))}
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full border border-white/20 mb-6">
          <Network className="h-3.5 w-3.5 text-pulse-teal" />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase font-bold text-pulse-teal">
            Platform Modernization
          </span>
        </div>

        <h2
          id="cta-headline"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight mb-5"
        >
          Your hospital deserves better infrastructure.
        </h2>

        <p id="cta-desc" className="font-sans text-sm sm:text-base text-pulse-teal/90 max-w-lg mx-auto mb-9 leading-relaxed">
          Bypass months of legacy vendor sales pitches. Get a live environment sandbox deployed for your clinical metrics inside 4 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={onOpenDemo}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-white hover:bg-ink hover:text-white text-steel-teal font-sans text-sm font-bold py-4 px-8 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all cursor-pointer inline-flex items-center justify-center gap-2 group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8 mt-10 text-xs text-white/85 font-mono">
          {['No Setup Fees', 'Sandbox Ready in 4h', 'HIPAA Compliant Cloud'].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A8D6CF]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
