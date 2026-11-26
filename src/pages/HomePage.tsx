import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import CoreModules from '../components/CoreModules';
import ModuleScreens from '../components/ModuleScreens';
import BillingIntelligence from '../components/BillingIntelligence';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import KnowledgeHub from '../components/KnowledgeHub';
import SeoContentSection from '../components/SeoContentSection';
import CTASection from '../components/CTASection';
import { Seo } from '../lib/seo';

interface HomePageProps {
  onOpenDemo: () => void;
  initialSection?: string;
}

export default function HomePage({ onOpenDemo, initialSection }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    const target = initialSection || location.hash.replace('#', '');
    if (target) {
      const t = setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const offset = 80;
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location.hash, location.pathname, initialSection]);

  const isFeaturesPage = initialSection === 'features' || location.pathname === '/features';

  return (
    <>
      <Seo
        title={
          isFeaturesPage
            ? "ENDOMATICS Features — Hospital Management Software Modules & Clinical AI"
            : "ENDOMATICS — AI Hospital Management System & Medical Billing Software (India)"
        }
        description={
          isFeaturesPage
            ? "Explore ENDOMATICS core modules: OPD queue optimization, IPD bed heatmaps, emergency triage, medication safety guards, and 0.00% revenue leakage billing."
            : "Cloud-based hospital management system (HMS) & medical billing software with zero revenue leakage, EHR unification, and 14-day deployment. Book a free demo."
        }
        path={isFeaturesPage ? "/features" : "/"}
      />
      <Hero onOpenDemo={onOpenDemo} />
      <StatsBar />
      <CoreModules />
      <ModuleScreens />
      <BillingIntelligence />
      <HowItWorks />
      <Testimonials />
      <KnowledgeHub />
      <SeoContentSection />
      <CTASection onOpenDemo={onOpenDemo} />
    </>
  );
}
