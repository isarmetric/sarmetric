import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-technology.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/technology")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.technology.title,
      description: t.meta.technology.description,
      path: "/technology",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.technology, path: "/technology" },
      ],
    });
  },
  component: TechnologyPage,
});

function TechnologyPage() {
  const t = useT();

  const steps = [
    {
      n: "01",
      title: t.technology.howItWorks.steps.acquisition.title,
      body: t.technology.howItWorks.steps.acquisition.body,
    },
    {
      n: "02",
      title: t.technology.howItWorks.steps.interferometry.title,
      body: t.technology.howItWorks.steps.interferometry.body,
    },
    {
      n: "03",
      title: t.technology.howItWorks.steps.persistentScatterers.title,
      body: t.technology.howItWorks.steps.persistentScatterers.body,
    },
    {
      n: "04",
      title: t.technology.howItWorks.steps.analytics.title,
      body: t.technology.howItWorks.steps.analytics.body,
    },
  ];

  const products = [
    { title: t.technology.dataProducts.items.wideArea.title, body: t.technology.dataProducts.items.wideArea.body },
    { title: t.technology.dataProducts.items.focused.title, body: t.technology.dataProducts.items.focused.body },
    { title: t.technology.dataProducts.items.historical.title, body: t.technology.dataProducts.items.historical.body },
    { title: t.technology.dataProducts.items.api.title, body: t.technology.dataProducts.items.api.body },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.technology.hero.eyebrow}
        title={t.technology.hero.title}
        subtitle={t.technology.hero.subtitle}
        image={hero}
        imageAlt="SAR satellite over Earth enabling InSAR analytics"
      />

      <section className="container-x py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.technology.howItWorks.eyebrow}
          </div>
          <h2 className="md:col-span-8 text-display text-section max-w-3xl">
            {t.technology.howItWorks.title}
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-px bg-border">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-10 md:p-14">
              <div className="text-xs tracking-[0.3em] text-muted-foreground mb-6">
                {s.n}
              </div>
              <h3 className="text-display text-3xl mb-4">{s.title}</h3>
              <p className="text-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-3xl text-foreground/70">
          {t.technology.howItWorks.footer.replace('{glossary}', '')
            .replace('{analytics}', '')
            .replace('{solutions}', '')
            .split(/\{|\}/)
            .reduce<React.ReactNode[]>((acc, part, i) => {
              if (part === 'glossary') {
                acc.push(
                  <Link key={i} to="/resources/glossary" className="underline underline-offset-4 hover:text-foreground">
                    {t.technology.howItWorks.footerLinks.glossary}
                  </Link>
                );
              } else if (part === 'analytics') {
                acc.push(
                  <Link key={i} to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
                    {t.technology.howItWorks.footerLinks.analytics}
                  </Link>
                );
              } else if (part === 'solutions') {
                acc.push(
                  <Link key={i} to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
                    {t.technology.howItWorks.footerLinks.solutions}
                  </Link>
                );
              } else if (part) {
                acc.push(part);
              }
              return acc;
            }, [])}
        </p>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            {t.technology.dataProducts.eyebrow}
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {products.map((p) => (
              <div key={p.title} className="border-t border-border pt-6">
                <h3 className="text-display text-2xl mb-3">{p.title}</h3>
                <p className="text-foreground/70">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-foreground/70">
            {t.technology.dataProducts.footer.split(/\{|\}/).reduce<React.ReactNode[]>((acc, part, i) => {
              if (part === 'spaceMonitoring') {
                acc.push(
                  <Link key={i} to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
                    {t.technology.dataProducts.footerLinks.spaceMonitoring}
                  </Link>
                );
              } else if (part === 'solutions') {
                acc.push(
                  <Link key={i} to="/solutions" className="underline underline-offset-4 hover:text-foreground">
                    {t.technology.dataProducts.footerLinks.solutions}
                  </Link>
                );
              } else if (part) {
                acc.push(part);
              }
              return acc;
            }, [])}
          </p>
        </div>
      </section>

      <CTASection
        title={t.technology.ctaTitle}
        ctaLabel={t.technology.ctaLabel}
      />
    </SiteLayout>
  );
}
