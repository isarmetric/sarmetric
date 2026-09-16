import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { glossaryTerms } from "@/content/glossary";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";

export const Route = createFileRoute("/resources/glossary/")({
  head: () =>
    pageHead({
      title: "InSAR & Space Monitoring Glossary | SAR Metrics",
      description:
        "Glossary of InSAR, PS-InSAR, SAR, interferometry, ground deformation, space monitoring and related Earth-observation terms.",
      path: "/resources/glossary",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Glossary", path: "/resources/glossary" },
      ],
    }),
  component: GlossaryIndexPage,
});

function GlossaryIndexPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Glossary"
        title="InSAR and space monitoring terms."
        subtitle="Short definitions you can share with stakeholders — each term expands into a full explainer."
        image={hero}
        imageAlt="SAR context for the InSAR glossary"
        height="short"
      />

      <section className="container-x py-20 md:py-28">
        <ul className="divide-y divide-border border-y border-border">
          {glossaryTerms.map((term) => (
            <li key={term.slug}>
              <Link
                to="/resources/glossary/$term"
                params={{ term: term.slug }}
                className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 group"
              >
                <h2 className="md:col-span-4 text-display text-2xl md:text-3xl group-hover:text-foreground">
                  {term.term}
                </h2>
                <p className="md:col-span-8 text-foreground/70">{term.shortDefinition}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-foreground/60">
          Looking for answers instead of definitions? See the{" "}
          <Link to="/resources/faq" className="underline underline-offset-4 hover:text-foreground">
            FAQ
          </Link>
          .
        </p>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
