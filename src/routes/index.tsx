import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTASection";
import { offerings } from "@/lib/offerings";
import heroHome from "@/assets/hero-home.jpg";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAR Metrics — Millimetric ground intelligence from space" },
      {
        name: "description",
        content:
          "InSAR analytics for geohazards, mining, infrastructure and energy. Wide-area, millimeter-precision ground monitoring.",
      },
      { property: "og:title", content: "SAR Metrics — Earth observation & InSAR" },
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
    body: "Line-of-sight measurement of ground and structural displacement, precise to milimeters.",
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
            
          </div>
          <h1 className="text-display text-hero max-w-5xl fade-up">
            Measure movement. Manage risk.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 fade-up">
            SAR Metrics operates a satellite-radar system that measures
            ground and structural movement down to the millimeter — anywhere,
            day or night, in any weather.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 fade-up">
            <a
              href="https://demo.sarmetrics.pl/upper_silesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90"
            >
              Explore demo
              <ArrowUpRight size={16} />
            </a>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition"
            >
              How InSAR works <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="container-x py-8 md:py-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Supported by
              </div>

              <p className="max-w-md text-sm text-foreground/65">
                SAR Metrics is supported by the European Space Agency Business Incubation Centre
                Poland.
              </p>
            </div>

            <img
              src={esaBicPolandLogo}
              alt="ESA Business Incubation Centre Poland"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Solutions
          </div>
          <h2 className="md:col-span-9 text-display text-section max-w-4xl">
            From individual structures to entire regions - monitor movement before it becomes a risk.
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
