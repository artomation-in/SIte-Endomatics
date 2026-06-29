import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

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

  const deploymentDays = 1;
  const leakPrevention = '$277,500';
  const hoursSavedPerNurse = '26.0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
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
            {/* Left Sidebar Info Area */}
            <div id="demo-modal-left-panel" className="w-full md:w-5/12 bg-pulse-teal p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
              <div>
                <span id="demo-modal-tag" className="font-mono text-xs text-steel-teal tracking-[0.08em] uppercase font-medium">
                  Hospital Diagnostics
                </span>
                <h3 id="demo-modal-left-title" className="font-display text-2xl font-bold mt-2 text-ink">
                  Onboarding Projection
                </h3>
                <p id="demo-modal-left-desc" className="text-sm text-muted-grey mt-2 leading-relaxed">
                  Based on your current scale, our clinical architects have projected the following deployment milestones.
                </p>

                <div id="demo-modal-stats-list" className="mt-8 space-y-6">
                  <div id="est-deployment" className="border-l-2 border-steel-teal pl-4">
                    <p className="font-mono text-xs text-muted-grey uppercase tracking-wider">Deployment timeline</p>
                    <p className="text-2xl font-bold font-display text-ink mt-1">
                      {deploymentDays} Day <span className="text-xs font-mono text-steel-teal font-normal">Go-Live</span>
                    </p>
                  </div>

                  <div id="est-leakage" className="border-l-2 border-steel-teal pl-4">
                    <p className="font-mono text-xs text-muted-grey uppercase tracking-wider">Est. Annual Revenue Restored</p>
                    <p className="text-2xl font-bold font-display text-ink mt-1">
                      {leakPrevention} <span className="text-xs font-mono text-steel-teal font-normal">Recovered</span>
                    </p>
                  </div>

                  <div id="est-hours" className="border-l-2 border-steel-teal pl-4">
                    <p className="font-mono text-xs text-muted-grey uppercase tracking-wider">Weekly Nurse Hours Reclaimed</p>
                    <p className="text-2xl font-bold font-display text-ink mt-1">
                      {hoursSavedPerNurse} hrs <span className="text-xs font-mono text-steel-teal font-normal">/ Nurse</span>
                    </p>
                  </div>

                </div>
              </div>

              <div id="demo-modal-left-footer" className="hidden md:flex items-center gap-2 text-xs text-muted-grey pt-6 border-t border-gray-200/50 mt-6">
                <ShieldCheck className="h-4 w-4 text-steel-teal shrink-0" />
                <span>HIPAA Compliant · SOC2 Type II Certified</span>
              </div>
            </div>

            {/* Right Side Form / Success State */}
            <div id="demo-modal-right-panel" className="w-full md:w-7/12 p-8 relative flex flex-col justify-center overflow-y-auto no-scrollbar">
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-grey hover:text-ink hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSuccess ? (
                <div id="demo-modal-form-area">
                  <h4 id="form-heading" className="font-display text-xl font-bold mb-1">
                    Book Enterprise Demo
                  </h4>
                  <p id="form-subheading" className="text-sm text-muted-grey mb-6">
                    Connect with our technical integration experts for a tailored clinical walkthrough.
                  </p>

                  <form id="demo-request-form" onSubmit={handleSubmit} className="space-y-4">
                    <div id="form-row-1" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-muted-grey mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Eleanor Vance"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-steel-teal focus:ring-1 focus:ring-steel-teal bg-bg-light transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-muted-grey mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="evance@vanguardhealth.org"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-steel-teal focus:ring-1 focus:ring-steel-teal bg-bg-light transition-all"
                        />
                      </div>
                    </div>

                    <div id="form-row-2" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hospitalName" className="block font-mono text-xs uppercase tracking-wider text-muted-grey mb-1">
                          Hospital / Network
                        </label>
                        <input
                          type="text"
                          id="hospitalName"
                          value={formData.hospitalName}
                          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                          placeholder="Vanguard Memorial"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-steel-teal focus:ring-1 focus:ring-steel-teal bg-bg-light transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-wider text-muted-grey mb-1">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-steel-teal focus:ring-1 focus:ring-steel-teal bg-bg-light transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="primaryNeed" className="block font-mono text-xs uppercase tracking-wider text-muted-grey mb-1">
                        Primary System Modernization Need
                      </label>
                      <select
                        id="primaryNeed"
                        value={formData.primaryNeed}
                        onChange={(e) => setFormData({ ...formData, primaryNeed: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-steel-teal focus:ring-1 focus:ring-steel-teal bg-bg-light transition-all"
                      >
                        <option>OPD & IPD Workflows</option>
                        <option>Unified Smart Billing Ledger</option>
                        <option>Emergency Triage Coordination</option>
                        <option>Pharmacy & Automated Inventory</option>
                        <option>Full Suite Platform Integration</option>
                      </select>
                    </div>

                    <div id="submit-btn-area" className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-steel-teal hover:bg-steel-teal/90 text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md disabled:opacity-75"
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
                  </form>
                </div>
              ) : (
                <motion.div
                  id="demo-modal-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-pulse-teal rounded-full text-steel-teal mb-4">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 id="success-heading" className="font-display text-2xl font-bold mb-2">
                    Diagnostic Session Confirmed
                  </h4>
                  <p id="success-body" className="text-sm text-muted-grey max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.name}. We have reserved an onboarding consultation slot for <strong>{formData.hospitalName}</strong>. A clinical architect will reach out to you at <strong>{formData.email}</strong> within 4 hours.
                  </p>

                  <div id="success-summary-box" className="bg-bg-light border border-gray-100 rounded-xl p-4 text-left max-w-sm mx-auto mb-8">
                    <p className="font-mono text-[11px] text-muted-grey uppercase tracking-wider text-center border-b border-gray-200/50 pb-2 mb-2">
                      Booking Summary
                    </p>
                    <div className="flex justify-between text-xs py-1">
                      <span className="text-muted-grey">Focus Module:</span>
                      <span className="font-medium">{formData.primaryNeed}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1">
                      <span className="text-muted-grey">Est. Live Date:</span>
                      <span className="font-mono font-medium text-steel-teal">
                        In {deploymentDays} Day
                      </span>
                    </div>
                  </div>

                  <button
                    id="success-close-btn"
                    onClick={onClose}
                    className="bg-ink hover:bg-ink/90 text-white font-medium py-2.5 px-6 rounded-lg text-sm transition-colors cursor-pointer"
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
