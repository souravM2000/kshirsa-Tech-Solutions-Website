import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LotusBrand } from './LotusBrand';
import { Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -8, scaleY: 0.98, transition: { duration: 0.15 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-xs py-2'
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-0.5 shrink-0"
            aria-label="Kshirsa Technology Solutions Home"
          >
            <LotusBrand size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#006B4F] dark:text-emerald-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#00B887] dark:hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B887] to-teal-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA + Theme Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA — desktop only */}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={handleContactClick}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-gradient-to-r from-[#00B887] to-[#009B71] text-white text-xs lg:text-sm font-bold shadow-button-glow hover:shadow-glow-emerald transition-all duration-200 active:scale-95"
            >
              Book a Consult
            </a>

            {/* Dark/Light Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-[#070F0D] overflow-hidden group"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              whileTap={{ scale: 0.9 }}
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #0D2520 0%, #1A3D2E 100%)'
                  : 'linear-gradient(135deg, #FFF9ED 0%, #FEF3C7 100%)',
                border: isDark
                  ? '1px solid rgba(0,184,135,0.3)'
                  : '1px solid rgba(251,191,36,0.4)',
              }}
            >
              {/* Glow ring on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: isDark
                    ? 'inset 0 0 12px rgba(0,184,135,0.2)'
                    : 'inset 0 0 12px rgba(251,191,36,0.2)',
                }}
              />
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex items-center justify-center"
                  >
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex items-center justify-center"
                  >
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile hamburger */}
            <div className="flex md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
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
            className="md:hidden origin-top bg-white/98 dark:bg-[#0A1A15]/98 backdrop-blur-xl border-b border-emerald-100 dark:border-emerald-900/60 shadow-xl px-4 pt-3 pb-5"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = isHomePage && activeSection === link.targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-bold border-l-4 border-[#00B887]'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#00B887] dark:hover:text-emerald-400'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2 pb-1">
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
