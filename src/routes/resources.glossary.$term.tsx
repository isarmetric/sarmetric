import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import {
  glossaryBySlug,
  glossaryTerms,
  type GlossaryTerm,
} from "@/content/glossary";
import { definedTermJsonLd, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";

export const Route = createFileRoute("/resources/glossary/$term")({
  loader: ({ params }): { entry: GlossaryTerm } => {
    const entry = glossaryBySlug(params.term);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    const entry = loaderData?.entry;
    if (!entry) {
      return pageHead({
        title: "Glossary — SAR Metrics",
        description: "InSAR and space monitoring glossary.",
        path: "/resources/glossary",
      });
    }
    const path = `/resources/glossary/${entry.slug}`;
    return pageHead({
      title: `${entry.term}: Definition & InSAR Context | SAR Metrics`,
      description: entry.shortDefinition,
      path,
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Glossary", path: "/resources/glossary" },
        { name: entry.term, path },
      ],
      jsonLd: definedTermJsonLd({
        name: entry.term,
        description: entry.shortDefinition,
        path,
      }),
    });
  },
  component: GlossaryTermPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x pt-40 pb-32">
        <h1 className="text-display text-section">Term not found</h1>
        <Link
          to="/resources/glossary"
          className="mt-6 inline-block text-foreground/80 hover:text-foreground underline underline-offset-4"
        >
          Back to glossary
        </Link>
      </div>
    </SiteLayout>
  ),
});

function GlossaryTermPage() {
  const { entry } = Route.useLoaderData();
  const related = entry.relatedSlugs
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean) as GlossaryTerm[];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Glossary"
        title={entry.term}
        subtitle={entry.shortDefinition}
        image={hero}
        imageAlt={`${entry.term} explained`}
        height="short"
      />

      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
          {entry.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Related terms
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {related.map((term) => (
                <li key={term.slug}>
                  <Link
                    to="/resources/glossary/$term"
                    params={{ term: term.slug }}
                    className="underline underline-offset-4 text-foreground/80 hover:text-foreground"
                  >
                    {term.term}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-12 text-foreground/70">
          <Link to="/resources/glossary" className="underline underline-offset-4 hover:text-foreground">
            All glossary terms
          </Link>
          {" · "}
          <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
            InSAR analytics
          </Link>
          {" · "}
          <Link to="/technology" className="underline underline-offset-4 hover:text-foreground">
            Technology
          </Link>
        </p>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
