import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { offerings, offeringBySlug } from "@/lib/offerings";

const detail: Record<
  string,
  {
    intro: string;
    challenge: string;
    approach: string;
    outcome: string;
    features: { title: string; body: string }[];
    metrics: { value: string; label: string }[];
    deliverables: string[];
    useCases: { title: string; body: string }[];
  }
> = {
  geohazards: {
    intro:
      "From mountainous terrain to coastal plains, geohazards rarely announce themselves. SAR Metrics turns decades of SAR imagery into a continuously updated atlas of the moving ground — so risk owners can act before motion becomes failure.",
    challenge:
      "Landslides, subsidence and tectonic motion threaten populations and infrastructure across vast, hard-to-survey terrain.",
    approach:
      "Wide-area InSAR screening across entire regions identifies active deformation patterns, then refines hot spots with high-resolution acquisitions.",
    outcome:
      "Civil protection authorities and insurers get a prioritized, continuously updated picture of where the ground is moving — and how fast.",
    features: [
      { title: "Regional screening", body: "Country- and basin-scale baseline maps of ground motion." },
      { title: "Hot-spot refinement", body: "High-resolution focus where movement is detected." },
      { title: "Alerting thresholds", body: "Tunable velocity and acceleration alerts per site." },
    ],
    metrics: [
      { value: "1 mm/yr", label: "Velocity sensitivity" },
      { value: "100,000 km²", label: "Typical screening footprint" },
      { value: "1992→", label: "Historical archive depth" },
    ],
    deliverables: [
      "Regional velocity maps in GIS-ready formats",
      "Ranked inventory of active deformation areas",
      "Per-site time series and acceleration alerts",
      "Quarterly review reports with expert interpretation",
    ],
    useCases: [
      { title: "Civil protection", body: "Prioritize ground inspection and evacuation planning across a region." },
      { title: "Transport authorities", body: "Screen road and rail corridors for slope instability before it disrupts service." },
      { title: "Insurers & reinsurers", body: "Quantify exposure to subsidence and landslide risk across portfolios." },
    ],
  },
  mining: {
    intro:
      "Open pits, tailings storage facilities and underground operations all move — the question is how fast, and what it means. SAR Metrics integrates satellite, ground-based radar and in-situ data into one geotechnical picture.",
    challenge:
      "Pit walls, tailings dams and waste piles fail without warning, with catastrophic environmental and human cost.",
    approach:
      "Continuous SAR monitoring combined with ground-based radar fusion delivers per-bench and per-cell displacement series in near real time.",
    outcome:
      "Mine geotechnical teams receive early-warning indicators, daily, against site-specific stability thresholds.",
    features: [
      { title: "Pit & wall stability", body: "Bench-level displacement series for active and legacy pits." },
      { title: "Tailings dam integrity", body: "Cell-by-cell motion tracking with alert thresholds." },
      { title: "Closure monitoring", body: "Long-term post-closure subsidence and rebound tracking." },
    ],
    metrics: [
      { value: "Weekly", label: "Update cadence on critical assets" },
      { value: "1 mm", label: "Per-point precision after stacking" },
      { value: "GISTM", label: "Aligned with tailings standards" },
    ],
    deliverables: [
      "Bench- and cell-level deformation maps",
      "Velocity and acceleration alerts to operations dashboards",
      "Independent third-party reports for regulators and boards",
      "Closure and post-closure long-term trend baselines",
    ],
    useCases: [
      { title: "Geotechnical engineering", body: "Validate slope stability models with continuous, asset-wide ground truth." },
      { title: "Tailings management", body: "Demonstrate dam integrity to regulators and communities under GISTM." },
      { title: "Closure & legacy sites", body: "Track residual subsidence decades after operations cease." },
    ],
  },
  infrastructure: {
    intro:
      "Critical infrastructure moves through every phase of its life — settling under load, responding to nearby works, ageing in place. SAR Metrics provides the continuous record that connects design assumptions to real-world behaviour.",
    challenge:
      "Dams, bridges, tunnels and rail networks degrade silently; visual inspection alone misses millimetric precursors.",
    approach:
      "Lifecycle InSAR brings design baselines, construction monitoring and operational surveillance into one continuous record.",
    outcome:
      "Owners and operators de-risk capex and extend asset life through evidence-based maintenance planning.",
    features: [
      { title: "Pre-construction baseline", body: "Years of historical motion before ground is broken." },
      { title: "Construction surveillance", body: "Tracks displacement induced by works in real time." },
      { title: "Operational monitoring", body: "Permanent surveillance across the asset lifecycle." },
    ],
    metrics: [
      { value: "30+ yrs", label: "Retrospective baseline available" },
      { value: "Weekly", label: "Acquisition cadence on active sites" },
      { value: "BIM/GIS", label: "Native integration with asset systems" },
    ],
    deliverables: [
      "Asset-level displacement dashboards",
      "Construction-phase induced-settlement reports",
      "Corridor-wide screening for rail and road networks",
      "Independent evidence for permits, audits and litigation",
    ],
    useCases: [
      { title: "Dams & reservoirs", body: "Detect crest and abutment movement across the full structure." },
      { title: "Bridges & viaducts", body: "Per-pier motion records correlated with traffic and seasons." },
      { title: "Tunnels & metros", body: "Surface response to underground works and TBM advance." },
    ],
  },
  "oil-gas": {
    intro:
      "Reservoir performance, well integrity and storage security all leave a fingerprint on the surface. SAR Metrics decodes that signal across producing fields, abandoned wells and CO₂ storage sites worldwide.",
    challenge:
      "Reservoir extraction and injection induce surface displacement that signals well integrity, compaction and storage performance.",
    approach:
      "Repeat-pass InSAR over fields and storage sites delivers uplift and subsidence maps tied to production cycles.",
    outcome:
      "Asset teams correlate motion with downhole data to optimize production and demonstrate CO₂ storage integrity.",
    features: [
      { title: "Reservoir surveillance", body: "Track compaction and rebound over producing fields." },
      { title: "CO₂ storage integrity", body: "Surface response to injection at storage sites." },
      { title: "Permit compliance", body: "Independent evidence for regulators and stakeholders." },
    ],
    metrics: [
      { value: "1 mm", label: "Uplift detection on storage sites" },
      { value: "Monthly", label: "Standard production-cycle cadence" },
      { value: "Global", label: "Coverage from a single platform" },
    ],
    deliverables: [
      "Field-wide subsidence and uplift maps",
      "Time series at wellheads, pads and injection points",
      "History-matching inputs for reservoir models",
      "Regulator-ready CCS monitoring, reporting and verification packs",
    ],
    useCases: [
      { title: "Producing fields", body: "Link surface compaction to production rates and reservoir pressure." },
      { title: "CCS & storage", body: "Independently verify containment of injected CO₂ at storage sites." },
      { title: "Abandoned wells", body: "Screen legacy well populations for surface anomalies." },
    ],
  },
  structural: {
    intro:
      "Every reflective façade in a city is a potential measurement point. SAR Metrics turns urban areas into living deformation maps — building by building, going back to the early 1990s.",
    challenge:
      "Urban buildings settle, tilt and crack in response to neighboring works, water tables and decades-old foundations.",
    approach:
      "Persistent-scatterer InSAR turns every reflective façade into a measurement point, going back to the early SAR archives.",
    outcome:
      "City authorities, asset managers and forensic engineers get building-level displacement histories on demand.",
    features: [
      { title: "Building-by-building", body: "Per-structure displacement at the façade level." },
      { title: "Archive reconstruction", body: "Historical motion from 1992 onward where data exists." },
      { title: "Forensic evidence", body: "Court-grade documentation of subsidence events." },
    ],
    metrics: [
      { value: "1992", label: "Earliest archive imagery" },
      { value: ">10k", label: "Measurement points per km² in dense areas" },
      { value: "0.1 mm/yr", label: "Long-term velocity precision" },
    ],
    deliverables: [
      "Per-building displacement time series",
      "Façade- and roof-level point clouds with velocity",
      "Historic reconstructions for pre-event investigations",
      "Expert reports for litigation, insurance and asset disputes",
    ],
    useCases: [
      { title: "City authorities", body: "Monitor heritage districts and high-risk neighborhoods continuously." },
      { title: "Real-estate owners", body: "Diagnose tilt and settlement issues before they become structural." },
      { title: "Forensic engineering", body: "Reconstruct the motion history of a building around a damage event." },
    ],
  },
};

type SolutionContent = (typeof detail)[keyof typeof detail];

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }): { offering: ReturnType<typeof offeringBySlug>; content: SolutionContent } => {
    const o = offeringBySlug(params.slug);
    const c = detail[params.slug as keyof typeof detail];
    if (!o || !c) throw notFound();
    return { offering: o, content: c };
  },
  head: ({ loaderData }) => {
    const o = loaderData?.offering;
    const title = o ? `${o.title} — SAR Metrics` : "Solution — SAR Metrics";
    const desc = o?.tagline ?? "InSAR monitoring solution";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: o ? o.to : "/solutions" },
        ...(o ? [{ property: "og:image", content: o.image }] : []),
      ],
      links: o ? [{ rel: "canonical", href: o.to }] : [],
    };
  },
  component: SolutionDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x pt-40 pb-32">
        <h1 className="text-display text-section">Solution not found</h1>
        <Link to="/solutions" className="mt-6 inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
          <ArrowLeft size={16} /> Back to solutions
        </Link>
      </div>
    </SiteLayout>
  ),
});

function SolutionDetail() {
  const data = Route.useLoaderData() as { offering: NonNullable<ReturnType<typeof offeringBySlug>>; content: SolutionContent };
  const { offering, content } = data;
  const others = offerings.filter((o) => o.slug !== offering.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Solution · ${offering.number}`}
        title={offering.tagline}
        subtitle={offering.description}
        image={offering.image}
        imageAlt={offering.title}
        height="tall"
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {offering.title}
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl text-foreground/85 leading-snug mb-16">
              {content.intro}
            </p>
            <div className="space-y-16">
              <Block label="Challenge" body={content.challenge} />
              <Block label="Approach" body={content.approach} />
              <Block label="Outcome" body={content.outcome} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {content.metrics.map((m) => (
              <div key={m.label} className="bg-background p-8 md:p-10">
                <div className="text-display text-3xl md:text-5xl mb-3">{m.value}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <h2 className="text-display text-section max-w-3xl mb-16">
            What the service includes.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {content.features.map((f) => (
              <div key={f.title} className="bg-background p-8 md:p-10">
                <h3 className="text-display text-xl md:text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-foreground/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Deliverables
            </div>
            <h2 className="text-display text-section">What you receive.</h2>
          </div>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {content.deliverables.map((d, i) => (
              <li key={d} className="flex gap-6 py-6">
                <span className="text-xs tracking-[0.3em] text-muted-foreground pt-1 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-foreground/85">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Use cases
          </div>
          <h2 className="text-display text-section max-w-3xl mb-16">
            Who uses this, and why.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {content.useCases.map((u) => (
              <div key={u.title} className="bg-background p-8 md:p-10">
                <h3 className="text-display text-xl md:text-2xl mb-3">{u.title}</h3>
                <p className="text-sm text-foreground/70">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Other solutions
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={o.to}
              className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[220px]"
            >
              <div className="text-xs tracking-[0.3em] text-muted-foreground">
                {o.number}
              </div>
              <div>
                <h3 className="text-display text-2xl md:text-3xl mb-2">{o.title}</h3>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition">
                  Open <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
        {label}
      </div>
      <p className="text-xl md:text-2xl text-foreground/90 leading-snug">
        {body}
      </p>
    </div>
  );
}
