import React from 'react';

interface LimpiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export const LimpiLogo: React.FC<LimpiLogoProps> = ({
  size = 'md',
  showWordmark = true,
  orientation = 'vertical',
  className = '',
}) => {
  // Dimension definitions
  const dimensions = {
    sm: { icon: 32, text: 'text-lg', circle: 'w-8 h-8' },
    md: { icon: 48, text: 'text-2xl', circle: 'w-12 h-12' },
    lg: { icon: 72, text: 'text-3xl', circle: 'w-20 h-20' },
    xl: { icon: 96, text: 'text-4xl', circle: 'w-24 h-24' },
  }[size];

  return (
    <div
      className={`inline-flex items-center ${
        orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-3'
      } ${className}`}
    >
      {/* Circle with leaf, broom, and sparkle */}
      <div
        className={`relative ${dimensions.circle} rounded-full bg-white border-2 border-[#0BA89A] flex items-center justify-center shadow-[0_4px_16px_rgba(11,168,154,0.18)] select-none shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[82%] h-[82%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle soft background circle */}
          <circle cx="50" cy="50" r="44" fill="#E6F6F4" opacity="0.6" />

          {/* Sparkles (top right & left) */}
          <path
            d="M72 24L74 30L80 32L74 34L72 40L70 34L64 32L70 30L72 24Z"
            fill="#0BA89A"
          />
          <path
            d="M32 18L33.5 22L37.5 23.5L33.5 25L32 29L30.5 25L26.5 23.5L30.5 22L32 18Z"
            fill="#0BA89A"
            opacity="0.85"
          />
          <path
            d="M78 52L79 55L82 56L79 57L78 60L77 57L74 56L77 55L78 52Z"
            fill="#0BA89A"
            opacity="0.7"
          />

          {/* Broom stick & bristles */}
          <g transform="rotate(-18 50 50)">
            {/* Broom Handle */}
            <path
              d="M48 22H52V52H48V22Z"
              fill="#04264A"
              rx="1.5"
            />
            {/* Broom Cap / Band */}
            <path
              d="M44 51C44 49.5 45.5 48.5 47 48.5H53C54.5 48.5 56 49.5 56 51L58 56H42L44 51Z"
              fill="#0BA89A"
            />
            {/* Broom Bristles */}
            <path
              d="M42 56H58L62 76C62 77.5 60.5 78.5 59 78.5H41C39.5 78.5 38 77.5 38 76L42 56Z"
              fill="#04264A"
              opacity="0.9"
            />
            {/* Bristle slits */}
            <line x1="46" y1="58" x2="44" y2="76" stroke="#E6F6F4" strokeWidth="1.2" />
            <line x1="50" y1="58" x2="50" y2="76" stroke="#E6F6F4" strokeWidth="1.2" />
            <line x1="54" y1="58" x2="56" y2="76" stroke="#E6F6F4" strokeWidth="1.2" />
          </g>

          {/* Fresh Eco Leaf curving on left/front */}
          <path
            d="M32 64C28 50 38 34 54 30C54 44 44 60 32 64Z"
            fill="#0BA89A"
          />
          <path
            d="M34 62C41 53 47 42 52 32"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className={`font-extrabold tracking-tight text-[#04264A] ${dimensions.text}`}
          style={{ letterSpacing: '-0.03em' }}
        >
          Limpi
        </span>
      )}
    </div>
  );
};
