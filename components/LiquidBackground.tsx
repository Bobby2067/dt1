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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: '#0B1325' }}>
      <div className="liquid-container absolute inset-0 w-full h-full opacity-50">

        {/* Mouse Follower Blob - NexDrive Blue */}
        <div
          className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] transition-transform duration-[2000ms] ease-out mix-blend-screen opacity-50"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#0066CC'
          }}
        />

        {/* Ambient Blobs - Brand Colors */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] animate-blob-1 mix-blend-screen opacity-40"
          style={{ backgroundColor: '#0044AA' }}
        />
        <div
          className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full blur-[100px] animate-blob-2 mix-blend-screen opacity-25"
          style={{ backgroundColor: '#68C132' }}
        />
        <div
          className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[100px] animate-blob-3 mix-blend-screen opacity-40"
          style={{ backgroundColor: '#003388' }}
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};
