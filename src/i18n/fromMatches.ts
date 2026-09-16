import type { AnyRouteMatch } from "@tanstack/react-router";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locale";
import { getMessages, type Messages } from "./messages";

export function localeFromMatches(matches: AnyRouteMatch[] | undefined): Locale {
  if (!matches) return DEFAULT_LOCALE;
  for (const match of matches) {
    const ctx = match.context as { locale?: unknown } | undefined;
    if (ctx && isLocale(ctx.locale)) return ctx.locale;
  }
  return DEFAULT_LOCALE;
}

export function messagesFromMatches(matches: AnyRouteMatch[] | undefined): Messages {
  return getMessages(localeFromMatches(matches));
}

export function messagesForLocale(locale: Locale | undefined): Messages {
  return getMessages(isLocale(locale) ? locale : DEFAULT_LOCALE);
}
