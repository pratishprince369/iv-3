'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is IV Therapy?",
      a: "IV Therapy is a fast and efficient way to deliver fluids, vitamins, and minerals directly into your bloodstream, ensuring 100% absorption for immediate benefits."
    },
    {
      q: "How long does a session take?",
      a: "Most IV therapy sessions take between 45 to 60 minutes depending on the specific drip and individual factors."
    },
    {
      q: "Is it safe?",
      a: "Yes! All our treatments are administered by certified and experienced Registered Nurses using sterile equipment."
    },
    {
      q: "Does it hurt?",
      a: "You may feel a slight pinch when the needle goes in, but the process is generally painless and very relaxing."
    },
    {
      q: "How often should I get IV therapy?",
      a: "This depends on your individual needs and goals. Many clients opt for bi-weekly or monthly sessions to maintain optimal wellness."
    }
  ];

  return (
    <div className="w-full bg-[#f4f7fb] py-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#020d1f] tracking-tight mb-12 uppercase text-center">Frequently Asked</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-[#020d1f]">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
