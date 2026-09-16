export const LOCALES = ["en", "pl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "pl";
}

/** Pick en|pl from Accept-Language / navigator languages. Default: en. */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header?.trim()) return DEFAULT_LOCALE;

  const parts = header
    .split(",")
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const quality = qParam ? Number.parseFloat(qParam.split("=")[1] ?? "1") : 1;
      return {
        tag: (rawTag ?? "").trim().toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((p) => p.tag)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of parts) {
    if (tag === "pl" || tag.startsWith("pl-")) return "pl";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }

  return DEFAULT_LOCALE;
}

export function readLocaleCookie(cookieHeader: string | null | undefined): Locale | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;\s*)locale=(pl|en)(?:;|$)/i);
  return match ? (match[1].toLowerCase() as Locale) : null;
}

export function localeCookieValue(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
