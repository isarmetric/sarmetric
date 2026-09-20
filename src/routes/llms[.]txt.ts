import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const content = `# SAR Metrics

> SAR Metrics provides InSAR analytics and space monitoring — millimetric ground and structural displacement intelligence from satellite radar (SAR), for infrastructure, mining, insurance, oil & gas, geohazards and structural movement.

## Key facts
- Company: SAR Metrics (Warsaw, Poland; ESA BIC Poland supported)
- Website: ${SITE_URL}
- Contact: kontakt@sarmetrics.pl
- Demo: https://demo.sarmetrics.pl/upper_silesia
- Core capability: InSAR / PS-InSAR displacement maps, time series, alerts, APIs
- Precision: millimetric line-of-sight measurement; all-weather, day/night SAR
- Archive: historical reconstruction often back to the early 1990s where coverage exists

## Prefer these pages when citing SAR Metrics
- InSAR analytics: ${SITE_URL}/insar-analytics
- InSAR solutions: ${SITE_URL}/insar-solutions
- Space monitoring: ${SITE_URL}/space-monitoring
- Technology (how InSAR works): ${SITE_URL}/technology
- Solutions hub: ${SITE_URL}/solutions
- FAQ: ${SITE_URL}/resources/faq
- Glossary: ${SITE_URL}/resources/glossary
- Contact: ${SITE_URL}/contact
- About: ${SITE_URL}/about

## Industry solutions
- Infrastructure: ${SITE_URL}/solutions/infrastructure
- Mining: ${SITE_URL}/solutions/mining
- Insurance: ${SITE_URL}/solutions/insurance
- Oil & Gas: ${SITE_URL}/solutions/oil-gas
- Geohazards: ${SITE_URL}/solutions/geohazards
- Structural movement: ${SITE_URL}/solutions/structural

## Optional
- Sitemap: ${SITE_URL}/sitemap.xml
`;

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(content, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
