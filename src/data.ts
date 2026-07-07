import { StatItem, CoreModuleItem, ProcessStep, TestimonialItem, BillingDetail } from './types';

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-billing',
    value: 98.4,
    suffix: '%',
    label: 'Billing accuracy achieved',
  },
  {
    id: 'stat-admission',
    value: 4,
    suffix: ' min',
    label: 'Average admission time',
  },
  {
    id: 'stat-discharge',
    value: 3.2,
    suffix: 'x',
    label: 'Faster discharge cycles',
  },
  {
    id: 'stat-leakage',
    value: 0,
    suffix: '',
    label: 'Revenue leakage',
  },
];

export const CORE_MODULES: CoreModuleItem[] = [
  {
    id: 'mod-opd',
    name: 'OPD Workflow',
    description: 'Dynamic queues, digital prescriptions, and instant consultation-to-billing handover.',
    iconName: 'UserRoundCheck',
  },
  {
    id: 'mod-ipd',
    name: 'IPD & Ward Management',
    description: 'Real-time bed heatmaps, clinical charting, and automated nursing shift handover logs.',
    iconName: 'BedDouble',
  },
  {
    id: 'mod-emergency',
    name: 'Emergency Triage',
    description: 'Color-coded triage queues, rapid registration, and automated crash-cart inventory sync.',
    iconName: 'Activity',
  },
  {
    id: 'mod-billing',
    name: 'Smart Billing',
    description: 'Unified account ledger tracking every drug, lab, and bed-hour in real-time.',
    iconName: 'DollarSign',
  },
  {
    id: 'mod-pharmacy',
    name: 'Pharmacy & Inventory',
    description: 'Batch-expiry tracking, double-verification safety protocols, and reorder triggers.',
    iconName: 'Pill',
  },
  {
    id: 'mod-analytics',
    name: 'Analytics & Reports',
    description: 'Predictive occupancy rates, department-level margins, and automated compliance files.',
    iconName: 'TrendingUp',
  },
];

export const BILLING_DETAILS: BillingDetail[] = [
  { id: 'b-opd', label: 'OPD Consultation', amount: '$150.00', status: 'unified', color: '#26619C' },
  { id: 'b-lab', label: 'Hematology Panel', amount: '$85.00', status: 'unified', color: '#26619C' },
  { id: 'b-pharm', label: 'Ceftriaxone IV (2g)', amount: '$42.50', status: 'unified', color: '#26619C' },
  { id: 'b-ipd', label: 'IPD Ward Bed (Room 402)', amount: '$600.00', status: 'unified', color: '#26619C' },
  { id: 'b-emerg', label: 'Emergency Admission', amount: '$350.00', status: 'unified', color: '#26619C' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Configure structures',
    description: 'Input your physical ward geography, bed capacities, and department-specific custom intake rules.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Onboard departments',
    description: 'Map internal tariffs, drug inventories, and physician schedules into the ENDOMATICS interface.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Go live in 14 days',
    description: 'Our rapid deployment team migrates legacy data and goes live with zero downtime for active wards.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "ENDOMATICS brought cold intelligence and clinical precision to our chaos. Revenue leakage plummeted to absolute zero within the first month of go-live, and our nursing staff finally has a tool designed for human speed.",
    author: "Dr. Alistair Vance",
    role: "Chief Medical Officer",
    hospital: "Vanguard Healthcare Network",
  },
  {
    id: 'test-2',
    quote: "Procuring enterprise healthcare software is notoriously difficult. ENDOMATICS bypassed the bloat. They deployed across 450 beds in less than two weeks, delivering 3.2× faster discharge cycles from day one.",
    author: "Helena Rostova",
    role: "Chief Technology Officer",
    hospital: "Metropolitan Surgical Center",
  },
];
