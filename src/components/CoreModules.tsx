import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Pill, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function CoreModules() {
  const [selectedId, setSelectedId] = useState('ai-queue');

  const aiFeatures = [
    {
      id: 'ai-queue',
      title: 'Queue Optimization',
      badge: 'Real-Time Routing',
      description: 'Continuously parses patient registrations to dynamically optimize clinical triage paths, reducing average wait times across all departments.',
      icon: Sparkles,
      metric: 'Delta: -14m wait time',
      color: 'text-steel-teal',
      bgColor: 'bg-steel-teal/[0.04]',
      borderColor: 'border-steel-teal/10',
    },
    {
      id: 'ai-med',
      title: 'Medication Safety Guard',
      badge: 'Clinical Verification',
      description: 'Double-verifies electronic prescriptions against patient allergy profiles, medication history, and live inventory batch expiration dates before release.',
      icon: Pill,
      metric: 'Accuracy: 100% verified',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50/50',
      borderColor: 'border-rose-100',
    },
    {
      id: 'ai-capacity',
      title: 'Capacity Forecasting',
      badge: 'Resource Efficiency',
      description: 'Predicts bed, ward, and ICU occupancy up to 72 hours in advance, optimizing clinical discharge windows and nursing schedules.',
      icon: TrendingUp,
      metric: 'Forecast Horizon: 72 hours',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50/50',
      borderColor: 'border-emerald-100',
    },
    {
      id: 'ai-billing',
      title: 'Smart Leakage Audit',
      badge: 'Financial Integrity',
      description: 'Tracks administered drugs, lab tests, and clinical bed-hours, automatically reconciling clinical action logs with billing ledgers.',
      icon: DollarSign,
      metric: 'Revenue Leakage: 0.00%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50/50',
      borderColor: 'border-blue-100',
    },
    {
      id: 'ai-handover',
      title: 'Auto-Handover Summaries',
      badge: 'Documentation',
      description: 'Converts complex patient telemetry and raw nursing logs into highly structured, peer-reviewed shift handover documents.',
      icon: FileText,
      metric: 'Synthesizer latency: < 2s',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50/50',
      borderColor: 'border-purple-100',
    },
    {
      id: 'ai-stock',
      title: 'Active Stock Predictor',
      badge: 'Logistics',
      description: 'Models department-level consumption patterns and medication burn rates to automatically trigger restocking orders of critical medical supplies.',
      icon: Layers,
      metric: 'Supply Confidence: 99.9%',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50/50',
      borderColor: 'border-amber-100',
    },
  ];

  const activeFeature = aiFeatures.find(f => f.id === selectedId) || aiFeatures[0];

  return (
    <section id="features" className="py-10 lg:py-12 bg-white border-t border-gray-150/40 relative overflow-hidden">
      {/* Soft background grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.25] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div id="features-header" className="max-w-2xl mb-8 text-left">
          <span id="features-badge" className="font-mono text-[9px] text-steel-teal tracking-[0.1em] uppercase font-bold bg-steel-teal/[0.05] px-2 py-0.5 rounded">
            AI-Native Operations
          </span>
          <h2 id="features-title" className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-ink mt-2">
            Autonomous intelligence at every care point.
          </h2>
          <p id="features-desc" className="font-sans text-xs text-muted-grey mt-1.5 leading-relaxed font-medium max-w-xl">
            Endomatics replaces disconnected systems with real-time clinical intelligence, anticipating patient flows and securing operational integrity.
          </p>
        </div>

        {/* 2-Column Split Explorer View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Tab Menu Stack */}
          <div className="lg:col-span-5 flex flex-col gap-1.5 justify-center">
            {aiFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isSelected = selectedId === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setSelectedId(feature.id)}
                  className={`w-full text-left p-2.5 sm:px-3.5 sm:py-2.5 rounded-lg border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected 
                      ? 'bg-bg-light border-steel-teal/15 shadow-[0_2px_12px_rgba(38,97,156,0.015)] text-steel-teal' 
                      : 'bg-white border-gray-100 hover:border-gray-150 hover:bg-bg-light/30'
                  }`}
                  style={{ outline: 'none' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7.5 h-7.5 rounded-md flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? 'bg-steel-teal text-white' : 'bg-bg-light text-steel-teal group-hover:bg-steel-teal/5'
                    }`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <p className={`font-display text-xs sm:text-[13px] font-bold transition-colors ${
                        isSelected ? 'text-steel-teal' : 'text-ink'
                      }`}>
                        {feature.title}
                      </p>
                      <p className="font-mono text-[8px] text-muted-grey mt-0.5 tracking-wider uppercase">
                        {feature.badge}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[8.5px] text-steel-teal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View
                    </span>
                    <ArrowRight className={`w-3 h-3 transition-all duration-200 ${
                      isSelected ? 'text-steel-teal transform translate-x-0.5' : 'text-muted-grey group-hover:text-steel-teal group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-bg-light rounded-xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] h-full flex flex-col justify-between min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  {/* Badge & Meta Row */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-wider uppercase text-steel-teal font-bold bg-steel-teal/10 px-2 py-0.5 rounded">
                        {activeFeature.badge}
                      </span>
                      <span className="font-mono text-[9px] text-muted-grey font-semibold">
                        System Module // Core
                      </span>
                    </div>

                    {/* Main Showcase Header */}
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                        {activeFeature.title}
                      </h3>
                      <p className="font-sans text-[11px] sm:text-xs text-muted-grey leading-relaxed mt-1 font-medium">
                        {activeFeature.description}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Showcase Visual Dashboard Widget */}
                  <div className="bg-white rounded-lg p-3.5 border border-gray-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.005)] w-full">
                    
                    {activeFeature.id === 'ai-queue' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-steel-teal font-bold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-steel-teal animate-ping" />
                            Live Triage Routing Agent
                          </span>
                          <span className="text-muted-grey bg-bg-light px-1.5 py-0.5 rounded text-[8px] border border-gray-100">
                            Confidence: 97%
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-ink">Sarah Lin (Pediatrics)</span>
                            <span className="text-muted-grey">OPD-A3 Queue</span>
                          </div>
                          <div className="bg-bg-light p-2 rounded border border-gray-100/60 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-steel-teal" />
                              <span className="text-ink font-medium">Optimized Route:</span>
                            </div>
                            <span className="text-steel-teal font-bold uppercase tracking-wider text-[9px]">
                              Box 3 → Room 4 (Specialist)
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-[8.5px] text-emerald-600 font-bold bg-emerald-50/40 p-1.5 rounded border border-emerald-100/20">
                            <span>Clinical Bottleneck Avoidance:</span>
                            <span>-14 min Wait Time Savings</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature.id === 'ai-med' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-rose-600 font-bold flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                            Rx Allergy & Safety Guard
                          </span>
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[8px] border border-emerald-100/30">
                            Active Sync
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-ink">Ceftriaxone IV (2g)</span>
                            <span className="text-muted-grey">Patient ID: #ER-204</span>
                          </div>
                          <div className="bg-emerald-50/20 p-2 rounded border border-emerald-100/20 flex items-center gap-1.5 text-emerald-700">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="font-medium text-[8.5px]">Zero allergen matches detected. Auto-approved for pharmacy release.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature.id === 'ai-capacity' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            Predictive Capacity Planner
                          </span>
                          <span className="text-muted-grey font-semibold">Ward & ICU Beds</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="bg-bg-light p-1.5 rounded border border-gray-100/60 text-center">
                            <p className="text-muted-grey text-[7.5px] uppercase font-bold">Saturday</p>
                            <p className="text-ink font-bold text-[10px] mt-0.5">78% Load</p>
                          </div>
                          <div className="bg-bg-light p-1.5 rounded border border-gray-100/60 text-center">
                            <p className="text-muted-grey text-[7.5px] uppercase font-bold">Sunday</p>
                            <p className="text-ink font-bold text-[10px] mt-0.5">85% Load</p>
                          </div>
                          <div className="bg-emerald-50/20 p-1.5 rounded border border-emerald-100/20 text-center">
                            <p className="text-emerald-600 text-[7.5px] uppercase font-bold">Monday (Peak)</p>
                            <p className="text-emerald-600 font-bold text-[10px] mt-0.5">94% Occupancy</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature.id === 'ai-billing' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-blue-600 font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                            Smart Audit Reconciliation
                          </span>
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[8px] border border-emerald-100">
                            0.00% Leakage
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-semibold text-ink">
                          <span>Auto-ICD-10 Diagnostic Mapping</span>
                          <span className="text-blue-600 font-bold">Active</span>
                        </div>
                        <div className="bg-bg-light p-1.5 rounded border border-gray-100/60 flex justify-between items-center text-[8px]">
                          <span className="text-muted-grey">Unlogged clinical bed-hours audited & logged:</span>
                          <span className="font-bold text-blue-600">+$1,250.00 recovered</span>
                        </div>
                      </div>
                    )}

                    {activeFeature.id === 'ai-handover' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-purple-600 font-bold flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-purple-600" />
                            ICU Shift Handover Synthesizer
                          </span>
                          <span className="text-muted-grey">Latency: 1.4s</span>
                        </div>
                        <div className="bg-bg-light p-2 rounded border border-gray-100/60 font-sans text-[11px] italic text-ink/90 leading-relaxed">
                          "Patient #12 post-operative state is stable. Normal sinus rhythm at 72 bpm, oxygen saturation sustained at 98% on room air. Plan: Transition to standard ward in AM."
                        </div>
                      </div>
                    )}

                    {activeFeature.id === 'ai-stock' && (
                      <div className="font-mono text-[9.5px] space-y-2.5 text-left">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                          <span className="text-amber-600 font-bold flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-600" />
                            Pharmacy Supply Predictor
                          </span>
                          <span className="text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded text-[8px] border border-amber-100/30">
                            Auto-Restock
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-ink font-semibold">Critical IV Antibiotics Stock Level:</span>
                          <span className="text-rose-600 font-bold">&lt; 15% threshold reached</span>
                        </div>
                        <div className="bg-amber-50/10 p-1.5 rounded border border-amber-100/50 flex items-center justify-between text-[8px] text-amber-700">
                          <span>Purchase Order PO-#9403 triggered:</span>
                          <span className="font-bold">200 vials approved</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Metric Ribbon & CTA Link */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-mono text-muted-grey uppercase tracking-wider">
                        Operational Metric
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-steel-teal mt-0.5 font-display">
                        {activeFeature.metric}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-steel-teal font-bold group cursor-pointer hover:text-black transition-colors">
                      <span>Explore workflow integration</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
