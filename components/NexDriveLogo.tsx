import React from 'react';

interface NexDriveLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const NexDriveLogo: React.FC<NexDriveLogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const sizes = {
    sm: { width: 140, fontSize: 24, tagSize: 7, arrowScale: 0.7 },
    md: { width: 200, fontSize: 34, tagSize: 9, arrowScale: 1 },
    lg: { width: 280, fontSize: 48, tagSize: 12, arrowScale: 1.3 },
    xl: { width: 400, fontSize: 68, tagSize: 16, arrowScale: 1.8 },
  };

  const s = sizes[size];

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <svg width={s.width} height={showTagline ? s.fontSize * 1.8 : s.fontSize * 1.2} viewBox={`0 0 ${s.width} ${showTagline ? s.fontSize * 1.8 : s.fontSize * 1.2}`}>
        {/* NEX text */}
        <text
          x="0"
          y={s.fontSize * 0.85}
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize={s.fontSize}
          fill="#FFFFFF"
          letterSpacing="-1"
        >
          NEX
        </text>
        {/* Green arrow on the X */}
        <path
          d={`M${s.fontSize * 2.05} ${s.fontSize * 0.35} l${8 * s.arrowScale} ${-8 * s.arrowScale} l${0} ${5 * s.arrowScale} l${6 * s.arrowScale} ${0} l${0} ${6 * s.arrowScale} l${-5 * s.arrowScale} ${0} l${0} ${6 * s.arrowScale} z`}
          fill="#68C132"
        />
        {/* DRIVE text */}
        <text
          x={s.fontSize * 2.5}
          y={s.fontSize * 0.85}
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize={s.fontSize}
          fill="#0066CC"
          letterSpacing="-1"
        >
          DRIVE
        </text>
        {/* ACADEMY tagline */}
        {showTagline && (
          <text
            x={s.width * 0.5}
            y={s.fontSize * 1.5}
            fontFamily="Roboto, sans-serif"
            fontWeight="400"
            fontSize={s.tagSize}
            fill="rgba(255,255,255,0.5)"
            textAnchor="middle"
            letterSpacing="4"
          >
            ACADEMY
          </text>
        )}
      </svg>
    </div>
  );
};
