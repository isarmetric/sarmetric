import { Link } from "@tanstack/react-router";

import logo from "@/assets/sarmetrics-logo.webp";
import esaBicPolandLogo from "@/assets/esa-bic-poland-white.png";
import { useT } from "@/i18n/context";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-x grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="SAR Metrics home">
            <img src={logo} alt="" className="h-7 w-auto invert" />

            <div className="text-display tracking-[0.3em] text-foreground">SAR METRICS</div>
          </Link>

          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>

          <div className="mt-8 border-t border-border/70 pt-5">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {t.footer.supportedBy}
            </div>

            <img
              src={esaBicPolandLogo}
              alt="ESA Business Incubation Centre Poland"
              className="h-auto w-full max-w-[230px] object-contain opacity-90"
            />
          </div>
        </div>

        <FooterCol
          title={t.footer.solutionsTitle}
          items={[
            { to: "/solutions/infrastructure", label: t.footer.solutions.infrastructure },
            { to: "/solutions/mining", label: t.footer.solutions.mining },
            { to: "/solutions/insurance", label: t.footer.solutions.insurance },
            { to: "/solutions/oil-gas", label: t.footer.solutions.oilGas },
            { to: "/solutions/geohazards", label: t.footer.solutions.geohazards },
            { to: "/solutions/structural", label: t.footer.solutions.structural },
          ]}
        />

        <FooterCol
          title={t.footer.capabilitiesTitle}
          items={[
            { to: "/insar-analytics", label: t.footer.capabilities.insarAnalytics },
            { to: "/insar-solutions", label: t.footer.capabilities.insarSolutions },
            { to: "/space-monitoring", label: t.footer.capabilities.spaceMonitoring },
            { to: "/technology", label: t.footer.capabilities.technology },
            { to: "/offer", label: t.footer.capabilities.offer },
          ]}
        />

        <FooterCol
          title={t.footer.resourcesTitle}
          items={[
            { to: "/resources", label: t.footer.resources.overview },
            { to: "/resources/glossary", label: t.footer.resources.glossary },
            { to: "/resources/faq", label: t.footer.resources.faq },
            { to: "/about", label: t.footer.resources.about },
            { to: "/contact", label: t.footer.resources.contact },
          ]}
        />

        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            {t.footer.officeTitle}
          </div>

          <ul className="space-y-2 text-sm text-foreground/80">
            <li>{t.footer.office.city}</li>
            <li>{t.footer.office.line1}</li>
            {t.footer.office.line2 ? <li>{t.footer.office.line2}</li> : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>{t.footer.copyright.replace("{year}", String(year))}</span>

          <span>{t.footer.footerTagline}</span>
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
      <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>

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
