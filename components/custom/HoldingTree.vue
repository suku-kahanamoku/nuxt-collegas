<script setup lang="ts">
interface HoldingNode {
  name: string;
  category: string;
}

interface HoldingLevel {
  nodes: HoldingNode[];
}

const levels: HoldingLevel[] = [
  {
    nodes: [
      { name: "COLLEGA ENTERPRISE a.s.", category: "Holdingová struktura" },
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
        name: "COLLEGA DESIGN s.r.o.",
        category: "Architektura & design nemovitostí",
      },
      {
        name: "COLLEGAS s.r.o.",
        category: "Administrativa & podpora holdingu",
      },
      { name: "COLLEGAS SOLUTION s.r.o.", category: "Právo & poradenství" },
    ],
  },
  {
    nodes: [
      { name: "COLLEGAS ODŠKODNĚNÍ s.r.o.", category: "Odškodnění & náhrady" },
      {
        name: "BULA & COLLEGAS s.r.o.",
        category: "Administrativa & podpora holdingu",
      },
      {
        name: "COLLEGAS REALITY s.r.o.",
        category: "Správa a prodej nemovitostí",
      },
    ],
  },
];
</script>

<template>
  <section
    class="py-section-gap px-gutter overflow-x-auto"
    style="
      background: linear-gradient(
        160deg,
        #04291e 0%,
        #0b3d2b 45%,
        #1d3f33 100%
      );
    "
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-24 max-w-2xl mx-auto">
        <span
          class="block text-label-caps font-semibold tracking-widest uppercase text-secondary-fixed mb-stack-md"
        >
          Skupina COLLEGA
        </span>
        <h2
          class="font-serif text-on-primary"
          style="font-size: 3.5rem; line-height: 1.1; letter-spacing: -0.01em"
        >
          Holdingová struktura
        </h2>
      </header>

      <!-- Tree -->
      <div class="flex flex-col items-center">
        <!-- LEVEL 1 - ROOT -->
        <div
          class="bg-white text-center rounded-[3px] w-[360px] max-[1060px]:w-[300px] px-10 py-8 max-[1060px]:px-6 max-[1060px]:py-7 transition-all duration-200 hover:-translate-y-[3px]"
          style="
            border: 1px solid rgba(170, 207, 190, 0.5);
            border-top: 3px solid #2b4d41;
            box-shadow:
              0 12px 48px rgba(0, 0, 0, 0.35),
              0 3px 10px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
          "
        >
          <div
            class="font-serif font-bold text-primary-900 leading-[1.4] text-[19px] tracking-[0.01em]"
          >
            {{ levels[0]?.nodes[0]?.name }}
          </div>
          <div
            class="w-[58px] h-[2px] rounded-[2px] mx-auto my-[14px] bg-[linear-gradient(90deg,#745b26,#e4c283,#745b26)]"
          ></div>
          <div
            class="font-semibold uppercase text-[12px] leading-[1.5] tracking-[0.14em] text-[#2b4d41]"
          >
            {{ levels[0]?.nodes[0]?.category }}
          </div>
        </div>

        <!-- LEVEL 2..4 -->
        <template v-for="(level, li) in levels.slice(1)" :key="li">
          <div class="w-px h-14 bg-white/30 shrink-0"></div>
          <div class="w-[664px] h-px bg-white/30 max-[1060px]:hidden"></div>

          <div
            class="flex gap-[72px] max-[1060px]:flex-col max-[1060px]:gap-0 max-[1060px]:items-center"
          >
            <div
              v-for="(node, ni) in level.nodes"
              :key="ni"
              class="w-[260px] max-[1060px]:w-[300px] flex flex-col items-center"
            >
              <div class="w-px h-10 bg-white/30 shrink-0"></div>

              <div
                class="bg-white text-center rounded-[3px] w-[260px] max-[1060px]:w-[300px] px-6 py-[22px] transition-all duration-200 hover:-translate-y-[2px]"
                style="
                  border: 1px solid rgba(170, 207, 190, 0.35);
                  border-top: 2px solid rgba(4, 41, 30, 0.25);
                  box-shadow:
                    0 4px 24px rgba(0, 0, 0, 0.25),
                    0 1px 4px rgba(0, 0, 0, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                "
              >
                <div
                  class="font-serif font-bold text-primary-900 leading-[1.4] text-[15px] tracking-[0.005em]"
                >
                  {{ node.name }}
                </div>
                <div
                  class="w-10 h-[1.5px] rounded-[2px] mx-auto my-3 bg-[linear-gradient(90deg,#745b26,#e4c283,#745b26)]"
                ></div>
                <div
                  class="font-semibold uppercase text-[11.5px] leading-[1.5] tracking-[0.09em] text-secondary-700"
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
