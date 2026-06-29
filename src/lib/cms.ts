import { createClient } from '@sanity/client';
import { StatItem, CoreModuleItem, ProcessStep, TestimonialItem, BillingDetail } from '../types';
import { 
  STATS_DATA, 
  CORE_MODULES, 
  BILLING_DETAILS, 
  PROCESS_STEPS, 
  TESTIMONIALS 
} from '../data';

// Fetch credentials from Vite environment variables safely
const metaEnv = (import.meta as any).env || {};
const projectId = metaEnv.VITE_SANITY_PROJECT_ID || '';
const dataset = metaEnv.VITE_SANITY_DATASET || 'production';
const token = metaEnv.VITE_SANITY_TOKEN || '';
const useCdn = metaEnv.VITE_SANITY_USE_CDN === 'true';

// Initialize Sanity Client lazily to prevent runtime crashes if variables are omitted
let client: any = null;
const isSanityConfigured = projectId && projectId.trim() !== '';

if (isSanityConfigured) {
  try {
    client = createClient({
      projectId,
      dataset,
      useCdn,
      apiVersion: '2026-06-27',
      token: token || undefined,
    });
    console.info('[CMS] Sanity client successfully initialized with ProjectID:', projectId);
  } catch (error) {
    console.error('[CMS] Failed to initialize Sanity Client:', error);
  }
} else {
  console.info('[CMS] Sanity Project ID not configured. Running in adaptive-hybrid mode (local fallback enabled).');
}

// Interfaces for MDX Articles
export interface MDXArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string; // MDX / Markdown formatted string
  publishedAt: string;
  readTime: string;
  image?: string; // Optional hero image URL
}

// Local fallback database of high-converting, deeply-indexed MDX clinical articles
const LOCAL_MDX_ARTICLES: MDXArticle[] = [
  {
    id: 'art-revenue-reconciliation',
    slug: 'eliminating-hospital-revenue-leakage-via-realtime-reconciliation',
    title: 'Zero Leakage: Eliminating Hospital Revenue Loss via Real-time Clinical Reconciliation',
    category: 'Revenue Cycle Management',
    summary: 'A deep-technical breakdown of how bridging clinical charting and financial ledgers achieves 0.00% revenue leakage and improves audit speeds.',
    publishedAt: 'June 25, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format',
    content: `
# Zero Leakage: Real-time Clinical-to-Billing Reconciliation

Traditional healthcare management systems operate on a delayed, disconnected architecture. Clinical charts, nursing logs, laboratory orders, and bedside medications reside in disconnected software silos, requiring intensive manual coding and retroactive billing audits. This structural delay accounts for an average of **3% to 8% in hospital revenue leakage** globally.

**Endomatics** solves this structural failure through a unified, event-driven ledger. By treating clinical actions and financial items as a single atomic transaction, we reduce revenue leakage to exactly **0.00%**.

## 1. The Silo Problem in Legacy Hospital IT
In a standard legacy hospital IT ecosystem:
1. A physician prescribes a broad-spectrum antibiotic (e.g., Ceftriaxone IV) on a nursing sheet.
2. The nurse administers the drug but fails to manually log the exact dosage batch code or bed-hour in the billing interface.
3. The pharmacy releases the stock, creating an inventory discrepancy.
4. The patient is discharged with an incomplete invoice, resulting in retroactive audits or complete revenue write-offs.

## 2. The Endomatics Unified Transaction Layer
Our HMS integrates an adaptive transaction protocol. When a medical action is logged:
- **Instant Allocation**: Every administered IV dose, diagnostic scan, and active ward bed-hour is assigned to the patient's unified account ledger in **real-time**.
- **Double-Verification Safety**: Cross-references patient allergy records with pharmaceutical batch expiration limits prior to releasing the ledger event.
- **Auto-Billing**: Eliminates retroactive coding, accelerating patient discharge times by **3.2x**.

\`\`\`json
{
  "event": "CLINICAL_SERVICE_RENDERED",
  "patientId": "pat-8832",
  "ledgerId": "led-7711",
  "item": "Ceftriaxone IV (2g)",
  "billingStatus": "reconciled",
  "leakageRisk": "0.00%"
}
\`\`\`

## Conclusion
True clinical optimization is not just about digital screens; it is about absolute ledger alignment. By binding medical workflows directly to financial ledgers, hospitals achieve complete audit compliance while maintaining superior quality of care.
`
  },
  {
    id: 'art-triage-logistics',
    slug: 'optimizing-emergency-room-throughput-with-predictive-triage',
    title: 'Surgical Throughput: Optimizing Emergency Room Patient Flows with Dynamic Triage',
    category: 'Clinical Operations',
    summary: 'How dynamic priority routing algorithms and live capacity forecasting save an average of 14 minutes per critical pediatric and emergency admission.',
    publishedAt: 'June 21, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop&auto=format',
    content: `
# Surgical Throughput: Optimizing ER Flows with Dynamic Triage

Emergency departments are highly dynamic, non-linear environments. Patient arrival rates, acuity level mixes, and active bed availability fluctuate unpredictably. Traditional static triage protocols (e.g., paper-based emergency scales) fail to adapt to live hospital bottlenecks, resulting in increased wait times, physician burnout, and delayed clinical care.

## 1. Dynamic Routing Algorithms
The Endomatics Emergency Triage Engine acts as an adaptive router:
- **Continuous Intake Parsing**: Parses active registration streams and symptom reports in real-time.
- **Dynamic Prioritization**: Moves away from strict "first-come, first-served" queues to focus on pediatric safety, cardiac warning signs, and critical respiratory metrics.
- **Wait Time Savings**: Triggers predictive routing to save an average of **14 minutes** per critical triage case.

| Metric | Legacy HMS | Endomatics HMS | Improvement |
| :--- | :--- | :--- | :--- |
| **Admission Intake** | 12 minutes | **4 minutes** | **3x Faster** |
| **Critical Triage Routing** | 22 minutes | **8 minutes** | **14 min saved** |
| **ICU Bed Forecasting** | Retroactive | **72h Predictive** | **Proactive Prep** |

## 2. 72-Hour Capacity Planning
By analyzing localized demographic trends, historical hospital intake vectors, and environmental health streams, the capacity planner forecasts emergency room and ICU bed requirements up to 72 hours in advance. This allows charge nurses to dynamically scale on-call shifts, minimizing staffing shortages before bottlenecks manifest.
`
  },
  {
    id: 'art-medication-safety-guard',
    slug: 'reducing-clinical-prescription-errors-via-automated-cross-verification',
    title: 'Medication Safety Guard: Reducing Prescription Errors in High-Volume Wards',
    category: 'Clinical Safety',
    summary: 'A deep look into the double-verification algorithms that prevent medication cross-reactions, allergy conflicts, and pharmacy inventory discrepancies.',
    publishedAt: 'June 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&h=600&fit=crop&auto=format',
    content: `
# Medication Safety Guard: Automated Cross-Verification

Electronic health records (EHRs) are valuable only if they proactively prevent harm. In high-volume wards, clinical staff face constant pressure, leading to an increased frequency of medical prescribing errors.

Our **Medication Safety Guard** is built directly into the doctor’s prescribing workspace:
1. **Interactive Allergy Interception**: The moment a physician types a prescription, the system analyzes the patient’s historical allergy profile.
2. **Batch & Expiry Assurance**: Cross-references pharmacy inventory to verify drug batch viability and expiration metrics in real-time.
3. **99.9% Stock Confidence**: The active inventory predictor automates reorders for essential items (e.g., Ceftriaxone IV), ensuring lifesaving drugs are never out of stock.

Through integrated safety loops, hospitals maintain impeccable patient protection standards without compromising clinical throughput.
`
  },
  {
    id: 'art-cloud-hms-guide',
    slug: 'best-cloud-based-hospital-management-system-software',
    title: 'Selecting the Best Cloud-Based Hospital Management System Software for Enterprise Healthcare',
    category: 'Hospital Systems',
    summary: 'A comprehensive comparative analysis of cloud-based hospital management system software features, EHR integrations, and clinic database architecture.',
    publishedAt: 'June 27, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format',
    content: `
# Selecting the Best Cloud-Based Hospital Management System Software

As healthcare operations scale, hospital administrators must transition from archaic on-premise systems to secure, agile, and efficient **cloud-based hospital management system software (HMS)**. Operating an AI-powered cloud infrastructure ensures seamless communication across outpatient departments (OPD), inpatient departments (IPD), pharmacy channels, and surgical logistics.

This guide analyzes the critical features, selection criteria, and technical architecture of modern **hospital database management systems**.

## 1. Key Features of Top-Tier Hospital Management Software
When comparing the best hospital software solutions, ensure the platform supports the following core workflows:
- **Unified Electronic Health Records (EHR / EMR)**: Seamless medical records retrieval with zero-latency clinical charting.
- **Automated Queue Management**: Smart clinic operating systems that optimize patient intake flows.
- **Enterprise-Grade Database Security**: Complete compliance with HIPAA, HITECH, and global privacy mandates.

## 2. Why Cloud-Based HMS Outperforms Legacy EMR Platforms
Cloud-hosted solutions eliminate expensive hardware overhead and prevent operational downtime:
- **Instant Scaling**: Easily add outpatient clinics, specialized wings, or diagnostic laboratories.
- **High-Performance Telemetry**: Real-time bed occupancy dashboards and critical care vitals alerts.
- **Interoperability**: Standardized API integrations allowing third-party laboratory and radiology connectivity.

Choosing a modern **clinic management system** built on native cloud technologies like Endomatics ensures your medical institution remains agile, responsive, and secure.
`
  },
  {
    id: 'art-medical-billing-rcm',
    slug: 'best-medical-billing-and-coding-software-rcm',
    title: 'The Future of Medical Billing and Coding Software in Revenue Cycle Management (RCM)',
    category: 'Medical Billing',
    summary: 'How automation, autonomous claim scrubbing, and automated ICD-11 coding inside medical billing software prevent insurance claim rejections and recover revenue.',
    publishedAt: 'June 26, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&auto=format',
    content: `
# Modern Medical Billing and Coding Software in Healthcare

In the current healthcare environment, maintaining a healthy financial baseline requires highly integrated **medical billing and coding software**. Traditional manual claims billing processes suffer from administrative delays, coding human errors, and high insurance rejection rates. 

Advanced **Revenue Cycle Management (RCM) software** automates these tedious processes to optimize clinical collections.

## 1. Core Functions of Revenue Cycle Management (RCM) Software
Modern **medical practice management software** must combine clinical action directly with financial ledger mapping:
- **Automated Claims Scrubbing**: Automatically verifies ICD-10 and ICD-11 medical coding formats against national reimbursement schemas to eliminate claim rejections.
- **Multi-Payer Split Ledgering**: Instant calculations of patient co-pays, primary insurances, and secondary deductibles.
- **Real-Time Charge Capture**: Connects bed hours, medication administration, and physician consultations directly to live invoices.

## 2. Preventing Hospital Revenue Leakage with Automation
Integrating **electronic medical billing software** directly with clinical EHR systems recovers lost revenue:
- **Zero Retroactive Audits**: Because coding happens in real-time at the bedside, billing mismatches are caught before claim submission.
- **Faster Reconciliations**: Discharges that previously took hours are completed in under 15 minutes, resulting in a **3.2x faster outpatient cycle**.

By partnering with Endomatics, hospitals utilize enterprise-grade **medical billing software for small practices** and large hospital networks alike to secure maximum financial integrity.
`
  }
];

/**
 * Helper to execute GROQ queries on Sanity if configured, with local fallback
 */
async function querySanity<T>(query: string, fallbackData: T): Promise<T> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch(query);
      if (data && (!Array.isArray(data) || data.length > 0)) {
        return data as T;
      }
    } catch (error) {
      console.warn('[CMS] Sanity query error, falling back to static local data. Query:', query, 'Error:', error);
    }
  }
  return fallbackData;
}

/**
 * Dynamic Content Fetchers (Fully wired to Sanity, falling back gracefully to optimized local data)
 */

export async function getStatsData(): Promise<StatItem[]> {
  const query = `*[_type == "statItem"] | order(id asc) { id, value, suffix, label }`;
  return querySanity<StatItem[]>(query, STATS_DATA);
}

export async function getCoreModules(): Promise<CoreModuleItem[]> {
  const query = `*[_type == "coreModule"] | order(id asc) { id, name, description, iconName }`;
  return querySanity<CoreModuleItem[]>(query, CORE_MODULES);
}

export async function getBillingDetails(): Promise<BillingDetail[]> {
  const query = `*[_type == "billingDetail"] | order(id asc) { id, label, amount, status, color }`;
  return querySanity<BillingDetail[]>(query, BILLING_DETAILS);
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const query = `*[_type == "processStep"] | order(id asc) { id, number, title, description }`;
  return querySanity<ProcessStep[]>(query, PROCESS_STEPS);
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  const query = `*[_type == "testimonial"] | order(id asc) { id, quote, author, role, hospital }`;
  return querySanity<TestimonialItem[]>(query, TESTIMONIALS);
}

export async function getMDXArticles(): Promise<MDXArticle[]> {
  const query = `*[_type == "article"] | order(publishedAt desc) { id, slug, title, category, summary, content, publishedAt, readTime, image }`;
  return querySanity<MDXArticle[]>(query, LOCAL_MDX_ARTICLES);
}
