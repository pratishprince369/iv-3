"use client";
import React, { useState, useEffect } from "react";
import { ShieldCheck, Clock, Home, Star, Phone, AppWindow } from "lucide-react";

export default function AlternativeHero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('booking') === 'true' || searchParams.get('payment') === 'success') {
        setIsPopupOpen(true);
      }
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap');
        
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        #hero-perfect {
          background: #EEF6FF;
          background: radial-gradient(ellipse at 80% 50%, rgba(0, 162, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 20% 30%, rgba(0, 119, 255, 0.05) 0%, transparent 40%), #EEF6FF;
        }

        .scroll-pulse {
          animation: fadePulse 2.5s ease-in-out infinite;
        }

        @keyframes fadePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}} />

      <section id="hero-perfect" className="relative min-h-[100vh] w-full flex items-center justify-center pt-[130px] pb-[80px] overflow-hidden font-outfit">
        
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle blue/purple particles */}
          <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-[#00A2FF] rounded-full blur-[1px] opacity-60" />
          <div className="absolute top-[50%] left-[10%] w-1.5 h-1.5 bg-[#0077FF] rounded-full blur-[1px] opacity-40" />
          <div className="absolute top-[30%] right-[30%] w-0.5 h-0.5 bg-[#8B5CF6] rounded-full blur-[1px] opacity-50" />
          <div className="absolute bottom-[30%] left-[40%] w-1.5 h-1.5 bg-[#4285F4] rounded-full blur-[1px] opacity-40" />
          <div className="absolute bottom-[20%] right-[20%] w-1 h-1 bg-[#00B4FF] rounded-full blur-[1px] opacity-60" />
          <div className="absolute top-[10%] right-[40%] w-1 h-1 bg-[#00A2FF] rounded-full blur-[1px] opacity-30" />
        </div>

        <div className="max-w-[1300px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 relative z-10">
          
          <div className="flex flex-col items-start justify-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D1EBFF] border border-[#B3DFFF] rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#0077FF] text-[10px] font-bold tracking-[0.12em] uppercase font-syne">NEW YORK&apos;S MOBILE IV SERVICE</span>
            </div>

            <div className="text-[#0077FF] italic font-medium text-[16px] mb-4 drop-shadow-sm font-outfit tracking-wide">
              Feel Better. Faster. From the Inside Out.
            </div>

            <h1 className="font-extrabold text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[1.0] tracking-tight mb-7 font-syne uppercase">
              <span className="text-[#1A202C] block">Revive.</span>
              <span className="text-[#1A202C] block">Rehydrate.</span>
              <span className="text-[#38bdf8] block drop-shadow-sm">Recover.</span>
            </h1>

            <p className="text-[#4A5568] text-[15px] max-w-[500px] leading-[1.7] mb-8 font-medium">
              Hospital-grade IV hydration therapy delivered to your door. Home, hotel, or office — our licensed nurses come to you, anywhere in New York.
            </p>

            {/* Offer Box */}
            <div className="bg-[#E5F3FF] border border-[#B3DFFF] shadow-sm rounded-xl p-3 mb-9 w-full max-w-[530px] flex items-center gap-4">
              <div className="text-[28px] shrink-0 pl-1 drop-shadow-md">🎁</div>
              <div className="flex flex-col">
                <span className="text-[#00B4FF] font-black text-[14px] sm:text-[16px] tracking-wide font-syne uppercase">New Clients Get $25 OFF Your First Bag!</span>
                <span className="text-[#64748B] text-[11px] font-medium mt-0.5">Mention this offer when booking — limited time</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <button onClick={() => setIsPopupOpen(true)} className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2.5 transition-colors text-[14px] shadow-lg shadow-blue-500/30">
                <AppWindow className="w-5 h-5" /> Book Your Session
              </button>
              <a href="tel:813-709-3698" className="border border-[#B3DFFF] bg-[#EEF6FF] text-[#1A202C] hover:bg-[#E0F0FE] px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all text-[14px] shadow-sm">
                <Phone className="w-[18px] h-[18px]" /> 813-709-3698
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 w-full max-w-[650px]">
              {[
                { icon: <ShieldCheck className="w-[16px] h-[16px] text-[#0077FF]" strokeWidth={2.5}/>, title: "Certified Nurses", sub: "Licensed RNs only" },
                { icon: <Clock className="w-[16px] h-[16px] text-[#0077FF]" strokeWidth={2.5}/>, title: "Same-Day Available", sub: "Fast response across NYC" },
                { icon: <Home className="w-[16px] h-[16px] text-[#0077FF]" strokeWidth={2.5}/>, title: "We Come to You", sub: "100% mobile service" },
                { icon: <Star className="w-[16px] h-[16px] text-[#0077FF]" strokeWidth={2.5}/>, title: "4.8★ Google Rating", sub: "500+ happy clients" }
              ].map((badge, i) => (
                <div key={i} className="bg-[#E6F4FF] border border-[#CCE6FF] rounded-[10px] py-2 px-3 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,119,255,0.03)] min-w-[200px] flex-grow">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#B3DFFF]/70 flex items-center justify-center shrink-0">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-[#1A202C] text-[11px] leading-tight font-syne mb-0.5">{badge.title}</span>
                    <span className="text-[#64748B] text-[9.5px] leading-tight">{badge.sub}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="relative h-full hidden lg:flex items-center justify-center">
             {/* Beautiful IV Bag Illustration matching the screenshot */}
             <div className="relative w-[300px] h-[700px] mt-[100px] animate-[floatIV_3s_ease-in-out_infinite]">
                
                {/* Stand / Pole base hidden off screen, just the top part */}
                <div className="absolute top-[0] w-[6px] h-full bg-gradient-to-r from-[#8292A5] via-[#E2E8F0] to-[#8292A5] left-1/2 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)]" />
                
                {/* Top Hook Assembly */}
                <div className="absolute top-[28px] w-20 h-2 bg-[#2D3748] left-1/2 -translate-x-1/2 rounded-full drop-shadow-md" />
                <div className="absolute top-[16px] w-[26px] h-[26px] border-t-4 border-l-4 border-r-4 border-b-0 border-[#2D3748] left-1/2 -translate-x-1/2 rounded-t-full drop-shadow-md" />
                <div className="absolute top-[28px] w-[50px] h-0 border-t-0 border-[#A0AEC0] left-1/2 -translate-x-1/2" />
                <div className="absolute top-[28px] w-12 h-[20px] border-t-0 border-l-[3.5px] border-r-[3.5px] border-b-[3.5px] border-[#A0AEC0] left-1/2 -translate-x-1/2 rounded-b-full drop-shadow-md" />

                {/* Bag Soft Blue Glow Behind */}
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-[#38bdf8]/20 rounded-full blur-[50px] pointer-events-none" />

                {/* Main Bag Element */}
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[160px] h-[220px] drop-shadow-[0_30px_40px_rgba(0,162,255,0.25)]">
                  <svg className="w-full h-full" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                     {/* Blue liquid fill layer */}
                     <path d="M15 90 L145 90 C145 90, 150 180, 110 200 C80 215, 50 200, 15 180 Z" fill="url(#fluidBlueSolid)" />
                     
                     {/* Glassy Bag Outline and fill */}
                     <path d="M30 10 C30 -5, 130 -5, 130 10 L155 170 C160 205, 120 215, 80 215 C40 215, 0 205, 5 170 Z" 
                          fill="rgba(255,255,255,0.25)" 
                          stroke="rgba(255,255,255,0.8)" 
                          strokeWidth="2.5" />
                     
                     {/* Inner glossy reflection line for depth */}
                     <path d="M15 80 C15 30, 20 20, 50 15 C55 15, 50 40, 30 80 Z" fill="rgba(255,255,255,0.5)" />
                     <path d="M145 80 C145 30, 140 20, 110 15 C105 15, 110 40, 130 80 Z" fill="rgba(255,255,255,0.3)" />

                     {/* The Dark Label matching screenshot exactly */}
                     <rect x="35" y="38" width="90" height="58" rx="5" fill="#1A202C" />
                     <text x="80" y="60" fill="#38BDF8" fontSize="13" fontFamily="'Syne', Arial" fontWeight="bold" textAnchor="middle" letterSpacing="1">REVIVE</text>
                     <text x="80" y="70" fill="#94A3B8" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.8">IV HYDRATION</text>
                     <text x="80" y="80" fill="#4A5568" fontSize="5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">LET&apos;S REVIVE YOU</text>
                  </svg>
                  <svg style={{width:0, height:0, position:'absolute'}}>
                    <defs>
                      <linearGradient id="fluidBlueSolid" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(56,189,248,0.75)" />
                        <stop offset="50%" stopColor="rgba(14,165,233,0.85)" />
                        <stop offset="100%" stopColor="rgba(2,132,199,1)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Tubing attachment (small gray cone at base) */}
                <div className="absolute top-[318px] left-[70px] w-[5px] h-[15px] bg-[#94A3B8] rounded-[2px]" />
                <div className="absolute top-[318px] right-[70px] w-[5px] h-[15px] bg-[#94A3B8] rounded-[2px]" />

                {/* Drip Chamber matching screenshot */}
                <div className="absolute top-[335px] left-1/2 -translate-x-1/2 w-[24px] h-[45px] border border-white/80 bg-[#E6F3FF]/50 rounded-t-[3px] rounded-b-[12px] overflow-hidden drop-shadow-md flex justify-center backdrop-blur-[2px]">
                  {/* Metal cap on drip chamber */}
                  <div className="w-full absolute top-0 h-[6px] bg-[#94A3B8]" />
                  <div className="animate-[dropFall_1.2s_ease-in_infinite] absolute bg-[#0EA5E9] w-[6px] h-[8px] rounded-full" />
                  <div className="w-full absolute bottom-[-5px] h-[15px] bg-[#38BDF8]/60 blur-[3px]" />
                </div>

                {/* Tubing down */}
                <div className="absolute top-[380px] bottom-[0px] w-[5px] bg-[#E6F3FF]/70 border-l border-r border-white/50 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-sm">
                   <div className="w-full absolute top-0 bg-gradient-to-b from-[#38BDF8]/80 to-[#0284C7]/80" style={{ animation: 'fluidFlow 1.2s linear infinite' }} />
                </div>
                
                {/* Roll clamp / Roller matching screenshot slightly lower */}
                <div className="absolute top-[480px] left-1/2 -translate-x-1/2 w-[20px] h-[10px] bg-[#CBD5E1] rounded-[3px] shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-full bg-[#94A3B8] rounded-[1px]" />
                </div>
             </div>
          </div>

        </div>

        <div className="absolute bottom-6 left-10 flex flex-col items-center justify-center gap-3 md:flex scroll-pulse">
           <div className="w-[1px] h-12 bg-gradient-to-t from-[#00A2FF]/60 to-transparent" />
           <span className="text-[9px] tracking-[0.25em] text-[#64748B] font-bold">SCROLL</span>
        </div>
      </section>

      {/* Booking Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm md:p-4">
          <div className="bg-white md:rounded-3xl overflow-hidden shadow-2xl w-full h-full md:h-auto md:max-w-5xl md:max-h-[95vh] flex flex-col relative">
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="p-6 pb-5 border-b border-gray-100 shrink-0">
              <h3 className="text-2xl font-black text-[#020d1f] uppercase tracking-wide">Book Your Session</h3>
            </div>
            <div className="w-full h-full overflow-y-auto overflow-x-hidden p-2 sm:p-6 bg-[#f8f9fa]">
               <iframe width="100%" height="650" src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=01389c02584758d12e92e9396b7eb77f180cec49f3ab362ab2267a8fddc4c6206ee57013c1a537e6aa69605fce4db66ad95fcbc3b76e32a2" style={{ border: 'none', background: 'transparent' }} frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
