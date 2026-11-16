import { offerings as offeringMeta } from "@/lib/offerings";
import type { Locale } from "./locale";
import { getMessages } from "./messages";
import { glossaryTerms as glossaryMeta } from "@/content/glossary";

export function localizedOfferings(locale: Locale) {
  const t = getMessages(locale).offerings;
  return offeringMeta.map((o) => {
    const copy = t[o.slug as keyof typeof t];
    return {
      ...o,
      title: copy.title,
      tagline: copy.tagline,
      description: copy.description,
    };
  });
}

export function localizedOfferingBySlug(locale: Locale, slug: string) {
  return localizedOfferings(locale).find((o) => o.slug === slug);
}

export function localizedGlossary(locale: Locale) {
  const terms = getMessages(locale).glossary.terms;
  return glossaryMeta.map((g) => {
    const copy = terms[g.slug as keyof typeof terms];
    return {
      ...g,
      term: copy.term,
      shortDefinition: copy.shortDefinition,
      body: copy.body,
    };
  });
}

export function localizedGlossaryBySlug(locale: Locale, slug: string) {
  return localizedGlossary(locale).find((g) => g.slug === slug);
}
