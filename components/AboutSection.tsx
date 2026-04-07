'use client';

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Queen Dickens',
    title: 'BSN, RN',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Princess Dickens',
    title: 'BSN, RN',
    image: 'https://images.unsplash.com/photo-1594824436951-7f129c513ddc?q=80&w=600&auto=format&fit=crop',
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#020d1f] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-serif text-[28px] md:text-[40px] text-[#e0f2fe] font-medium tracking-[0.05em] uppercase border-b border-[#0ea5e9]/30 pb-6 inline-block">
            Black Woman Owned Business
          </h2>
          <p className="font-sans text-[12px] md:text-[14px] text-[#0ea5e9] tracking-[0.3em] uppercase mt-6">
            Meet Our Team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[900px] mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] w-full overflow-hidden group rounded-[24px] shadow-float bg-[#03122b] border border-[#0ea5e9]/10"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal"
              />
              
              {/* Overlay Graphic */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020d1f] via-[#020d1f]/60 to-transparent" />
              
              <div className="absolute bottom-10 left-0 w-full text-center z-10 px-6">
                <h3 className="font-sans font-black text-[28px] md:text-[36px] text-[#e0f2fe] tracking-tight leading-none mb-2 uppercase">
                  {member.name.split(' ')[0]}<br/>
                  {member.name.split(' ')[1]}
                </h3>
                <p className="font-sans text-[14px] text-[#0ea5e9] font-bold tracking-[0.1em] uppercase">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
