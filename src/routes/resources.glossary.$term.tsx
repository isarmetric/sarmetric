import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { definedTermJsonLd, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT, useI18n } from "@/i18n/context";
import { localizedGlossaryBySlug, localizedGlossary } from "@/i18n/localized";
import type { GlossaryTerm } from "@/content/glossary";

export const Route = createFileRoute("/resources/glossary/$term")({
  loader: ({ context, params }): { entry: GlossaryTerm; locale: typeof context.locale } => {
    const entry = localizedGlossaryBySlug(context.locale, params.term);
    if (!entry) throw notFound();
    return { entry, locale: context.locale };
  },
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    const entry = loaderData?.entry;
    if (!entry) {
      return pageHead({
        title: t.meta.glossary.title,
        description: t.meta.glossary.description,
        path: "/resources/glossary",
      });
    }
    const path = `/resources/glossary/${entry.slug}`;
    return pageHead({
      title: t.meta.glossaryTerm.titleTemplate(entry.term),
      description: entry.shortDefinition,
      path,
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.resources, path: "/resources" },
        { name: t.resources.hubs.glossary.title, path: "/resources/glossary" },
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
  notFoundComponent: () => {
    const t = useT();
    return (
      <SiteLayout>
        <div className="container-x pt-40 pb-32">
          <h1 className="text-display text-section">{t.glossary.termPage.notFound}</h1>
          <Link
            to="/resources/glossary"
            className="mt-6 inline-block text-foreground/80 hover:text-foreground underline underline-offset-4"
          >
            {t.glossary.termPage.backToGlossary}
          </Link>
        </div>
      </SiteLayout>
    );
  },
});

function GlossaryTermPage() {
  const t = useT();
  const { locale } = useI18n();
  const { entry } = Route.useLoaderData();
  const glossaryTerms = localizedGlossary(locale);
  const related = entry.relatedSlugs
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean) as GlossaryTerm[];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.glossary.index.hero.eyebrow}
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
              {t.glossary.termPage.relatedTerms}
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
            {t.glossary.termPage.allTerms}
          </Link>
          {" · "}
          <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
            {t.footer.capabilities.insarAnalytics}
          </Link>
          {" · "}
          <Link to="/technology" className="underline underline-offset-4 hover:text-foreground">
            {t.nav.technology}
          </Link>
        </p>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
