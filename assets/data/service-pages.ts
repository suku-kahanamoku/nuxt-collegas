const servicePages = {
  finance: {
    asideMenus: [
      {
        label: "Nezávislý audit vašich rodinných financí",
        to: "/services/finance#audit",
      },
      { label: "Finanční plán", to: "/services/finance#plan" },
      { label: "Zajištění rizik", to: "/services/finance#risk" },
      { label: "Odškodnění", to: "/services/finance#compensation" },
    ],
    related: {
      title: "Komplexní finanční péče",
      description:
        "Všechny oblasti financí řešíme v souvislostech. Každá služba navazuje na předchozí a podporuje dlouhodobou stabilitu.",
      cards: [
        {
          title: "Nezávislý audit vašich rodinných financí",
          description:
            "Detailní rozbor smluv, nákladů a nastavení vašich financí. Získáte jasný přehled, odhalení slabých míst a doporučení konkrétních kroků.",
          to: "/services/finance#audit",
        },
        {
          title: "Finanční plán",
          description:
            "Strategie, která propojuje rezervy, investice i financování v souladu s vašimi cíli. Praktický plán pro dnešní rozhodování i budoucí etapy života.",
          to: "/services/finance#plan",
        },
        {
          title: "Zajištění rizik",
          description:
            "Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je správně vyhodnotit rizika a nastavit krytí, které odpovídá vaší reálné situaci.",
          to: "/services/finance#risk",
        },
        {
          title: "Odškodnění",
          description:
            "Ať už jde o pracovní úrazy, autonehody, školní úrazy nebo jiné pojistné události, cílem je jediné: získat spravedlivé odškodnění v plné výši.",
          to: "/services/finance#compensation",
        },
      ],
    },
  },
  "capital-management": {
    asideMenus: [
      {
        label: "Péče o investiční majetek",
        to: "/services/capital-management#asset-care",
      },
      { label: "Financování", to: "/services/capital-management#financing" },
      {
        label: "Řešení na míru",
        to: "/services/capital-management#opportunities",
      },
    ],
    related: {
      title: "Strategie růstu kapitálu",
      description:
        "Propojujeme dlouhodobou správu investic, financování a výběr příležitostí do jednoho funkčního systému.",
      cards: [
        {
          title: "Péče o investiční majetek",
          description:
            "Kontinuální řízení portfolia, pravidelné vyhodnocování výkonnosti a úpravy strategie podle vývoje trhu i vašich cílů.",
          to: "/services/capital-management#asset-care",
        },
        {
          title: "Financování",
          description:
            "Nastavení úvěrů pro bydlení, rekonstrukce i projekty tak, aby byly bezpečné, přehledné a zároveň podporovaly další růst kapitálu.",
          to: "/services/capital-management#financing",
        },
        {
          title: "Řešení na míru",
          description:
            "Vyhledáváme a analyzujeme příležitosti, které dávají smysl z pohledu výnosu, struktury i rizik a zapadají do strategie vašeho portfolia.",
          to: "/services/capital-management#opportunities",
        },
      ],
    },
  },
  "tax-legal": {
    asideMenus: [
      { label: "Daňové poradenství", to: "/services/tax-legal#tax" },
      { label: "Právní poradenství", to: "/services/tax-legal#legal" },
    ],
    related: {
      title: "Daňové a právní služby",
      description:
        "Daně a právo nastavujeme v souvislostech, aby rozhodnutí dávala smysl nejen dnes, ale i v dlouhodobém horizontu.",
      cards: [
        {
          title: "Daňové poradenství",
          description:
            "Optimalizace daňové zátěže v návaznosti na příjmy, majetek, podnikání a investice. Srozumitelně, legálně a dlouhodobě.",
          to: "/services/tax-legal#tax",
        },
        {
          title: "Právní poradenství",
          description:
            "Smluvní agenda, převody nemovitostí, vlastnické struktury a investiční vztahy nastavené s důrazem na jistotu a prevenci rizik.",
          to: "/services/tax-legal#legal",
        },
        {
          title: "Daňové a právní zázemí",
          description:
            "Propojený přístup, který snižuje nejistotu, předchází problémům a pomáhá dělat důležitá rozhodnutí s klidem a kontrolou.",
          to: "/services/tax-legal#tax-legal-overview",
        },
      ],
    },
  },
  "real-estate-energy": {
    asideMenus: [
      {
        label: "Energetická optimalizace",
        to: "/services/real-estate-energy#energy",
      },
      {
        label: "Realitní služby",
        to: "/services/real-estate-energy#real-estate",
      },
      {
        label: "Správa nemovitostí",
        to: "/services/real-estate-energy#property-management",
      },
      {
        label: "Developerské projekty",
        to: "/services/real-estate-energy#development",
      },
    ],
    related: {
      title: "Realitní a energetické služby",
      description:
        "Propojujeme energie, reality i provoz majetku do jednoho funkčního rámce s cílem snížit náklady a zvýšit dlouhodobou výkonnost.",
      cards: [
        {
          title: "Energetická optimalizace",
          description:
            "Analyzujeme spotřebu, smlouvy i sazby a navrhujeme řešení, která dlouhodobě snižují energetické náklady v domácnosti i firmě.",
          to: "/services/real-estate-energy#energy",
        },
        {
          title: "Realitní služby",
          description:
            "Kompletní servis pro prodej i pronájem od přípravy nemovitosti po právní vypořádání transakce.",
          to: "/services/real-estate-energy#real-estate",
        },
        {
          title: "Správa nemovitostí",
          description:
            "Zajišťujeme výběr nájemníků, provozní servis, administrativu i ekonomický přehled, aby majetek fungoval bez starostí.",
          to: "/services/real-estate-energy#property-management",
        },
        {
          title: "Developerské projekty",
          description:
            "Podílíme se na přípravě, financování, realizaci i prodeji projektů s důrazem na ekonomiku, načasování a tržní atraktivitu.",
          to: "/services/real-estate-energy#development",
        },
      ],
    },
  },
};

export default servicePages;
