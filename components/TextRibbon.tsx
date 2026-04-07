'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function TextRibbon() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const textY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 0.82, 0.82, 0.9]);

  return (
    <div ref={ref} className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-20%] will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1800&q=85"
          alt="IV therapy background"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Deep navy ocean overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: overlayOpacity,
          background: 'linear-gradient(135deg, rgba(2,13,31,0.92) 0%, rgba(14,165,233,0.15) 50%, rgba(2,13,31,0.92) 100%)' 
        }}
      />

      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(14,165,233,0.015) 3px, rgba(14,165,233,0.015) 4px)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-24 lg:py-32">
        <motion.div
          style={{ y: textY1 }}
          className="will-change-transform overflow-hidden"
        >
          <span className="block font-serif text-[clamp(72px,14vw,180px)] font-black text-white/05 leading-[0.85] select-none">
            Renew.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative py-8"
        >
          {/* Glowing line top */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mb-8 origin-center"
          />

          <p className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#0ea5e9] mb-4">
            Renewal IV Hydration believes
          </p>
          <h2 className="font-serif text-[clamp(28px,5vw,56px)] font-semibold text-white leading-tight">
            Your body deserves <em className="text-[#38bdf8] italic not-style">hospital-grade</em> care,
            <br />delivered with <em className="text-[#0ea5e9] italic not-style">spa-level</em> luxury.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mt-8 origin-center"
          />
        </motion.div>

        <motion.div
          style={{ y: textY2 }}
          className="will-change-transform overflow-hidden"
        >
          <span className="block font-serif text-[clamp(72px,14vw,180px)] font-black text-[#0ea5e9]/04 leading-[0.85] select-none">
            Replenish.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
