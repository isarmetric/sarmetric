export type FaqEntry = {
  question: string;
  answer: string;
};

export const siteFaqs: FaqEntry[] = [
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
];

export const insarAnalyticsFaqs: FaqEntry[] = [
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
];

export const insarSolutionsFaqs: FaqEntry[] = [
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
];

export const spaceMonitoringFaqs: FaqEntry[] = [
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
];
