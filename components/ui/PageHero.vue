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
  <section class="relative max-w-7xl mx-auto px-gutter pt-stack-lg pb-section-gap overflow-hidden">
    <div class="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-3xl"></div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-end">

      <div class="lg:col-span-8">
        <span v-if="eyebrow" class="text-label-caps text-secondary-700 uppercase mb-stack-sm block tracking-widest font-semibold">
          {{ eyebrow }}
        </span>
        <h1 class="text-display-xl font-serif text-primary-900 mb-stack-md leading-none" v-html="title" />
        <div class="h-px w-20 rounded-full mb-stack-md bg-[linear-gradient(90deg,#745b26,#e4c283,#745b26)]"></div>
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
          class="inline-flex items-center gap-2 bg-primary-900 text-on-primary px-6 py-stack-md text-label-caps font-semibold uppercase tracking-widest transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-[0_10px_24px_rgba(4,41,30,0.2)]"
        >
          {{ ctaLabel }}
          <span v-if="ctaIcon" class="material-symbols-outlined text-base">{{ ctaIcon }}</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
