import React, { useEffect, useState } from 'react';

export const LiquidBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-liquid-dark pointer-events-none">
      {/* 
         The 'liquid-container' class applies the SVG 'goo' filter 
         defined in index.html, causing these blurred divs to merge organically.
      */}
      <div className="liquid-container absolute inset-0 w-full h-full opacity-60">
        
        {/* Mouse Follower Blob */}
        <div 
          className="absolute w-[40vw] h-[40vw] bg-liquid-blue rounded-full blur-[80px] transition-transform duration-[2000ms] ease-out mix-blend-screen opacity-60"
          style={{ 
            left: `${mousePos.x}%`, 
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)' 
          }}
        />

        {/* Ambient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-liquid-purple rounded-full blur-[100px] animate-blob-1 mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-liquid-cyan rounded-full blur-[100px] animate-blob-2 mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-800 rounded-full blur-[100px] animate-blob-3 mix-blend-screen opacity-50" />
      </div>

      {/* Grid Overlay for structure */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
        }} 
      />
    </div>
  );
};