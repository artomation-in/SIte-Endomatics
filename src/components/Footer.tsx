import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenDemo: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer id="main-footer" className="bg-[#F7F8FA] border-t border-steel-teal/20 pt-10 sm:pt-12 pb-6 text-ink">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">

          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start pb-6 sm:pb-0 sm:border-b-0 border-b border-gray-200/60">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group mb-3"
            >
              <Logo size={32} className="sm:hidden transition-transform group-hover:scale-105" />
              <Logo size={40} className="hidden sm:block transition-transform group-hover:scale-105" />
              <span className="font-sans font-black text-2xl sm:text-3xl tracking-tighter text-steel-teal">
                ENDOMATICS
              </span>
            </div>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-muted-grey leading-relaxed max-w-sm font-semibold">
              "Every patient. Every workflow. Every moment — managed." An adaptive operating framework designed for high-throughput healthcare systems.
            </p>
          </div>

          {/* Center Column: Navigation sitemaps */}
          <div className="md:col-span-3 flex flex-col items-start pb-6 sm:pb-0 sm:border-b-0 border-b border-gray-200/60">
            <h4 className="font-mono text-[10px] font-bold text-muted-grey uppercase tracking-[0.08em] mb-3">
              Sitemap
            </h4>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <button
                onClick={() => scrollToSection('module-screens')}
                className="text-left text-muted-grey hover:text-steel-teal transition-all duration-300 cursor-pointer font-semibold"
              >
                Workflow Modules
              </button>
              <button
                onClick={() => scrollToSection('knowledge')}
                className="text-left text-muted-grey hover:text-steel-teal transition-all duration-300 cursor-pointer font-semibold"
              >
                Insights
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left text-muted-grey hover:text-steel-teal transition-all duration-300 cursor-pointer font-semibold"
              >
                Onboarding Pathway
              </button>
              <button
                onClick={onOpenDemo}
                className="text-left text-steel-teal font-bold hover:underline cursor-pointer"
              >
                Book Custom Demo
              </button>
            </div>
          </div>

          {/* Right Column: Contact & Social */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold text-muted-grey uppercase tracking-[0.08em] mb-3">
              Global Presence
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-muted-grey">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-steel-teal shrink-0 mt-0.5" />
                <span className="font-semibold">Every ward. Every moment. Everywhere.</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-steel-teal shrink-0" />
                <a href="mailto:connect@endomatics.com" className="hover:text-steel-teal transition-all duration-300 font-semibold break-all">
                  connect@endomatics.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-steel-teal shrink-0" />
                <span className="font-semibold">mob +91 8555036954</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-steel-teal shrink-0" />
                <span className="font-semibold">HIPAA Cloud Cluster US-West</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar: copyright in muted mono */}
        <div className="border-t border-gray-200/50 pt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center">
          <p className="font-mono text-xs sm:text-sm font-bold text-muted-grey">
            © {currentYear} ENDOMATICS Inc. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm text-muted-grey">
            <a href="#privacy" className="hover:text-steel-teal transition-all duration-300 font-semibold">Privacy Charter</a>
            <a href="#terms" className="hover:text-steel-teal transition-all duration-300 font-semibold">Service Level Agreement (SLA)</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
