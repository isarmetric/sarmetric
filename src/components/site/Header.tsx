import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/sarmetrics-logo.webp";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/technology", label: "Technology" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

        <nav className="hidden shrink-0 items-center gap-5 lg:flex xl:gap-8">
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
          </nav>
        </div>
      )}
    </header>
  );
}
