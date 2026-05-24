import { Link } from "@tanstack/react-router";
import logo from "@/assets/sarmetrics-logo.webp";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SarMetrics" className="h-7 w-auto invert" />
            <div className="text-display tracking-[0.3em] text-foreground">SARMETRICS</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Earth observation and InSAR analytics for decisions that move ground.
          </p>
        </div>
        <FooterCol
          title="Solutions"
          items={[
            { to: "/solutions/geohazards", label: "Geohazards" },
            { to: "/solutions/mining", label: "Mining" },
            { to: "/solutions/infrastructure", label: "Infrastructure" },
            { to: "/solutions/oil-gas", label: "Oil & Gas" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { to: "/technology", label: "Technology" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Office
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Warsaw</li>
            <li>Chmielna II, 00-020</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} SarMetrics. All rights reserved.</span>
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
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
        {title}
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-foreground/80 hover:text-foreground transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
