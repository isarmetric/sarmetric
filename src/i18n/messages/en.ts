import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    home: {
      title: "InSAR Analytics & Space Monitoring — SAR Metrics",
      description:
        "InSAR analytics for geohazards, mining, infrastructure and energy. Wide-area, millimeter-precision ground monitoring from space.",
    },
    about: {
      title: "About — SAR Metrics",
      description:
        "SAR Metrics turns satellite radar into millimetric ground intelligence and InSAR analytics for industry, infrastructure and civil protection.",
    },
    contact: {
      title: "Contact — SAR Metrics",
      description:
        "Tell us about the asset or region you need to monitor. We'll show what InSAR analytics and space monitoring can reveal.",
    },
    technology: {
      title: "InSAR Analytics Technology — SAR Metrics",
      description:
        "How InSAR analytics works: persistent scatterers, satellite SAR archives and millimetric displacement for space monitoring.",
    },
    solutions: {
      title: "InSAR Solutions — SAR Metrics",
      description:
        "InSAR solutions for geohazards, mining, infrastructure, insurance, oil & gas and structural movement — millimetric monitoring from space.",
    },
    solutionTemplate: {
      titleSuffix: "InSAR Monitoring — SAR Metrics",
      descriptionTemplate: (title: string, tagline: string) =>
        `${tagline}. InSAR analytics and space monitoring for ${title.toLowerCase()}.`,
    },
    insarAnalytics: {
      title: "InSAR Analytics — Millimetric Ground Intelligence | SAR Metrics",
      description:
        "InSAR analytics from satellite radar: displacement maps, time series and alerts for infrastructure, mining, energy and geohazards.",
    },
    insarSolutions: {
      title: "InSAR Solutions for Industry & Infrastructure | SAR Metrics",
      description:
        "InSAR solutions for infrastructure, mining, insurance, oil & gas, geohazards and structural movement — operational monitoring from satellite radar.",
    },
    spaceMonitoring: {
      title: "Space Monitoring with Satellite SAR & InSAR | SAR Metrics",
      description:
        "Space monitoring from satellite radar: wide-area and focused InSAR programs that measure ground and structural movement through weather and darkness.",
    },
    resources: {
      title: "Resources — InSAR Glossary, FAQ & Guides | SAR Metrics",
      description:
        "Learn InSAR analytics, space monitoring and satellite radar: glossary, FAQ and guides from SAR Metrics.",
    },
    glossary: {
      title: "InSAR & Space Monitoring Glossary | SAR Metrics",
      description:
        "Glossary of InSAR, PS-InSAR, SAR, interferometry, ground deformation, space monitoring and related Earth-observation terms.",
    },
    glossaryTerm: {
      titleTemplate: (term: string) => `${term} — Glossary | SAR Metrics`,
    },
    faq: {
      title: "InSAR & Space Monitoring FAQ | SAR Metrics",
      description:
        "FAQ on InSAR analytics, millimetric accuracy, weather independence, industries, data delivery and how to start with SAR Metrics.",
    },
    notFound: {
      title: "SAR Metrics — Earth observation & InSAR analytics",
      description:
        "Millimetric ground intelligence from space. InSAR analytics for geohazards, mining, infrastructure and energy.",
    },
  },

  nav: {
    solutions: "Solutions",
    technology: "Technology",
    resources: "Resources",
    about: "About",
    contact: "Contact",
  },

  footer: {
    tagline: "Measure movement. Manage risk.",
    supportedBy: "Supported by",
    solutionsTitle: "Solutions",
    solutions: {
      infrastructure: "Infrastructure",
      mining: "Mining",
      insurance: "Insurance",
      oilGas: "Oil & Gas",
      geohazards: "Geohazards",
      structural: "Structural movement",
    },
    capabilitiesTitle: "Capabilities",
    capabilities: {
      insarAnalytics: "InSAR analytics",
      insarSolutions: "InSAR solutions",
      spaceMonitoring: "Space monitoring",
      technology: "Technology",
    },
    resourcesTitle: "Resources",
    resources: {
      overview: "Overview",
      glossary: "Glossary",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
    },
    officeTitle: "Office",
    office: {
      city: "Warsaw",
      line1: "Chmielna II, 00-020",
      line2: "",
    },
    copyright: "© {year} SAR Metrics. All rights reserved.",
    footerTagline: "Millimetric ground intelligence, from space.",
  },

  cta: {
    defaultTitle: "Ready to see what's moving?",
    defaultBody: "Tell us about the asset or region you need to monitor. We'll show what InSAR can reveal.",
    defaultLabel: "Talk to our team",
  },

  home: {
    hero: {
      eyebrow: "InSAR analytics",
      title: "Measure movement. Manage risk.",
      subtitle:
        "SAR Metrics delivers InSAR analytics and space monitoring that measure ground and structural movement down to the millimeter — anywhere, day or night, in any weather.",
      exploreDemo: "Explore demo",
      insarSolutions: "InSAR solutions",
      howInsarWorks: "How InSAR works",
    },
    supportedBy: {
      eyebrow: "Supported by",
      text: "SAR Metrics is supported by the European Space Agency Business Incubation Centre Poland.",
    },
    solutions: {
      eyebrow: "InSAR solutions",
      title: "From individual structures to entire regions - monitor movement before it becomes a risk.",
      readMore: "Read more",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Built for scale, tuned for precision.",
      items: {
        millimetricPrecision: {
          title: "Millimetric precision",
          body: "Line-of-sight measurement of ground and structural displacement, precise to millimeters.",
        },
        wideAreaCoverage: {
          title: "Wide-area coverage",
          body: "Monitor entire basins, transport corridors and urban regions in a single processing run.",
        },
        allWeatherSar: {
          title: "24/7 SAR acquisition",
          body: "Active radar imagery through cloud, smoke and night — independent of weather.",
        },
        historicalArchive: {
          title: "Historical archive",
          body: "Reconstruct displacement back to the early 1990s using stacked SAR archives.",
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: "About",
      title: "We measure what moves, so others can act before it matters.",
      subtitle:
        "A team of radar engineers, geoscientists and software builders making Earth observation and InSAR analytics operational.",
    },
    valuesEyebrow: "Values",
    values: {
      measurementFirst: {
        title: "Measurement first",
        body: "We trust signals, not narratives. Every claim is backed by data we processed ourselves.",
      },
      operatorGrade: {
        title: "Operator-grade",
        body: "Built to be relied on by geotechnical engineers, civil protection and asset operators.",
      },
      openByDefault: {
        title: "Open by default",
        body: "Standard formats, documented APIs, reproducible processing. No black boxes.",
      },
    },
    timelineEyebrow: "Timeline",
    timeline: {
      seasat: {
        year: "1978",
        title: "Seasat",
        body: "NASA launches the first civilian SAR satellite, proving radar imaging of Earth from orbit.",
      },
      ers: {
        year: "1992",
        title: "ERS-1 archive begins",
        body: "ESA's ERS missions start the continuous SAR archive that still anchors historical InSAR today.",
      },
      psinsar: {
        year: "2002",
        title: "Persistent Scatterer InSAR",
        body: "PSInSAR techniques unlock millimeter-precision time series over stable reflectors.",
      },
      sentinel: {
        year: "2014",
        title: "Sentinel-1",
        body: "Free, open, global SAR every 6–12 days turns InSAR from a research tool into an operational service.",
      },
      commercial: {
        year: "2020s",
        title: "Commercial small-sat SAR constellations",
        body: "High-resolution, high-revisit SAR from commercial operators makes daily monitoring of individual assets viable.",
      },
      founded: {
        year: "2026",
        title: "SAR Metrics founded",
        body: "We bring four decades of SAR science into an asset monitoring system for industry and infrastructure.",
      },
      esaBic: {
        year: "2026",
        title: "ESA BIC Poland Grant",
        body: "SAR Metrics received an ESA BIC Poland grant to support the development and commercialisation of its technology.",
      },
    },
    ctaTitle: "Work with us.",
    ctaLabel: "Get in touch",
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Tell us what you need to see.",
      subtitle: "A short note is enough — we'll come back with the right people and a plan.",
    },
    form: {
      nameLabel: "Name",
      emailLabel: "Work email",
      companyLabel: "Company",
      industryLabel: "Industry",
      industryPlaceholder: "Select",
      industries: {
        infrastructure: "Infrastructure",
        mining: "Mining",
        insurance: "Insurance",
        oilGas: "Oil & Gas",
        geohazards: "Geohazards",
        structural: "Structural",
        other: "Other",
      },
      messageLabel: "What do you need to monitor?",
      submitIdle: "Send message",
      submitSending: "Sending...",
      submitSuccess: "Thanks — we'll be in touch.",
      errorMessage: "Network error. Please try again.",
    },
    officeEyebrow: "Office",
    generalEnquiries: "General enquiries",
    email: "kontakt@sarmetrics.pl",
  },

  technology: {
    hero: {
      eyebrow: "Technology",
      title: "InSAR analytics from satellite radar.",
      subtitle:
        "A processing chain that compresses petabytes of SAR data into millimetric displacement insight for operational space monitoring.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four stages, from raw radar to a decision-ready signal.",
      steps: {
        acquisition: {
          title: "Acquisition",
          body: "Active radar instruments aboard SAR satellites image the Earth's surface day and night, through cloud and smoke — the foundation of space monitoring.",
        },
        interferometry: {
          title: "Interferometry",
          body: "Pairs of SAR images acquired over the same area are differenced in the complex domain to extract phase change — directly proportional to displacement.",
        },
        persistentScatterers: {
          title: "Persistent scatterers",
          body: "Stable reflectors — rooftops, infrastructure, exposed rock — are identified across long time series and tracked individually with millimeter precision.",
        },
        analytics: {
          title: "Analytics & alerting",
          body: "Time series are decomposed into trends, seasonal cycles and anomalies, then surfaced through dashboards, APIs and tuned alerts — InSAR analytics operators can act on.",
        },
      },
      footer: "Dig deeper in our {glossary}, explore {analytics}, or see industry {solutions}.",
      footerLinks: {
        glossary: "InSAR glossary",
        analytics: "InSAR analytics",
        solutions: "InSAR solutions",
      },
    },
    dataProducts: {
      eyebrow: "Data products",
      items: {
        wideArea: {
          title: "Wide-area baseline",
          body: "Regional displacement maps refreshed on a cadence you choose.",
        },
        focused: {
          title: "Focused monitoring",
          body: "High-resolution acquisitions over critical assets with dense temporal sampling.",
        },
        historical: {
          title: "Historical reconstruction",
          body: "Archive-only studies recovering displacement back to the early 1990s.",
        },
        api: {
          title: "API & data delivery",
          body: "GeoJSON, raster and tabular outputs plus a real-time alerting API.",
        },
      },
      footer: "Compare wide-area and focused approaches on our {spaceMonitoring} page, or browse {solutions}.",
      footerLinks: {
        spaceMonitoring: "space monitoring",
        solutions: "industry solutions",
      },
    },
    ctaTitle: "Want to see the data on your asset?",
    ctaLabel: "Request a sample",
  },

  solutions: {
    hero: {
      eyebrow: "InSAR solutions",
      title: "InSAR solutions for every critical asset.",
      subtitle:
        "Industry-tuned monitoring services built on satellite radar — from individual structures to entire regions.",
    },
    intro:
      "Each vertical below is an InSAR solution designed for how that industry manages risk. For a broader overview, see {insarSolutions} and {insarAnalytics}.",
    introLinks: {
      insarSolutions: "InSAR solutions",
      insarAnalytics: "InSAR analytics",
    },
    open: "Open",
  },

  solutionDetail: {
    eyebrow: "Solution",
    challenge: "Challenge",
    approach: "Approach",
    outcome: "Outcome",
    includes: "What the service includes.",
    deliverablesEyebrow: "Deliverables",
    deliverables: "What you receive.",
    useCasesEyebrow: "Use cases",
    useCases: "Who uses this, and why.",
    otherSolutionsEyebrow: "Other solutions",
    open: "Open",
    notFound: "Solution not found",
    backToSolutions: "Back to solutions",
  },

  offerings: {
    infrastructure: {
      title: "Infrastructure",
      tagline: "Movement intelligence for safer infrastructure - from design to maintenance",
      description:
        "Highways, bridges, dams, railways and pipelines monitored at millimeter precision through every phase of their lifecycle — InSAR solutions tuned for infrastructure operators.",
    },
    mining: {
      title: "Mining",
      tagline: "Early warnings and risk mitigation across mine assets",
      description:
        "Continuous monitoring of pit walls, tailings dams, waste piles and underground subsidence — with alerting thresholds tuned per asset using InSAR analytics.",
    },
    insurance: {
      title: "Insurance",
      tagline: "Independent ground-motion evidence for underwriting, claims and portfolio risk",
      description:
        "Portfolio-scale and site-specific InSAR analysis for subsidence, landslides and structural movement — supporting underwriting, exposure screening and claims assessment.",
    },
    "oil-gas": {
      title: "Oil & Gas",
      tagline: "Subtle surface displacement for production and reservoir management",
      description:
        "Track reservoir compaction and uplift, CO₂ storage integrity, and ground response around extraction sites — globally, repeatably — with InSAR space monitoring.",
    },
    geohazards: {
      title: "Geohazards",
      tagline: "Identifying at-risk locations and monitoring geohazards over wide areas",
      description:
        "Wide-area InSAR screening surfaces landslides, subsidence and tectonic motion across entire regions — long before they reach civil protection radars.",
    },
    structural: {
      title: "Structural movement",
      tagline: "Measuring ground and structural movement from space",
      description:
        "Building-by-building displacement histories across urban areas — from individual façades to entire districts — using archive and live SAR.",
    },
  },

  solutionPages: {
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
        {
          title: "Regional screening",
          body: "Country- and basin-scale baseline maps of ground motion.",
        },
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
        {
          title: "Civil protection",
          body: "Prioritize ground inspection and evacuation planning across a region.",
        },
        {
          title: "Transport authorities",
          body: "Screen road and rail corridors for slope instability before it disrupts service.",
        },
        {
          title: "Insurers & reinsurers",
          body: "Quantify exposure to subsidence and landslide risk across portfolios.",
        },
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
        {
          title: "Pit & wall stability",
          body: "Bench-level displacement series for active and legacy pits.",
        },
        {
          title: "Tailings dam integrity",
          body: "Cell-by-cell motion tracking with alert thresholds.",
        },
        {
          title: "Closure monitoring",
          body: "Long-term post-closure subsidence and rebound tracking.",
        },
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
        {
          title: "Geotechnical engineering",
          body: "Validate slope stability models with continuous, asset-wide ground truth.",
        },
        {
          title: "Tailings management",
          body: "Demonstrate dam integrity to regulators and communities under GISTM.",
        },
        {
          title: "Closure & legacy sites",
          body: "Track residual subsidence decades after operations cease.",
        },
      ],
    },
    insurance: {
      intro:
        "Insurers need independent evidence that scales from a single claim to an entire book of business. SAR Metrics uses satellite radar to quantify ground and structural movement across portfolios, catastrophe zones and disputed assets.",
      challenge:
        "Underwriters and claims teams often make high-value decisions with limited, inconsistent or delayed site evidence.",
      approach:
        "Wide-area InSAR screening identifies exposure hotspots across portfolios, then site-focused analysis reconstructs displacement history before, during and after an event.",
      outcome:
        "Insurance teams gain defensible motion evidence for underwriting, accumulation management, claims validation and expert reporting.",
      features: [
        {
          title: "Portfolio screening",
          body: "Rank insured assets and regions by observed subsidence, landslide and settlement activity.",
        },
        {
          title: "Claims reconstruction",
          body: "Rebuild the displacement history around a reported damage event using SAR archives.",
        },
        {
          title: "Independent reporting",
          body: "Deliver expert-ready evidence packs for adjusters, brokers and legal teams.",
        },
      ],
      metrics: [
        { value: "1992→", label: "Archive depth for event reconstruction" },
        { value: "Portfolio-scale", label: "Coverage across books of business" },
        { value: "1 mm/yr", label: "Long-term motion sensitivity" },
      ],
      deliverables: [
        "Portfolio exposure maps with prioritized hotspots",
        "Property- and corridor-level displacement time series",
        "Pre- and post-event movement reconstructions for claims",
        "Expert reports supporting underwriting and loss assessment",
      ],
      useCases: [
        {
          title: "Underwriting",
          body: "Screen new risks for subsidence, slope instability and long-term settlement signals.",
        },
        {
          title: "Claims & loss adjusting",
          body: "Test whether observed movement aligns with the timing and nature of reported damage.",
        },
        {
          title: "Portfolio management",
          body: "Identify concentrations of motion-related exposure across regions, sectors and asset classes.",
        },
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
        {
          title: "Pre-construction baseline",
          body: "Years of historical motion before ground is broken.",
        },
        {
          title: "Construction surveillance",
          body: "Tracks displacement induced by works in real time.",
        },
        {
          title: "Operational monitoring",
          body: "Permanent surveillance across the asset lifecycle.",
        },
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
        {
          title: "Dams & reservoirs",
          body: "Detect crest and abutment movement across the full structure.",
        },
        {
          title: "Bridges & viaducts",
          body: "Per-pier motion records correlated with traffic and seasons.",
        },
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
        {
          title: "Reservoir surveillance",
          body: "Track compaction and rebound over producing fields.",
        },
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
        {
          title: "Producing fields",
          body: "Link surface compaction to production rates and reservoir pressure.",
        },
        {
          title: "CCS & storage",
          body: "Independently verify containment of injected CO₂ at storage sites.",
        },
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
        {
          title: "Archive reconstruction",
          body: "Historical motion from 1992 onward where data exists.",
        },
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
        {
          title: "City authorities",
          body: "Monitor heritage districts and high-risk neighborhoods continuously.",
        },
        {
          title: "Real-estate owners",
          body: "Diagnose tilt and settlement issues before they become structural.",
        },
        {
          title: "Forensic engineering",
          body: "Reconstruct the motion history of a building around a damage event.",
        },
      ],
    },
  },

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: "InSAR analytics",
        title: "InSAR analytics that turns radar into decisions.",
        subtitle:
          "Millimetric displacement intelligence from space — maps, time series and alerts for teams who manage movement risk.",
      },
      sections: {
        problem: {
          title: "The problem InSAR analytics solves",
          paragraphs: [
            "Critical assets move slowly until they don't. Subsidence, slope creep and structural settlement often stay invisible until inspection windows or failure events catch up.",
            "InSAR analytics gives operators a continuous measurement layer: where the ground and structures are moving, how fast, and whether the pattern is accelerating — without waiting to instrument every kilometer.",
          ],
        },
        howWeDeliver: {
          title: "How SAR Metrics produces the signal",
          paragraphs: [
            "We stack SAR acquisitions, form interferograms, select persistent scatterers and convert phase change into millimetric line-of-sight displacement.",
            "Analytics then separate trends, seasonality and anomalies, and deliver maps, point histories and alerts through dashboards and APIs. Learn the full chain on our technology page.",
          ],
        },
        whatYouReceive: {
          title: "What you receive",
          paragraphs: [
            "Wide-area baselines for screening, focused monitoring for priority assets, historical reconstruction from archives, and delivery formats your engineers already use.",
            "Results are designed for geotechnical, asset and risk workflows — not research notebooks.",
          ],
        },
      },
      industries: {
        eyebrow: "Industries that rely on the analytics",
        title: "Industries that rely on the analytics",
      },
      footer:
        "Explore packaged {insarSolutions}, {spaceMonitoring}, or the {glossary}.",
      footerLinks: {
        insarSolutions: "InSAR solutions",
        spaceMonitoring: "space monitoring",
        glossary: "InSAR glossary entry",
      },
      faqTitle: "InSAR analytics questions",
      ctaTitle: "See InSAR analytics on your AOI.",
      ctaLabel: "Talk to our team",
    },
    insarSolutions: {
      hero: {
        eyebrow: "InSAR solutions",
        title: "InSAR solutions built for how industries manage risk.",
        subtitle:
          "One satellite-radar foundation. Six operational offerings tuned for the decisions your teams already make.",
      },
      whyDedicated: {
        title: "Why dedicated InSAR solutions",
        paragraphs: [
          "Generic displacement maps rarely fit operator workflows. Infrastructure owners need lifecycle context; mines need thresholded alerts; insurers need independent evidence; energy teams need reservoir-scale trends.",
          "SAR Metrics packages InSAR analytics into industry solutions — same rigorous processing, different monitoring design, deliverables and language. Compare the technical foundation on {insarAnalytics} and {technology}.",
        ],
        links: {
          insarAnalytics: "InSAR analytics",
          technology: "technology",
        },
      },
      footer:
        "Prefer a capability-first view? See {allSolutions} or learn how {spaceMonitoring} scales from basins to buildings.",
      footerLinks: {
        allSolutions: "all solutions",
        spaceMonitoring: "space monitoring",
      },
      faqTitle: "InSAR solutions FAQ",
      ctaTitle: "Design an InSAR solution for your portfolio.",
      ctaLabel: "Contact us",
      open: "Open",
    },
    spaceMonitoring: {
      hero: {
        eyebrow: "Space monitoring",
        title: "Space monitoring that sees movement from orbit.",
        subtitle:
          "Satellite SAR watches assets and regions day and night, through cloud — then InSAR analytics turns those acquisitions into operational ground intelligence.",
      },
      whyFromSpace: {
        title: "Why monitor from space",
        paragraphs: [
          "Ground networks are precise but sparse. Optical satellites help with context but fail under cloud and at night. Space monitoring with SAR fills the gap: consistent revisit, weather independence, and coverage from individual façades to entire regions.",
          "SAR Metrics operates that stack as a service — acquisition strategy, InSAR processing, analytics and delivery — so engineering and risk teams get signals they can act on. Read more about {insarAnalytics} and packaged {insarSolutions}.",
        ],
        links: {
          insarAnalytics: "InSAR analytics",
          insarSolutions: "InSAR solutions",
        },
      },
      modes: {
        eyebrow: "Monitoring modes",
        items: {
          wideArea: {
            title: "Wide-area screening",
            body: "Map displacement across corridors, basins and cities to find hotspots before you instrument every site. Ideal for geohazard programs, network owners and portfolio risk.",
          },
          focused: {
            title: "Focused asset monitoring",
            body: "Increase revisit and spatial detail over pits, dams, plants, bridges and districts once priority locations are known — with thresholds tuned to each asset.",
          },
          historical: {
            title: "Historical reconstruction",
            body: "Recover years of movement from SAR archives to establish baselines, support claims and understand how an area behaved before your sensors existed.",
          },
        },
      },
      fromOrbitToAction: {
        title: "From orbit to action",
        paragraphs: [
          "Space monitoring is only useful if it reaches the people who decide. We deliver GeoJSON, rasters, tables, dashboards and alerting APIs — and we design AOIs around how you already inspect and escalate risk.",
          "Start with a sample AOI, review archive history, then move to an operational cadence. Explore the {technology}, browse the {glossary}, or {contact}.",
        ],
        links: {
          technology: "processing chain",
          glossary: "space monitoring glossary term",
          contact: "contact the team",
        },
      },
      faqTitle: "Space monitoring FAQ",
      ctaTitle: "Put space monitoring on your assets.",
      ctaBody:
        "Tell us the region or facility. We'll show what satellite SAR and InSAR can already reveal.",
      ctaLabel: "Request a briefing",
    },
  },

  resources: {
    hero: {
      eyebrow: "Resources",
      title: "Understand InSAR before you buy it.",
      subtitle:
        "Plain-language references for InSAR analytics, space monitoring and the terms your engineers already use.",
    },
    hubs: {
      glossary: {
        title: "Glossary",
        body: "Definitions for InSAR, PS-InSAR, SAR, interferometry, space monitoring and related terms.",
      },
      faq: {
        title: "FAQ",
        body: "Practical answers on accuracy, weather independence, industries, delivery and getting started.",
      },
      insarAnalytics: {
        title: "InSAR analytics",
        body: "How displacement intelligence is produced and used across critical assets.",
      },
      insarSolutions: {
        title: "InSAR solutions",
        body: "Industry-tuned monitoring programs built on satellite radar.",
      },
      spaceMonitoring: {
        title: "Space monitoring",
        body: "Wide-area and focused monitoring from orbit for movement risk.",
      },
      technology: {
        title: "Technology",
        body: "The four-stage chain from SAR acquisition to analytics and alerting.",
      },
    },
    ctaTitle: "Still have questions?",
    ctaLabel: "Contact us",
  },

  glossary: {
    index: {
      hero: {
        eyebrow: "Glossary",
        title: "InSAR and space monitoring terms.",
        subtitle:
          "Short definitions you can share with stakeholders — each term expands into a full explainer.",
      },
      footer: "Looking for answers instead of definitions? See the {faq}.",
      footerLink: "FAQ",
    },
    terms: {
      insar: {
        term: "InSAR",
        shortDefinition:
          "Interferometric Synthetic Aperture Radar — a satellite technique that measures ground and structural movement with millimetric precision.",
        body: [
          "InSAR (Interferometric Synthetic Aperture Radar) compares pairs of radar images acquired over the same place at different times. Tiny changes in the radar signal's phase translate into surface displacement along the satellite's line of sight.",
          "Unlike optical imagery, InSAR works through cloud, smoke and darkness because SAR is an active microwave sensor. That makes it a foundation for operational space monitoring of infrastructure, mines, reservoirs and geohazards.",
          "SAR Metrics turns InSAR measurements into decision-ready analytics — time series, maps, alerts and APIs — so operators can act before movement becomes damage.",
        ],
      },
      "ps-insar": {
        term: "PS-InSAR",
        shortDefinition:
          "Persistent Scatterer InSAR — a method that tracks stable radar reflectors over long time series for millimeter-level displacement.",
        body: [
          "PS-InSAR (Persistent Scatterer InSAR) focuses on points that remain coherent across many satellite passes: rooftops, bridges, rail, rock outcrops and other engineered or natural reflectors.",
          "By building long time series on those points, PS-InSAR recovers slow deformation trends, seasonal cycles and anomalies that would be lost in noisy wide-area averages.",
          "SAR Metrics uses PS-InSAR style processing where assets need dense, millimetric histories — then layers analytics and alerting for operators.",
        ],
      },
      sar: {
        term: "SAR",
        shortDefinition:
          "Synthetic Aperture Radar — an active satellite sensor that images Earth's surface day and night, in any weather.",
        body: [
          "Synthetic Aperture Radar (SAR) transmits microwave pulses and records the echoes. By synthesizing a long antenna from the satellite's motion, it produces high-resolution radar images independent of sunlight.",
          "Modern constellations (including Sentinel-1 and commercial small-sats) revisit the same ground tracks regularly, creating the archives InSAR analytics rely on.",
          "SAR Metrics processes SAR stacks into displacement products for industry and civil protection.",
        ],
      },
      interferometry: {
        term: "Interferometry",
        shortDefinition:
          "The comparison of two SAR images to extract phase differences that correspond to surface displacement.",
        body: [
          "Radar interferometry forms an interferogram by combining two complex SAR images of the same area. The phase difference encodes changes in distance between the satellite and the ground.",
          "After correcting for orbit geometry, topography and atmospheric effects, remaining phase change is interpreted as ground or structural movement.",
          "Interferometry is the core step between raw SAR acquisition and InSAR analytics used for monitoring.",
        ],
      },
      "ground-deformation": {
        term: "Ground deformation",
        shortDefinition:
          "Change in the Earth's surface position over time — including subsidence, uplift, landslides and tectonic motion.",
        body: [
          "Ground deformation covers any measurable movement of the land surface: slow subsidence under cities, pit-wall motion at mines, landslide creep, or reservoir compaction above oil and gas fields.",
          "Satellite InSAR can map deformation over wide areas and reconstruct years of history from SAR archives — often before ground instruments are installed.",
          "Understanding deformation patterns helps operators prioritize inspection, reinforce assets and reduce risk.",
        ],
      },
      "persistent-scatterer": {
        term: "Persistent scatterer",
        shortDefinition:
          "A stable radar reflector that remains coherent across many SAR acquisitions and can be tracked over time.",
        body: [
          "A persistent scatterer is a point on the ground that returns a strong, stable radar echo from pass to pass — typically metal structures, building corners, bridges or exposed rock.",
          "These points anchor PS-InSAR time series and allow millimetric displacement to be measured even in complex urban or industrial scenes.",
          "Dense persistent-scatterer networks turn cities and corridors into continuous monitoring grids.",
        ],
      },
      "space-monitoring": {
        term: "Space monitoring",
        shortDefinition:
          "Observing assets and regions from orbit — using satellite sensors such as SAR for continuous, wide-area situational awareness.",
        body: [
          "Space monitoring uses Earth-observation satellites to watch critical assets and regions without installing dense ground networks everywhere.",
          "SAR-based space monitoring is especially powerful for movement: it measures displacement through weather and darkness, at scales from individual structures to entire basins.",
          "SAR Metrics delivers space monitoring as operational InSAR analytics — baselines, focused campaigns, historical reconstruction and alerting.",
        ],
      },
      "millimetric-displacement": {
        term: "Millimetric displacement",
        shortDefinition:
          "Ground or structural movement measured at the millimeter scale using satellite radar interferometry.",
        body: [
          "Millimetric displacement means detecting and tracking movement on the order of millimeters per year or per revisit — far below what visual inspection can reliably catch early.",
          "InSAR achieves this by measuring radar phase change along the satellite line of sight, then converting it into displacement time series for points and areas of interest.",
          "Early millimetric signals often precede visible cracking, tilt or failure — giving operators time to intervene.",
        ],
      },
      "satellite-radar": {
        term: "Satellite radar",
        shortDefinition:
          "Radar sensing from orbit — typically SAR — used to image terrain and measure change independent of daylight and cloud cover.",
        body: [
          "Satellite radar refers to microwave imaging systems flown on spacecraft. The dominant civilian form is Synthetic Aperture Radar (SAR).",
          "Because the sensor illuminates the ground itself, satellite radar supports all-weather, day-night imaging essential for operational monitoring programs.",
          "SAR Metrics builds InSAR analytics on satellite radar archives and taskable commercial acquisitions.",
        ],
      },
      "wide-area-monitoring": {
        term: "Wide-area monitoring",
        shortDefinition:
          "Screening large regions — corridors, basins, cities — for ground motion with consistent satellite coverage.",
        body: [
          "Wide-area monitoring uses stacked SAR coverage to produce regional displacement maps and hotspots without surveying every asset individually first.",
          "It is the usual entry point for geohazard screening, insurance portfolio views and network-scale infrastructure programs.",
          "Once risk locations are identified, focused InSAR monitoring can increase resolution and revisit over critical sites.",
        ],
      },
    },
  },

  faqs: {
    site: [
      {
        question: "What is InSAR analytics?",
        answer:
          "InSAR analytics turns satellite radar interferometry into usable intelligence: displacement maps, time series, trends and alerts. SAR Metrics processes SAR stacks and delivers results through dashboards, files and APIs so teams can manage ground and structural risk.",
      },
      {
        question: "How accurate is millimetric ground monitoring from space?",
        answer:
          "Under suitable geometry and coherence, InSAR can resolve millimeter-scale line-of-sight displacement on persistent scatterers. Accuracy depends on satellite geometry, atmosphere, land cover and processing method — which is why we tune products per asset and region.",
      },
      {
        question: "Does space monitoring work through clouds and at night?",
        answer:
          "Yes. Synthetic Aperture Radar is an active microwave sensor, so acquisitions continue through cloud, smoke and darkness. That reliability is a core reason operators choose SAR-based space monitoring over optical-only approaches.",
      },
      {
        question: "Which industries use SAR Metrics InSAR solutions?",
        answer:
          "We support infrastructure owners, mining operators, insurers, oil & gas producers, civil protection teams and structural engineers — anywhere millimetric movement intelligence reduces risk or clarifies liability.",
      },
      {
        question: "Can you reconstruct historical movement?",
        answer:
          "Yes. Stacked SAR archives allow historical reconstruction of displacement, often back to the early 1990s depending on coverage. Archive studies help forensics, baseline design and claims assessment.",
      },
      {
        question: "How are results delivered?",
        answer:
          "Deliverables include displacement maps, point time series, GeoJSON/raster/tabular exports, dashboards and alerting APIs. We match delivery to how your engineers and risk teams already work.",
      },
      {
        question: "What is the difference between wide-area and focused monitoring?",
        answer:
          "Wide-area monitoring screens regions and portfolios for hotspots. Focused monitoring increases spatial and temporal sampling over critical assets once risk locations are known. Many programs use both.",
      },
      {
        question: "How do we get started?",
        answer:
          "Tell us the asset or region you need to see. We review available SAR coverage, propose a monitoring design, and can often show an initial sample from archive data before you commit to an operational program.",
      },
    ],
    insarAnalytics: [
      {
        question: "How is InSAR analytics different from raw SAR imagery?",
        answer:
          "Raw SAR images show radar backscatter. InSAR analytics extracts displacement from phase change across time, then converts that into maps, trends and alerts operators can act on.",
      },
      {
        question: "What decisions does InSAR analytics support?",
        answer:
          "Typical decisions include where to inspect, when to slow production, whether a slope is accelerating, how a structure has moved since construction, and how to underwrite or assess ground-motion risk.",
      },
      {
        question: "Do you need instruments on the ground?",
        answer:
          "Ground instruments remain valuable for calibration and local confirmation. InSAR analytics complements them by providing wide coverage and long histories where sensors were never installed.",
      },
    ],
    insarSolutions: [
      {
        question: "What InSAR solutions does SAR Metrics offer?",
        answer:
          "Industry-tuned monitoring for infrastructure, mining, insurance, oil & gas, geohazards and structural movement — all built on the same satellite radar foundation.",
      },
      {
        question: "Can one program cover multiple asset types?",
        answer:
          "Yes. Many clients start with a regional baseline and then add focused monitoring on priority assets. Shared processing and delivery keep multi-asset programs coherent.",
      },
      {
        question: "How quickly can a solution be stood up?",
        answer:
          "Archive-based screening can often start within days to weeks depending on AOI size and product choice. Operational revisit cadence follows satellite availability and tasking.",
      },
    ],
    spaceMonitoring: [
      {
        question: "What does space monitoring mean for asset owners?",
        answer:
          "It means watching ground and structural movement from orbit at scale — without waiting to instrument every kilometer of corridor or every facility in a portfolio.",
      },
      {
        question: "Is space monitoring only for large regions?",
        answer:
          "No. The same SAR stack can support basin-scale screening and building-scale time series. Programs usually combine wide-area context with focused sites.",
      },
      {
        question: "How does SAR Metrics space monitoring relate to InSAR?",
        answer:
          "Our space monitoring service is InSAR-powered: satellite radar acquisitions, interferometric processing, analytics and alerting packaged for operational use.",
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      title: "Questions teams ask before deploying InSAR.",
      subtitle:
        "Straight answers on capability, coverage and delivery — with links into deeper resources.",
    },
    sectionEyebrow: "Answers",
    sectionTitle: "Frequently asked questions",
    footer: "Prefer definitions? Browse the {glossary}. For product pages, see {insarAnalytics}, {insarSolutions}, and {spaceMonitoring}.",
    footerLinks: {
      glossary: "glossary",
      insarAnalytics: "InSAR analytics",
      insarSolutions: "InSAR solutions",
      spaceMonitoring: "space monitoring",
    },
    ctaTitle: "Didn't find your answer?",
    ctaLabel: "Ask us directly",
  },

  common: {
    home: "Home",
    supportedBy: "Supported by",
    readMore: "Read more",
    open: "Open",
    language: "Language",
    backToSolutions: "Back to solutions",
  },

  errors: {
    notFound: {
      title: "404",
      subtitle: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      homeButton: "Go home",
    },
    error: {
      title: "This page didn't load",
      description: "Something went wrong on our end. You can try refreshing or head back home.",
      tryAgain: "Try again",
      goHome: "Go home",
    },
  },
};
