'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const leftY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', treatment: '', date: '', notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 60 minutes.');
  };

  const inputClass = "w-full pt-6 pb-2 px-4 border border-[#0ea5e9]/12 rounded-xl font-sans text-sm text-white bg-[#0a1e3a]/50 outline-none transition-all duration-300 focus:border-[#0ea5e9]/60 focus:shadow-[0_0_20px_rgba(14,165,233,0.1)] peer placeholder-transparent";
  const labelClass = "absolute left-4 top-4 font-sans text-sm text-[#5b90b8] transition-all duration-250 pointer-events-none peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-[#0ea5e9] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:tracking-[0.1em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#0ea5e9]";

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="contact"
      style={{ background: 'linear-gradient(180deg, #020d1f 0%, #03122b 100%)' }}>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/25 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.06)_0%,transparent_65%)]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(56,189,248,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT PANEL */}
        <motion.div
          style={{ y: leftY }}
          className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20 border-r border-[#0ea5e9]/10 will-change-transform"
        >
          {/* Animated background bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${[12, 78, 42, 88, 22, 62, 35, 92][i]}%`,
                  top: `${[18, 30, 58, 72, 78, 12, 42, 50][i]}%`,
                  width: `${[3, 4, 3, 5, 3, 4, 3, 4][i]}px`,
                  height: `${[3, 4, 3, 5, 3, 4, 3, 4][i]}px`,
                  background: 'rgba(14,165,233,0.5)',
                }}
                animate={{ y: [0, -25], scale: [1, 1.8], opacity: [0.3, 0.9] }}
                transition={{ duration: [2.2, 3.0, 1.9, 2.7, 3.5, 2.3, 4.0, 1.7][i], repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#0ea5e9] mb-5 flex items-center gap-3 before:content-[''] before:block before:w-5 before:h-[1px] before:bg-[#0ea5e9]"
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(32px,5vw,56px)] font-semibold text-white leading-[1.15] mb-8 md:mb-10"
            >
              Book Your<br />
              <em className="italic not-style" style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Wellness Drip
              </em>
            </motion.h2>

            <div className="flex flex-col gap-6 md:gap-8 mb-10">
              {[
                {
                  icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>,
                  label: 'Call or Text Us', value: '+1 813-709-3698', href: 'tel:+18137093698'
                },
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
                  label: 'Service Area', value: 'Greater Tampa Bay Area & Surrounding', href: undefined
                },
                {
                  icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></>,
                  label: 'Hours', value: 'Mon–Sat: 8am–9pm  |  Sun: 10am–7pm', href: undefined
                }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-[#0ea5e9] border border-[#0ea5e9]/20 group-hover:border-[#0ea5e9]/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300"
                    style={{ background: 'rgba(14,165,233,0.08)' }}>
                    <svg viewBox="0 0 24 24" width="18" fill="currentColor">{item.icon}</svg>
                  </div>
                  <div>
                    <strong className="block font-sans text-[9px] font-bold tracking-[0.12em] uppercase text-[#0ea5e9]/80 mb-1">{item.label}</strong>
                    {item.href
                      ? <a href={item.href} className="font-sans text-[14px] font-light text-white/75 no-underline hover:text-white transition-colors">{item.value}</a>
                      : <span className="font-sans text-[14px] font-light text-white/75">{item.value}</span>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social / contact icons */}
            <div className="flex gap-3 flex-wrap">
              {['Call', 'SMS', 'WhatsApp', 'Instagram'].map((label, i) => (
                <motion.a
                  key={label}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-11 h-11 rounded-xl border border-[#0ea5e9]/15 flex items-center justify-center text-white/50 no-underline transition-all duration-300 hover:bg-[#0ea5e9] hover:border-[#0ea5e9] hover:text-white"
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" width="16" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL — Form */}
        <motion.div
          style={{ y: rightY }}
          className="flex items-center justify-center p-6 md:p-12 lg:p-16 py-12 will-change-transform"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full max-w-[540px] rounded-3xl border border-[#0ea5e9]/15 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(10,30,58,0.8) 0%, rgba(3,18,43,0.9) 100%)' }}
          >
            {/* Top glowing bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0369a1] via-[#0ea5e9] to-[#38bdf8]" />

            <div className="p-7 md:p-10">
              <div className="mb-7">
                <h3 className="font-serif text-[24px] md:text-[28px] font-semibold text-white mb-1">Request a Session</h3>
                <p className="font-sans text-[12px] text-[#5b90b8]">We respond within 60 minutes — guaranteed</p>
              </div>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { id: 'fname', label: 'Your Name', type: 'text', key: 'name' },
                  { id: 'fphone', label: 'Phone Number', type: 'tel', key: 'phone' },
                ].map((f) => (
                  <div key={f.id} className="relative">
                    <input type={f.type} id={f.id} placeholder=" " required
                      className={inputClass}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    />
                    <label htmlFor={f.id} className={labelClass}>{f.label}</label>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <input type="email" id="femail" placeholder=" "
                  className={inputClass}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="femail" className={labelClass}>Email Address</label>
              </div>

              {/* Treatment + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <select id="ftreatment" required defaultValue=""
                    className={inputClass + ' appearance-none cursor-pointer'}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="" disabled></option>
                    <option>Myers Cocktail — $149</option>
                    <option>Hydration Relief — $99</option>
                    <option>Immunity Shield — $129</option>
                    <option>Hangover Rescue — $179</option>
                    <option>Athletic Performance — $159</option>
                    <option>Beauty Drip — $169</option>
                    <option>Custom / Not Sure Yet</option>
                  </select>
                  <label htmlFor="ftreatment" className="absolute left-4 top-1.5 font-sans text-[9px] tracking-[0.1em] uppercase text-[#0ea5e9] pointer-events-none">Treatment</label>
                </div>
                <div className="relative">
                  <input type="date" id="fdate" required
                    className={inputClass + ' text-[#5b90b8]'}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                  <label htmlFor="fdate" className="absolute left-4 top-1.5 font-sans text-[9px] tracking-[0.1em] uppercase text-[#0ea5e9] pointer-events-none">Preferred Date</label>
                </div>
              </div>

              {/* Notes */}
              <div className="relative mb-7">
                <textarea id="fnotes" rows={3} placeholder=" "
                  className={inputClass + ' resize-none'}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
                <label htmlFor="fnotes" className={labelClass}>Location & Special Requests</label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-sans text-[11px] font-bold tracking-[0.26em] uppercase text-white cursor-pointer transition-all duration-300 hover:shadow-[0_14px_40px_rgba(14,165,233,0.45)]"
                style={{ background: 'linear-gradient(135deg, #0369a1, #0ea5e9, #38bdf8)', border: 'none' }}
              >
                Book My Session
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
