import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTASection";
import { offerings } from "@/lib/offerings";
import heroHome from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SarMetrics — Millimetric ground intelligence from space" },
      {
        name: "description",
        content:
          "InSAR analytics for geohazards, mining, infrastructure and energy. Wide-area, millimeter-precision ground monitoring.",
      },
      { property: "og:title", content: "SarMetrics — Earth observation & InSAR" },
      {
        property: "og:description",
        content:
          "Wide-area, millimeter-precision ground monitoring from satellite SAR.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const capabilities = [
  {
    n: "01",
    title: "Millimetric precision",
    body: "Line-of-sight measurement of ground and structural displacement, precise to 1 mm.",
  },
  {
    n: "02",
    title: "Wide-area coverage",
    body: "Monitor entire basins, transport corridors and urban regions in a single processing run.",
  },
  {
    n: "03",
    title: "24/7 SAR acquisition",
    body: "Active radar imagery through cloud, smoke and night — independent of weather.",
  },
  {
    n: "04",
    title: "Historical archive",
    body: "Reconstruct displacement back to the early 1990s using stacked SAR archives.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 starfield" aria-hidden="true" />
        <img
          src={heroHome}
          alt="Satellite over Earth's horizon"
          className="absolute inset-0 w-full h-full object-cover earth-drift"
          loading="eager"
        />
        <div className="absolute inset-0 space-glow" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="satellite" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/5 to-background" />
        <div className="container-x relative pb-20 md:pb-32 pt-32 w-full">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 fade-up">
            Earth observation · InSAR analytics
          </div>
          <h1 className="text-display text-hero max-w-5xl fade-up">
            Ground intelligence that supports the decisions that move the world.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 fade-up">
            SarMetrics operates a satellite-radar analytics platform that measures
            ground and structural movement down to the millimeter — anywhere,
            day or night, in any weather.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 fade-up">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm hover:opacity-90 transition"
            >
              Explore solutions <ArrowRight size={16} />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition"
            >
              How InSAR works <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Solutions
          </div>
          <h2 className="md:col-span-9 text-display text-section max-w-4xl">
            From individual structures to entire regions — monitor what moves,
            before it matters.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {offerings.map((o) => (
            <Link
              key={o.slug}
              to={o.to}
              className="group relative bg-background aspect-[4/5] md:aspect-[5/6] overflow-hidden"
            >
              <img
                src={o.image}
                alt={o.title}
                className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-background/5" />
              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div className="text-xs tracking-[0.3em] text-foreground/80">
                  {o.number}
                </div>
                <div>
                  <h3 className="text-display text-3xl md:text-5xl mb-3">
                    {o.title}
                  </h3>
                  <p className="text-sm text-foreground/85 max-w-md">
                    {o.tagline}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/90 group-hover:text-foreground">
                    Read more <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Capabilities
            </div>
            <h2 className="text-display text-section">
              Built for scale, tuned for precision.
            </h2>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {capabilities.map((c) => (
              <li key={c.n} className="border-t border-border pt-6">
                <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                  {c.n}
                </div>
                <h3 className="text-display text-2xl mb-3">{c.title}</h3>
                <p className="text-sm text-foreground/70">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
