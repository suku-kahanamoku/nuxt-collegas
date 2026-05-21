<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** "dark" = bg-primary-900, "light" = no bg, "bordered" = border-t */
  variant?: "dark" | "light" | "bordered";
}>();
</script>

<template>
  <section
    class="py-section-gap"
    :class="{
      'bg-primary-900 text-on-primary': variant === 'dark',
      'border-t border-outline-variant/30': variant === 'bordered',
    }"
  >
    <div class="max-w-7xl mx-auto px-gutter text-center">
      <h2
        class="text-headline-lg font-serif mb-stack-sm"
        :class="variant === 'dark' ? '' : 'text-primary-900'"
      >
        {{ title }}
      </h2>
      <p
        v-if="body"
        class="text-body-md mb-stack-lg max-w-xl mx-auto"
        :class="variant === 'dark' ? 'opacity-80' : 'text-on-surface-variant'"
      >
        {{ body }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-stack-md">
        <NuxtLink
          v-if="primaryLabel && primaryTo"
          :to="primaryTo"
          class="inline-flex items-center justify-center gap-2 px-stack-lg py-stack-md text-label-caps font-semibold uppercase tracking-widest transition-colors"
          :class="variant === 'dark' ? 'bg-on-primary text-primary-900 hover:opacity-90' : 'bg-primary-900 text-on-primary hover:bg-primary-700'"
        >
          {{ primaryLabel }}
          <span class="material-symbols-outlined text-base">arrow_forward</span>
        </NuxtLink>
        <NuxtLink
          v-if="secondaryLabel && secondaryTo"
          :to="secondaryTo"
          class="inline-flex items-center justify-center gap-2 border px-stack-lg py-stack-md text-label-caps font-semibold uppercase tracking-widest transition-colors"
          :class="variant === 'dark' ? 'border-on-primary text-on-primary hover:bg-on-primary/10' : 'border-primary-900 text-primary-900 hover:bg-surface-container'"
        >
          {{ secondaryLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
