## Concept

A marketing site for a (fictional) InSAR / satellite ground-monitoring company that mirrors **TRE Altamira's offerings** (geohazards, ground & structural movement, mining, civil infrastructure, oil & gas / reservoirs) presented in the **ICEYE dark-cinematic aesthetic**: near-black backgrounds, oversized white display type, generous negative space, full-bleed satellite/earth imagery, restrained motion.

## Pages (separate TanStack routes, each with own SEO head)

```
/                 Home — hero + offerings showcase + capabilities + CTA
/solutions        Overview of all industry solutions
/solutions/geohazards
/solutions/mining
/solutions/infrastructure
/solutions/oil-gas
/technology       InSAR / satellite monitoring explained
/about            Company story, mission
/contact          Contact form + offices
```

Header nav: Solutions, Technology, About, Contact. Sticky transparent → solid on scroll.

## Sections per page

**Home**
- Full-viewport hero: dark satellite/earth image, oversized white headline, short subhead, single CTA
- "Offerings" — 5 large image-led cards (one per TRE Altamira theme), hover reveal
- Capabilities strip: mm-precision, wide-area coverage, 24/7 SAR, historical archive (numbered list, ICEYE-style)
- Featured solution split-screen (image left, copy right)
- CTA band + footer

**Solution pages**
- Cinematic hero with industry image
- Problem → approach → outcome narrative
- 3-up feature grid
- Related case snippet + CTA

**Technology**
- How InSAR works (stepped sections)
- Data products list
- Satellite/coverage visual

**About / Contact**
- About: mission, values, timeline
- Contact: form (name, company, industry select, message) + office cards

## Design system (src/styles.css)

- Background `oklch(0.08 0 0)` near-black; foreground near-white
- Accent: subtle cool white/blue-tint only; no bright color
- Type: large display sans (Inter/Geist-like) — hero `clamp(3rem, 8vw, 7rem)`, tight tracking
- Generous spacing, thin 1px borders at `white/10`
- Subtle fade-in on scroll, no flashy motion

## Images

Generated via imagegen (dark, cinematic, satellite/earth/industrial themes) saved to `src/assets/` — one hero per page + 5 offering cards.

## Technical notes

- TanStack Start file-based routes under `src/routes/`
- Each route file sets unique `head()` meta (title, description, og:*)
- Shared `Header` and `Footer` components in `src/components/site/`
- All colors via semantic tokens in `src/styles.css` (oklch), no hardcoded hex in components
- No backend / Cloud needed (contact form posts to a `createServerFn` stub that logs — can be wired to email later)

## Out of scope (ask if wanted)

- Real contact form delivery (email integration)
- CMS / blog
- Multi-language (PL/EN toggle)
- Auth / customer portal
