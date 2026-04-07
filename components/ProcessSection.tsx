'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';

const steps = [
  {
    title: "Select your drip",
    text: "Choose from our premium menu of physician-formulated therapies or customize your own."
  },
  {
    title: "Nurse arrives",
    text: "A certified BSN nurse arrives at your location with all necessary equipment."
  },
  {
    title: "Relax and recover",
    text: "Sit back while you receive clinical-grade hydration and essential nutrients."
  },
  {
    title: "Feel better fast",
    text: "Experience immediate, revitalizing results that last for days."
  }
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="how" className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#e0f2fe]">
      <div className="max-w-[800px] mx-auto text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#0369a1] font-medium tracking-[0.05em] uppercase">
            How it works
          </h2>
          <div className="w-16 h-[1px] bg-[#0ea5e9]/40 mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-col border-t border-[#0ea5e9]/40">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#0ea5e9]/40"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 px-4 flex justify-between items-center group transition-colors hover:bg-[#bae6fd]/30"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-sans text-[12px] md:text-[14px] font-bold text-[#0ea5e9]">
                    0{i + 1}.
                  </span>
                  <span className="font-sans text-[16px] md:text-[20px] text-[#0369a1] tracking-[0.1em] uppercase group-hover:text-[#0ea5e9] transition-colors">
                    {step.title}
                  </span>
                </div>
                <span className="text-[#0ea5e9] text-2xl font-light transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out text-left"
                style={{ maxHeight: openIndex === i ? '150px' : '0px', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="px-4 pb-8 pl-[60px] md:pl-[80px] font-sans text-[15px] md:text-[16px] text-[#0c4a6e]/70 font-light leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
