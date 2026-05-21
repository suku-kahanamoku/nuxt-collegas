<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroAlt?: string;
}>();
</script>

<template>
  <!-- Hero with full-bleed bg image -->
  <section class="relative min-h-96 flex items-center justify-center overflow-hidden">
    <div
      v-if="heroImage"
      class="absolute inset-0 bg-cover bg-center"
      :style="`background-image: url('${heroImage}')`"
    ></div>
    <div v-if="heroImage" class="absolute inset-0 hero-gradient"></div>
    <div v-else class="absolute inset-0 bg-primary-900"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-gutter w-full py-24">
      <span v-if="eyebrow" class="text-label-caps text-secondary-fixed mb-stack-sm block tracking-widest font-semibold uppercase">
        {{ eyebrow }}
      </span>
      <h1 class="text-display-xl font-serif text-on-primary max-w-2xl leading-none">{{ title }}</h1>
      <p v-if="subtitle" class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
