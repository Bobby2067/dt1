import React from 'react';

interface NexDriveLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const NexDriveLogo: React.FC<NexDriveLogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const config = {
    sm: { h: 'text-xl', tag: 'text-[8px]', gap: 'gap-0.5', arrow: 'w-2.5 h-2.5' },
    md: { h: 'text-3xl', tag: 'text-[10px]', gap: 'gap-1', arrow: 'w-3.5 h-3.5' },
    lg: { h: 'text-5xl', tag: 'text-xs', gap: 'gap-1', arrow: 'w-5 h-5' },
  };
  const c = config[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className={`flex items-center ${c.gap}`}>
        <span className={`font-display font-black italic ${c.h} text-white leading-none`}>NEX</span>
        <svg viewBox="0 0 20 20" className={`${c.arrow} -ml-0.5 -mt-1`}>
          <path d="M4 16 L16 4 L16 10 L20 10 L20 16 L14 16 L14 20 Z" fill="#68C132" transform="scale(0.85) translate(2,1)" />
        </svg>
        <span className={`font-display font-black italic ${c.h} leading-none`} style={{ color: '#0066CC' }}>DRIVE</span>
      </div>
      {showTagline && (
        <span className={`${c.tag} tracking-[0.3em] text-white/40 font-medium uppercase mt-1`}>Academy</span>
      )}
    </div>
  );
};
