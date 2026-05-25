import React from "react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ className = "h-8", showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 450 140"
        className="w-full h-full"
        aria-label="Next Assessoria Esportiva"
      >
        <defs>
          {/* Metallic silver gradients to mirror the 3D chrome/metallic visual of the logo */}
          <linearGradient id="silver-metal-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#dedede" />
            <stop offset="50%" stopColor="#b5b5b5" />
            <stop offset="75%" stopColor="#e5e5e5" />
            <stop offset="100%" stopColor="#a3a3a3" />
          </linearGradient>

          <linearGradient id="silver-metal-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cccccc" />
            <stop offset="70%" stopColor="#999999" />
            <stop offset="100%" stopColor="#d6d6d6" />
          </linearGradient>

          <linearGradient id="purple-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          {/* Glowing shadow effect */}
          <filter id="neon-purple-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feComposite in2="SourceAlpha" operator="over" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(10, 10)">
          {/* LETA N */}
          <path
            d="M 20 100 L 20 20 L 48 20 L 78 72 L 78 20 L 102 20 L 102 100 L 74 100 L 44 48 L 44 100 Z"
            fill="url(#silver-metal-1)"
          />

          {/* LETRA E */}
          <path
            d="M 120 20 L 195 20 L 195 40 L 146 40 L 146 54 L 188 54 L 188 74 L 146 74 L 146 80 L 197 80 L 197 100 L 120 100 Z"
            fill="url(#silver-metal-2)"
          />

          {/* "X" & Chevron Interlocking Blend (Central Graphic Action) */}
          {/* Back branch of X */}
          <path
            d="M 210 20 L 235 20 L 268 56 L 295 20 L 320 20 L 278 70 L 305 100 L 280 100 Z"
            fill="url(#silver-metal-1)"
          />
          
          {/* Main glowing forward dynamic chevron (Chevron > overlapping the X to symbolize speed and next level) */}
          <path
            d="M 270 12 L 315 60 L 270 108 L 292 108 L 337 60 L 292 12 Z"
            fill="url(#purple-glow-grad)"
            filter="url(#neon-purple-glow)"
          />
          <path
            d="M 292 12 L 337 60 L 292 108 L 304 108 L 349 60 L 304 12 Z"
            fill="#ffffff"
            opacity="0.8"
          />

          {/* LETRA T */}
          <path
            d="M 326 20 L 405 20 L 405 40 L 378 40 L 378 100 L 352 100 L 352 40 L 326 40 Z"
            fill="url(#silver-metal-2)"
          />
        </g>
        
        {showSubtitle && (
          <text
            x="215"
            y="128"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="8"
            textAnchor="middle"
            className="tracking-[0.4em] uppercase text-opacity-90"
          >
            ASSESSORIA ESPORTIVA
          </text>
        )}
      </svg>
    </div>
  );
}
