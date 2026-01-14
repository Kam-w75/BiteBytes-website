
import React, { useState, useEffect } from 'react';
import { Button } from './UI/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './UI/Logo';
import { Page } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features', type: 'scroll' },
    { label: 'Support', page: 'support' as Page, type: 'nav' },
  ];

  const handleNavClick = (item: any) => {
    setMobileMenuOpen(false);
    if (item.type === 'nav') {
      onNavigate(item.page);
    } else if (currentPage !== 'home') {
      onNavigate('home');
      // Delay to allow DOM to render before jumping to hash
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== 'home' ? 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-slate-900 tracking-tight">BiteBytes</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`font-medium text-sm transition-colors ${
                (item.type === 'nav' && currentPage === item.page) 
                ? 'text-brand-primary' 
                : 'text-slate-600 hover:text-brand-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm">Download App</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
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
                    (item.type === 'nav' && currentPage === item.page) 
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
