'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  progress: number;
  onComplete: () => void;
}

export default function LoadingScreen({ progress, onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020d1f] flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-[200px] h-[70px] md:w-[280px] md:h-[100px]">
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
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#0ea5e9] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-[10px] font-sans uppercase tracking-[0.2em] opacity-50">
        Preparing Wellness {progress}%
      </div>
    </div>
  );
}
