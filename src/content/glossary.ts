export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  body: string[];
  relatedSlugs: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "insar",
    term: "InSAR",
    shortDefinition:
      "Interferometric Synthetic Aperture Radar — a satellite technique that measures ground and structural movement with millimetric precision.",
    body: [
      "InSAR (Interferometric Synthetic Aperture Radar) compares pairs of radar images acquired over the same place at different times. Tiny changes in the radar signal’s phase translate into surface displacement along the satellite’s line of sight.",
      "Unlike optical imagery, InSAR works through cloud, smoke and darkness because SAR is an active microwave sensor. That makes it a foundation for operational space monitoring of infrastructure, mines, reservoirs and geohazards.",
      "SAR Metrics turns InSAR measurements into decision-ready analytics — time series, maps, alerts and APIs — so operators can act before movement becomes damage.",
    ],
    relatedSlugs: ["sar", "interferometry", "ps-insar", "space-monitoring"],
  },
  {
    slug: "ps-insar",
    term: "PS-InSAR",
    shortDefinition:
      "Persistent Scatterer InSAR — a method that tracks stable radar reflectors over long time series for millimeter-level displacement.",
    body: [
      "PS-InSAR (Persistent Scatterer InSAR) focuses on points that remain coherent across many satellite passes: rooftops, bridges, rail, rock outcrops and other engineered or natural reflectors.",
      "By building long time series on those points, PS-InSAR recovers slow deformation trends, seasonal cycles and anomalies that would be lost in noisy wide-area averages.",
      "SAR Metrics uses PS-InSAR style processing where assets need dense, millimetric histories — then layers analytics and alerting for operators.",
    ],
    relatedSlugs: ["insar", "persistent-scatterer", "millimetric-displacement"],
  },
  {
    slug: "sar",
    term: "SAR",
    shortDefinition:
      "Synthetic Aperture Radar — an active satellite sensor that images Earth’s surface day and night, in any weather.",
    body: [
      "Synthetic Aperture Radar (SAR) transmits microwave pulses and records the echoes. By synthesizing a long antenna from the satellite’s motion, it produces high-resolution radar images independent of sunlight.",
      "Modern constellations (including Sentinel-1 and commercial small-sats) revisit the same ground tracks regularly, creating the archives InSAR analytics rely on.",
      "SAR Metrics processes SAR stacks into displacement products for industry and civil protection.",
    ],
    relatedSlugs: ["insar", "interferometry", "space-monitoring"],
  },
  {
    slug: "interferometry",
    term: "Interferometry",
    shortDefinition:
      "The comparison of two SAR images to extract phase differences that correspond to surface displacement.",
    body: [
      "Radar interferometry forms an interferogram by combining two complex SAR images of the same area. The phase difference encodes changes in distance between the satellite and the ground.",
      "After correcting for orbit geometry, topography and atmospheric effects, remaining phase change is interpreted as ground or structural movement.",
      "Interferometry is the core step between raw SAR acquisition and InSAR analytics used for monitoring.",
    ],
    relatedSlugs: ["sar", "insar", "ground-deformation"],
  },
  {
    slug: "ground-deformation",
    term: "Ground deformation",
    shortDefinition:
      "Change in the Earth’s surface position over time — including subsidence, uplift, landslides and tectonic motion.",
    body: [
      "Ground deformation covers any measurable movement of the land surface: slow subsidence under cities, pit-wall motion at mines, landslide creep, or reservoir compaction above oil and gas fields.",
      "Satellite InSAR can map deformation over wide areas and reconstruct years of history from SAR archives — often before ground instruments are installed.",
      "Understanding deformation patterns helps operators prioritize inspection, reinforce assets and reduce risk.",
    ],
    relatedSlugs: ["insar", "millimetric-displacement", "space-monitoring"],
  },
  {
    slug: "persistent-scatterer",
    term: "Persistent scatterer",
    shortDefinition:
      "A stable radar reflector that remains coherent across many SAR acquisitions and can be tracked over time.",
    body: [
      "A persistent scatterer is a point on the ground that returns a strong, stable radar echo from pass to pass — typically metal structures, building corners, bridges or exposed rock.",
      "These points anchor PS-InSAR time series and allow millimetric displacement to be measured even in complex urban or industrial scenes.",
      "Dense persistent-scatterer networks turn cities and corridors into continuous monitoring grids.",
    ],
    relatedSlugs: ["ps-insar", "insar", "millimetric-displacement"],
  },
  {
    slug: "space-monitoring",
    term: "Space monitoring",
    shortDefinition:
      "Observing assets and regions from orbit — using satellite sensors such as SAR for continuous, wide-area situational awareness.",
    body: [
      "Space monitoring uses Earth-observation satellites to watch critical assets and regions without installing dense ground networks everywhere.",
      "SAR-based space monitoring is especially powerful for movement: it measures displacement through weather and darkness, at scales from individual structures to entire basins.",
      "SAR Metrics delivers space monitoring as operational InSAR analytics — baselines, focused campaigns, historical reconstruction and alerting.",
    ],
    relatedSlugs: ["insar", "sar", "wide-area-monitoring"],
  },
  {
    slug: "millimetric-displacement",
    term: "Millimetric displacement",
    shortDefinition:
      "Ground or structural movement measured at the millimeter scale using satellite radar interferometry.",
    body: [
      "Millimetric displacement means detecting and tracking movement on the order of millimeters per year or per revisit — far below what visual inspection can reliably catch early.",
      "InSAR achieves this by measuring radar phase change along the satellite line of sight, then converting it into displacement time series for points and areas of interest.",
      "Early millimetric signals often precede visible cracking, tilt or failure — giving operators time to intervene.",
    ],
    relatedSlugs: ["insar", "ps-insar", "ground-deformation"],
  },
  {
    slug: "satellite-radar",
    term: "Satellite radar",
    shortDefinition:
      "Radar sensing from orbit — typically SAR — used to image terrain and measure change independent of daylight and cloud cover.",
    body: [
      "Satellite radar refers to microwave imaging systems flown on spacecraft. The dominant civilian form is Synthetic Aperture Radar (SAR).",
      "Because the sensor illuminates the ground itself, satellite radar supports all-weather, day-night imaging essential for operational monitoring programs.",
      "SAR Metrics builds InSAR analytics on satellite radar archives and taskable commercial acquisitions.",
    ],
    relatedSlugs: ["sar", "insar", "space-monitoring"],
  },
  {
    slug: "wide-area-monitoring",
    term: "Wide-area monitoring",
    shortDefinition:
      "Screening large regions — corridors, basins, cities — for ground motion with consistent satellite coverage.",
    body: [
      "Wide-area monitoring uses stacked SAR coverage to produce regional displacement maps and hotspots without surveying every asset individually first.",
      "It is the usual entry point for geohazard screening, insurance portfolio views and network-scale infrastructure programs.",
      "Once risk locations are identified, focused InSAR monitoring can increase resolution and revisit over critical sites.",
    ],
    relatedSlugs: ["space-monitoring", "insar", "ground-deformation"],
  },
];

export const glossaryBySlug = (slug: string) =>
  glossaryTerms.find((term) => term.slug === slug);

export const glossarySlugs = glossaryTerms.map((term) => term.slug);
