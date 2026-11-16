import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/sarmetrics-logo.webp";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";
import { useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n/locale";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const nav = [
    { to: "/solutions", label: t.nav.solutions },
    { to: "/offer", label: t.nav.offer },
    { to: "/technology", label: t.nav.technology },
    { to: "/resources", label: t.nav.resources },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    setLocale(next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6 md:h-24">
        <Link
          to="/"
          className="flex min-w-0 shrink items-center gap-3 text-foreground lg:gap-5"
          aria-label="SAR Metrics home"
        >
          <img
            src={logo}
            alt=""
            className="h-10 w-auto shrink-0 invert md:h-12"
          />

          <div
            className="hidden h-7 w-px shrink-0 bg-white/25 sm:block"
            aria-hidden="true"
          />

          <img
            src={esaBicPolandLogo}
            alt="ESA Business Incubation Centre Poland"
            className="hidden h-7 w-auto max-w-[140px] object-contain object-left opacity-95 sm:block md:h-8 md:max-w-[160px] lg:max-w-[180px]"
          />
        </Link>

        <div className="hidden shrink-0 items-center gap-5 lg:flex xl:gap-8">
          <nav className="flex items-center gap-5 xl:gap-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap text-sm text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{
                  className: "text-foreground",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LanguageToggle locale={locale} onChange={switchLocale} label={t.common.language} />
        </div>

        <button
          type="button"
          className="-mr-2 shrink-0 p-2 text-foreground lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="container-x flex flex-col gap-5 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground/85 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle
              locale={locale}
              onChange={switchLocale}
              label={t.common.language}
              className="pt-2"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  locale,
  onChange,
  label,
  className = "",
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 text-xs tracking-[0.2em] uppercase ${className}`}>
      <span className="sr-only">{label}</span>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={
          locale === "en"
            ? "text-foreground"
            : "text-foreground/45 transition-colors hover:text-foreground/80"
        }
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className="text-foreground/30" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => onChange("pl")}
        className={
          locale === "pl"
            ? "text-foreground"
            : "text-foreground/45 transition-colors hover:text-foreground/80"
        }
        aria-pressed={locale === "pl"}
      >
        PL
      </button>
    </div>
  );
}
