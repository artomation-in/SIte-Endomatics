import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert, Sparkles, Network } from 'lucide-react';

interface CTASectionProps {
  onOpenDemo: () => void;
}

export default function CTASection({ onOpenDemo }: CTASectionProps) {
  return (
    <section id="cta-section" className="w-full bg-steel-teal text-white py-24 relative overflow-hidden">
      
      {/* Heartbeat pulse ambient glow in corner */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-pulse-teal/10 blur-3xl pointer-events-none select-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-6">
          <Network className="h-3 w-3 text-pulse-teal" />
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-pulse-teal">
            Platform Modernization
          </span>
        </div>

        {/* Big Bold Headline */}
        <h2 id="cta-headline" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight mb-6">
          Your hospital deserves better infrastructure.
        </h2>

        {/* Conversational copy */}
        <p id="cta-desc" className="font-sans text-sm sm:text-base text-pulse-teal/90 max-w-lg mx-auto mb-10 leading-relaxed">
          Bypass months of legacy vendor sales pitches. Get a live environment sandbox deployed for your clinical metrics inside 4 hours.
        </p>

        {/* Centered Trigger Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-white hover:bg-ink hover:text-white text-steel-teal font-sans text-[13px] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Quality Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 text-xs text-white/75 font-mono">
          <span className="flex items-center gap-1.5">✓ No Setup Fees</span>
          <span className="flex items-center gap-1.5">✓ Sandbox Ready in 4h</span>
          <span className="flex items-center gap-1.5">✓ HIPAA Compliant Cloud</span>
        </div>

      </div>
    </section>
  );
}
