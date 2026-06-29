import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-40 bg-bg-light/90 border-b border-steel-teal/20 shadow-[0_1px_4px_rgba(0,0,0,0.01)] backdrop-blur-md py-1.5"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Left */}
        <div
          id="logo-wrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Logo size={56} className="transition-transform group-hover:scale-105" />
          <span className="font-sans font-black text-[42px] tracking-tighter text-steel-teal">
            Endomatics
          </span>
        </div>

        {/* Links Center */}
        <div id="nav-links" className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection('module-screens')}
            className="font-mono text-base font-black text-muted-grey hover:text-ink hover:bg-ink/[0.04] px-4 py-2 rounded-lg tracking-wider transition-all cursor-pointer"
          >
            Modules
          </button>
          <button
            onClick={() => scrollToSection('knowledge')}
            className="font-mono text-base font-black text-muted-grey hover:text-ink hover:bg-ink/[0.04] px-4 py-2 rounded-lg tracking-wider transition-all cursor-pointer"
          >
            Insights
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="font-mono text-base font-black text-muted-grey hover:text-ink hover:bg-ink/[0.04] px-4 py-2 rounded-lg tracking-wider transition-all cursor-pointer"
          >
            Onboarding
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="font-mono text-base font-black text-muted-grey hover:text-ink hover:bg-ink/[0.04] px-4 py-2 rounded-lg tracking-wider transition-all cursor-pointer"
          >
            Case Studies
          </button>
        </div>

        {/* Book Demo Right */}
        <div id="nav-actions">
          <button
            onClick={onOpenDemo}
            className="bg-steel-teal hover:bg-steel-teal/95 text-white font-sans text-xs font-semibold py-2.5 px-5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
