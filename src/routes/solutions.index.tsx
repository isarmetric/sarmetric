import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { offerings } from "@/lib/offerings";
import { pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-solutions.jpg";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    pageHead({
      title: "InSAR Solutions — SAR Metrics",
      description:
        "InSAR solutions for geohazards, mining, infrastructure, insurance, oil & gas and structural movement — millimetric monitoring from space.",
      path: "/solutions",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "InSAR solutions", path: "/solutions" },
      ],
      jsonLd: serviceJsonLd({
        name: "InSAR solutions",
        description:
          "Industry-tuned InSAR monitoring services for critical assets and regions.",
        path: "/solutions",
      }),
    }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="InSAR solutions"
        title="InSAR solutions for every critical asset."
        subtitle="Industry-tuned monitoring services built on satellite radar — from individual structures to entire regions."
        image={hero}
        imageAlt="Earth from low orbit for InSAR solutions"
        height="short"
      />
      <section className="container-x py-20 md:py-28">
        <p className="mb-12 max-w-3xl text-foreground/70">
          Each vertical below is an InSAR solution designed for how that industry
          manages risk. For a broader overview, see{" "}
          <Link to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
            InSAR solutions
          </Link>{" "}
          and{" "}
          <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
            InSAR analytics
          </Link>
          .
        </p>
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
