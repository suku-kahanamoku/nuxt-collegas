<script setup lang="ts">
interface HoldingNode {
  name: string;
  category: string;
  imgSrc: string;
  imgAlt: string;
  address: string;
  description?: string;
  managerName: string;
  managerImgSrc: string;
  managerImgAlt?: string;
  managerLabel?: string;
}

interface HoldingSection {
  title: string;
  levels: { nodes: HoldingNode[] }[];
}

function getRootNode(section: HoldingSection): HoldingNode {
  return section.levels[0]!.nodes[0]!;
}

const sections: HoldingSection[] = [
  {
    title: "Finance a právo",
    levels: [
      {
        nodes: [
          {
            name: "COLLEGA ENTERPRISE a.s.",
            category: "Mateřská společnost",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Centrála COLLEGA ENTERPRISE",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Mateřská společnost a sídlo skupiny COLLEGA. Zastřešuje strategické řízení, finanční plánování a rozvoj celého holdingu.",
            managerName: "Ing. Tomáš Kalous",
            managerImgSrc: "/img/user/kalous.png",
            managerLabel: "Zakladatel & CEO",
          },
        ],
      },
      {
        nodes: [
          {
            name: "COLLEGA BROKERS a.s.",
            category: "Finance & investice",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Centrála COLLEGA BROKERS",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Finanční poradenství a zprostředkování investičních produktů pro privátní i firemní klienty.",
            managerName: "Marek Butula",
            managerImgSrc: "/img/user/butula.png",
            managerLabel: "Zakladatel & byznys stratég",
          },
          {
            name: "COLLEGA INVESTICE s.r.o.",
            category: "Develop & investice nemovitostí",
            imgSrc: "/img/branch/breclav.jpg",
            imgAlt: "Kancelář COLLEGA INVESTICE",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Realitní development a investice do komerčních i rezidenčních nemovitostních projektů.",
            managerName: "Lukáš Formánek",
            managerImgSrc: "/img/user/formanek.png",
            managerLabel: "Investice",
          },
          {
            name: "COLLEGA MAKLÉŘ s.r.o.",
            category: "Pojištění & hypotéky",
            imgSrc: "/img/branch/kromeriz.webp",
            imgAlt: "Kancelář COLLEGA MAKLÉŘ",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Zprostředkování pojištění, hypotečních úvěrů a pojistných produktů pro klienty.",
            managerName: "Filip Beneš",
            managerImgSrc: "/img/user/benes.png",
            managerLabel: "Pojištění & hypotéky",
          },
        ],
      },
      {
        nodes: [
          {
            name: "COLLEGAS s.r.o.",
            category: "Administrativa & podpora holdingu",
            imgSrc: "/img/branch/boskovice.webp",
            imgAlt: "Kancelář COLLEGAS",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Administrativní a provozní podpora celé skupiny COLLEGA, včetně HR a interních procesů.",
            managerName: "Nikola Šmídová",
            managerImgSrc: "/img/user/smidova.png",
            managerLabel: "Manažer backoffice",
          },
          {
            name: "COLLEGAS ODŠKODNĚNÍ s.r.o.",
            category: "Odškodnění & náhrady",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Kancelář COLLEGAS ODŠKODNĚNÍ",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Specializace na odškodnění a náhrady škod pro fyzické i právnické osoby.",
            managerName: "Jan Radosta",
            managerImgSrc: "/img/user/radosta.png",
            managerLabel: "Odškodnění",
          },
          {
            name: "BULA & COLLEGAS s.r.o.",
            category: "Administrativa & podpora holdingu",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Kancelář BULA & COLLEGAS",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Poradenství v oblasti práva, administrativy a strategického řízení holdingu.",
            managerName: "Marek Butula",
            managerImgSrc: "/img/user/butula.png",
            managerLabel: "Společník",
          },
        ],
      },
    ],
  },
  {
    title: "Development",
    levels: [
      {
        nodes: [
          {
            name: "COLLEGA ENTERPRISE a.s.",
            category: "Development",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Centrála COLLEGA ENTERPRISE",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Development divize skupiny COLLEGA zaměřená na rezidenční a komerční projekty.",
            managerName: "Ing. Tomáš Kalous",
            managerImgSrc: "/img/user/kalous.png",
            managerLabel: "Zakladatel & CEO",
          },
        ],
      },
      {
        nodes: [
          {
            name: "COLLEGA DEVELOPMENT s.r.o.",
            category: "Výstavba & projekty",
            imgSrc: "/img/branch/breclav.jpg",
            imgAlt: "Projektová kancelář",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Realizace rezidenčních a komerčních development projektů na Moravě.",
            managerName: "Eva Pánková",
            managerImgSrc: "/img/user/pankova.png",
            managerLabel: "Development",
          },
          {
            name: "COLLEGA PROPERTY s.r.o.",
            category: "Správa nemovitostí",
            imgSrc: "/img/branch/kromeriz.webp",
            imgAlt: "Kancelář správy nemovitostí",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Komplexní správa a facility management nemovitostního portfolia skupiny.",
            managerName: "Josef Zídek",
            managerImgSrc: "/img/user/zidek.png",
            managerLabel: "Manažer správy",
          },
          {
            name: "COLLEGA CONSULT s.r.o.",
            category: "Inženýrská činnost",
            imgSrc: "/img/branch/boskovice.webp",
            imgAlt: "Kancelář inženýrské činnosti",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Inženýrská a konzultační činnost v oblasti stavebnictví a územního plánování.",
            managerName: "David Strnad",
            managerImgSrc: "/img/user/strnad.png",
            managerLabel: "Vedoucí konzultant",
          },
        ],
      },
    ],
  },
  {
    title: "Software",
    levels: [
      {
        nodes: [
          {
            name: "COLLEGA ENTERPRISE a.s.",
            category: "Software",
            imgSrc: "/img/branch/centrala.jpg",
            imgAlt: "Centrála COLLEGA ENTERPRISE",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Technologická divize skupiny COLLEGA vyvíjející vlastní softwarová řešení.",
            managerName: "Ing. Tomáš Kalous",
            managerImgSrc: "/img/user/kalous.png",
            managerLabel: "Zakladatel & CEO",
          },
        ],
      },
      {
        nodes: [
          {
            name: "COLLEGA DESIGN s.r.o.",
            category: "Architektura & design nemovitostí",
            imgSrc: "/img/branch/breclav.jpg",
            imgAlt: "Kancelář COLLEGA DESIGN",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Architektonické a designové služby pro rezidenční i komerční projekty.",
            managerName: "Lukáš Bajgar",
            managerImgSrc: "/img/user/bajgar.png",
            managerLabel: "Design",
          },
          {
            name: "COLLEGAS SOLUTION s.r.o.",
            category: "IT & vývoj",
            imgSrc: "/img/branch/kromeriz.webp",
            imgAlt: "Kancelář COLLEGAS SOLUTION",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Vývoj softwarových řešení pro finanční a realitní služby skupiny.",
            managerName: "Pavel Prudil",
            managerImgSrc: "/img/user/prudil.png",
            managerLabel: "Vedoucí vývoje",
          },
          {
            name: "COLLEGAS REALITY s.r.o.",
            category: "Správa a prodej nemovitostí",
            imgSrc: "/img/branch/boskovice.webp",
            imgAlt: "Kancelář COLLEGAS REALITY",
            address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
            description:
              "Zprostředkování prodeje a pronájmu nemovitostí pro klienty skupiny.",
            managerName: "Zuzana Čapková",
            managerImgSrc: "/img/user/capkova.png",
            managerLabel: "Reality",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <div
    class="bg-primary-900"
    style="
      background-image: radial-gradient(
        circle at center,
        rgba(255, 222, 163, 0.08) 0%,
        rgba(4, 41, 30, 0.96) 48%,
        rgba(4, 41, 30, 1) 100%
      );
    "
  >
    <template v-for="(section, si) in sections" :key="si">
      <section class="py-section-gap px-gutter overflow-x-auto">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <header class="text-center mb-24 max-w-2xl mx-auto">
            <span
              v-if="si === 0"
              class="block text-label-caps font-semibold tracking-widest uppercase text-secondary-fixed mb-stack-md"
            >
              Skupina COLLEGA
            </span>
            <h2
              class="font-serif text-on-primary text-display-xl leading-tight tracking-tight"
            >
              {{ section.title }}
            </h2>
          </header>

          <!-- Tree -->
          <div class="flex flex-col items-center">
            <!-- LEVEL 0 - ROOT -->
            <div class="w-106 max-[1060px]:w-90">
              <UiBranchCard v-bind="getRootNode(section)" />
            </div>

            <!-- LEVEL 1..N -->
            <template v-for="(level, li) in section.levels.slice(1)" :key="li">
              <div
                class="w-px h-14 shrink-0 bg-[linear-gradient(180deg,rgba(228,194,131,0.72),rgba(255,222,163,0.35))]"
              ></div>
              <div
                class="w-full max-w-[688px] h-px bg-[linear-gradient(90deg,rgba(255,222,163,0.45),rgba(228,194,131,0.85),rgba(255,222,163,0.45))]"
              ></div>

              <div
                class="flex gap-6 max-[1060px]:flex-col max-[1060px]:items-center"
              >
                <div
                  v-for="(node, ni) in level.nodes"
                  :key="ni"
                  class="w-80 max-[1060px]:w-full max-w-80 flex flex-col"
                >
                  <div
                    class="w-px h-10 shrink-0 self-center bg-[linear-gradient(180deg,rgba(228,194,131,0.72),rgba(255,222,163,0.35))]"
                  ></div>

                  <UiBranchCard
                    class="flex-1"
                    :imgSrc="node.imgSrc"
                    :imgAlt="node.imgAlt"
                    :name="node.name"
                    :address="node.address"
                    :description="node.description"
                    :managerName="node.managerName"
                    :managerImgSrc="node.managerImgSrc"
                    :managerImgAlt="node.managerImgAlt"
                    :managerLabel="node.managerLabel"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
