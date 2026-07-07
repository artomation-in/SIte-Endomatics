import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data';
import { StatItem } from '../types';

export default function StatsBar() {
  return (
    <section id="stats-bar-section" className="w-full bg-[#0B1628] py-10 overflow-hidden relative border-y border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-4 items-center">
          {STATS_DATA.map((stat, idx) => (
            <React.Fragment key={stat.id}>
              <div className="flex flex-col items-center text-center px-4" itemScope itemType="https://schema.org/PropertyValue">
                <Counter stat={stat} />
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A8F9E] font-semibold mt-2" itemProp="name">
                  {stat.label}
                </p>
              </div>
              {idx < STATS_DATA.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-white/[0.06] self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Handle string values (like 'Zero' leakage) separately from numerical counters
    if (stat.id === 'stat-leakage') {
      return; // remains 'Zero' as a static text representation
    }

    let start = 0;
    const end = stat.value;
    const duration = 1500; // ms
    const stepTime = 16; // approx 60fps
    const totalSteps = Math.ceil(duration / stepTime);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      // Smooth easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easedProgress;

      setDisplayValue(currentVal);

      if (step >= totalSteps) {
        setDisplayValue(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value, stat.id]);

  const renderValue = () => {
    if (stat.id === 'stat-leakage') {
      return 'Zero';
    }

    // Check if float (accuracy has decimal)
    if (stat.value % 1 !== 0) {
      return displayValue.toFixed(1);
    }
    return Math.floor(displayValue).toString();
  };

  return (
    <div ref={ref} className="font-mono text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tighter flex items-baseline justify-center">
      <span itemProp="value">{renderValue()}</span>
      <span className="text-steel-teal font-sans ml-1 text-2xl lg:text-3xl" itemProp="unitText">
        {stat.suffix}
      </span>
    </div>
  );
}
