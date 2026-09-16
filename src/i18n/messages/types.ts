export type FaqEntry = {
  question: string;
  answer: string;
};

export type GlossaryTermContent = {
  term: string;
  shortDefinition: string;
  body: string[];
};

export type SolutionDetailContent = {
  intro: string;
  challenge: string;
  approach: string;
  outcome: string;
  features: { title: string; body: string }[];
  metrics: { value: string; label: string }[];
  deliverables: string[];
  useCases: { title: string; body: string }[];
};

export type Messages = {
  meta: {
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    technology: {
      title: string;
      description: string;
    };
    solutions: {
      title: string;
      description: string;
    };
    solutionTemplate: {
      titleSuffix: string;
      descriptionTemplate: (title: string, tagline: string) => string;
    };
    insarAnalytics: {
      title: string;
      description: string;
    };
    insarSolutions: {
      title: string;
      description: string;
    };
    spaceMonitoring: {
      title: string;
      description: string;
    };
    resources: {
      title: string;
      description: string;
    };
    glossary: {
      title: string;
      description: string;
    };
    glossaryTerm: {
      titleTemplate: (term: string) => string;
    };
    faq: {
      title: string;
      description: string;
    };
    notFound: {
      title: string;
      description: string;
    };
  };

  nav: {
    solutions: string;
    technology: string;
    resources: string;
    about: string;
    contact: string;
  };

  footer: {
    tagline: string;
    supportedBy: string;
    solutionsTitle: string;
    solutions: {
      infrastructure: string;
      mining: string;
      insurance: string;
      oilGas: string;
      geohazards: string;
      structural: string;
    };
    capabilitiesTitle: string;
    capabilities: {
      insarAnalytics: string;
      insarSolutions: string;
      spaceMonitoring: string;
      technology: string;
    };
    resourcesTitle: string;
    resources: {
      overview: string;
      glossary: string;
      faq: string;
      about: string;
      contact: string;
    };
    officeTitle: string;
    office: {
      city: string;
      line1: string;
      line2: string;
    };
    copyright: string;
    footerTagline: string;
  };

  cta: {
    defaultTitle: string;
    defaultBody: string;
    defaultLabel: string;
  };

  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      exploreDemo: string;
      insarSolutions: string;
      howInsarWorks: string;
    };
    supportedBy: {
      eyebrow: string;
      text: string;
    };
    solutions: {
      eyebrow: string;
      title: string;
      readMore: string;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      items: {
        millimetricPrecision: { title: string; body: string };
        wideAreaCoverage: { title: string; body: string };
        allWeatherSar: { title: string; body: string };
        historicalArchive: { title: string; body: string };
      };
    };
  };

  about: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    valuesEyebrow: string;
    values: {
      measurementFirst: { title: string; body: string };
      operatorGrade: { title: string; body: string };
      openByDefault: { title: string; body: string };
    };
    timelineEyebrow: string;
    timeline: {
      seasat: { year: string; title: string; body: string };
      ers: { year: string; title: string; body: string };
      psinsar: { year: string; title: string; body: string };
      sentinel: { year: string; title: string; body: string };
      commercial: { year: string; title: string; body: string };
      founded: { year: string; title: string; body: string };
      esaBic: { year: string; title: string; body: string };
    };
    ctaTitle: string;
    ctaLabel: string;
  };

  contact: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    form: {
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      industryLabel: string;
      industryPlaceholder: string;
      industries: {
        infrastructure: string;
        mining: string;
        insurance: string;
        oilGas: string;
        geohazards: string;
        structural: string;
        other: string;
      };
      messageLabel: string;
      submitIdle: string;
      submitSending: string;
      submitSuccess: string;
      errorMessage: string;
    };
    officeEyebrow: string;
    generalEnquiries: string;
    email: string;
  };

  technology: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    howItWorks: {
      eyebrow: string;
      title: string;
      steps: {
        acquisition: { title: string; body: string };
        interferometry: { title: string; body: string };
        persistentScatterers: { title: string; body: string };
        analytics: { title: string; body: string };
      };
      footer: string;
      footerLinks: {
        glossary: string;
        analytics: string;
        solutions: string;
      };
    };
    dataProducts: {
      eyebrow: string;
      items: {
        wideArea: { title: string; body: string };
        focused: { title: string; body: string };
        historical: { title: string; body: string };
        api: { title: string; body: string };
      };
      footer: string;
      footerLinks: {
        spaceMonitoring: string;
        solutions: string;
      };
    };
    ctaTitle: string;
    ctaLabel: string;
  };

  solutions: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    intro: string;
    introLinks: {
      insarSolutions: string;
      insarAnalytics: string;
    };
    open: string;
  };

  solutionDetail: {
    eyebrow: string;
    challenge: string;
    approach: string;
    outcome: string;
    includes: string;
    deliverablesEyebrow: string;
    deliverables: string;
    useCasesEyebrow: string;
    useCases: string;
    otherSolutionsEyebrow: string;
    open: string;
    notFound: string;
    backToSolutions: string;
  };

  offerings: Record<
    string,
    {
      title: string;
      tagline: string;
      description: string;
    }
  >;

  solutionPages: Record<string, SolutionDetailContent>;

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      sections: {
        problem: { title: string; paragraphs: string[] };
        howWeDeliver: { title: string; paragraphs: string[] };
        whatYouReceive: { title: string; paragraphs: string[] };
      };
      industries: {
        eyebrow: string;
        title: string;
      };
      footer: string;
      footerLinks: {
        insarSolutions: string;
        spaceMonitoring: string;
        glossary: string;
      };
      faqTitle: string;
      ctaTitle: string;
      ctaLabel: string;
    };
    insarSolutions: {
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      whyDedicated: {
        title: string;
        paragraphs: string[];
        links: {
          insarAnalytics: string;
          technology: string;
        };
      };
      footer: string;
      footerLinks: {
        allSolutions: string;
        spaceMonitoring: string;
      };
      faqTitle: string;
      ctaTitle: string;
      ctaLabel: string;
      open: string;
    };
    spaceMonitoring: {
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      whyFromSpace: {
        title: string;
        paragraphs: string[];
        links: {
          insarAnalytics: string;
          insarSolutions: string;
        };
      };
      modes: {
        eyebrow: string;
        items: {
          wideArea: { title: string; body: string };
          focused: { title: string; body: string };
          historical: { title: string; body: string };
        };
      };
      fromOrbitToAction: {
        title: string;
        paragraphs: string[];
        links: {
          technology: string;
          glossary: string;
          contact: string;
        };
      };
      faqTitle: string;
      ctaTitle: string;
      ctaBody: string;
      ctaLabel: string;
    };
  };

  resources: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    hubs: {
      glossary: { title: string; body: string };
      faq: { title: string; body: string };
      insarAnalytics: { title: string; body: string };
      insarSolutions: { title: string; body: string };
      spaceMonitoring: { title: string; body: string };
      technology: { title: string; body: string };
    };
    ctaTitle: string;
    ctaLabel: string;
  };

  glossary: {
    index: {
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      footer: string;
      footerLink: string;
    };
    terms: Record<string, GlossaryTermContent>;
  };

  faqs: {
    site: FaqEntry[];
    insarAnalytics: FaqEntry[];
    insarSolutions: FaqEntry[];
    spaceMonitoring: FaqEntry[];
  };

  faqPage: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    sectionEyebrow: string;
    sectionTitle: string;
    footer: string;
    footerLinks: {
      glossary: string;
      insarAnalytics: string;
      insarSolutions: string;
      spaceMonitoring: string;
    };
    ctaTitle: string;
    ctaLabel: string;
  };

  common: {
    home: string;
    supportedBy: string;
    readMore: string;
    open: string;
    language: string;
    backToSolutions: string;
  };

  errors: {
    notFound: {
      title: string;
      subtitle: string;
      description: string;
      homeButton: string;
    };
    error: {
      title: string;
      description: string;
      tryAgain: string;
      goHome: string;
    };
  };
};
