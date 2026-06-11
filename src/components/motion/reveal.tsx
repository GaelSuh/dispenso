'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import * as React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Tag to render. Defaults to div. */
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
  /** Translation distance in px. Defaults to 12 — tasteful, never bouncy. */
  y?: number;
  /** Trigger once (good for marketing pages) or on every entry. */
  once?: boolean;
}

const SPRING: Variants = {
  hidden: { opacity: 0, y: 12 },
  shown:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] } },
};

/**
 * Reveal — fade-up on enter. Reads `prefers-reduced-motion` and disables
 * the translation when the user opts out (key accessibility move many
 * SaaS sites still forget).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  y = 12,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y },
        shown: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9], delay },
        },
      };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="shown"
      viewport={{ once, margin: '-80px 0px' }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/**
 * RevealStagger — wraps a list whose children should fade up one after
 * another. The children render themselves; we only orchestrate them.
 */
export function RevealStagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  const reduceMotion = useReducedMotion();
  const parent: Variants = {
    hidden: {},
    shown: {
      transition: reduceMotion
        ? { duration: 0.2 }
        : { staggerChildren, delayChildren },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px 0px' }}
      variants={parent}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Variants for stagger children. Use inside RevealStagger. */
export const childRiseVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  shown:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] } },
};

export { SPRING as revealSpring };
