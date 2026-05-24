import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import hero from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SarMetrics" },
      {
        name: "description",
        content:
          "SarMetrics turns satellite radar into millimetric ground intelligence for industry, infrastructure and civil protection.",
      },
      { property: "og:title", content: "About — SarMetrics" },
      {
        property: "og:description",
        content: "Who we are and why we measure what moves.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", title: "Measurement first", body: "We trust signals, not narratives. Every claim is backed by data we processed ourselves." },
  { n: "02", title: "Operator-grade", body: "Built to be relied on by geotechnical engineers, civil protection and asset operators." },
  { n: "03", title: "Open by default", body: "Standard formats, documented APIs, reproducible processing. No black boxes." },
];

const timeline = [
  { year: "1978", title: "Seasat", body: "NASA launches the first civilian SAR satellite, proving radar imaging of Earth from orbit." },
  { year: "1992", title: "ERS-1 archive begins", body: "ESA's ERS missions start the continuous SAR archive that still anchors historical InSAR today." },
  { year: "2002", title: "Persistent Scatterer InSAR", body: "PSInSAR techniques unlock millimeter-precision time series over stable reflectors." },
  { year: "2014", title: "Sentinel-1", body: "Free, open, global SAR every 6–12 days turns InSAR from a research tool into an operational service." },
  { year: "2020s", title: "Commercial SAR constellations", body: "High-resolution, high-revisit SAR from commercial operators makes daily monitoring of individual assets viable." },
  { year: "2026", title: "SarMetrics founded", body: "We bring four decades of SAR science into a focused analytics platform for industry and infrastructure." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="We measure what moves, so others can act before it matters."
        subtitle="A team of radar engineers, geoscientists and software builders making Earth observation operational."
        image={hero}
        imageAlt="Mission control consoles"
        height="short"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Values
          </div>
          <ul className="md:col-span-8 space-y-12">
            {values.map((v) => (
              <li key={v.n} className="border-t border-border pt-6">
                <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                  {v.n}
                </div>
                <h3 className="text-display text-2xl md:text-3xl mb-3">{v.title}</h3>
                <p className="text-foreground/70 max-w-2xl">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Timeline
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {timeline.map((t) => (
              <li key={t.year} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-2 text-display text-2xl">{t.year}</div>
                <div className="md:col-span-3 text-foreground">{t.title}</div>
                <div className="md:col-span-7 text-foreground/70">{t.body}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Work with us." ctaLabel="Get in touch" />
    </SiteLayout>
  );
}
