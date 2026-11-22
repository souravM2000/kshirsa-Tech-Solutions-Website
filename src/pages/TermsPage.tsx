import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, ShieldCheck, Printer, Mail, MapPin, FileText, ChevronDown, CheckCircle2 } from 'lucide-react';
import { LotusBrand } from '../components/LotusBrand';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import termsRaw from '../assets/TermsAndCondition.txt?raw';

interface Section {
  number: number;
  title: string;
  content: string[];
  rawText: string;
}

// Dark toggle for TermsPage header
const TermsThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 overflow-hidden"
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
            <Sun className="w-4 h-4 text-amber-400" />
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
            <Moon className="w-4 h-4 text-slate-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const TermsPageContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionNum, setActiveSectionNum] = useState<number>(1);
  const [copied, setCopied] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Terms & Conditions | Kshirsa Technology Solutions';
  }, []);

  const { headerInfo, sections } = useMemo(() => {
    const lines = termsRaw.split(/\r?\n/);
    const headerLines: string[] = [];
    const sectionList: Section[] = [];

    let currentSection: Section | null = null;
    let foundFirstSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const match = line.match(/^(\d+)\.\s+(.+)$/);

      if (match && !line.match(/^\d+\.\d+/)) {
        foundFirstSection = true;
        if (currentSection) sectionList.push(currentSection);
        currentSection = {
          number: parseInt(match[1], 10),
          title: match[2].trim(),
          content: [],
          rawText: line,
        };
      } else if (!foundFirstSection) {
        if (line) headerLines.push(line);
      } else if (currentSection) {
        if (line) {
          currentSection.content.push(line);
          currentSection.rawText += '\n' + line;
        }
      }
    }

    if (currentSection) sectionList.push(currentSection);
    return { headerInfo: headerLines, sections: sectionList };
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (sec) => sec.title.toLowerCase().includes(q) || sec.rawText.toLowerCase().includes(q)
    );
  }, [sections, searchQuery]);

  const handlePrint = () => window.print();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FDFB] dark:bg-[#070F0D] text-[#092D3A] dark:text-[#E0F2EE] flex flex-col selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0A1A15]/95 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/40 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors text-xs font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <div className="hidden sm:block h-5 w-px bg-slate-200 dark:bg-slate-700" />
            <Link to="/" className="hidden sm:flex items-center">
              <LotusBrand size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <TermsThemeToggle />
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share Page</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-full bg-[#00B887] text-white hover:bg-[#009B71] transition-colors text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header for Terms */}
      <section className="bg-gradient-to-b from-[#E5F8F2]/60 via-[#F4FCF9]/50 to-[#F8FDFB] dark:from-[#071511]/80 dark:via-[#070F0D]/50 dark:to-[#070F0D] pt-10 pb-9 border-b border-emerald-100/60 dark:border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-[#006B4F] dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#00B887]" />
              <span>Legal &amp; Regulatory Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] dark:text-white tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-base text-[#006B4F] dark:text-emerald-400 font-semibold">
              Kshirsa Technology Solutions • Kolkata, West Bengal, India
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Last Updated: November 2026 • Effective Date: November 2026 • In accordance with the Information Technology Act, 2000 and DPDP Act, 2023.
            </p>

            {/* Quick Contact Box */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs bg-white/90 dark:bg-[#0D1F1A] p-3.5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Formal Notices: <a href="mailto:contact.kshirsatech@gmail.com" className="font-semibold text-emerald-700 dark:text-emerald-400 underline">contact.kshirsatech@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Sticky TOC & Search */}
          <aside className="lg:col-span-4 lg:sticky lg:top-20 space-y-4">
            {/* Search Input */}
            <div className="bg-white dark:bg-[#0D1F1A] rounded-2xl p-3.5 sm:p-4 border border-emerald-100 dark:border-emerald-900/40 shadow-card dark:shadow-none">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clauses (e.g. fees, warranty)..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-emerald-900/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500/30 bg-slate-50 dark:bg-[#0D2520]/60 dark:text-white focus:bg-white dark:focus:bg-[#0D2520] transition-all"
                />
              </div>
              {searchQuery && (
                <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex justify-between items-center">
                  <span>Found {filteredSections.length} matching clauses</span>
                  <button onClick={() => setSearchQuery('')} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Table of Contents */}
            <div className="bg-white dark:bg-[#0D1F1A] rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-card dark:shadow-none overflow-hidden">
              <button
                type="button"
                onClick={() => setIsMobileTocOpen((prev) => !prev)}
                className="w-full p-4 flex items-center justify-between text-left select-none lg:cursor-default"
                aria-expanded={isMobileTocOpen}
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#00B887]" />
                  <h3 className="text-xs font-bold text-[#092D3A] dark:text-white uppercase tracking-wider">
                    Clauses ({filteredSections.length})
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 lg:hidden text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-500/20">
                  <span>{isMobileTocOpen ? 'Hide' : 'Jump to Clause'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMobileTocOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <div className={`px-4 pb-4 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[65vh] overflow-y-auto ${isMobileTocOpen ? 'block' : 'hidden lg:block'}`}>
                <nav className="space-y-1 pt-2 border-t border-slate-100 dark:border-emerald-900/30 lg:border-t-0">
                  {filteredSections.map((sec) => (
                    <a
                      key={sec.number}
                      href={`#clause-${sec.number}`}
                      onClick={() => { setActiveSectionNum(sec.number); setIsMobileTocOpen(false); }}
                      className={`block px-2.5 py-1.5 rounded-lg text-xs transition-colors truncate ${
                        activeSectionNum === sec.number
                          ? 'bg-emerald-50 dark:bg-emerald-900/30 text-[#006B4F] dark:text-emerald-400 font-bold border-l-2 border-[#00B887]'
                          : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="font-semibold text-slate-400 dark:text-slate-500 mr-1.5">{sec.number}.</span>
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Right: Sections */}
          <div className="lg:col-span-8 space-y-5">
            {filteredSections.length === 0 ? (
              <div className="bg-white dark:bg-[#0D1F1A] rounded-3xl p-8 text-center border border-slate-200 dark:border-emerald-900/40">
                <FileText className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">No matching terms found</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try another search keyword.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => {
                const isGrievanceSection = sec.number === 27;
                return (
                  <article
                    key={sec.number}
                    id={`clause-${sec.number}`}
                    className={`bg-white dark:bg-[#0D1F1A] rounded-2xl p-5 sm:p-7 border shadow-card dark:shadow-none transition-all scroll-mt-24 ${
                      isGrievanceSection
                        ? 'border-emerald-300 dark:border-emerald-500/30 bg-gradient-to-br from-white to-[#F4FCF9] dark:from-[#0D1F1A] dark:to-[#0D2520]'
                        : 'border-slate-100 dark:border-emerald-900/40 hover:border-emerald-200 dark:hover:border-emerald-500/30'
                    }`}
                  >
                    {/* Clause Header */}
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-emerald-900/30 pb-3 mb-4">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-[#006B4F] dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                        {sec.number}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-[#092D3A] dark:text-white">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Clause Paragraphs */}
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {sec.content.map((paragraph, pIdx) => {
                        const isSubclause = /^\d+\.\d+/.test(paragraph);
                        const isFieldDefinition = /^[A-Za-z\s]+:/.test(paragraph);

                        if (isGrievanceSection) {
                          if (paragraph.startsWith('Grievance Officer:')) {
                            return (
                              <div key={pIdx} className="my-3 p-4 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-500/20 text-xs text-[#004D3B] dark:text-emerald-300 space-y-1">
                                <p className="font-bold text-sm text-[#006B4F] dark:text-emerald-300">Designated Statutory Grievance Officer</p>
                                <p><strong>Officer:</strong> Sourav Mazumder</p>
                                <p><strong>Entity:</strong> Kshirsa Technology Solutions</p>
                                <p><strong>Principal Address:</strong> Kolkata, West Bengal, India</p>
                                <p><strong>Email:</strong> <a href="mailto:contact.kshirsatech@gmail.com" className="font-bold text-emerald-700 dark:text-emerald-400 underline">contact.kshirsatech@gmail.com</a></p>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">Formal grievances will be acknowledged within 72 hours and resolved within 30 calendar days.</p>
                              </div>
                            );
                          }
                          if (
                            paragraph.startsWith('Entity Name:') ||
                            paragraph.startsWith('Principal Address:') ||
                            paragraph.startsWith('Email:') ||
                            paragraph.startsWith('We will acknowledge receipt')
                          ) return null;
                        }

                        if (paragraph.startsWith('By accessing https://')) {
                          return (
                            <p key={pIdx} className="mt-4 p-3.5 bg-emerald-50/50 dark:bg-emerald-900/15 rounded-xl border border-emerald-200/60 dark:border-emerald-500/15 font-semibold text-xs text-[#004D3B] dark:text-emerald-300">
                              {paragraph}
                            </p>
                          );
                        }

                        if (isSubclause) {
                          const parts = paragraph.split(/^(\d+\.\d+\s+)/);
                          return (
                            <p key={pIdx} className="text-slate-700 dark:text-slate-300">
                              <strong className="text-[#092D3A] dark:text-white font-semibold">{parts[1]}</strong>
                              {parts[2]}
                            </p>
                          );
                        }

                        if (isFieldDefinition) {
                          const [defName, ...rest] = paragraph.split(':');
                          return (
                            <p key={pIdx} className="bg-slate-50/70 dark:bg-slate-800/30 p-3 rounded-lg border border-slate-100 dark:border-slate-700/30">
                              <strong className="text-[#006B4F] dark:text-emerald-400 font-bold">{defName}:</strong>
                              {rest.join(':')}
                            </p>
                          );
                        }

                        return <p key={pIdx}>{paragraph}</p>;
                      })}
                    </div>
                  </article>
                );
              })
            )}

            {/* Bottom Navigation & CTA */}
            <div className="p-5 sm:p-6 bg-[#E5F8F2] dark:bg-emerald-900/15 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#092D3A] dark:text-white">Have questions regarding our terms?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Reach out to our legal and architecture consulting desk directly.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="mailto:contact.kshirsatech@gmail.com"
                  className="px-4 py-2 rounded-full bg-[#00B887] text-white text-xs font-bold hover:bg-[#009B71] transition-all shadow-sm"
                >
                  Email Us Directly
                </a>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full bg-white dark:bg-[#0D1F1A] text-[#092D3A] dark:text-white text-xs font-bold border border-slate-200 dark:border-emerald-900/40 hover:bg-slate-50 dark:hover:bg-[#0D2520]"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <ThemeProvider>
      <TermsPageContent />
    </ThemeProvider>
  );
};
