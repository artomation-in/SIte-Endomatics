import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const ARTICLE_SLUGS = [
  'eliminating-revenue-leakage-indian-hospitals-tpa-pmjay',
  'abdm-nabh-digital-readiness-checklist-india',
  'eliminating-hospital-revenue-leakage-via-realtime-reconciliation',
  'optimizing-emergency-room-throughput-with-predictive-triage',
  'reducing-clinical-prescription-errors-via-automated-cross-verification',
  'best-cloud-based-hospital-management-system-software',
  'best-medical-billing-and-coding-software-rcm',
];

const INDIA_CITIES = ['hyderabad', 'bengaluru', 'mumbai', 'delhi-ncr', 'chennai', 'pune', 'ahmedabad', 'kolkata'];

const ROUTES = [
  '/',
  '/features',
  '/hms-india',
  ...INDIA_CITIES.map((c) => `/hms-india/${c}`),
  '/abdm-integration',
  '/compare',
  '/clinic-management-software-india',
  '/insights',
  '/privacy',
  '/terms',
  ...ARTICLE_SLUGS.map((s) => `/insights/${s}`),
];

const SITE_URL = 'https://endomatics.com';

function stripRouteHeadTags(html) {
  return html
    .replace(/\s*<title>.*?<\/title>/s, '')
    .replace(/\s*<meta[^>]*name="description"[^>]*\/?\s*>/i, '')
    .replace(/\s*<link[^>]*rel="canonical"[^>]*\/?\s*>/i, '')
    .replace(/\s*<link[^>]*rel="alternate"[^>]*hreflang="[^"]*"[^>]*\/?\s*>/gi, '')
    .replace(/\s*<meta[^>]*property="og:[^"]*"[^>]*\/?\s*>/gi, '')
    .replace(/\s*<meta[^>]*name="twitter:[^"]*"[^>]*\/?\s*>/gi, '')
    .replace(/\s*<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i, '');
}

function buildRouteHead(head, route) {
  const url = `${SITE_URL}${route === '/' ? '/' : route}`;
  const jsonLd = head && head.jsonLd ? JSON.stringify(head.jsonLd) : '';
  const ogType = route.startsWith('/insights/') ? 'article' : 'website';
  const title = head?.title || 'Cloud-Based Hospital Management System & Medical Billing Software | ENDOMATICS';
  const description = head?.description || 'Cloud-based hospital management system (HMS) & medical billing software with zero revenue leakage, EHR unification, and 14-day deployment.';

  return [
    `\n    <title>${title}</title>`,
    `    <link rel="canonical" href="${url}" />`,
    `    <link rel="alternate" hreflang="en-IN" href="${url}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${url}" />`,
    `    <meta name="description" content="${description}" />`,
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:type" content="${ogType}" />`,
    `    <meta property="og:site_name" content="ENDOMATICS" />`,
    `    <meta property="og:image" content="${SITE_URL}/og-image.svg" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:image" content="${SITE_URL}/og-image.svg" />`,
    jsonLd ? `    <script type="application/ld+json" id="route-jsonld">${jsonLd}</script>` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

async function main() {
  const server = await createServer({
    configFile: path.join(root, 'vite.config.ts'),
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const { render } = await server.ssrLoadModule('/src/server-entry.tsx');
  const template = await readFile(path.join(root, 'dist', 'index.html'), 'utf-8');

  for (const route of ROUTES) {
    const result = render(route);

    if (route === '/') {
      const withRoot = template.replace(
        '<div id="root"></div>',
        `<div id="root">${result.html}</div>`,
      );
      await writeFile(path.join(root, 'dist', 'index.html'), withRoot, 'utf-8');
      console.log(`[prerender] / -> dist/index.html (injected prerendered SSR markup)`);
      continue;
    }

    if (!result.head) {
      console.warn(`[prerender] No head captured for ${route}`);
    }

    const base = stripRouteHeadTags(template);
    const headBlock = buildRouteHead(result.head, route);
    const withHead = base.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />' + headBlock);
    const withRoot = withHead.replace(
      '<div id="root"></div>',
      `<div id="root">${result.html}</div>`,
    );

    const outPath = route.replace(/^\//, '');
    const targetDir = path.join(root, 'dist', outPath);
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, 'index.html'), withRoot, 'utf-8');

    // Dual-write .html file for hosts that drop trailing slashes (e.g. dist/features.html)
    if (!outPath.includes('/')) {
      await writeFile(path.join(root, 'dist', `${outPath}.html`), withRoot, 'utf-8');
    }

    console.log(`[prerender] ${route} -> dist/${outPath}/index.html`);
  }

  await server.close();
  console.log('[prerender] done.');
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
