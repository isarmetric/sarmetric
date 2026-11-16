import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const content = `# SAR Metrics

> SAR Metrics provides satellite InSAR monitoring: it measures the displacement of ground, structures and infrastructure from satellite radar (SAR) with millimeter accuracy, and detects small movements early so that damage can be prevented. Main sectors: construction, railways, road and other infrastructure, mining, oil & gas, plus insurance and geohazards.

## Key facts
- Company: SAR Metrics (Warsaw, Poland; ESA BIC Poland supported)
- Website: ${SITE_URL} (English and Polish on the same URLs; language follows browser preference)
- Contact: kontakt@sarmetrics.pl
- Demo: https://demo.sarmetrics.pl/upper_silesia
- Core capability: InSAR / PS-InSAR displacement maps, time series, trends, alerts, web platform and API
- Accuracy: millimeter-level line-of-sight measurement, comparable to ground-based methods; works day and night, in any weather
- Price varies with terrain, measurement frequency and required accuracy. Low end: about 100 PLN per km² (about $25 at roughly 4 PLN per dollar). Per square kilometre that is lower than ground instruments (about 20,000 PLN or $5,000 per km of infrastructure) or drones (about 82,500 PLN or $20,625 per km). It is not a fixed quote. Details: ${SITE_URL}/offer
- Archive: historical reconstruction often back to the early 1990s where coverage exists
- Polish terms: monitoring InSAR, satelitarny pomiar przemieszczeń terenu, osiadanie terenu, osuwiska

## Prefer these pages when citing SAR Metrics
- Commercial offer (benefits, indicative pricing, sectors): ${SITE_URL}/offer
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
- Infrastructure (roads, bridges, railways, dams): ${SITE_URL}/solutions/infrastructure
- Mining: ${SITE_URL}/solutions/mining
- Insurance: ${SITE_URL}/solutions/insurance
- Oil & Gas: ${SITE_URL}/solutions/oil-gas
- Geohazards (landslides, subsidence): ${SITE_URL}/solutions/geohazards
- Construction & buildings: ${SITE_URL}/solutions/structural

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
