import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <defs>
        {/* Premium gradient for the Top, Left, and Right wings using the existing blue */}
        <linearGradient id="blueWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3882C4" />
          <stop offset="100%" stopColor="#26619C" />
        </linearGradient>

        {/* Premium gradient for the bottom wing */}
        <linearGradient id="mintWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8D6CF" />
          <stop offset="100%" stopColor="#90C1B8" />
        </linearGradient>
      </defs>

      {/* Bottom segment of the vertical capsule (Mint Teal) */}
      <rect x="32" y="32" width="36" height="66" rx="14" fill="url(#mintWingGrad)" />

      {/* Top segment of the vertical capsule (Top Wing - Brand Blue) */}
      <rect x="32" y="2" width="36" height="66" rx="14" fill="url(#blueWingGrad)" />

      {/* Horizontal capsule (Left and Right Wings - Brand Blue) */}
      <rect x="2" y="32" width="96" height="36" rx="14" fill="url(#blueWingGrad)" opacity="0.95" />

      {/* Intersecting central core */}
      <rect x="32" y="32" width="36" height="36" rx="10" fill="url(#blueWingGrad)" />
    </svg>
  );
}
