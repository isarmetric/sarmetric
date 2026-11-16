import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead, serviceJsonLd } from "@/lib/seo";
import { messagesForLocale } from "@/i18n/fromMatches";
import { localizedOfferingBySlug, localizedOfferings } from "@/i18n/localized";
import { getMessages } from "@/i18n/messages";
import { useT, useI18n } from "@/i18n/context";
import type { SolutionDetailContent } from "@/i18n/messages/types";
import type { Offering } from "@/lib/offerings";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ context, params }): { offering: Offering; content: SolutionDetailContent; locale: typeof context.locale } => {
    const offering = localizedOfferingBySlug(context.locale, params.slug);
    const messages = getMessages(context.locale);
    const content = messages.solutionPages[params.slug as keyof typeof messages.solutionPages];
    if (!offering || !content) throw notFound();
    return { offering, content, locale: context.locale };
  },
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    const o = loaderData?.offering;
    const title = o
      ? `${o.title} ${t.meta.solutionTemplate.titleSuffix}`
      : t.solutionDetail.notFound;
    const desc = o
      ? t.meta.solutionTemplate.descriptionTemplate(o.title, o.tagline)
      : t.meta.solutions.description;
    return pageHead({
      title,
      description: desc,
      path: o?.to ?? "/solutions",
      image: o?.image,
      breadcrumbs: o
        ? [
            { name: t.common.home, path: "/" },
            { name: t.nav.solutions, path: "/solutions" },
            { name: o.title, path: o.to },
          ]
        : undefined,
      jsonLd: o
        ? serviceJsonLd({
            name: `${o.title} InSAR monitoring`,
            description: desc,
            path: o.to,
          })
        : [],
    });
  },
  component: SolutionDetail,
  notFoundComponent: () => {
    const t = useT();
    return (
      <SiteLayout>
        <div className="container-x pt-40 pb-32">
          <h1 className="text-display text-section">{t.solutionDetail.notFound}</h1>
          <Link
            to="/solutions"
            className="mt-6 inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
          >
            <ArrowLeft size={16} /> {t.solutionDetail.backToSolutions}
          </Link>
        </div>
      </SiteLayout>
    );
  },
});

function SolutionDetail() {
  const t = useT();
  const { locale } = useI18n();
  const data = Route.useLoaderData();
  const { offering, content } = data;
  const others = localizedOfferings(locale).filter((o) => o.slug !== offering.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${t.solutionDetail.eyebrow} · ${offering.number}`}
        title={offering.tagline}
        subtitle={offering.description}
        image={offering.image}
        imageAlt={offering.title}
        height="tall"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {offering.title}
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl text-foreground/85 leading-snug mb-16">
              {content.intro}
            </p>
            <div className="space-y-16">
              <Block label={t.solutionDetail.challenge} body={content.challenge} />
              <Block label={t.solutionDetail.approach} body={content.approach} />
              <Block label={t.solutionDetail.outcome} body={content.outcome} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {content.metrics.map((m) => (
              <div key={m.label} className="bg-background p-8 md:p-10">
                <div className="text-display text-3xl md:text-5xl mb-3">{m.value}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <h2 className="text-display text-section max-w-3xl mb-16">{t.solutionDetail.includes}</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {content.features.map((f) => (
              <div key={f.title} className="bg-background p-8 md:p-10">
                <h3 className="text-display text-xl md:text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-foreground/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t.solutionDetail.deliverablesEyebrow}
            </div>
            <h2 className="text-display text-section">{t.solutionDetail.deliverables}</h2>
          </div>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {content.deliverables.map((d, i) => (
              <li key={d} className="flex gap-6 py-6">
                <span className="text-xs tracking-[0.3em] text-muted-foreground pt-1 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-foreground/85">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            {t.solutionDetail.useCasesEyebrow}
          </div>
          <h2 className="text-display text-section max-w-3xl mb-16">{t.solutionDetail.useCases}</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {content.useCases.map((u) => (
              <div key={u.title} className="bg-background p-8 md:p-10">
                <h3 className="text-display text-xl md:text-2xl mb-3">{u.title}</h3>
                <p className="text-sm text-foreground/70">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          {t.solutionDetail.otherSolutionsEyebrow}
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={o.to}
              className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[220px]"
            >
              <div className="text-xs tracking-[0.3em] text-muted-foreground">{o.number}</div>
              <div>
                <h3 className="text-display text-2xl md:text-3xl mb-2">{o.title}</h3>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition">
                  {t.solutionDetail.open} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">{label}</div>
      <p className="text-xl md:text-2xl text-foreground/90 leading-snug">{body}</p>
    </div>
  );
}
