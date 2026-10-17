import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Seo } from '../lib/seo';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-light relative pt-24 pb-16">
      <Seo
        title="Service Level Agreement (SLA) & Terms | ENDOMATICS"
        description="The ENDOMATICS service level agreement and terms of service outline uptime commitments, onboarding timelines, and the responsibilities of both parties."
        path="/terms"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          '@id': 'https://endomatics.com/terms#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://endomatics.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Service Level Agreement',
              'item': 'https://endomatics.com/terms'
            }
          ]
        }}
      />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-grey font-semibold">
          <Link to="/" className="hover:text-steel-teal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink">Service Level Agreement</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-steel-teal/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-steel-teal" />
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Service Level Agreement</h1>
        </div>

        <div className="font-sans text-sm sm:text-[15px] text-muted-grey leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">1. Onboarding</h2>
            <p>ENDOMATICS follows a structured three-phase onboarding pathway designed to reach full go-live in exactly 14 days: ward and department configuration, custom tariff mapping, and seamless legacy database migration with zero downtime for active wards.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">2. Availability</h2>
            <p>We target high availability for the cloud-based hospital management system, backed by SOC2 Type II certified infrastructure, continuous monitoring, and defined incident response procedures.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">3. Support</h2>
            <p>A dedicated integration architect is assigned to your deployment. Support tickets are prioritized based on clinical impact, and critical issues are triaged on a best-effort basis.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">4. Customer Responsibilities</h2>
            <p>You are responsible for providing accurate configuration inputs, maintaining access credentials, and ensuring that your staff are trained in line with the onboarding documentation.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">5. Contact</h2>
            <p>Questions about this agreement can be sent to <a href="mailto:connect@endomatics.com" className="text-steel-teal underline underline-offset-2">connect@endomatics.com</a>.</p>
          </section>
          <p className="font-mono text-xs text-muted-grey/60 pt-4 border-t border-gray-200/60">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  );
}
