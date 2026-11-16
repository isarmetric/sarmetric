# GEO backlog (Generative Engine Optimization)

Canonical site: `https://sarmetrics.pl`  
Stack: TanStack Start (SSR) + file routes under `src/routes/`.

## Already in place (do not redo)

- SSR HTML for crawlers / LLM fetchers
- Absolute canonicals + OG/Twitter via `src/lib/seo.ts` → `pageHead()`
- JSON-LD: Organization, WebSite, BreadcrumbList, Service, FAQPage, DefinedTerm
- FAQ + glossary content (strong for AI Q&A extraction)
- Keyword landings: `/insar-analytics`, `/insar-solutions`, `/space-monitoring`
- `/llms.txt` — `src/routes/llms[.]txt.ts`
- `robots.txt` comment pointing at `/llms.txt`
- Sitemap includes `/llms.txt`
- EN/PL i18n with browser/cookie locale (`src/i18n/`)

## Still to do (priority order)

### P0 — High impact, small effort

1. **Keep `/llms.txt` accurate**
   - Update when offerings, contact, or primary URLs change.
   - Optionally add a short Polish section or note that UI is bilingual (EN default, PL when preferred).

2. **Answer-first blocks on key pages**
   - On `/insar-analytics`, `/insar-solutions`, `/space-monitoring`, `/technology`, `/resources/faq`: add a short “What it is / Who it’s for / What you get” paragraph near the top (2–4 factual sentences, brand named once).
   - Goal: extractable claims for AI overviews (not marketing fluff).

3. **Strengthen Organization entity**
   - In `organizationJsonLd()` (`src/lib/seo.ts`): richer `sameAs` (LinkedIn, GitHub, ESA BIC profile if public), `foundingDate`, `areaServed`, `knowsAbout` (InSAR, SAR, space monitoring).
   - Ensure logo URL in JSON-LD resolves to an absolute public asset.

### P1 — Medium effort

4. **`/llms-full.txt` or machine API snapshot** (optional)
   - Longer plain-text dump of FAQs + glossary definitions for retrieval systems.
   - Or `GET /api/geo` returning JSON (`Organization` + services + FAQ list). Pattern: TanStack server route like `llms[.]txt.ts`.

5. **Citation / authority signals**
   - Visible “About this page” or “Sources” where claims are made (e.g. Sentinel-1 cadence, archive depth).
   - Author or organization byline on educational pages (`/technology`, glossary terms) + `author` meta where truthful.
   - Link out to authoritative third parties (ESA Sentinel-1 docs) sparingly for trust.

6. **Case studies / proof pages**
   - Real AOI results (even anonymized) with measurable outcomes — AI systems prefer citable proof over generic service copy.
   - Add `Article` or `CaseStudy`-style JSON-LD when published.

7. **hreflang / locale URLs for GEO+SEO**
   - Today locale is cookie/`Accept-Language` only (same URL). For clearer AI/search locale targeting, consider `/pl/...` prefixes + `hreflang` + update `llms.txt` with both language entry points.

### P2 — Nice to have

8. **AI crawler policy**
   - Explicit `robots.txt` rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended — allow or disallow intentionally (legal/product decision).
   - Document the decision in this file when made.

9. **Monitoring**
   - Periodically ask ChatGPT / Claude / Perplexity / Google AI Overview: “What is SAR Metrics?”, “InSAR analytics providers Poland”.
   - Log misrepresentations; fix `llms.txt` + FAQ/landing copy first.

10. **Changelog for LLMs**
    - Tiny `/changelog` or dated “Last updated” on key pages so models can prefer fresher sources.

## Out of scope / not GEO

- Backlink campaigns, paid directories (off-site SEO)
- Full CMS/blog platform (helpful later for topical authority, not required for minimal GEO)
- Changing Cloudflare apex redirects

## Implementation notes for agents

- Prefer server routes for machine-readable files: `src/routes/llms[.]txt.ts`, `robots[.]txt.ts`, `sitemap[.]xml.ts`.
- Reuse `SITE_URL` from `src/lib/seo.ts`.
- User-facing copy lives in `src/i18n/messages/{en,pl}.ts` — update both locales.
- Do not remove existing FAQ/glossary/JSON-LD; extend it.
- After deploy, verify: `https://sarmetrics.pl/llms.txt`, Rich Results / schema validator, and one AI assistant citation test.

## Done when

- [ ] `llms.txt` stays in sync with product reality
- [ ] Top 4–5 pages have explicit extractable fact blocks
- [ ] Organization JSON-LD is entity-complete (`sameAs`, `knowsAbout`, etc.)
- [ ] At least one proof/case asset exists and is linked from landings
- [ ] Locale strategy for AI citation is decided (cookie-only vs `/pl` URLs)
- [ ] AI crawler allow/deny policy is explicit in `robots.txt`
