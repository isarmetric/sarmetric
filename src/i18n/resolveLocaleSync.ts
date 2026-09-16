import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader, setCookie } from "@tanstack/react-start/server";
import {
  isLocale,
  localeFromAcceptLanguage,
  type Locale,
  LOCALE_COOKIE,
} from "./locale";

/** Sync locale for SSR head() + client — cookie first, then Accept-Language / navigator. */
export const resolveLocaleSync = createIsomorphicFn()
  .server((): Locale => {
    const cookie = getCookie(LOCALE_COOKIE);
    if (isLocale(cookie)) return cookie;

    const locale = localeFromAcceptLanguage(getRequestHeader("accept-language"));
    setCookie(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return locale;
  })
  .client((): Locale => {
    const match = document.cookie.match(/(?:^|;\s*)locale=(pl|en)(?:;|$)/i);
    if (match && isLocale(match[1].toLowerCase())) {
      return match[1].toLowerCase() as Locale;
    }
    const nav = navigator.languages?.join(",") ?? navigator.language ?? "";
    return localeFromAcceptLanguage(nav);
  });
