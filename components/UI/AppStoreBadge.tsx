import React from 'react';

interface AppStoreBadgeProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AppStoreBadge: React.FC<AppStoreBadgeProps> = ({ 
  className = "", 
  width = 160, 
  height = 53 
}) => {
  return (
    <a 
      href="#" 
      className={`inline-block transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary rounded-[13px] overflow-hidden ${className}`}
      aria-label="Download BiteBytes on the App Store"
    >
      <img 
        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
        alt="Download on the App Store"
        style={{ width: `${width}px`, height: 'auto' }}
        className="block"
      />
    </a>
  );
};