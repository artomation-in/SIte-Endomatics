import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2, MapPin } from 'lucide-react';
import { Seo } from '../lib/seo';
import IndiaRoiCalculator from '../components/IndiaRoiCalculator';

interface HmsIndiaPageProps {
  onOpenDemo: () => void;
}

const CITY_MAP: Record<string, { name: string; state: string }> = {
  hyderabad: { name: 'Hyderabad', state: 'Telangana' },
  bengaluru: { name: 'Bengaluru', state: 'Karnataka' },
  mumbai: { name: 'Mumbai', state: 'Maharashtra' },
  'delhi-ncr': { name: 'Delhi NCR', state: 'Delhi / Haryana / UP' },
  chennai: { name: 'Chennai', state: 'Tamil Nadu' },
  pune: { name: 'Pune', state: 'Maharashtra' },
  ahmedabad: { name: 'Ahmedabad', state: 'Gujarat' },
  kolkata: { name: 'Kolkata', state: 'West Bengal' },
};

const comparisonRows = [
  { feature: 'Deployment Timeline', endomatics: '14 Days (Zero Downtime)', legacy: '4 to 9 Months' },
  { feature: 'ABDM & ABHA Readiness', endomatics: 'Native M1, M2 & M3 Support', legacy: 'Paid Third-Party Plugin' },
  { feature: 'Revenue Leakage Control', endomatics: '0.00% (Real-Time Ledger)', legacy: '3% – 8% Unbilled Loss' },
  { feature: 'NABH & DPDP Act 2023', endomatics: 'AAC, COP, MOM & India Data Localization', legacy: 'Manual Audit Paperwork' },
  { feature: 'TPA, PM-JAY, CGHS & ECHS Billing', endomatics: 'Automated Split & Pre-Claim Scrubbing', legacy: 'Manual Reconciliation' },
  { feature: 'AI Clinical Workflows', endomatics: 'Queue AI, SOAP Scribe, Safety Guard', legacy: 'None / Basic Templates' },
  { feature: 'Infrastructure & Backups', endomatics: 'Cloud-Native (99.99% Uptime)', legacy: 'On-Premise Local Servers' },
];

export default function HmsIndiaPage({ onOpenDemo }: HmsIndiaPageProps) {
  const { city: citySlug } = useParams<{ city?: string }>();
  const cityInfo = citySlug ? CITY_MAP[citySlug] : undefined;
  const locationLabel = cityInfo ? `${cityInfo.name}, ${cityInfo.state}` : 'India';
  const pagePath = cityInfo && citySlug ? `/hms-india/${citySlug}` : '/hms-india';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: cityInfo ? `ENDOMATICS Cloud HMS ${cityInfo.name}` : 'ENDOMATICS Cloud HMS India',
      applicationCategory: 'HealthApplication, BusinessApplication',
      operatingSystem: 'Web-based Cloud SaaS',
      areaServed: cityInfo
        ? { '@type': 'City', name: cityInfo.name, containedInPlace: { '@type': 'Country', name: 'India' } }
        : { '@type': 'Country', name: 'India' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        description: `Custom enterprise pricing for clinics, nursing homes, and multi-specialty hospitals in ${locationLabel}.`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://endomatics.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hospital Management System India', item: 'https://endomatics.com/hms-india' },
        ...(cityInfo
          ? [{ '@type': 'ListItem', position: 3, name: `HMS in ${cityInfo.name}`, item: `https://endomatics.com${pagePath}` }]
          : []),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best ABDM-compliant AI Hospital Management System in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ENDOMATICS is an AI-native cloud Hospital Management System (HMS) built for Indian hospitals, offering native ABDM M1/M2/M3 and ABHA Health ID integration, NABH-aligned clinical safety, GST & TPA/PM-JAY billing, 0.00% revenue leakage, and 14-day deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much revenue leakage can Indian hospitals recover with ENDOMATICS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Indian multi-specialty hospitals typically lose 3% to 8% of annual billing to unbilled ward consumables and delayed discharge reconciliations. ENDOMATICS binds bedside EHR events directly to the financial ledger to achieve 0.00% revenue leakage.',
          },
        },
      ],
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-bg-light">
      <Seo
        title={
          cityInfo
            ? `Hospital Management System Software in ${cityInfo.name} (ABDM & NABH Ready) | ENDOMATICS`
            : 'Best AI Hospital Management System Software in India (ABDM & NABH Ready) | ENDOMATICS'
        }
        description={
          cityInfo
            ? `Deploy ENDOMATICS AI-native cloud Hospital Management System (HMS) in ${cityInfo.name}, ${cityInfo.state}. ABDM & ABHA integrated, NABH compliant, 0.00% revenue leakage, 14-day go-live.`
            : "Deploy India's AI-native cloud Hospital Management System (HMS) in 14 days. ABDM & ABHA integrated, NABH compliant, GST & TPA/PM-JAY billing with 0.00% revenue leakage."
        }
        path={pagePath}
        jsonLd={jsonLd}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-14">
        {/* Hero / Direct Answer Block (AEO Optimized) */}
        <section className="m3-surface-elevated rounded-3xl p-6 sm:p-10 bg-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tonal border border-steel-teal/15 font-mono text-[10px] font-bold uppercase tracking-wider text-steel-teal mb-4">
              <Building2 className="w-3.5 h-3.5" />
              {cityInfo ? `${cityInfo.name} · ${cityInfo.state}` : 'India Healthcare Edition'}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              {cityInfo
                ? `AI-Native Hospital Management System in ${cityInfo.name}`
                : 'AI-Native Hospital Management System for India'}
            </h1>
            {/* 40-60 word self-contained AEO answer block */}
            <p className="font-sans text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-medium">
              <strong>ENDOMATICS</strong> is an AI-native, cloud-based Hospital Management System (HMS) engineered for Indian hospitals and clinics. It unifies OPD, IPD, Emergency, Pharmacy, Laboratory, and GST/TPA medical billing with native <strong>ABDM &amp; ABHA Health ID</strong> workflows, <strong>NABH-aligned</strong> clinical safety, <strong>0.00% revenue leakage</strong>, and <strong>14-day deployment</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-full shadow-md transition-colors cursor-pointer"
              >
                <span>Book India Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/abdm-integration"
                className="inline-flex items-center gap-2 bg-surface-tonal hover:bg-slate-200/70 text-steel-teal font-sans text-sm font-semibold py-3.5 px-6 rounded-full transition-colors"
              >
                <span>Explore ABDM &amp; ABHA Architecture</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Extractable HTML Comparison Table (High AI Citation Format) */}
        <section className="space-y-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
              ENDOMATICS Cloud AI HMS vs. Legacy Indian HMS
            </h2>
            <p className="text-sm text-slate-600 mt-1.5">
              Why multi-specialty hospitals across India are migrating from on-premise software to an autonomous cloud operating layer.
            </p>
          </div>

          <div className="m3-surface rounded-3xl overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-tonal/70 border-b border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <th className="py-4 px-6">Hospital Capability</th>
                    <th className="py-4 px-6 text-steel-teal">ENDOMATICS AI Cloud HMS</th>
                    <th className="py-4 px-6 text-slate-500">Legacy On-Premise HMS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-bg-light/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-ink">{row.feature}</td>
                      <td className="py-4 px-6 font-semibold text-steel-teal">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0" />
                          {row.endomatics}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive INR ROI & Leakage Calculator */}
        <section>
          <IndiaRoiCalculator onOpenDemo={onOpenDemo} />
        </section>

        {/* Pan-India Deployment Coverage */}
        <section className="m3-surface rounded-3xl p-6 sm:p-8 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-ink flex items-center gap-2">
                <MapPin className="w-5 h-5 text-steel-teal" />
                Serving Hospitals &amp; Clinics Across India
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Dedicated 14-day onboarding, tariff migration, and ABDM sandbox setup for single-specialty clinics, nursing homes, and multi-specialty hospital chains.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-clinical-mint shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>NABH &amp; ABDM Aligned</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {Object.entries(CITY_MAP).map(([slug, info]) => (
              <Link
                key={slug}
                to={`/hms-india/${slug}`}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
                  citySlug === slug
                    ? 'bg-steel-teal border-steel-teal text-white'
                    : 'bg-bg-light border-slate-200/80 text-ink hover:border-steel-teal/40 hover:text-steel-teal'
                }`}
              >
                {info.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
