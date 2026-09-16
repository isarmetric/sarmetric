import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT, useI18n } from "@/i18n/context";
import { localizedOfferings } from "@/i18n/localized";

export const Route = createFileRoute("/insar-analytics")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.insarAnalytics.title,
      description: t.meta.insarAnalytics.description,
      path: "/insar-analytics",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.footer.capabilities.insarAnalytics, path: "/insar-analytics" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: t.footer.capabilities.insarAnalytics,
          description: t.meta.insarAnalytics.description,
          path: "/insar-analytics",
        }),
        faqPageJsonLd(t.faqs.insarAnalytics),
      ],
    });
  },
  component: InsarAnalyticsPage,
});

function InsarAnalyticsPage() {
  const t = useT();
  const { locale } = useI18n();
  const offerings = localizedOfferings(locale);

  const sections = [
    {
      title: t.landings.insarAnalytics.sections.problem.title,
      body: t.landings.insarAnalytics.sections.problem.paragraphs,
    },
    {
      title: t.landings.insarAnalytics.sections.howWeDeliver.title,
      body: t.landings.insarAnalytics.sections.howWeDeliver.paragraphs,
    },
    {
      title: t.landings.insarAnalytics.sections.whatYouReceive.title,
      body: t.landings.insarAnalytics.sections.whatYouReceive.paragraphs,
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.landings.insarAnalytics.hero.eyebrow}
        title={t.landings.insarAnalytics.hero.title}
        subtitle={t.landings.insarAnalytics.hero.subtitle}
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
            {t.landings.insarAnalytics.industries.title}
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
          {t.landings.insarAnalytics.footer.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
            if (part === 'insarSolutions') {
              acc.push(
                <Link key={i} to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                  {t.landings.insarAnalytics.footerLinks.insarSolutions}
                </Link>
              );
            } else if (part === 'spaceMonitoring') {
              acc.push(
                <Link key={i} to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
                  {t.landings.insarAnalytics.footerLinks.spaceMonitoring}
                </Link>
              );
            } else if (part === 'glossary') {
              acc.push(
                <Link key={i} to="/resources/glossary/$term" params={{ term: 'insar' }} className="underline underline-offset-4 hover:text-foreground">
                  {t.landings.insarAnalytics.footerLinks.glossary}
                </Link>
              );
            } else if (part) {
              acc.push(part);
            }
            return acc;
          }, [])}
        </p>
      </section>

      <FaqSection
        title={t.landings.insarAnalytics.faqTitle}
        faqs={t.faqs.insarAnalytics}
      />
      <CTASection
        title={t.landings.insarAnalytics.ctaTitle}
        ctaLabel={t.landings.insarAnalytics.ctaLabel}
      />
    </SiteLayout>
  );
}
