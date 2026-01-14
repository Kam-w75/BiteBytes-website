import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CustomerService } from './components/CustomerService';

export type Page = 'home' | 'privacy' | 'terms' | 'support';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'support':
        return <CustomerService />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Showcase />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-primary selection:text-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;