import React from 'react';

interface NexDriveLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const NexDriveLogo: React.FC<NexDriveLogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const scales = { sm: 0.45, md: 0.65, lg: 1 };
  const s = scales[size];

  // Full logo viewBox: 520 wide, 130 tall (with tagline) or 65 tall (wordmark only)
  const vbHeight = showTagline ? 130 : 58;
  const width = 520 * s;
  const height = vbHeight * s;

  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 520 ${vbHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* White gradient for NEX */}
          <linearGradient id="nexGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C8D0DC" />
          </linearGradient>
          {/* Blue gradient for DRIVE */}
          <linearGradient id="driveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#0088EE" />
          </linearGradient>
          {/* Green gradient for arrow */}
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5AAE28" />
            <stop offset="100%" stopColor="#7BD44A" />
          </linearGradient>
        </defs>

        {/* === NEXDRIVE WORDMARK === */}

        {/* NEX text */}
        <text
          x="0"
          y="48"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="60"
          fill="url(#nexGrad)"
          letterSpacing="-2"
        >
          NEX
        </text>

        {/* Green arrow — angular chevron pointing upper-right, sits on top-right of X */}
        <g transform="translate(172, -2)">
          <polygon
            points="0,28 20,0 26,0 26,12 38,12 38,18 26,18 26,28"
            fill="url(#arrowGrad)"
          />
        </g>

        {/* DRIVE text */}
        <text
          x="202"
          y="48"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="60"
          fill="url(#driveGrad)"
          letterSpacing="-2"
        >
          DRIVE
        </text>

        {/* Road swoosh lines — curved lines under NEX suggesting a highway */}
        <g opacity="0.35">
          <path
            d="M 5 58 Q 60 54, 120 62 Q 160 66, 190 60"
            stroke="url(#nexGrad)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 20 64 Q 70 60, 130 68 Q 165 71, 185 66"
            stroke="url(#nexGrad)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 40 70 Q 85 67, 140 73 Q 168 75, 180 72"
            stroke="url(#nexGrad)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {showTagline && (
          <g>
            {/* "Academy" text */}
            <text
              x="145"
              y="92"
              fontFamily="Roboto, sans-serif"
              fontWeight="400"
              fontSize="18"
              fill="#8090A8"
              letterSpacing="8"
            >
              Academy
            </text>

            {/* Horizontal line extending right from Academy */}
            <line
              x1="310"
              y1="88"
              x2="518"
              y2="88"
              stroke="#8090A8"
              strokeWidth="0.8"
              opacity="0.5"
            />

            {/* Tagline */}
            <text
              x="145"
              y="118"
              fontFamily="Roboto, sans-serif"
              fontWeight="300"
              fontStyle="italic"
              fontSize="13"
              fill="#6B7A8D"
              letterSpacing="1"
            >
              Real Skills. Real Confidence. Real Drivers.
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
