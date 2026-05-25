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
    <div class="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-secondary-fixed/15 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl"></div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-end">

      <div class="lg:col-span-8">
        <span v-if="eyebrow" class="text-label-caps text-secondary-700 uppercase mb-stack-sm block tracking-widest font-semibold">
          {{ eyebrow }}
        </span>
        <h1 class="text-display-xl font-serif text-primary-900 mb-stack-md leading-none" v-html="title" />
        <div class="h-0.5 w-20 rounded-full mb-stack-md" style="background: linear-gradient(90deg,#745b26,#e4c283,#745b26); box-shadow: 0 1px 6px rgba(228,194,131,0.45);"></div>
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
        <UButton
          v-else-if="ctaLabel && ctaTo"
          :to="ctaTo"
          color="primary"
          variant="solid"
          :trailing-icon="ctaIcon || undefined"
          size="xl"
          :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-x-1 size-5' }"
        >
          {{ ctaLabel }}
        </UButton>
      </div>

    </div>
  </section>
</template>
