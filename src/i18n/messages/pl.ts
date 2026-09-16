import type { Messages } from "./types";

export const pl: Messages = {
  meta: {
    home: {
      title: "Analityka InSAR i monitoring satelitarny — SAR Metrics",
      description:
        "Analityka InSAR dla zagrożeń geotechnicznych, górnictwa, infrastruktury i energetyki. Monitoring gruntu z kosmosu z precyzją milimetrową i zasięgiem regionalnym.",
    },
    about: {
      title: "O nas — SAR Metrics",
      description:
        "SAR Metrics przekształca dane radarowe z satelitów w milimetryczną inteligencję o ruchach gruntu dla przemysłu, infrastruktury i ochrony cywilnej.",
    },
    contact: {
      title: "Kontakt — SAR Metrics",
      description:
        "Powiedz nam, jaki obiekt lub region potrzebujesz monitorować. Pokażemy, co może ujawnić analityka InSAR i monitoring satelitarny.",
    },
    technology: {
      title: "Technologia analityki InSAR — SAR Metrics",
      description:
        "Jak działa analityka InSAR: rozpraszacze trwałe, archiwa satelitarne SAR i milimetryczne pomiary przemieszczeń w monitoringu satelitarnym.",
    },
    solutions: {
      title: "Rozwiązania InSAR — SAR Metrics",
      description:
        "Rozwiązania InSAR dla zagrożeń geotechnicznych, górnictwa, infrastruktury, ubezpieczeń, ropy i gazu oraz ruchów konstrukcji — monitoring milimetrowy z kosmosu.",
    },
    solutionTemplate: {
      titleSuffix: "Monitoring InSAR — SAR Metrics",
      descriptionTemplate: (title: string, tagline: string) =>
        `${tagline}. Analityka InSAR i monitoring satelitarny dla ${title === "Oil & Gas" ? "ropy i gazu" : title === "Infrastructure" ? "infrastruktury" : title === "Mining" ? "górnictwa" : title === "Insurance" ? "ubezpieczeń" : title === "Geohazards" ? "zagrożeń geotechnicznych" : title === "Structural movement" ? "ruchów konstrukcji" : title.toLowerCase()}.`,
    },
    insarAnalytics: {
      title: "Analityka InSAR — milimetryczna inteligencja o gruncie | SAR Metrics",
      description:
        "Analityka InSAR z radaru satelitarnego: mapy przemieszczeń, serie czasowe i alerty dla infrastruktury, górnictwa, energetyki i zagrożeń geotechnicznych.",
    },
    insarSolutions: {
      title: "Rozwiązania InSAR dla przemysłu i infrastruktury | SAR Metrics",
      description:
        "Rozwiązania InSAR dla infrastruktury, górnictwa, ubezpieczeń, ropy i gazu, zagrożeń geotechnicznych oraz ruchów konstrukcji — monitoring operacyjny z radaru satelitarnego.",
    },
    spaceMonitoring: {
      title: "Monitoring satelitarny z SAR i InSAR | SAR Metrics",
      description:
        "Monitoring satelitarny z radaru: programy InSAR o zasięgu regionalnym i punktowym mierzące ruchy gruntu i konstrukcji przez chmury i w ciemnościach.",
    },
    resources: {
      title: "Zasoby — słownik InSAR, FAQ i poradniki | SAR Metrics",
      description:
        "Poznaj analitykę InSAR, monitoring satelitarny i radar satelitarny: słownik, FAQ i poradniki SAR Metrics.",
    },
    glossary: {
      title: "Słownik InSAR i monitoringu satelitarnego | SAR Metrics",
      description:
        "Słownik terminów: InSAR, PS-InSAR, SAR, interferometria, deformacja gruntu, monitoring satelitarny i terminy obserwacji Ziemi.",
    },
    glossaryTerm: {
      titleTemplate: (term: string) => `${term} — Słownik | SAR Metrics`,
    },
    faq: {
      title: "FAQ InSAR i monitoring satelitarny | SAR Metrics",
      description:
        "Najczęściej zadawane pytania o analitykę InSAR, precyzję milimetrową, niezależność od pogody, branże, dostawę danych i jak zacząć z SAR Metrics.",
    },
    notFound: {
      title: "SAR Metrics — obserwacja Ziemi i analityka InSAR",
      description:
        "Milimetryczna inteligencja o gruncie z kosmosu. Analityka InSAR dla zagrożeń geotechnicznych, górnictwa, infrastruktury i energetyki.",
    },
  },

  nav: {
    solutions: "Rozwiązania",
    technology: "Technologia",
    resources: "Zasoby",
    about: "O nas",
    contact: "Kontakt",
  },

  footer: {
    tagline: "Mierzymy ruchy. Zarządzamy ryzykiem.",
    supportedBy: "Wspierają nas",
    solutionsTitle: "Rozwiązania",
    solutions: {
      infrastructure: "Infrastruktura",
      mining: "Górnictwo",
      insurance: "Ubezpieczenia",
      oilGas: "Ropa i gaz",
      geohazards: "Zagrożenia geotechniczne",
      structural: "Ruchy konstrukcji",
    },
    capabilitiesTitle: "Możliwości",
    capabilities: {
      insarAnalytics: "Analityka InSAR",
      insarSolutions: "Rozwiązania InSAR",
      spaceMonitoring: "Monitoring satelitarny",
      technology: "Technologia",
    },
    resourcesTitle: "Zasoby",
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
    footerTagline: "Milimetryczna inteligencja o gruncie z kosmosu.",
  },

  cta: {
    defaultTitle: "Gotowy zobaczyć, co się rusza?",
    defaultBody: "Powiedz nam o obiekcie lub regionie, który chcesz monitorować. Pokażemy, co może ujawnić InSAR.",
    defaultLabel: "Porozmawiaj z naszym zespołem",
  },

  home: {
    hero: {
      eyebrow: "Analityka InSAR",
      title: "Mierzymy ruchy. Zarządzamy ryzykiem.",
      subtitle:
        "SAR Metrics dostarcza analitykę InSAR i monitoring satelitarny mierzące ruchy gruntu i konstrukcji z dokładnością do milimetra — wszędzie, w dzień i w nocy, w każdych warunkach pogodowych.",
      exploreDemo: "Przeglądaj demo",
      insarSolutions: "Rozwiązania InSAR",
      howInsarWorks: "Jak działa InSAR",
    },
    supportedBy: {
      eyebrow: "Wspierają nas",
      text: "SAR Metrics jest wspierany przez Europejską Agencję Kosmiczną (ESA BIC Poland).",
    },
    solutions: {
      eyebrow: "Rozwiązania InSAR",
      title: "Od pojedynczych konstrukcji po całe regiony — monitoruj ruchy, zanim staną się ryzykiem.",
      readMore: "Czytaj więcej",
    },
    capabilities: {
      eyebrow: "Możliwości",
      title: "Zbudowane na skalę, dostrojone dla precyzji.",
      items: {
        millimetricPrecision: {
          title: "Precyzja milimetrowa",
          body: "Pomiar przemieszczeń gruntu i konstrukcji wzdłuż linii widzenia satelity z dokładnością do milimetrów.",
        },
        wideAreaCoverage: {
          title: "Zasięg regionalny",
          body: "Monitoruj całe zagłębia, korytarze transportowe i regiony miejskie w jednym przebiegu przetwarzania.",
        },
        allWeatherSar: {
          title: "Akwizycja SAR 24/7",
          body: "Aktywne obrazowanie radarowe przez chmury, dym i noc — niezależnie od pogody.",
        },
        historicalArchive: {
          title: "Archiwum historyczne",
          body: "Odtwórz przemieszczenia wstecz do wczesnych lat 90. XX wieku używając zarchiwizowanych danych SAR.",
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: "O nas",
      title: "Mierzymy to, co się rusza, aby inni mogli działać, zanim będzie za późno.",
      subtitle:
        "Zespół inżynierów radarowych, geospecjalistów i programistów czyniących obserwację Ziemi i analitykę InSAR rozwiązaniem operacyjnym.",
    },
    valuesEyebrow: "Wartości",
    values: {
      measurementFirst: {
        title: "Pomiar przede wszystkim",
        body: "Ufamy sygnałom, nie narracjom. Każde twierdzenie jest poparte danymi przetworzonymi przez nas samych.",
      },
      operatorGrade: {
        title: "Klasa operacyjna",
        body: "Zbudowane, aby polegali na nim inżynierowie geotechniczni, służby ochrony cywilnej i operatorzy obiektów.",
      },
      openByDefault: {
        title: "Otwarci domyślnie",
        body: "Standardowe formaty, udokumentowane API, powtarzalne przetwarzanie. Żadnych czarnych skrzynek.",
      },
    },
    timelineEyebrow: "Oś czasu",
    timeline: {
      seasat: {
        year: "1978",
        title: "Seasat",
        body: "NASA wypuszcza pierwszy cywilny satelitę SAR, dowodząc skuteczności obrazowania radarowego Ziemi z orbity.",
      },
      ers: {
        year: "1992",
        title: "Początek archiwum ERS-1",
        body: "Misje ERS ESA rozpoczynają ciągłe archiwum SAR, które nadal stanowi fundament historycznej analityki InSAR.",
      },
      psinsar: {
        year: "2002",
        title: "PS-InSAR",
        body: "Techniki PSInSAR odblokują serie czasowe o precyzji milimetrowej na stabilnych reflektorach.",
      },
      sentinel: {
        year: "2014",
        title: "Sentinel-1",
        body: "Darmowy, otwarty, globalny SAR co 6–12 dni zmienia InSAR z narzędzia badawczego w usługę operacyjną.",
      },
      commercial: {
        year: "lata 2020.",
        title: "Komercyjne konstelacje małych satelitów SAR",
        body: "Wysokorozdzielcze, częste akwizycje SAR od operatorów komercyjnych umożliwiają dzienny monitoring pojedynczych obiektów.",
      },
      founded: {
        year: "2026",
        title: "Założenie SAR Metrics",
        body: "Przenosimy cztery dekady nauki o SAR w system monitorowania obiektów dla przemysłu i infrastruktury.",
      },
      esaBic: {
        year: "2026",
        title: "Grant ESA BIC Poland",
        body: "SAR Metrics otrzymał grant ESA BIC Poland wspierający rozwój i komercjalizację technologii.",
      },
    },
    ctaTitle: "Współpracuj z nami.",
    ctaLabel: "Skontaktuj się",
  },

  contact: {
    hero: {
      eyebrow: "Kontakt",
      title: "Powiedz nam, co chcesz zobaczyć.",
      subtitle: "Wystarczy krótka wiadomość — wrócimy z odpowiednimi osobami i planem.",
    },
    form: {
      nameLabel: "Imię i nazwisko",
      emailLabel: "Email służbowy",
      companyLabel: "Firma",
      industryLabel: "Branża",
      industryPlaceholder: "Wybierz",
      industries: {
        infrastructure: "Infrastruktura",
        mining: "Górnictwo",
        insurance: "Ubezpieczenia",
        oilGas: "Ropa i gaz",
        geohazards: "Zagrożenia geotechniczne",
        structural: "Konstrukcje",
        other: "Inne",
      },
      messageLabel: "Co chcesz monitorować?",
      submitIdle: "Wyślij wiadomość",
      submitSending: "Wysyłanie...",
      submitSuccess: "Dziękujemy — wkrótce się skontaktujemy.",
      errorMessage: "Błąd sieci. Spróbuj ponownie.",
    },
    officeEyebrow: "Biuro",
    generalEnquiries: "Zapytania ogólne",
    email: "kontakt@sarmetrics.pl",
  },

  technology: {
    hero: {
      eyebrow: "Technologia",
      title: "Analityka InSAR z radaru satelitarnego.",
      subtitle:
        "Łańcuch przetwarzania kompresujący petabajty danych SAR w milimetryczne zrozumienie przemieszczeń dla operacyjnego monitoringu satelitarnego.",
    },
    howItWorks: {
      eyebrow: "Jak to działa",
      title: "Cztery etapy — od surowego radaru do sygnału gotowego do decyzji.",
      steps: {
        acquisition: {
          title: "Akwizycja",
          body: "Aktywne instrumenty radarowe na satelitach SAR obrazują powierzchnię Ziemi w dzień i w nocy, przez chmury i dym — fundamenty monitoringu satelitarnego.",
        },
        interferometry: {
          title: "Interferometria",
          body: "Pary obrazów SAR pozyskanych nad tym samym obszarem są porównywane w dziedzinie zespolonej, aby wyekstrahować zmianę fazy — wprost proporcjonalną do przemieszczenia.",
        },
        persistentScatterers: {
          title: "Rozpraszacze trwałe",
          body: "Stabilne reflektory — dachy, infrastruktura, odsłonięte skały — są identyfikowane w długich seriach czasowych i śledzone indywidualnie z precyzją milimetrową.",
        },
        analytics: {
          title: "Analityka i alerty",
          body: "Serie czasowe są rozkładane na trendy, cykle sezonowe i anomalie, a następnie udostępniane przez dashboardy, API i dostrojone alerty — analityka InSAR, na której operatorzy mogą działać.",
        },
      },
      footer: "Zagłęb się w nasz {glossary}, poznaj {analytics} lub zobacz branżowe {solutions}.",
      footerLinks: {
        glossary: "słownik InSAR",
        analytics: "analitykę InSAR",
        solutions: "rozwiązania InSAR",
      },
    },
    dataProducts: {
      eyebrow: "Produkty danych",
      items: {
        wideArea: {
          title: "Bazowa mapa regionalna",
          body: "Regionalne mapy przemieszczeń odświeżane z częstotliwością wybraną przez ciebie.",
        },
        focused: {
          title: "Monitoring punktowy",
          body: "Akwizycje wysokiej rozdzielczości nad krytycznymi obiektami z gęstym próbkowaniem czasowym.",
        },
        historical: {
          title: "Rekonstrukcja historyczna",
          body: "Badania wyłącznie archiwalne odzyskujące przemieszczenia wstecz do wczesnych lat 90. XX wieku.",
        },
        api: {
          title: "API i dostawa danych",
          body: "Dane wyjściowe GeoJSON, rastrowe i tabelaryczne oraz API alertów w czasie rzeczywistym.",
        },
      },
      footer: "Porównaj podejścia regionalne i punktowe na naszej stronie {spaceMonitoring} lub przeglądaj {solutions}.",
      footerLinks: {
        spaceMonitoring: "monitoringu satelitarnego",
        solutions: "rozwiązania branżowe",
      },
    },
    ctaTitle: "Chcesz zobaczyć dane na swoim obiekcie?",
    ctaLabel: "Poproś o próbkę",
  },

  solutions: {
    hero: {
      eyebrow: "Rozwiązania InSAR",
      title: "Rozwiązania InSAR dla każdego krytycznego obiektu.",
      subtitle:
        "Usługi monitoringu dostrojone dla przemysłu zbudowane na radarze satelitarnym — od pojedynczych konstrukcji po całe regiony.",
    },
    intro:
      "Każda branża poniżej to rozwiązanie InSAR zaprojektowane pod sposób zarządzania ryzykiem w danym przemyśle. Dla szerszego przeglądu zobacz {insarSolutions} i {insarAnalytics}.",
    introLinks: {
      insarSolutions: "rozwiązania InSAR",
      insarAnalytics: "analitykę InSAR",
    },
    open: "Otwórz",
  },

  solutionDetail: {
    eyebrow: "Rozwiązanie",
    challenge: "Wyzwanie",
    approach: "Podejście",
    outcome: "Rezultat",
    includes: "Co obejmuje usługa.",
    deliverablesEyebrow: "Dostarczane produkty",
    deliverables: "Co otrzymujesz.",
    useCasesEyebrow: "Przypadki użycia",
    useCases: "Kto tego używa i dlaczego.",
    otherSolutionsEyebrow: "Inne rozwiązania",
    open: "Otwórz",
    notFound: "Nie znaleziono rozwiązania",
    backToSolutions: "Powrót do rozwiązań",
  },

  offerings: {
    infrastructure: {
      title: "Infrastruktura",
      tagline: "Inteligencja ruchowa dla bezpieczniejszej infrastruktury — od projektowania po utrzymanie",
      description:
        "Autostrady, mosty, zapory, koleje i rurociągi monitorowane z precyzją milimetrową przez każdą fazę ich cyklu życia — rozwiązania InSAR dostrojone dla operatorów infrastruktury.",
    },
    mining: {
      title: "Górnictwo",
      tagline: "Wczesne ostrzeżenia i mitygacja ryzyka w obiektach górniczych",
      description:
        "Ciągły monitoring ścian wykopów, zapór odpadów poflotacyjnych, hałd odpadów i osiadania podziemnego — z progami alertów dostrojonymi na obiekt przy użyciu analityki InSAR.",
    },
    insurance: {
      title: "Ubezpieczenia",
      tagline: "Niezależne dowody ruchu gruntu dla underwritingu, likwidacji szkód i ryzyka portfelowego",
      description:
        "Analiza InSAR na skalę portfela i pojedynczych lokalizacji dla osiadania, osuwisk i ruchów konstrukcji — wspierająca underwriting, screening ekspozycji i ocenę roszczeń.",
    },
    "oil-gas": {
      title: "Ropa i gaz",
      tagline: "Subtelne przemieszczenia powierzchni dla produkcji i zarządzania złożem",
      description:
        "Śledź kompakcję i uniesienie złoża, integralność składowania CO₂ i reakcję gruntu wokół miejsc wydobycia — globalnie, powtarzalnie — z monitoringiem satelitarnym InSAR.",
    },
    geohazards: {
      title: "Zagrożenia geotechniczne",
      tagline: "Identyfikacja lokalizacji zagrożonych i monitoring zagrożeń geotechnicznych na dużych obszarach",
      description:
        "Screening InSAR na dużych obszarach ujawnia osuwiska, osiadanie i ruchy tektoniczne w całych regionach — na długo przed ich dotarciem do radarów ochrony cywilnej.",
    },
    structural: {
      title: "Ruchy konstrukcji",
      tagline: "Pomiar ruchów gruntu i konstrukcji z kosmosu",
      description:
        "Historie przemieszczeń budynek po budynku w obszarach miejskich — od pojedynczych fasad po całe dzielnice — przy użyciu archiwalnego i bieżącego SAR.",
    },
  },

  solutionPages: {
    geohazards: {
      intro:
        "Od terenów górskich po równiny przybrzeżne, zagrożenia geotechniczne rzadko się zapowiadają. SAR Metrics przekształca dekady obrazowania SAR w ciągle aktualizowany atlas ruchomego gruntu — tak aby właściciele ryzyka mogli działać, zanim ruch stanie się awarią.",
      challenge:
        "Osuwiska, osiadanie i ruchy tektoniczne zagrażają populacjom i infrastrukturze na rozległych, trudno dostępnych terenach.",
      approach:
        "Screening InSAR na dużych obszarach w całych regionach identyfikuje aktywne wzorce deformacji, następnie precyzuje punkty gorące akwizycjami wysokiej rozdzielczości.",
      outcome:
        "Władze ochrony cywilnej i ubezpieczyciele otrzymują priorytetowy, ciągle aktualizowany obraz tego, gdzie grunt się rusza — i jak szybko.",
      features: [
        {
          title: "Screening regionalny",
          body: "Mapy bazowe ruchu gruntu na skalę kraju i zagłębia.",
        },
        { title: "Precyzja punktów gorących", body: "Skupienie wysokiej rozdzielczości tam, gdzie wykryto ruch." },
        { title: "Progi alarmowe", body: "Dostrajalne alarmy prędkości i przyspieszenia na lokalizację." },
      ],
      metrics: [
        { value: "1 mm/rok", label: "Czułość prędkości" },
        { value: "100 000 km²", label: "Typowy zasięg screeningu" },
        { value: "1992→", label: "Głębokość archiwum historycznego" },
      ],
      deliverables: [
        "Regionalne mapy prędkości w formatach gotowych do GIS",
        "Rankingowy wykaz obszarów aktywnej deformacji",
        "Serie czasowe na lokalizację i alarmy przyspieszenia",
        "Kwartalne raporty przeglądowe z interpretacją ekspertów",
      ],
      useCases: [
        {
          title: "Ochrona cywilna",
          body: "Priorytetyzuj inspekcję gruntu i planowanie ewakuacji w regionie.",
        },
        {
          title: "Władze transportowe",
          body: "Przeskanuj korytarze drogowe i kolejowe w poszukiwaniu niestabilności zboczy zanim zakłócą usługi.",
        },
        {
          title: "Ubezpieczyciele i reasekuratorzy",
          body: "Skwantyfikuj ekspozycję na ryzyko osiadania i osuwisk w portfelach.",
        },
      ],
    },
    mining: {
      intro:
        "Odkrywki, obiekty składowania odpadów poflotacyjnych i operacje podziemne — wszystko się rusza. Pytanie brzmi: jak szybko i co to oznacza. SAR Metrics integruje satelitarny, naziemny radar i dane in-situ w jeden obraz geotechniczny.",
      challenge:
        "Ściany wykopów, zapory odpadów poflotacyjnych i hałdy odpadów zawodzą bez ostrzeżenia, ze katastrofalnymi kosztami środowiskowymi i ludzkimi.",
      approach:
        "Ciągły monitoring SAR połączony z fuzją radaru naziemnego dostarcza serie przemieszczeń na poziom ławy i komórki niemal w czasie rzeczywistym.",
      outcome:
        "Zespoły geotechniczne kopalni otrzymują wskaźniki wczesnego ostrzegania, codziennie, względem progów stabilności specyficznych dla obiektu.",
      features: [
        {
          title: "Stabilność wykopu i ścian",
          body: "Serie przemieszczeń na poziomie ławy dla aktywnych i nieużywanych wykopów.",
        },
        {
          title: "Integralność zapory odpadów poflotacyjnych",
          body: "Śledzenie ruchu komórka po komórce z progami alarmowymi.",
        },
        {
          title: "Monitoring zamknięcia",
          body: "Długoterminowe śledzenie osiadania i odbicia po zamknięciu.",
        },
      ],
      metrics: [
        { value: "Co tydzień", label: "Częstotliwość aktualizacji krytycznych obiektów" },
        { value: "1 mm", label: "Precyzja na punkt po spiętrzeniu" },
        { value: "GISTM", label: "Zgodność ze standardami odpadów poflotacyjnych" },
      ],
      deliverables: [
        "Mapy deformacji na poziomie ławy i komórki",
        "Alarmy prędkości i przyspieszenia do dashboardów operacyjnych",
        "Niezależne raporty stron trzecich dla regulatorów i zarządów",
        "Bazowe linie trendu długoterminowego zamknięcia i po zamknięciu",
      ],
      useCases: [
        {
          title: "Inżynieria geotechniczna",
          body: "Waliduj modele stabilności zboczy ciągłą, obiektową prawdą terenową.",
        },
        {
          title: "Zarządzanie odpadami poflotacyjnymi",
          body: "Demonstruj integralność zapory regulatorom i społecznościom zgodnie z GISTM.",
        },
        {
          title: "Zamknięcie i obiekty nieużywane",
          body: "Śledź rezydualne osiadanie dekady po zaprzestaniu operacji.",
        },
      ],
    },
    insurance: {
      intro:
        "Ubezpieczyciele potrzebują niezależnych dowodów skalujących się od jednego roszczenia po całą księgę biznesową. SAR Metrics używa radaru satelitarnego do kwantyfikacji ruchu gruntu i konstrukcji w portfelach, strefach katastrof i spornych obiektach.",
      challenge:
        "Zespoły underwritingowe i likwidacji szkód często podejmują decyzje o wysokiej wartości z ograniczonymi, niespójnymi lub opóźnionymi dowodami z miejsca.",
      approach:
        "Screening InSAR na dużych obszarach identyfikuje punkty gorące ekspozycji w portfelach, następnie analiza punktowa rekonstruuje historię przemieszczeń przed, w czasie i po zdarzeniu.",
      outcome:
        "Zespoły ubezpieczeniowe zyskują obronne dowody ruchu dla underwritingu, zarządzania akumulacją, walidacji roszczeń i raportowania eksperckiego.",
      features: [
        {
          title: "Screening portfelowy",
          body: "Rankinguj ubezpieczone obiekty i regiony według obserwowanej aktywności osiadania, osuwisk i osadzania.",
        },
        {
          title: "Rekonstrukcja roszczeń",
          body: "Odbuduj historię przemieszczeń wokół zgłoszonego zdarzenia szkodowego używając archiwów SAR.",
        },
        {
          title: "Niezależne raportowanie",
          body: "Dostarcz pakiety dowodowe gotowe dla ekspertów do likwidatorów, brokerów i zespołów prawnych.",
        },
      ],
      metrics: [
        { value: "1992→", label: "Głębokość archiwum do rekonstrukcji zdarzeń" },
        { value: "Skala portfela", label: "Pokrycie w księgach biznesowych" },
        { value: "1 mm/rok", label: "Czułość ruchu długoterminowego" },
      ],
      deliverables: [
        "Mapy ekspozycji portfela z priorytetowymi punktami gorącymi",
        "Serie czasowe przemieszczeń na poziomie nieruchomości i korytarza",
        "Rekonstrukcje ruchu przed i po zdarzeniu dla roszczeń",
        "Raporty ekspertów wspierające underwriting i ocenę szkód",
      ],
      useCases: [
        {
          title: "Underwriting",
          body: "Przeskanuj nowe ryzyka w poszukiwaniu sygnałów osiadania, niestabilności zboczy i długoterminowego osadzania.",
        },
        {
          title: "Roszczenia i likwidacja szkód",
          body: "Testuj, czy obserwowany ruch zgadza się z czasem i naturą zgłoszonej szkody.",
        },
        {
          title: "Zarządzanie portfelem",
          body: "Identyfikuj koncentracje ekspozycji związanej z ruchem w regionach, sektorach i klasach obiektów.",
        },
      ],
    },
    infrastructure: {
      intro:
        "Infrastruktura krytyczna rusza się przez każdą fazę swojego życia — osadza się pod obciążeniem, reaguje na pobliskie prace, starzeje się na miejscu. SAR Metrics dostarcza ciągłego zapisu łączącego założenia projektowe z rzeczywistym zachowaniem.",
      challenge:
        "Zapory, mosty, tunele i sieci kolejowe degradują się po cichu; sama inspekcja wzrokowa przegapia milimetryczne prekursory.",
      approach:
        "InSAR cyklu życia łączy bazowe linie projektowe, monitoring budowy i nadzór operacyjny w jeden ciągły zapis.",
      outcome:
        "Właściciele i operatorzy zmniejszają ryzyko capex i wydłużają życie obiektów przez planowanie utrzymania oparte na dowodach.",
      features: [
        {
          title: "Bazowa linia przedbudowlana",
          body: "Lata historycznego ruchu zanim grunt zostanie naruszony.",
        },
        {
          title: "Nadzór budowlany",
          body: "Śledzi przemieszczenia wywołane pracami w czasie rzeczywistym.",
        },
        {
          title: "Monitoring operacyjny",
          body: "Stały nadzór przez cykl życia obiektu.",
        },
      ],
      metrics: [
        { value: "30+ lat", label: "Dostępna bazowa linia retrospektywna" },
        { value: "Co tydzień", label: "Częstotliwość akwizycji na aktywnych obiektach" },
        { value: "BIM/GIS", label: "Natywna integracja z systemami obiektowymi" },
      ],
      deliverables: [
        "Dashboardy przemieszczeń na poziomie obiektu",
        "Raporty osadzania wywołanego w fazie budowy",
        "Screening całych korytarzy dla sieci kolejowych i drogowych",
        "Niezależne dowody dla zezwoleń, audytów i sporów sądowych",
      ],
      useCases: [
        {
          title: "Zapory i zbiorniki",
          body: "Wykrywaj ruch korony i oporów w całej konstrukcji.",
        },
        {
          title: "Mosty i wiadukty",
          body: "Zapisy ruchu na filar skorelowane z ruchem i sezonami.",
        },
        { title: "Tunele i metro", body: "Reakcja powierzchni na prace podziemne i postęp TBM." },
      ],
    },
    "oil-gas": {
      intro:
        "Wydajność złoża, integralność odwiertów i bezpieczeństwo składowania — wszystko zostawia ślad na powierzchni. SAR Metrics dekoduje ten sygnał w produkcyjnych polach, opuszczonych odwiertach i miejscach składowania CO₂ na całym świecie.",
      challenge:
        "Ekstrakcja ze złoża i iniekcja indukują przemieszczenie powierzchni sygnalizujące integralność odwiertu, kompakcję i wydajność składowania.",
      approach:
        "InSAR z powtarzalnymi przelotami nad polami i miejscami składowania dostarcza mapy uniesienia i osiadania związane z cyklami produkcyjnymi.",
      outcome:
        "Zespoły obiektowe korelują ruch z danymi z głębinowych, aby optymalizować produkcję i demonstrować integralność składowania CO₂.",
      features: [
        {
          title: "Nadzór nad złożem",
          body: "Śledź kompakcję i odbicie nad produkcyjnymi polami.",
        },
        { title: "Integralność składowania CO₂", body: "Reakcja powierzchni na iniekcję w miejscach składowania." },
        { title: "Zgodność z zezwoleniami", body: "Niezależne dowody dla regulatorów i interesariuszy." },
      ],
      metrics: [
        { value: "1 mm", label: "Wykrywanie uniesienia na miejscach składowania" },
        { value: "Miesięcznie", label: "Standardowa częstotliwość cyklu produkcyjnego" },
        { value: "Globalne", label: "Pokrycie z jednej platformy" },
      ],
      deliverables: [
        "Mapy osiadania i uniesienia całego pola",
        "Serie czasowe na głowicach, podkładach i punktach iniekcji",
        "Dane wejściowe dopasowania historycznego dla modeli złóż",
        "Pakiety monitoringu, raportowania i weryfikacji CCS gotowe dla regulatora",
      ],
      useCases: [
        {
          title: "Pola produkcyjne",
          body: "Połącz kompakcję powierzchni ze stawkami produkcji i ciśnieniem złoża.",
        },
        {
          title: "CCS i składowanie",
          body: "Niezależnie zweryfikuj zatrzymanie wstrzykniętego CO₂ w miejscach składowania.",
        },
        { title: "Opuszczone odwierty", body: "Przeskanuj populacje nieużywanych odwiertów w poszukiwaniu anomalii powierzchniowych." },
      ],
    },
    structural: {
      intro:
        "Każda odbijająca fasada w mieście to potencjalny punkt pomiarowy. SAR Metrics przekształca obszary miejskie w żywe mapy deformacji — budynek po budynku, wstecz do wczesnych lat 90. XX wieku.",
      challenge:
        "Budynki miejskie osiadają, przechylają się i pękają w odpowiedzi na prace sąsiednie, poziomy wód gruntowych i fundamenty sprzed dekad.",
      approach:
        "InSAR rozpraszaczy trwałych przekształca każdą odbijającą fasadę w punkt pomiarowy, wstecz do wczesnych archiwów SAR.",
      outcome:
        "Władze miejskie, menedżerowie obiektów i inżynierowie medycyny sądowej otrzymują historie przemieszczeń na poziomie budynków na żądanie.",
      features: [
        { title: "Budynek po budynku", body: "Przemieszczenie na konstrukcję na poziomie fasady." },
        {
          title: "Rekonstrukcja archiwalna",
          body: "Ruch historyczny od 1992 roku tam, gdzie dane istnieją.",
        },
        { title: "Dowody medycyny sądowej", body: "Dokumentacja osiadania na poziomie sądowym." },
      ],
      metrics: [
        { value: "1992", label: "Najwcześniejsze obrazowanie archiwalne" },
        { value: ">10 tys.", label: "Punktów pomiarowych na km² w gęstych obszarach" },
        { value: "0,1 mm/rok", label: "Precyzja prędkości długoterminowej" },
      ],
      deliverables: [
        "Serie czasowe przemieszczeń na budynek",
        "Chmury punktów na poziomie fasady i dachu z prędkością",
        "Rekonstrukcje historyczne dla śledztw przed zdarzeniem",
        "Raporty ekspertów dla sporów sądowych, ubezpieczeniowych i obiektowych",
      ],
      useCases: [
        {
          title: "Władze miejskie",
          body: "Monitoruj dzielnice dziedzictwa i wysoko-ryzykowne sąsiedztwa ciągle.",
        },
        {
          title: "Właściciele nieruchomości",
          body: "Diagnozuj problemy przechyłu i osiadania zanim staną się strukturalne.",
        },
        {
          title: "Inżynieria medycyny sądowej",
          body: "Odtwórz historię ruchu budynku wokół zdarzenia szkodowego.",
        },
      ],
    },
  },

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: "Analityka InSAR",
        title: "Analityka InSAR przekształcająca radar w decyzje.",
        subtitle:
          "Milimetryczna inteligencja przemieszczeń z kosmosu — mapy, serie czasowe i alerty dla zespołów zarządzających ryzykiem ruchu.",
      },
      sections: {
        problem: {
          title: "Problem, który rozwiązuje analityka InSAR",
          paragraphs: [
            "Krytyczne obiekty ruszają się powoli, aż nagle nie. Osiadanie, pełzanie zboczy i osadzanie konstrukcji często pozostają niewidoczne aż do okien inspekcyjnych lub zdarzeń awaryjnych.",
            "Analityka InSAR daje operatorom ciągłą warstwę pomiarową: gdzie grunt i konstrukcje się ruszają, jak szybko i czy wzorzec przyspiesza — bez oczekiwania na instrumentację każdego kilometra.",
          ],
        },
        howWeDeliver: {
          title: "Jak SAR Metrics produkuje sygnał",
          paragraphs: [
            "Spiętrzymy akwizycje SAR, tworzymy interferogramy, wybieramy rozpraszacze trwałe i konwertujemy zmianę fazy w milimetryczne przemieszczenie linii widzenia.",
            "Analityka następnie separuje trendy, sezonowość i anomalie i dostarcza mapy, historie punktów i alerty przez dashboardy i API. Poznaj pełny łańcuch na naszej stronie technologii.",
          ],
        },
        whatYouReceive: {
          title: "Co otrzymujesz",
          paragraphs: [
            "Bazowe linie regionalne do screeningu, monitoring punktowy dla obiektów priorytetowych, rekonstrukcję historyczną z archiwów i formaty dostawy, których już używają twoi inżynierowie.",
            "Wyniki są zaprojektowane dla przepływów pracy geotechnicznych, obiektowych i ryzyka — nie dla notebooków badawczych.",
          ],
        },
      },
      industries: {
        eyebrow: "Branże polegające na analityce",
        title: "Branże polegające na analityce",
      },
      footer:
        "Poznaj pakietowe {insarSolutions}, {spaceMonitoring} lub {glossary}.",
      footerLinks: {
        insarSolutions: "rozwiązania InSAR",
        spaceMonitoring: "monitoring satelitarny",
        glossary: "wpis słownikowy InSAR",
      },
      faqTitle: "Pytania o analitykę InSAR",
      ctaTitle: "Zobacz analitykę InSAR na swoim AOI.",
      ctaLabel: "Porozmawiaj z naszym zespołem",
    },
    insarSolutions: {
      hero: {
        eyebrow: "Rozwiązania InSAR",
        title: "Rozwiązania InSAR zbudowane pod to, jak branże zarządzają ryzykiem.",
        subtitle:
          "Jeden fundament radaru satelitarnego. Sześć ofert operacyjnych dostrojonych dla decyzji, które twoje zespoły już podejmują.",
      },
      whyDedicated: {
        title: "Dlaczego dedykowane rozwiązania InSAR",
        paragraphs: [
          "Generyczne mapy przemieszczeń rzadko pasują do przepływów pracy operatorów. Właściciele infrastruktury potrzebują kontekstu cyklu życia; kopalnie potrzebują progowanych alarmów; ubezpieczyciele potrzebują niezależnych dowodów; zespoły energetyczne potrzebują trendów na skalę złoża.",
          "SAR Metrics pakietuje analitykę InSAR w rozwiązania branżowe — to samo rygorystyczne przetwarzanie, inny projekt monitoringu, produkty i język. Porównaj fundament techniczny na {insarAnalytics} i {technology}.",
        ],
        links: {
          insarAnalytics: "analityce InSAR",
          technology: "technologii",
        },
      },
      footer:
        "Wolisz widok skupiony na możliwościach? Zobacz {allSolutions} lub poznaj, jak {spaceMonitoring} skaluje się od zagłębi po budynki.",
      footerLinks: {
        allSolutions: "wszystkie rozwiązania",
        spaceMonitoring: "monitoring satelitarny",
      },
      faqTitle: "FAQ rozwiązań InSAR",
      ctaTitle: "Zaprojektuj rozwiązanie InSAR dla swojego portfela.",
      ctaLabel: "Skontaktuj się z nami",
      open: "Otwórz",
    },
    spaceMonitoring: {
      hero: {
        eyebrow: "Monitoring satelitarny",
        title: "Monitoring satelitarny widzący ruchy z orbity.",
        subtitle:
          "Satelitarny SAR obserwuje obiekty i regiony w dzień i w nocy, przez chmury — następnie analityka InSAR przekształca te akwizycje w operacyjną inteligencję o gruncie.",
      },
      whyFromSpace: {
        title: "Dlaczego monitorować z kosmosu",
        paragraphs: [
          "Sieci naziemne są precyzyjne, ale rzadkie. Satelity optyczne pomagają z kontekstem, ale zawodzą pod chmurami i w nocy. Monitoring satelitarny z SAR wypełnia lukę: spójny powrót, niezależność od pogody i pokrycie od pojedynczych fasad po całe regiony.",
          "SAR Metrics operuje tym stosem jako usługą — strategią akwizycji, przetwarzaniem InSAR, analityką i dostawą — więc zespoły inżynieryjne i ryzyka otrzymują sygnały, na których mogą działać. Czytaj więcej o {insarAnalytics} i pakietowych {insarSolutions}.",
        ],
        links: {
          insarAnalytics: "analityce InSAR",
          insarSolutions: "rozwiązaniach InSAR",
        },
      },
      modes: {
        eyebrow: "Tryby monitoringu",
        items: {
          wideArea: {
            title: "Screening regionalny",
            body: "Mapuj przemieszczenia w korytarzach, zagłębiach i miastach, aby znaleźć punkty gorące zanim zainstrumentujesz każde miejsce. Idealny dla programów zagrożeń geotechnicznych, właścicieli sieci i ryzyka portfelowego.",
          },
          focused: {
            title: "Monitoring punktowy obiektów",
            body: "Zwiększ powrót i szczegół przestrzenny nad wykopami, zaporami, zakładami, mostami i dzielnicami gdy priorytetowe lokalizacje są znane — z progami dostrojonymi do każdego obiektu.",
          },
          historical: {
            title: "Rekonstrukcja historyczna",
            body: "Odzyskaj lata ruchu z archiwów SAR, aby ustalić bazowe linie, wspierać roszczenia i zrozumieć, jak obszar zachowywał się zanim twoje czujniki istniały.",
          },
        },
      },
      fromOrbitToAction: {
        title: "Z orbity do działania",
        paragraphs: [
          "Monitoring satelitarny jest przydatny tylko jeśli dotrze do ludzi, którzy decydują. Dostarczamy GeoJSON, rastry, tabele, dashboardy i API alertów — i projektujemy AOI wokół tego, jak już inspektujesz i eskolujesz ryzyko.",
          "Zacznij od próbkowego AOI, przejrzyj historię archiwum, następnie przejdź do częstotliwości operacyjnej. Poznaj {technology}, przeglądaj {glossary} lub {contact}.",
        ],
        links: {
          technology: "łańcuch przetwarzania",
          glossary: "wpis słownikowy monitoringu satelitarnego",
          contact: "skontaktuj się z zespołem",
        },
      },
      faqTitle: "FAQ monitoringu satelitarnego",
      ctaTitle: "Umieść monitoring satelitarny na swoich obiektach.",
      ctaBody:
        "Powiedz nam region lub obiekt. Pokażemy, co satelitarny SAR i InSAR mogą już ujawnić.",
      ctaLabel: "Poproś o briefing",
    },
  },

  resources: {
    hero: {
      eyebrow: "Zasoby",
      title: "Zrozum InSAR zanim go kupisz.",
      subtitle:
        "Referencje w prostym języku dla analityki InSAR, monitoringu satelitarnego i terminów, których twoi inżynierowie już używają.",
    },
    hubs: {
      glossary: {
        title: "Słownik",
        body: "Definicje dla InSAR, PS-InSAR, SAR, interferometrii, monitoringu satelitarnego i terminów pokrewnych.",
      },
      faq: {
        title: "FAQ",
        body: "Praktyczne odpowiedzi o dokładności, niezależności od pogody, branżach, dostawie i jak zacząć.",
      },
      insarAnalytics: {
        title: "Analityka InSAR",
        body: "Jak inteligencja przemieszczeń jest produkowana i używana w krytycznych obiektach.",
      },
      insarSolutions: {
        title: "Rozwiązania InSAR",
        body: "Programy monitoringu dostrojone dla przemysłu zbudowane na radarze satelitarnym.",
      },
      spaceMonitoring: {
        title: "Monitoring satelitarny",
        body: "Monitoring regionalny i punktowy z orbity dla ryzyka ruchu.",
      },
      technology: {
        title: "Technologia",
        body: "Czteroetapowy łańcuch od akwizycji SAR do analityki i alarmów.",
      },
    },
    ctaTitle: "Nadal masz pytania?",
    ctaLabel: "Skontaktuj się z nami",
  },

  glossary: {
    index: {
      hero: {
        eyebrow: "Słownik",
        title: "Terminy InSAR i monitoringu satelitarnego.",
        subtitle:
          "Krótkie definicje, którymi możesz się podzielić z interesariuszami — każdy termin rozwija się w pełne wyjaśnienie.",
      },
      footer: "Szukasz odpowiedzi zamiast definicji? Zobacz {faq}.",
      footerLink: "FAQ",
    },
    terms: {
      insar: {
        term: "InSAR",
        shortDefinition:
          "Interferometryczny radar z syntetyczną aperturą — technika satelitarna mierząca ruchy gruntu i konstrukcji z precyzją milimetrową.",
        body: [
          "InSAR (Interferometric Synthetic Aperture Radar) porównuje pary obrazów radarowych pozyskanych nad tym samym miejscem w różnych czasach. Drobne zmiany fazy sygnału radarowego przekładają się na przemieszczenie powierzchni wzdłuż linii widzenia satelity.",
          "W przeciwieństwie do obrazowania optycznego, InSAR działa przez chmury, dym i ciemność, ponieważ SAR jest aktywnym czujnikiem mikrofalowym. To czyni go fundamentem operacyjnego monitoringu satelitarnego infrastruktury, kopalń, złóż i zagrożeń geotechnicznych.",
          "SAR Metrics przekształca pomiary InSAR w analitykę gotową do decyzji — serie czasowe, mapy, alerty i API — aby operatorzy mogli działać zanim ruch stanie się szkodą.",
        ],
      },
      "ps-insar": {
        term: "PS-InSAR",
        shortDefinition:
          "InSAR rozpraszaczy trwałych — metoda śledząca stabilne reflektory radarowe w długich seriach czasowych dla przemieszczeń na poziomie milimetra.",
        body: [
          "PS-InSAR (Persistent Scatterer InSAR) skupia się na punktach, które pozostają koherentne w wielu przelotach satelity: dachach, mostach, torach, odsłonięciach skał i innych reflektorach inżynierskich lub naturalnych.",
          "Budując długie serie czasowe na tych punktach, PS-InSAR odzyskuje powolne trendy deformacji, cykle sezonowe i anomalie, które zginęłyby w zaszumionych średnich regionalnych.",
          "SAR Metrics używa przetwarzania typu PS-InSAR tam, gdzie obiekty potrzebują gęstych, milimetrycznych historii — następnie nakłada analitykę i alerty dla operatorów.",
        ],
      },
      sar: {
        term: "SAR",
        shortDefinition:
          "Radar z syntetyczną aperturą — aktywny czujnik satelitarny obrazujący powierzchnię Ziemi w dzień i w nocy, w każdej pogodzie.",
        body: [
          "Radar z syntetyczną aperturą (SAR) transmituje impulsy mikrofalowe i rejestruje echa. Poprzez syntezowanie długiej anteny z ruchu satelity, produkuje obrazy radarowe wysokiej rozdzielczości niezależnie od światła słonecznego.",
          "Nowoczesne konstelacje (w tym Sentinel-1 i komercyjne małe satelity) powracają do tych samych torów gruntowych regularnie, tworząc archiwa, na których opiera się analityka InSAR.",
          "SAR Metrics przetwarza stosy SAR w produkty przemieszczeń dla przemysłu i ochrony cywilnej.",
        ],
      },
      interferometry: {
        term: "Interferometria",
        shortDefinition:
          "Porównanie dwóch obrazów SAR w celu wyekstrahowania różnic fazy odpowiadających przemieszczeniu powierzchni.",
        body: [
          "Interferometria radarowa tworzy interferogram poprzez połączenie dwóch zespolonych obrazów SAR tego samego obszaru. Różnica fazy koduje zmiany odległości między satelitą a gruntem.",
          "Po skorygowaniu geometrii orbity, topografii i efektów atmosferycznych, pozostała zmiana fazy jest interpretowana jako ruch gruntu lub konstrukcji.",
          "Interferometria jest kluczowym krokiem między surową akwizycją SAR a analityką InSAR używaną do monitoringu.",
        ],
      },
      "ground-deformation": {
        term: "Deformacja gruntu",
        shortDefinition:
          "Zmiana pozycji powierzchni Ziemi w czasie — w tym osiadanie, uniesienie, osuwiska i ruchy tektoniczne.",
        body: [
          "Deformacja gruntu obejmuje każdy mierzalny ruch powierzchni lądu: powolne osiadanie pod miastami, ruch ściany wykopu w kopalniach, pełzanie osuwisk lub kompakcję złoża nad polami ropy i gazu.",
          "Satelitarny InSAR może mapować deformację na dużych obszarach i rekonstruować lata historii z archiwów SAR — często zanim instrumenty naziemne zostaną zainstalowane.",
          "Zrozumienie wzorców deformacji pomaga operatorom priorytetyzować inspekcję, wzmacniać obiekty i zmniejszać ryzyko.",
        ],
      },
      "persistent-scatterer": {
        term: "Rozpraszacz trwały",
        shortDefinition:
          "Stabilny reflektor radarowy pozostający koherentny w wielu akwizycjach SAR i możliwy do śledzenia w czasie.",
        body: [
          "Rozpraszacz trwały to punkt na gruncie zwracający silne, stabilne echo radarowe z przelotu na przelot — typowo konstrukcje metalowe, narożniki budynków, mosty lub odsłonięte skały.",
          "Te punkty kotwiczą serie czasowe PS-InSAR i pozwalają mierzyć milimetryczne przemieszczenia nawet w złożonych scenach miejskich lub przemysłowych.",
          "Gęste sieci rozpraszaczy trwałych przekształcają miasta i korytarze w ciągłe siatki monitoringowe.",
        ],
      },
      "space-monitoring": {
        term: "Monitoring satelitarny",
        shortDefinition:
          "Obserwowanie obiektów i regionów z orbity — używając czujników satelitarnych takich jak SAR dla ciągłej, regionalnej świadomości sytuacyjnej.",
        body: [
          "Monitoring satelitarny używa satelitów obserwacji Ziemi do obserwowania krytycznych obiektów i regionów bez instalowania gęstych sieci naziemnych wszędzie.",
          "Monitoring satelitarny oparty na SAR jest szczególnie potężny dla ruchu: mierzy przemieszczenie przez pogodę i ciemność, na skalach od pojedynczych konstrukcji po całe zagłębia.",
          "SAR Metrics dostarcza monitoring satelitarny jako operacyjną analitykę InSAR — bazowe linie, kampanie punktowe, rekonstrukcję historyczną i alerty.",
        ],
      },
      "millimetric-displacement": {
        term: "Przemieszczenie milimetrowe",
        shortDefinition:
          "Ruch gruntu lub konstrukcji mierzony na skalę milimetra używając satelitarnej interferometrii radarowej.",
        body: [
          "Przemieszczenie milimetrowe oznacza wykrywanie i śledzenie ruchu rzędu milimetrów na rok lub na powrót — znacznie poniżej tego, co inspekcja wzrokowa może wiarygodnie wychwycić wcześnie.",
          "InSAR osiąga to mierząc zmianę fazy radarowej wzdłuż linii widzenia satelity, następnie konwertując ją w serie czasowe przemieszczeń dla punktów i obszarów zainteresowania.",
          "Wczesne sygnały milimetrowe często poprzedzają widoczne pęknięcia, przechyły lub awarie — dając operatorom czas na interwencję.",
        ],
      },
      "satellite-radar": {
        term: "Radar satelitarny",
        shortDefinition:
          "Sensing radarowy z orbity — typowo SAR — używany do obrazowania terenu i mierzenia zmian niezależnie od światła dziennego i pokrywy chmur.",
        body: [
          "Radar satelitarny odnosi się do systemów obrazowania mikrofalowego lądujących na statkach kosmicznych. Dominującą formą cywilną jest radar z syntetyczną aperturą (SAR).",
          "Ponieważ czujnik sam oświetla grunt, radar satelitarny wspiera obrazowanie całopogodowe, dzień-noc niezbędne dla operacyjnych programów monitoringu.",
          "SAR Metrics buduje analitykę InSAR na archiwach radaru satelitarnego i zadaniowych akwizycjach komercyjnych.",
        ],
      },
      "wide-area-monitoring": {
        term: "Monitoring regionalny",
        shortDefinition:
          "Screening dużych regionów — korytarzy, zagłębi, miast — w poszukiwaniu ruchu gruntu ze spójnym pokryciem satelitarnym.",
        body: [
          "Monitoring regionalny używa spiętrzonych pokryć SAR do produkcji regionalnych map przemieszczeń i punktów gorących bez wcześniejszego indywidualnego sprawdzania każdego obiektu.",
          "Jest zwykłym punktem wejścia dla screeningu zagrożeń geotechnicznych, widoków portfeli ubezpieczeniowych i programów infrastruktury sieciowej.",
          "Gdy lokalizacje ryzyka są zidentyfikowane, monitoring InSAR punktowy może zwiększyć rozdzielczość i powrót nad krytycznymi miejscami.",
        ],
      },
    },
  },

  faqs: {
    site: [
      {
        question: "Co to jest analityka InSAR?",
        answer:
          "Analityka InSAR przekształca satelitarną interferometrię radarową w użyteczną inteligencję: mapy przemieszczeń, serie czasowe, trendy i alerty. SAR Metrics przetwarza stosy SAR i dostarcza wyniki przez dashboardy, pliki i API, aby zespoły mogły zarządzać ryzykiem gruntu i konstrukcji.",
      },
      {
        question: "Jak dokładny jest milimetrowy monitoring gruntu z kosmosu?",
        answer:
          "Przy odpowiedniej geometrii i koherencji, InSAR może rozwiązać milimetrowe przemieszczenie linii widzenia na rozpraszaczach trwałych. Dokładność zależy od geometrii satelity, atmosfery, pokrywy terenu i metody przetwarzania — dlatego dostrajamy produkty na obiekt i region.",
      },
      {
        question: "Czy monitoring satelitarny działa przez chmury i w nocy?",
        answer:
          "Tak. Radar z syntetyczną aperturą jest aktywnym czujnikiem mikrofalowym, więc akwizycje kontynuują przez chmury, dym i ciemność. Ta niezawodność jest kluczowym powodem, dla którego operatorzy wybierają monitoring satelitarny oparty na SAR nad podejściami wyłącznie optycznymi.",
      },
      {
        question: "Które branże używają rozwiązań InSAR SAR Metrics?",
        answer:
          "Wspieramy właścicieli infrastruktury, operatorów górniczych, ubezpieczycieli, producentów ropy i gazu, zespoły ochrony cywilnej i inżynierów konstrukcji — wszędzie tam, gdzie milimetryczna inteligencja ruchu zmniejsza ryzyko lub wyjaśnia odpowiedzialność.",
      },
      {
        question: "Czy możecie odtworzyć historyczny ruch?",
        answer:
          "Tak. Spiętrzowane archiwa SAR pozwalają na historyczną rekonstrukcję przemieszczenia, często wstecz do wczesnych lat 90. XX wieku w zależności od pokrycia. Badania archiwalne pomagają w medycynie sądowej, projektowaniu bazowym i ocenie roszczeń.",
      },
      {
        question: "Jak są dostarczane wyniki?",
        answer:
          "Produkty obejmują mapy przemieszczeń, serie czasowe punktów, eksporty GeoJSON/raster/tabela, dashboardy i API alertów. Dopasowujemy dostawę do tego, jak twoi inżynierowie i zespoły ryzyka już pracują.",
      },
      {
        question: "Jaka jest różnica między monitoringiem regionalnym a punktowym?",
        answer:
          "Monitoring regionalny przeskanuje regiony i portfele w poszukiwaniu punktów gorących. Monitoring punktowy zwiększa próbkowanie przestrzenne i czasowe nad krytycznymi obiektami gdy lokalizacje ryzyka są znane. Wiele programów używa obu.",
      },
      {
        question: "Jak zacząć?",
        answer:
          "Powiedz nam obiekt lub region, który chcesz zobaczyć. Przejrzymy dostępne pokrycie SAR, zaproponujemy projekt monitoringu i często możemy pokazać wstępną próbkę z danych archiwalnych zanim zobowiążesz się do programu operacyjnego.",
      },
    ],
    insarAnalytics: [
      {
        question: "Jak analityka InSAR różni się od surowych obrazów SAR?",
        answer:
          "Surowe obrazy SAR pokazują rozproszenie radarowe. Analityka InSAR ekstrahuje przemieszczenie ze zmiany fazy w czasie, następnie konwertuje to w mapy, trendy i alerty, na których operatorzy mogą działać.",
      },
      {
        question: "Jakie decyzje wspiera analityka InSAR?",
        answer:
          "Typowe decyzje obejmują gdzie inspektować, kiedy spowolnić produkcję, czy zbocze przyspiesza, jak konstrukcja przesunęła się od budowy i jak underwritować lub ocenić ryzyko ruchu gruntu.",
      },
      {
        question: "Czy potrzebujecie instrumentów na gruncie?",
        answer:
          "Instrumenty naziemne pozostają wartościowe dla kalibracji i lokalnego potwierdzenia. Analityka InSAR je uzupełnia dostarczając szerokie pokrycie i długie historie tam, gdzie czujniki nigdy nie zostały zainstalowane.",
      },
    ],
    insarSolutions: [
      {
        question: "Jakie rozwiązania InSAR oferuje SAR Metrics?",
        answer:
          "Monitoring dostrojony dla przemysłu dla infrastruktury, górnictwa, ubezpieczeń, ropy i gazu, zagrożeń geotechnicznych i ruchów konstrukcji — wszystko zbudowane na tym samym fundamencie radaru satelitarnego.",
      },
      {
        question: "Czy jeden program może pokryć wiele typów obiektów?",
        answer:
          "Tak. Wielu klientów zaczyna od bazowej linii regionalnej, a następnie dodaje monitoring punktowy na obiektach priorytetowych. Wspólne przetwarzanie i dostawa utrzymują programy wieloobjektowe koherentne.",
      },
      {
        question: "Jak szybko można postawić rozwiązanie?",
        answer:
          "Screening oparty na archiwach może często zacząć się w ciągu dni do tygodni w zależności od rozmiaru AOI i wyboru produktu. Częstotliwość powrotu operacyjnego następuje po dostępności satelity i zadaniowaniu.",
      },
    ],
    spaceMonitoring: [
      {
        question: "Co monitoring satelitarny oznacza dla właścicieli obiektów?",
        answer:
          "Oznacza obserwowanie ruchu gruntu i konstrukcji z orbity na skalę — bez oczekiwania na instrumentację każdego kilometra korytarza lub każdego obiektu w portfelu.",
      },
      {
        question: "Czy monitoring satelitarny jest tylko dla dużych regionów?",
        answer:
          "Nie. Ten sam stos SAR może wspierać screening na skalę zagłębia i serie czasowe na skalę budynku. Programy zwykle łączą kontekst regionalny z miejscami punktowymi.",
      },
      {
        question: "Jak monitoring satelitarny SAR Metrics odnosi się do InSAR?",
        answer:
          "Nasza usługa monitoringu satelitarnego jest zasilana InSAR: akwizycje radaru satelitarnego, przetwarzanie interferometryczne, analityka i alerty pakietowane do użycia operacyjnego.",
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      title: "Pytania, które zespoły zadają przed wdrożeniem InSAR.",
      subtitle:
        "Proste odpowiedzi o możliwościach, pokryciu i dostawie — z linkami do głębszych zasobów.",
    },
    sectionEyebrow: "Odpowiedzi",
    sectionTitle: "Najczęściej zadawane pytania",
    footer: "Wolisz definicje? Przeglądaj {glossary}. Dla stron produktowych zobacz {insarAnalytics}, {insarSolutions} i {spaceMonitoring}.",
    footerLinks: {
      glossary: "słownik",
      insarAnalytics: "analitykę InSAR",
      insarSolutions: "rozwiązania InSAR",
      spaceMonitoring: "monitoring satelitarny",
    },
    ctaTitle: "Nie znalazłeś odpowiedzi?",
    ctaLabel: "Zapytaj nas bezpośrednio",
  },

  common: {
    home: "Strona główna",
    supportedBy: "Wspierają nas",
    readMore: "Czytaj więcej",
    open: "Otwórz",
    language: "Język",
    backToSolutions: "Powrót do rozwiązań",
  },

  errors: {
    notFound: {
      title: "404",
      subtitle: "Nie znaleziono strony",
      description: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
      homeButton: "Strona główna",
    },
    error: {
      title: "Ta strona się nie załadowała",
      description: "Coś poszło nie tak po naszej stronie. Możesz spróbować odświeżyć lub wrócić na stronę główną.",
      tryAgain: "Spróbuj ponownie",
      goHome: "Strona główna",
    },
  },
};
