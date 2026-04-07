'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Direction of the dive: 'up' | 'left' | 'right' */
  direction?: 'up' | 'left' | 'right';
  /** How far element travels (px) */
  distance?: number;
  /** Class applied to wrapper */
  className?: string;
  /** Enable parallax depth (wrapper moves at slower speed while scrolling) */
  parallax?: boolean;
  /** Parallax depth factor 0-1, higher = more movement */
  parallaxStrength?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 70,
  className = '',
  parallax = false,
  parallaxStrength = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${parallaxStrength * -100}%`, `${parallaxStrength * 100}%`]
  );

  const initial: Record<string, number | string> = { opacity: 0 };
  if (direction === 'up') initial.y = distance;
  if (direction === 'left') initial.x = -distance;
  if (direction === 'right') initial.x = distance;

  const animate: Record<string, number> = { opacity: 1 };
  if (direction === 'up') animate.y = 0;
  if (direction === 'left') animate.x = 0;
  if (direction === 'right') animate.x = 0;

  if (parallax) {
    return (
      <motion.div ref={ref} style={{ y: parallaxY }} className={className}>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.12 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={animate}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
