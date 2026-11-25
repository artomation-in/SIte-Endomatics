import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Check } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalName: '',
    city: '',
    bedTier: '30–100 Beds',
    primaryNeed: 'OPD & IPD Workflows',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const highlights = [
    'Tailored to your hospital size and specialty',
    'Live sandbox with your own clinical data',
    'Zero downtime migration from legacy systems',
    'Dedicated integration architect assigned',
  ];

  const getLeadContext = () => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const get = (k: string) => params.get(k) || '';
    const referrer = document.referrer || '';
    const utmSource = get('utm_source');
    const leadSource = utmSource || (referrer ? 'Referral' : 'Direct');
    return {
      'Lead Source': leadSource,
      Referrer: referrer,
      'Landing Page': window.location.pathname + window.location.search,
      'UTM Source': utmSource,
      'UTM Medium': get('utm_medium'),
      'UTM Campaign': get('utm_campaign'),
      'UTM Term': get('utm_term'),
      'UTM Content': get('utm_content'),
      GCLID: get('gclid'),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const accessKey = 'b8390335-cd57-4d3d-9485-9e7e4af0b7d7';
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Demo Lead: ${formData.hospitalName || formData.name}`,
          from_name: 'Endomatics Website',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Hospital: formData.hospitalName,
          City: formData.city,
          'Facility Size': formData.bedTier,
          'Primary Need': formData.primaryNeed,
          ...getLeadContext(),
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error('Failed to submit form');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitError('Unable to submit right now. Please try again or email connect@endomatics.com.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="demo-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            id="demo-modal-backdrop"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          <motion.div
            id="demo-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white text-ink shadow-[0_24px_64px_rgba(10,12,16,0.22)] border border-slate-200/70 flex flex-col md:flex-row max-h-[85vh] md:max-h-[82vh]"
          >
            {/* Left Sidebar Info Area — hidden on mobile to give full space to the form */}
            <div id="demo-modal-left-panel" className="hidden md:flex md:w-5/12 bg-surface-tonal p-8 flex-col justify-between border-r border-slate-200/70 shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-steel-teal/[0.06] rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <h3 id="demo-modal-left-title" className="font-display text-[22px] font-bold text-ink leading-snug">
                  What to expect
                </h3>
                <p id="demo-modal-left-desc" className="text-[13px] text-muted-grey mt-2.5 leading-relaxed">
                  A 30-minute personalized walkthrough built around your hospital's workflow.
                </p>
                <div className="mt-6 space-y-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="h-4 w-4 text-steel-teal shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-mono text-xs text-muted-grey">HIPAA & SOC2 Type II Certified</p>
            </div>

            <div className="w-full md:w-7/12 p-6 sm:p-8 relative overflow-y-auto no-scrollbar">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-grey hover:text-ink rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSuccess ? (
                <div>
                  <h4 className="font-display text-2xl font-bold text-ink mb-1">Book a Demo</h4>
                  <p className="text-sm text-muted-grey mb-6">
                    Connect with our integration team for a live sandbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-ink mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Eleanor Vance"
                          className="w-full px-3.5 py-2.5 border border-outline-subtle rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-surface placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-ink mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="evance@vanguardhealth.org"
                          className="w-full px-3.5 py-2.5 border border-outline-subtle rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-surface placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hospitalName" className="block text-xs font-semibold text-ink mb-1.5">
                          Hospital / Network
                        </label>
                        <input
                          type="text"
                          id="hospitalName"
                          value={formData.hospitalName}
                          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                          placeholder="Vanguard Memorial"
                          className="w-full px-3.5 py-2.5 border border-outline-subtle rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-surface placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-ink mb-1.5">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 border border-outline-subtle rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-surface placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-xs font-semibold text-ink mb-1.5">
                          City / State
                        </label>
                        <input
                          type="text"
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Hyderabad, Telangana"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-white placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="bedTier" className="block text-xs font-semibold text-ink mb-1.5">
                          Facility Size
                        </label>
                        <select
                          id="bedTier"
                          value={formData.bedTier}
                          onChange={(e) => setFormData({ ...formData, bedTier: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-white cursor-pointer"
                        >
                          <option>Clinic / &lt;30 Beds</option>
                          <option>30–100 Beds</option>
                          <option>100–300 Beds</option>
                          <option>300+ Beds / Network</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="primaryNeed" className="block text-xs font-semibold text-ink mb-1.5">
                        Primary Modernization Need
                      </label>
                      <select
                        id="primaryNeed"
                        value={formData.primaryNeed}
                        onChange={(e) => setFormData({ ...formData, primaryNeed: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-outline-subtle rounded-xl text-sm text-ink focus:outline-none focus:border-steel-teal bg-surface cursor-pointer"
                      >
                        <option>OPD & IPD Workflows</option>
                        <option>Unified Smart Billing Ledger</option>
                        <option>Emergency Triage Coordination</option>
                        <option>Pharmacy & Automated Inventory</option>
                        <option>Full Suite Platform Integration</option>
                      </select>
                    </div>

                    {submitError && (
                      <p className="text-xs font-medium text-alert-danger bg-red-50 px-3 py-2 rounded-xl">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-steel-teal hover:bg-steel-teal-dark text-white font-semibold py-3 px-6 rounded-full text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-75"
                    >
                      <span>{isSubmitting ? 'Processing...' : 'Book a Demo'}</span>
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>

                    <p className="text-center text-[11px] text-muted-grey pt-1">
                      Prefer instant callback?{' '}
                      <a
                        href="https://wa.me/918555036954?text=Hi%20ENDOMATICS%2C%20I%20would%20like%20to%20book%20an%20HMS%20demo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-steel-teal font-semibold hover:underline"
                      >
                        Chat on WhatsApp (+91 85550 36954)
                      </a>
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-12 w-12 text-steel-teal mx-auto mb-4" />
                  <h4 className="font-display text-2xl font-bold text-ink mb-2">Session Confirmed</h4>
                  <p className="text-sm text-muted-grey mb-6">
                    Thank you, <strong className="text-ink">{formData.name}</strong>. A clinical architect will reach out within 4 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-ink text-white font-semibold py-2.5 px-6 rounded-full text-sm cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
