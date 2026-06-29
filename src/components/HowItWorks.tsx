import React from 'react';
import { motion } from 'motion/react';
import {
  UserPlus,
  Stethoscope,
  FlaskConical,
  CreditCard,
  Pill,
  CalendarCheck
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
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
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
    <section id="process" className="py-6 bg-[#0B1628] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header Block */}
        <div className="max-w-[600px] text-left">
          <span className="font-mono text-[9px] text-steel-teal tracking-[0.1em] uppercase font-bold bg-steel-teal/15 px-2 py-0.5 rounded">
            Patient Journey
          </span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mt-1.5">
            From first call to follow-up, every step connected.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed font-medium">
            End-to-end patient workflow with zero manual handoffs. Every department stays synchronized through event-driven coordination.
          </p>
        </div>

        {/* Steps Grid Block */}
        <div className="mt-6 relative">
          {/* Sharp, clean solid connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-[calc(100%/12)] right-[calc(100%/12)] h-[1px] bg-white/10 z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 relative z-10 w-full"
          >
            {journeySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative flex flex-col items-center text-center group flex-1 cursor-default"
                >
                  {/* Flat Icon Circle with clean cutout mask (no visible border) */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1628] shadow-[0_0_0_8px_#0B1628]">
                    <IconComponent strokeWidth={3} className="h-10 w-10 text-steel-teal transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text Content */}
                  <h3 className="mt-4 text-[13px] font-bold text-white font-display transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-gray-400 font-medium px-2 max-w-[160px] transition-colors duration-300">
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
