import { Link } from "@tanstack/react-router";

import logo from "@/assets/sarmetrics-logo.webp";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-x grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="SAR Metrics home"
          >
            <img
              src={logo}
              alt=""
              className="h-7 w-auto invert"
            />

            <div className="text-display tracking-[0.3em] text-foreground">
              SAR METRICS
            </div>
          </Link>

          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Measure movement. Manage risk.
          </p>

          <div className="mt-8 border-t border-border/70 pt-5">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Supported by
            </div>

            <img
              src={esaBicPolandLogo}
              alt="ESA Business Incubation Centre Poland"
              className="h-auto w-full max-w-[230px] object-contain opacity-90"
            />
          </div>
        </div>

        <FooterCol
          title="Solutions"
          items={[
            {
              to: "/solutions/geohazards",
              label: "Geohazards",
            },
            {
              to: "/solutions/mining",
              label: "Mining",
            },
            {
              to: "/solutions/infrastructure",
              label: "Infrastructure",
            },
            {
              to: "/solutions/oil-gas",
              label: "Oil & Gas",
            },
          ]}
        />

        <FooterCol
          title="Company"
          items={[
            {
              to: "/technology",
              label: "Technology",
            },
            {
              to: "/about",
              label: "About",
            },
            {
              to: "/contact",
              label: "Contact",
            },
          ]}
        />

        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            Office
          </div>

          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Warsaw</li>
            <li>Chmielna II, 00-020</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} SAR Metrics. All rights reserved.
          </span>

          <span>Millimetric ground intelligence, from space.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: {
    to: string;
    label: string;
  }[];
}) {
  return (
    <div>
      <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </div>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}