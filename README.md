# ENDOMATICS — Cloud-Based Hospital Management System & Medical Billing Software

Official web presence for **ENDOMATICS** (`https://endomatics.com`), built with React 19, TypeScript, Vite, Tailwind CSS v4, and Cloudflare Pages.

---

## Key Architecture & SEO / AEO / GEO Foundations

- **SSR Pre-rendering**: Automatically generates static, crawlable HTML files for all routes (`/`, `/features`, `/insights`, articles, `/privacy`, `/terms`) at build time.
- **Answer Engine Optimization (AEO)**: Interconnected Schema.org Knowledge Graph (`MedicalOrganization`, `SoftwareApplication`, `WebSite`, `FAQPage`, `BreadcrumbList`, and `SpeakableSpecification` for voice and AI answer engines).
- **Generative Engine Optimization (GEO)**: Machine-readable documentation standard files deployed at:
  - `/llms.txt`: Concise platform context for AI models and search agents.
  - `/llms-full.txt`: Comprehensive full-text knowledge graph with all 5 clinical research articles.
  - `/ai.txt` & `/.well-known/ai-instructions.txt`: Verified operational fact sheet and citation directives.
- **Real-Time Indexing (IndexNow)**: Direct submission to Bing, Yandex, Seznam, and Naver with a single command.
- **Dynamic XML Sitemap**: Automated generation of `sitemap.xml` with Google image metadata and ISO timestamps.

---

## Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the Vite dev server at `http://localhost:3000`. |
| **Production Build** | `npm run build` | Builds client bundle, executes SSR prerendering, and generates sitemap. |
| **Sitemap Generator** | `npm run sitemap` | Regenerates `public/sitemap.xml` and `dist/sitemap.xml`. |
| **IndexNow Broadcast** | `npm run indexnow` | Submits all canonical URLs to the IndexNow endpoint for instant search engine indexing. |
| **Type Check** | `npm run lint` | Runs TypeScript compiler checks without emitting files. |
| **Preview** | `npm run preview` | Previews the production build locally. |

---

## Indexing & Verification Playbook

For step-by-step instructions on verifying domain ownership in Google Search Console and Bing Webmaster Tools, requesting priority indexing, and monitoring AI search citations, see [docs/INDEXING_PLAYBOOK.md](docs/INDEXING_PLAYBOOK.md).
