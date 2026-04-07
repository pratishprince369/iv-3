'use client';

import { motion } from 'motion/react';
import React from 'react';

export default function GroupTherapySection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#020d1f] relative flex items-center justify-center">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#03122b] rounded-[32px] p-12 md:p-20 shadow-float border border-[#0ea5e9]/10"
        >
          <h2 className="font-serif text-[40px] md:text-[56px] text-[#e0f2fe] font-medium leading-tight mb-8">
            Group<br className="md:hidden" /> Therapy
          </h2>
          
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            <p className="font-sans text-[16px] md:text-[20px] text-[#bae6fd]/90 font-light leading-relaxed">
              Perfect for bridal parties, birthdays, wellness events, corporate gatherings, and private group experiences.
            </p>
            
            <p className="font-sans text-[15px] md:text-[18px] text-[#bae6fd]/70 font-light leading-relaxed">
              Custom group pricing available. Discounts may apply depending on group size, location, and selected services.
            </p>
          </div>

          <div className="mt-12">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-[#020d1f] font-sans text-[13px] md:text-[15px] font-bold tracking-[0.1em] uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Request Group Booking
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
