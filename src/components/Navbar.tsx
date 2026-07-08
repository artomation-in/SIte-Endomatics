import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { X, Menu, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
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

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-40 bg-bg-light/90 border-b border-steel-teal/20 shadow-[0_1px_4px_rgba(0,0,0,0.01)] backdrop-blur-md py-1.5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Left */}
        <div
          id="logo-wrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
            <Logo size={56} className="w-full h-full" />
          </div>
          <span className="font-sans font-black text-2xl sm:text-[42px] tracking-tighter text-steel-teal">
            ENDOMATICS
          </span>
        </div>

        {/* Links Center */}
        <div
          id="nav-links"
          className={`fixed top-[72px] left-0 right-0 bg-transparent border-0 shadow-none backdrop-blur-none p-4 md:p-0 md:static md:flex md:items-center md:gap-1 transition-all duration-300 ease-in-out z-30 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-1 gap-2">
            <button
              onClick={() => scrollToSection('module-screens')}
              className="bg-none border-0 outline-none text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal transition-all cursor-pointer"
            >
              Modules
            </button>
            <button
              onClick={() => scrollToSection('knowledge')}
              className="bg-none border-0 outline-none text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal transition-all cursor-pointer"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="bg-none border-0 outline-none text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal transition-all cursor-pointer"
            >
              Onboarding
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="bg-none border-0 outline-none text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal transition-all cursor-pointer"
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Book Demo + Mobile Menu Right */}
        <div id="nav-actions" className="flex items-center gap-2">
          <div
            className="relative"
            onMouseEnter={() => setIsPreviewOpen(true)}
            onMouseLeave={() => setIsPreviewOpen(false)}
          >
            <button
              onClick={onOpenDemo}
              className="bg-steel-teal hover:bg-steel-teal/95 text-white font-sans text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Demo
            </button>

            <AnimatePresence>
              {isPreviewOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full right-0 mt-3 w-[290px] bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-50"
                >
                  <div className="p-4">
                    <p className="text-[13px] font-bold text-ink mb-3">
                      What to expect
                    </p>

                    <div className="space-y-2.5">
                      {['Tailored to your hospital', 'Live sandbox with your data', 'Zero downtime migration', 'Dedicated integration architect'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="h-4 w-4 rounded-full bg-steel-teal/10 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-steel-teal" strokeWidth={3} />
                          </div>
                          <span className="text-[12px] text-ink/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 bg-bg-light px-4 py-2.5 flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-steel-teal shrink-0" />
                    <span className="font-mono text-[9px] text-muted-grey">HIPAA Compliant · SOC2 Type II Certified</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-ink" />
            ) : (
              <Menu className="h-6 w-6 text-muted-grey" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
