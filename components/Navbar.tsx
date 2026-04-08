'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Drips', href: '#drips' },
    { name: 'Shot Bar', href: '#shotbar' },
    { name: 'How', href: '#how' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-6 lg:px-12 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-white/60 backdrop-blur-md py-3 shadow-sm'
          : 'bg-white/40 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      {/* Logo */}
      <div
        className="flex flex-col cursor-pointer z-[110]"
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
      >
        <div className="relative w-[140px] h-[48px] md:w-[200px] md:h-[68px] lg:w-[240px] lg:h-[80px]">
          <Image
            src="https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775522225/Revive-IV-Logo_pvyhi2.png"
            alt="Revive IV Hydration Logo"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#38bdf8] transition-colors drop-shadow-sm"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2.5 border border-[#0ea5e9] text-[#0ea5e9] bg-black/10 backdrop-blur-[2px] font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#0ea5e9] hover:text-white transition-all drop-shadow-sm rounded-full"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#020d1f]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-[105]"
          >
            {/* Teal glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="font-serif text-4xl italic text-white hover:text-[#38bdf8] transition-colors text-center"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-12 py-4 bg-[#0ea5e9] text-white font-sans text-xs font-bold tracking-[0.22em] uppercase rounded-full hover:bg-[#0369a1] transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.45)]"
              >
                Book Your Session
              </a>
              <a
                href="tel:+18137093698"
                className="font-sans text-sm text-[#38bdf8] tracking-wide"
              >
                +1 813-709-3698
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
