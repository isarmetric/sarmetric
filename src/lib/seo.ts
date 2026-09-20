import defaultOgImage from "@/assets/hero-home.jpg";
import logo from "@/assets/sarmetrics-logo.webp";
import { glossarySlugs } from "@/content/glossary";

export const SITE_URL = "https://sarmetrics.pl";
export const SITE_NAME = "SAR Metrics";
export const DEFAULT_OG_IMAGE = defaultOgImage;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized.replace(/\/$/, "") || "/"}`;
}

function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(logo),
    email: "kontakt@sarmetrics.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chmielna II",
      addressLocality: "Warsaw",
      postalCode: "00-020",
      addressCountry: "PL",
    },
    sameAs: ["https://demo.sarmetrics.pl"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Millimetric ground intelligence from space. InSAR analytics for geohazards, mining, infrastructure and energy.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: "InSAR monitoring",
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function definedTermJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    inDefinedTermSet: absoluteUrl("/resources/glossary"),
  };
}

export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  breadcrumbs,
  jsonLd = [],
}: PageHeadOptions) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const extra = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const scripts = [
    ...(breadcrumbs?.length ? [jsonLdScript(breadcrumbJsonLd(breadcrumbs))] : []),
    ...extra.map(jsonLdScript),
  ];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}

/** All indexable paths for sitemap generation. */
export function getSitemapPaths(): { path: string; priority: number; changefreq: string }[] {
  return [
    { path: "/", priority: 1, changefreq: "weekly" },
    { path: "/llms.txt", priority: 0.5, changefreq: "monthly" },
    { path: "/solutions", priority: 0.9, changefreq: "weekly" },
    { path: "/solutions/infrastructure", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/mining", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/insurance", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/oil-gas", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/geohazards", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/structural", priority: 0.8, changefreq: "monthly" },
    { path: "/technology", priority: 0.9, changefreq: "monthly" },
    { path: "/insar-analytics", priority: 0.95, changefreq: "monthly" },
    { path: "/insar-solutions", priority: 0.95, changefreq: "monthly" },
    { path: "/space-monitoring", priority: 0.95, changefreq: "monthly" },
    { path: "/resources", priority: 0.85, changefreq: "weekly" },
    { path: "/resources/glossary", priority: 0.8, changefreq: "monthly" },
    ...glossarySlugs.map((slug) => ({
      path: `/resources/glossary/${slug}`,
      priority: 0.7,
      changefreq: "monthly",
    })),
    { path: "/resources/faq", priority: 0.8, changefreq: "monthly" },
    { path: "/about", priority: 0.6, changefreq: "monthly" },
    { path: "/contact", priority: 0.7, changefreq: "monthly" },
  ];
}
