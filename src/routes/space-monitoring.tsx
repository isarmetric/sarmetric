import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-home.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/space-monitoring")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.spaceMonitoring.title,
      description: t.meta.spaceMonitoring.description,
      path: "/space-monitoring",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.footer.capabilities.spaceMonitoring, path: "/space-monitoring" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: t.footer.capabilities.spaceMonitoring,
          description: t.meta.spaceMonitoring.description,
          path: "/space-monitoring",
        }),
        faqPageJsonLd(t.faqs.spaceMonitoring),
      ],
    });
  },
  component: SpaceMonitoringPage,
});

function SpaceMonitoringPage() {
  const t = useT();

  const modes = [
    {
      title: t.landings.spaceMonitoring.modes.items.wideArea.title,
      body: t.landings.spaceMonitoring.modes.items.wideArea.body,
    },
    {
      title: t.landings.spaceMonitoring.modes.items.focused.title,
      body: t.landings.spaceMonitoring.modes.items.focused.body,
    },
    {
      title: t.landings.spaceMonitoring.modes.items.historical.title,
      body: t.landings.spaceMonitoring.modes.items.historical.body,
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.landings.spaceMonitoring.hero.eyebrow}
        title={t.landings.spaceMonitoring.hero.title}
        subtitle={t.landings.spaceMonitoring.hero.subtitle}
        image={hero}
        imageAlt="Earth horizon illustrating space monitoring from orbit"
      />

      <section className="container-x py-24 md:py-32 space-y-20">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            {t.landings.spaceMonitoring.whyFromSpace.title}
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            {t.landings.spaceMonitoring.whyFromSpace.paragraphs.map((p, i) => {
              const parts = p.split(/\{|\}/);
              return (
                <p key={i}>
                  {parts.reduce<React.ReactNode[]>((acc, part, j) => {
                    if (part === 'insarAnalytics') {
                      acc.push(
                        <Link key={j} to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.spaceMonitoring.whyFromSpace.links.insarAnalytics}
                        </Link>
                      );
                    } else if (part === 'insarSolutions') {
                      acc.push(
                        <Link key={j} to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.spaceMonitoring.whyFromSpace.links.insarSolutions}
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

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            {t.landings.spaceMonitoring.modes.eyebrow}
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {modes.map((mode) => (
              <div key={mode.title} className="border-t border-border pt-6">
                <h3 className="text-display text-2xl mb-3">{mode.title}</h3>
                <p className="text-foreground/70">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 border-t border-border pt-16">
          <h2 className="md:col-span-4 text-display text-3xl md:text-4xl">
            {t.landings.spaceMonitoring.fromOrbitToAction.title}
          </h2>
          <div className="md:col-span-8 space-y-4 text-foreground/75 leading-relaxed">
            {t.landings.spaceMonitoring.fromOrbitToAction.paragraphs.map((p, i) => {
              const parts = p.split(/\{|\}/);
              return (
                <p key={i}>
                  {parts.reduce<React.ReactNode[]>((acc, part, j) => {
                    if (part === 'technology') {
                      acc.push(
                        <Link key={j} to="/technology" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.spaceMonitoring.fromOrbitToAction.links.technology}
                        </Link>
                      );
                    } else if (part === 'glossary') {
                      acc.push(
                        <Link key={j} to="/resources/glossary/$term" params={{ term: 'space-monitoring' }} className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.spaceMonitoring.fromOrbitToAction.links.glossary}
                        </Link>
                      );
                    } else if (part === 'contact') {
                      acc.push(
                        <Link key={j} to="/contact" className="underline underline-offset-4 hover:text-foreground">
                          {t.landings.spaceMonitoring.fromOrbitToAction.links.contact}
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
      </section>

      <FaqSection title={t.landings.spaceMonitoring.faqTitle} faqs={t.faqs.spaceMonitoring} />
      <CTASection
        title={t.landings.spaceMonitoring.ctaTitle}
        body={t.landings.spaceMonitoring.ctaBody}
        ctaLabel={t.landings.spaceMonitoring.ctaLabel}
      />
    </SiteLayout>
  );
}
