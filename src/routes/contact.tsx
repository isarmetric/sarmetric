import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-contact.jpg";
import { messagesForLocale } from "@/i18n/fromMatches";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/contact")({
  loader: ({ context }) => ({ locale: context.locale }),
  head: ({ loaderData }) => {
    const t = messagesForLocale(loaderData?.locale);
    return pageHead({
      title: t.meta.contact.title,
      description: t.meta.contact.description,
      path: "/contact",
      image: hero,
      breadcrumbs: [
        { name: t.common.home, path: "/" },
        { name: t.nav.contact, path: "/contact" },
      ],
    });
  },
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const industries = [
    t.contact.form.industries.infrastructure,
    t.contact.form.industries.mining,
    t.contact.form.industries.insurance,
    t.contact.form.industries.oilGas,
    t.contact.form.industries.geohazards,
    t.contact.form.industries.structural,
    t.contact.form.industries.other,
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
        image={hero}
        imageAlt="Earth horizon"
        height="short"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <form
            className="md:col-span-7 space-y-8"
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              setError(null);

              const formData = new FormData(e.target);
              formData.append("access_key", "1f177b95-4020-49a1-a523-08c52bbbba5d");

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                const data = await response.json();
                if (data.success) {
                  setSent(true);
                } else {
                  setError(data.error || "Form submission failed");
                  console.error("Form submission failed:", data);
                }
              } catch (error) {
                setError("Network error. Please try again.");
                console.error("Error submitting form:", error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <Field label={t.contact.form.nameLabel} name="name" />
            <Field label={t.contact.form.emailLabel} name="email" type="email" />
            <Field label={t.contact.form.companyLabel} name="company" />
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {t.contact.form.industryLabel}
              </label>
              <select
                name="industry"
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition appearance-none"
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-background">
                  {t.contact.form.industryPlaceholder}
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
                {t.contact.form.messageLabel}
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
                disabled={sent || submitting}
              >
                {sent ? t.contact.form.submitSuccess : submitting ? t.contact.form.submitSending : t.contact.form.submitIdle}
              </button>
              {error && <p className="mt-2 text-sm text-destructive">{t.contact.form.errorMessage}</p>}
            </div>
          </form>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-border">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              {t.contact.officeEyebrow}
            </div>
            <ul className="space-y-8">
              <li>
                <div className="text-display text-2xl mb-1">{t.footer.office.city}</div>
                <div className="text-sm text-foreground/70">{t.footer.office.line1}</div>
                {t.footer.office.line2 && <div className="text-sm text-foreground/70">{t.footer.office.line2}</div>}
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-border text-sm text-foreground/70 space-y-3">
              <div>
                {t.contact.generalEnquiries}
                <div className="text-foreground mt-1">{t.contact.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
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
