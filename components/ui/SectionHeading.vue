<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    eyebrow?: string;
    align?: "left" | "center";
    theme?: "light" | "dark";
    divider?: boolean;
  }>(),
  {
    description: "",
    eyebrow: "",
    align: "center",
    theme: "light",
    divider: false,
  },
);

const isCentered = computed(() => props.align === "center");
const isDark = computed(() => props.theme === "dark");
</script>

<template>
  <div :class="isCentered ? 'text-center' : 'text-left'">
    <span
      v-if="eyebrow"
      :class="[
        'font-label-caps block mb-stack-sm uppercase tracking-widest',
        isDark ? 'text-secondary-fixed' : 'text-secondary-800',
      ]"
    >
      {{ eyebrow }}
    </span>
    <h2
      :class="[
        'text-headline-md md:text-headline-lg font-serif',
        isDark ? 'text-on-primary' : 'text-primary-800',
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      :class="[
        'text-body-lg mt-stack-sm max-w-2xl whitespace-break-spaces',
        isCentered && 'mx-auto',
        isDark ? 'text-on-primary-container' : 'text-on-surface-variant',
      ]"
    >
      {{ description }}
    </p>
    <div
      v-if="divider"
      :class="[
        'w-12 h-px mt-stack-md',
        isCentered && 'mx-auto',
        isDark ? 'bg-secondary-fixed/50' : 'bg-secondary-700',
      ]"
    />
  </div>
</template>
