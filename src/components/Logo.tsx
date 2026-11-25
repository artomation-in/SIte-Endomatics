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
      viewBox="0 0 64 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="ENDOMATICS Logo"
    >
      <path
        fill="#2F5FA8"
        d="M4 0h56a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H36a1.7 1.7 0 0 0 0 3.4h24a4 4 0 0 1 4 4v2.6a4 4 0 0 1-4 4H36a1.7 1.7 0 0 0 0 3.4h24a4 4 0 0 1 4 4V64a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"
      />
    </svg>
  );
}
