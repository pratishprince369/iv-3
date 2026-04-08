'use client';

import { motion } from 'motion/react';
import React from 'react';

const boosts = [
  {
    name: "B12 Energy Shot",
    desc: "Boost energy, metabolism & focus",
    price: "$30"
  },
  {
    name: "Vitamin D Injection",
    desc: "Support immunity, mood & overall wellness",
    price: "$40"
  },
  {
    name: "Glutathione Push",
    desc: "Detox, brighten skin & boost glow",
    price: "$65"
  },
  {
    name: "Immunity Boost",
    desc: "Vitamin C + Zinc for immune support",
    price: "$35"
  },
  {
    name: "Amino Blend Boost",
    desc: "Muscle recovery & performance support",
    price: "$45"
  },
  {
    name: "NAD+ Boost",
    desc: "Mental clarity, energy & anti-aging support",
    price: "$95"
  }
];

export default function ShotBarSection() {
  return (
    <section id="shotbar" className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#020d1f] relative overflow-hidden">
      {/* Background elegant splash graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0ea5e9]/20 to-transparent rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-16 w-full flex flex-col items-center"
        >
           <h3 className="font-serif text-[18px] md:text-[24px] text-[#0ea5e9] font-light tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#0ea5e9]/50" />
              Boost Your Results
              <span className="w-12 h-[1px] bg-[#0ea5e9]/50" />
           </h3>
           <h2 className="font-sans font-black text-[60px] md:text-[100px] lg:text-[140px] text-[#e0f2fe]/5 leading-none tracking-tighter uppercase relative -mb-4 md:-mb-8 select-none">
              Add-On Boosts
           </h2>
           <p className="font-sans text-[14px] md:text-[16px] text-white/60 tracking-[0.1em] uppercase font-light max-w-md mt-6">
              Quick boosts for energy, immunity, metabolism, and more.
           </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {boosts.map((boost) => (
            <div key={boost.name} className="flex flex-col text-left p-8 bg-[#03122b] border border-[#0ea5e9]/10 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-sans text-[20px] text-[#e0f2fe] font-medium tracking-wide">
                  {boost.name}
                </h4>
                <span className="font-sans text-[18px] text-[#0ea5e9] font-bold">
                  {boost.price}
                </span>
              </div>
              <p className="font-sans text-[14px] text-[#bae6fd]/70 leading-relaxed font-light">
                {boost.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
