import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollProgressBar } from './motion/ClinicalMotion';

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 88;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const goToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  const navItems = [
    { id: 'features', label: 'AI Core', type: 'scroll' as const },
    { id: 'module-screens', label: 'Modules', type: 'scroll' as const },
    { id: '/insights', label: 'Insights', type: 'link' as const },
    { id: 'process', label: 'Onboarding', type: 'scroll' as const },
    { id: 'testimonials', label: 'Validation', type: 'scroll' as const },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
    >
      {/* Full-width top scroll progress hairline */}
      <div className="w-full">
        <ScrollProgressBar />
      </div>

      <div
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 transition-all duration-300 flex items-center justify-between gap-4 ${
          isScrolled ? 'pt-2.5' : 'pt-4'
        }`}
      >
        {/* Left Architectural Island: Brand Wordmark + Live Cluster Pulse */}
        <button
          id="logo-wrap"
          type="button"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
          className={`pointer-events-auto flex items-center gap-3.5 px-4 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer group focus:outline-none ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-xl border border-slate-200/85 shadow-[0_8px_24px_rgba(15,23,42,0.06)]'
              : 'bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_2px_12px_rgba(15,23,42,0.03)]'
          }`}
        >
          <img
            src="/brand/endomatics-wordmark.svg"
            alt="ENDOMATICS"
            className="h-[16px] sm:h-[18px] w-auto block transition-opacity duration-200 group-hover:opacity-85"
          />
          <span className="hidden lg:block w-px h-4 bg-slate-200" aria-hidden="true" />
          <span className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-mint animate-pulse" />
            Clinical OS
          </span>
        </button>

        {/* Right Architectural Island: Hairline Nav + Obsidian CTA */}
        <div
          className={`pointer-events-auto flex items-center gap-2 sm:gap-4 pl-2 pr-2 py-1.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-xl border border-slate-200/85 shadow-[0_8px_24px_rgba(15,23,42,0.06)]'
              : 'bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_2px_12px_rgba(15,23,42,0.03)]'
          }`}
        >
          {/* Desktop Nav Links with Precision Bottom Indicator */}
          <nav
            id="nav-links"
            aria-label="Primary Navigation"
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 pl-2"
          >
            {navItems.map((item) => {
              const isHovered = hoveredNav === item.id;
              const isActiveLink = item.type === 'link' && location.pathname.startsWith(item.id);
              const showBar = isHovered || isActiveLink;
              const commonClasses =
                'relative px-3.5 py-2 font-sans text-[13px] font-semibold transition-colors duration-200 cursor-pointer select-none';

              return item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.id}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  className={`${commonClasses} ${
                    showBar ? 'text-ink' : 'text-slate-500 hover:text-ink'
                  }`}
                >
                  {item.label}
                  {showBar && (
                    <motion.span
                      layoutId="nav-active-line"
                      transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                      className="absolute left-3.5 right-3.5 bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-steel-teal to-clinical-mint"
                    />
                  )}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  className={`${commonClasses} ${
                    showBar ? 'text-ink' : 'text-slate-500 hover:text-ink'
                  }`}
                >
                  {item.label}
                  {showBar && (
                    <motion.span
                      layoutId="nav-active-line"
                      transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                      className="absolute left-3.5 right-3.5 bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-steel-teal to-clinical-mint"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Right */}
          <div id="nav-actions" className="flex items-center gap-2">
            <div
              className="relative"
              onMouseEnter={() => setIsPreviewOpen(true)}
              onMouseLeave={() => setIsPreviewOpen(false)}
            >
              <motion.button
                type="button"
                onClick={onOpenDemo}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#0B1628] hover:bg-steel-teal text-white font-sans text-xs sm:text-[13px] font-semibold py-2 px-4 rounded-xl transition-colors duration-200 cursor-pointer group"
              >
                <span>Book Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-clinical-mint group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.button>

              <AnimatePresence>
                {isPreviewOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden md:block absolute top-full right-0 mt-3 w-[296px] m3-surface-elevated rounded-2xl overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <p className="font-display text-[13px] font-bold text-ink mb-3">
                        What to expect in your sandbox
                      </p>

                      <div className="space-y-2.5">
                        {[
                          'Tailored to your hospital',
                          'Live sandbox with your data',
                          'Zero downtime migration',
                          'Dedicated integration architect',
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <div className="h-4 w-4 rounded-full bg-clinical-mint/15 flex items-center justify-center shrink-0">
                              <Check className="h-2.5 w-2.5 text-clinical-mint" strokeWidth={3} />
                            </div>
                            <span className="text-[12px] text-slate-600 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 bg-surface-tonal/60 px-4 py-2.5 flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-steel-teal shrink-0" />
                      <span className="font-mono text-[9px] text-slate-600 font-medium">
                        HIPAA Compliant · SOC2 Type II Certified
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-bg-light border border-slate-200/70 text-ink hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto fixed inset-0 top-20 bg-ink/25 backdrop-blur-xs z-20 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto md:hidden absolute top-full left-4 right-4 mt-2 m3-surface-elevated rounded-2xl p-3 z-30 flex flex-col gap-1"
            >
              {navItems.map((item) =>
                item.type === 'link' ? (
                  <Link
                    key={item.id}
                    to={item.id}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl font-sans text-sm font-semibold text-ink hover:bg-surface-tonal hover:text-steel-teal transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className="text-left px-4 py-3 rounded-xl font-sans text-sm font-semibold text-ink hover:bg-surface-tonal hover:text-steel-teal transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
