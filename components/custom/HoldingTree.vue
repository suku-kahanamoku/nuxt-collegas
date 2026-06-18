<script setup lang="ts">
interface HoldingNode {
  name: string;
  category: string;
}

interface HoldingSection {
  title: string;
  levels: { nodes: HoldingNode[] }[];
}

const sections: HoldingSection[] = [
  {
    title: "Finance a právo",
    levels: [
      {
        nodes: [
          { name: "COLLEGA ENTERPRISE a.s.", category: "Finance a právo" },
        ],
      },
      {
        nodes: [
          { name: "COLLEGA BROKERS a.s.", category: "Finance & investice" },
          {
            name: "COLLEGA INVESTICE s.r.o.",
            category: "Develop & investice nemovitostí",
          },
          { name: "COLLEGA MAKLÉŘ s.r.o.", category: "Pojištění & hypotéky" },
        ],
      },
      {
        nodes: [
          {
            name: "COLLEGAS s.r.o.",
            category: "Administrativa & podpora holdingu",
          },
          {
            name: "COLLEGAS ODŠKODNĚNÍ s.r.o.",
            category: "Odškodnění & náhrady",
          },
          {
            name: "BULA & COLLEGAS s.r.o.",
            category: "Administrativa & podpora holdingu",
          },
        ],
      },
    ],
  },
  {
    title: "Development",
    levels: [
      {
        nodes: [{ name: "COLLEGA ENTERPRISE a.s.", category: "Development" }],
      },
      {
        nodes: [
          { name: "", category: "" },
          { name: "", category: "" },
          { name: "", category: "" },
        ],
      },
      {
        nodes: [
          { name: "", category: "" },
          { name: "", category: "" },
          { name: "", category: "" },
        ],
      },
    ],
  },
  {
    title: "Software",
    levels: [
      {
        nodes: [{ name: "COLLEGA ENTERPRISE a.s.", category: "Software" }],
      },
      {
        nodes: [
          {
            name: "COLLEGA DESIGN s.r.o.",
            category: "Architektura & design nemovitostí",
          },
          { name: "COLLEGAS SOLUTION s.r.o.", category: "Právo & poradenství" },
          {
            name: "COLLEGAS REALITY s.r.o.",
            category: "Správa a prodej nemovitostí",
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
            <!-- LEVEL 1 - ROOT -->
            <div
              class="bg-white text-center rounded-[3px] w-90 max-[1060px]:w-75 px-10 py-8 max-[1060px]:px-6 max-[1060px]:py-7 transition-all duration-200 hover:-translate-y-0.75 hover:shadow-[0_16px_52px_rgba(0,0,0,0.36),0_3px_10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(228,194,131,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]"
              style="
                border: 1px solid rgba(170, 207, 190, 0.5);
                border-top: 3px solid rgba(116, 91, 38, 0.68);
                box-shadow:
                  0 12px 48px rgba(0, 0, 0, 0.35),
                  0 3px 10px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9);
              "
            >
              <div
                class="font-serif font-bold text-primary-800 leading-snug text-body-lg tracking-normal"
              >
                {{ section.levels[0]?.nodes[0]?.name }}
              </div>
              <div
                class="w-14.5 h-0.5 rounded-[2px] mx-auto my-3.5 bg-[linear-gradient(90deg,#745b26,#e4c283,#745b26)]"
              ></div>
              <div
                class="font-semibold uppercase text-label-caps leading-normal tracking-widest text-[#2b4d41]"
              >
                {{ section.levels[0]?.nodes[0]?.category }}
              </div>
            </div>

            <!-- LEVEL 2..N -->
            <template v-for="(level, li) in section.levels.slice(1)" :key="li">
              <div
                class="w-px h-14 shrink-0 bg-[linear-gradient(180deg,rgba(228,194,131,0.72),rgba(255,222,163,0.35))]"
              ></div>
              <div
                class="w-166 h-px max-[1060px]:hidden bg-[linear-gradient(90deg,rgba(255,222,163,0.45),rgba(228,194,131,0.85),rgba(255,222,163,0.45))]"
              ></div>

              <div
                class="flex gap-18 max-[1060px]:flex-col max-[1060px]:gap-0 max-[1060px]:items-center"
              >
                <div
                  v-for="(node, ni) in level.nodes"
                  :key="ni"
                  class="w-65 max-[1060px]:w-75 flex flex-col items-center"
                >
                  <div
                    class="w-px h-10 shrink-0 bg-[linear-gradient(180deg,rgba(228,194,131,0.72),rgba(255,222,163,0.35))]"
                  ></div>

                  <div
                    class="bg-white text-center rounded-[3px] w-65 max-[1060px]:w-75 px-6 py-5.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary-400/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.14),0_0_0_1px_rgba(228,194,131,0.35),inset_0_1px_0_rgba(255,255,255,0.85)]"
                    style="
                      border: 1px solid rgba(170, 207, 190, 0.35);
                      border-top: 2px solid rgba(116, 91, 38, 0.36);
                      box-shadow:
                        0 4px 24px rgba(0, 0, 0, 0.25),
                        0 1px 4px rgba(0, 0, 0, 0.12),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
                    "
                  >
                    <div
                      class="font-serif font-bold text-primary-800 leading-snug text-body-md tracking-normal min-h-10"
                    >
                      {{ node.name }}
                    </div>
                    <div
                      class="w-10 h-[1.5px] rounded-[2px] mx-auto my-3 bg-[linear-gradient(90deg,#745b26,#e4c283,#745b26)]"
                    ></div>
                    <div
                      class="font-semibold uppercase text-label-caps leading-normal tracking-widest text-secondary-700 min-h-6"
                    >
                      {{ node.category }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
