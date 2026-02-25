import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Logo } from './UI/Logo';
import { AppStoreBadge } from './UI/AppStoreBadge';
import { Page } from '../App';

// Official X (formerly Twitter) logo SVG
const XIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
              aria-label="BiteBytes — go to home"
            >
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">BiteBytes</span>
            </a>
            <p className="text-slate-400 max-w-xs mb-8">
              Professional recipe costing and kitchen management for the modern culinary world. Built natively for iOS.
            </p>
            
            <AppStoreBadge className="mb-8" />

            <div className="flex gap-4">
              <a href="https://x.com/Bite_Bytes" target="_blank" rel="noopener noreferrer" aria-label="BiteBytes on X" className="text-slate-400 hover:text-brand-primary transition-colors"><XIcon size={20} /></a>
              <a href="https://www.instagram.com/bite_bytes1?igsh=MWt4b2R1emE1dXVlZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="BiteBytes on Instagram" className="text-slate-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="BiteBytes on LinkedIn" className="text-slate-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => onNavigate('support')} className="hover:text-white transition-colors">Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onNavigate('support')} className="hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; 2026 BiteBytes Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};