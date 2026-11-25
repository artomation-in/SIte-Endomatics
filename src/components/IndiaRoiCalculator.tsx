import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface IndiaRoiCalculatorProps {
  onOpenDemo: () => void;
}

export default function IndiaRoiCalculator({ onOpenDemo }: IndiaRoiCalculatorProps) {
  const [beds, setBeds] = useState(100);
  const [monthlyOpd, setMonthlyOpd] = useState(4500);

  // Conservative 4.5% average leakage recovery on Indian hospital blended ARPOB/OPD
  const estimatedMonthlyBillingInr = beds * 185000 + monthlyOpd * 650;
  const annualRecoveredLakhs = Math.round((estimatedMonthlyBillingInr * 0.045 * 12) / 100000);
  const hoursSavedMonthly = Math.round(beds * 3.5 + monthlyOpd * 0.04);

  return (
    <div className="m3-surface-elevated rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-surface-tonal border border-steel-teal/15 flex items-center justify-center text-steel-teal">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-extrabold text-ink">
              Hospital Revenue Leakage &amp; ROI Calculator (India)
            </h3>
            <p className="text-xs text-muted-grey">
              Estimate annual billing recovery when switching from manual/legacy HMS to ENDOMATICS.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clinical-mint/10 text-clinical-mint text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          0.00% Leakage Model
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex justify-between text-xs font-semibold text-ink mb-2">
              <label htmlFor="roi-beds">Active Hospital Beds</label>
              <span className="font-mono text-steel-teal font-bold">{beds} Beds</span>
            </div>
            <input
              id="roi-beds"
              type="range"
              min={20}
              max={600}
              step={10}
              value={beds}
              onChange={(e) => setBeds(Number(e.target.value))}
              className="w-full accent-steel-teal cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-grey mt-1">
              <span>20 Beds</span>
              <span>300 Beds</span>
              <span>600+ Beds</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-ink mb-2">
              <label htmlFor="roi-opd">Monthly OPD Visits</label>
              <span className="font-mono text-steel-teal font-bold">{monthlyOpd.toLocaleString('en-IN')} / mo</span>
            </div>
            <input
              id="roi-opd"
              type="range"
              min={500}
              max={25000}
              step={500}
              value={monthlyOpd}
              onChange={(e) => setMonthlyOpd(Number(e.target.value))}
              className="w-full accent-steel-teal cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-grey mt-1">
              <span>500</span>
              <span>12,500</span>
              <span>25,000+</span>
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0B1628] text-white p-6 space-y-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              Estimated Annual Recovery
            </p>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-clinical-mint mt-1">
              ₹{annualRecoveredLakhs} Lakhs<span className="text-base font-medium text-slate-300"> / yr</span>
            </p>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-300">Staff Hours Saved</span>
            <strong className="font-mono text-white">{hoursSavedMonthly.toLocaleString('en-IN')} hrs/mo</strong>
          </div>

          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-xs sm:text-sm font-semibold py-3 px-5 rounded-full transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Get Custom Hospital Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
