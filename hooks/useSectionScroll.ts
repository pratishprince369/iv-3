'use client';

import { useState, useEffect, RefObject } from 'react';

export function useSectionScroll(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;
      
      // Calculate how much of the section has been scrolled past the top
      // When rect.top is 0, we are at the start.
      // When rect.top is -(sectionHeight - viewHeight), we are at the end of the sticky part.
      
      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewHeight;
      
      if (totalScrollable <= 0) return;
      
      const currentProgress = scrolled / totalScrollable;
      setProgress(Math.min(Math.max(currentProgress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return { progress };
}
