export type ServiceDetailSection = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  imgRight?: boolean;
  paragraphs: string[];
};

export type ServiceDetailConfig = {
  seoTitle: string;
  metaDescription: string;
  intro: {
    paragraphs: string[];
    quote: string;
    attribution: string;
  };
  caseStudyCategory?: "finance" | "capital" | "tax" | "real-estate";
  primaryCta: {
    title: string;
    body: string;
    afterDetails?: boolean;
  };
  principles?: {
    title: string;
    body: string;
    quote: string;
  };
  sections: ServiceDetailSection[];
  imageBanner?: {
    label: string;
    title: string;
    body: string;
  };
  showRelated?: boolean;
  showFinalCta?: boolean;
};

const serviceDetails: Record<string, ServiceDetailConfig> = {
  finance: {
    seoTitle: "Komplexní finanční plánování | Finanční poradenství",
    metaDescription:
      "Nezávislý audit rodinných financí a finanční plán v jednom celku. Pomáháme vám mít finance pod kontrolou a rozhodovat se s jistotou.",
    intro: {
      paragraphs: [
        "Našim dlouhodobým účelem je pomáhat rodinám, jednotlivcům ale také firmám orientovat se ve světě financí, daní a realit. Tím pomáháme lidem vyřešit to podstatné aby měli čas, klid a pohodu na věci, které je baví a v kterých vynikají, a v důsledku toho jim také pomáháme zkvalitňovat život. My vynikáme v precizní práci finančních poradců a analytiků rodinných a firemních financí.",
        "Jsme Collegas",
      ],
      quote:
        "Audit vašich rodinných financí vám nepřinese jen seznam změn, ale především klid a kontrolu. Budete přesně vědět, jak na tom jste a jaké kroky dávají smysl dál.",
      attribution: "— Chci jasno ve svých financích",
    },
    caseStudyCategory: "finance",
    primaryCta: {
      title: "Získejte kontrolu nad svými financemi ještě dnes.",
      body: "Nezávisle posoudíme vaši situaci a nastavíme finanční plán tak, aby vaše finance pracovaly dlouhodobě ve váš prospěch.",
    },
    principles: {
      title: "Jak přistupujeme k vašim financím",
      body: "Finance nastavujeme jako jeden funkční celek, který vychází z vašich cílů, priorit a životní situace. Pracujeme s rezervami, investicemi i financováním tak, aby se vzájemně podporovaly a dlouhodobě fungovaly.",
      quote:
        "Nejde jen o produkty, ale o logiku celku. Důraz klademe na dlouhodobou udržitelnost, flexibilitu a schopnost reagovat na změny, které život přináší.",
    },
    sections: [
      {
        id: "audit",
        imgSrc: "/img/intro/notes.png",
        imgAlt: "Nezávislý audit vašich rodinných financí a plán",
        imgRight: true,
        paragraphs: [
          "Je prvním krokem k tomu, abyste získali dokonalý přehled a klid. Za vašimi financemi nevidíme jen stohy papírů a smluv, ale vnímáme je v celkovém kontextu vašeho života. Společně projdeme, co vám už teď skvěle funguje, případně kde efektivně snížit výdaje a kde naopak maximalizovat růst vašeho majetku.",
        ],
      },
      {
        id: "plan",
        imgSrc: "/img/other/man.png",
        imgAlt: "Finanční poradce při konzultaci",
        paragraphs: [
          "Finanční plán je nástroj, který dává vašim penězům jasný směr a smysl. Nevychází jen z čísel, ale především z vašich cílů, priorit a životní situace. Ať už řešíte bydlení, rodinu, budování majetku nebo finanční nezávislost, vše propojujeme do jednoho funkčního celku.",
          "Společně nastavíme strukturu vašich financí tak, aby odpovídala tomu, kde se právě nacházíte, i tomu, kam chcete dojít. Výsledkem není plán na papíře, ale konkrétní strategie, podle které se můžete rozhodovat každý den.",
        ],
      },
      {
        id: "long-term-service",
        imgSrc: "/img/other/compass.png",
        imgAlt: "Dlouhodobý servis",
        imgRight: true,
        paragraphs: [
          "Finanční plán pravidelně aktualizujeme podle změn na trhu i ve vašem životě. Jsme vám trvalou oporou při každém důležitém finančním rozhodnutí.",
        ],
      },
    ],
    imageBanner: {
      label: "FINANCE",
      title: "Jasno a plán",
      body: "Od nezávislého rodinného auditu po finanční plán. Vaše finance nastavíme jako funkční celek, který dává smysl dnes i v budoucnu.",
    },
    showRelated: true,
    showFinalCta: true,
  },
  "capital-management": {
    seoTitle: "Investice | Finanční poradenství",
    metaDescription:
      "Péče o investiční majetek, chytré financování a řešení na míru v jednom celku. Pomáháme vám dlouhodobě chránit i rozvíjet kapitál.",
    intro: {
      paragraphs: [
        "Investování pro nás znamená dlouhodobou péči o vaše finanční zázemí. Společně se staráme o to, aby váš majetek neztrácel hodnotu a rostl přesně podle vašich osobních priorit a potřeb.",
        "Každý krok nastavujeme podle vašeho finančního plánu tak, aby vám váš majetek přinášel radost.",
      ],
      quote:
        "Vaše investice tak nejsou jen uložené, ale řízené s jasným záměrem a důrazem na dlouhodobou hodnotu.",
      attribution: "— Svěřte kapitál do individuální péče",
    },
    caseStudyCategory: "capital",
    primaryCta: {
      title: "Připraveni posunout kapitál dál?",
      body: "Nastavíme péči o investice, financování i výběr příležitostí tak, aby vaše rozhodnutí zapadala do dlouhodobé strategie a podporovala růst majetku.",
    },
    principles: {
      title: "Jak přistupujeme k vašemu majetku",
      body: "Kapitál řídíme v souvislostech. Vyhodnocujeme výkonnost portfolia, pracujeme s diverzifikací a průběžně přizpůsobujeme strategii změn na trzích i vašim aktuálním prioritám.",
      quote:
        "Nehledáme náhodné příležitosti. Každé rozhodnutí musí dávat smysl z pohledu výnosu, rizika i dlouhodobé stability celého portfolia.",
    },
    sections: [
      {
        id: "asset-care",
        imgSrc: "/img/other/investment_property.png",
        imgAlt: "Péče o investiční majetek",
        imgRight: true,
        paragraphs: [
          "Vaše investice průběžně analyzujeme, vyhodnocujeme jejich výkonnost a aktivně je přizpůsobujeme aktuální situaci na trzích i vašim individuálním potřebám. Dbáme na vyváženost portfolia, diverzifikaci i ochranu majetku v obdobích volatility.",
          "Díky tomuto přístupu získáváte nejen výkonnější správu majetku, ale především klid a jistotu, že se o vaše finance stará někdo, kdo rozumí souvislostem a přemýšlí v širším kontextu.",
        ],
      },
      {
        id: "financing",
        imgSrc: "/img/other/compass.png",
        imgAlt: "Investiční příležitosti",
        paragraphs: [
          "Výjimečné investiční příležitosti se neobjevují každý den. Naším cílem proto není nabízet krátkodobé trendy, ale pečlivě vyhledávat a spoluvytvářet projekty, které dlouhodobě obstojí v poměru výnosu, rizika a strategického přínosu.",
          "Aktivně monitorujeme trh napříč obory – se zaměřením na prémiové nemovitosti a developerské záměry. Každý projekt podrobujeme detailní analýze a partnerům předkládáme pouze ty příležitosti, za kterými si stoprocentně stojíme.",
        ],
      },
      {
        id: "opportunities",
        imgSrc: "/img/other/compass.png",
        imgAlt: "Řešení na míru",
        imgRight: true,
        paragraphs: [
          "Naši specialisté na základě vašich přání, cílů ale také potřeb zpracují finanční plán vám na míru. Ten vám představíme, společně upravíme a nastavíme tak, aby splňoval vše, co od něj očekáváte. V průběhu času ho aktualizujeme a doplňujeme společně s vámi.",
        ],
      },
    ],
    imageBanner: {
      label: "Růst a ochrana majetku",
      title: "Růst, stabilita a příležitosti",
      body: "K vašemu majetku přistupujeme s maximální odpovědností. Spojujeme strategické řízení investic, zajištění financování a přístup k unikátním příležitostem. Vytváříme tak pevný štít pro váš majetek, který ho chrání před riziky a zároveň mu dává prostor bezpečně růst.",
    },
    showRelated: true,
    showFinalCta: true,
  },
  insurance: {
    seoTitle: "Pojištění | Finanční poradenství",
    metaDescription:
      "Pojištění rizik, která mohou ohrozit klientův život nebo majetek. Ochrana zdraví a majetku, optimalizace pojistných smluv a pomoc s odškodněním.",
    intro: {
      paragraphs: [
        "Pojištění rizik, která mohou ohrozit klientův život nebo majetek, je základním stavebním kamenem každé stabilní finanční strategie. Nejde jen o to mít sjednané pojištění, ale mít ho nastavené tak, aby vás skutečně chránilo v situacích, kdy to nejvíce potřebujete.",
      ],
      quote:
        "Péči o rizika propojujeme s vaší dlouhodobou strategií, aby ochrana zdraví a majetku dávala dokonalý smysl z pohledu ceny i kvality.",
      attribution:
        "— Získejte jistotu, že je váš majetek správně chráněn, a nechte si své smlouvy odborně prověřit.",
    },
    primaryCta: {
      title: "Nastavme ochranu, na kterou se můžete spolehnout.",
      body: "Prověříme vaše současné smlouvy, navrhneme odpovídající krytí a pomůžeme vám také při řešení pojistné události.",
      afterDetails: true,
    },
    sections: [
      {
        id: "health-and-property",
        imgSrc: "/img/other/risk_headging.png",
        imgAlt: "Ochrana vašeho zdraví a majetku",
        imgRight: true,
        paragraphs: [
          "Život přináší příležitosti, ale i nečekaná rizika. Správně nastavená ochrana zdraví a majetku je základním kamenem každé úspěšné dlouhodobé strategie. Navrhneme pro vás řešení, které minimalizuje hrozby a zajistí stabilitu vašeho rodinného i firemního zázemí.",
        ],
      },
      {
        id: "contract-optimization",
        imgSrc: "/img/intro/notes.png",
        imgAlt: "Optimalizace vašich pojistných smluv",
        paragraphs: [
          "Život přináší příležitosti, ale i nečekaná rizika. Správně nastavená ochrana zdraví a majetku je základním kamenem každé úspěšné dlouhodobé strategie. Navrhneme pro vás řešení, které minimalizuje hrozby a zajistí stabilitu vašeho rodinného i firemního zázemí.",
        ],
      },
      {
        id: "compensation",
        imgSrc: "/img/other/compensation.png",
        imgAlt: "Pomoc s odškodnění pojistné události",
        imgRight: true,
        paragraphs: [
          "Do situace, kdy musíte řešit pojistnou událost, se většinou dostanete nečekaně – často ve chvíli, kdy prožíváte náročné zdravotní, pracovní nebo osobní komplikace. Právě v takových momentech potřebujete mít vedle sebe partnera, který se v celém procesu dokonale vyzná a bezpečně vás jím provede.",
          "V rámci divize Collegas Odškodnění vám pomůžeme přesně vyčíslit a zorientovat se v nárocích, na které máte skutečné právo. Kompletně se postaráme o jejich uplatnění vůči pojišťovnám i viníkům. Výsledkem pro vás bude nejen spravedlivé finanční odškodnění, ale především obrovská úleva.",
        ],
      },
    ],
  },
  "loans-financing": {
    seoTitle: "Úvěry a financování | Finanční poradenství",
    metaDescription:
      "Hypoteční úvěry na bydlení, spotřebitelské úvěry, konsolidace a podnikatelské financování nastavené bezpečně a dlouhodobě udržitelně.",
    intro: {
      paragraphs: [
        "Ať už kupujete první nemovitost, rekonstruujete nebo řešíte změnu současného úvěru, cílem je nastavit financování tak, aby pro vás bylo dlouhodobě zvládnutelné, přehledné a bezpečné. Pomáháme vám zorientovat se v možnostech a projít celým procesem bez zbytečného stresu.",
        "Správně nastavené využití bankovního kapitálu může výrazně zvýšit efektivitu práce s vlastními prostředky. Výsledkem je financování, které odpovídá vaší situaci dnes a zároveň vás neomezuje do budoucna.",
      ],
      quote:
        "Zajistíme pro vás strukturu financování, která přesně odpovídá vašim záměrům, chrání vaše vlastní úspory a neomezuje vás do budoucna.",
      attribution:
        "— Svěřte správu svých závazků do rukou specialistů a domluvte si individuální konzultaci.",
    },
    primaryCta: {
      title: "Najděme financování, které vás nebude omezovat.",
      body: "Porovnáme dostupné možnosti a provedeme vás celým procesem od prvního návrhu až po bezpečné nastavení úvěru.",
      afterDetails: true,
    },
    sections: [
      {
        id: "mortgages",
        imgSrc: "/img/other/financing.png",
        imgAlt: "Hypoteční úvěry na bydlení",
        imgRight: true,
        paragraphs: [
          "Pomůžeme vám bezpečně projít cestou k vlastnímu bydlení, ať už kupujete, stavíte nebo rekonstruujete. Najdeme pro vás nejvýhodnější podmínky na trhu a zajistíme, aby pro vás byla hypotéka dlouhodobě udržitelná.",
        ],
      },
      {
        id: "consumer-loans",
        imgSrc: "/img/intro/notes.png",
        imgAlt: "Spotřebitelské úvěry a konsolidace",
        paragraphs: [
          "Financujte své aktuální potřeby chytře a bez zbytečně vysokých úroků. Sloučením stávajících půjček do jedné konsolidace snížíme vaše měsíční splátky a vneseme do vašich financí jasný řád.",
        ],
      },
      {
        id: "business-loans",
        imgSrc: "/img/other/office.png",
        imgAlt: "Podnikatelské úvěry",
        imgRight: true,
        paragraphs: [
          "Poskytneme vašemu podnikání potřebný impuls pro stabilizaci provozu nebo investice do dalšího rozvoje. Navrhneme strukturu financování, která podpoří růst vaší firmy a neohrozí její cash flow.",
        ],
      },
    ],
  },
  "tax-legal": {
    seoTitle: "Daně a právo | Finanční poradenství",
    metaDescription:
      "Daňové a právní poradenství v souvislostech. Pomáháme vám snižovat zbytečnou daňovou zátěž a budovat právní zázemí pro majetek, podnikání i investice.",
    intro: {
      paragraphs: [
        "Daně asi nikdy nebudou vaše oblíbené téma. To ale neznamená, že byste jim měli zbytečně nechávat víc, než je nutné. Díváme se na vaše daně v souvislostech, ne izolovaně, a hledáme logiku, která funguje dlouhodobě.",
      ],
      quote:
        "Výsledkem není jen nižší daňová zátěž, ale hlavně klid. Víte, že máte věci nastavené správně a nic vás nepřekvapí ve chvíli, kdy to nejméně čekáte.",
      attribution: "— Chci (ne)platit daně",
    },
    caseStudyCategory: "tax",
    primaryCta: {
      title: "Připraveni nastavit daně i právo s jistotou?",
      body: "Pomůžeme vám snížit zbytečnou daňovou zátěž a vybudovat právní zázemí, které podpoří vaše rozhodování v majetku, podnikání i investicích.",
    },
    principles: {
      title: "Jak přistupujeme k daním a právu",
      body: "Daňové a právní otázky řešíme jako jeden celek. Zaměřujeme se na to, aby každé rozhodnutí dávalo ekonomický i právní smysl a obstálo i v dlouhodobém horizontu.",
      quote:
        "Naším cílem není jen reagovat na vzniklé situace, ale především jim předcházet. Pomáháme nastavovat vztahy tak, aby byly funkční, srozumitelné a udržitelné.",
    },
    sections: [
      {
        id: "tax",
        imgSrc: "/img/other/tax_consult.png",
        imgAlt: "Daňové poradenství",
        imgRight: true,
        paragraphs: [
          "Díváme se na vaše daně v souvislostech, ne izolovaně. Příjmy, podnikání, investice i majetek tvoří jeden celek - a právě v tom celku často vznikají příležitosti, které běžně zůstávají nevyužité.",
          "Ukážeme vám, kde dává smysl upravit strukturu, co využít a co naopak nedělat, abyste se vyhnuli zbytečným nákladům i rizikům. Nehledáme kličky, hledáme logiku, která funguje dlouhodobě.",
        ],
      },
      {
        id: "legal",
        imgSrc: "/img/other/man.png",
        imgAlt: "Právní poradenství",
        paragraphs: [
          "Právní poradenství u nás není jednorázová služba, ale dlouhodobá spolupráce postavená na důvěře, diskrétnosti a profesionalitě. Specializujeme se na oblasti, které přímo souvisejí s vaším majetkem a jeho správou.",
          "Naším cílem není jen reagovat na vzniklé situace, ale především jim předcházet. Pomáháme nastavovat právní vztahy tak, aby byly funkční, srozumitelné a dlouhodobě udržitelné.",
        ],
      },
    ],
    imageBanner: {
      label: "DANĚ A PRÁVO",
      title: "Jistota v daních i právu",
      body: "Propojujeme daňové a právní poradenství do jednoho funkčního rámce. Získáte nižší zbytečné náklady, pevnější ochranu majetku a klid při rozhodování.",
    },
    showRelated: true,
    showFinalCta: true,
  },
  "real-estate-energy": {
    seoTitle: "Reality a energie | Finanční poradenství",
    metaDescription:
      "Energetická optimalizace, realitní služby, správa nemovitostí a development. Pomáháme snižovat náklady a dlouhodobě zvyšovat hodnotu majetku.",
    intro: {
      paragraphs: [
        "Energetická optimalizace a práce s nemovitostmi nejsou oddělené oblasti, ale propojený celek, který rozhoduje o dlouhodobé hodnotě vašeho majetku. Pomáháme vám řídit náklady, zvyšovat výnos a nastavovat rozhodnutí tak, aby dávala smysl v praxi.",
      ],
      quote:
        "Energie i nemovitosti mají fungovat ve váš prospěch. Cílem je systém, který je ekonomicky udržitelný, provozně zvládnutelný a dlouhodobě pod kontrolou.",
      attribution: "— Chci pro svou nemovitost maximální hodnotu",
    },
    caseStudyCategory: "real-estate",
    primaryCta: {
      title: "Připraveni řídit energii i nemovitosti efektivněji?",
      body: "Nastavíme vám strategii pro energie, realitní transakce, správu portfolia i developerské příležitosti tak, aby váš majetek dlouhodobě rostl na hodnotě.",
    },
    principles: {
      title: "Jak přistupujeme k vašemu majetku",
      body: "Každé rozhodnutí stavíme na datech, znalosti trhu a provozní realitě. V energiích i realitách hledáme konkrétní kroky, které přinášejí měřitelný efekt a dlouhodobou stabilitu.",
      quote:
        "Neřešíme jen jednotlivé transakce. Nastavujeme systém, který chrání hodnotu majetku, zvyšuje výkonnost a snižuje každodenní provozní starosti.",
    },
    sections: [
      {
        id: "real-estate",
        imgSrc: "/img/other/reality.png",
        imgAlt: "Realitní služby",
        imgRight: true,
        paragraphs: [
          "Realitní služby u nás nejsou jen o zprostředkování prodeje nebo pronájmu, ale o kompletním zajištění celého procesu od prvního rozhodnutí až po úspěšné předání nemovitosti.",
          "Zajišťujeme profesionální přípravu nemovitosti, inzerci, marketing, komunikaci se zájemci, vyjednávání i kompletní právní servis včetně bezpečného vypořádání transakce.",
        ],
      },
      {
        id: "property-management",
        imgSrc: "/img/other/office.png",
        imgAlt: "Správa nemovitostí",
        paragraphs: [
          "Správa nemovitostí znamená, že váš majetek funguje tak, jak má - bez zbytečných starostí, výpadků příjmů nebo neřešených problémů. Zajišťujeme kompletní správu od výběru nájemníků po technický servis a ekonomickou agendu.",
          "Výsledkem je nemovitost, která vydělává, aniž by vás zatěžovala. Máte jistotu, že se o váš majetek stará někdo, kdo hlídá jeho hodnotu i výkonnost.",
        ],
      },
      {
        id: "energy",
        imgSrc: "/img/other/energy_optimalization.png",
        imgAlt: "Energetická optimalizace",
        imgRight: true,
        paragraphs: [
          "Energetická optimalizace není jen o změně dodavatele, ale o celkovém řízení toho, jak a za kolik energii využíváte. Největší úspory často vznikají kombinací správně nastavených smluv, tarifů, spotřeby a technického řešení.",
          "Analyzujeme vaši spotřebu, smluvní podmínky, distribuční sazby i způsob využívání energie v domácnosti nebo firmě. Identifikujeme slabá místa a navrhujeme efektivnější nastavení, které vede ke snížení nákladů.",
        ],
      },
      {
        id: "development",
        imgSrc: "/img/other/develop_project.png",
        imgAlt: "Developerské projekty",
        paragraphs: [
          "Developerské projekty vnímáme jako komplexní proces, kde se propojuje vize, kapitál, trh i správné načasování. Od výběru lokality po finální prodej má každý krok zásadní vliv na celkový výsledek.",
          "Podílíme se na analýze příležitosti, přípravě projektu, financování, koordinaci realizace i prodejní strategii tak, aby projekt dával smysl nejen na papíře, ale i v praxi.",
        ],
      },
    ],
    imageBanner: {
      label: "REALITY A ENERGIE",
      title: "Hodnota majetku pod kontrolou",
      body: "Od energetické optimalizace přes realitní služby až po správu nemovitostí a developerské projekty. Nastavujeme systém, který dlouhodobě chrání i rozvíjí váš majetek.",
    },
    showRelated: true,
    showFinalCta: true,
  },
};

export default serviceDetails;
