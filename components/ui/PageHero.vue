<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Show large decorative text in top right (e.g. "2014") */
  decorLabel?: string;
  decorText?: string;
  /** Show a CTA button in top right instead */
  ctaLabel?: string;
  ctaTo?: string;
  ctaIcon?: string;
}>();
</script>

<template>
  <section class="max-w-7xl mx-auto px-gutter pt-stack-lg pb-section-gap">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-end">

      <div class="lg:col-span-8">
        <span v-if="eyebrow" class="text-label-caps text-secondary-700 uppercase mb-stack-sm block tracking-widest font-semibold">
          {{ eyebrow }}
        </span>
        <h1 class="text-display-xl font-serif text-primary-900 mb-stack-md leading-none" v-html="title" />
        <slot />
      </div>

      <div class="lg:col-span-4 flex justify-end items-end">
        <!-- Decorative text -->
        <div v-if="decorText" class="text-right">
          <span class="text-display-xl font-serif text-primary-900/10 leading-none select-none">
            {{ decorText }}
          </span>
          <p v-if="decorLabel" class="text-label-caps text-secondary-700 uppercase tracking-widest font-semibold">{{ decorLabel }}</p>
        </div>
        <!-- CTA button -->
        <NuxtLink
          v-else-if="ctaLabel && ctaTo"
          :to="ctaTo"
          class="inline-flex items-center gap-2 bg-primary-900 text-on-primary px-6 py-stack-md text-label-caps font-semibold uppercase tracking-widest hover:bg-primary-700 transition-colors"
        >
          {{ ctaLabel }}
          <span v-if="ctaIcon" class="material-symbols-outlined text-base">{{ ctaIcon }}</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
