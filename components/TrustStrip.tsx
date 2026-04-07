'use client';

export default function TrustStrip() {
  return (
    <div className="relative overflow-hidden border-y border-[#0ea5e9]/20" style={{ background: 'linear-gradient(90deg, #020d1f 0%, #03122b 50%, #020d1f 100%)' }}>
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/60 to-transparent" />

      <div className="h-[42px] md:h-[48px] flex items-center overflow-hidden border-b border-[#0ea5e9]/10">
        <div className="flex items-center gap-10 md:gap-[60px] whitespace-nowrap font-sans text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase animate-marqLeft text-white/60">
          {['IV Hydration Therapy', 'Physician Formulated', 'Mobile Service', 'Same-Day Appointments', 'Certified BSN Nurses', 'Hospital-Grade Ingredients',
            'IV Hydration Therapy', 'Physician Formulated', 'Mobile Service', 'Same-Day Appointments', 'Certified BSN Nurses', 'Hospital-Grade Ingredients'].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <em className="text-[#38bdf8] not-italic text-[8px]">◆</em>
            </span>
          ))}
        </div>
      </div>

      <div className="h-[42px] md:h-[48px] flex items-center overflow-hidden">
        <div className="flex items-center gap-10 md:gap-[60px] whitespace-nowrap font-sans text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase animate-marqRight text-[#38bdf8]/70">
          {['Myers Cocktail', 'Hangover Rescue', 'Beauty Drip', 'Immunity Shield', 'Energy Boost', 'B12 Shot Bar',
            'Myers Cocktail', 'Hangover Rescue', 'Beauty Drip', 'Immunity Shield', 'Energy Boost', 'B12 Shot Bar'].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <em className="text-white/20 not-italic text-[8px]">✦</em>
            </span>
          ))}
        </div>
      </div>

      {/* Glow line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/40 to-transparent" />
    </div>
  );
}
