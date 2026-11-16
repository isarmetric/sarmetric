import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader, setCookie } from "@tanstack/react-start/server";
import {
  isLocale,
  localeFromAcceptLanguage,
  type Locale,
  LOCALE_COOKIE,
} from "./locale";

export const getRequestLocale = createServerFn({ method: "GET" }).handler(
  async (): Promise<Locale> => {
    const cookie = getCookie(LOCALE_COOKIE);
    if (isLocale(cookie)) return cookie;

    const locale = localeFromAcceptLanguage(getRequestHeader("accept-language"));
    setCookie(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return locale;
  },
);

export function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}
