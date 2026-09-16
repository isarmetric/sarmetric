import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { offerings } from "@/lib/offerings";
import { insarSolutionsFaqs } from "@/content/faq";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-solutions.jpg";

export const Route = createFileRoute("/insar-solutions")({
  head: () =>
    pageHead({
      title: "InSAR Solutions for Industry & Infrastructure | SAR Metrics",
      description:
        "InSAR solutions for infrastructure, mining, insurance, oil & gas, geohazards and structural movement — operational monitoring from satellite radar.",
      path: "/insar-solutions",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "InSAR solutions", path: "/insar-solutions" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: "InSAR solutions",
          description:
            "Industry-tuned InSAR monitoring programs for critical assets and regions.",
          path: "/insar-solutions",
        }),
        faqPageJsonLd(insarSolutionsFaqs),
      ],
    }),
  component: InsarSolutionsPage,
});

function InsarSolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="InSAR solutions"
        title="InSAR solutions built for how industries manage risk."
        subtitle="One satellite-radar foundation. Six operational offerings tuned for the decisions your teams already make."
        image={hero}
        imageAlt="Earth observation context for InSAR solutions"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            Why dedicated InSAR solutions
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            <p>
              Generic displacement maps rarely fit operator workflows. Infrastructure
              owners need lifecycle context; mines need thresholded alerts; insurers
              need independent evidence; energy teams need reservoir-scale trends.
            </p>
            <p>
              SAR Metrics packages InSAR analytics into industry solutions — same
              rigorous processing, different monitoring design, deliverables and
              language. Compare the technical foundation on{" "}
              <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                InSAR analytics
              </Link>{" "}
              and{" "}
              <Link to="/technology" className="underline underline-offset-4 hover:text-foreground">
                technology
              </Link>
              .
            </p>
          </div>
        </div>

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
                <p className="md:col-span-5 text-foreground/70">{o.description}</p>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground transition">
                    Open <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-3xl text-foreground/70">
          Prefer a capability-first view? See{" "}
          <Link to="/solutions" className="underline underline-offset-4 hover:text-foreground">
            all solutions
          </Link>{" "}
          or learn how{" "}
          <Link to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
            space monitoring
          </Link>{" "}
          scales from basins to buildings.
        </p>
      </section>

      <FaqSection title="InSAR solutions FAQ" faqs={insarSolutionsFaqs} />
      <CTASection
        title="Design an InSAR solution for your portfolio."
        ctaLabel="Contact us"
      />
    </SiteLayout>
  );
}
