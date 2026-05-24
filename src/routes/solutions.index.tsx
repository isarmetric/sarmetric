import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { offerings } from "@/lib/offerings";
import hero from "@/assets/hero-solutions.jpg";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — SarMetrics" },
      {
        name: "description",
        content:
          "InSAR-powered monitoring for geohazards, mining, infrastructure, oil & gas and structural movement.",
      },
      { property: "og:title", content: "Solutions — SarMetrics" },
      {
        property: "og:description",
        content:
          "InSAR-powered monitoring across geohazards, mining, infrastructure and energy.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solutions"
        title="One platform. Every asset that doesn't stay still."
        subtitle="Industry-tuned monitoring services built on the same satellite radar foundation."
        image={hero}
        imageAlt="Earth from low orbit"
        height="short"
      />
      <section className="container-x py-20 md:py-28">
        <ul className="divide-y divide-border border-y border-border">
          {offerings.map((o) => (
            <li key={o.slug}>
              <Link
                to={o.to}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-center"
              >
                <div className="md:col-span-1 text-xs tracking-[0.3em] text-muted-foreground">
                  {o.number}
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-display text-3xl md:text-4xl">{o.title}</h2>
                </div>
                <p className="md:col-span-5 text-foreground/70">{o.tagline}</p>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground transition">
                    Open <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
