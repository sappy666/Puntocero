import React from 'react';

interface LogoProps {
  className?: string;
  subtitle?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  subtitle = 'VOLVER AL ORIGEN',
  showSubtitle = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Compass SVG Icon matching user's logo exact style */}
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 text-[#e8e1dd]"
        fill="currentColor"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4.5" />
        {/* Center Point */}
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        {/* North Arrow */}
        <polygon points="50,5 42,25 58,25" fill="currentColor" />
        {/* South Arrow */}
        <polygon points="50,95 42,75 58,75" fill="currentColor" />
        {/* West Arrow */}
        <polygon points="5,50 25,42 25,58" fill="currentColor" />
        {/* East Arrow */}
        <polygon points="95,50 75,42 75,58" fill="currentColor" />
      </svg>

      {/* Vertical Divider Line */}
      <div className="h-7 sm:h-9 w-[1.5px] bg-[#e8e1dd]/35 shrink-0" />

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none text-left">
        <span className="font-sans font-semibold text-sm sm:text-base tracking-[0.16em] text-[#e8e1dd] uppercase">
          PUNTO CERO
        </span>
        {showSubtitle && (
          <span className="font-sans font-normal text-[8.5px] sm:text-[9.5px] tracking-[0.22em] text-zinc-400 uppercase mt-1">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
