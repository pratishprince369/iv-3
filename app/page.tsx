'use client';

import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import AlternativeHero from '@/components/new-layout/AlternativeHero';

import FeaturesStrip from '@/components/new-layout/FeaturesStrip';
import BenefitsStrip from '@/components/new-layout/BenefitsStrip';
import HowItWorks from '@/components/new-layout/HowItWorks';
import FeelTheDifference from '@/components/new-layout/FeelTheDifference';
import RealPeople from '@/components/new-layout/RealPeople';
import BookYourIVDrip from '@/components/new-layout/BookYourIVDrip';
import FrequentlyAsked from '@/components/new-layout/FrequentlyAsked';
import LightFooter from '@/components/new-layout/LightFooter';
import ScrollReveal from '@/components/ScrollReveal';


export default function HomePage() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setLoadProgress(progress);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
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

        {/* ── New Hero Section ───────────────── */}
        <AlternativeHero />


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
