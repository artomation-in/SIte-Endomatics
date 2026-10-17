import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Seo } from '../lib/seo';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-light relative pt-24 pb-16">
      <Seo
        title="Privacy Charter | ENDOMATICS"
        description="The ENDOMATICS privacy charter explains how patient, clinical, and business data are collected, processed, and protected under HIPAA, HITECH, and GDPR."
        path="/privacy"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          '@id': 'https://endomatics.com/privacy#breadcrumb',
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
              'name': 'Privacy Charter',
              'item': 'https://endomatics.com/privacy'
            }
          ]
        }}
      />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-grey font-semibold">
          <Link to="/" className="hover:text-steel-teal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink">Privacy Charter</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-steel-teal/10 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-steel-teal" />
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Privacy Charter</h1>
        </div>

        <div className="prose font-sans text-sm sm:text-[15px] text-muted-grey leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">1. Data We Collect</h2>
            <p>ENDOMATICS processes clinical, operational, and billing data entered by your hospital, clinic, or healthcare network. We also collect limited account and contact information (name, work email, phone, hospital name) when you request a demo or consultation.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">2. How We Use Data</h2>
            <p>Data is used solely to operate the ENDOMATICS hospital management system, deliver the services you subscribe to, reconcile clinical and financial workflows, and communicate about your account. We never sell patient data.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">3. Security & Compliance</h2>
            <p>ENDOMATICS is designed to comply with HIPAA, HITECH, and GDPR requirements and operates on SOC2 Type II certified cloud infrastructure with end-to-end encryption, tamper-evident audit logging, and role-based access controls.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">4. Data Retention & Deletion</h2>
            <p>We retain data only as long as needed to provide services and meet legal obligations. Upon request, authorized administrators may export or delete data subject to applicable retention laws.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink mb-2">5. Contact</h2>
            <p>Questions about this charter can be sent to <a href="mailto:connect@endomatics.com" className="text-steel-teal underline underline-offset-2">connect@endomatics.com</a>.</p>
          </section>
          <p className="font-mono text-xs text-muted-grey/60 pt-4 border-t border-gray-200/60">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  );
}
