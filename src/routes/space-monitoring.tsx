import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { spaceMonitoringFaqs } from "@/content/faq";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/space-monitoring")({
  head: () =>
    pageHead({
      title: "Space Monitoring with Satellite SAR & InSAR | SAR Metrics",
      description:
        "Space monitoring from satellite radar: wide-area and focused InSAR programs that measure ground and structural movement through weather and darkness.",
      path: "/space-monitoring",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Space monitoring", path: "/space-monitoring" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "Space monitoring",
          description:
            "Operational satellite SAR monitoring for ground and structural movement at regional and asset scale.",
          path: "/space-monitoring",
        }),
        faqPageJsonLd(spaceMonitoringFaqs),
      ],
    }),
  component: SpaceMonitoringPage,
});

const modes = [
  {
    title: "Wide-area screening",
    body: "Map displacement across corridors, basins and cities to find hotspots before you instrument every site. Ideal for geohazard programs, network owners and portfolio risk.",
  },
  {
    title: "Focused asset monitoring",
    body: "Increase revisit and spatial detail over pits, dams, plants, bridges and districts once priority locations are known — with thresholds tuned to each asset.",
  },
  {
    title: "Historical reconstruction",
    body: "Recover years of movement from SAR archives to establish baselines, support claims and understand how an area behaved before your sensors existed.",
  },
];

function SpaceMonitoringPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Space monitoring"
        title="Space monitoring that sees movement from orbit."
        subtitle="Satellite SAR watches assets and regions day and night, through cloud — then InSAR analytics turns those acquisitions into operational ground intelligence."
        image={hero}
        imageAlt="Earth horizon illustrating space monitoring from orbit"
      />

      <section className="container-x py-24 md:py-32 space-y-20">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            Why monitor from space
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            <p>
              Ground networks are precise but sparse. Optical satellites help with
              context but fail under cloud and at night. Space monitoring with SAR
              fills the gap: consistent revisit, weather independence, and coverage
              from individual façades to entire regions.
            </p>
            <p>
              SAR Metrics operates that stack as a service — acquisition strategy,
              InSAR processing, analytics and delivery — so engineering and risk
              teams get signals they can act on. Read more about{" "}
              <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                InSAR analytics
              </Link>{" "}
              and packaged{" "}
              <Link to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                InSAR solutions
              </Link>
              .
            </p>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Monitoring modes
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {modes.map((mode) => (
              <div key={mode.title} className="border-t border-border pt-6">
                <h3 className="text-display text-2xl mb-3">{mode.title}</h3>
                <p className="text-foreground/70">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 border-t border-border pt-16">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            From orbit to action
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            <p>
              Space monitoring is only useful if it reaches the people who decide.
              We deliver GeoJSON, rasters, tables, dashboards and alerting APIs —
              and we design AOIs around how you already inspect and escalate risk.
            </p>
            <p>
              Start with a sample AOI, review archive history, then move to an
              operational cadence. Explore the{" "}
              <Link to="/technology" className="underline underline-offset-4 hover:text-foreground">
                processing chain
              </Link>
              , browse the{" "}
              <Link to="/resources/glossary/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
                space monitoring glossary term
              </Link>
              , or{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
                contact the team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FaqSection title="Space monitoring FAQ" faqs={spaceMonitoringFaqs} />
      <CTASection
        title="Put space monitoring on your assets."
        body="Tell us the region or facility. We'll show what satellite SAR and InSAR can already reveal."
        ctaLabel="Request a briefing"
      />
    </SiteLayout>
  );
}
