import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/sarmetrics-logo.webp";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/technology", label: "Technology" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-24 items-center justify-between md:h-28">
        <Link
          to="/"
          className="flex flex-col items-start gap-2 text-foreground md:flex-row md:items-center md:gap-6"
          aria-label="SAR Metrics home"
        >
          {/* SAR Metrics branding */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-12 w-auto invert md:h-14"
            />

            <span className="text-display text-sm tracking-[0.3em] md:text-base">
              SAR METRICS
            </span>
          </div>

          {/* Separator shown on desktop */}
          <div
            className="hidden h-8 w-px bg-white/25 md:block"
            aria-hidden="true"
          />

          {/* ESA BIC Poland logo */}
          <img
            src={esaBicPolandLogo}
            alt="ESA Business Incubation Centre Poland"
            className="h-6 w-auto object-contain opacity-95 md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
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
          className="-mr-2 p-2 text-foreground md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
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