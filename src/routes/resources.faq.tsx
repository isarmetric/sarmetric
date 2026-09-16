import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { faqPageJsonLd, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-contact.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/resources/faq")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.faq.title,
      description: t.meta.faq.description,
      path: "/resources/faq",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.resources, path: "/resources" },
        { name: t.resources.hubs.faq.title, path: "/resources/faq" },
      ],
      jsonLd: faqPageJsonLd(t.faqs.site),
    });
  },
  component: ResourcesFaqPage,
});

function ResourcesFaqPage() {
  const t = useT();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.faqPage.hero.eyebrow}
        title={t.faqPage.hero.title}
        subtitle={t.faqPage.hero.subtitle}
        image={hero}
        imageAlt="Contact and FAQ context for SAR Metrics"
        height="short"
      />

      <FaqSection eyebrow={t.faqPage.sectionEyebrow} title={t.faqPage.sectionTitle} faqs={t.faqs.site} />

      <section className="container-x pb-16">
        <p className="max-w-3xl text-foreground/70">
          {t.faqPage.footer.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
            if (part === 'glossary') {
              acc.push(
                <Link key={i} to="/resources/glossary" className="underline underline-offset-4 hover:text-foreground">
                  {t.faqPage.footerLinks.glossary}
                </Link>
              );
            } else if (part === 'insarAnalytics') {
              acc.push(
                <Link key={i} to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                  {t.faqPage.footerLinks.insarAnalytics}
                </Link>
              );
            } else if (part === 'insarSolutions') {
              acc.push(
                <Link key={i} to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                  {t.faqPage.footerLinks.insarSolutions}
                </Link>
              );
            } else if (part === 'spaceMonitoring') {
              acc.push(
                <Link key={i} to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
                  {t.faqPage.footerLinks.spaceMonitoring}
                </Link>
              );
            } else if (part) {
              acc.push(part);
            }
            return acc;
          }, [])}
        </p>
      </section>

      <CTASection title={t.faqPage.ctaTitle} ctaLabel={t.faqPage.ctaLabel} />
    </SiteLayout>
  );
}
