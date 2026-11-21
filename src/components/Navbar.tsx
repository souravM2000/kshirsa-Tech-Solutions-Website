import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LotusBrand } from './LotusBrand';
import { Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: isHomePage ? '#home' : '/#home', targetId: 'home' },
    { label: 'Services', href: isHomePage ? '#services' : '/#services', targetId: 'services' },
    { label: 'Technologies', href: isHomePage ? '#technologies' : '/#technologies', targetId: 'technologies' },
    { label: 'Process', href: isHomePage ? '#process' : '/#process', targetId: 'process' },
    { label: 'Why Us', href: isHomePage ? '#why-us' : '/#why-us', targetId: 'why-us' },
    { label: 'Industries', href: isHomePage ? '#clients' : '/#clients', targetId: 'clients' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage || !href.startsWith('#')) return;
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) return;
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const lenis = (window as any).__lenis as Lenis | null;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.96 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -8, scaleY: 0.98, transition: { duration: 0.15 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-xs py-2.5'
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-0.5"
            aria-label="Kshirsa Technology Solutions Home"
          >
            <LotusBrand size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#006B4F] font-bold' : 'text-slate-600 hover:text-[#00B887]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B887] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-xs lg:text-sm font-bold shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden origin-top bg-white/98 backdrop-blur-xl border-b border-emerald-100 shadow-xl px-5 pt-3 pb-6"
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = isHomePage && activeSection === link.targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-[#00B887]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#00B887]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href={isHomePage ? '#contact' : '/#contact'}
                  onClick={handleContactClick}
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white font-bold text-sm shadow-button-glow hover:shadow-glow-emerald transition-all"
                >
                  Book a Free Consultation
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
