'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: '"I booked a Myers Cocktail before a big presentation and I felt absolutely unstoppable. Sharp, energized, clear-headed. Renewal IV is my secret weapon — I recommend it to everyone."',
    author: 'Jennifer L.',
    treatment: 'Myers Cocktail',
    initials: 'JL',
  },
  {
    text: '"I had the worst hangover of my life after a bachelorette party. Called Renewal IV — the nurse arrived within an hour. I was ready for brunch by noon. Absolute lifesavers!"',
    author: 'Michelle C.',
    treatment: 'Hangover Rescue',
    initials: 'MC',
  },
  {
    text: '"The Beauty Drip has genuinely transformed my skin. The nurse was professional, kind, and made the whole experience feel spa-like and luxurious. 10/10!"',
    author: 'Ashley M.',
    treatment: 'Beauty Drip',
    initials: 'AM',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const quoteY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 lg:py-40 px-4 md:px-10" id="reviews"
      style={{ background: 'linear-gradient(180deg, #020d1f 0%, #03122b 50%, #020d1f 100%)' }}>

      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-10%] pointer-events-none will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,transparent_60%)]" />
      </motion.div>

      {/* Giant floating quote mark */}
      <motion.div
        style={{ y: quoteY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[280px] md:text-[420px] font-black text-[#0ea5e9]/03 leading-none pointer-events-none select-none will-change-transform"
      >
        &quot;
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/15 to-transparent" />

      <div className="max-w-[900px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#0ea5e9] mb-3 flex items-center justify-center gap-3 before:content-[''] before:block before:w-5 before:h-[1px] before:bg-[#0ea5e9] after:content-[''] after:block after:w-5 after:h-[1px] after:bg-[#0ea5e9]"
          >
            Patient Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(28px,5vw,58px)] font-semibold text-white"
          >
            What Our <em className="text-[#0ea5e9] italic not-style">Patients Say</em>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl border border-[#0ea5e9]/15 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(10,30,58,0.8) 0%, rgba(3,18,43,0.9) 100%)' }}>
          {/* Top gradient bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent" />

          <div className="p-8 md:p-12 lg:p-16">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="text-2xl text-[#0ea5e9]"
                >★</motion.span>
              ))}
            </div>

            {/* Quote text */}
            <div className="relative min-h-[180px] md:min-h-[160px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-center w-full"
                >
                  <p className="font-serif text-[clamp(16px,2.4vw,22px)] italic font-light text-white/82 leading-[1.78] mb-8">
                    {testimonials[index].text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] text-white font-sans text-sm font-bold flex items-center justify-center shadow-[0_0_0_3px_rgba(14,165,233,0.25),0_0_20px_rgba(14,165,233,0.2)]"
                    >
                      {testimonials[index].initials}
                    </motion.div>
                    <div className="text-left">
                      <strong className="block font-sans text-[15px] text-white font-semibold">{testimonials[index].author}</strong>
                      <span className="font-sans text-[11px] text-[#0ea5e9]/70 tracking-[0.1em]">{testimonials[index].treatment}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-400 p-0 border-none cursor-pointer ${i === index ? 'w-8 bg-[#0ea5e9]' : 'w-1.5 bg-white/15 hover:bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
