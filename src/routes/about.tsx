import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-about.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/about")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.about.title,
      description: t.meta.about.description,
      path: "/about",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.about, path: "/about" },
      ],
    });
  },
  component: AboutPage,
});

function AboutPage() {
  const t = useT();

  const values = [
    { n: "01", title: t.about.values.measurementFirst.title, body: t.about.values.measurementFirst.body },
    { n: "02", title: t.about.values.operatorGrade.title, body: t.about.values.operatorGrade.body },
    { n: "03", title: t.about.values.openByDefault.title, body: t.about.values.openByDefault.body },
  ];

  const timeline = [
    { year: t.about.timeline.seasat.year, title: t.about.timeline.seasat.title, body: t.about.timeline.seasat.body },
    { year: t.about.timeline.ers.year, title: t.about.timeline.ers.title, body: t.about.timeline.ers.body },
    { year: t.about.timeline.psinsar.year, title: t.about.timeline.psinsar.title, body: t.about.timeline.psinsar.body },
    { year: t.about.timeline.sentinel.year, title: t.about.timeline.sentinel.title, body: t.about.timeline.sentinel.body },
    { year: t.about.timeline.commercial.year, title: t.about.timeline.commercial.title, body: t.about.timeline.commercial.body },
    { year: t.about.timeline.founded.year, title: t.about.timeline.founded.title, body: t.about.timeline.founded.body },
    { year: t.about.timeline.esaBic.year, title: t.about.timeline.esaBic.title, body: t.about.timeline.esaBic.body },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.about.hero.eyebrow}
        title={t.about.hero.title}
        subtitle={t.about.hero.subtitle}
        image={hero}
        imageAlt="Mission control consoles"
        height="short"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.about.valuesEyebrow}
          </div>
          <ul className="md:col-span-8 space-y-12">
            {values.map((v) => (
              <li key={v.n} className="border-t border-border pt-6">
                <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                  {v.n}
                </div>
                <h3 className="text-display text-2xl md:text-3xl mb-3">{v.title}</h3>
                <p className="text-foreground/70 max-w-2xl">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            {t.about.timelineEyebrow}
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {timeline.map((t) => (
              <li key={t.year} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-2 text-display text-2xl">{t.year}</div>
                <div className="md:col-span-3 text-foreground">{t.title}</div>
                <div className="md:col-span-7 text-foreground/70">{t.body}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title={t.about.ctaTitle} ctaLabel={t.about.ctaLabel} />
    </SiteLayout>
  );
}
