import geohazards from "@/assets/offering-geohazards.jpg";
import mining from "@/assets/offering-mining.jpg";
import infrastructure from "@/assets/offering-infrastructure.jpg";
import oilgas from "@/assets/offering-oilgas.jpg";
import structural from "@/assets/offering-structural.jpg";

export type Offering = {
  slug: string;
  to: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
};

export const offerings: Offering[] = [
  {
    slug: "infrastructure",
    to: "/solutions/infrastructure",
    number: "01",
    title: "Infrastructure",
    tagline: "Optimizing design, construction and operation with millimetric data",
    description:
      "Dams, bridges, tunnels, railways and pipelines monitored at millimeter precision through every phase of their lifecycle.",
    image: infrastructure,
  },
  {
    slug: "mining",
    to: "/solutions/mining",
    number: "02",
    title: "Mining",
    tagline: "Early warnings and risk mitigation across mine assets",
    description:
      "Continuous monitoring of pit walls, tailings dams, waste piles and underground subsidence — with alerting thresholds tuned per asset.",
    image: mining,
  },
  {
    slug: "oil-gas",
    to: "/solutions/oil-gas",
    number: "03",
    title: "Oil & Gas",
    tagline: "Subtle surface displacement for production and reservoir management",
    description:
      "Track reservoir compaction and uplift, CO₂ storage integrity, and ground response around extraction sites — globally, repeatably.",
    image: oilgas,
  },
  {
    slug: "geohazards",
    to: "/solutions/geohazards",
    number: "04",
    title: "Geohazards",
    tagline: "Identifying at-risk locations and monitoring geohazards over wide areas",
    description:
      "Wide-area InSAR screening surfaces landslides, subsidence and tectonic motion across entire regions — long before they reach civil protection radars.",
    image: geohazards,
  },
  {
    slug: "structural",
    to: "/solutions/structural",
    number: "05",
    title: "Structural movement",
    tagline: "Measuring ground and structural movement from space",
    description:
      "Building-by-building displacement histories across urban areas — from individual façades to entire districts — using archive and live SAR.",
    image: structural,
  },
];

export const offeringBySlug = (slug: string) =>
  offerings.find((o) => o.slug === slug);
