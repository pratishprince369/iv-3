'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#03122b] py-20 px-5 md:px-10 lg:px-20 text-center relative border-t border-[#0ea5e9]/10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Centered Logo */}
        <div className="relative w-[200px] h-[70px] mb-8">
          <Image
            src="https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775522225/Revive-IV-Logo_pvyhi2.png"
            alt="Renewal IV Hydration Logo"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Contact info from Banner */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h3 className="font-sans text-[24px] md:text-[32px] text-[#0ea5e9] font-bold tracking-wider">
            813-709-3698
          </h3>
          <p className="font-sans text-[12px] md:text-[14px] text-[#e0f2fe]/80 tracking-[0.2em] uppercase font-medium">
            Book Your Appointment Today
          </p>
          <div className="mt-4 px-6 py-2 border border-[#0ea5e9]/50 rounded-full inline-block">
            <span className="font-sans text-[10px] md:text-[12px] text-[#bae6fd] tracking-[0.2em] uppercase font-bold">
              Mobile & In-Clinic Available
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {['Our Drips', 'Shot Bar', 'How It Works', 'About', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '')}`} 
              className="font-sans text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#e0f2fe]/60 hover:text-[#0ea5e9] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Info */}
        <p className="font-sans text-[11px] md:text-[13px] text-[#bae6fd]/40 tracking-[0.1em] mb-4">
          DISCLAIMER: THE SERVICES PROVIDED HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION.
        </p>
        <p className="font-sans text-[11px] md:text-[13px] text-[#bae6fd]/40 tracking-[0.1em] mb-10 max-w-4xl mx-auto leading-relaxed">
          These products are not intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for informational purposes only and is not medical advice.
        </p>

        {/* Socials / Details */}
        <div className="font-sans text-[12px] md:text-[14px] text-[#e0f2fe]/80 tracking-[0.15em] mb-6 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-[#0ea5e9]">INSTAGRAM</a>
          <span className="text-[#0ea5e9]/30">|</span>
          <a href="#" className="hover:text-[#0ea5e9]">FACEBOOK</a>
        </div>

        <p className="font-sans text-[10px] md:text-[11px] text-[#bae6fd]/30 tracking-[0.15em] uppercase">
          © 2025 Renewal IV Hydration. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
