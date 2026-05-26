import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import hero from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SarMetrics" },
      {
        name: "description",
        content:
          "Tell us about the asset or region you need to monitor. We'll show what InSAR can reveal.",
      },
      { property: "og:title", content: "Contact — SarMetrics" },
      {
        property: "og:description",
        content: "Get in touch with the SarMetrics team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Warsaw", line1: "Chmielna II", line2: "00-020 Warsaw, Poland" },
];

const industries = ["Geohazards", "Mining", "Infrastructure", "Oil & Gas", "Structural", "Other"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to see."
        subtitle="A short note is enough — we'll come back with the right people and a plan."
        image={hero}
        imageAlt="Earth horizon"
        height="short"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <form
            className="md:col-span-7 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Name" name="name" />
            <Field label="Work email" name="email" type="email" />
            <Field label="Company" name="company" />
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Industry
              </label>
              <select
                name="industry"
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition appearance-none"
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-background">
                  Select
                </option>
                {industries.map((i) => (
                  <option key={i} value={i} className="bg-background text-foreground">
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                What do you need to monitor?
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition resize-none"
                required
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm hover:opacity-90 transition disabled:opacity-50"
                disabled={sent}
              >
                {sent ? "Thanks — we'll be in touch." : "Send message"}
              </button>
            </div>
          </form>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-border">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Office
            </div>
            <ul className="space-y-8">
              {offices.map((o) => (
                <li key={o.city}>
                  <div className="text-display text-2xl mb-1">{o.city}</div>
                  <div className="text-sm text-foreground/70">{o.line1}</div>
                  <div className="text-sm text-foreground/70">{o.line2}</div>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-border text-sm text-foreground/70 space-y-3">
              <div>
                General enquiries
                <div className="text-foreground mt-1">kontakt@sarmetrics.pl</div>
              </div>
              <div>
                Tobiasz Bator
                <div className="text-foreground mt-1">tobiasz.bator@sarmetrics.pl</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition"
      />
    </div>
  );
}
