import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-solutions.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT, useI18n } from "@/i18n/context";
import { localizedOfferings } from "@/i18n/localized";

export const Route = createFileRoute("/solutions/")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.solutions.title,
      description: t.meta.solutions.description,
      path: "/solutions",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.solutions, path: "/solutions" },
      ],
      jsonLd: serviceJsonLd({
        name: t.nav.solutions,
        description: t.meta.solutions.description,
        path: "/solutions",
      }),
    });
  },
  component: SolutionsPage,
});

function SolutionsPage() {
  const t = useT();
  const { locale } = useI18n();
  const offerings = localizedOfferings(locale);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.solutions.hero.eyebrow}
        title={t.solutions.hero.title}
        subtitle={t.solutions.hero.subtitle}
        image={hero}
        imageAlt="Earth from low orbit for InSAR solutions"
        height="short"
      />
      <section className="container-x py-20 md:py-28">
        <p className="mb-12 max-w-3xl text-foreground/70">
          {t.solutions.intro.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
            if (part === 'insarSolutions') {
              acc.push(
                <Link key={i} to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                  {t.solutions.introLinks.insarSolutions}
                </Link>
              );
            } else if (part === 'insarAnalytics') {
              acc.push(
                <Link key={i} to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                  {t.solutions.introLinks.insarAnalytics}
                </Link>
              );
            } else if (part) {
              acc.push(part);
            }
            return acc;
          }, [])}
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
                    {t.solutions.open} <ArrowRight size={16} />
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
