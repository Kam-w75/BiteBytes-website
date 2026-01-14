import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Outer dark ring for contrast and definition */}
        <circle cx="50" cy="50" r="48" fill="#0F172A" />
        
        {/* Main Circle Background - Brand Red-Orange */}
        <circle cx="50" cy="50" r="42" fill="#F25F4C" />
        
        {/* Fork Icon Group - Rotated 45 degrees */}
        <g transform="rotate(45 50 50)">
          {/* Handle */}
          <path d="M50 58 L50 85" stroke="white" strokeWidth="7" strokeLinecap="round" />
          
          {/* Fork Head */}
          <path 
            d="M38 30 C38 52 42 56 50 56 C58 56 62 52 62 30" 
            fill="none" 
            stroke="white" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Middle Tine */}
          <line x1="50" y1="30" x2="50" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
