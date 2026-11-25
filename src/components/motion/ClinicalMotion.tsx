import React from 'react';
import { motion, useScroll, useSpring, HTMLMotionProps } from 'motion/react';

/**
 * Top-of-viewport clinical scroll progress indicator.
 * Uses useScroll + useSpring for smooth 60fps progress tracking.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: 'left' }}
      className="h-[2px] w-full bg-gradient-to-r from-steel-teal via-clinical-mint to-steel-teal"
    />
  );
}

interface ClinicalRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

/**
 * SSR-safe Material 3 entrance reveal.
 * Uses subtle translation and opacity with a crisp deceleration curve.
 */
export function ClinicalReveal({
  children,
  delay = 0,
  yOffset = 16,
  className = '',
  ...props
}: ClinicalRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface TactileCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  elevated?: boolean;
}

/**
 * Material 3 tactile surface card with subtle hover lift and press feedback.
 */
export function TactileCard({
  children,
  elevated = false,
  className = '',
  ...props
}: TactileCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      className={`${elevated ? 'm3-surface-elevated' : 'm3-surface'} rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface LivePulseWaveformProps {
  color?: string;
  height?: number;
  className?: string;
  speedSec?: number;
}

/**
 * Animated clinical telemetry / ECG-style SVG waveform.
 */
export function LivePulseWaveform({
  color = '#26619C',
  height = 28,
  className = '',
  speedSec = 2.6,
}: LivePulseWaveformProps) {
  const path =
    'M0,16 L24,16 L32,16 L38,6 L44,24 L50,3 L56,22 L62,16 L84,16 L92,12 L98,16 L124,16 L132,16 L138,7 L144,23 L150,4 L156,21 L162,16 L200,16';

  return (
    <svg
      viewBox="0 0 200 28"
      height={height}
      fill="none"
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d={path}
        stroke={color}
        strokeOpacity="0.16"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0.2, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: speedSec,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  );
}
