<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}>();
</script>

<template>
  <div :class="centered ? 'text-center max-w-2xl mx-auto' : ''" class="mb-stack-lg">
    <span v-if="eyebrow" class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold">
      {{ eyebrow }}
    </span>
    <h2 class="text-headline-lg font-serif text-primary-900">{{ title }}</h2>
    <p v-if="description" class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">{{ description }}</p>
    <slot />
  </div>
</template>
