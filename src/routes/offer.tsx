import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { faqPageJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import satellite from "@/assets/offer/hero.jpg";
import bridgeMap from "@/assets/offer/bridge.jpg";
import corridor from "@/assets/offer/corridor.jpg";
import costGround from "@/assets/offer/cost-ground.jpg";
import costDrone from "@/assets/offer/cost-drone.jpg";
import costInsar from "@/assets/offer/cost-insar.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

const sectorLinks = [
  { key: "critical", to: "/solutions/infrastructure" },
  { key: "energy", to: undefined },
  { key: "roads", to: "/solutions/infrastructure" },
  { key: "rail", to: "/solutions/infrastructure" },
  { key: "construction", to: "/solutions/structural" },
  { key: "generation", to: undefined },
  { key: "fuels", to: "/solutions/oil-gas" },
  { key: "mining", to: "/solutions/mining" },
  { key: "insurance", to: "/solutions/insurance" },
] as const;

export const Route = createFileRoute("/offer")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.offer.title,
      description: t.meta.offer.description,
      path: "/offer",
      image: satellite,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.offer, path: "/offer" },
      ],
      jsonLd: [
        serviceJsonLd({
          name: t.meta.offer.title.split("|")[0].trim(),
          description: t.meta.offer.description,
          path: "/offer",
        }),
        faqPageJsonLd(t.faqs.offer),
      ],
    });
  },
  component: OfferPage,
});

function OfferPage() {
  const t = useT();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.offer.hero.eyebrow}
        title={t.offer.hero.title}
        subtitle={t.offer.hero.subtitle}
        image={satellite}
        imageAlt={t.offer.figures.heroAlt}
      >
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 fade-up">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90"
          >
            {t.offer.hero.primaryCta}
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://demo.sarmetrics.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
          >
            {t.offer.hero.secondaryCta}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </PageHero>

      <section className="grid grid-cols-2 border-y border-border md:grid-cols-4">
        {t.offer.proof.map((item, index) => (
          <div
            key={item.label}
            className={`px-[clamp(1.25rem,4vw,3.5rem)] py-10 md:py-16 ${
              index % 2 === 0 ? "border-r border-border" : ""
            } ${index < 2 ? "border-b border-border md:border-b-0" : ""} ${
              index < 3 ? "md:border-r md:border-border" : ""
            }`}
          >
            <div className="text-display text-3xl md:text-4xl">{item.value}</div>
            <p className="mt-3 text-sm text-foreground/70">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground md:col-span-4">
            {t.offer.economics.eyebrow}
          </div>
          <h2 className="text-display text-section md:col-span-8">{t.offer.economics.title}</h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {t.offer.economics.withoutLabel}
            </div>
            <div className="text-display mt-6 text-5xl md:text-6xl">{t.offer.economics.withoutValue}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">
              {t.offer.economics.withoutUnit}
            </div>
            <p className="mt-6 max-w-md text-foreground/70">{t.offer.economics.withoutBody}</p>
          </div>
          <div className="bg-secondary p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {t.offer.economics.withLabel}
            </div>
            <div className="text-display mt-6 text-5xl md:text-6xl">{t.offer.economics.withValue}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">
              {t.offer.economics.withUnit}
            </div>
            <p className="mt-6 max-w-md text-foreground/75">{t.offer.economics.withBody}</p>
          </div>
        </div>

        <h3 className="text-display mt-16 text-2xl md:text-3xl">{t.offer.economics.pointsTitle}</h3>
        <ol className="mt-8 grid gap-10 md:grid-cols-3">
          {t.offer.economics.points.map((point, index) => (
            <li key={point.title} className="border-t border-border pt-6">
              <div className="mb-4 text-xs tracking-[0.3em] text-muted-foreground">
                0{index + 1}
              </div>
              <h4 className="text-display text-xl">{point.title}</h4>
              <p className="mt-3 text-foreground/70">{point.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">{t.offer.economics.note}</p>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-16 md:py-24">
          <CostComparison
            areaLabel={t.offer.comparison.areaLabel}
            costLabel={t.offer.comparison.costLabel}
            columns={[
              {
                title: t.offer.comparison.ground,
                cost: t.offer.comparison.groundCost,
                image: costGround,
                area: "38%",
                costWidth: "28%",
                costColor: "oklch(0.55 0.04 50)",
              },
              {
                title: t.offer.comparison.drones,
                cost: t.offer.comparison.dronesCost,
                image: costDrone,
                area: "62%",
                costWidth: "100%",
                costColor: "oklch(0.62 0.08 25)",
              },
              {
                title: t.offer.comparison.insar,
                cost: t.offer.comparison.insarCost,
                image: costInsar,
                area: "100%",
                costWidth: "9%",
                costColor: "oklch(0.72 0.08 230)",
              },
            ]}
          />
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">{t.offer.figures.costCaption}</p>
        </div>
      </section>

      <section className="border-t border-border">
        <figure>
          <img
            src={bridgeMap}
            alt={t.offer.figures.bridgeAlt}
            className="max-h-[80vh] w-full object-cover object-center"
          />
          <figcaption className="container-x py-4 text-sm text-muted-foreground">
            {t.offer.figures.bridgeCaption}
          </figcaption>
        </figure>
        <div className="container-x grid gap-16 py-16 md:grid-cols-12 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground md:col-span-4">
            {t.offer.explain.eyebrow}
          </div>
          <div className="space-y-12 md:col-span-8">
            <div>
              <h2 className="text-display text-3xl md:text-4xl">{t.offer.explain.isTitle}</h2>
              <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed">{t.offer.explain.isBody}</p>
            </div>
            <div>
              <h2 className="text-display text-3xl md:text-4xl">{t.offer.explain.forTitle}</h2>
              <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed">{t.offer.explain.forBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="mb-14 grid gap-8 md:grid-cols-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground md:col-span-4">
              {t.offer.benefits.eyebrow}
            </div>
            <h2 className="text-display text-section md:col-span-8">{t.offer.benefits.title}</h2>
          </div>
          <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {t.offer.benefits.items.map((item) => (
              <li key={item.title} className="bg-background p-8 md:p-10">
                <h3 className="text-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-foreground/70">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-3xl border-t border-border pt-8">
            <h3 className="text-display text-2xl">{t.offer.platform.title}</h3>
            <p className="mt-3 text-foreground/70">{t.offer.platform.body}</p>
            <Link
              to="/technology"
              className="mt-6 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm transition-colors hover:border-foreground"
            >
              {t.offer.platform.link}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid border-t border-border md:grid-cols-2">
        <img
          src={corridor}
          alt={t.offer.figures.usesAlt}
          className="h-72 w-full object-cover md:h-full md:min-h-[36rem]"
        />
        <div className="px-[clamp(1.25rem,4vw,3.5rem)] py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.offer.uses.eyebrow}
          </div>
          <h2 className="text-display text-section mt-6">{t.offer.uses.title}</h2>
          <ol className="mt-12 space-y-8">
            {t.offer.uses.items.map((item, index) => (
              <li key={item.title} className="border-t border-border pt-6">
                <div className="mb-3 text-xs tracking-[0.3em] text-muted-foreground">
                  0{index + 1}
                </div>
                <h3 className="text-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-foreground/70">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.offer.sectors.eyebrow}
          </div>
          <h2 className="text-display text-section max-w-4xl">{t.offer.sectors.title}</h2>
          <p className="mt-6 max-w-2xl text-foreground/70">{t.offer.sectors.intro}</p>
          <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {sectorLinks.map((sector) => {
              const item = t.offer.sectors.items[sector.key];
              return (
                <li key={sector.key} className="border-t border-border pt-6">
                  <h3 className="text-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-foreground/70">{item.body}</p>
                  {sector.to ? (
                    <Link
                      to={sector.to}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
                    >
                      {t.common.readMore}
                      <ArrowRight size={14} />
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FaqSection
        eyebrow={t.offer.faqEyebrow}
        title={t.offer.faqTitle}
        faqs={t.faqs.offer}
      />

      <CTASection
        title={t.offer.ctaTitle}
        body={t.offer.ctaBody}
        ctaLabel={t.offer.ctaLabel}
      />
    </SiteLayout>
  );
}

function CostComparison({
  areaLabel,
  costLabel,
  columns,
}: {
  areaLabel: string;
  costLabel: string;
  columns: {
    title: string;
    cost: string;
    image: string;
    area: string;
    costWidth: string;
    costColor: string;
  }[];
}) {
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-8">
      {columns.map((column) => (
        <div key={column.title}>
          <img src={column.image} alt="" className="mb-6 aspect-square w-full object-cover" />
          <h3 className="text-display text-2xl">{column.title}</h3>
          <div className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {areaLabel}
          </div>
          <div className="mt-2 h-px bg-border">
            <div className="h-px bg-foreground/70" style={{ width: column.area }} />
          </div>
          <div className="mt-6 flex items-end justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{costLabel}</span>
            <span className="text-base normal-case tracking-normal text-foreground">{column.cost}</span>
          </div>
          <div className="mt-2 h-px bg-border">
            <div className="h-px" style={{ width: column.costWidth, backgroundColor: column.costColor }} />
          </div>
        </div>
      ))}
    </div>
  );
}
