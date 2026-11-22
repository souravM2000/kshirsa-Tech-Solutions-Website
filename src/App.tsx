import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { Stats } from './components/Stats';
import { HowWeWork } from './components/HowWeWork';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Clients } from './components/Clients';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Code-split /terms route with React.lazy + Suspense for optimal bundle size
const TermsPage = lazy(() =>
  import('./pages/TermsPage').then((module) => ({ default: module.TermsPage }))
);

// Lenis smooth scroll initialiser
const useLenis = (enabled: boolean) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersReduced ? 0 : 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReduced,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).__lenis = null;
    };
  }, [enabled]);

  return lenisRef;
};

// Scroll-to-anchor on route or hash navigation
const ScrollToAnchor: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const lenis = (window as any).__lenis as Lenis | null;
          if (lenis) {
            lenis.scrollTo(element, { offset: -70 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 70);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Home Landing Page Component
const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  useLenis(true);

  useEffect(() => {
    const sectionIds = ['home', 'services', 'technologies', 'process', 'why-us', 'clients', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FDFB] dark:bg-[#070F0D] text-[#092D3A] dark:text-[#E0F2EE] transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Technologies />
        <Services />
        <Stats />
        <HowWeWork />
        <WhyChooseUs />
        <Clients />
        <CtaBanner />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

// Loading fallback for code-split routes
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8FDFB] dark:bg-[#070F0D] transition-colors duration-300">
    <div className="relative flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
      <div className="absolute w-6 h-6 rounded-full border-2 border-teal-400/40 border-t-teal-400 animate-spin animate-reverse" />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<PageLoader />}>
                <TermsPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
