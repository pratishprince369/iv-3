'use client';

import { useState, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollCanvas from '@/components/ScrollCanvas';
import TextOverlay from '@/components/TextOverlay';

import FeaturesStrip from '@/components/new-layout/FeaturesStrip';
import BenefitsStrip from '@/components/new-layout/BenefitsStrip';
import HowItWorks from '@/components/new-layout/HowItWorks';
import FeelTheDifference from '@/components/new-layout/FeelTheDifference';
import RealPeople from '@/components/new-layout/RealPeople';
import CertifiedProfessionals from '@/components/new-layout/CertifiedProfessionals';
import BookYourIVDrip from '@/components/new-layout/BookYourIVDrip';
import FrequentlyAsked from '@/components/new-layout/FrequentlyAsked';
import LightFooter from '@/components/new-layout/LightFooter';

import ScrollReveal from '@/components/ScrollReveal';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function HomePage() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { progress } = useSectionScroll(sectionRef);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleProgress = useCallback((progress: number) => {
    setLoadProgress(progress);
  }, []);

  return (
    <>
      <LoadingScreen progress={loadProgress} onComplete={handleLoadComplete} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.7s ease',
          minHeight: '100vh',
          pointerEvents: loaded ? 'auto' : 'none',
          backgroundColor: '#020d1f',
        }}
      >
        <Navbar />

        {/* ── Canvas scroll section — 500vh — UNTOUCHED ───────────────── */}
        <div ref={sectionRef} className="relative h-[500vh] z-0">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e]/25 to-black pointer-events-none z-[-1]" aria-hidden="true" />
            <ScrollCanvas progress={progress} onProgress={handleProgress} />
            <TextOverlay progress={progress} />
          </div>
        </div>

        {/* ── Below-fold sections — Light Theme ──────────── */}
        <div className="relative z-10 bg-[#f4f7fb]">

          <ScrollReveal direction="up" distance={50}>
            <FeaturesStrip />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <BenefitsStrip />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <HowItWorks />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <FeelTheDifference />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <RealPeople />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <CertifiedProfessionals />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <BookYourIVDrip />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <FrequentlyAsked />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40}>
            <LightFooter />
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
