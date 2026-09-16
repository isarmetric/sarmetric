import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { offerings } from "@/lib/offerings";
import { insarAnalyticsFaqs } from "@/content/faq";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";

export const Route = createFileRoute("/insar-analytics")({
  head: () =>
    pageHead({
      title: "InSAR Analytics — Millimetric Ground Intelligence | SAR Metrics",
      description:
        "InSAR analytics from satellite radar: displacement maps, time series and alerts for infrastructure, mining, energy and geohazards.",
      path: "/insar-analytics",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "InSAR analytics", path: "/insar-analytics" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "InSAR analytics",
          description:
            "Satellite radar interferometry processed into displacement maps, time series and operational alerts.",
          path: "/insar-analytics",
        }),
        faqPageJsonLd(insarAnalyticsFaqs),
      ],
    }),
  component: InsarAnalyticsPage,
});

const sections = [
  {
    title: "The problem InSAR analytics solves",
    body: [
      "Critical assets move slowly until they don’t. Subsidence, slope creep and structural settlement often stay invisible until inspection windows or failure events catch up.",
      "InSAR analytics gives operators a continuous measurement layer: where the ground and structures are moving, how fast, and whether the pattern is accelerating — without waiting to instrument every kilometer.",
    ],
  },
  {
    title: "How SAR Metrics produces the signal",
    body: [
      "We stack SAR acquisitions, form interferograms, select persistent scatterers and convert phase change into millimetric line-of-sight displacement.",
      "Analytics then separate trends, seasonality and anomalies, and deliver maps, point histories and alerts through dashboards and APIs. Learn the full chain on our technology page.",
    ],
  },
  {
    title: "What you receive",
    body: [
      "Wide-area baselines for screening, focused monitoring for priority assets, historical reconstruction from archives, and delivery formats your engineers already use.",
      "Results are designed for geotechnical, asset and risk workflows — not research notebooks.",
    ],
  },
];

function InsarAnalyticsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="InSAR analytics"
        title="InSAR analytics that turns radar into decisions."
        subtitle="Millimetric displacement intelligence from space — maps, time series and alerts for teams who manage movement risk."
        image={hero}
        imageAlt="Satellite radar supporting InSAR analytics"
      />

      <section className="container-x py-24 md:py-32 space-y-20">
        {sections.map((section) => (
          <div key={section.title} className="grid md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
              {section.title}
            </h2>
            <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-12 gap-10 border-t border-border pt-16">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            Industries that rely on the analytics
          </h2>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {offerings.map((o) => (
              <li key={o.slug} className="border-t border-border pt-4">
                <Link
                  to={o.to}
                  className="group inline-flex items-center gap-2 text-display text-2xl hover:text-foreground"
                >
                  {o.title}
                  <ArrowRight
                    size={16}
                    className="opacity-50 transition group-hover:opacity-100"
                  />
                </Link>
                <p className="mt-2 text-sm text-foreground/65">{o.tagline}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-3xl text-foreground/70">
          Explore packaged{" "}
          <Link to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
            InSAR solutions
          </Link>
          ,{" "}
          <Link to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
            space monitoring
          </Link>
          , or the{" "}
          <Link to="/resources/glossary/insar" className="underline underline-offset-4 hover:text-foreground">
            InSAR glossary entry
          </Link>
          .
        </p>
      </section>

      <FaqSection
        title="InSAR analytics questions"
        faqs={insarAnalyticsFaqs}
      />
      <CTASection
        title="See InSAR analytics on your AOI."
        ctaLabel="Talk to our team"
      />
    </SiteLayout>
  );
}
