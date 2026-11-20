import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LotusBrand } from './LotusBrand';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: isHomePage ? '#home' : '/#home', targetId: 'home' },
    { label: 'Services', href: isHomePage ? '#services' : '/#services', targetId: 'services' },
    { label: 'Technologies', href: isHomePage ? '#technologies' : '/#technologies', targetId: 'technologies' },
    { label: 'Why Us', href: isHomePage ? '#why-us' : '/#why-us', targetId: 'why-us' },
    { label: 'Clients', href: isHomePage ? '#clients' : '/#clients', targetId: 'clients' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', targetId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100/60 py-3'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Official Lotus Logo + Brand Name */}
          <Link
            to="/"
            className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            aria-label="Kshirsa Technology Solutions Home"
          >
            <LotusBrand size="sm" />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#006B4F] font-bold' : 'text-slate-600 hover:text-[#00B887]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B887] rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Get in Touch CTA Button */}
          <div className="hidden md:flex items-center">
            <Button href={isHomePage ? '#contact' : '/#contact'} variant="primary" size="md" showArrow>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-emerald-100 shadow-xl px-5 pt-4 pb-6 transition-all duration-300">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-[#006B4F] font-bold border-l-4 border-emerald-500'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#00B887]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <Button
                href={isHomePage ? '#contact' : '/#contact'}
                variant="primary"
                size="md"
                showArrow
                className="w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
