import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    home: {
      title: "InSAR Monitoring of Ground & Infrastructure | SAR Metrics",
      description:
        "Satellite InSAR monitoring for construction, rail, infrastructure, mining and oil & gas. We detect millimeter-scale ground displacement before it becomes damage.",
    },
    about: {
      title: "About – Satellite InSAR Monitoring | SAR Metrics",
      description:
        "SAR Metrics turns satellite radar data into displacement measurements of ground and structures. Meet the ESA BIC Poland-backed team and how we work.",
    },
    contact: {
      title: "Contact | SAR Metrics",
      description:
        "Tell us which asset or area you need to monitor. We check the available satellite data and show what displacement InSAR can measure there.",
    },
    technology: {
      title: "How InSAR Works – Measuring Displacement from Orbit | SAR Metrics",
      description:
        "How InSAR works: SAR radar imagery, interferometry, persistent scatterers (PS-InSAR) and displacement time series with millimeter accuracy.",
    },
    solutions: {
      title: "InSAR Solutions by Industry | SAR Metrics",
      description:
        "InSAR monitoring for infrastructure and rail, mining, construction, oil & gas, insurance and geohazards: displacement measured to the millimeter from orbit.",
    },
    solutionTemplate: {
      titleSuffix: "InSAR Monitoring | SAR Metrics",
      descriptionTemplate: (title: string, tagline: string) =>
        `${tagline}. Satellite InSAR monitoring for ${title.toLowerCase()} by SAR Metrics.`,
    },
    insarAnalytics: {
      title: "InSAR Analytics – Displacement Maps & Alerts | SAR Metrics",
      description:
        "InSAR analytics: displacement maps, time series, trends and alerts for infrastructure, rail, construction, mining and energy. Delivered online and by API.",
    },
    insarSolutions: {
      title: "InSAR Solutions for Industry & Infrastructure | SAR Metrics",
      description:
        "InSAR monitoring built for each industry: infrastructure and rail, mining, construction, oil & gas, insurance, geohazards. Early warning of ground displacement.",
    },
    spaceMonitoring: {
      title: "Space Monitoring with Satellite SAR & InSAR | SAR Metrics",
      description:
        "Space monitoring with satellite radar: wide-area and site-level displacement measurement of ground and structures, day and night, regardless of cloud.",
    },
    resources: {
      title: "InSAR Resources – Glossary & FAQ | SAR Metrics",
      description:
        "A glossary and answers to common questions about InSAR, satellite SAR radar and ground displacement monitoring.",
    },
    glossary: {
      title: "InSAR & Space Monitoring Glossary | SAR Metrics",
      description:
        "Glossary of InSAR, PS-InSAR, SAR, interferometry, ground deformation, persistent scatterers and space monitoring, explained in plain language.",
    },
    glossaryTerm: {
      titleTemplate: (term: string) => `${term} – InSAR Glossary | SAR Metrics`,
    },
    faq: {
      title: "InSAR FAQ – Common Questions | SAR Metrics",
      description:
        "Answers on InSAR monitoring: accuracy, weather independence, cost, industry use, how results are delivered and how to get started.",
    },
    offer: {
      title: "InSAR Monitoring Offer – Cost, Benefits & Savings | SAR Metrics",
      description:
        "Infrastructure monitoring from orbit, to the millimeter, with history back to the 1990s. Price depends on terrain, frequency and accuracy. At the low end it can be about $25 per km² — less per square kilometre than ground instruments or drones.",
    },
    notFound: {
      title: "SAR Metrics – Satellite InSAR Monitoring",
      description:
        "Satellite measurement of ground and infrastructure displacement, accurate to the millimeter. InSAR monitoring for construction, rail, mining and energy.",
    },
  },

  nav: {
    solutions: "Solutions",
    offer: "Offer",
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
      structural: "Construction & buildings",
    },
    capabilitiesTitle: "Services",
    capabilities: {
      insarAnalytics: "InSAR analytics",
      insarSolutions: "InSAR solutions",
      spaceMonitoring: "Space monitoring",
      technology: "Technology",
      offer: "Offer",
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
    footerTagline: "Satellite displacement measurement, accurate to the millimeter.",
  },

  cta: {
    defaultTitle: "See what InSAR reveals on your site.",
    defaultBody:
      "Tell us the asset or area. Together we will assess what displacement can be measured there.",
    defaultLabel: "Contact us",
  },

  home: {
    hero: {
      eyebrow: "Satellite InSAR monitoring",
      title: "Measure movement. Manage risk.",
      subtitle:
        "SAR Metrics measures the displacement of ground, structures and infrastructure from orbit, accurate to the millimeter, day and night, in any weather. Our algorithms pick up the smallest changes before they turn into costly damage.",
      exploreDemo: "Explore demo",
      seeOffer: "See the offer",
      insarSolutions: "InSAR solutions",
      howInsarWorks: "How InSAR works",
    },
    supportedBy: {
      eyebrow: "Supported by",
      text: "SAR Metrics is supported by the European Space Agency Business Incubation Centre Poland.",
    },
    solutions: {
      eyebrow: "InSAR solutions",
      title:
        "From single structures to entire regions: detect ground and infrastructure displacement early and prevent damage.",
      readMore: "View solution",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "The accuracy of ground surveys. The coverage they cannot give you.",
      items: {
        millimetricPrecision: {
          title: "Millimeter accuracy",
          body: "We measure ground and structural displacement along the satellite line of sight (LOS), with accuracy comparable to ground-based methods.",
        },
        wideAreaCoverage: {
          title: "Wide-area coverage",
          body: "One analysis covers a whole city, a mining basin or hundreds of kilometers of road and rail, with no equipment to set up in the field.",
        },
        allWeatherSar: {
          title: "24/7 measurement",
          body: "Radar works day and night, through cloud and smoke. Data keeps coming whatever the weather or season.",
        },
        historicalArchive: {
          title: "History back to the 1990s",
          body: "Satellite archives let us reconstruct displacement back to the early 1990s, including places that were never surveyed.",
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: "About",
      title: "We measure what moves, so you can act in time.",
      subtitle:
        "We are a team of radar engineers, geospatial specialists and software developers. We turn satellite radar data into an everyday working tool for the people responsible for the safety of assets and land.",
    },
    valuesEyebrow: "Values",
    values: {
      measurementFirst: {
        title: "Measurement first",
        body: "We rely on data, not assumptions. Every conclusion is backed by a signal we processed and verified ourselves.",
      },
      operatorGrade: {
        title: "Built for practitioners",
        body: "We build tools for geotechnical engineers, civil protection services and asset managers: the people who make decisions based on our data.",
      },
      openByDefault: {
        title: "Open by default",
        body: "Standard data formats, documented APIs, reproducible processing. No black boxes.",
      },
    },
    timelineEyebrow: "Timeline",
    timeline: {
      seasat: {
        year: "1978",
        title: "Seasat",
        body: "NASA launches the first civilian SAR satellite and proves that Earth can be imaged by radar from orbit.",
      },
      ers: {
        year: "1992",
        title: "ERS-1 archive begins",
        body: "The European Space Agency's ERS missions start the continuous SAR archive that still underpins historical InSAR analysis today.",
      },
      psinsar: {
        year: "2002",
        title: "PS-InSAR",
        body: "Persistent scatterer techniques make it possible to build displacement time series with millimeter accuracy.",
      },
      sentinel: {
        year: "2014",
        title: "Sentinel-1",
        body: "Free, open, global SAR data every 6–12 days turns InSAR from a research tool into an operational service.",
      },
      commercial: {
        year: "2020s",
        title: "Commercial SAR constellations",
        body: "Commercial small satellites deliver high-resolution imagery often enough to make even daily monitoring of selected assets possible.",
      },
      founded: {
        year: "2026",
        title: "SAR Metrics founded",
        body: "We bring four decades of SAR development into a monitoring system for industry and infrastructure.",
      },
      esaBic: {
        year: "2026",
        title: "ESA BIC Poland grant",
        body: "SAR Metrics receives an ESA BIC Poland grant to develop and commercialize its technology.",
      },
    },
    ctaTitle: "Let's talk about working together.",
    ctaLabel: "Contact us",
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Tell us what you need to monitor.",
      subtitle: "A short message is enough. We will reply with proposed next steps.",
    },
    form: {
      nameLabel: "Name",
      emailLabel: "Work email",
      companyLabel: "Company",
      industryLabel: "Industry",
      industryPlaceholder: "Select an industry",
      industries: {
        infrastructure: "Infrastructure & rail",
        mining: "Mining",
        insurance: "Insurance",
        oilGas: "Oil & Gas",
        geohazards: "Geohazards",
        structural: "Construction",
        other: "Other",
      },
      messageLabel: "What do you need to monitor?",
      submitIdle: "Send message",
      submitSending: "Sending…",
      submitSuccess: "Thank you. We will be in touch shortly.",
      errorMessage: "Your message could not be sent. Please try again.",
    },
    officeEyebrow: "Office",
    generalEnquiries: "General enquiries",
    email: "kontakt@sarmetrics.pl",
  },

  technology: {
    hero: {
      eyebrow: "Technology",
      title: "From radar image to millimeter measurement.",
      subtitle:
        "Our processing chain turns very large volumes of SAR data into reliable information on ground and structural displacement, ready for day-to-day monitoring.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four stages, from raw radar data to information you can base a decision on.",
      steps: {
        acquisition: {
          title: "Data acquisition",
          body: "SAR satellites image the Earth's surface day and night, through cloud and smoke. Repeated passes over the same area provide the material for measurement.",
        },
        interferometry: {
          title: "Interferometry",
          body: "We compare images of the same area taken at different times. The phase difference in the radar signal corresponds to a change in distance between the satellite and the ground, which is the displacement.",
        },
        persistentScatterers: {
          title: "Persistent scatterers",
          body: "Across long series of images we find points that reflect the signal consistently, such as rooftops, structures, infrastructure and exposed rock, and build a displacement history for each one with millimeter accuracy.",
        },
        analytics: {
          title: "Analytics & alerts",
          body: "We separate each time series into trend, seasonal variation and anomalies. Results go to the web platform, the API and alerts, so it is clear straight away where action is needed.",
        },
      },
      footer: "The {glossary} explains the terms. See also {analytics} and {solutions}.",
      footerLinks: {
        glossary: "InSAR glossary",
        analytics: "InSAR analytics",
        solutions: "industry solutions",
      },
    },
    dataProducts: {
      eyebrow: "What we deliver",
      items: {
        wideArea: {
          title: "Regional map",
          body: "Displacement maps for entire regions, updated at an agreed frequency.",
        },
        focused: {
          title: "Site-level monitoring",
          body: "High-resolution imagery and frequent measurements over critical assets.",
        },
        historical: {
          title: "Historical analysis",
          body: "Displacement reconstructed from archive data, back to the early 1990s.",
        },
        api: {
          title: "API & data export",
          body: "GeoJSON, raster and tabular outputs, plus a real-time alerting API.",
        },
      },
      footer:
        "We compare the wide-area and site-level approaches on the {spaceMonitoring} page. See also {solutions}.",
      footerLinks: {
        spaceMonitoring: "space monitoring",
        solutions: "industry solutions",
      },
    },
    ctaTitle: "Want to see the data for your asset?",
    ctaLabel: "Request a sample analysis",
  },

  offer: {
    hero: {
      eyebrow: "Infrastructure monitoring",
      title: "See movement early. Spend only where it matters.",
      subtitle:
        "Satellite InSAR measures ground and infrastructure displacement to the millimeter — day and night, through cloud — and shows where to act before a small shift becomes damage.",
      primaryCta: "Check your site",
      secondaryCta: "Open the demo",
    },
    economics: {
      eyebrow: "What you save",
      title: "One incident costs more than years of monitoring.",
      withoutLabel: "No monitoring — one incident",
      withoutValue: "Millions",
      withoutUnit: "in losses",
      withoutBody:
        "A derailment caused by track condition, or a stoppage at an open-pit mine, is counted in the millions: downtime, repairs, compensation and lost contracts.",
      withLabel: "SAR Metrics monitoring",
      withValue: "from $25",
      withUnit: "per km² at the low end",
      withBody:
        "There is no single rate. It depends on the terrain, how often you measure, and the accuracy you need. At the low end it can be about $25 per square kilometre. Per square kilometre that is less than ground instruments or drones.",
      pointsTitle: "Where the money is saved",
      points: [
        {
          title: "Incidents you do not have",
          body: "Movement on a track bed, slope or embankment shows up before failure. The subscription is the cost of seeing that in time.",
        },
        {
          title: "Inspections you can skip",
          body: "Crews and budget go to the sections that are actually moving, instead of covering the whole network on a fixed round.",
        },
        {
          title: "No survey kit on site",
          body: "Ground methods reach a similar accuracy on a point. InSAR covers the corridor from orbit, with nothing to install for the measurement itself.",
        },
      ],
      note: "$25 per km² is the low end, not a price list. The quote moves with terrain, measurement frequency and the accuracy you need.",
    },
    proof: [
      { value: "mm", label: "Accuracy comparable to ground methods" },
      { value: "24/7", label: "Works through cloud, smoke and darkness" },
      { value: "1990s", label: "History reconstructed from SAR archives" },
      { value: "from $25", label: "Per km² at the low end. It still depends on terrain, frequency and accuracy." },
    ],
    figures: {
      heroAlt: "Satellite above Earth for infrastructure monitoring",
      bridgeAlt: "Night view of a bridge with sparse displacement markers along the deck",
      bridgeCaption: "Illustrative view: where a bridge deck is moving, marked along the structure.",
      usesAlt: "Road and railway corridor at night",
      costCaption:
        "Ground instruments and drones are shown per kilometre of infrastructure. InSAR is shown from $25 per km², which is the low end. Per square kilometre that comes out lower than those methods. The actual price still depends on terrain, frequency and accuracy.",
    },
    comparison: {
      areaLabel: "Area covered",
      costLabel: "Cost of measurement",
      ground: "Ground instruments",
      drones: "Drones",
      insar: "InSAR (satellites)",
      groundCost: "$5,000 / km",
      dronesCost: "$20,625 / km",
      insarCost: "from $25 / km²",
    },
    explain: {
      eyebrow: "The service",
      isTitle: "What it is",
      isBody:
        "InSAR measures motion from orbit. Radar satellites image the same area again and again, and the comparison shows how far the ground or a structure has moved — to the millimeter. Radar works day and night, through cloud and smoke, and the archives can reconstruct that history back to the early 1990s.",
      forTitle: "What you use it for",
      forBody:
        "It shows where ground and infrastructure are moving, across wide areas, without a site visit. It points to the sections and assets that need a response, so inspections and budget land where they are actually needed.",
    },
    benefits: {
      eyebrow: "What you get",
      title: "A warning, a priority list, and a record.",
      items: [
        {
          title: "Early alerts",
          body: "Notice unusual displacement while there is still time to act.",
        },
        {
          title: "Damage prevented",
          body: "Respond before a crack, a settlement or a slope failure becomes a repair.",
        },
        {
          title: "A view of what comes next",
          body: "Trends from the archive show whether movement is steady, slowing or accelerating.",
        },
        {
          title: "Damage found",
          body: "See which assets and sections are already behaving differently from the rest.",
        },
        {
          title: "A first place to look",
          body: "Recommendations on what to inspect, and in which order.",
        },
        {
          title: "Evidence",
          body: "An independent measurement you can use in claims, disputes and warranty discussions.",
        },
      ],
    },
    platform: {
      title: "All of it in one web platform.",
      body: "You follow the monitored area online, with up to several measurements a month. Maps, time series and alerts stay in one place.",
      link: "How the processing works",
    },
    uses: {
      eyebrow: "Infrastructure",
      title: "The network, watched before it fails.",
      items: [
        {
          title: "Catch damage early",
          body: "For an owner, developer or contractor standing behind a road, a railway, a bridge or another asset. The data shows where a problem starts, and when.",
        },
        {
          title: "Dams, slopes and embankments",
          body: "Movement that would become a failure shows up while there is still time to act.",
        },
        {
          title: "Corridors, not single points",
          body: "Continuous oversight of change along roads, rail and other linear infrastructure, and across large sites.",
        },
        {
          title: "Keep the asset open",
          body: "Ground and structure movement that would otherwise close a line, a bridge or a site.",
        },
      ],
    },
    sectors: {
      eyebrow: "Who it is for",
      title: "The same measurement. A report written for your decision.",
      intro:
        "Processing stays equally rigorous. What changes is the monitoring design, the deliverables and the language of the report.",
      items: {
        critical: {
          title: "Critical infrastructure",
          body: "Clearer inspection priorities and fewer stoppages.",
        },
        energy: {
          title: "Energy networks",
          body: "Settlement around substations, pylons and foundations.",
        },
        roads: {
          title: "Roads, motorways and bridges",
          body: "Sections with unusual trends, and maintenance spent where it counts.",
        },
        rail: {
          title: "Rail",
          body: "Stability of track beds, embankments and slopes — fewer delays.",
        },
        construction: {
          title: "Construction and investment",
          body: "Monitoring before, during and after the build.",
        },
        generation: {
          title: "Power generation",
          body: "Plants, solar farms and wind farms.",
        },
        fuels: {
          title: "Fuels and commodity transport",
          body: "Tanks, pipelines, terminals and storage sites.",
        },
        mining: {
          title: "Mining",
          body: "Ground deformation, spoil heaps and slopes, including rehabilitation.",
        },
        insurance: {
          title: "Insurance",
          body: "Earlier sight of damage risk across a portfolio.",
        },
      },
    },
    faqEyebrow: "FAQ",
    faqTitle: "Questions buyers ask first",
    ctaTitle: "We will show you what InSAR reveals on your ground.",
    ctaBody:
      "Point us at an asset or a region. Together we will assess which displacements can be measured there.",
    ctaLabel: "Start with your site",
  },

  solutions: {
    hero: {
      eyebrow: "InSAR solutions",
      title: "InSAR monitoring built for your industry.",
      subtitle:
        "From a single asset to a whole network or region: monitoring services based on satellite radar and designed around specific risks.",
    },
    intro:
      "Each solution below reflects how that industry manages risk in practice. For a broader overview, see {insarSolutions} and {insarAnalytics}.",
    introLinks: {
      insarSolutions: "InSAR solutions",
      insarAnalytics: "InSAR analytics",
    },
    open: "View",
  },

  solutionDetail: {
    eyebrow: "Solution",
    challenge: "Challenge",
    approach: "Our approach",
    outcome: "Outcome",
    includes: "What the service covers.",
    deliverablesEyebrow: "Deliverables",
    deliverables: "What you receive.",
    useCasesEyebrow: "Use cases",
    useCases: "Who uses it, and why.",
    otherSolutionsEyebrow: "Other solutions",
    open: "View",
    notFound: "Solution not found",
    backToSolutions: "Back to solutions",
  },

  offerings: {
    infrastructure: {
      title: "Infrastructure",
      tagline: "Monitoring roads, bridges, railways and dams, from design to maintenance",
      description:
        "Millimeter-level displacement measurement of highways, bridges, track beds, embankments, dams and pipelines at every stage of an asset's life. We show which sections need attention before a failure occurs.",
    },
    mining: {
      title: "Mining",
      tagline: "Early warning of ground, slope and tailings facility deformation",
      description:
        "Continuous monitoring of pit slopes, waste dumps, tailings dams and subsidence above underground workings, with alert thresholds set individually for each asset.",
    },
    insurance: {
      title: "Insurance",
      tagline: "Independent ground-motion data for underwriting and claims",
      description:
        "InSAR analysis for whole portfolios and individual sites: subsidence, landslides and building movement. Supports underwriting, exposure review and claims verification.",
    },
    "oil-gas": {
      title: "Oil & Gas",
      tagline: "Monitoring surface displacement above oil and gas reservoirs",
      description:
        "Reservoir compaction and uplift, CO₂ storage integrity, and ground response around wells and facilities, measured regularly and consistently anywhere in the world.",
    },
    geohazards: {
      title: "Geohazards",
      tagline: "Detecting landslides and subsidence across large areas",
      description:
        "Wide-area InSAR screening shows active landslides, subsidence and tectonic motion across entire regions, long before the changes are visible on the ground.",
    },
    structural: {
      title: "Construction & buildings",
      tagline:
        "Monitoring buildings and project surroundings before, during and after construction",
      description:
        "Displacement history building by building, from a single façade to a whole district, using archive and current data. For developers, contractors and property managers.",
    },
  },

  solutionPages: {
    geohazards: {
      intro:
        "From mountain terrain to the coast, landslides and subsidence rarely give clear warning. SAR Metrics turns decades of radar archives into a continuously updated picture of where the ground is moving, so action can be taken before a disaster.",
      challenge:
        "Landslides, subsidence and tectonic motion threaten people and infrastructure across large areas that are hard to cover with ground surveys.",
      approach:
        "Wide-area InSAR screening identifies areas of active deformation at regional scale. Where we detect movement, we add higher-resolution imagery for denser measurement.",
      outcome:
        "Civil protection authorities and insurers get an up-to-date, prioritized picture of where the ground is moving and how fast.",
      features: [
        {
          title: "Regional screening",
          body: "Baseline maps of ground displacement at regional or national scale.",
        },
        {
          title: "Detailed analysis",
          body: "High-resolution measurement wherever movement is detected.",
        },
        {
          title: "Alert thresholds",
          body: "Velocity and acceleration alerts set individually for each site.",
        },
      ],
      metrics: [
        { value: "1 mm/yr", label: "Velocity sensitivity" },
        { value: "100,000 km²", label: "Typical screening coverage" },
        { value: "Since 1992", label: "Depth of the data archive" },
      ],
      deliverables: [
        "Regional displacement velocity maps in GIS formats",
        "A prioritized inventory of active deformation areas",
        "Time series for individual sites and acceleration alerts",
        "Quarterly reports with expert interpretation",
      ],
      useCases: [
        {
          title: "Civil protection",
          body: "Prioritize field inspections and plan evacuation at regional scale.",
        },
        {
          title: "Road and rail authorities",
          body: "Screen road and rail corridors for unstable slopes before they interrupt traffic.",
        },
        {
          title: "Insurers & reinsurers",
          body: "Assess portfolio exposure to subsidence and landslide risk.",
        },
      ],
    },
    mining: {
      intro:
        "Everything at a mine moves: pit slopes, waste dumps, tailings facilities and the ground above underground workings. The question is how fast, and what it means. SAR Metrics combines satellite data, ground-based radar and in-situ sensor data into one geotechnical picture.",
      challenge:
        "Pit slopes, tailings dams and waste dumps can lose stability without clear warning, with catastrophic consequences for people and the environment.",
      approach:
        "Continuous satellite SAR monitoring, supplemented with ground-based radar data, provides displacement time series for individual benches and tailings cells in near real time.",
      outcome:
        "Mine geotechnical teams receive early-warning indicators every day, measured against stability thresholds set for each asset.",
      features: [
        {
          title: "Pit slope stability",
          body: "Displacement time series for individual benches, in active and inactive pits.",
        },
        {
          title: "Tailings facilities",
          body: "Dam movement tracked cell by cell, with alert thresholds.",
        },
        {
          title: "Post-closure monitoring",
          body: "Long-term observation of subsidence and rebound after a site closes.",
        },
      ],
      metrics: [
        { value: "Weekly", label: "Data updates for critical assets" },
        { value: "1 mm", label: "Per-point precision after stacking" },
        { value: "GISTM", label: "Aligned with the tailings standard" },
      ],
      deliverables: [
        "Deformation maps for pit benches and tailings cells",
        "Displacement velocity and acceleration alerts in operations dashboards",
        "Independent reports for regulators and the board",
        "Long-term reference trends during and after closure",
      ],
      useCases: [
        {
          title: "Geotechnical engineering",
          body: "Validate slope stability models against continuous measurements covering the whole site.",
        },
        {
          title: "Tailings management",
          body: "Demonstrate dam safety to regulators and local communities, in line with GISTM.",
        },
        {
          title: "Closed and legacy sites",
          body: "Measure residual subsidence many years after operations end.",
        },
      ],
    },
    insurance: {
      intro:
        "An insurer needs independent data that works for a single claim and for a whole portfolio. SAR Metrics uses satellite radar to measure ground and building displacement across portfolios, disaster-affected areas and disputed sites.",
      challenge:
        "Underwriters and claims adjusters often make high-value decisions based on incomplete, inconsistent or late information from the field.",
      approach:
        "Wide-area InSAR screening shows where exposure is elevated within a portfolio. Site-level analysis then reconstructs the displacement history before, during and after an event.",
      outcome:
        "Insurance teams gain reliable displacement data for underwriting, accumulation control, claims verification and expert opinions.",
      features: [
        {
          title: "Portfolio screening",
          body: "Insured assets and regions ranked by observed subsidence, landslide activity and building settlement.",
        },
        {
          title: "Event reconstruction",
          body: "The displacement history around a reported loss, rebuilt from SAR archives.",
        },
        {
          title: "Independent reports",
          body: "Evidence prepared for adjusters, brokers and legal teams.",
        },
      ],
      metrics: [
        { value: "Since 1992", label: "Archive depth for event reconstruction" },
        { value: "Whole portfolio", label: "Analysis at insurance-portfolio scale" },
        { value: "1 mm/yr", label: "Sensitivity to slow movement" },
      ],
      deliverables: [
        "Portfolio exposure maps with priority areas marked",
        "Displacement time series for properties and infrastructure corridors",
        "Pre- and post-event displacement reconstructions for claims handling",
        "Expert opinions supporting underwriting and loss assessment",
      ],
      useCases: [
        {
          title: "Underwriting",
          body: "Check new risks for subsidence, slope instability and long-term deformation.",
        },
        {
          title: "Claims & loss adjusting",
          body: "Verify whether measured displacement matches the timing and nature of the reported loss.",
        },
        {
          title: "Portfolio management",
          body: "Find accumulations of ground-motion exposure across regions, sectors and asset classes.",
        },
      ],
    },
    infrastructure: {
      intro:
        "Infrastructure moves throughout its service life: it settles under load, responds to nearby works and ages. SAR Metrics provides a continuous displacement record that lets you compare design assumptions with how the asset actually behaves.",
      challenge:
        "Dams, bridges, tunnels, embankments and track beds deteriorate unnoticed. Visual inspection alone will not catch the millimeter-scale changes that precede serious damage.",
      approach:
        "InSAR monitoring covers the whole asset lifecycle in one continuous record: a baseline before construction, control during works and surveillance in operation.",
      outcome:
        "Owners and operators reduce investment risk and extend asset life because they plan maintenance from measurements. Inspections and budget go where they are actually needed.",
      features: [
        {
          title: "Pre-construction baseline",
          body: "Years of ground displacement history before works begin.",
        },
        {
          title: "Construction monitoring",
          body: "Displacement caused by the works, tracked in real time.",
        },
        {
          title: "Operational monitoring",
          body: "Continuous surveillance throughout the asset's service life.",
        },
      ],
      metrics: [
        { value: "30+ yrs", label: "History available as a baseline" },
        { value: "Weekly", label: "Measurement frequency on active sites" },
        { value: "BIM/GIS", label: "Integration with asset management systems" },
      ],
      deliverables: [
        "Displacement dashboards for individual assets",
        "Reports on settlement caused by construction works",
        "Screening of whole road corridors and railway lines",
        "Independent evidence for permits, audits and disputes",
      ],
      useCases: [
        {
          title: "Railway lines",
          body: "Stability of track beds, embankments and slopes along the whole line, for fewer speed restrictions and delays.",
        },
        {
          title: "Roads & highways",
          body: "Identify sections with unusual displacement trends and plan maintenance rationally.",
        },
        {
          title: "Bridges & viaducts",
          body: "A displacement record for each pier, set against traffic load and season.",
        },
        {
          title: "Dams & reservoirs",
          body: "Detect movement of the crest and abutments along the whole structure.",
        },
        {
          title: "Tunnels & metro",
          body: "Surface response to underground works and TBM advance.",
        },
        {
          title: "Power networks",
          body: "Ground settlement around substations, pylons and foundations.",
        },
      ],
    },
    "oil-gas": {
      intro:
        "Reservoir production, well condition and storage integrity all leave a trace on the ground surface. SAR Metrics reads that signal above producing fields, abandoned wells and CO₂ storage sites worldwide.",
      challenge:
        "Production and injection cause surface displacement that carries information about reservoir compaction, well condition and storage behavior.",
      approach:
        "Regular InSAR measurement over fields and storage sites produces subsidence and uplift maps tied to production cycles.",
      outcome:
        "Reservoir teams compare surface displacement with downhole data to optimize production and demonstrate CO₂ storage integrity.",
      features: [
        {
          title: "Reservoir surveillance",
          body: "Compaction and rebound tracked above producing fields.",
        },
        {
          title: "CO₂ storage integrity",
          body: "Surface response to injection at storage sites.",
        },
        {
          title: "Permit compliance",
          body: "Independent data for regulators and stakeholders.",
        },
      ],
      metrics: [
        { value: "1 mm", label: "Detectable uplift above a storage site" },
        { value: "Monthly", label: "Standard measurement frequency" },
        { value: "Global", label: "Coverage from a single platform" },
      ],
      deliverables: [
        "Field-wide subsidence and uplift maps",
        "Time series for wellheads, pads and injection points",
        "Input data for reservoir model history matching",
        "Monitoring, reporting and verification (MRV) packs for CCS projects, ready for the regulator",
      ],
      useCases: [
        {
          title: "Producing fields",
          body: "Relate compaction to production rate and reservoir pressure.",
        },
        {
          title: "CCS & storage",
          body: "Independently verify that injected CO₂ stays in the storage site.",
        },
        {
          title: "Abandoned wells",
          body: "Screen large groups of inactive wells for surface anomalies.",
        },
      ],
    },
    structural: {
      intro:
        "Every façade that reflects a radar signal is a potential measurement point. SAR Metrics turns the built environment into a deformation map, building by building, with history going back to the early 1990s. That shows how the ground and neighboring structures behaved before a project and how they respond to construction.",
      challenge:
        "Buildings settle, tilt and crack because of deep excavations nearby, changes in groundwater level and old foundations. Without pre-construction data it is hard to establish cause and liability.",
      approach:
        "Persistent scatterer InSAR (PS-InSAR) turns façades and roofs into measurement points. SAR archives provide the baseline before the project, and current imagery provides control during and after the works.",
      outcome:
        "Developers, contractors, property managers, city authorities and forensic engineers get the displacement history of any building on demand.",
      features: [
        {
          title: "Building by building",
          body: "Displacement of individual structures, measured at façade level.",
        },
        {
          title: "Archive analysis",
          body: "Displacement history from 1992 onward, wherever data exists.",
        },
        {
          title: "Evidence",
          body: "Settlement documentation prepared for use in court proceedings.",
        },
      ],
      metrics: [
        { value: "1992", label: "Earliest archive imagery" },
        { value: ">10k", label: "Measurement points per km² in dense urban areas" },
        { value: "0.1 mm/yr", label: "Long-term velocity precision" },
      ],
      deliverables: [
        "Displacement time series for each building",
        "Point clouds on façades and roofs with displacement velocity",
        "Historical reconstructions for pre-event analysis",
        "Expert opinions for litigation, insurance and property disputes",
      ],
      useCases: [
        {
          title: "Developers & contractors",
          body: "Document the condition of the ground and neighboring buildings before construction, during it and through the warranty period.",
        },
        {
          title: "Property owners & managers",
          body: "Spot tilt and settlement early, before they threaten the structure.",
        },
        {
          title: "Forensic engineering",
          body: "Reconstruct a building's displacement history around the event that caused damage.",
        },
      ],
    },
  },

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: "InSAR analytics",
        title: "InSAR analytics: from measurement to decision.",
        subtitle:
          "Displacement maps, time series and alerts for the teams responsible for the safety of assets and land.",
      },
      sections: {
        problem: {
          title: "The problem InSAR analytics solves",
          paragraphs: [
            "InSAR analytics is the processing of satellite radar measurements into displacement maps, trends and alerts. It shows where ground and structures are moving, how fast, and whether the movement is accelerating.",
            "Critical assets move slowly for a long time, until they fail. Subsidence, slope creep and structural settlement usually go unnoticed until the next inspection or until damage appears.",
            "InSAR analytics provides a continuous measurement layer over large areas, without installing sensors on every kilometer. Inspections and budget can be directed to where they are actually needed.",
          ],
        },
        howWeDeliver: {
          title: "How the results are produced",
          paragraphs: [
            "We stack series of SAR images, form interferograms, select persistent scatterers and convert the change in signal phase into displacement along the satellite line of sight, accurate to the millimeter.",
            "Our algorithms then separate trend, seasonality and anomalies. The results, which are maps, point histories and alerts, are available on the web platform and by API. The full process is described on the Technology page.",
          ],
        },
        whatYouReceive: {
          title: "What you receive",
          paragraphs: [
            "A regional baseline for screening, site-level monitoring of priority assets, historical analysis from archives, and data in the formats your engineers use every day.",
            "Results are prepared for the work of geotechnical engineers, asset managers and risk teams: early warning of unusual displacement, trends that indicate what to expect, and recommendations on what to check first and where.",
          ],
        },
      },
      industries: {
        eyebrow: "Industries that use InSAR analytics",
        title: "Industries that use InSAR analytics",
      },
      footer: "See also {insarSolutions}, {spaceMonitoring} and the {glossary}.",
      footerLinks: {
        insarSolutions: "InSAR solutions by industry",
        spaceMonitoring: "space monitoring",
        glossary: "InSAR glossary entry",
      },
      faqTitle: "InSAR analytics: questions and answers",
      ctaTitle: "See InSAR analytics for your area.",
      ctaLabel: "Contact us",
    },
    insarSolutions: {
      hero: {
        eyebrow: "InSAR solutions",
        title: "InSAR solutions built around how each industry manages risk.",
        subtitle:
          "One radar technology, six services designed for the decisions your teams make every day.",
      },
      whyDedicated: {
        title: "Why industry-specific solutions",
        paragraphs: [
          "A general-purpose displacement map rarely answers an industry's specific questions. An infrastructure operator wants to see the asset across its whole lifecycle, a mine needs alert thresholds, a contractor needs a pre-construction baseline, an insurer needs independent evidence, and a reservoir operator needs field-scale trends.",
          "That is why SAR Metrics offers InSAR analytics as industry solutions: the processing is always equally rigorous, while the monitoring design, the deliverables and the language of the reports change. The technical basis is described on the {insarAnalytics} and {technology} pages.",
        ],
        links: {
          insarAnalytics: "InSAR analytics",
          technology: "Technology",
        },
      },
      footer:
        "Prefer to start from what the technology can do? See {allSolutions}, or find out how {spaceMonitoring} covers both entire regions and single buildings.",
      footerLinks: {
        allSolutions: "all solutions",
        spaceMonitoring: "space monitoring",
      },
      faqTitle: "InSAR solutions: questions and answers",
      ctaTitle: "Let's design InSAR monitoring for your assets.",
      ctaLabel: "Contact us",
      open: "View",
    },
    spaceMonitoring: {
      hero: {
        eyebrow: "Space monitoring",
        title: "Space monitoring: displacement seen from orbit.",
        subtitle:
          "SAR radar satellites observe assets and entire regions day and night, even through cloud. InSAR analytics turns that imagery into ground displacement data ready for everyday use.",
      },
      whyFromSpace: {
        title: "Why monitor from orbit",
        paragraphs: [
          "Ground survey networks are accurate, but they cover single points and are costly to maintain. Optical satellites provide context but fail under cloud and at night. SAR radar monitoring fills that gap: regular passes, independence from weather, and coverage from a single façade to a whole region.",
          "SAR Metrics runs the whole process as a service, from the imagery acquisition plan through InSAR processing and analytics to delivery of results. Engineering and risk teams receive information they can act on. Read more on the {insarAnalytics} and {insarSolutions} pages.",
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
            body: "Displacement maps for transport corridors, basins and cities show which places need attention before any sensors have to be installed. A good starting point for network operators, geohazard programs and portfolio risk assessment.",
          },
          focused: {
            title: "Site-level asset monitoring",
            body: "Once priority locations are known, we increase the frequency and detail of measurement over pits, dams, plants, bridges and city districts, with alert thresholds set individually for each asset.",
          },
          historical: {
            title: "Historical analysis",
            body: "We reconstruct years of displacement history from SAR archives to establish a baseline, document claims and understand how an area behaved before any sensors were in place.",
          },
        },
      },
      fromOrbitToAction: {
        title: "From orbit to decision",
        paragraphs: [
          "Space monitoring is only valuable when the results reach the people who make decisions. So we deliver them as GeoJSON files, rasters and tables, on the web platform and through an alerting API, and we define the area of interest (AOI) around how your organization runs inspections and escalates risk.",
          "The simplest way to start is with a pilot area: review the history from the archives, then move to regular monitoring. Explore {technology}, read the {glossary}, or {contact}.",
        ],
        links: {
          technology: "our processing chain",
          glossary: "glossary entry",
          contact: "contact us",
        },
      },
      faqTitle: "Space monitoring: questions and answers",
      ctaTitle: "Bring your assets under space monitoring.",
      ctaBody: "Tell us the region or asset. We will show what SAR and InSAR data already reveal.",
      ctaLabel: "Book a presentation",
    },
  },

  resources: {
    hero: {
      eyebrow: "Resources",
      title: "Understand InSAR before you decide.",
      subtitle:
        "Plain-language explanations of InSAR analytics, space monitoring and the terms engineers use.",
    },
    hubs: {
      glossary: {
        title: "Glossary",
        body: "Definitions of InSAR, PS-InSAR, SAR, interferometry, space monitoring and related terms.",
      },
      faq: {
        title: "FAQ",
        body: "Practical answers on accuracy, weather independence, cost, industries, how results are delivered and getting started.",
      },
      insarAnalytics: {
        title: "InSAR analytics",
        body: "How displacement data is produced and how it is used on critical assets.",
      },
      insarSolutions: {
        title: "InSAR solutions",
        body: "Monitoring services based on satellite radar, built around each industry's needs.",
      },
      spaceMonitoring: {
        title: "Space monitoring",
        body: "Wide-area and site-level monitoring from orbit, wherever ground movement is the risk.",
      },
      technology: {
        title: "Technology",
        body: "Four stages, from SAR data acquisition to analytics and alerts.",
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
          "Short definitions you can pass on to colleagues and decision-makers. Each term links to a full explanation.",
      },
      footer: "Looking for answers rather than definitions? See the {faq}.",
      footerLink: "FAQ",
    },
    termPage: {
      notFound: "Term not found",
      backToGlossary: "Back to glossary",
      relatedTerms: "Related terms",
      allTerms: "All glossary terms",
    },
    terms: {
      insar: {
        term: "InSAR",
        shortDefinition:
          "Interferometric Synthetic Aperture Radar: a satellite technique that measures the displacement of ground and structures with millimeter accuracy.",
        body: [
          "InSAR (Interferometric Synthetic Aperture Radar) compares radar images of the same place taken at different times. Small changes in the phase of the radar signal correspond to surface displacement along the satellite line of sight.",
          "Unlike optical imagery, InSAR works through cloud and smoke and at night, because SAR is an active microwave sensor. That makes it the basis for continuous space monitoring of infrastructure, mines, reservoirs and geohazards.",
          "SAR Metrics processes InSAR measurements into time series, maps and alerts available on a web platform and by API, so action can be taken before displacement causes damage.",
        ],
      },
      "ps-insar": {
        term: "PS-InSAR",
        shortDefinition:
          "Persistent Scatterer InSAR: a method that tracks points which reflect the radar signal consistently across long series of images and measures their displacement to the millimeter.",
        body: [
          "PS-InSAR (Persistent Scatterer InSAR) uses points that stay coherent across many consecutive satellite passes: rooftops, bridges, rail tracks, rock outcrops and other natural and engineered features.",
          "Long time series for those points reveal slow deformation trends, seasonal cycles and anomalies that would be lost in averaged regional results.",
          "SAR Metrics applies PS-InSAR processing where an asset needs a dense network of points and a millimeter-level displacement history, then adds analytics and alerts on top.",
        ],
      },
      sar: {
        term: "SAR",
        shortDefinition:
          "Synthetic Aperture Radar: an active satellite sensor that images the Earth's surface day and night, in any weather.",
        body: [
          "Synthetic Aperture Radar (SAR) transmits microwave pulses and records their echo. The satellite's motion is used to synthesize a very long antenna, which produces high-resolution images without sunlight.",
          "Modern constellations, including Sentinel-1 and commercial small satellites, return over the same areas regularly. This builds the archives that InSAR analytics relies on.",
          "SAR Metrics processes series of SAR images into displacement data for industry, infrastructure and civil protection.",
        ],
      },
      interferometry: {
        term: "Interferometry",
        shortDefinition:
          "The comparison of two SAR images to determine the phase difference that corresponds to surface displacement.",
        body: [
          "Radar interferometry forms an interferogram from two complex SAR images of the same area. The phase difference carries information about the change in distance between the satellite and the ground.",
          "After accounting for orbit geometry, topography and atmospheric effects, the remaining phase change is interpreted as displacement of the ground or a structure.",
          "Interferometry is the key step between raw SAR data and the InSAR analytics used in monitoring.",
        ],
      },
      "ground-deformation": {
        term: "Ground deformation",
        shortDefinition:
          "Change in the position of the Earth's surface over time: subsidence, uplift, landslides and tectonic motion.",
        body: [
          "Ground deformation is any measurable displacement of the surface: slow subsidence under cities, pit slope movement at mines, landslide creep, or compaction above oil and gas reservoirs.",
          "Satellite InSAR can map deformation over large areas and reconstruct years of its history from SAR archives, often from a period before any ground instruments were installed.",
          "Knowing how deformation develops helps to prioritize inspections, plan reinforcement and reduce risk.",
        ],
      },
      "persistent-scatterer": {
        term: "Persistent scatterer",
        shortDefinition:
          "A point that reflects the radar signal consistently, stays coherent across many SAR images and can therefore be tracked over time.",
        body: [
          "A persistent scatterer (PS) is a point on the ground that returns a strong, repeatable radar echo on every satellite pass. Typical examples are metal structures, building corners, bridges and exposed rock.",
          "PS-InSAR time series are built on these points. They make it possible to measure millimeter-scale displacement even in complex urban or industrial settings.",
          "A dense network of persistent scatterers turns cities and infrastructure corridors into natural measurement networks.",
        ],
      },
      "space-monitoring": {
        term: "Space monitoring",
        shortDefinition:
          "Observing assets and regions from orbit with satellite sensors such as SAR, continuously and over large areas.",
        body: [
          "Space monitoring uses Earth-observation satellites to keep watch over critical assets and regions without building dense ground networks everywhere.",
          "Monitoring based on SAR radar is particularly well suited to measuring displacement: it works regardless of weather and time of day, at scales from a single structure to an entire basin.",
          "SAR Metrics delivers space monitoring as InSAR analytics: baselines, site-level monitoring, historical analysis and alerts.",
        ],
      },
      "millimetric-displacement": {
        term: "Millimetric displacement",
        shortDefinition:
          "Displacement of ground or structures on the order of millimeters, measured by satellite radar interferometry.",
        body: [
          "Millimetric displacement means that the movement being detected and tracked is on the order of millimeters per year or between consecutive satellite passes, far below what can be noticed early by eye.",
          "InSAR measures the change in radar signal phase along the satellite line of sight and converts it into displacement time series for selected points and areas.",
          "Millimeter-scale signals often precede visible cracking, tilt and failure. They give time to respond.",
        ],
      },
      "satellite-radar": {
        term: "Satellite radar",
        shortDefinition:
          "Radar observation from orbit, usually with SAR, used to image terrain and measure change regardless of daylight and cloud cover.",
        body: [
          "Satellite radar is a microwave imaging system carried on board a satellite. In civilian use the dominant type is Synthetic Aperture Radar (SAR).",
          "The sensor illuminates the ground itself, so it images day and night, in any weather. That is what makes continuous, regular monitoring possible.",
          "SAR Metrics bases its InSAR analytics on radar data archives and on commercial imagery ordered over specified areas.",
        ],
      },
      "wide-area-monitoring": {
        term: "Wide-area monitoring",
        shortDefinition:
          "Screening large areas, such as transport corridors, basins and cities, for ground displacement using consistent satellite coverage.",
        body: [
          "Wide-area monitoring uses series of SAR images to produce displacement maps and point out places that need attention, without first surveying each asset individually.",
          "It is usually the first step in geohazard assessment, insurance portfolio analysis and monitoring programs for infrastructure networks.",
          "Once higher-risk locations are identified, site-level monitoring increases the resolution and frequency of measurement over critical sites.",
        ],
      },
    },
  },

  faqs: {
    site: [
      {
        question: "What is InSAR analytics?",
        answer:
          "InSAR analytics turns satellite interferometric measurements into practical information: displacement maps, time series, trends and alerts. SAR Metrics processes series of SAR images and makes the results available on a web platform, as files and by API, so teams can manage the risk from ground and structural movement.",
      },
      {
        question: "How accurate is satellite displacement measurement?",
        answer:
          "With suitable viewing geometry and signal coherence, InSAR measures the displacement of persistent scatterers along the satellite line of sight with millimeter-level accuracy, comparable to ground-based methods. Accuracy depends on viewing geometry, atmospheric conditions, land cover and the processing method, which is why we scope the analysis to the asset and region.",
      },
      {
        question: "Does space monitoring work through cloud and at night?",
        answer:
          "Yes. Synthetic Aperture Radar (SAR) is an active microwave sensor, so it images the ground through cloud and smoke, including at night. That reliability is one of the main reasons radar is chosen over optical imagery alone for continuous monitoring.",
      },
      {
        question: "Which industries are SAR Metrics InSAR solutions designed for?",
        answer:
          "Our solutions are designed for road and rail infrastructure operators, construction companies and developers, mines, the oil and gas sector, insurers and civil protection services: anywhere that knowing about millimeter-scale displacement reduces risk or helps establish liability.",
      },
      {
        question: "Can past displacement be reconstructed?",
        answer:
          "Yes. SAR archives make it possible to reconstruct displacement history, often back to the early 1990s depending on coverage of the area. Archive analysis helps to establish the cause of damage, define a baseline and assess whether claims are justified.",
      },
      {
        question: "How are results delivered?",
        answer:
          "Results include displacement maps, point time series, exports to GeoJSON, raster and tabular formats, a web platform and an alerting API. We match the delivery format to how your engineers and risk teams work.",
      },
      {
        question: "What is the difference between wide-area and site-level monitoring?",
        answer:
          "Wide-area monitoring is a fast screening of entire regions and portfolios that shows which places need attention. Site-level monitoring increases the detail and frequency of measurement over critical assets once the risk locations are known. Many programs combine both.",
      },
      {
        question: "How much does InSAR monitoring cost?",
        answer:
          "The price depends on the terrain, how often you measure, and the accuracy you need. At the low end it can be about $25 per square kilometre. Per square kilometre that is less than ground instruments or drones. We prepare a quote once you tell us the asset or area.",
      },
      {
        question: "How do we get started?",
        answer:
          "Tell us the asset or area. We check the available SAR data, propose a monitoring design and, in many cases, show initial results from archive data before you commit to ongoing monitoring.",
      },
    ],
    insarAnalytics: [
      {
        question: "How is InSAR analytics different from raw SAR imagery?",
        answer:
          "A raw SAR image shows how the surface reflects the radar signal. InSAR analytics derives displacement from phase changes over time and presents it as maps, trends and alerts that decisions can be based on.",
      },
      {
        question: "What decisions does InSAR analytics support?",
        answer:
          "Most often: where to send an inspection, when to scale back operations, whether a slope is accelerating, how a structure has moved since construction finished, and how to assess ground-motion risk, for example when underwriting a policy.",
      },
      {
        question: "Are ground instruments needed?",
        answer:
          "They are not required, but they remain valuable for calibration and local confirmation of results. InSAR analytics adds wide coverage and many years of history, including in places where sensors were never installed.",
      },
    ],
    insarSolutions: [
      {
        question: "What InSAR solutions does SAR Metrics offer?",
        answer:
          "Monitoring built around the needs of each industry: infrastructure and rail, mining, construction, oil and gas, insurance and geohazard protection. All solutions use the same satellite radar technology.",
      },
      {
        question: "Can one program cover different types of assets?",
        answer:
          "Yes. A typical program starts with a regional baseline and then adds site-level monitoring of priority assets. Shared processing and a single delivery format keep such a program consistent.",
      },
      {
        question: "How quickly can monitoring start?",
        answer:
          "Analysis based on archive data can usually start within days to weeks, depending on the size of the area and the scope of results. The frequency of ongoing measurement depends on satellite availability and the imaging schedule.",
      },
    ],
    spaceMonitoring: [
      {
        question: "What does space monitoring give asset owners and operators?",
        answer:
          "The ability to observe ground and structural displacement from orbit at scale, without installing sensors on every kilometer of a route or at every asset in a portfolio.",
      },
      {
        question: "Is space monitoring only suitable for large areas?",
        answer:
          "No. The same SAR data is used both to screen entire regions and to produce time series for individual buildings. Programs usually combine regional context with monitoring of selected assets.",
      },
      {
        question: "How does SAR Metrics space monitoring relate to InSAR?",
        answer:
          "Our space monitoring is based on InSAR: it covers radar image acquisition, interferometric processing, analytics and alerts, in a form ready for everyday use.",
      },
    ],
    offer: [
      {
        question: "How much does InSAR monitoring cost?",
        answer:
          "There is no single rate. The price depends on the terrain, how often we measure, and the accuracy you need. At the low end it can be about $25 per square kilometre. Per square kilometre that is less than ground instruments or drones.",
      },
      {
        question: "How does that compare with the cost of one incident?",
        answer:
          "A derailment tied to track condition, or a stoppage at an open-pit mine, runs into the millions: downtime, repairs, compensation and lost contracts. Monitoring is there to show movement on a track bed, slope or embankment before that happens. One avoided incident covers many years of the subscription.",
      },
      {
        question: "What is included in the subscription?",
        answer:
          "Displacement maps, time series and trends, alerts on unusual movement, a historical baseline from the SAR archive where coverage exists, and recommendations on what to inspect first. You follow it on a web platform, with up to several measurements a month.",
      },
      {
        question: "Is the accuracy really comparable to ground surveys?",
        answer:
          "On suitable geometry and coherent targets, line-of-sight displacement is measured to the millimeter, in the same class as ground methods. The difference is coverage: a satellite measures a corridor or a region without instruments installed for the measurement itself, day and night, through cloud.",
      },
      {
        question: "How do we start?",
        answer:
          "Point us at an asset or a region. We check the available satellite data and show which displacements can be measured there. Many programmes start with the archive, then move to regular monitoring.",
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      title: "Questions worth asking before you deploy InSAR.",
      subtitle:
        "Practical answers on capability, coverage, cost and how results are delivered, with links to the detail.",
    },
    sectionEyebrow: "Answers",
    sectionTitle: "Frequently asked questions",
    footer:
      "Looking for definitions? Browse the {glossary}. The commercial offer, including indicative pricing, is on the {offer} page. Services are also described on the {insarAnalytics}, {insarSolutions} and {spaceMonitoring} pages.",
    footerLinks: {
      glossary: "glossary",
      offer: "offer",
      insarAnalytics: "InSAR analytics",
      insarSolutions: "InSAR solutions",
      spaceMonitoring: "space monitoring",
    },
    ctaTitle: "Have a different question?",
    ctaLabel: "Write to us",
  },

  common: {
    home: "Home",
    supportedBy: "Supported by",
    readMore: "Read more",
    open: "View",
    language: "Language",
    backToSolutions: "Back to solutions",
  },

  errors: {
    notFound: {
      title: "404",
      subtitle: "Page not found",
      description: "The page you are looking for does not exist or has been moved.",
      homeButton: "Go home",
    },
    error: {
      title: "This page could not be loaded",
      description: "Something went wrong on our end. Refresh the page or go back to the home page.",
      tryAgain: "Try again",
      goHome: "Go home",
    },
  },
};
