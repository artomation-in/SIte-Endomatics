import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Stethoscope, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Seo } from '../lib/seo';

interface ClinicIndiaPageProps {
  onOpenDemo: () => void;
}

const clinicBenefits = [
  {
    icon: Clock,
    title: 'Express OPD & Token Queues',
    description: 'ABHA Scan-and-Share check-in under 15 seconds with WhatsApp/SMS token alerts and AI queue balancing.',
  },
  {
    icon: Sparkles,
    title: 'Ambient e-Prescription & SOAP Notes',
    description: 'Generate digital prescriptions in seconds with automatic drug-allergy checks and pharmacy stock sync.',
  },
  {
    icon: ShieldCheck,
    title: 'GST Billing & Zero Leakage',
    description: 'Every consultation, lab test, and pharmacy item posts straight to a GST-compliant invoice with 0.00% leakage.',
  },
];

export default function ClinicIndiaPage({ onOpenDemo }: ClinicIndiaPageProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ENDOMATICS Clinic Management Software India',
      applicationCategory: 'HealthApplication, BusinessApplication',
      operatingSystem: 'Web-based Cloud SaaS',
      areaServed: { '@type': 'Country', name: 'India' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        description: 'Cloud clinic & polyclinic management software for Indian doctors, specialty clinics, and nursing homes.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://endomatics.com/' },
        { '@type': 'ListItem', position: 2, name: 'HMS India', item: 'https://endomatics.com/hms-india' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Clinic Management Software India',
          item: 'https://endomatics.com/clinic-management-software-india',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best cloud clinic management software in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ENDOMATICS provides an AI-native cloud clinic management system for Indian specialty clinics, polyclinics, and nursing homes under 30 beds. It combines OPD queue automation, digital e-prescriptions, ABHA Health ID check-ins, pharmacy & lab integration, and GST-compliant billing with 0.00% revenue leakage.',
          },
        },
      ],
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-bg-light">
      <Seo
        title="Best Cloud Clinic Management Software in India (ABHA & GST Ready) | ENDOMATICS"
        description="AI-native clinic & polyclinic management software for Indian doctors and nursing homes. Express OPD queues, e-prescriptions, pharmacy sync, ABHA ID, and GST billing."
        path="/clinic-management-software-india"
        jsonLd={jsonLd}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">
        <section className="m3-surface-elevated rounded-3xl p-6 sm:p-10 bg-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tonal border border-steel-teal/15 font-mono text-[10px] font-bold uppercase tracking-wider text-steel-teal mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              Clinics, Polyclinics &amp; Nursing Homes
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              AI-Native Clinic Management Software for India
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-medium">
              <strong>ENDOMATICS</strong> streamlines single-doctor clinics, multi-specialty polyclinics, and 10–30 bed nursing homes across India. Automate OPD appointments, digital e-prescriptions, in-house pharmacy &amp; lab orders, <strong>ABHA Scan-and-Share</strong>, and <strong>GST billing</strong> from one clean cloud workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-full shadow-md transition-colors cursor-pointer"
              >
                <span>Book Clinic Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 bg-surface-tonal hover:bg-slate-200/70 text-steel-teal font-sans text-sm font-semibold py-3.5 px-6 rounded-full transition-colors"
              >
                <span>Compare Platforms</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicBenefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="m3-surface rounded-3xl p-6 bg-white">
                <div className="w-11 h-11 rounded-2xl bg-surface-tonal border border-steel-teal/15 flex items-center justify-center text-steel-teal mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-display text-lg font-extrabold text-ink mb-2">{b.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </section>

        <section className="m3-surface rounded-3xl p-6 sm:p-8 bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-lg font-extrabold text-ink">
              Ready in days, scales to 500+ beds as you grow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0" />
              DPDP Act 2023 compliant · India cloud hosting · Zero setup fees
            </p>
          </div>
          <Link
            to="/hms-india"
            className="text-xs font-semibold text-steel-teal hover:underline inline-flex items-center gap-1"
          >
            <span>Explore Full Hospital Edition</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
