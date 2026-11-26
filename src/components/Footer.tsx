import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenDemo: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 72,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-slate-200/80 pt-12 pb-8 text-ink">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 cursor-pointer group mb-4 focus:outline-none"
            >
              <Logo size={26} className="transition-transform duration-300 group-hover:scale-105" />
              <img
                src="/brand/endomatics-wordmark.svg"
                alt="ENDOMATICS"
                className="h-[18px] w-auto block"
              />
            </button>
            <p className="font-sans text-sm text-muted-grey leading-relaxed max-w-sm font-medium mb-5">
              Autonomous intelligence at every care point. An adaptive clinical operating system designed for high-throughput hospitals and clinics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-tonal border border-steel-teal/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-clinical-mint" />
              </span>
              <span className="font-mono text-[10px] font-semibold text-steel-teal tracking-wide">
                All Clinical Clusters Operational
              </span>
            </div>
          </div>

          {/* Center Column: Sitemap */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] mb-4">
              Platform
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <button
                type="button"
                onClick={() => goToSection('features')}
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                AI Intelligence Core
              </button>
              <button
                type="button"
                onClick={() => goToSection('module-screens')}
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                Workflow Modules
              </button>
              <Link
                to="/hms-india"
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                ENDOMATICS India (ABDM &amp; NABH)
              </Link>
              <Link
                to="/abdm-integration"
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                ABDM &amp; ABHA Integration
              </Link>
              <Link
                to="/compare"
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                Compare HMS India
              </Link>
              <Link
                to="/clinic-management-software-india"
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                Clinic Software India
              </Link>
              <Link
                to="/insights"
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                Clinical Insights
              </Link>
              <button
                type="button"
                onClick={() => goToSection('process')}
                className="text-left text-slate-600 hover:text-steel-teal transition-colors cursor-pointer font-medium"
              >
                14-Day Onboarding
              </button>
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-left text-steel-teal font-semibold hover:underline cursor-pointer"
              >
                Book Custom Demo →
              </button>
            </div>
          </div>

          {/* Right Column: Global Presence */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] mb-4">
              Global Presence
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-steel-teal shrink-0 mt-0.5" />
                <span className="font-medium">Every ward. Every moment. Everywhere.</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-steel-teal shrink-0" />
                <a
                  href="mailto:connect@endomatics.com"
                  className="hover:text-steel-teal transition-colors font-medium break-all"
                >
                  connect@endomatics.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-steel-teal shrink-0" />
                <span className="font-medium">+91 8555036954</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-steel-teal shrink-0" />
                <span className="font-medium">HIPAA Cloud Cluster US-West</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-grey">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-steel-teal" />
            <span>© {currentYear} ENDOMATICS Inc. HIPAA &amp; SOC2 Type II Certified.</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy" className="hover:text-steel-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-steel-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
