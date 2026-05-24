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
    class="relative overflow-hidden py-section-gap"
    :class="{
      'bg-primary-900 text-on-primary': variant === 'dark',
      'border-t border-outline-variant/30': variant === 'bordered',
    }"
  >
    <div class="relative max-w-7xl mx-auto px-gutter text-center">
      <span
        v-if="eyebrow"
        class="text-label-caps uppercase tracking-widest font-semibold mb-stack-sm block"
        :class="variant === 'dark' ? 'text-secondary-fixed' : 'text-secondary-700'"
      >
        {{ eyebrow }}
      </span>
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
          class="group inline-flex items-center justify-center gap-2 px-stack-lg py-stack-md text-label-caps font-semibold uppercase tracking-widest transition-[transform,box-shadow,background-color,opacity] duration-200 ease-out hover:-translate-y-0.5"
          :class="
            variant === 'dark'
              ? 'bg-secondary-fixed text-primary-900 hover:opacity-90'
              : 'bg-primary-900 text-on-primary hover:bg-primary-700'
          "
          :style="variant === 'dark'
            ? { boxShadow: '0 2px 0 rgba(255,255,255,0.35) inset, 0 -1px 0 rgba(0,0,0,0.15) inset, 0 4px 12px rgba(255,214,130,0.30), 0 8px 24px rgba(255,214,130,0.18)' }
            : { boxShadow: '0 2px 0 rgba(255,255,255,0.12) inset, 0 -1px 0 rgba(0,0,0,0.25) inset, 0 4px 12px rgba(4,41,30,0.25), 0 8px 24px rgba(4,41,30,0.15)' }"
        >
          {{ primaryLabel }}
          <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
        </NuxtLink>
        <NuxtLink
          v-if="secondaryLabel && secondaryTo"
          :to="secondaryTo"
          class="inline-flex items-center justify-center gap-2 border px-stack-lg py-stack-md text-label-caps font-semibold uppercase tracking-widest transition-[transform,color,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5"
          :class="
            variant === 'dark'
              ? 'border-on-primary text-on-primary hover:bg-on-primary/10 hover:border-on-primary'
              : 'border-primary-900 text-primary-900 hover:bg-surface-container hover:border-secondary-700/60'
          "
        >
          {{ secondaryLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
