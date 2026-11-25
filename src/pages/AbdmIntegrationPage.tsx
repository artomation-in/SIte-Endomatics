import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, QrCode, FileCheck2, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '../lib/seo';

interface AbdmIntegrationPageProps {
  onOpenDemo: () => void;
}

const milestones = [
  {
    code: 'Milestone 1 (M1)',
    title: 'ABHA Health ID & Scan-and-Share',
    icon: QrCode,
    points: [
      'Instant 14-digit ABHA number creation & Aadhaar/mobile OTP verification at reception.',
      'ABDM Scan & Share QR code integration cutting OPD registration queues under 15 seconds.',
      'Automatic patient deduplication across multi-branch hospital networks.',
    ],
  },
  {
    code: 'Milestone 2 (M2)',
    title: 'HIP / HIU Clinical Record Exchange',
    icon: FileCheck2,
    points: [
      'Structured FHIR-compliant prescriptions, diagnostic reports, and discharge summaries.',
      'Consent-driven Health Information Provider (HIP) & User (HIU) architecture.',
      'Automated linking of lab results and imaging summaries to the patient ABHA locker.',
    ],
  },
  {
    code: 'Milestone 3 (M3)',
    title: 'Unified Health Interface (UHI) & NABH',
    icon: Network,
    points: [
      'UHI-ready teleconsultation and appointment discovery interoperability.',
      'NABH-aligned medication safety checks, critical lab alerts, and shift handover logs.',
      'Tamper-evident audit trails for NHA, TPA, and PM-JAY claims verification.',
    ],
  },
];

export default function AbdmIntegrationPage({ onOpenDemo }: AbdmIntegrationPageProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://endomatics.com/' },
      { '@type': 'ListItem', position: 2, name: 'HMS India', item: 'https://endomatics.com/hms-india' },
      { '@type': 'ListItem', position: 3, name: 'ABDM & ABHA Integration', item: 'https://endomatics.com/abdm-integration' },
    ],
  };

  return (
    <main className="pt-28 pb-20 bg-bg-light">
      <Seo
        title="ABDM & ABHA Compliant Hospital Software Integration (M1, M2, M3) | ENDOMATICS"
        description="Complete ABDM & ABHA Health ID integration for Indian hospitals. Scan-and-Share OPD queues, FHIR record exchange, and NABH-aligned clinical workflows in 14 days."
        path="/abdm-integration"
        jsonLd={jsonLd}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">
        <section className="m3-surface-elevated rounded-3xl p-6 sm:p-10 bg-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tonal border border-steel-teal/15 font-mono text-[10px] font-bold uppercase tracking-wider text-steel-teal mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Ayushman Bharat Digital Mission
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              ABDM &amp; ABHA Integration for Indian Hospitals
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-medium">
              ENDOMATICS provides native <strong>ABDM (M1, M2, and M3)</strong> interoperability out of the box. Hospitals can verify <strong>ABHA Health IDs</strong>, enable <strong>Scan &amp; Share</strong> express OPD check-ins, and exchange consent-based FHIR clinical records without external middleware.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-full shadow-md transition-colors cursor-pointer"
              >
                <span>Schedule ABDM Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/hms-india"
                className="inline-flex items-center gap-2 bg-surface-tonal hover:bg-slate-200/70 text-steel-teal font-sans text-sm font-semibold py-3.5 px-6 rounded-full transition-colors"
              >
                <span>View India HMS Overview</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.code} className="m3-surface rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-surface-tonal border border-steel-teal/15 flex items-center justify-center text-steel-teal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-clinical-mint bg-clinical-mint/10 px-2.5 py-1 rounded-full">
                      {m.code}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-extrabold text-ink mb-3">{m.title}</h2>
                  <ul className="space-y-2.5">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
