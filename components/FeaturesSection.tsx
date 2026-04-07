'use client';

import { motion } from 'motion/react';
import React from 'react';

export default function FeaturesSection() {
  return (
    <section id="why-choose" className="py-24 md:py-32 px-5 md:px-10 lg:px-20 relative bg-[#020d1f]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#0ea5e9]">
              Why Choose Revive
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] leading-[1.1] text-[#e0f2fe] font-medium tracking-tight">
              A higher standard of<br className="hidden md:block"/> mobile wellness
            </h2>
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50 mt-4 mb-4" />
            <p className="font-sans text-[16px] md:text-[18px] text-[#bae6fd]/80 leading-relaxed max-w-2xl font-light">
              We combine clinical professionalism with a refined, concierge-style experience designed for comfort, convenience, and elevated care.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#03122b] rounded-[24px] p-10 md:p-14 hover:shadow-soft transition-shadow duration-500 border border-[#0ea5e9]/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-sans text-[22px] md:text-[26px] text-[#e0f2fe] font-light mb-4">
              Mobile<br />Convenience
            </h3>
            <p className="font-sans text-[15px] md:text-[16px] text-[#bae6fd]/70 leading-relaxed font-light">
              Luxury IV therapy delivered directly to your home, office, hotel, or private event. Discretion and convenience are paramount.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#03122b] rounded-[24px] p-10 md:p-14 hover:shadow-soft transition-shadow duration-500 border border-[#0ea5e9]/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-sans text-[22px] md:text-[26px] text-[#e0f2fe] font-light mb-4">
              Elevated<br />Professionalism
            </h3>
            <p className="font-sans text-[15px] md:text-[16px] text-[#bae6fd]/70 leading-relaxed font-light">
              Our certified BSN nurses provide safe, hospital-grade treatments customized to your body&apos;s unique needs and goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
