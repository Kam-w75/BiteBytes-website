
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Outer dark ring from the provided image */}
        <circle cx="50" cy="50" r="48" fill="#343D52" />
        
        {/* Main Circle Background - The specific Teal color */}
        <circle cx="50" cy="50" r="39" fill="#508D86" />
        
        {/* Fork Silhouette - Rotated roughly 45 degrees as in the image */}
        <g transform="rotate(45 50 50)">
          {/* Handle - extends slightly into the ring area */}
          <rect x="46" y="55" width="8" height="35" rx="4" fill="white" />
          
          {/* Main Fork Body */}
          <path 
            d="M35 25 C35 50 40 55 50 55 C60 55 65 50 65 25" 
            fill="white"
          />
          
          {/* Fork Tines cutout effect */}
          <rect x="41" y="22" width="4" height="22" rx="2" fill="#508D86" />
          <rect x="55" y="22" width="4" height="22" rx="2" fill="#508D86" />
          
          {/* Smoothing the base of tines */}
          <circle cx="43" cy="44" r="2" fill="#508D86" />
          <circle cx="57" cy="44" r="2" fill="#508D86" />
        </g>
      </svg>
    </div>
  );
};