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
  <UPageCTA
    class="relative overflow-hidden rounded-none py-stack-md"
    :class="{
      'bg-primary-900 text-on-primary': variant === 'dark',
      'border-t border-outline-variant/30': variant === 'bordered',
    }"
  >
    <div class="relative max-w-7xl mx-auto px-gutter text-center">
      <span
        v-if="eyebrow"
        class="text-label-caps uppercase tracking-widest font-semibold mb-stack-sm block"
        :class="
          variant === 'dark' ? 'text-secondary-fixed' : 'text-secondary-700'
        "
      >
        {{ eyebrow }}
      </span>
      <h2
        class="text-headline-lg font-serif mb-stack-sm"
        :class="variant === 'dark' ? '' : 'text-primary-800'"
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
        <UiButton
          v-if="primaryLabel && primaryTo"
          :to="primaryTo"
          variant="solid"
          class="group justify-center px-10 py-4 text-base"
          :class="
            variant === 'dark'
              ? 'bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors'
              : 'bg-primary-800! text-on-primary hover:bg-primary-700! transition-colors'
          "
        >
          {{ primaryLabel }}
          <UIcon
            name="i-material-symbols-arrow-forward"
            class="size-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </UiButton>
        <UiButton
          v-if="secondaryLabel && secondaryTo"
          :to="secondaryTo"
          variant="outline"
          class="justify-center px-10 py-4 text-base"
          :class="
            variant === 'dark'
              ? 'border-on-primary text-on-primary hover:bg-on-primary/10'
              : 'border-primary-800! text-primary-800! hover:bg-primary-50!'
          "
        >
          {{ secondaryLabel }}
        </UiButton>
      </div>
    </div>
  </UPageCTA>
</template>
