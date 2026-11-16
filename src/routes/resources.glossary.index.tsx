import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT, useI18n } from "@/i18n/context";
import { localizedGlossary } from "@/i18n/localized";

export const Route = createFileRoute("/resources/glossary/")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.glossary.title,
      description: t.meta.glossary.description,
      path: "/resources/glossary",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.resources, path: "/resources" },
        { name: t.resources.hubs.glossary.title, path: "/resources/glossary" },
      ],
    });
  },
  component: GlossaryIndexPage,
});

function GlossaryIndexPage() {
  const t = useT();
  const { locale } = useI18n();
  const glossaryTerms = localizedGlossary(locale);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.glossary.index.hero.eyebrow}
        title={t.glossary.index.hero.title}
        subtitle={t.glossary.index.hero.subtitle}
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
          {t.glossary.index.footer.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
            if (part === 'faq') {
              acc.push(
                <Link key={i} to="/resources/faq" className="underline underline-offset-4 hover:text-foreground">
                  {t.glossary.index.footerLink}
                </Link>
              );
            } else if (part) {
              acc.push(part);
            }
            return acc;
          }, [])}
        </p>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
