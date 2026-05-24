import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import hero from "@/assets/hero-technology.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — SarMetrics" },
      {
        name: "description",
        content:
          "How InSAR works: persistent scatterers, satellite SAR archives and millimetric displacement analytics.",
      },
      { property: "og:title", content: "Technology — SarMetrics" },
      {
        property: "og:description",
        content: "Inside the InSAR processing chain that powers SarMetrics analytics.",
      },
      { property: "og:url", content: "/technology" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

const steps = [
  {
    n: "01",
    title: "Acquisition",
    body: "Active radar instruments aboard SAR satellites image the Earth's surface day and night, through cloud and smoke.",
  },
  {
    n: "02",
    title: "Interferometry",
    body: "Pairs of SAR images acquired over the same area are differenced in the complex domain to extract phase change — directly proportional to displacement.",
  },
  {
    n: "03",
    title: "Persistent scatterers",
    body: "Stable reflectors — rooftops, infrastructure, exposed rock — are identified across long time series and tracked individually with millimeter precision.",
  },
  {
    n: "04",
    title: "Analytics & alerting",
    body: "Time series are decomposed into trends, seasonal cycles and anomalies, then surfaced through dashboards, APIs and tuned alerts.",
  },
];

const products = [
  { title: "Wide-area baseline", body: "Regional displacement maps refreshed on a cadence you choose." },
  { title: "Focused monitoring", body: "High-resolution acquisitions over critical assets with dense temporal sampling." },
  { title: "Historical reconstruction", body: "Archive-only studies recovering displacement back to the early 1990s." },
  { title: "API & data delivery", body: "GeoJSON, raster and tabular outputs plus a real-time alerting API." },
];

function TechnologyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        title="Satellite radar, turned into ground intelligence."
        subtitle="A processing chain that compresses petabytes of SAR data into millimetric displacement insight."
        image={hero}
        imageAlt="SAR satellite over Earth"
      />

      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            How it works
          </div>
          <h2 className="md:col-span-8 text-display text-section max-w-3xl">
            Four stages, from raw radar to a decision-ready signal.
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-px bg-border">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-10 md:p-14">
              <div className="text-xs tracking-[0.3em] text-muted-foreground mb-6">
                {s.n}
              </div>
              <h3 className="text-display text-3xl mb-4">{s.title}</h3>
              <p className="text-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Data products
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {products.map((p) => (
              <div key={p.title} className="border-t border-border pt-6">
                <h3 className="text-display text-2xl mb-3">{p.title}</h3>
                <p className="text-foreground/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see the data on your asset?"
        ctaLabel="Request a sample"
      />
    </SiteLayout>
  );
}
