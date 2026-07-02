<script setup lang="ts">
import holdingData from "~/assets/data/holding.json";

interface HoldingNode {
  title: string;
  name: string;
  imgSrc: string;
  imgAlt: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
}

interface HoldingSection {
  title: string;
  nodes: HoldingNode[];
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
          <header class="text-center mb-24 max-w-2xl mx-auto">
            <h2
              class="font-serif text-on-primary text-headline-lg md:text-display-xl leading-tight tracking-tight"
            >
              {{ section.title }}
            </h2>
          </header>

          <div
            class="flex gap-6 max-[1060px]:flex-col max-[1060px]:items-center justify-center flex-wrap"
          >
            <div
              v-for="(node, ni) in section.nodes"
              :key="ni"
              class="w-80 max-[1060px]:w-full max-w-80 flex flex-col"
            >
              <UiTreeCard
                class="flex-1"
                :imgSrc="node.imgSrc"
                :imgAlt="node.imgAlt"
                :title="node.title"
                :name="node.name"
                :description="node.description"
                :logoSrc="node.logoSrc"
                :logoAlt="node.logoAlt"
              />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
