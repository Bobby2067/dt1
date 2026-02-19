import React from 'react';

interface NexDriveLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const NexDriveLogo: React.FC<NexDriveLogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const scales = { sm: 0.45, md: 0.65, lg: 1 };
  const s = scales[size];

  const vbWidth = 460;
  const vbHeight = showTagline ? 120 : 55;
  const width = vbWidth * s;
  const height = vbHeight * s;

  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nexGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C8D0DC" />
          </linearGradient>
          <linearGradient id="driveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#0088EE" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5AAE28" />
            <stop offset="100%" stopColor="#7BD44A" />
          </linearGradient>
        </defs>

        {/* Single combined wordmark: NEXDRIVE as one tight unit */}
        {/* NEX */}
        <text
          x="0"
          y="44"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="56"
          fill="url(#nexGrad)"
          letterSpacing="-3"
        >
          NEX
        </text>

        {/* Green arrow — small, tight against upper-right of X stroke */}
        <polygon
          points="148,4 162,-8 162,-2 172,-2 172,4 162,4 162,10"
          fill="url(#arrowGrad)"
          transform="translate(2, 10)"
        />

        {/* DRIVE — tight against NEX, no gap */}
        <text
          x="158"
          y="44"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="56"
          fill="url(#driveGrad)"
          letterSpacing="-3"
        >
          DRIVE
        </text>

        {/* Road swoosh — subtle curves under the left portion */}
        <g opacity="0.3">
          <path d="M 8 52 Q 50 49, 100 54 Q 140 57, 165 53" stroke="#B0BCC8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 20 57 Q 55 54, 105 59 Q 140 61, 160 58" stroke="#B0BCC8" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M 35 61 Q 65 59, 110 63 Q 138 64, 155 62" stroke="#B0BCC8" strokeWidth="0.9" fill="none" strokeLinecap="round" />
        </g>

        {showTagline && (
          <g>
            {/* "Academy" */}
            <text
              x="120"
              y="82"
              fontFamily="Roboto, sans-serif"
              fontWeight="400"
              fontSize="16"
              fill="#8090A8"
              letterSpacing="7"
            >
              Academy
            </text>

            {/* Horizontal rule extending right */}
            <line x1="278" y1="78" x2="458" y2="78" stroke="#8090A8" strokeWidth="0.7" opacity="0.4" />

            {/* Tagline */}
            <text
              x="120"
              y="108"
              fontFamily="Roboto, sans-serif"
              fontWeight="300"
              fontStyle="italic"
              fontSize="12"
              fill="#6B7A8D"
              letterSpacing="0.8"
            >
              Real Skills. Real Confidence. Real Drivers.
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
