<script setup lang="ts">
import holdingData from "~/assets/data/holding.json";

interface HoldingNode {
  title: string;
  name: string;
  category: string;
  imgSrc: string;
  imgAlt: string;
  description?: string;
  managerName: string;
  managerImgSrc: string;
  managerImgAlt?: string;
  managerLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
}

interface HoldingSection {
  title: string;
  levels: { nodes: HoldingNode[] }[];
}

function getRootNode(section: HoldingSection): HoldingNode {
  return section.levels[0]!.nodes[0]!;
}

const sections: HoldingSection[] = holdingData;
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
      <section class="py-stack-lg md:py-section-gap px-gutter overflow-x-auto">
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
              class="font-serif text-on-primary text-headline-lg md:text-display-xl leading-tight tracking-tight"
            >
              {{ section.title }}
            </h2>
          </header>

          <!-- Tree -->
          <div class="flex flex-col items-center">
            <!-- LEVEL 0 - ROOT -->
            <div class="w-106 max-[1060px]:w-90">
              <UiTreeCard v-bind="getRootNode(section)" />
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

                  <UiTreeCard
                    class="flex-1"
                    :imgSrc="node.imgSrc"
                    :imgAlt="node.imgAlt"
                    :title="node.title"
                    :name="node.name"
                    :description="node.description"
                    :managerName="node.managerName"
                    :managerImgSrc="node.managerImgSrc"
                    :managerImgAlt="node.managerImgAlt"
                    :managerLabel="node.managerLabel"
                    :logoSrc="node.logoSrc"
                    :logoAlt="node.logoAlt"
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
