import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Check } from 'lucide-react';

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
    primaryNeed: 'OPD & IPD Workflows',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const highlights = [
    'Tailored to your hospital size and specialty',
    'Live sandbox with your own clinical data',
    'Zero downtime migration from legacy systems',
    'Dedicated integration architect assigned',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }
    setIsSubmitting(true);

    try {
      // Web3Forms access keys are public by design, so it is perfectly safe to hardcode it here.
      // This bypasses the Cloudflare environment variable restriction for static sites.
      const accessKey = "b8390335-cd57-4d3d-9485-9e7e4af0b7d7";

      if (accessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Demo Lead: ${formData.hospitalName || formData.name}`,
            from_name: "Endomatics Website",
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Hospital: formData.hospitalName,
            "Primary Need": formData.primaryNeed
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error("Failed to submit form");
        }
      } else {
        // Fallback simulation if no key is provided yet
        await new Promise(resolve => setTimeout(resolve, 1200));
        console.warn("No VITE_WEB3FORMS_ACCESS_KEY found. Form submission simulated.");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="demo-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="demo-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            id="demo-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-ink shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[80vh]"
          >
            {/* Left Sidebar Info Area — hidden on mobile to give full space to the form */}
            <div id="demo-modal-left-panel" className="hidden md:flex md:w-5/12 bg-pulse-teal p-8 flex-col justify-between border-r border-gray-100 shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-steel-teal/[0.04] rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <h3 id="demo-modal-left-title" className="font-display text-[22px] font-bold text-ink leading-snug">
                  What to expect
                </h3>
                <p id="demo-modal-left-desc" className="text-[13px] text-muted-grey mt-2.5 leading-relaxed">
                  A 30-minute personalized walkthrough built around your hospital's workflow.
                </p>

                <div className="mt-8 space-y-3.5">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-steel-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-steel-teal" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] text-ink/80 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="demo-modal-left-footer" className="hidden md:flex items-center gap-2 text-xs text-muted-grey pt-5 border-t border-gray-200/60 mt-8 relative z-10">
                <ShieldCheck className="h-4 w-4 text-steel-teal shrink-0" />
                <span className="font-medium">HIPAA Compliant · SOC2 Type II Certified</span>
              </div>
            </div>

            {/* Right Side Form / Success State */}
            <div id="demo-modal-right-panel" className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 relative flex flex-col justify-center overflow-y-auto no-scrollbar">
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-grey/60 hover:text-ink hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSuccess ? (
                <div id="demo-modal-form-area">
                  <h4 id="form-heading" className="font-display text-[22px] font-bold text-ink mb-1">
                    Book Enterprise Demo
                  </h4>
                  <p id="form-subheading" className="text-[13px] text-muted-grey mb-7 leading-relaxed">
                    Connect with our technical integration experts for a tailored clinical walkthrough.
                  </p>

                  <form id="demo-request-form" onSubmit={handleSubmit} className="space-y-4">
                    <div id="form-row-1" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-grey mb-1.5 font-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Eleanor Vance"
                          className="w-full px-4 py-2.5 border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-steel-teal focus:ring-2 focus:ring-steel-teal/10 bg-bg-light/50 transition-all duration-200 placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-grey mb-1.5 font-semibold">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="evance@vanguardhealth.org"
                          className="w-full px-4 py-2.5 border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-steel-teal focus:ring-2 focus:ring-steel-teal/10 bg-bg-light/50 transition-all duration-200 placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div id="form-row-2" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hospitalName" className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-grey mb-1.5 font-semibold">
                          Hospital / Network
                        </label>
                        <input
                          type="text"
                          id="hospitalName"
                          value={formData.hospitalName}
                          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                          placeholder="Vanguard Memorial"
                          className="w-full px-4 py-2.5 border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-steel-teal focus:ring-2 focus:ring-steel-teal/10 bg-bg-light/50 transition-all duration-200 placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-grey mb-1.5 font-semibold">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-2.5 border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-steel-teal focus:ring-2 focus:ring-steel-teal/10 bg-bg-light/50 transition-all duration-200 placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="primaryNeed" className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-grey mb-1.5 font-semibold">
                        Primary System Modernization Need
                      </label>
                      <select
                        id="primaryNeed"
                        value={formData.primaryNeed}
                        onChange={(e) => setFormData({ ...formData, primaryNeed: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-steel-teal focus:ring-2 focus:ring-steel-teal/10 bg-bg-light/50 transition-all duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238A8F9E%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]"
                      >
                        <option>OPD & IPD Workflows</option>
                        <option>Unified Smart Billing Ledger</option>
                        <option>Emergency Triage Coordination</option>
                        <option>Pharmacy & Automated Inventory</option>
                        <option>Full Suite Platform Integration</option>
                      </select>
                    </div>

                    <div id="submit-btn-area" className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-steel-teal hover:bg-steel-teal/90 text-white font-semibold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(38,97,156,0.2)] hover:shadow-[0_4px_16px_rgba(38,97,156,0.3)] disabled:opacity-75 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            <span>Processing Integration Diagnostics...</span>
                          </>
                        ) : (
                          <>
                            <span>Confirm Diagnostic Booking</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-muted-grey/70 pt-1">
                      No credit card required · Free consultation
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  id="demo-modal-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-steel-teal/[0.06] rounded-2xl text-steel-teal mb-5">
                    <CheckCircle2 className="h-14 w-14" strokeWidth={1.5} />
                  </div>
                  <h4 id="success-heading" className="font-display text-2xl font-bold mb-2 text-ink">
                    Diagnostic Session Confirmed
                  </h4>
                  <p id="success-body" className="text-[13px] text-muted-grey max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-ink font-semibold">{formData.name}</strong>. We have reserved an onboarding consultation slot for <strong className="text-ink font-semibold">{formData.hospitalName}</strong>. A clinical architect will reach out to you within 4 hours.
                  </p>

                  <div id="success-summary-box" className="bg-bg-light/80 border border-gray-100 rounded-2xl p-5 text-left max-w-sm mx-auto mb-8">
                    <p className="font-mono text-[10px] text-muted-grey uppercase tracking-[0.12em] text-center border-b border-gray-200/60 pb-3 mb-3 font-semibold">
                      Booking Summary
                    </p>
                    <div className="flex justify-between items-center text-[13px] py-1.5">
                      <span className="text-muted-grey">Focus Module</span>
                      <span className="font-semibold text-ink">{formData.primaryNeed}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px] py-1.5">
                      <span className="text-muted-grey">Response</span>
                      <span className="font-mono font-semibold text-steel-teal bg-steel-teal/[0.06] px-2 py-0.5 rounded-md">
                        Within 4 hours
                      </span>
                    </div>
                  </div>

                  <button
                    id="success-close-btn"
                    onClick={onClose}
                    className="bg-ink hover:bg-ink/90 text-white font-semibold py-3 px-8 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    Close Walkthrough
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
