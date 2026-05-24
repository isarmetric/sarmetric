import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to see what's moving?",
  body = "Tell us about the asset or region you need to monitor. We'll show what InSAR can reveal.",
  ctaLabel = "Talk to our team",
  to = "/contact",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  to?: string;
}) {
  return (
    <section className="container-x py-24 md:py-36">
      <div className="border-t border-border pt-16 md:pt-24 grid md:grid-cols-12 gap-8 items-end">
        <h2 className="text-display text-section md:col-span-8">{title}</h2>
        <div className="md:col-span-4 md:text-right">
          <p className="text-foreground/70 mb-6">{body}</p>
          <Link
            to={to}
            className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 hover:border-foreground pb-1 transition-colors"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
