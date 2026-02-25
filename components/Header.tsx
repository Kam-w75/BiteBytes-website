import React, { useState, useEffect, useRef } from 'react';
import { Button } from './UI/Button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './UI/Logo';
import { Page } from '../App';
import { SCROLL_THRESHOLD, NAV_SCROLL_DELAY } from '../constants';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

// Strongly typed nav items — no more `any`
type NavScrollItem = { label: string; href: string; type: 'scroll' };
type NavPageItem   = { label: string; page: Page;  type: 'nav'    };
type NavItem = NavScrollItem | NavPageItem;

const navItems: NavItem[] = [
  { label: 'Features', href: '#features', type: 'scroll' },
  { label: 'Support',  page: 'support',   type: 'nav'    },
];

const scrollToElement = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pendingScrollRef = useRef<string | null>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on any page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  // After navigating home, execute any pending scroll
  useEffect(() => {
    if (currentPage === 'home' && pendingScrollRef.current) {
      const selector = pendingScrollRef.current;
      pendingScrollRef.current = null;
      // Small delay to let the DOM paint before scrolling
      const timer = setTimeout(() => scrollToElement(selector), NAV_SCROLL_DELAY);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);

    if (item.type === 'nav') {
      onNavigate(item.page);
    } else {
      // Scroll item
      if (currentPage === 'home') {
        scrollToElement(item.href);
      } else {
        // Store the scroll target, navigate home, then scroll once home renders
        pendingScrollRef.current = item.href;
        onNavigate('home');
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== 'home'
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      {/* Preheader */}
      <div className="bg-brand-dark border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-1.5">
          <a
            href="tel:+18439007064"
            className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-xs font-medium tracking-wide group"
          >
            <Phone size={12} className="text-brand-light group-hover:text-white transition-colors" />
            <span>(843) 900-7064</span>
          </a>
        </div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ${
        scrolled || currentPage !== 'home' ? 'py-4' : 'py-6'
      }`}>

        {/* Logo — semantic <a> tag, not a button */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="BiteBytes — go to home"
        >
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-slate-900 tracking-tight">BiteBytes</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`font-medium text-sm transition-colors ${
                item.type === 'nav' && currentPage === item.page
                  ? 'text-brand-primary'
                  : 'text-slate-600 hover:text-brand-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm">Download App</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-left font-medium ${
                    item.type === 'nav' && currentPage === item.page
                      ? 'text-brand-primary'
                      : 'text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button fullWidth>Download App</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
