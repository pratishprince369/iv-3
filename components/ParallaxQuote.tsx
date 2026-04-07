'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scaleOverlay = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={sectionRef} className="min-h-[85vh] relative overflow-hidden flex items-center justify-center" id="pq">
      {/* Deep parallax image */}
      <motion.div style={{ y, scale: scaleOverlay }} className="absolute inset-[-25%] will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1800&q=90"
          alt="Wellness background"
          fill
          className="object-cover object-[center_30%]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Multi-layer ocean overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020d1f]/95 via-[#0369a1]/25 to-[#020d1f]/95" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 65%)' }} />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Content */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center px-6 md:px-10 will-change-transform">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#0ea5e9] block mb-6"
        >
          Renewal IV Hydration believes
        </motion.span>

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[clamp(44px,8vw,100px)] font-semibold leading-none text-white">Your Best Self</h2>
        </motion.div>

        {/* Animated wavy line */}
        <div className="flex justify-center my-6">
          <svg viewBox="0 0 500 20" width="500" className="w-full max-w-[500px]">
            <motion.path
              d="M0 10 Q125 2 250 10 Q375 18 500 10"
              stroke="#0ea5e9"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx="250" cy="10" r="4"
              fill="#38bdf8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[clamp(44px,8vw,100px)] font-semibold leading-none italic text-[#0ea5e9]">Is One Drip Away.</h2>
          <p className="font-serif text-[18px] italic font-light text-white/50 mt-4 mb-12">
            Join thousands of patients who chose Renewal IV.
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          className="inline-block font-sans text-[11px] font-bold tracking-[0.28em] uppercase text-white no-underline border border-[#0ea5e9]/60 bg-[#0ea5e9]/15 backdrop-blur-md px-12 py-4 rounded-full transition-all duration-400 hover:bg-[#0ea5e9] hover:border-[#0ea5e9] hover:shadow-[0_14px_50px_rgba(14,165,233,0.55)]"
        >
          Book Your Session Now
        </motion.a>
      </motion.div>
    </section>
  );
}
