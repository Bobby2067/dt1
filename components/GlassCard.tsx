import React, { useRef, useState, MouseEvent } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', tilt = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tilt) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (max 8 degrees)
    const boxWidth = rect.width;
    const boxHeight = rect.height;
    
    const rotateY = ((x - boxWidth / 2) / boxWidth) * 8;
    const rotateX = ((y - boxHeight / 2) / boxHeight) * -8;
    
    setRotate({ x: rotateX, y: rotateY });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card relative rounded-3xl transition-all duration-200 ease-out preserve-3d group ${className}`}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : 'none',
      }}
    >
      {/* Liquid Sheen Overlay */}
      <div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
      
      {/* Border Glow */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
          opacity: opacity
        }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};