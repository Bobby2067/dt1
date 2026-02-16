import React, { useEffect, useState } from 'react';

export const FluidBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-brand-dark">
      {/* Deep, dark base layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050518] to-[#020205]" />
      
      {/* 
         VIBRANT BLOBS 
         Increased opacity to ensure they are visible on all screens.
      */}

      {/* Primary Blue Blob - Top Left */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      
      {/* Accent Cyan Blob - Center Right */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500 rounded-full blur-[90px] animate-blob-reverse animation-delay-2000 mix-blend-screen opacity-40" 
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
      
      {/* Purple Depth Blob - Bottom Left */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[55vw] h-[55vw] bg-purple-700 rounded-full blur-[110px] animate-blob-slow animation-delay-4000 mix-blend-screen opacity-40" 
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      {/* Center Glow */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen opacity-20"
      />

      {/* Vignette Overlay to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,5,0.8)_100%)] pointer-events-none" />
    </div>
  );
};