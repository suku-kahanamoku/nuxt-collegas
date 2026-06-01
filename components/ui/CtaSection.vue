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
        <UiButton
          v-if="primaryLabel && primaryTo"
          :to="primaryTo"
          :color="variant === 'dark' ? 'secondary' : 'primary'"
          variant="solid"
          trailing-icon="i-material-symbols-arrow-forward"
          size="xl"
          class="justify-center px-10 py-4 text-base"
          :class="
            variant === 'dark'
              ? 'bg-secondary-fixed text-primary-900 hover:bg-secondary-fixed/80 transition-colors'
              : ''
          "
          :ui="{
            trailingIcon:
              'transition-transform duration-200 group-hover:translate-x-1 size-5',
          }"
        >
          {{ primaryLabel }}
        </UiButton>
        <UiButton
          v-if="secondaryLabel && secondaryTo"
          :to="secondaryTo"
          color="primary"
          variant="outline"
          size="xl"
          class="justify-center px-10 py-4 text-base"
          :class="
            variant === 'dark'
              ? 'border-on-primary text-on-primary hover:bg-on-primary/10'
              : ''
          "
        >
          {{ secondaryLabel }}
        </UiButton>
      </div>
    </div>
  </UPageCTA>
</template>
