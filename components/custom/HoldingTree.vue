<script setup lang="ts">
import holdingData from "~/assets/data/holding.json";

interface HoldingNode {
  title: string;
  names?: string[];
  imgSrc: string;
  imgAlt?: string;
  imgClass?: string;
  description?: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
}

interface HoldingSection {
  id: string;
  title: string;
  nodes: HoldingNode[];
}

const sections: HoldingSection[] = holdingData;
</script>

<template>
  <div
    class="bg-primary-900 py-stack-xl"
    style="
      background-image: radial-gradient(
        circle at center,
        rgba(255, 222, 163, 0.08) 0%,
        rgba(4, 41, 30, 0.96) 48%,
        rgba(4, 41, 30, 1) 100%
      );
    "
  >
    <template v-for="section in sections" :key="section.id">
      <section :id="section.id" class="py-stack-lg px-gutter">
        <div class="max-w-7xl mx-auto">
          <header class="text-center mb-stack-xl max-w-2xl mx-auto">
            <h2
              class="text-headline-md md:text-headline-lg font-serif text-on-primary leading-tight"
            >
              {{ section.title }}
            </h2>
          </header>

          <div class="holding-card-grid">
            <div
              v-for="node in section.nodes"
              :key="`${node.title}-${node.names?.join('-') || ''}`"
              class="holding-card-grid__item"
            >
              <UiTreeCard
                class="flex-1 h-full"
                :img-src="node.imgSrc"
                :img-alt="node.imgAlt"
                :img-class="node.imgClass"
                :title="node.title"
                :names="node.names"
                :description="node.description"
                :href="node.href"
                :logo-src="node.logoSrc"
                :logo-alt="node.logoAlt"
              />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.holding-card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1.5rem;
}

.holding-card-grid__item {
  display: flex;
  flex: 0 1 20rem;
  width: 100%;
  max-width: 20rem;
}
</style>
