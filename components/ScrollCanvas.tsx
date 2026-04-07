'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Props {
  progress: number;
  onProgress?: (progress: number) => void;
}

export default function ScrollCanvas({ progress, onProgress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images from Firestore with local fallback
  useEffect(() => {
    const totalFrames = 79;
    let isFallingBack = false;

    const loadLocalFrames = () => {
      console.log('Loading local frames directly to avoid Firebase quota limit...');
      
      let localLoadedCount = 0;
      const localLoadedImages: HTMLImageElement[] = [];
      
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = (i / 10).toFixed(1);
        img.src = `/frames/frame_${frameNum}.webp`;
        
        const handleLoad = () => {
          localLoadedCount++;
          const currentProgress = Math.round((localLoadedCount / totalFrames) * 100);
          onProgress?.(currentProgress);

          if (localLoadedCount === totalFrames) {
            setImagesLoaded(true);
          }
        };

        img.onload = handleLoad;

        img.onerror = () => {
          console.warn(`Frame failed to load: /frames/frame_${frameNum}.webp`);
          handleLoad();
        };

        localLoadedImages.push(img);
      }
      setImages(localLoadedImages);
    };

    // Load local frames immediately
    loadLocalFrames();
  }, [onProgress]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalFrames = images.length;
    const frameIndex = Math.min(
      Math.floor(progress * (totalFrames - 1)),
      totalFrames - 1
    );
    const img = images[frameIndex];

    // Fallback to first image if current one isn't ready
    const drawImg = (img && (img.complete || img.naturalWidth > 0)) ? img : images[0];

    if (drawImg && (drawImg.complete || drawImg.naturalWidth > 0)) {
      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const vw = drawImg.naturalWidth;
      const vh = drawImg.naturalHeight;

      if (vw === 0 || vh === 0) return;

      const scale = Math.max(cw / vw, ch / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(drawImg, dx, dy, dw, dh);
    }
  }, [progress, images]);

  // Handle resize and initial setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      render();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Force a render after a short delay to ensure everything is ready
    const timer = setTimeout(resizeCanvas, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(timer);
    };
  }, [render]);

  // Trigger render when images are loaded or progress changes
  useEffect(() => {
    requestAnimationFrame(render);
  }, [imagesLoaded, render]);

  return (
    <canvas
      id="scroll-canvas"
      ref={canvasRef}
      aria-label="Scroll animation"
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
      }}
    />
  );
}
