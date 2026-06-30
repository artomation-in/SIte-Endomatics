import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { X, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            Endomatics
          </span>
        </div>

        {/* Links Center */}
        <div
          id="nav-links"
          className={`fixed top-[72px] left-0 right-0 bg-bg-light/90 backdrop-blur-md border-b border-steel-teal/20 shadow-[0_1px_4px_rgba(0,0,0,0.01)] p-4 md:bg-transparent md:border-b-0 md:shadow-none md:p-0 md:static md:flex md:items-center md:gap-1 transition-all duration-300 ease-in-out z-30 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-1 gap-2">
            <button
              onClick={() => scrollToSection('module-screens')}
              className="bg-transparent text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal rounded-lg transition-all cursor-pointer"
            >
              Modules
            </button>
            <button
              onClick={() => scrollToSection('knowledge')}
              className="bg-transparent text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal rounded-lg transition-all cursor-pointer"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="bg-transparent text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal rounded-lg transition-all cursor-pointer"
            >
              Onboarding
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="bg-transparent text-left px-4 py-3 md:py-2 md:px-4 font-sans text-sm md:font-mono md:text-base md:font-black text-steel-teal/70 hover:text-steel-teal rounded-lg transition-all cursor-pointer"
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Book Demo + Mobile Menu Right */}
        <div id="nav-actions" className="flex items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="bg-steel-teal hover:bg-steel-teal/95 text-white font-sans text-xs font-semibold py-2.5 px-5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Demo
          </button>
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
