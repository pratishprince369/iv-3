'use client';

import { useState, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollCanvas from '@/components/ScrollCanvas';
import TextOverlay from '@/components/TextOverlay';

// Redesigned components
import FeaturesSection from '@/components/FeaturesSection'; // Why Choose
import DripsSection from '@/components/DripsSection';       // Featured Drips
import GroupTherapySection from '@/components/GroupTherapySection';
import FaqAndReviewSection from '@/components/FaqAndReviewSection';
import ShotBarSection from '@/components/ShotBarSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

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

        {/* ── Below-fold sections — Light / Dark Blue Ocean theme ──────────── */}
        <div className="relative z-10 bg-[#020d1f]">

          <ScrollReveal direction="up" distance={50}>
            <DripsSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <FeaturesSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <GroupTherapySection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <FaqAndReviewSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <ShotBarSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <ProcessSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={60}>
            <AboutSection />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40}>
            <Footer />
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
