import type { Messages } from "./types";

export const pl: Messages = {
  meta: {
    home: {
      title: "Monitoring InSAR terenu i infrastruktury | SAR Metrics",
      description:
        "Monitoring InSAR dla budownictwa, kolei, infrastruktury, górnictwa oraz ropy i gazu. Wykrywamy milimetrowe przemieszczenia terenu, zanim zamienią się w szkody.",
    },
    about: {
      title: "O nas – satelitarny monitoring InSAR | SAR Metrics",
      description:
        "SAR Metrics zamienia dane z satelitów radarowych w pomiary przemieszczeń terenu i obiektów. Poznaj zespół wspierany przez ESA BIC Poland i nasze podejście.",
    },
    contact: {
      title: "Kontakt | SAR Metrics",
      description:
        "Wskaż obiekt lub obszar do monitorowania. Sprawdzimy dostępne dane satelitarne i pokażemy, jakie przemieszczenia da się tam zmierzyć metodą InSAR.",
    },
    technology: {
      title: "Jak działa InSAR – pomiar przemieszczeń z orbity | SAR Metrics",
      description:
        "Jak działa InSAR: zobrazowania radarowe SAR, interferometria, stabilne rozpraszacze (PS-InSAR) i szeregi czasowe przemieszczeń z dokładnością do milimetrów.",
    },
    solutions: {
      title: "Rozwiązania InSAR dla branż | SAR Metrics",
      description:
        "Monitoring InSAR dla infrastruktury i kolei, górnictwa, budownictwa, ropy i gazu, ubezpieczeń oraz geozagrożeń – pomiary przemieszczeń z dokładnością do milimetrów.",
    },
    solutionTemplate: {
      titleSuffix: "– monitoring InSAR | SAR Metrics",
      descriptionTemplate: (title: string, tagline: string) =>
        `${tagline}. ${title} – satelitarny monitoring InSAR od SAR Metrics.`,
    },
    insarAnalytics: {
      title: "Analityka InSAR – mapy przemieszczeń i alerty | SAR Metrics",
      description:
        "Analityka InSAR: mapy przemieszczeń, szeregi czasowe, trendy i alerty dla infrastruktury, kolei, budownictwa, górnictwa i energetyki. Wyniki online i przez API.",
    },
    insarSolutions: {
      title: "Rozwiązania InSAR dla przemysłu i infrastruktury | SAR Metrics",
      description:
        "Monitoring InSAR dla branż: infrastruktura i kolej, górnictwo, budownictwo, ropa i gaz, ubezpieczenia, geozagrożenia. Wczesne ostrzeganie o przemieszczeniach.",
    },
    spaceMonitoring: {
      title: "Monitoring satelitarny SAR i InSAR | SAR Metrics",
      description:
        "Monitoring satelitarny z użyciem radaru SAR: regionalne i punktowe pomiary przemieszczeń terenu i obiektów – w dzień i w nocy, niezależnie od zachmurzenia.",
    },
    resources: {
      title: "Baza wiedzy InSAR – słownik i FAQ | SAR Metrics",
      description:
        "Słownik pojęć i odpowiedzi na najczęstsze pytania o InSAR, radar satelitarny SAR i monitoring przemieszczeń terenu.",
    },
    glossary: {
      title: "Słownik InSAR i monitoringu satelitarnego | SAR Metrics",
      description:
        "Słownik pojęć: InSAR, PS-InSAR, SAR, interferometria, deformacje terenu, stabilne rozpraszacze i monitoring satelitarny – wyjaśnione prostym językiem.",
    },
    glossaryTerm: {
      titleTemplate: (term: string) => `${term} – słownik InSAR | SAR Metrics`,
    },
    faq: {
      title: "InSAR – najczęstsze pytania (FAQ) | SAR Metrics",
      description:
        "Odpowiedzi na pytania o monitoring InSAR: dokładność, niezależność od pogody, koszty, zastosowania w branżach, forma wyników i początek współpracy.",
    },
    offer: {
      title: "Oferta monitoringu InSAR – koszt, korzyści i oszczędności | SAR Metrics",
      description:
        "Monitoring infrastruktury z orbity, co do milimetra, z historią od lat 90. Cena zależy od terenu, częstotliwości i dokładności. W najniższym wariancie schodzi do około 100 zł za km² — mniej na kilometr kwadratowy niż aparatura naziemna i drony.",
    },
    notFound: {
      title: "SAR Metrics – satelitarny monitoring InSAR",
      description:
        "Satelitarne pomiary przemieszczeń terenu i infrastruktury z dokładnością do milimetrów. Monitoring InSAR dla budownictwa, kolei, górnictwa i energetyki.",
    },
  },

  nav: {
    solutions: "Rozwiązania",
    offer: "Oferta",
    technology: "Technologia",
    resources: "Baza wiedzy",
    about: "O nas",
    contact: "Kontakt",
  },

  footer: {
    tagline: "Mierzymy przemieszczenia. Ograniczamy ryzyko.",
    supportedBy: "Przy wsparciu",
    solutionsTitle: "Rozwiązania",
    solutions: {
      infrastructure: "Infrastruktura",
      mining: "Górnictwo",
      insurance: "Ubezpieczenia",
      oilGas: "Ropa i gaz",
      geohazards: "Geozagrożenia",
      structural: "Budownictwo i budynki",
    },
    capabilitiesTitle: "Oferta",
    capabilities: {
      insarAnalytics: "Analityka InSAR",
      insarSolutions: "Rozwiązania InSAR",
      spaceMonitoring: "Monitoring satelitarny",
      technology: "Technologia",
      offer: "Oferta",
    },
    resourcesTitle: "Baza wiedzy",
    resources: {
      overview: "Przegląd",
      glossary: "Słownik",
      faq: "FAQ",
      about: "O nas",
      contact: "Kontakt",
    },
    officeTitle: "Biuro",
    office: {
      city: "Warszawa",
      line1: "Chmielna II, 00-020",
      line2: "",
    },
    copyright: "© {year} SAR Metrics. Wszelkie prawa zastrzeżone.",
    footerTagline: "Satelitarne pomiary przemieszczeń z dokładnością do milimetrów.",
  },

  cta: {
    defaultTitle: "Pokażemy, co InSAR ujawni na Państwa terenie.",
    defaultBody:
      "Wskaż obiekt lub obszar – wspólnie ocenimy, jakie przemieszczenia da się tam zmierzyć.",
    defaultLabel: "Skontaktuj się z nami",
  },

  home: {
    hero: {
      eyebrow: "Satelitarny monitoring InSAR",
      title: "Mierzymy przemieszczenia. Ograniczamy ryzyko.",
      subtitle:
        "SAR Metrics mierzy z orbity przemieszczenia terenu, budowli i infrastruktury – z dokładnością do milimetrów, w dzień i w nocy, niezależnie od pogody. Nasze algorytmy wychwytują najmniejsze zmiany, zanim zamienią się w kosztowne szkody.",
      exploreDemo: "Zobacz demo",
      seeOffer: "Zobacz ofertę",
      insarSolutions: "Rozwiązania InSAR",
      howInsarWorks: "Jak działa InSAR",
    },
    supportedBy: {
      eyebrow: "Przy wsparciu",
      text: "SAR Metrics rozwija się przy wsparciu inkubatora Europejskiej Agencji Kosmicznej – ESA BIC Poland.",
    },
    solutions: {
      eyebrow: "Rozwiązania InSAR",
      title:
        "Od pojedynczych obiektów po całe regiony – wykrywaj przemieszczenia gruntu i infrastruktury na wczesnym etapie i zapobiegaj szkodom.",
      readMore: "Zobacz rozwiązanie",
    },
    capabilities: {
      eyebrow: "Możliwości",
      title: "Dokładność metod naziemnych. Zasięg, którego one nie dają.",
      items: {
        millimetricPrecision: {
          title: "Dokładność do milimetrów",
          body: "Mierzymy przemieszczenia terenu i obiektów w kierunku linii widzenia satelity (LOS) z dokładnością porównywalną z metodami naziemnymi.",
        },
        wideAreaCoverage: {
          title: "Zasięg regionalny",
          body: "Jedna analiza obejmuje całe miasto, zagłębie górnicze albo setki kilometrów dróg i linii kolejowych – bez rozstawiania sprzętu w terenie.",
        },
        allWeatherSar: {
          title: "Pomiary 24/7",
          body: "Radar działa w dzień i w nocy, przez chmury i dym. Dane napływają niezależnie od pogody i pory roku.",
        },
        historicalArchive: {
          title: "Historia od lat 90.",
          body: "Archiwa satelitarne pozwalają odtworzyć przebieg przemieszczeń nawet od początku lat 90. – także tam, gdzie nigdy nie prowadzono pomiarów.",
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: "O nas",
      title: "Mierzymy to, co się przemieszcza – żeby można było zareagować na czas.",
      subtitle:
        "Jesteśmy zespołem inżynierów radarowych, specjalistów od danych przestrzennych i programistów. Zamieniamy satelitarne dane radarowe w narzędzie codziennej pracy dla osób odpowiedzialnych za bezpieczeństwo obiektów i terenu.",
    },
    valuesEyebrow: "Wartości",
    values: {
      measurementFirst: {
        title: "Najpierw pomiar",
        body: "Opieramy się na danych, nie na przypuszczeniach. Za każdym wnioskiem stoi sygnał, który sami przetworzyliśmy i zweryfikowaliśmy.",
      },
      operatorGrade: {
        title: "Jakość dla praktyków",
        body: "Tworzymy narzędzia dla geotechników, służb zarządzania kryzysowego i zarządców obiektów – ludzi, którzy na podstawie naszych danych podejmują decyzje.",
      },
      openByDefault: {
        title: "Otwartość",
        body: "Standardowe formaty danych, udokumentowane API, powtarzalne przetwarzanie. Żadnych czarnych skrzynek.",
      },
    },
    timelineEyebrow: "Oś czasu",
    timeline: {
      seasat: {
        year: "1978",
        title: "Seasat",
        body: "NASA wynosi na orbitę pierwszego cywilnego satelitę z radarem SAR i dowodzi, że Ziemię można obrazować radarowo z kosmosu.",
      },
      ers: {
        year: "1992",
        title: "Początek archiwum ERS-1",
        body: "Misje ERS Europejskiej Agencji Kosmicznej zapoczątkowują ciągłe archiwum danych SAR – do dziś podstawę analiz historycznych InSAR.",
      },
      psinsar: {
        year: "2002",
        title: "PS-InSAR",
        body: "Metoda stabilnych rozpraszaczy pozwala budować szeregi czasowe przemieszczeń o milimetrowej dokładności.",
      },
      sentinel: {
        year: "2014",
        title: "Sentinel-1",
        body: "Bezpłatne, otwarte dane SAR z całego świata co 6–12 dni sprawiają, że InSAR z narzędzia badawczego staje się usługą operacyjną.",
      },
      commercial: {
        year: "po 2020",
        title: "Komercyjne konstelacje SAR",
        body: "Małe satelity komercyjne dostarczają zobrazowań o wysokiej rozdzielczości na tyle często, że możliwy staje się nawet codzienny monitoring wybranych obiektów.",
      },
      founded: {
        year: "2026",
        title: "Powstaje SAR Metrics",
        body: "Przekładamy cztery dekady rozwoju techniki SAR na system monitoringu dla przemysłu i infrastruktury.",
      },
      esaBic: {
        year: "2026",
        title: "Grant ESA BIC Poland",
        body: "SAR Metrics otrzymuje grant ESA BIC Poland na rozwój i komercjalizację technologii.",
      },
    },
    ctaTitle: "Porozmawiajmy o współpracy.",
    ctaLabel: "Skontaktuj się z nami",
  },

  contact: {
    hero: {
      eyebrow: "Kontakt",
      title: "Powiedz nam, co chcesz monitorować.",
      subtitle: "Wystarczy krótka wiadomość. Odezwiemy się z propozycją kolejnych kroków.",
    },
    form: {
      nameLabel: "Imię i nazwisko",
      emailLabel: "E-mail służbowy",
      companyLabel: "Firma",
      industryLabel: "Branża",
      industryPlaceholder: "Wybierz branżę",
      industries: {
        infrastructure: "Infrastruktura i kolej",
        mining: "Górnictwo",
        insurance: "Ubezpieczenia",
        oilGas: "Ropa i gaz",
        geohazards: "Geozagrożenia",
        structural: "Budownictwo",
        other: "Inna",
      },
      messageLabel: "Co chcesz monitorować?",
      submitIdle: "Wyślij wiadomość",
      submitSending: "Wysyłanie…",
      submitSuccess: "Dziękujemy – wkrótce się odezwiemy.",
      errorMessage: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    },
    officeEyebrow: "Biuro",
    generalEnquiries: "Kontakt ogólny",
    email: "kontakt@sarmetrics.pl",
  },

  technology: {
    hero: {
      eyebrow: "Technologia",
      title: "Od obrazu radarowego do milimetrowego pomiaru.",
      subtitle:
        "Nasz łańcuch przetwarzania zamienia ogromne zbiory danych SAR w wiarygodne informacje o przemieszczeniach terenu i obiektów – gotowe do wykorzystania w bieżącym monitoringu.",
    },
    howItWorks: {
      eyebrow: "Jak to działa",
      title:
        "Cztery etapy: od surowych danych radarowych do informacji, na której można oprzeć decyzję.",
      steps: {
        acquisition: {
          title: "Pozyskanie danych",
          body: "Satelity z radarem SAR obrazują powierzchnię Ziemi w dzień i w nocy, także przez chmury i dym. Regularne przeloty nad tym samym obszarem tworzą materiał do pomiarów.",
        },
        interferometry: {
          title: "Interferometria",
          body: "Porównujemy zobrazowania tego samego obszaru wykonane w różnym czasie. Różnica fazy sygnału radarowego odpowiada zmianie odległości między satelitą a terenem, czyli przemieszczeniu.",
        },
        persistentScatterers: {
          title: "Stabilne rozpraszacze",
          body: "W długich seriach zobrazowań wyszukujemy punkty stabilnie odbijające sygnał – dachy, konstrukcje, elementy infrastruktury, odsłonięte skały – i dla każdego z nich wyznaczamy historię przemieszczeń z milimetrową dokładnością.",
        },
        analytics: {
          title: "Analityka i alerty",
          body: "W szeregach czasowych rozdzielamy trend, wahania sezonowe i anomalie. Wyniki trafiają na platformę internetową, do API i do alertów, dzięki czemu od razu wiadomo, gdzie potrzebna jest reakcja.",
        },
      },
      footer: "Więcej wyjaśnień zawiera {glossary}. Zobacz też {analytics} i {solutions}.",
      footerLinks: {
        glossary: "słownik InSAR",
        analytics: "analitykę InSAR",
        solutions: "rozwiązania dla branż",
      },
    },
    dataProducts: {
      eyebrow: "Co dostarczamy",
      items: {
        wideArea: {
          title: "Mapa regionalna",
          body: "Mapy przemieszczeń dla całych regionów, aktualizowane z uzgodnioną częstotliwością.",
        },
        focused: {
          title: "Monitoring punktowy",
          body: "Zobrazowania o wysokiej rozdzielczości i częste pomiary nad obiektami o krytycznym znaczeniu.",
        },
        historical: {
          title: "Analiza historyczna",
          body: "Odtworzenie przemieszczeń z danych archiwalnych – nawet od początku lat 90.",
        },
        api: {
          title: "API i eksport danych",
          body: "Dane w formatach GeoJSON, rastrowych i tabelarycznych oraz API alertów działające w czasie rzeczywistym.",
        },
      },
      footer:
        "Podejście regionalne i punktowe porównujemy na stronie o {spaceMonitoring}. Zobacz też {solutions}.",
      footerLinks: {
        spaceMonitoring: "monitoringu satelitarnym",
        solutions: "rozwiązania dla branż",
      },
    },
    ctaTitle: "Chcesz zobaczyć dane dla swojego obiektu?",
    ctaLabel: "Poproś o przykładową analizę",
  },

  offer: {
    hero: {
      eyebrow: "Monitoring infrastruktury",
      title: "Wydawaj tylko za obszar, który faktycznie monitorujesz",
      subtitle:
        "Z orbity widać, o ile ruszył się teren i konstrukcja — co do milimetra, w dzień i w nocy, także przez chmury. Reagujecie tam, gdzie coś się naprawdę dzieje, zanim drobny ruch urośnie do szkody.",
      primaryCta: "Sprawdź swój obiekt",
      secondaryCta: "Zobacz demo",
    },
    economics: {
      eyebrow: "Po co to się opłaca",
      title: "Jedna awaria kosztuje więcej niż lata pomiarów.",
      withoutLabel: "Bez monitoringu. Jedno zdarzenie.",
      withoutValue: "Miliony",
      withoutUnit: "złotych strat",
      withoutBody:
        "Wykolejenie przez zły stan toru albo przestój w kopalni odkrywkowej to miliony: postoje, naprawy, odszkodowania, utracone kontrakty.",
      withLabel: "Monitoring SAR Metrics",
      withValue: "od 100 zł",
      withUnit: "za km² w najniższym wariancie",
      withBody:
        "Cena nie jest jedna. Zależy od terenu, od tego, jak często mierzymy, i od dokładności, jakiej potrzebujecie. W najniższym wariancie schodzi do około 100 zł za kilometr kwadratowy. Na kilometrze kwadratowym wychodzi mniej niż przy aparaturze naziemnej i dronach.",
      pointsTitle: "Na czym polega oszczędność",
      points: [
        {
          title: "Awarie, których nie ma",
          body: "Widać, że rusza się tor, skarpa albo nasyp, zanim coś pęknie. Abonament płacicie za to, żeby zobaczyć to na czas.",
        },
        {
          title: "Kontrole tylko tam, gdzie trzeba",
          body: "Ludzie i pieniądze idą na odcinki, które się ruszają. Nie trzeba obchodzić całej sieci według sztywnego grafiku.",
        },
        {
          title: "Bez aparatury w terenie",
          body: "Na pojedynczym punkcie pomiar z ziemi bywa równie dokładny. InSAR obejmuje cały korytarz z orbity i nie trzeba niczego rozstawiać.",
        },
      ],
      note: "100 zł za km² to dolna granica, nie cennik. Wycena rusza się razem z terenem, częstotliwością pomiarów i wymaganą dokładnością.",
    },
    proof: [
      { value: "mm", label: "Dokładność jak przy pomiarze z ziemi" },
      { value: "24/7", label: "Działa przez chmury, dym i w nocy" },
      { value: "od lat 90.", label: "Z archiwów da się odtworzyć historię ruchu" },
      { value: "od 100 zł", label: "Za km² w najniższym wariancie. Dalej zależy od terenu, częstotliwości i dokładności." },
    ],
    figures: {
      heroAlt: "Satelita nad Ziemią, monitoring infrastruktury",
      bridgeAlt: "Most w nocy, z punktami pokazującymi, gdzie rusza się pomost",
      bridgeCaption: "Tak może wyglądać most: punkty pokazują, gdzie rusza się pomost.",
      usesAlt: "Wiadukt z drogą i koleją w nocy",
      costCaption:
        "Aparatura i drony są policzone za kilometr infrastruktury. InSAR pokazujemy od 100 zł za km², czyli od najniższego wariantu. Na kilometrze kwadratowym wychodzi to mniej niż tamte metody. Właściwa cena i tak zależy od terenu, częstotliwości i dokładności.",
    },
    comparison: {
      areaLabel: "Jaki obszar obejmuje",
      costLabel: "Koszt pomiaru",
      ground: "Aparatura naziemna",
      drones: "Drony",
      insar: "InSAR (satelity)",
      groundCost: "20 000 zł / km",
      dronesCost: "82 500 zł / km",
      insarCost: "od 100 zł / km²",
    },
    explain: {
      eyebrow: "Na czym to polega",
      isTitle: "Co mierzymy",
      isBody:
        "InSAR mierzy ruch z orbity. Satelita wraca nad ten sam teren, a porównanie kolejnych obrazów pokazuje, o ile przesunął się grunt albo obiekt — co do milimetra. Radar działa w dzień i w nocy, przez chmury i dym. Z archiwów da się odtworzyć historię nawet od początku lat 90.",
      forTitle: "Do czego to wykorzystacie",
      forBody:
        "Widać, gdzie rusza się teren i infrastruktura, na dużym obszarze i bez wyjazdu w teren. Wskazujemy odcinki i obiekty, które wymagają reakcji, więc kontrola i budżet idą tam, gdzie są potrzebne.",
    },
    benefits: {
      eyebrow: "Co dostajecie",
      title: "Alarm, kolejność działań i zapis pomiaru.",
      items: [
        {
          title: "Wczesny alarm",
          body: "Nietypowy ruch widać, kiedy jeszcze da się zareagować.",
        },
        {
          title: "Szkoda, zanim powstanie",
          body: "Reagujecie, zanim pęknięcie, osiadanie albo osuwisko zamieni się w naprawę.",
        },
        {
          title: "Co będzie dalej",
          body: "Z historii widać, czy ruch jest stały, zwalnia, czy przyspiesza.",
        },
        {
          title: "Gdzie już jest problem",
          body: "Widać, które obiekty i odcinki zachowują się inaczej niż reszta.",
        },
        {
          title: "Od czego zacząć kontrolę",
          body: "Podpowiadamy, co sprawdzić najpierw.",
        },
        {
          title: "Zapis, który da się pokazać",
          body: "Niezależny pomiar do roszczeń, sporów i rozmów o gwarancji.",
        },
      ],
    },
    platform: {
      title: "Wszystko w jednej aplikacji.",
      body: "Obszar, który monitorujecie, widać online. Pomiarów bywa kilka w miesiącu. Mapy, wykresy w czasie i alerty są w jednym miejscu.",
      link: "Jak przetwarzamy dane",
    },
    uses: {
      eyebrow: "Infrastruktura",
      title: "Sieć pod okiem, zanim coś się zepsuje.",
      items: [
        {
          title: "Uszkodzenie widać wcześnie",
          body: "Dla właściciela, dewelopera albo wykonawcy, który odpowiada za drogę, kolej, most czy inny obiekt. Widać, gdzie problem się zaczyna i od kiedy.",
        },
        {
          title: "Zapory, skarpy, nasypy",
          body: "Ruch, który skończyłby się awarią, widać jeszcze wtedy, kiedy da się zareagować.",
        },
        {
          title: "Cały korytarz, nie jeden punkt",
          body: "Śledzimy zmiany wzdłuż dróg, kolei i innej infrastruktury liniowej, a także na dużych obiektach.",
        },
        {
          title: "Obiekt zostaje czynny",
          body: "Chodzi o ruch terenu i konstrukcji, przez który trzeba by zamknąć linię, most albo plac.",
        },
      ],
    },
    sectors: {
      eyebrow: "Dla kogo",
      title: "Ten sam pomiar. Inny raport — pod waszą decyzję.",
      intro:
        "Sam pomiar jest zawsze tak samo rzetelny. Inaczej układamy monitoring, zakres wyników i język raportu.",
      items: {
        critical: {
          title: "Infrastruktura krytyczna",
          body: "Wiecie, co kontrolować najpierw. Przestojów jest mniej.",
        },
        energy: {
          title: "Sieci energetyczne",
          body: "Osiadanie przy stacjach, słupach i fundamentach.",
        },
        roads: {
          title: "Drogi, autostrady, mosty",
          body: "Odcinki, które ruszają się nietypowo. Utrzymanie idzie tam, gdzie ma sens.",
        },
        rail: {
          title: "Kolej",
          body: "Tor, nasyp i skarpa. Mniej opóźnień.",
        },
        construction: {
          title: "Budowy i inwestycje",
          body: "Przed budową, w trakcie i po oddaniu.",
        },
        generation: {
          title: "Elektrownie i farmy",
          body: "Elektrownie, fotowoltaika i wiatr.",
        },
        fuels: {
          title: "Paliwa i rurociągi",
          body: "Zbiorniki, rurociągi, terminale, bazy.",
        },
        mining: {
          title: "Górnictwo",
          body: "Deformacje terenu, zwałowiska i skarpy, także przy rekultywacji.",
        },
        insurance: {
          title: "Ubezpieczenia",
          body: "Ryzyko szkody w portfelu widać wcześniej.",
        },
      },
    },
    faqEyebrow: "Pytania",
    faqTitle: "Zanim podpiszecie umowę",
    ctaTitle: "Pokażemy, co InSAR pokaże na waszym terenie.",
    ctaBody: "Wskażcie obiekt albo region. Sprawdzimy, jaki ruch da się tam zmierzyć.",
    ctaLabel: "Zacznijcie od swojego obiektu",
  },

  solutions: {
    hero: {
      eyebrow: "Rozwiązania InSAR",
      title: "Monitoring InSAR dopasowany do branży.",
      subtitle:
        "Od pojedynczego obiektu po całą sieć lub region – usługi monitoringu oparte na radarze satelitarnym, zaprojektowane z myślą o konkretnych ryzykach.",
    },
    intro:
      "Każde z poniższych rozwiązań uwzględnia to, jak dana branża w praktyce zarządza ryzykiem. Szersze omówienie znajduje się na stronach {insarSolutions} i {insarAnalytics}.",
    introLinks: {
      insarSolutions: "Rozwiązania InSAR",
      insarAnalytics: "Analityka InSAR",
    },
    open: "Zobacz",
  },

  solutionDetail: {
    eyebrow: "Rozwiązanie",
    challenge: "Wyzwanie",
    approach: "Nasze podejście",
    outcome: "Efekt",
    includes: "Zakres usługi.",
    deliverablesEyebrow: "Wyniki",
    deliverables: "Co otrzymujesz.",
    useCasesEyebrow: "Zastosowania",
    useCases: "Kto z tego korzysta i po co.",
    otherSolutionsEyebrow: "Pozostałe rozwiązania",
    open: "Zobacz",
    notFound: "Nie znaleziono rozwiązania",
    backToSolutions: "Wróć do rozwiązań",
  },

  offerings: {
    infrastructure: {
      title: "Infrastruktura",
      tagline: "Monitoring dróg, mostów, linii kolejowych i zapór – od projektu po utrzymanie",
      description:
        "Milimetrowe pomiary przemieszczeń autostrad, mostów, torowisk, nasypów, zapór i rurociągów na każdym etapie życia obiektu. Wskazujemy odcinki, które wymagają reakcji, zanim dojdzie do awarii.",
    },
    mining: {
      title: "Górnictwo",
      tagline: "Wczesne ostrzeganie o deformacjach terenu, zboczy i składowisk",
      description:
        "Stały monitoring zboczy wyrobisk, zwałowisk, obwałowań składowisk odpadów poflotacyjnych i osiadań nad eksploatacją podziemną – z progami alarmowymi ustalanymi osobno dla każdego obiektu.",
    },
    insurance: {
      title: "Ubezpieczenia",
      tagline: "Niezależne dane o ruchach terenu do oceny ryzyka i likwidacji szkód",
      description:
        "Analizy InSAR dla całych portfeli i pojedynczych lokalizacji: osiadanie terenu, osuwiska, przemieszczenia budynków. Wsparcie oceny ryzyka, przeglądu ekspozycji i weryfikacji roszczeń.",
    },
    "oil-gas": {
      title: "Ropa i gaz",
      tagline: "Monitoring przemieszczeń powierzchni terenu nad złożami ropy i gazu",
      description:
        "Kompakcja i wypiętrzanie nad złożem, szczelność składowisk CO₂, reakcja terenu wokół odwiertów i instalacji – mierzone regularnie i w ten sam sposób w dowolnym miejscu na świecie.",
    },
    geohazards: {
      title: "Geozagrożenia",
      tagline: "Wykrywanie osuwisk i osiadania terenu na dużych obszarach",
      description:
        "Przesiewowa analiza InSAR pokazuje aktywne osuwiska, osiadanie i ruchy tektoniczne w skali całych regionów – na długo, zanim zmiany staną się widoczne w terenie.",
    },
    structural: {
      title: "Budownictwo i budynki",
      tagline: "Monitoring budynków i otoczenia inwestycji – przed budową, w trakcie i po niej",
      description:
        "Historia przemieszczeń budynek po budynku – od pojedynczej elewacji po całą dzielnicę – z danych archiwalnych i bieżących. Dla inwestorów, wykonawców i zarządców nieruchomości.",
    },
  },

  solutionPages: {
    geohazards: {
      intro:
        "Od terenów górskich po wybrzeże – osuwiska i osiadanie terenu rzadko dają wyraźne sygnały ostrzegawcze. SAR Metrics zamienia wieloletnie archiwa danych radarowych w stale aktualizowany obraz tego, gdzie teren się przemieszcza, tak aby można było zareagować przed katastrofą.",
      challenge:
        "Osuwiska, osiadanie terenu i ruchy tektoniczne zagrażają ludziom i infrastrukturze na rozległych obszarach, które trudno objąć pomiarami naziemnymi.",
      approach:
        "Analiza przesiewowa InSAR wskazuje w skali regionu obszary aktywnych deformacji. Tam, gdzie wykryjemy ruch, zagęszczamy pomiary zobrazowaniami o wyższej rozdzielczości.",
      outcome:
        "Służby zarządzania kryzysowego i ubezpieczyciele otrzymują aktualny, uporządkowany według priorytetów obraz tego, gdzie teren się przemieszcza i jak szybko.",
      features: [
        {
          title: "Przegląd regionalny",
          body: "Wyjściowe mapy przemieszczeń terenu w skali regionu lub kraju.",
        },
        {
          title: "Analiza szczegółowa",
          body: "Pomiary o wysokiej rozdzielczości tam, gdzie wykryto ruch.",
        },
        {
          title: "Progi alarmowe",
          body: "Alerty prędkości i przyspieszenia przemieszczeń ustawiane osobno dla każdej lokalizacji.",
        },
      ],
      metrics: [
        { value: "1 mm/rok", label: "Czułość pomiaru prędkości" },
        { value: "100 000 km²", label: "Typowy zasięg analizy przesiewowej" },
        { value: "od 1992", label: "Dostępne dane archiwalne" },
      ],
      deliverables: [
        "Regionalne mapy prędkości przemieszczeń w formatach GIS",
        "Wykaz obszarów aktywnych deformacji uszeregowany według priorytetu",
        "Szeregi czasowe dla poszczególnych lokalizacji i alerty o przyspieszeniu ruchu",
        "Kwartalne raporty z interpretacją ekspercką",
      ],
      useCases: [
        {
          title: "Zarządzanie kryzysowe",
          body: "Ustalanie kolejności kontroli terenowych i planowanie ewakuacji w skali regionu.",
        },
        {
          title: "Zarządcy dróg i kolei",
          body: "Przegląd korytarzy drogowych i kolejowych pod kątem niestabilnych zboczy, zanim dojdzie do przerwy w ruchu.",
        },
        {
          title: "Ubezpieczyciele i reasekuratorzy",
          body: "Ocena ekspozycji portfela na ryzyko osiadania terenu i osuwisk.",
        },
      ],
    },
    mining: {
      intro:
        "W kopalni wszystko się przemieszcza: zbocza wyrobisk, zwałowiska, składowiska odpadów, teren nad eksploatacją podziemną. Pytanie brzmi: jak szybko i co z tego wynika. SAR Metrics łączy dane satelitarne, pomiary radarem naziemnym i dane z czujników w jeden obraz geotechniczny.",
      challenge:
        "Zbocza wyrobisk, obwałowania składowisk odpadów poflotacyjnych i zwałowiska potrafią utracić stateczność bez wyraźnego ostrzeżenia – z katastrofalnymi skutkami dla ludzi i środowiska.",
      approach:
        "Ciągły monitoring satelitarny SAR, uzupełniony danymi z radarów naziemnych, dostarcza szeregów czasowych przemieszczeń dla poszczególnych pięter wyrobiska i kwater składowiska – niemal w czasie rzeczywistym.",
      outcome:
        "Służby geotechniczne kopalni codziennie otrzymują wskaźniki wczesnego ostrzegania odniesione do progów stateczności ustalonych dla danego obiektu.",
      features: [
        {
          title: "Stateczność zboczy wyrobisk",
          body: "Szeregi czasowe przemieszczeń dla poszczególnych pięter – w wyrobiskach czynnych i wyłączonych z eksploatacji.",
        },
        {
          title: "Składowiska odpadów poflotacyjnych",
          body: "Śledzenie przemieszczeń obwałowań kwatera po kwaterze, z progami alarmowymi.",
        },
        {
          title: "Monitoring po zakończeniu eksploatacji",
          body: "Wieloletnia obserwacja osiadania i wypiętrzania terenu po likwidacji zakładu.",
        },
      ],
      metrics: [
        { value: "Co tydzień", label: "Aktualizacja danych dla obiektów krytycznych" },
        { value: "1 mm", label: "Precyzja w punkcie po uśrednieniu serii" },
        { value: "GISTM", label: "Dostosowanie do standardu dla odpadów poflotacyjnych" },
      ],
      deliverables: [
        "Mapy deformacji dla pięter wyrobisk i kwater składowisk",
        "Alerty prędkości i przyspieszenia przemieszczeń w panelach operacyjnych",
        "Niezależne raporty dla organów nadzoru i zarządu",
        "Wieloletnie trendy odniesienia na etapie likwidacji zakładu i po niej",
      ],
      useCases: [
        {
          title: "Geotechnika",
          body: "Weryfikacja modeli stateczności zboczy ciągłymi pomiarami obejmującymi cały zakład.",
        },
        {
          title: "Gospodarka odpadami poflotacyjnymi",
          body: "Wykazywanie bezpieczeństwa obwałowań przed organami nadzoru i lokalną społecznością, zgodnie z GISTM.",
        },
        {
          title: "Tereny pogórnicze",
          body: "Pomiar osiadań resztkowych wiele lat po zakończeniu eksploatacji.",
        },
      ],
    },
    insurance: {
      intro:
        "Ubezpieczyciel potrzebuje niezależnych danych, które sprawdzą się zarówno przy pojedynczej szkodzie, jak i przy analizie całego portfela. SAR Metrics mierzy za pomocą radaru satelitarnego przemieszczenia terenu i budynków – w portfelach, na obszarach dotkniętych katastrofami i w lokalizacjach spornych.",
      challenge:
        "Underwriterzy i likwidatorzy szkód często podejmują decyzje o dużej wartości na podstawie niepełnych, niespójnych lub spóźnionych informacji z terenu.",
      approach:
        "Analiza przesiewowa InSAR wskazuje w portfelu miejsca o podwyższonej ekspozycji. Następnie analiza punktowa odtwarza historię przemieszczeń przed zdarzeniem, w jego trakcie i po nim.",
      outcome:
        "Zespoły ubezpieczeniowe zyskują wiarygodne dane o przemieszczeniach na potrzeby oceny ryzyka, kontroli kumulacji, weryfikacji roszczeń i opinii eksperckich.",
      features: [
        {
          title: "Przegląd portfela",
          body: "Ranking ubezpieczonych obiektów i regionów według zaobserwowanego osiadania terenu, aktywności osuwisk i osiadania budynków.",
        },
        {
          title: "Rekonstrukcja zdarzenia",
          body: "Odtworzenie historii przemieszczeń wokół zgłoszonej szkody na podstawie archiwów SAR.",
        },
        {
          title: "Niezależne raporty",
          body: "Materiał dowodowy przygotowany dla likwidatorów, brokerów i działów prawnych.",
        },
      ],
      metrics: [
        { value: "od 1992", label: "Dane archiwalne do rekonstrukcji zdarzeń" },
        { value: "Cały portfel", label: "Analiza w skali portfela ubezpieczeń" },
        { value: "1 mm/rok", label: "Czułość na powolne przemieszczenia" },
      ],
      deliverables: [
        "Mapy ekspozycji portfela ze wskazaniem obszarów priorytetowych",
        "Szeregi czasowe przemieszczeń dla nieruchomości i korytarzy infrastruktury",
        "Rekonstrukcje przemieszczeń sprzed zdarzenia i po nim – na potrzeby likwidacji szkód",
        "Opinie eksperckie wspierające ocenę ryzyka i wycenę szkód",
      ],
      useCases: [
        {
          title: "Ocena ryzyka",
          body: "Sprawdzanie nowych ryzyk pod kątem osiadania terenu, niestabilności zboczy i długotrwałych deformacji.",
        },
        {
          title: "Likwidacja szkód",
          body: "Weryfikacja, czy zmierzone przemieszczenia odpowiadają dacie i charakterowi zgłoszonej szkody.",
        },
        {
          title: "Zarządzanie portfelem",
          body: "Wykrywanie kumulacji ekspozycji na ruchy terenu w regionach, sektorach i klasach obiektów.",
        },
      ],
    },
    infrastructure: {
      intro:
        "Infrastruktura pracuje przez cały okres użytkowania: osiada pod obciążeniem, reaguje na roboty prowadzone w sąsiedztwie, starzeje się. SAR Metrics dostarcza ciągły zapis przemieszczeń, który pozwala porównać założenia projektowe z rzeczywistym zachowaniem obiektu.",
      challenge:
        "Zapory, mosty, tunele, nasypy i torowiska degradują się niepostrzeżenie. Sam przegląd wizualny nie wychwyci milimetrowych zmian, które zapowiadają poważne uszkodzenia.",
      approach:
        "Monitoring InSAR obejmuje cały cykl życia obiektu: stan odniesienia przed budową, kontrolę w trakcie robót i nadzór w okresie eksploatacji – w jednym ciągłym zapisie.",
      outcome:
        "Właściciele i zarządcy ograniczają ryzyko inwestycyjne i wydłużają okres użytkowania obiektów, bo planują utrzymanie na podstawie pomiarów. Kontrole i budżet trafiają tam, gdzie są naprawdę potrzebne.",
      features: [
        {
          title: "Stan odniesienia przed budową",
          body: "Wieloletnia historia przemieszczeń terenu, zanim rozpoczną się roboty.",
        },
        {
          title: "Nadzór w trakcie budowy",
          body: "Śledzenie w czasie rzeczywistym przemieszczeń wywołanych robotami.",
        },
        {
          title: "Monitoring w eksploatacji",
          body: "Stały nadzór przez cały okres użytkowania obiektu.",
        },
      ],
      metrics: [
        { value: "30+ lat", label: "Historia dostępna jako stan odniesienia" },
        { value: "Co tydzień", label: "Częstotliwość pomiarów na czynnych obiektach" },
        { value: "BIM/GIS", label: "Integracja z systemami zarządzania obiektami" },
      ],
      deliverables: [
        "Panele przemieszczeń dla poszczególnych obiektów",
        "Raporty osiadań wywołanych robotami budowlanymi",
        "Przegląd całych korytarzy drogowych i linii kolejowych",
        "Niezależny materiał dowodowy na potrzeby pozwoleń, audytów i sporów",
      ],
      useCases: [
        {
          title: "Linie kolejowe",
          body: "Stabilność torowisk, nasypów i skarp na całej długości linii – mniej ograniczeń prędkości i opóźnień.",
        },
        {
          title: "Drogi i autostrady",
          body: "Wskazanie odcinków z nietypowymi trendami przemieszczeń i racjonalne planowanie utrzymania.",
        },
        {
          title: "Mosty i wiadukty",
          body: "Zapis przemieszczeń każdej podpory, zestawiony z natężeniem ruchu i porą roku.",
        },
        {
          title: "Zapory i zbiorniki",
          body: "Wykrywanie przemieszczeń korony i przyczółków na całej długości obiektu.",
        },
        {
          title: "Tunele i metro",
          body: "Reakcja powierzchni terenu na roboty podziemne i postęp tarczy TBM.",
        },
        {
          title: "Sieci energetyczne",
          body: "Osiadanie terenu wokół stacji, słupów i fundamentów.",
        },
      ],
    },
    "oil-gas": {
      intro:
        "Eksploatacja złoża, stan odwiertów i szczelność magazynów zostawiają ślad na powierzchni terenu. SAR Metrics odczytuje ten sygnał nad eksploatowanymi złożami, zlikwidowanymi odwiertami i składowiskami CO₂ na całym świecie.",
      challenge:
        "Wydobycie i zatłaczanie płynów wywołują przemieszczenia powierzchni, które niosą informację o kompakcji złoża, stanie odwiertów i zachowaniu składowiska.",
      approach:
        "Regularne pomiary InSAR nad złożami i składowiskami dają mapy osiadania i wypiętrzania terenu powiązane z cyklami produkcyjnymi.",
      outcome:
        "Zespoły złożowe zestawiają przemieszczenia powierzchni z danymi otworowymi, aby optymalizować wydobycie i wykazywać szczelność składowisk CO₂.",
      features: [
        {
          title: "Nadzór nad złożem",
          body: "Śledzenie kompakcji i odprężenia nad eksploatowanymi złożami.",
        },
        {
          title: "Szczelność składowisk CO₂",
          body: "Reakcja powierzchni terenu na zatłaczanie w miejscach składowania.",
        },
        {
          title: "Wymogi koncesyjne",
          body: "Niezależne dane dla organów nadzoru i interesariuszy.",
        },
      ],
      metrics: [
        { value: "1 mm", label: "Wykrywalne wypiętrzenie nad składowiskiem" },
        { value: "Co miesiąc", label: "Standardowa częstotliwość pomiarów" },
        { value: "Cały świat", label: "Zasięg jednej platformy" },
      ],
      deliverables: [
        "Mapy osiadania i wypiętrzania dla całego złoża",
        "Szeregi czasowe dla głowic odwiertów, placów wiertniczych i punktów zatłaczania",
        "Dane wejściowe do kalibracji modeli złożowych (history matching)",
        "Pakiety monitoringu, raportowania i weryfikacji (MRV) dla projektów CCS, gotowe do przekazania organom nadzoru",
      ],
      useCases: [
        {
          title: "Złoża w eksploatacji",
          body: "Powiązanie kompakcji z tempem wydobycia i ciśnieniem złożowym.",
        },
        {
          title: "CCS i magazynowanie",
          body: "Niezależna weryfikacja, że zatłoczony CO₂ pozostaje w składowisku.",
        },
        {
          title: "Zlikwidowane odwierty",
          body: "Przegląd dużych grup nieczynnych odwiertów pod kątem anomalii na powierzchni.",
        },
      ],
    },
    structural: {
      intro:
        "Każda elewacja odbijająca sygnał radarowy to potencjalny punkt pomiarowy. SAR Metrics tworzy z zabudowy miejskiej mapę deformacji – budynek po budynku, z historią sięgającą początku lat 90. Dzięki temu wiadomo, jak teren i sąsiednie obiekty zachowywały się przed inwestycją i jak reagują na budowę.",
      challenge:
        "Budynki osiadają, wychylają się i pękają – pod wpływem głębokich wykopów w sąsiedztwie, zmian poziomu wód gruntowych i starych fundamentów. Bez danych sprzed budowy trudno ustalić przyczynę i odpowiedzialność.",
      approach:
        "Metoda stabilnych rozpraszaczy (PS-InSAR) zamienia elewacje i dachy w punkty pomiarowe. Archiwa SAR dają stan odniesienia sprzed inwestycji, a bieżące zobrazowania – kontrolę w trakcie robót i po ich zakończeniu.",
      outcome:
        "Inwestorzy, wykonawcy, zarządcy nieruchomości, urzędy miast i rzeczoznawcy otrzymują na żądanie historię przemieszczeń każdego budynku.",
      features: [
        {
          title: "Budynek po budynku",
          body: "Przemieszczenia poszczególnych obiektów mierzone na poziomie elewacji.",
        },
        {
          title: "Analiza archiwalna",
          body: "Historia przemieszczeń od 1992 roku – wszędzie tam, gdzie istnieją dane.",
        },
        {
          title: "Materiał dowodowy",
          body: "Dokumentacja osiadań przygotowana na potrzeby postępowań sądowych.",
        },
      ],
      metrics: [
        { value: "1992", label: "Najstarsze zobrazowania w archiwum" },
        { value: ">10 tys.", label: "Punktów pomiarowych na km² w gęstej zabudowie" },
        { value: "0,1 mm/rok", label: "Precyzja wyznaczenia prędkości długookresowej" },
      ],
      deliverables: [
        "Szeregi czasowe przemieszczeń dla każdego budynku",
        "Chmury punktów pomiarowych na elewacjach i dachach wraz z prędkością przemieszczeń",
        "Rekonstrukcje historyczne do analiz stanu sprzed zdarzenia",
        "Opinie eksperckie na potrzeby sporów sądowych, ubezpieczeniowych i majątkowych",
      ],
      useCases: [
        {
          title: "Deweloperzy i wykonawcy",
          body: "Dokumentowanie stanu terenu i sąsiedniej zabudowy przed budową, w jej trakcie i w okresie gwarancji.",
        },
        {
          title: "Właściciele i zarządcy nieruchomości",
          body: "Wczesne rozpoznanie wychyleń i osiadań, zanim zagrożą konstrukcji.",
        },
        {
          title: "Ekspertyzy techniczne",
          body: "Odtworzenie historii przemieszczeń budynku wokół zdarzenia, które spowodowało szkodę.",
        },
      ],
    },
  },

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: "Analityka InSAR",
        title: "Analityka InSAR: od pomiaru do decyzji.",
        subtitle:
          "Mapy przemieszczeń, szeregi czasowe i alerty dla zespołów, które odpowiadają za bezpieczeństwo obiektów i terenu.",
      },
      sections: {
        problem: {
          title: "Jaki problem rozwiązuje analityka InSAR",
          paragraphs: [
            "Analityka InSAR to przetwarzanie satelitarnych pomiarów radarowych w mapy przemieszczeń, trendy i alerty. Pokazuje, gdzie teren i obiekty się przemieszczają, jak szybko i czy ruch przyspiesza.",
            "Obiekty krytyczne przez długi czas przemieszczają się powoli – aż do awarii. Osiadanie terenu, pełzanie zboczy czy osiadanie konstrukcji zwykle pozostają niezauważone do kolejnego przeglądu albo do chwili, gdy pojawią się uszkodzenia.",
            "Analityka InSAR daje ciągłą warstwę pomiarową na rozległych obszarach, bez instalowania czujników na każdym kilometrze. Kontrole i budżet można skierować tam, gdzie są naprawdę potrzebne.",
          ],
        },
        howWeDeliver: {
          title: "Jak powstają wyniki",
          paragraphs: [
            "Zestawiamy serie zobrazowań SAR, tworzymy interferogramy, wybieramy stabilne rozpraszacze i przeliczamy zmianę fazy sygnału na przemieszczenia w kierunku linii widzenia satelity – z dokładnością do milimetrów.",
            "Następnie nasze algorytmy rozdzielają trend, sezonowość i anomalie. Wyniki – mapy, historie punktów i alerty – są dostępne na platformie internetowej i przez API. Cały proces opisujemy na stronie Technologia.",
          ],
        },
        whatYouReceive: {
          title: "Co otrzymujesz",
          paragraphs: [
            "Regionalny stan odniesienia do analiz przesiewowych, monitoring punktowy obiektów priorytetowych, analizę historyczną z archiwów oraz dane w formatach, z których Państwa inżynierowie korzystają na co dzień.",
            "Wyniki przygotowujemy z myślą o pracy geotechników, zarządców obiektów i zespołów ds. ryzyka: wczesne ostrzeżenia o nietypowych przemieszczeniach, trendy wskazujące, czego się spodziewać, oraz rekomendacje, co i gdzie sprawdzić w pierwszej kolejności.",
          ],
        },
      },
      industries: {
        eyebrow: "Branże, które korzystają z analityki InSAR",
        title: "Branże, które korzystają z analityki InSAR",
      },
      footer: "Zobacz też: {insarSolutions}, {spaceMonitoring} i {glossary}.",
      footerLinks: {
        insarSolutions: "rozwiązania InSAR dla branż",
        spaceMonitoring: "monitoring satelitarny",
        glossary: "hasło InSAR w słowniku",
      },
      faqTitle: "Analityka InSAR – pytania i odpowiedzi",
      ctaTitle: "Zobacz analitykę InSAR dla swojego obszaru.",
      ctaLabel: "Skontaktuj się z nami",
    },
    insarSolutions: {
      hero: {
        eyebrow: "Rozwiązania InSAR",
        title: "Rozwiązania InSAR dopasowane do tego, jak branże zarządzają ryzykiem.",
        subtitle:
          "Jedna technologia radarowa, sześć usług zaprojektowanych z myślą o decyzjach, które Państwa zespoły podejmują na co dzień.",
      },
      whyDedicated: {
        title: "Dlaczego rozwiązania branżowe",
        paragraphs: [
          "Uniwersalna mapa przemieszczeń rzadko odpowiada na pytania konkretnej branży. Zarządca infrastruktury chce widzieć obiekt w całym cyklu życia, kopalnia potrzebuje progów alarmowych, wykonawca – stanu odniesienia sprzed budowy, ubezpieczyciel – niezależnego materiału dowodowego, a operator złoża – trendów w skali całego pola.",
          "Dlatego SAR Metrics oferuje analitykę InSAR w postaci rozwiązań branżowych: przetwarzanie jest zawsze równie rygorystyczne, zmienia się projekt monitoringu, zakres wyników i język raportów. Podstawy techniczne opisujemy na stronach {insarAnalytics} i {technology}.",
        ],
        links: {
          insarAnalytics: "Analityka InSAR",
          technology: "Technologia",
        },
      },
      footer:
        "Wolisz zacząć od możliwości technologii? Zobacz {allSolutions} albo sprawdź, jak {spaceMonitoring} obejmuje zarówno całe regiony, jak i pojedyncze budynki.",
      footerLinks: {
        allSolutions: "wszystkie rozwiązania",
        spaceMonitoring: "monitoring satelitarny",
      },
      faqTitle: "Rozwiązania InSAR – pytania i odpowiedzi",
      ctaTitle: "Zaprojektujmy monitoring InSAR dla Państwa obiektów.",
      ctaLabel: "Skontaktuj się z nami",
      open: "Zobacz",
    },
    spaceMonitoring: {
      hero: {
        eyebrow: "Monitoring satelitarny",
        title: "Monitoring satelitarny: przemieszczenia widoczne z orbity.",
        subtitle:
          "Satelity radarowe SAR obserwują obiekty i całe regiony w dzień i w nocy, także przez chmury. Analityka InSAR zamienia te zobrazowania w dane o przemieszczeniach terenu, gotowe do wykorzystania w codziennej pracy.",
      },
      whyFromSpace: {
        title: "Dlaczego warto monitorować z orbity",
        paragraphs: [
          "Sieci pomiarów naziemnych są dokładne, ale punktowe i kosztowne w utrzymaniu. Satelity optyczne pokazują kontekst, lecz zawodzą przy zachmurzeniu i w nocy. Monitoring radarowy SAR wypełnia tę lukę: regularne przeloty, niezależność od pogody i zasięg od pojedynczej elewacji po cały region.",
          "SAR Metrics prowadzi cały proces jako usługę – od planu pozyskania zobrazowań, przez przetwarzanie InSAR i analitykę, po dostarczenie wyników. Zespoły inżynierskie i zespoły ds. ryzyka otrzymują informacje, na podstawie których mogą działać. Więcej na stronach {insarAnalytics} i {insarSolutions}.",
        ],
        links: {
          insarAnalytics: "Analityka InSAR",
          insarSolutions: "Rozwiązania InSAR",
        },
      },
      modes: {
        eyebrow: "Tryby monitoringu",
        items: {
          wideArea: {
            title: "Przegląd regionalny",
            body: "Mapy przemieszczeń dla korytarzy transportowych, zagłębi i miast pozwalają znaleźć miejsca wymagające uwagi, zanim trzeba będzie instalować czujniki. To dobry punkt wyjścia dla zarządców sieci, programów ochrony przed geozagrożeniami i oceny ryzyka w portfelu.",
          },
          focused: {
            title: "Monitoring punktowy obiektów",
            body: "Gdy priorytetowe lokalizacje są już znane, zwiększamy częstotliwość i szczegółowość pomiarów nad wyrobiskami, zaporami, zakładami, mostami i dzielnicami miast – z progami alarmowymi ustalonymi osobno dla każdego obiektu.",
          },
          historical: {
            title: "Analiza historyczna",
            body: "Z archiwów SAR odtwarzamy wieloletnią historię przemieszczeń: aby ustalić stan odniesienia, udokumentować roszczenia i zrozumieć, jak obszar zachowywał się, zanim pojawiły się na nim czujniki.",
          },
        },
      },
      fromOrbitToAction: {
        title: "Z orbity do decyzji",
        paragraphs: [
          "Monitoring satelitarny ma wartość dopiero wtedy, gdy wyniki docierają do osób podejmujących decyzje. Dlatego dostarczamy je jako pliki GeoJSON, rastry i tabele, na platformie internetowej i przez API alertów, a obszar zainteresowania (AOI) wyznaczamy zgodnie z tym, jak Państwa organizacja prowadzi przeglądy i zgłasza zagrożenia.",
          "Najprościej zacząć od obszaru pilotażowego: sprawdzić historię z archiwów, a potem przejść na regularny monitoring. Poznaj {technology}, przeczytaj {glossary} albo {contact}.",
        ],
        links: {
          technology: "nasz łańcuch przetwarzania",
          glossary: "hasło w słowniku",
          contact: "skontaktuj się z nami",
        },
      },
      faqTitle: "Monitoring satelitarny – pytania i odpowiedzi",
      ctaTitle: "Obejmij swoje obiekty monitoringiem satelitarnym.",
      ctaBody: "Wskaż region lub obiekt. Pokażemy, co już dziś widać w danych SAR i InSAR.",
      ctaLabel: "Umów prezentację",
    },
  },

  resources: {
    hero: {
      eyebrow: "Baza wiedzy",
      title: "Poznaj InSAR, zanim podejmiesz decyzję.",
      subtitle:
        "Przystępne wyjaśnienia dotyczące analityki InSAR, monitoringu satelitarnego i pojęć, których używają inżynierowie.",
    },
    hubs: {
      glossary: {
        title: "Słownik",
        body: "Definicje pojęć: InSAR, PS-InSAR, SAR, interferometria, monitoring satelitarny i pokrewne.",
      },
      faq: {
        title: "FAQ",
        body: "Konkretne odpowiedzi: dokładność, niezależność od pogody, koszty, branże, forma wyników i początek współpracy.",
      },
      insarAnalytics: {
        title: "Analityka InSAR",
        body: "Jak powstają dane o przemieszczeniach i jak wykorzystuje się je przy obiektach o krytycznym znaczeniu.",
      },
      insarSolutions: {
        title: "Rozwiązania InSAR",
        body: "Usługi monitoringu oparte na radarze satelitarnym, dopasowane do potrzeb branż.",
      },
      spaceMonitoring: {
        title: "Monitoring satelitarny",
        body: "Monitoring regionalny i punktowy z orbity – tam, gdzie ryzykiem są przemieszczenia.",
      },
      technology: {
        title: "Technologia",
        body: "Cztery etapy: od pozyskania danych SAR po analitykę i alerty.",
      },
    },
    ctaTitle: "Masz jeszcze pytania?",
    ctaLabel: "Skontaktuj się z nami",
  },

  glossary: {
    index: {
      hero: {
        eyebrow: "Słownik",
        title: "Pojęcia z zakresu InSAR i monitoringu satelitarnego.",
        subtitle:
          "Krótkie definicje, które można przekazać współpracownikom i decydentom. Każde hasło prowadzi do pełnego wyjaśnienia.",
      },
      footer: "Szukasz odpowiedzi, a nie definicji? Zajrzyj do {faq}.",
      footerLink: "FAQ",
    },
    termPage: {
      notFound: "Nie znaleziono hasła",
      backToGlossary: "Wróć do słownika",
      relatedTerms: "Powiązane hasła",
      allTerms: "Wszystkie hasła słownika",
    },
    terms: {
      insar: {
        term: "InSAR",
        shortDefinition:
          "Satelitarna interferometria radarowa – technika pomiaru przemieszczeń terenu i obiektów z dokładnością do milimetrów.",
        body: [
          "InSAR (ang. Interferometric Synthetic Aperture Radar) polega na porównywaniu obrazów radarowych tego samego miejsca wykonanych w różnym czasie. Niewielkie zmiany fazy sygnału radarowego odpowiadają przemieszczeniu powierzchni w kierunku linii widzenia satelity.",
          "W odróżnieniu od zobrazowań optycznych InSAR działa przez chmury i dym oraz w nocy, ponieważ SAR jest aktywnym sensorem mikrofalowym. Dlatego stanowi podstawę stałego monitoringu satelitarnego infrastruktury, kopalń, złóż i geozagrożeń.",
          "SAR Metrics przetwarza pomiary InSAR w szeregi czasowe, mapy i alerty dostępne na platformie internetowej i przez API – tak, aby można było zareagować, zanim przemieszczenia spowodują szkody.",
        ],
      },
      "ps-insar": {
        term: "PS-InSAR",
        shortDefinition:
          "Metoda stabilnych rozpraszaczy – śledzi punkty trwale odbijające sygnał radarowy w długich seriach zobrazowań i wyznacza ich przemieszczenia z dokładnością do milimetrów.",
        body: [
          "PS-InSAR (ang. Persistent Scatterer InSAR) wykorzystuje punkty, które zachowują koherencję w wielu kolejnych przelotach satelity: dachy, mosty, tory, odsłonięcia skalne oraz inne obiekty naturalne i inżynierskie.",
          "Długie szeregi czasowe dla takich punktów pozwalają wyznaczyć powolne trendy deformacji, cykle sezonowe i anomalie, które zniknęłyby w uśrednionych wynikach regionalnych.",
          "SAR Metrics stosuje przetwarzanie PS-InSAR tam, gdzie obiekt wymaga gęstej sieci punktów i milimetrowej historii przemieszczeń, a następnie uzupełnia wyniki o analitykę i alerty.",
        ],
      },
      sar: {
        term: "SAR",
        shortDefinition:
          "Radar z syntetyczną aperturą – aktywny sensor satelitarny, który obrazuje powierzchnię Ziemi w dzień i w nocy, niezależnie od pogody.",
        body: [
          "Radar z syntetyczną aperturą (SAR, ang. Synthetic Aperture Radar) wysyła impulsy mikrofalowe i rejestruje ich echo. Ruch satelity pozwala „zsyntetyzować” bardzo długą antenę i uzyskać obrazy o wysokiej rozdzielczości bez udziału światła słonecznego.",
          "Współczesne konstelacje – m.in. Sentinel-1 i komercyjne małe satelity – regularnie wracają nad te same obszary. Powstają w ten sposób archiwa, na których opiera się analityka InSAR.",
          "SAR Metrics przetwarza serie zobrazowań SAR w dane o przemieszczeniach dla przemysłu, infrastruktury i ochrony ludności.",
        ],
      },
      interferometry: {
        term: "Interferometria",
        shortDefinition:
          "Porównanie dwóch obrazów SAR w celu wyznaczenia różnicy fazy, która odpowiada przemieszczeniu powierzchni.",
        body: [
          "Interferometria radarowa polega na utworzeniu interferogramu z dwóch zespolonych obrazów SAR tego samego obszaru. Różnica fazy niesie informację o zmianie odległości między satelitą a powierzchnią terenu.",
          "Po uwzględnieniu geometrii orbit, rzeźby terenu i wpływu atmosfery pozostałą zmianę fazy interpretuje się jako przemieszczenie terenu lub obiektu.",
          "Interferometria jest kluczowym etapem między surowymi danymi SAR a analityką InSAR wykorzystywaną w monitoringu.",
        ],
      },
      "ground-deformation": {
        term: "Deformacje terenu",
        shortDefinition:
          "Zmiany położenia powierzchni Ziemi w czasie: osiadanie, wypiętrzanie, osuwiska i ruchy tektoniczne.",
        body: [
          "Deformacje terenu to wszelkie mierzalne przemieszczenia powierzchni: powolne osiadanie pod miastami, ruch zboczy wyrobisk w kopalniach, pełzanie osuwisk czy kompakcja nad złożami ropy i gazu.",
          "Satelitarny InSAR pozwala mapować deformacje na dużych obszarach i odtwarzać ich wieloletnią historię z archiwów SAR – często z okresu, zanim zainstalowano jakiekolwiek przyrządy naziemne.",
          "Znajomość przebiegu deformacji pomaga ustalić kolejność kontroli, zaplanować wzmocnienie obiektów i ograniczyć ryzyko.",
        ],
      },
      "persistent-scatterer": {
        term: "Stabilny rozpraszacz (PS)",
        shortDefinition:
          "Punkt, który stabilnie odbija sygnał radarowy, zachowuje koherencję w wielu zobrazowaniach SAR i dzięki temu może być śledzony w czasie.",
        body: [
          "Stabilny rozpraszacz (ang. persistent scatterer) to punkt na powierzchni terenu, który przy każdym przelocie satelity daje silne, powtarzalne echo radarowe. Zwykle są to konstrukcje metalowe, naroża budynków, mosty lub odsłonięte skały.",
          "Na takich punktach opierają się szeregi czasowe PS-InSAR. Pozwalają one mierzyć milimetrowe przemieszczenia nawet w złożonym otoczeniu miejskim lub przemysłowym.",
          "Gęsta sieć stabilnych rozpraszaczy zamienia miasta i korytarze infrastruktury w naturalne sieci pomiarowe.",
        ],
      },
      "space-monitoring": {
        term: "Monitoring satelitarny",
        shortDefinition:
          "Obserwacja obiektów i regionów z orbity za pomocą sensorów satelitarnych, takich jak SAR – ciągła i obejmująca duże obszary.",
        body: [
          "Monitoring satelitarny wykorzystuje satelity obserwacji Ziemi do nadzoru nad obiektami i regionami o krytycznym znaczeniu, bez budowania wszędzie gęstych sieci naziemnych.",
          "Monitoring oparty na radarze SAR szczególnie dobrze sprawdza się w pomiarach przemieszczeń: działa niezależnie od pogody i pory dnia, w skali od pojedynczego obiektu po całe zagłębie.",
          "SAR Metrics prowadzi monitoring satelitarny w formie analityki InSAR: stan odniesienia, monitoring punktowy, analizy historyczne i alerty.",
        ],
      },
      "millimetric-displacement": {
        term: "Przemieszczenia milimetrowe",
        shortDefinition:
          "Przemieszczenia terenu lub obiektów rzędu milimetrów, mierzone metodą satelitarnej interferometrii radarowej.",
        body: [
          "O przemieszczeniach milimetrowych mówimy, gdy wykrywany i śledzony ruch ma wielkość rzędu milimetrów na rok lub między kolejnymi przelotami satelity – znacznie poniżej progu, przy którym zmiany można wcześnie zauważyć gołym okiem.",
          "InSAR mierzy zmianę fazy sygnału radarowego w kierunku linii widzenia satelity i przelicza ją na szeregi czasowe przemieszczeń dla wybranych punktów i obszarów.",
          "Milimetrowe sygnały często wyprzedzają widoczne pęknięcia, wychylenia i awarie. Dają czas na reakcję.",
        ],
      },
      "satellite-radar": {
        term: "Radar satelitarny",
        shortDefinition:
          "Obserwacja radarowa z orbity, najczęściej za pomocą SAR – służy do obrazowania terenu i pomiaru zmian niezależnie od światła dziennego i zachmurzenia.",
        body: [
          "Radar satelitarny to mikrofalowy system obrazujący umieszczony na pokładzie satelity. W zastosowaniach cywilnych dominuje radar z syntetyczną aperturą (SAR).",
          "Sensor sam oświetla powierzchnię terenu, dlatego obrazuje ją w dzień i w nocy, przy każdej pogodzie. To warunek stałego, regularnego monitoringu.",
          "SAR Metrics opiera analitykę InSAR na archiwach danych radarowych i na zobrazowaniach komercyjnych zamawianych nad wskazane obszary.",
        ],
      },
      "wide-area-monitoring": {
        term: "Monitoring regionalny",
        shortDefinition:
          "Przegląd dużych obszarów – korytarzy transportowych, zagłębi, miast – pod kątem przemieszczeń terenu, przy jednolitym pokryciu danymi satelitarnymi.",
        body: [
          "Monitoring regionalny (wielkoobszarowy) wykorzystuje serie zobrazowań SAR do tworzenia map przemieszczeń i wskazywania miejsc wymagających uwagi – bez wcześniejszych pomiarów każdego obiektu z osobna.",
          "To zwykle pierwszy krok w rozpoznaniu geozagrożeń, w analizie portfeli ubezpieczeniowych i w programach monitoringu sieci infrastruktury.",
          "Po wskazaniu miejsc podwyższonego ryzyka monitoring punktowy zwiększa rozdzielczość i częstotliwość pomiarów nad lokalizacjami krytycznymi.",
        ],
      },
    },
  },

  faqs: {
    site: [
      {
        question: "Czym jest analityka InSAR?",
        answer:
          "Analityka InSAR zamienia satelitarne pomiary interferometryczne w praktyczne informacje: mapy przemieszczeń, szeregi czasowe, trendy i alerty. SAR Metrics przetwarza serie zobrazowań SAR i udostępnia wyniki na platformie internetowej, w plikach i przez API, aby zespoły mogły zarządzać ryzykiem związanym z ruchami terenu i obiektów.",
      },
      {
        question: "Jak dokładny jest satelitarny pomiar przemieszczeń?",
        answer:
          "Przy odpowiedniej geometrii obserwacji i koherencji sygnału technika InSAR mierzy przemieszczenia stabilnych rozpraszaczy w kierunku linii widzenia satelity z dokładnością rzędu milimetrów – porównywalną z metodami naziemnymi. Dokładność zależy od geometrii obserwacji, stanu atmosfery, pokrycia terenu i metody przetwarzania, dlatego zakres analizy dobieramy do obiektu i regionu.",
      },
      {
        question: "Czy monitoring satelitarny działa przy zachmurzeniu i w nocy?",
        answer:
          "Tak. Radar z syntetyczną aperturą (SAR) jest aktywnym sensorem mikrofalowym, więc obrazuje teren przez chmury i dym, także w nocy. Ta niezawodność to jeden z głównych powodów, dla których do stałego monitoringu wybiera się radar, a nie same zobrazowania optyczne.",
      },
      {
        question: "Dla jakich branż przeznaczone są rozwiązania InSAR SAR Metrics?",
        answer:
          "Nasze rozwiązania są przeznaczone dla zarządców infrastruktury drogowej i kolejowej, firm budowlanych i deweloperów, kopalń, sektora ropy i gazu, ubezpieczycieli oraz służb zarządzania kryzysowego – wszędzie tam, gdzie wiedza o milimetrowych przemieszczeniach ogranicza ryzyko albo pomaga ustalić odpowiedzialność.",
      },
      {
        question: "Czy można odtworzyć przemieszczenia z przeszłości?",
        answer:
          "Tak. Archiwa SAR pozwalają odtworzyć historię przemieszczeń często nawet od początku lat 90., zależnie od pokrycia danego obszaru. Analizy archiwalne pomagają ustalić przyczyny uszkodzeń, wyznaczyć stan odniesienia i ocenić zasadność roszczeń.",
      },
      {
        question: "W jakiej formie otrzymuję wyniki?",
        answer:
          "Wyniki obejmują mapy przemieszczeń, szeregi czasowe dla punktów, eksport do formatów GeoJSON, rastrowych i tabelarycznych, platformę internetową oraz API alertów. Formę dopasowujemy do tego, jak pracują Państwa inżynierowie i zespoły ds. ryzyka.",
      },
      {
        question: "Czym różni się monitoring regionalny od punktowego?",
        answer:
          "Monitoring regionalny to szybki przegląd całych regionów i portfeli, który wskazuje miejsca wymagające uwagi. Monitoring punktowy zwiększa szczegółowość i częstotliwość pomiarów nad obiektami krytycznymi, gdy lokalizacje ryzyka są już znane. Wiele programów łączy oba podejścia.",
      },
      {
        question: "Ile kosztuje monitoring InSAR?",
        answer:
          "Cena zależy od terenu, od częstotliwości pomiarów i od dokładności. W najniższym wariancie schodzi do około 100 zł za kilometr kwadratowy. Na kilometrze kwadratowym wychodzi to mniej niż przy aparaturze naziemnej i dronach. Wycenę układamy po tym, jak wskażecie obiekt albo obszar.",
      },
      {
        question: "Jak zacząć współpracę?",
        answer:
          "Wystarczy wskazać obiekt lub obszar. Sprawdzimy dostępne dane SAR, zaproponujemy projekt monitoringu i – w wielu przypadkach – pokażemy wstępne wyniki z danych archiwalnych, jeszcze zanim zdecydują się Państwo na stały monitoring.",
      },
    ],
    insarAnalytics: [
      {
        question: "Czym analityka InSAR różni się od surowych obrazów SAR?",
        answer:
          "Surowy obraz SAR pokazuje, jak powierzchnia odbija sygnał radarowy. Analityka InSAR wyznacza przemieszczenia na podstawie zmian fazy w czasie i przedstawia je jako mapy, trendy i alerty, na podstawie których można podejmować decyzje.",
      },
      {
        question: "Jakie decyzje wspiera analityka InSAR?",
        answer:
          "Najczęściej: gdzie skierować kontrolę, kiedy ograniczyć eksploatację, czy ruch zbocza przyspiesza, jak obiekt przemieszczał się od zakończenia budowy oraz jak ocenić ryzyko związane z ruchami terenu, na przykład przy zawieraniu ubezpieczenia.",
      },
      {
        question: "Czy potrzebne są przyrządy pomiarowe w terenie?",
        answer:
          "Nie są konieczne, ale pozostają cenne: służą do kalibracji i lokalnego potwierdzenia wyników. Analityka InSAR uzupełnia je o szeroki zasięg i wieloletnią historię także tam, gdzie nigdy nie zainstalowano czujników.",
      },
    ],
    insarSolutions: [
      {
        question: "Jakie rozwiązania InSAR oferuje SAR Metrics?",
        answer:
          "Monitoring dopasowany do potrzeb branż: infrastruktury i kolei, górnictwa, budownictwa, ropy i gazu, ubezpieczeń oraz ochrony przed geozagrożeniami. Wszystkie rozwiązania korzystają z tej samej technologii radaru satelitarnego.",
      },
      {
        question: "Czy jeden program może objąć różne typy obiektów?",
        answer:
          "Tak. Typowy program zaczyna się od regionalnego stanu odniesienia, a potem obejmuje monitoringiem punktowym obiekty priorytetowe. Wspólne przetwarzanie i jedna forma dostarczania wyników zapewniają spójność takiego programu.",
      },
      {
        question: "Jak szybko można uruchomić monitoring?",
        answer:
          "Analizę opartą na danych archiwalnych można zwykle rozpocząć w ciągu kilku dni lub tygodni, zależnie od wielkości obszaru i zakresu wyników. Częstotliwość bieżących pomiarów wynika z dostępności satelitów i harmonogramu zobrazowań.",
      },
    ],
    spaceMonitoring: [
      {
        question: "Co monitoring satelitarny daje właścicielom i zarządcom obiektów?",
        answer:
          "Możliwość obserwowania z orbity przemieszczeń terenu i obiektów na dużą skalę – bez instalowania czujników na każdym kilometrze trasy i w każdym obiekcie z portfela.",
      },
      {
        question: "Czy monitoring satelitarny sprawdza się tylko na dużych obszarach?",
        answer:
          "Nie. Te same dane SAR służą zarówno do przeglądu całych regionów, jak i do wyznaczania szeregów czasowych dla pojedynczych budynków. Programy zwykle łączą kontekst regionalny z monitoringiem wybranych obiektów.",
      },
      {
        question: "Jak monitoring satelitarny SAR Metrics wiąże się z InSAR?",
        answer:
          "Nasz monitoring satelitarny opiera się na InSAR: obejmuje pozyskanie zobrazowań radarowych, przetwarzanie interferometryczne, analitykę i alerty – w formie gotowej do codziennego użytku.",
      },
    ],
    offer: [
      {
        question: "Ile to kosztuje?",
        answer:
          "Nie ma jednej stawki. Cena zależy od terenu, częstotliwości pomiarów oraz oczekiwanej dokładności. W najniższym wariancie schodzi do około 100 zł za kilometr kwadratowy. Na kilometrze kwadratowym jest to dużo mniej niż aparatura naziemna albo drony.",
      },
      {
        question: "A ile kosztuje jedna awaria?",
        answer:
          "Wykolejenie przez stan toru albo postój kopalni odkrywkowej to miliony: przestój, naprawy, odszkodowania, utracone kontrakty. Monitoring ma pokazać, że rusza się tor, skarpa albo nasyp, zanim do tego dojdzie. Jedna uniknięta awaria pokrywa wiele lat abonamentu.",
      },
      {
        question: "Co jest w abonamencie?",
        answer:
          "Mapy przemieszczeń, wykresy w czasie, trendy, alert gdy ruch jest nietypowy, historia z archiwum tam, gdzie satelita już latał, i podpowiedź, co sprawdzić najpierw. Wyniki są w aplikacji. Pomiarów bywa kilka w miesiącu.",
      },
      {
        question: "Czy to naprawdę tak dokładne jak pomiar naziemny?",
        answer:
          "Tak, mierzymy przesunięcie wzdłuż linii widzenia satelity co do milimetra — w tej samej klasie co metody naziemne. Różnica jest w zasięgu. Satelita obejmuje korytarz albo cały region, bez rozstawiania sprzętu, w dzień, w nocy i przez chmury.",
      },
      {
        question: "Jak zacząć?",
        answer:
          "Wskażcie obiekt albo region. Sprawdzimy, jakie dane satelitarne już są, i pokażemy, co da się zmierzyć. Często zaczyna się od archiwum, a dopiero potem przechodzi na stały monitoring.",
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      title: "Pytania, które warto zadać przed wdrożeniem InSAR.",
      subtitle:
        "Konkretne odpowiedzi o możliwościach, zasięgu, kosztach i formie wyników – z odnośnikami do szczegółów.",
    },
    sectionEyebrow: "Odpowiedzi",
    sectionTitle: "Najczęściej zadawane pytania",
    footer:
      "Szukasz definicji? Zajrzyj do {glossary}. Ofertę handlową, wraz z orientacyjnymi cenami, opisujemy na stronie {offer}. Usługi są też na stronach {insarAnalytics}, {insarSolutions} i {spaceMonitoring}.",
    footerLinks: {
      glossary: "słownika",
      offer: "Oferta",
      insarAnalytics: "Analityka InSAR",
      insarSolutions: "Rozwiązania InSAR",
      spaceMonitoring: "Monitoring satelitarny",
    },
    ctaTitle: "Masz inne pytanie?",
    ctaLabel: "Napisz do nas",
  },

  common: {
    home: "Strona główna",
    supportedBy: "Przy wsparciu",
    readMore: "Czytaj więcej",
    open: "Zobacz",
    language: "Język",
    backToSolutions: "Wróć do rozwiązań",
  },

  errors: {
    notFound: {
      title: "404",
      subtitle: "Nie znaleziono strony",
      description: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
      homeButton: "Strona główna",
    },
    error: {
      title: "Nie udało się wczytać strony",
      description:
        "Coś poszło nie tak po naszej stronie. Odśwież stronę albo wróć na stronę główną.",
      tryAgain: "Spróbuj ponownie",
      goHome: "Strona główna",
    },
  },
};
