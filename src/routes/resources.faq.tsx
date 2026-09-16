import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { siteFaqs } from "@/content/faq";
import { faqPageJsonLd, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/resources/faq")({
  head: () =>
    pageHead({
      title: "InSAR & Space Monitoring FAQ | SAR Metrics",
      description:
        "FAQ on InSAR analytics, millimetric accuracy, weather independence, industries, data delivery and how to start with SAR Metrics.",
      path: "/resources/faq",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "FAQ", path: "/resources/faq" },
      ],
      jsonLd: faqPageJsonLd(siteFaqs),
    }),
  component: ResourcesFaqPage,
});

function ResourcesFaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Questions teams ask before deploying InSAR."
        subtitle="Straight answers on capability, coverage and delivery — with links into deeper resources."
        image={hero}
        imageAlt="Contact and FAQ context for SAR Metrics"
        height="short"
      />

      <FaqSection eyebrow="Answers" title="Frequently asked questions" faqs={siteFaqs} />

      <section className="container-x pb-16">
        <p className="max-w-3xl text-foreground/70">
          Prefer definitions? Browse the{" "}
          <Link to="/resources/glossary" className="underline underline-offset-4 hover:text-foreground">
            glossary
          </Link>
          . For product pages, see{" "}
          <Link to="/insar-analytics" className="underline underline-offset-4 hover:text-foreground">
            InSAR analytics
          </Link>
          ,{" "}
          <Link to="/insar-solutions" className="underline underline-offset-4 hover:text-foreground">
            InSAR solutions
          </Link>
          , and{" "}
          <Link to="/space-monitoring" className="underline underline-offset-4 hover:text-foreground">
            space monitoring
          </Link>
          .
        </p>
      </section>

      <CTASection title="Didn't find your answer?" ctaLabel="Ask us directly" />
    </SiteLayout>
  );
}
