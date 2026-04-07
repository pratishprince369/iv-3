'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';

const faqs = [
  {
    q: "Where do you provide services?",
    a: "We provide mobile IV therapy at your home, office, hotel, or private event. Our service area covers the Greater Tampa Bay area and surrounding locations."
  },
  {
    q: "How long does a treatment take?",
    a: "Most IV drip treatments take between 45 to 60 minutes. Booster shots take only a few minutes. We recommend allowing a little extra time for the initial consultation."
  },
  {
    q: "Who administers the IVs?",
    a: "All treatments are administered by certified, experienced Registered Nurses (BSN) under the direction of our Medical Director to ensure the highest standard of care."
  },
  {
    q: "Is it safe?",
    a: "Yes. All of our protocols are physician-formulated and administered by highly trained medical professionals using hospital-grade, sterile equipment."
  }
];

export default function FaqAndReviewSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#e0f2fe]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Simple Pull Quote Review */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[24px] p-10 md:p-14 text-center mb-24 md:mb-32 shadow-sm border border-[#bae6fd]"
        >
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 text-[#0ea5e9]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <h3 className="font-serif text-[28px] md:text-[36px] text-[#0369a1] italic leading-relaxed mb-6 font-medium">
            &quot;The nurse was incredibly professional and the space felt instantly relaxing. I would absolutely book again.&quot;
          </h3>
          <span className="font-sans text-[13px] md:text-[14px] text-[#0c4a6e]/50 font-bold tracking-[0.1em] uppercase">
            — Client Review
          </span>
        </motion.div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#0ea5e9] mb-4 block">
              F A Q
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] text-[#0369a1] font-medium leading-[1.1]">
              Frequently asked<br className="hidden md:block"/> questions
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[16px] overflow-hidden border border-[#bae6fd]/50 shadow-sm"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center transition-colors hover:bg-[#f0f8ff]"
                >
                  <span className="font-sans text-[18px] md:text-[20px] text-[#0369a1] font-medium">
                    {faq.q}
                  </span>
                  <span className="text-[#0ea5e9] text-2xl font-light ml-4 transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openIndex === i ? '200px' : '0px', opacity: openIndex === i ? 1 : 0 }}
                >
                  <p className="px-8 pb-8 font-sans text-[15px] md:text-[16px] text-[#0c4a6e]/80 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
