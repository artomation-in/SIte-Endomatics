import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Scale, Sparkles } from 'lucide-react';
import { Seo } from '../lib/seo';

interface ComparePageProps {
  onOpenDemo: () => void;
}

const comparisonMatrix = [
  {
    dimension: 'AI Clinical Copilot & Automation',
    endomatics: 'Native (Queue AI, Ambient SOAP, Safety Guard, 72h Forecast)',
    cloudHms: 'Basic rule-based alerts or paid add-ons',
    legacyHis: 'None (manual charting & static forms)',
  },
  {
    dimension: 'Revenue Leakage Control',
    endomatics: '0.00% (Real-time bedside-to-ledger capture)',
    cloudHms: '2% – 4% (retroactive bill audits)',
    legacyHis: '4% – 8% (manual department reconciliation)',
  },
  {
    dimension: 'Go-Live Deployment Speed',
    endomatics: '14 Days (Zero ward downtime)',
    cloudHms: '4 – 8 Weeks',
    legacyHis: '4 – 9 Months',
  },
  {
    dimension: 'ABDM & ABHA Health ID',
    endomatics: 'Native M1, M2, M3 & Scan-and-Share',
    cloudHms: 'M1 / M2 supported (varies by tier)',
    legacyHis: 'Requires external middleware',
  },
  {
    dimension: 'NABH & DPDP Act 2023',
    endomatics: 'Built-in AAC, COP, MOM & India data localization',
    cloudHms: 'Partial NABH templates',
    legacyHis: 'Heavy manual documentation',
  },
  {
    dimension: 'TPA, PM-JAY, CGHS & ECHS Billing',
    endomatics: 'Automated multi-payer split + pre-claim scrub',
    cloudHms: 'Standard tariff & TPA templates',
    legacyHis: 'Manual claim packet assembly',
  },
];

export default function ComparePage({ onOpenDemo }: ComparePageProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://endomatics.com/' },
        { '@type': 'ListItem', position: 2, name: 'Compare HMS India', item: 'https://endomatics.com/compare' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does ENDOMATICS compare to Practo Insta, MocDoc, KareXpert, and Medinous in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unlike traditional cloud HMS tools (Practo Insta, MocDoc) or legacy on-premise HIS (Medinous), ENDOMATICS is AI-native from the ground up—combining Queue AI, Ambient SOAP Scribing, Medication Safety Guard, 72h capacity forecasting, and a 0.00% leakage real-time billing ledger with 14-day deployment and native ABDM/NABH/DPDP Act 2023 compliance.',
          },
        },
      ],
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-bg-light">
      <Seo
        title="Compare ENDOMATICS vs Traditional Cloud HMS & Legacy HIS in India"
        description="Side-by-side comparison of ENDOMATICS AI-Native HMS against traditional Indian HMS platforms (Practo Insta, MocDoc, KareXpert, Medinous) across AI, ABDM, NABH, and billing."
        path="/compare"
        jsonLd={jsonLd}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        <section className="m3-surface-elevated rounded-3xl p-6 sm:p-10 bg-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tonal border border-steel-teal/15 font-mono text-[10px] font-bold uppercase tracking-wider text-steel-teal mb-4">
              <Scale className="w-3.5 h-3.5" />
              India HMS Comparison
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              AI-Native HMS vs. Traditional Indian Hospital Software
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-medium">
              While legacy HIS and first-generation cloud HMS platforms digitize paper forms, <strong>ENDOMATICS</strong> embeds autonomous AI across triage, charting, pharmacy safety, and TPA/PM-JAY billing—delivering <strong>0.00% revenue leakage</strong> and <strong>14-day deployment</strong> with native ABDM, NABH, and DPDP Act 2023 compliance.
            </p>
          </div>
        </section>

        <section className="m3-surface rounded-3xl overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-tonal/75 border-b border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6">Evaluation Criteria</th>
                  <th className="py-4 px-6 text-steel-teal">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      ENDOMATICS AI OS
                    </span>
                  </th>
                  <th className="py-4 px-6 text-slate-500">Traditional Cloud HMS</th>
                  <th className="py-4 px-6 text-slate-500">Legacy On-Premise HIS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonMatrix.map((row) => (
                  <tr key={row.dimension} className="hover:bg-bg-light/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-ink">{row.dimension}</td>
                    <td className="py-4 px-6 font-semibold text-steel-teal">
                      <span className="inline-flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-clinical-mint shrink-0 mt-0.5" />
                        <span>{row.endomatics}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.cloudHms}</td>
                    <td className="py-4 px-6 text-slate-500">{row.legacyHis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-between gap-4 m3-surface rounded-3xl p-6 sm:p-8 bg-white">
          <div>
            <h2 className="font-display text-xl font-extrabold text-ink">
              Ready to benchmark ENDOMATICS against your current HMS?
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Get a live sandbox with your hospital tariffs, wards, and ABDM workflows in 4 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 bg-steel-teal hover:bg-steel-teal-dark text-white font-sans text-sm font-semibold py-3 px-6 rounded-full transition-colors cursor-pointer"
            >
              <span>Book Live Comparison Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/hms-india"
              className="inline-flex items-center gap-2 bg-surface-tonal text-steel-teal font-sans text-sm font-semibold py-3 px-5 rounded-full hover:bg-slate-200/70 transition-colors"
            >
              <span>India HMS Overview</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
