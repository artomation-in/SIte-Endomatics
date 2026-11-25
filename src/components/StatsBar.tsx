import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data';
import { StatItem } from '../types';

export default function StatsBar() {
  return (
    <section
      id="stats-bar-section"
      className="w-full bg-[#0B1628] py-10 sm:py-12 overflow-hidden relative border-y border-white/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-4 items-center">
          {STATS_DATA.map((stat, idx) => (
            <React.Fragment key={stat.id}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center px-3"
                itemScope
                itemType="https://schema.org/PropertyValue"
              >
                <Counter stat={stat} />
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold mt-2"
                  itemProp="name"
                >
                  {stat.label}
                </p>
              </motion.div>
              {idx < STATS_DATA.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-white/[0.08] self-center justify-self-center" />
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
    if (!isInView || stat.id === 'stat-leakage') return;

    const end = stat.value;
    const duration = 1200;
    let startTime: number | null = null;
    let rafId = 0;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(end * eased);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(end);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, stat.value, stat.id]);

  const renderValue = () => {
    if (stat.id === 'stat-leakage') return 'Zero';
    if (stat.value % 1 !== 0) return displayValue.toFixed(1);
    return Math.floor(displayValue).toString();
  };

  return (
    <div
      ref={ref}
      className="font-mono text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight flex items-baseline justify-center tabular-nums"
    >
      <span itemProp="value">{renderValue()}</span>
      <span className="text-clinical-mint font-sans ml-1 text-xl lg:text-2xl font-bold" itemProp="unitText">
        {stat.suffix}
      </span>
    </div>
  );
}
