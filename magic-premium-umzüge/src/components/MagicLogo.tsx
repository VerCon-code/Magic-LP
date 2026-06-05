import React from 'react';

interface MagicLogoProps {
  className?: string;
  size?: number;
}

export default function MagicLogo({ className = '', size = 48 }: MagicLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`} style={{ height: size, width: size * 1.5 }}>
      <svg
        viewBox="0 0 180 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Globe on the Right */}
        <g opacity="0.85">
          {/* Globe outline */}
          <circle 
            cx="120" 
            cy="52" 
            r="44" 
            stroke="#e5e2e1" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
            className="opacity-40"
          />
          {/* Detailed continent path silhouettes */}
          <path 
            d="M 120 12 A 40 40 0 0 1 155 40 Q 148 44 142 40 Q 135 35 125 45 Q 120 52 124 58 Q 128 64 125 72 T 115 88 A 40 40 0 0 1 80 52 C 80 30 100 12 120 12 Z" 
            fill="#e5e2e1" 
            className="opacity-15"
          />
          <path 
            d="M 98 42 Q 105 48 102 55 T 92 68 Q 88 56 94 48 Z" 
            fill="#e5e2e1" 
            className="opacity-25"
          />
        </g>

        {/* Dynamic bright red Orbit Swoosh */}
        <path
          d="M 45 88 C 75 118 148 112 128 72 C 112 40 75 22 45 35 C 75 22 115 35 118 64 C 122 92 75 102 45 88 Z"
          fill="#c8291f"
          className="drop-shadow-[0_0_8px_rgba(200,41,31,0.5)]"
        />

        {/* Modern Truck Body facing forward-left */}
        <g transform="translate(15, 28)">
          {/* Shadow underneath */}
          <ellipse cx="44" cy="54" rx="42" ry="4" fill="black" opacity="0.4" />
          
          {/* Cabin Windshield and Front Face (Perspective) */}
          <path 
            d="M 10 44 L 18 44 L 23 41 L 23 35 L 14 35 L 9 39 Z" 
            fill="#1c1b1b" 
            stroke="#e5e2e1" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Main Cabin Shell */}
          <path 
            d="M 8 48 L 8 38 L 13 32 L 28 32 L 28 48 Z" 
            fill="#2a2a2a" 
            stroke="#e5e2e1" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Windshield Glass */}
          <path 
            d="M 11 37 L 20 37 L 24 34 L 14 34 Z" 
            fill="#e5e2e1" 
            opacity="0.9"
          />

          {/* Side window */}
          <path 
            d="M 23 38 L 27 38 L 27 42 L 23 42 Z" 
            fill="#131313" 
          />

          {/* Chrome Grill & Lights */}
          <rect x="8" y="44" width="6" height="3" fill="#e5e2e1" rx="0.5" />
          <circle cx="10" cy="45.5" r="1" fill="#ffe3de" />
          <circle cx="26" cy="45.5" r="1.5" fill="#ffe3de" />

          {/* Cargo Container/Box */}
          <path 
            d="M 28 24 L 74 24 L 74 48 L 28 48 Z" 
            fill="#131313" 
            stroke="#e5e2e1" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Dynamic speed-lines on Cargo box */}
          <line x1="33" y1="28" x2="69" y2="28" stroke="#e5e2e1" strokeWidth="1" opacity="0.3" />
          <line x1="33" y1="32" x2="69" y2="32" stroke="#e5e2e1" strokeWidth="1.5" opacity="0.4" />
          <line x1="33" y1="36" x2="69" y2="36" stroke="#c8291f" strokeWidth="1.5" opacity="0.6" />
          <line x1="33" y1="40" x2="69" y2="40" stroke="#e5e2e1" strokeWidth="1.5" opacity="0.4" />
          <line x1="33" y1="44" x2="69" y2="44" stroke="#e5e2e1" strokeWidth="1" opacity="0.3" />

          {/* Underbody kit */}
          <rect x="30" y="48" width="40" height="4" fill="#2a2a2a" />

          {/* Front Wheel */}
          <circle cx="19" cy="50" r="6" fill="#131313" stroke="#e5e2e1" strokeWidth="1.5" />
          <circle cx="19" cy="50" r="2" fill="#c8291f" />

          {/* Rear Wheels Dual Axle */}
          <circle cx="58" cy="50" r="6" fill="#131313" stroke="#e5e2e1" strokeWidth="1.5" />
          <circle cx="58" cy="50" r="2" fill="#e5e2e1" />
          
          <circle cx="68" cy="50" r="6" fill="#131313" stroke="#e5e2e1" strokeWidth="1.5" />
          <circle cx="68" cy="50" r="2" fill="#e5e2e1" />
        </g>
      </svg>
    </div>
  );
}
