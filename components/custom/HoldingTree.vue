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
      { name: "COLLEGA INVESTICE s.r.o.", category: "Develop & investice nemovitostí" },
      { name: "COLLEGA MAKLÉŘ s.r.o.", category: "Pojištění & hypotéky" },
    ],
  },
  {
    nodes: [
      { name: "COLLEGA DESIGN s.r.o.", category: "Architektura & design nemovitostí" },
      { name: "COLLEGAS s.r.o.", category: "Administrativa & podpora holdingu" },
      { name: "COLLEGAS SOLUTION s.r.o.", category: "Právo & poradenství" },
    ],
  },
  {
    nodes: [
      { name: "COLLEGAS ODŠKODNĚNÍ s.r.o.", category: "Odškodnění & náhrady" },
      { name: "BULA & COLLEGAS s.r.o.", category: "Administrativa & podpora holdingu" },
      { name: "COLLEGAS REALITY s.r.o.", category: "Správa a prodej nemovitostí" },
    ],
  },
];
</script>

<template>
  <section class="py-section-gap px-gutter overflow-x-auto" style="background: linear-gradient(160deg, #04291e 0%, #0b3d2b 45%, #1d3f33 100%);">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <header class="text-center mb-24 max-w-2xl mx-auto">
        <span class="block text-label-caps font-semibold tracking-widest uppercase text-secondary-fixed mb-stack-md">
          Skupina COLLEGA
        </span>
        <h2 class="font-serif text-on-primary" style="font-size: 3.5rem; line-height: 1.1; letter-spacing: -0.01em;">
          Holdingová struktura
        </h2>
      </header>

      <!-- Tree -->
      <div class="flex flex-col items-center gap-0">
        <template v-for="(level, li) in levels" :key="li">

          <!-- Row of nodes -->
          <div
            class="flex flex-col sm:flex-row items-center gap-0"
            :class="level.nodes.length > 1 ? 'sm:gap-16' : ''"
          >
            <div v-for="(node, ni) in level.nodes" :key="ni" class="flex flex-col items-center">
              <!-- Drop connector (except root) -->
              <div v-if="li > 0" class="w-px h-10 bg-white/25"></div>

              <!-- Node box -->
              <div
                class="bg-white text-center transition-transform hover:-translate-y-0.5"
                :class="li === 0 ? 'px-10 py-8 w-80' : 'px-6 py-5 w-64'"
                style="border: 1px solid rgba(170,207,190,0.35); border-top-width: 2px; border-top-color: rgba(4,41,30,0.25); box-shadow: 0 4px 24px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.12);"
              >
                <div
                  class="font-serif font-bold text-primary-900 leading-snug"
                  :class="li === 0 ? 'text-lg' : 'text-sm'"
                >
                  {{ node.name }}
                </div>
                <div
                  class="mx-auto my-3"
                  :class="li === 0 ? 'w-14 h-0.5' : 'w-10 h-px'"
                  style="background: linear-gradient(90deg, #745b26, #e4c283, #745b26);"
                ></div>
                <div
                  class="font-semibold uppercase tracking-wide text-secondary-700"
                  :class="li === 0 ? 'text-xs' : 'text-xs'"
                  style="letter-spacing: 0.09em;"
                >
                  {{ node.category }}
                </div>
              </div>
            </div>
          </div>

          <!-- Spine connector to next level -->
          <div v-if="li < levels.length - 1" class="w-px h-14 bg-white/25"></div>

        </template>
      </div>

    </div>
  </section>
</template>
