import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/resources/")({
  head: () =>
    pageHead({
      title: "Resources — InSAR Glossary, FAQ & Guides | SAR Metrics",
      description:
        "Learn InSAR analytics, space monitoring and satellite radar: glossary, FAQ and guides from SAR Metrics.",
      path: "/resources",
      image: hero,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
      ],
    }),
  component: ResourcesPage,
});

const hubs = [
  {
    to: "/resources/glossary",
    title: "Glossary",
    body: "Definitions for InSAR, PS-InSAR, SAR, interferometry, space monitoring and related terms.",
  },
  {
    to: "/resources/faq",
    title: "FAQ",
    body: "Practical answers on accuracy, weather independence, industries, delivery and getting started.",
  },
  {
    to: "/insar-analytics",
    title: "InSAR analytics",
    body: "How displacement intelligence is produced and used across critical assets.",
  },
  {
    to: "/insar-solutions",
    title: "InSAR solutions",
    body: "Industry-tuned monitoring programs built on satellite radar.",
  },
  {
    to: "/space-monitoring",
    title: "Space monitoring",
    body: "Wide-area and focused monitoring from orbit for movement risk.",
  },
  {
    to: "/technology",
    title: "Technology",
    body: "The four-stage chain from SAR acquisition to analytics and alerting.",
  },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title="Understand InSAR before you buy it."
        subtitle="Plain-language references for InSAR analytics, space monitoring and the terms your engineers already use."
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

      <CTASection title="Still have questions?" ctaLabel="Contact us" />
    </SiteLayout>
  );
}
