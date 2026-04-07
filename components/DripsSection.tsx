'use client';

import { motion } from 'motion/react';
import React from 'react';

const drips = [
  {
    title: 'Liquid Gold',
    subtitle: 'Hangover Cure',
    desc: 'Replenish, rehydrate, and bounce back fast.',
    color: '#ffcc00', // Yellow
  },
  {
    title: 'Revive Defense',
    subtitle: 'Immunity',
    desc: 'Strengthen immunity and fight off what slow you down.',
    color: '#4ade80', // Green
  },
  {
    title: 'Beautify',
    subtitle: 'Beauty Drip',
    desc: 'Hydrate your skin, boost radiance, and glow from within.',
    color: '#ec4899', // Pink
  },
  {
    title: 'Revive Recovery',
    subtitle: 'Athletic Recovery',
    desc: 'Support muscle repair, reduce soreness, and recover faster.',
    color: '#9333ea', // Deep Purple
  },
  {
    title: 'All In One Revive',
    subtitle: 'Myers Cocktail',
    desc: 'The ultimate blend for total wellness, hydration, and balance.',
    color: '#6366f1', // Light Indigo
  },
  {
    title: 'Revive Calm',
    subtitle: 'Relax. Reset. Restore.',
    desc: 'Relax your mind, ease stress, and reset your body.',
    color: '#d946ef', // Light Purple
  },
  {
    title: 'Brain Focus',
    subtitle: 'NAD+ Drip',
    desc: 'Sharpen your focus, boost mental clarity, and stay on top of your game.',
    color: '#06b6d4', // Bright Cyan
  }
];

const IVBagIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 150" className="w-28 h-40 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500 will-change-transform drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
    {/* Top Hanger Hole & Cap */}
    <path d="M40 5 L60 5 C65 5 65 10 65 10 L68 20 L32 20 L35 10 C35 10 35 5 40 5 Z" fill="#e0f2fe" opacity="0.2"/>
    <circle cx="50" cy="12" r="3" fill="#020d1f" />
    
    {/* Main Bag Silhouette (Glassy) */}
    <rect x="25" y="20" width="50" height="90" rx="15" fill="#ffffff" opacity="0.05" stroke="#e0f2fe" strokeWidth="1.5" />
    
    {/* Liquid Level Gradient/Geometry */}
    <defs>
      <linearGradient id={`liquid-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.85" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>
    <path d="M28 40 Q50 35 72 40 L72 98 C72 104 68 108 62 108 L38 108 C32 108 28 104 28 98 Z" fill={`url(#liquid-${color})`} />
    
    {/* Inner Label Wrapper (Black like the screenshot) */}
    <rect x="30" y="50" width="40" height="40" rx="6" fill="#020d1f" opacity="0.95" />
    
    {/* Golden Revive 'R' Shield Logo on label */}
    <path d="M50 55 L58 58 L58 75 Q50 82 42 75 L42 58 Z" fill="none" stroke="#C0A06D" strokeWidth="1" />
    <text x="50" y="73" fill="#C0A06D" fontSize="10" fontFamily="serif" fontWeight="bold" textAnchor="middle">R</text>

    {/* Bottom Plugs / Outlets */}
    <rect x="35" y="110" width="8" height="15" rx="3" fill="#e0f2fe" opacity="0.4" />
    <rect x="57" y="110" width="8" height="15" rx="3" fill="#e0f2fe" opacity="0.4" />
    
    {/* IV Tubing */}
    <path d="M61 125 C61 140 45 130 45 150" stroke="#e0f2fe" strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" />
    
    {/* Gloss / Light Reflection */}
    <path d="M28 35 Q35 25 45 25 L45 80 Q35 70 28 50 Z" fill="#ffffff" opacity="0.2" />
  </svg>
);

export default function DripsSection() {
  return (
    <section id="drips" className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#020d1f] relative overflow-hidden">
      {/* Background glow syncing with IV fluids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0ea5e9]/5 via-[#020d1f] to-[#020d1f] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full overflow-hidden">
        
        {/* Special Offer Banner */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="bg-[#03122b] rounded-3xl p-8 md:p-10 text-center mb-24 max-w-4xl mx-auto border border-[#0ea5e9]/20 shadow-[0_0_30px_rgba(14,165,233,0.1)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ea5e9]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="font-sans text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase text-[#0ea5e9] mb-4 block">
            Special Offer
          </span>
          <h3 className="font-serif text-[32px] md:text-[46px] text-[#e0f2fe] font-medium leading-tight mb-2">
            New Clients Get $25 OFF
          </h3>
          <p className="font-sans text-[16px] md:text-[20px] text-[#bae6fd] font-light">
            Your First Bag! Book your session today.
          </p>
        </motion.div>

        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans font-black text-[40px] md:text-[60px] lg:text-[72px] text-[#e0f2fe] uppercase tracking-tighter leading-none mb-4">
              Feel Better. <span className="text-[#0ea5e9]">Faster.</span>
            </h2>
            <p className="font-serif italic text-[#bae6fd] text-[20px] md:text-[28px] mb-8">
              From the Inside Out.
            </p>
            <p className="font-sans text-[15px] md:text-[18px] text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Our IV therapies deliver essential vitamins, minerals, and electrolytes for fast, noticeable results.
            </p>
            <div className="w-16 h-[1px] bg-[#0ea5e9]/30 mx-auto mb-12" />
            <h3 className="font-sans text-[16px] md:text-[20px] text-[#0ea5e9] font-bold tracking-[0.15em] uppercase">
              Choose Your Drip. Feel The Difference.
            </h3>
          </motion.div>
        </div>

        {/* Container for Drips - wrapped so all 7 are visible */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
          {drips.map((drip, i) => (
            <motion.div
              key={drip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-[280px] md:w-[300px] shrink-0 bg-[#03122b] rounded-[32px] p-8 flex flex-col justify-between border border-white/5 group hover:border-white/10 transition-colors duration-500 relative cursor-pointer"
            >
              {/* Colored Glow behind the bottle */}
              <div 
                className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-full"
                style={{ backgroundColor: drip.color }} 
              />

              <div className="z-10 relative">
                {/* SVG IV Bag Component */}
                <IVBagIcon color={drip.color} />

                <div className="text-center mt-6">
                  <h3 className="font-sans text-[20px] text-[#e0f2fe] font-bold uppercase tracking-wider mb-2 leading-tight">
                    {drip.title}
                  </h3>
                  <h4 
                    className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase mb-6"
                    style={{ color: drip.color }}
                  >
                    ({drip.subtitle})
                  </h4>
                  <p className="font-sans text-[14px] text-white/50 font-light leading-relaxed min-h-[80px]">
                    {drip.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 text-center relative z-10">
                <button className="font-sans text-[12px] font-medium tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors duration-300 w-full hover:bg-white/5 py-4 rounded-full">
                  Book This Drip
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
