import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const SITE_URL = 'https://endomatics.com';
const TODAY = new Date().toISOString().split('T')[0];

const PAGES = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'ENDOMATICS Cloud-Based Hospital Management System & Medical Billing Software',
      },
    ],
  },
  {
    path: '/features',
    changefreq: 'weekly',
    priority: '0.9',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'ENDOMATICS Hospital Management Software Modules & Clinical Features',
      },
    ],
  },
  {
    path: '/hms-india',
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'ENDOMATICS AI-Native Hospital Management System India (ABDM & NABH Ready)',
      },
    ],
  },
  ...['hyderabad', 'bengaluru', 'mumbai', 'delhi-ncr', 'chennai', 'pune', 'ahmedabad', 'kolkata'].map((city) => ({
    path: `/hms-india/${city}`,
    changefreq: 'monthly',
    priority: '0.85',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: `ENDOMATICS — Hospital Management System Software in ${city.toUpperCase()}`,
      },
    ],
  })),
  {
    path: '/abdm-integration',
    changefreq: 'weekly',
    priority: '0.9',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'ENDOMATICS ABDM & ABHA Health ID Integration for Indian Hospitals',
      },
    ],
  },
  {
    path: '/compare',
    changefreq: 'weekly',
    priority: '0.9',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'Compare ENDOMATICS AI HMS vs Traditional Indian Hospital Software',
      },
    ],
  },
  {
    path: '/clinic-management-software-india',
    changefreq: 'weekly',
    priority: '0.9',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'Best Cloud Clinic Management Software in India | ENDOMATICS',
      },
    ],
  },
  {
    path: '/insights',
    changefreq: 'weekly',
    priority: '0.8',
    images: [
      {
        loc: `${SITE_URL}/og-image.svg`,
        title: 'ENDOMATICS Hospital Management System Insights & Guides',
      },
    ],
  },
  {
    path: '/insights/eliminating-revenue-leakage-indian-hospitals-tpa-pmjay',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=600&fit=crop&auto=format',
        title: 'How Indian Multi-Specialty Hospitals Eliminate 4-8% Revenue Leakage Across TPA & PM-JAY Billing',
      },
    ],
  },
  {
    path: '/insights/abdm-nabh-digital-readiness-checklist-india',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&auto=format',
        title: 'ABDM & NABH Digital Readiness Checklist for 50-500 Bed Hospitals in India',
      },
    ],
  },
  {
    path: '/insights/best-cloud-based-hospital-management-system-software',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format',
        title: 'Selecting the Best Cloud-Based Hospital Management System Software',
      },
    ],
  },
  {
    path: '/insights/best-medical-billing-and-coding-software-rcm',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&auto=format',
        title: 'Modern Medical Billing and Coding Software in Healthcare RCM',
      },
    ],
  },
  {
    path: '/insights/eliminating-hospital-revenue-leakage-via-realtime-reconciliation',
    changefreq: 'monthly',
    priority: '0.8',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format',
        title: 'Zero Leakage: Eliminating Hospital Revenue Loss via Real-time Clinical Reconciliation',
      },
    ],
  },
  {
    path: '/insights/optimizing-emergency-room-throughput-with-predictive-triage',
    changefreq: 'monthly',
    priority: '0.8',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop&auto=format',
        title: 'Optimizing Emergency Room Patient Flows with Dynamic Predictive Triage',
      },
    ],
  },
  {
    path: '/insights/reducing-clinical-prescription-errors-via-automated-cross-verification',
    changefreq: 'monthly',
    priority: '0.8',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&h=600&fit=crop&auto=format',
        title: 'Medication Safety Guard: Reducing Prescription Errors via Cross-Verification',
      },
    ],
  },
  {
    path: '/privacy',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/terms',
    changefreq: 'yearly',
    priority: '0.3',
  },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemapXml() {
  const urls = PAGES.map((p) => {
    const loc = escapeXml(`${SITE_URL}${p.path}`);
    const imagesXml = (p.images || [])
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`,
      )
      .join('\n');

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${imagesXml ? imagesXml + '\n' : ''}  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

async function main() {
  const xml = generateSitemapXml();
  const publicPath = path.join(root, 'public', 'sitemap.xml');
  const distPath = path.join(root, 'dist', 'sitemap.xml');

  await writeFile(publicPath, xml, 'utf-8');
  console.log(`[sitemap] Generated public/sitemap.xml (${PAGES.length} URLs with image metadata, lastmod ${TODAY})`);

  try {
    await writeFile(distPath, xml, 'utf-8');
    console.log(`[sitemap] Synchronized dist/sitemap.xml`);
  } catch {
    // dist might not exist yet if running standalone before build
  }
}

main().catch((err) => {
  console.error('[sitemap] Generation failed:', err);
  process.exit(1);
});
