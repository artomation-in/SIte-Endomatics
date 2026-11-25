import React from 'react';
import { motion } from 'motion/react';
import {
  UserPlus,
  Stethoscope,
  FlaskConical,
  CreditCard,
  Pill,
  CalendarCheck,
} from 'lucide-react';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 16,
      },
    },
  };

  const journeySteps = [
    {
      title: 'Registration',
      description: 'Fast patient intake with AI duplicate detection and instant insurance verification.',
      icon: UserPlus,
    },
    {
      title: 'Consultation',
      description: 'Doctor workspace with AI-assisted SOAP notes, prescriptions, and clinical tools.',
      icon: Stethoscope,
    },
    {
      title: 'Diagnostics',
      description: 'Lab orders, sample collection, result delivery — all connected to the clinical record.',
      icon: FlaskConical,
    },
    {
      title: 'Billing',
      description: 'Consolidated invoicing with zero manual coding — charges auto-generated from clinical notes.',
      icon: CreditCard,
    },
    {
      title: 'Pharmacy',
      description: 'Prescription integration with dispensing workflow and inventory management.',
      icon: Pill,
    },
    {
      title: 'Follow-up',
      description: 'AI-planned follow-ups with patient tracking and longitudinal record continuity.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-16 bg-[#0B1628] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-[640px] text-center sm:text-left">
          <span className="inline-flex items-center font-mono text-[10px] text-clinical-mint tracking-[0.12em] uppercase font-bold bg-clinical-mint/10 border border-clinical-mint/20 px-3 py-1 rounded-full">
            Patient Journey
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-3">
            From first call to follow-up, every step connected.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-medium">
            End-to-end patient workflow with zero manual handoffs. Every department stays synchronized through event-driven AI coordination.
          </p>
        </div>

        {/* Steps Grid + Animated SVG Connector */}
        <div className="mt-10 relative">
          <svg
            className="hidden lg:block absolute top-7 left-[calc(100%/12)] w-[calc(100%*5/6)] h-2 z-0 overflow-visible"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="4"
              x2="100%"
              y2="4"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            <motion.line
              x1="0"
              y1="4"
              x2="100%"
              y2="4"
              stroke="#2BB3A3"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-4 relative z-10 w-full"
          >
            {journeySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative flex flex-col items-center text-center group cursor-default"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#11223D] border border-white/15 shadow-[0_0_0_8px_#0B1628] group-hover:border-clinical-mint/50 group-hover:bg-steel-teal/30 transition-all duration-300">
                    <IconComponent
                      strokeWidth={2}
                      className="h-6 w-6 text-clinical-mint transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0B1628] border border-white/20 font-mono text-[9px] font-bold text-slate-300 flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white font-display">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400 font-medium sm:max-w-[175px] sm:mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
