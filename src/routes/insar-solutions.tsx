import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-solutions.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT, useI18n } from "@/i18n/context";
import { localizedOfferings } from "@/i18n/localized";

export const Route = createFileRoute("/insar-solutions")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.insarSolutions.title,
      description: t.meta.insarSolutions.description,
      path: "/insar-solutions",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.footer.capabilities.insarSolutions, path: "/insar-solutions" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: t.footer.capabilities.insarSolutions,
          description: t.meta.insarSolutions.description,
          path: "/insar-solutions",
        }),
        faqPageJsonLd(t.faqs.insarSolutions),
      ],
    });
  },
  component: InsarSolutionsPage,
});

function InsarSolutionsPage() {
  const t = useT();
  const { locale } = useI18n();
  const offerings = localizedOfferings(locale);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.landings.insarSolutions.hero.eyebrow}
        title={t.landings.insarSolutions.hero.title}
        subtitle={t.landings.insarSolutions.hero.subtitle}
        image={hero}
        imageAlt="Earth observation context for InSAR solutions"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            {t.landings.insarSolutions.whyDedicated.title}
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            {t.landings.insarSolutions.whyDedicated.paragraphs.map((p, i) => {
              const parts = p.split(/\{|\}/);
              return (
                <p key={i}>
                  {parts.reduce<React.ReactNode[]>((acc, part, j) => {
                    if (part === 'insarAnalytics') {
                      acc.push(
                        <Link key={j} to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.insarSolutions.whyDedicated.links.insarAnalytics}
                        </Link>
                      );
                    } else if (part === 'technology') {
                      acc.push(
                        <Link key={j} to="/technology" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.insarSolutions.whyDedicated.links.technology}
                        </Link>
                      );
                    } else if (part) {
                      acc.push(part);
                    }
                    return acc;
                  }, [])}
                </p>
              );
            })}
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
                    {t.landings.insarSolutions.open} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-3xl text-foreground/70">
          {t.landings.insarSolutions.footer.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
            if (part === 'allSolutions') {
              acc.push(
                <Link key={i} to="/solutions" className="underline underline-offset-4 hover:text-foreground">
                  {t.landings.insarSolutions.footerLinks.allSolutions}
                </Link>
              );
            } else if (part === 'spaceMonitoring') {
              acc.push(
                <Link key={i} to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
                  {t.landings.insarSolutions.footerLinks.spaceMonitoring}
                </Link>
              );
            } else if (part) {
              acc.push(part);
            }
            return acc;
          }, [])}
        </p>
      </section>

      <FaqSection title={t.landings.insarSolutions.faqTitle} faqs={t.faqs.insarSolutions} />
      <CTASection
        title={t.landings.insarSolutions.ctaTitle}
        ctaLabel={t.landings.insarSolutions.ctaLabel}
      />
    </SiteLayout>
  );
}
