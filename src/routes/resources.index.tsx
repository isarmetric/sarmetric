import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-about.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/resources/")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.resources.title,
      description: t.meta.resources.description,
      path: "/resources",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.resources, path: "/resources" },
      ],
    });
  },
  component: ResourcesPage,
});

function ResourcesPage() {
  const t = useT();

  const hubs = [
    {
      to: "/resources/glossary",
      title: t.resources.hubs.glossary.title,
      body: t.resources.hubs.glossary.body,
    },
    {
      to: "/resources/faq",
      title: t.resources.hubs.faq.title,
      body: t.resources.hubs.faq.body,
    },
    {
      to: "/insar-analytics",
      title: t.resources.hubs.insarAnalytics.title,
      body: t.resources.hubs.insarAnalytics.body,
    },
    {
      to: "/insar-solutions",
      title: t.resources.hubs.insarSolutions.title,
      body: t.resources.hubs.insarSolutions.body,
    },
    {
      to: "/space-monitoring",
      title: t.resources.hubs.spaceMonitoring.title,
      body: t.resources.hubs.spaceMonitoring.body,
    },
    {
      to: "/technology",
      title: t.resources.hubs.technology.title,
      body: t.resources.hubs.technology.body,
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.resources.hero.eyebrow}
        title={t.resources.hero.title}
        subtitle={t.resources.hero.subtitle}
        image={hero}
        imageAlt="Mission context for SAR Metrics resources"
        height="short"
      />

      <section className="container-x py-20 md:py-28">
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {hubs.map((hub) => (
            <li key={hub.to} className="border-t border-border pt-6">
              <Link to={hub.to} className="group block">
                <h2 className="text-display text-3xl mb-3 inline-flex items-center gap-2">
                  {hub.title}
                  <ArrowRight
                    size={18}
                    className="opacity-40 transition group-hover:opacity-100"
                  />
                </h2>
                <p className="text-foreground/70">{hub.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection title={t.resources.ctaTitle} ctaLabel={t.resources.ctaLabel} />
    </SiteLayout>
  );
}
