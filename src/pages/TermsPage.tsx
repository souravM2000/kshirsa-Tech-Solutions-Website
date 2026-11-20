import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, ShieldCheck, Printer, Mail, MapPin, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { LotusBrand } from '../components/LotusBrand';
import { Footer } from '../components/Footer';
import termsRaw from '../assets/TermsAndCondition.txt?raw';

interface Section {
  number: number;
  title: string;
  content: string[];
  rawText: string;
}

export const TermsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionNum, setActiveSectionNum] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Terms & Conditions | Kshirsa Technology Solutions';
  }, []);

  // Parse raw text into structured sections
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
        if (currentSection) {
          sectionList.push(currentSection);
        }
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

    if (currentSection) {
      sectionList.push(currentSection);
    }

    return { headerInfo: headerLines, sections: sectionList };
  }, []);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.rawText.toLowerCase().includes(q)
    );
  }, [sections, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FDFB] text-[#092D3A] flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-2xs py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <div className="hidden sm:block h-5 w-px bg-slate-200" />
            <Link to="/" className="flex items-center">
              <LotusBrand size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
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
              className="px-3 py-1.5 rounded-full bg-[#00B887] text-white hover:bg-[#009B71] transition-colors text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Terms</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header for Terms */}
      <section className="bg-gradient-to-b from-[#E5F8F2]/60 via-[#F4FCF9]/50 to-[#F8FDFB] pt-12 pb-10 border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#006B4F] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#00B887]" />
              <span>Legal &amp; Regulatory Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092D3A] tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-base text-[#006B4F] font-semibold">
              Kshirsa Technology Solutions &bull; Principal Place of Business: Kolkata, West Bengal, India
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Last Updated: November 2026 &bull; Effective Date: November 2026 &bull; In accordance with the Information Technology Act, 2000 and DPDP Act, 2023.
            </p>

            {/* Quick Contact Box */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs bg-white/90 p-3.5 rounded-2xl border border-emerald-100 shadow-2xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Formal Notices: <a href="mailto:contact.kshirsatech@gmail.com" className="font-semibold text-emerald-700 underline">contact.kshirsatech@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sticky Table of Contents & Search (Desktop) */}
          <aside className="lg:col-span-4 sticky top-20 space-y-4">
            {/* Search Input */}
            <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-card">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 27 clauses (e.g. fees, warranty)..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white"
                />
              </div>
              {searchQuery && (
                <div className="mt-2 text-[11px] text-slate-500 flex justify-between items-center">
                  <span>Found {filteredSections.length} matching clauses</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Table of Contents List */}
            <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-card max-h-[70vh] overflow-y-auto">
              <h3 className="text-xs font-bold text-[#092D3A] uppercase tracking-wider mb-3">
                Clauses ({sections.length})
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <a
                    key={sec.number}
                    href={`#clause-${sec.number}`}
                    onClick={() => setActiveSectionNum(sec.number)}
                    className={`block px-2.5 py-1.5 rounded-lg text-xs transition-colors truncate ${
                      activeSectionNum === sec.number
                        ? 'bg-emerald-50 text-[#006B4F] font-bold border-l-2 border-[#00B887]'
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-semibold text-slate-400 mr-1.5">{sec.number}.</span>
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Full Sections Rendered */}
          <div className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-700">No matching terms found</h4>
                <p className="text-xs text-slate-500 mt-1">Try another search keyword such as "fees", "intellectual property", "refund", or "arbitration".</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold hover:bg-emerald-100"
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
                    className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-card transition-all scroll-mt-24 ${
                      isGrievanceSection
                        ? 'border-emerald-300 bg-gradient-to-br from-white to-[#F4FCF9]'
                        : 'border-slate-100 hover:border-emerald-200'
                    }`}
                  >
                    {/* Clause Header */}
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 text-[#006B4F] font-extrabold text-sm flex items-center justify-center shrink-0">
                        {sec.number}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-[#092D3A]">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Clause Paragraphs */}
                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {sec.content.map((paragraph, pIdx) => {
                        // Check if paragraph is a subclause or list item
                        const isSubclause = /^\d+\.\d+/.test(paragraph);
                        const isFieldDefinition = /^[A-Za-z\s]+:/.test(paragraph);

                        if (isGrievanceSection) {
                          if (paragraph.startsWith('Grievance Officer:')) {
                            return (
                              <div key={pIdx} className="my-3 p-4 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs text-[#004D3B] space-y-1">
                                <p className="font-bold text-sm text-[#006B4F]">Designated Statutory Grievance Officer</p>
                                <p><strong>Officer:</strong> Sourav Mazumder</p>
                                <p><strong>Entity:</strong> Kshirsa Technology Solutions</p>
                                <p><strong>Principal Address:</strong> Kolkata, West Bengal, India</p>
                                <p><strong>Email:</strong> <a href="mailto:contact.kshirsatech@gmail.com" className="font-bold text-emerald-700 underline">contact.kshirsatech@gmail.com</a></p>
                                <p className="text-[11px] text-slate-500 pt-1">Formal grievances will be acknowledged within 72 hours and resolved within 30 calendar days.</p>
                              </div>
                            );
                          }

                          // Skip the individual lines that are already consolidated into the box above
                          if (
                            paragraph.startsWith('Entity Name:') ||
                            paragraph.startsWith('Principal Address:') ||
                            paragraph.startsWith('Email:') ||
                            paragraph.startsWith('We will acknowledge receipt')
                          ) {
                            return null;
                          }
                        }

                        if (paragraph.startsWith('By accessing https://')) {
                          return (
                            <p key={pIdx} className="mt-4 p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-200/60 font-semibold text-xs text-[#004D3B]">
                              {paragraph}
                            </p>
                          );
                        }

                        if (isSubclause) {
                          const parts = paragraph.split(/^(\d+\.\d+\s+)/);
                          return (
                            <p key={pIdx} className="text-slate-700">
                              <strong className="text-[#092D3A] font-semibold">{parts[1]}</strong>
                              {parts[2]}
                            </p>
                          );
                        }

                        if (isFieldDefinition) {
                          const [defName, ...rest] = paragraph.split(':');
                          return (
                            <p key={pIdx} className="bg-slate-50/70 p-3 rounded-lg border border-slate-100">
                              <strong className="text-[#006B4F] font-bold">{defName}:</strong>
                              {rest.join(':')}
                            </p>
                          );
                        }

                        return (
                          <p key={pIdx}>
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </article>
                );
              })
            )}

            {/* Bottom Navigation & CTA */}
            <div className="p-6 bg-[#E5F8F2] rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#092D3A]">Have questions regarding our terms?</h4>
                <p className="text-xs text-slate-600 mt-0.5">Reach out to our legal and architecture consulting desk directly.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact.kshirsatech@gmail.com"
                  className="px-4 py-2 rounded-full bg-[#00B887] text-white text-xs font-bold hover:bg-[#009B71] transition-all shadow-xs"
                >
                  Email Us Directly
                </a>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full bg-white text-[#092D3A] text-xs font-bold border border-slate-200 hover:bg-slate-50"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
