import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Footer } from './components/Footer';

// Lazy-load non-critical pages to keep the initial bundle small
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(m => ({ default: m.TermsOfService })));
const CustomerService = lazy(() => import('./components/CustomerService').then(m => ({ default: m.CustomerService })));

export type Page = 'home' | 'privacy' | 'terms' | 'support';

// ─── Error Boundary ────────────────────────────────────────────────────────────
interface ErrorBoundaryState { hasError: boolean; }

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-3">Something went wrong</h1>
            <p className="text-slate-600 mb-6">An unexpected error occurred. Please refresh the page.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Loading Fallback ──────────────────────────────────────────────────────────
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// ─── Page titles ───────────────────────────────────────────────────────────────
const pageTitles: Record<Page, string> = {
  home:    'BiteBytes – Recipe Costing & Kitchen Management',
  privacy: 'Privacy Policy | BiteBytes',
  terms:   'Terms of Service | BiteBytes',
  support: 'Support | BiteBytes',
};

// ─── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        );
      case 'terms':
        return (
          <Suspense fallback={<PageLoader />}>
            <TermsOfService />
          </Suspense>
        );
      case 'support':
        return (
          <Suspense fallback={<PageLoader />}>
            <CustomerService />
          </Suspense>
        );
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
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-primary selection:text-white">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main>
          {renderContent()}
        </main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
