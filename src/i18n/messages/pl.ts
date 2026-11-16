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
        "SAR Metrics przekształca dane radarowe z satelitów w precyzyjne informacje o przemieszczeniach gruntu dla przemysłu, infrastruktury i ochrony cywilnej.",
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
      title: "Analityka InSAR — precyzyjne dane o ruchu gruntu | SAR Metrics",
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
        "Precyzyjne informacje o ruchu gruntu z kosmosu. Analityka InSAR dla zagrożeń geotechnicznych, górnictwa, infrastruktury i energetyki.",
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
    footerTagline: "Precyzyjne informacje o ruchu gruntu z kosmosu.",
  },

  cta: {
    defaultTitle: "Chcesz zobaczyć, co się rusza?",
    defaultBody:
      "Napisz, jaki obiekt lub obszar chcesz monitorować. Pokażemy, co da się wykryć dzięki InSAR.",
    defaultLabel: "Porozmawiaj z naszym zespołem",
  },

  home: {
    hero: {
      eyebrow: "Analityka InSAR",
      title: "Mierzymy ruchy. Zarządzamy ryzykiem.",
      subtitle:
        "SAR Metrics dostarcza analitykę InSAR i monitoring satelitarny, które mierzą ruchy gruntu i konstrukcji z dokładnością rzędu milimetrów — wszędzie, 24/7, niezależnie od pogody.",
      exploreDemo: "Przeglądaj demo",
      insarSolutions: "Rozwiązania InSAR",
      howInsarWorks: "Jak działa InSAR",
    },
    supportedBy: {
      eyebrow: "Wspierają nas",
      text: "SAR Metrics działa przy wsparciu Europejskiej Agencji Kosmicznej (ESA BIC Poland).",
    },
    solutions: {
      eyebrow: "Rozwiązania InSAR",
      title:
        "Od pojedynczych obiektów po całe regiony — wykrywaj ruchy, zanim staną się problemem.",
      readMore: "Czytaj więcej",
    },
    capabilities: {
      eyebrow: "Możliwości",
      title: "Skalowalne rozwiązania, milimetrowa precyzja.",
      items: {
        millimetricPrecision: {
          title: "Precyzja milimetrowa",
          body: "Mierzymy przemieszczenia gruntu i konstrukcji wzdłuż linii widzenia satelity z dokładnością rzędu milimetrów.",
        },
        wideAreaCoverage: {
          title: "Zasięg regionalny",
          body: "Monitoruj całe zagłębia, korytarze transportowe i miasta w jednym cyklu przetwarzania.",
        },
        allWeatherSar: {
          title: "SAR 24/7",
          body: "Radar „widzi” przez chmury i dym oraz działa w nocy — niezależnie od pogody.",
        },
        historicalArchive: {
          title: "Archiwum historyczne",
          body: "Odtwórz historię przemieszczeń nawet od początku lat 90. dzięki archiwalnym danym SAR.",
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: "O nas",
      title: "Mierzymy to, co się porusza — żeby można było zareagować, zanim będzie za późno.",
      subtitle:
        "Jesteśmy zespołem inżynierów radarowych, specjalistów od geodanych i programistów. Zamieniamy obserwację Ziemi oraz InSAR w narzędzia gotowe do codziennego użycia.",
    },
    valuesEyebrow: "Wartości",
    values: {
      measurementFirst: {
        title: "Pomiar przede wszystkim",
        body: "Ufamy danym, nie opowieściom. Każde stwierdzenie opieramy na sygnale, który sami przetworzyliśmy i sprawdziliśmy.",
      },
      operatorGrade: {
        title: "Klasa operacyjna",
        body: "Projektujemy tak, żeby mogli na tym polegać inżynierowie geotechniczni, służby ochrony cywilnej i operatorzy obiektów.",
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
        body: "Techniki PS-InSAR umożliwiają budowę milimetrowo dokładnych serii czasowych na stabilnych reflektorach.",
      },
      sentinel: {
        year: "2014",
        title: "Sentinel-1",
        body: "Darmowy, otwarty, globalny SAR co 6–12 dni zmienia InSAR z narzędzia badawczego w usługę operacyjną.",
      },
      commercial: {
        year: "lata 2020.",
        title: "Komercyjne konstelacje małych satelitów SAR",
        body: "Częste, wysokorozdzielcze zobrazowania SAR od operatorów komercyjnych umożliwiają nawet codzienny monitoring wybranych obiektów.",
      },
      founded: {
        year: "2026",
        title: "Założenie SAR Metrics",
        body: "Zamieniamy cztery dekady rozwoju SAR w operacyjny system monitoringu dla przemysłu i infrastruktury.",
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
        "Proces przetwarzania, który zamienia petabajty danych SAR w precyzyjne informacje o przemieszczeniach — gotowe do wykorzystania w monitoringu operacyjnym.",
    },
    howItWorks: {
      eyebrow: "Jak to działa",
      title: "Cztery etapy — od surowego radaru do sygnału gotowego do decyzji.",
      steps: {
        acquisition: {
          title: "Pozyskanie danych",
          body: "Satelity SAR rejestrują obraz radarowy powierzchni Ziemi w dzień i w nocy, także przez chmury i dym — to fundament monitoringu satelitarnego.",
        },
        interferometry: {
          title: "Interferometria",
          body: "Zestawiamy pary zobrazowań SAR z tego samego obszaru i wyznaczamy zmianę fazy sygnału, która jest bezpośrednio związana z przemieszczeniem.",
        },
        persistentScatterers: {
          title: "Rozpraszacze trwałe",
          body: "Stabilne reflektory — dachy, infrastruktura, odsłonięte skały — są identyfikowane w długich seriach czasowych i śledzone indywidualnie z precyzją milimetrową.",
        },
        analytics: {
          title: "Analityka i alerty",
          body: "Analizujemy serie czasowe (trendy, sezonowość i anomalie), a wyniki udostępniamy w panelach, przez API i w postaci alertów — tak, żeby można było od razu reagować.",
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
          body: "Regionalne mapy przemieszczeń aktualizowane z częstotliwością dobraną do twoich potrzeb.",
        },
        focused: {
          title: "Monitoring punktowy",
          body: "Zobrazowania o wysokiej rozdzielczości nad krytycznymi obiektami, z gęstym próbkowaniem w czasie.",
        },
        historical: {
          title: "Rekonstrukcja historyczna",
          body: "Rekonstrukcja wyłącznie z archiwów — z historią przemieszczeń sięgającą nawet początku lat 90. XX wieku.",
        },
        api: {
          title: "API i dostawa danych",
          body: "Dane wyjściowe GeoJSON, rastrowe i tabelaryczne oraz API alertów w czasie rzeczywistym.",
        },
      },
      footer:
        "Porównaj podejścia regionalne i punktowe na naszej stronie {spaceMonitoring} lub przeglądaj {solutions}.",
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
        "Programy monitoringu dopasowane do potrzeb branż, oparte na radarze satelitarnym — od pojedynczych obiektów po całe regiony.",
    },
    intro:
      "Każda z branż poniżej ma rozwiązanie InSAR zaprojektowane pod to, jak w praktyce zarządza się ryzykiem. Szerszy przegląd znajdziesz w {insarSolutions} i {insarAnalytics}.",
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
      tagline: "Inteligencja dla bezpieczniejszej infrastruktury — od projektowania po utrzymanie",
      description:
        "Autostrady, mosty, zapory, koleje i rurociągi monitorowane z precyzją milimetrową przez każdą fazę ich cyklu życia — rozwiązania InSAR dostosowane do potrzeb operatorów infrastruktury.",
    },
    mining: {
      title: "Górnictwo",
      tagline: "Wczesne ostrzeganie i ograniczanie ryzyka w obiektach górniczych",
      description:
        "Ciągły monitoring ścian wykopów, zapór odpadów poflotacyjnych, hałd odpadów i osiadania podziemnego — z progami alertów dostosowanymi do specyfiki obiektu przy użyciu analityki InSAR.",
    },
    insurance: {
      title: "Ubezpieczenia",
      tagline:
        "Niezależne dowody ruchu gruntu dla oceny ryzyka, likwidacji szkód i zarządzania portfelem",
      description:
        "Analiza InSAR dla całych portfeli i pojedynczych lokalizacji: osiadanie, osuwiska i ruchy konstrukcji. Pomaga w ocenie ryzyka, przeglądzie ekspozycji i weryfikacji roszczeń.",
    },
    "oil-gas": {
      title: "Ropa i gaz",
      tagline: "Subtelne przemieszczenia powierzchni dla produkcji i zarządzania złożem",
      description:
        "Śledź kompakcję i uniesienie złoża, integralność składowania CO₂ i reakcję gruntu wokół miejsc wydobycia — globalnie, powtarzalnie — z monitoringiem satelitarnym InSAR.",
    },
    geohazards: {
      title: "Zagrożenia geotechniczne",
      tagline:
        "Identyfikacja lokalizacji zagrożonych i monitoring zagrożeń geotechnicznych na dużych obszarach",
      description:
        "Analiza przesiewowa InSAR na dużych obszarach ujawnia osuwiska, osiadanie i ruchy tektoniczne w całych regionach — na długo zanim staną się widoczne w terenie.",
    },
    structural: {
      title: "Ruchy konstrukcji",
      tagline: "Pomiar ruchów gruntu i konstrukcji z kosmosu",
      description:
        "Historia przemieszczeń budynek po budynku w obszarach miejskich — od pojedynczych fasad po całe dzielnice — na podstawie danych archiwalnych i bieżących SAR.",
    },
  },

  solutionPages: {
    geohazards: {
      intro:
        "Od terenów górskich po równiny przybrzeżne — zagrożenia geotechniczne rzadko dają wyraźne sygnały ostrzegawcze. SAR Metrics zamienia dekady danych SAR w na bieżąco aktualizowany obraz tego, gdzie grunt pracuje, żeby można było działać, zanim dojdzie do awarii.",
      challenge:
        "Osuwiska, osiadanie i ruchy tektoniczne zagrażają populacjom i infrastrukturze na rozległych, trudno dostępnych terenach.",
      approach:
        "Analiza przesiewowa InSAR na dużych obszarach identyfikuje aktywne wzorce deformacji, a następnie zawęża obszary ryzyka dzięki zobrazowaniom o wyższej rozdzielczości.",
      outcome:
        "Służby ochrony cywilnej i ubezpieczyciele dostają uporządkowany, aktualizowany obraz tego, gdzie grunt się porusza — i jak szybko.",
      features: [
        {
          title: "Przegląd regionalny",
          body: "Bazowe mapy ruchu gruntu w skali regionu lub kraju.",
        },
        {
          title: "Precyzja w obszarach ryzyka",
          body: "Skupienie wysokiej rozdzielczości tam, gdzie wykryto ruch.",
        },
        {
          title: "Progi alarmowe",
          body: "Konfigurowalne alerty prędkości i przyspieszenia dla każdej lokalizacji.",
        },
      ],
      metrics: [
        { value: "1 mm/rok", label: "Czułość prędkości" },
        { value: "100 000 km²", label: "Typowy zasięg przeglądu" },
        { value: "1992→", label: "Głębokość archiwum historycznego" },
      ],
      deliverables: [
        "Regionalne mapy prędkości w formatach gotowych do GIS",
        "Uporządkowany wykaz obszarów aktywnej deformacji według priorytetów",
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
        "Alarmy prędkości i przyspieszenia do paneli operacyjnych",
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
        "Ubezpieczyciele potrzebują niezależnych dowodów, które działają zarówno dla pojedynczego roszczenia, jak i dla całego portfela. SAR Metrics wykorzystuje radar satelitarny do ilościowego opisu ruchu gruntu i konstrukcji w portfelach, strefach katastrof i spornych lokalizacjach.",
      challenge:
        "Zespoły oceny ryzyka i likwidacji szkód często podejmują decyzje o dużej wartości na podstawie ograniczonych, niespójnych albo spóźnionych danych z terenu.",
      approach:
        "Analiza przesiewowa InSAR na dużych obszarach wskazuje obszary ryzyka w portfelu, a następnie monitoring punktowy odtwarza historię przemieszczeń przed, w trakcie i po zdarzeniu.",
      outcome:
        "Zespoły ubezpieczeniowe zyskują niezależne dowody ruchu do oceny ryzyka, zarządzania akumulacją, weryfikacji roszczeń i raportów eksperckich.",
      features: [
        {
          title: "Przegląd portfela",
          body: "Porządkuj obiekty i regiony według obserwowanej aktywności osiadania, osuwisk i deformacji.",
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
        "Mapy ekspozycji portfela z priorytetowymi obszarami ryzyka",
        "Serie czasowe przemieszczeń na poziomie nieruchomości i korytarza",
        "Rekonstrukcje ruchu przed i po zdarzeniu dla roszczeń",
        "Raporty ekspertów wspierające ocenę ryzyka i ocenę szkód",
      ],
      useCases: [
        {
          title: "Ocena ryzyka",
          body: "Sprawdź nowe ryzyka pod kątem sygnałów osiadania, niestabilności zboczy i długoterminowych deformacji.",
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
        "Infrastruktura krytyczna zmienia się przez cały cykl życia — osiada pod obciążeniem, reaguje na prace w otoczeniu i po prostu się starzeje. SAR Metrics dostarcza ciągły zapis, który łączy założenia projektowe z rzeczywistym zachowaniem obiektu.",
      challenge:
        "Zapory, mosty, tunele i sieci kolejowe degradują się po cichu. Inspekcja „gołym okiem” łatwo przegapia milimetrowe zmiany.",
      approach:
        "Analiza InSAR cyklu życia infrastruktury łączy bazowe linie projektowe, monitoring budowy i nadzór operacyjny w jeden ciągły zapis.",
      outcome:
        "Właściciele i operatorzy zmniejszają ryzyko inwestycyjne i wydłużają życie obiektów dzięki planowaniu utrzymania opartemu na twardych danych.",
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
        { value: "30+ lat", label: "Dostępna historyczna linia odniesienia" },
        { value: "Co tydzień", label: "Częstotliwość aktualizacji na aktywnych obiektach" },
        { value: "BIM/GIS", label: "Natywna integracja z systemami obiektowymi" },
      ],
      deliverables: [
        "Panele przemieszczeń na poziomie obiektu",
        "Raporty osadzania wywołanego w fazie budowy",
        "Przegląd całych korytarzy dla sieci kolejowych i drogowych",
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
        {
          title: "Integralność składowania CO₂",
          body: "Reakcja powierzchni na iniekcję w miejscach składowania.",
        },
        {
          title: "Zgodność z zezwoleniami",
          body: "Niezależne dowody dla regulatorów i interesariuszy.",
        },
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
        {
          title: "Opuszczone odwierty",
          body: "Przeskanuj populacje nieużywanych odwiertów w poszukiwaniu anomalii powierzchniowych.",
        },
      ],
    },
    structural: {
      intro:
        "Każda odbijająca fasada w mieście to potencjalny punkt pomiarowy. SAR Metrics przekształca obszary miejskie w żywe mapy deformacji — budynek po budynku, wstecz do wczesnych lat 90. XX wieku.",
      challenge:
        "Budynki miejskie osiadają, przechylają się i pękają przez sąsiednie prace, poziomy wód gruntowych i fundamenty sprzed dekad.",
      approach:
        "InSAR rozpraszaczy trwałych przekształca każdą odbijającą fasadę w punkt pomiarowy, wstecz do wczesnych archiwów SAR.",
      outcome:
        "Władze miejskie, menedżerowie obiektów i inżynierowie zajmujący się ekspertyzami technicznymi otrzymują historie przemieszczeń na poziomie budynków na żądanie.",
      features: [
        { title: "Budynek po budynku", body: "Przemieszczenie na konstrukcję na poziomie fasady." },
        {
          title: "Rekonstrukcja archiwalna",
          body: "Ruch historyczny od 1992 roku tam, gdzie dane istnieją.",
        },
        { title: "Dowody eksperckie", body: "Dokumentacja osiadania na poziomie sądowym." },
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
          title: "Ekspertyzy techniczne",
          body: "Odtwórz historię ruchu budynku wokół zdarzenia szkodowego.",
        },
      ],
    },
  },

  landings: {
    insarAnalytics: {
      hero: {
        eyebrow: "Analityka InSAR",
        title: "Analityka InSAR — od radaru do decyzji.",
        subtitle:
          "Precyzyjne informacje o przemieszczeniach z kosmosu: mapy, serie czasowe i alerty dla zespołów, które zarządzają ryzykiem.",
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
            "Łączymy kolejne zobrazowania SAR, tworzymy interferogramy, wybieramy rozpraszacze trwałe i przeliczamy zmianę fazy na milimetrowe przemieszczenia wzdłuż linii widzenia satelity.",
            "Potem wyodrębniamy trendy, sezonowość i anomalie, a wyniki dostarczamy w postaci map, historii punktów i alertów — w panelach i przez API. Pełny łańcuch opisujemy na stronie technologii.",
          ],
        },
        whatYouReceive: {
          title: "Co otrzymujesz",
          paragraphs: [
            "Regionalne linie odniesienia do analizy przesiewowej, monitoring punktowy dla obiektów priorytetowych, rekonstrukcję historyczną z archiwów oraz formaty danych, z których twoi inżynierowie już korzystają.",
            "Wyniki są zaprojektowane dla przepływów pracy geotechnicznych, obiektowych i ryzyka — nie dla notebooków badawczych.",
          ],
        },
      },
      industries: {
        eyebrow: "Branże polegające na analityce",
        title: "Branże polegające na analityce",
      },
      footer: "Poznaj pakietowe {insarSolutions}, {spaceMonitoring} lub {glossary}.",
      footerLinks: {
        insarSolutions: "rozwiązania InSAR",
        spaceMonitoring: "monitoring satelitarny",
        glossary: "wpis słownikowy InSAR",
      },
      faqTitle: "Pytania o analitykę InSAR",
      ctaTitle: "Zobacz analitykę InSAR na swoim obszarze (AOI).",
      ctaLabel: "Porozmawiaj z naszym zespołem",
    },
    insarSolutions: {
      hero: {
        eyebrow: "Rozwiązania InSAR",
        title: "Rozwiązania InSAR dopasowane do tego, jak branże zarządzają ryzykiem.",
        subtitle:
          "Jeden fundament radaru satelitarnego. Sześć ofert operacyjnych dostosowanych do decyzji, które twoje zespoły już podejmują.",
      },
      whyDedicated: {
        title: "Dlaczego dedykowane rozwiązania InSAR",
        paragraphs: [
          "Ogólne mapy przemieszczeń rzadko pasują do realnych procesów po stronie operatorów. Właściciele infrastruktury potrzebują kontekstu cyklu życia; kopalnie — progów alarmowych; ubezpieczyciele — niezależnych dowodów; energetyka — trendów w skali złoża.",
          "SAR Metrics przekłada analitykę InSAR na rozwiązania branżowe: to samo rygorystyczne przetwarzanie, ale inny projekt monitoringu, produkty i język. Fundament techniczny znajdziesz w {insarAnalytics} i {technology}.",
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
          "Satelitarny SAR obserwuje obiekty i regiony w dzień i w nocy, także przez chmury — a analityka InSAR zamienia te zobrazowania w operacyjne dane o ruchu gruntu.",
      },
      whyFromSpace: {
        title: "Dlaczego monitorować z kosmosu",
        paragraphs: [
          "Sieci naziemne są precyzyjne, ale rzadkie. Satelity optyczne dają kontekst, ale zawodzą przy chmurach i w nocy. Monitoring satelitarny z SAR wypełnia lukę: stała częstotliwość przelotów, niezależność od pogody i pokrycie od pojedynczych fasad po całe regiony.",
          "SAR Metrics zapewnia całość jako usługę — plan pozyskania danych, przetwarzanie InSAR, analitykę i dostawę — dzięki czemu zespoły inżynieryjne i ryzyka dostają sygnały, na których można działać. Czytaj więcej o {insarAnalytics} i {insarSolutions}.",
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
            title: "Przegląd regionalny",
            body: "Mapuj przemieszczenia w korytarzach, zagłębiach i miastach, żeby znaleźć „gorące punkty”, zanim zainstalujesz czujniki w terenie. Idealne dla zagrożeń geotechnicznych, właścicieli sieci i oceny ryzyka portfelowego.",
          },
          focused: {
            title: "Monitoring punktowy obiektów",
            body: "Zwiększ częstotliwość przelotów i szczegółowość nad wykopami, zaporami, zakładami, mostami i dzielnicami, gdy priorytetowe lokalizacje są znane — z progami dopasowanymi do każdego obiektu.",
          },
          historical: {
            title: "Rekonstrukcja historyczna",
            body: "Odtwórz lata zmian z archiwów SAR, żeby ustalić linie odniesienia, wesprzeć roszczenia i zrozumieć, jak obszar zachowywał się zanim pojawiły się czujniki w terenie.",
          },
        },
      },
      fromOrbitToAction: {
        title: "Z orbity do działania",
        paragraphs: [
          "Monitoring satelitarny ma sens tylko wtedy, gdy trafia do osób podejmujących decyzje. Dostarczamy GeoJSON, rastry, tabele, panele oraz API alertów — i dobieramy obszar obserwacji (AOI) do tego, jak prowadzisz inspekcje i zarządzasz eskalacją ryzyka.",
          "Zacznij od pilotażowego obszaru (AOI), sprawdź historię z archiwów, a potem przejdź na tryb operacyjny. Poznaj {technology}, zajrzyj do {glossary} albo {contact}.",
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
      title: "Zrozum InSAR, zanim podejmiesz decyzję.",
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
        body: "Programy monitoringu dopasowane do potrzeb branż, oparte na radarze satelitarnym.",
      },
      spaceMonitoring: {
        title: "Monitoring satelitarny",
        body: "Monitoring regionalny i punktowy z orbity dla ryzyka ruchu.",
      },
      technology: {
        title: "Technologia",
        body: "Czteroetapowy łańcuch: od pozyskania danych SAR po analitykę i alerty.",
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
          "SAR Metrics przetwarza serie danych SAR w produkty przemieszczeń dla przemysłu i ochrony cywilnej.",
        ],
      },
      interferometry: {
        term: "Interferometria",
        shortDefinition:
          "Porównanie dwóch obrazów SAR w celu wydobycia różnic fazy odpowiadających przemieszczeniu powierzchni.",
        body: [
          "Interferometria radarowa tworzy interferogram poprzez połączenie dwóch zespolonych obrazów SAR tego samego obszaru. Różnica fazy koduje zmiany odległości między satelitą a gruntem.",
          "Po skorygowaniu geometrii orbity, topografii i efektów atmosferycznych, pozostała zmiana fazy jest interpretowana jako ruch gruntu lub konstrukcji.",
          "Interferometria jest kluczowym krokiem między surowymi danymi SAR a analityką InSAR wykorzystywaną w monitoringu.",
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
          "Stabilny reflektor radarowy pozostający koherentny w wielu zobrazowaniach SAR i możliwy do śledzenia w czasie.",
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
          "Przemieszczenie milimetrowe oznacza wykrywanie i śledzenie ruchu rzędu milimetrów na rok lub na pojedynczy przelot — znacznie poniżej tego, co inspekcja wzrokowa może wiarygodnie wychwycić wcześnie.",
          "InSAR osiąga to mierząc zmianę fazy radarowej wzdłuż linii widzenia satelity, następnie konwertując ją w serie czasowe przemieszczeń dla punktów i obszarów zainteresowania.",
          "Wczesne sygnały milimetrowe często poprzedzają widoczne pęknięcia, przechyły lub awarie — dając operatorom czas na interwencję.",
        ],
      },
      "satellite-radar": {
        term: "Radar satelitarny",
        shortDefinition:
          "Obserwacja radarowa z orbity — typowo SAR — używana do obrazowania terenu i mierzenia zmian niezależnie od światła dziennego i pokrywy chmur.",
        body: [
          "Radar satelitarny odnosi się do systemów obrazowania mikrofalowego umieszczonych na pokładach statków kosmicznych. Dominującą formą cywilną jest radar z syntetyczną aperturą (SAR).",
          "Ponieważ czujnik sam oświetla grunt, radar satelitarny wspiera obrazowanie całopogodowe, dzień-noc niezbędne dla operacyjnych programów monitoringu.",
          "SAR Metrics buduje analitykę InSAR na archiwach radaru satelitarnego oraz komercyjnych zobrazowaniach zamawianych na potrzeby monitoringu.",
        ],
      },
      "wide-area-monitoring": {
        term: "Monitoring regionalny",
        shortDefinition:
          "Szeroki przegląd dużych obszarów — korytarzy, zagłębi, miast — w poszukiwaniu sygnałów ruchu gruntu, ze spójnym pokryciem satelitarnym.",
        body: [
          "Monitoring regionalny wykorzystuje wiele przelotów SAR do tworzenia map przemieszczeń i obszarów ryzyka — bez konieczności wcześniejszego, ręcznego sprawdzania każdego obiektu.",
          "To częsty punkt startu dla przeglądu zagrożeń geotechnicznych, analizy portfeli ubezpieczeniowych i programów infrastruktury sieciowej.",
          "Gdy wskażemy miejsca podwyższonego ryzyka, monitoring punktowy może zwiększyć rozdzielczość i częstotliwość aktualizacji nad krytycznymi lokalizacjami.",
        ],
      },
    },
  },

  faqs: {
    site: [
      {
        question: "Co to jest analityka InSAR?",
        answer:
          "Analityka InSAR zamienia satelitarną interferometrię radarową w użyteczne informacje: mapy przemieszczeń, serie czasowe, trendy i alerty. SAR Metrics przetwarza serie danych SAR i dostarcza wyniki w panelach, plikach oraz przez API, aby zespoły mogły zarządzać ryzykiem gruntu i konstrukcji.",
      },
      {
        question: "Jak dokładny jest milimetrowy monitoring gruntu z kosmosu?",
        answer:
          "Przy odpowiedniej geometrii i koherencji, InSAR może rozwiązać milimetrowe przemieszczenie linii widzenia na rozpraszaczach trwałych. Dokładność zależy od geometrii satelity, atmosfery, pokrywy terenu i metody przetwarzania — dlatego dostrajamy produkty na obiekt i region.",
      },
      {
        question: "Czy monitoring satelitarny działa przez chmury i w nocy?",
        answer:
          "Tak. Radar z syntetyczną aperturą jest aktywnym czujnikiem mikrofalowym, więc działa przez chmury i dym oraz w nocy. Ta niezawodność jest jednym z kluczowych powodów, dla których operatorzy wybierają monitoring satelitarny oparty na SAR zamiast rozwiązań wyłącznie optycznych.",
      },
      {
        question: "Które branże używają rozwiązań InSAR SAR Metrics?",
        answer:
          "Wspieramy właścicieli infrastruktury, operatorów górniczych, ubezpieczycieli, producentów ropy i gazu, zespoły ochrony cywilnej i inżynierów konstrukcji — wszędzie tam, gdzie milimetryczna inteligencja ruchu zmniejsza ryzyko lub wyjaśnia odpowiedzialność.",
      },
      {
        question: "Czy możecie odtworzyć historyczny ruch?",
        answer:
          "Tak. Archiwa SAR pozwalają odtworzyć historię przemieszczeń — często nawet od początku lat 90. XX wieku (zależnie od pokrycia). Dane archiwalne pomagają w analizach przyczyn, wyznaczaniu linii odniesienia i ocenie roszczeń.",
      },
      {
        question: "Jak są dostarczane wyniki?",
        answer:
          "Produkty obejmują mapy przemieszczeń, serie czasowe punktów, eksporty GeoJSON/raster/tabela, panele oraz API alertów. Dopasowujemy dostawę do tego, jak twoi inżynierowie i zespoły ryzyka już pracują.",
      },
      {
        question: "Jaka jest różnica między monitoringiem regionalnym a punktowym?",
        answer:
          "Monitoring regionalny pozwala szybko sprawdzić regiony i portfele, żeby wskazać miejsca wymagające uwagi. Monitoring punktowy zwiększa szczegółowość przestrzenną i czasową nad krytycznymi obiektami, gdy lokalizacje ryzyka są już znane. Wiele programów łączy oba podejścia.",
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
          "Surowe obrazy SAR pokazują rozproszenie radarowe. Analityka InSAR wyznacza przemieszczenia ze zmian fazy w czasie, a potem zamienia je na mapy, trendy i alerty, na których operatorzy mogą działać.",
      },
      {
        question: "Jakie decyzje wspiera analityka InSAR?",
        answer:
          "Typowe decyzje obejmują: gdzie kierować inspekcje, kiedy spowolnić produkcję, czy zbocze przyspiesza, jak obiekt przemieszczał się od czasu budowy oraz jak ocenić ryzyko (np. przy zawieraniu ubezpieczenia).",
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
          "Monitoring dopasowany do potrzeb branż: infrastruktury, górnictwa, ubezpieczeń, ropy i gazu, zagrożeń geotechnicznych oraz ruchów konstrukcji — wszystko oparte na tym samym fundamencie radaru satelitarnego.",
      },
      {
        question: "Czy jeden program może pokryć wiele typów obiektów?",
        answer:
          "Tak. Wielu klientów zaczyna od bazowej linii regionalnej, a następnie dodaje monitoring punktowy na obiektach priorytetowych. Wspólne przetwarzanie i dostawa utrzymują programy wieloobjektowe koherentne.",
      },
      {
        question: "Jak szybko można postawić rozwiązanie?",
        answer:
          "Analiza oparta na archiwach często może ruszyć w ciągu kilku dni do kilku tygodni — zależnie od rozmiaru obszaru (AOI) i wybranego produktu. Tryb operacyjny zależy od dostępności satelity i harmonogramu pozyskania nowych zobrazowań.",
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
          "Nie. Ta sama technologia SAR może wspierać zarówno przegląd w skali regionu, jak i serie czasowe w skali pojedynczych budynków. Programy zwykle łączą kontekst regionalny z monitoringiem punktowym.",
      },
      {
        question: "Jak monitoring satelitarny SAR Metrics odnosi się do InSAR?",
        answer:
          "Nasza usługa monitoringu satelitarnego opiera się na InSAR: pozyskaniu zobrazowań radarowych, przetwarzaniu interferometrycznym, analityce i alertach przygotowanych do użycia operacyjnego.",
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
    footer:
      "Wolisz definicje? Przeglądaj {glossary}. Dla stron produktowych zobacz {insarAnalytics}, {insarSolutions} i {spaceMonitoring}.",
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
      description:
        "Coś poszło nie tak po naszej stronie. Możesz spróbować odświeżyć lub wrócić na stronę główną.",
      tryAgain: "Spróbuj ponownie",
      goHome: "Strona główna",
    },
  },
};
