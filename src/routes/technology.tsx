import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";

export const Route = createFileRoute("/technology")({
  head: () =>
    pageHead({
      title: "InSAR Analytics Technology — SAR Metrics",
      description:
        "How InSAR analytics works: persistent scatterers, satellite SAR archives and millimetric displacement for space monitoring.",
      path: "/technology",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Technology", path: "/technology" },
      ],
    }),
  component: TechnologyPage,
});

const steps = [
  {
    n: "01",
    title: "Acquisition",
    body: "Active radar instruments aboard SAR satellites image the Earth's surface day and night, through cloud and smoke — the foundation of space monitoring.",
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
    body: "Time series are decomposed into trends, seasonal cycles and anomalies, then surfaced through dashboards, APIs and tuned alerts — InSAR analytics operators can act on.",
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
        title="InSAR analytics from satellite radar."
        subtitle="A processing chain that compresses petabytes of SAR data into millimetric displacement insight for operational space monitoring."
        image={hero}
        imageAlt="SAR satellite over Earth enabling InSAR analytics"
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
        <p className="mt-12 max-w-3xl text-foreground/70">
          Dig deeper in our{" "}
          <Link to="/resources/glossary" className="underline underline-offset-4 hover:text-foreground">
            InSAR glossary
          </Link>
          , explore{" "}
          <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
            InSAR analytics
          </Link>
          , or see industry{" "}
          <Link to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
            InSAR solutions
          </Link>
          .
        </p>
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
          <p className="mt-12 text-foreground/70">
            Compare wide-area and focused approaches on our{" "}
            <Link to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
              space monitoring
            </Link>{" "}
            page, or browse{" "}
            <Link to="/solutions" className="underline underline-offset-4 hover:text-foreground">
              industry solutions
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Want to see the data on your asset?"
        ctaLabel="Request a sample"
      />
    </SiteLayout>
  );
}
