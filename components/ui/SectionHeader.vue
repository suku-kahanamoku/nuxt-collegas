<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}>();
</script>

<template>
  <div :class="centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'" class="mb-stack-lg">
    <span v-if="eyebrow" class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold">
      {{ eyebrow }}
    </span>
    <h2 class="text-headline-lg font-serif text-primary-900 leading-tight">{{ title }}</h2>
    <div class="mt-3 h-0.5 w-16 rounded-full" style="background: linear-gradient(90deg,#745b26,#e4c283,#745b26); box-shadow: 0 1px 6px rgba(228,194,131,0.45);" :class="centered ? 'mx-auto' : ''"></div>
    <p v-if="description" class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl leading-relaxed" :class="centered ? 'mx-auto' : ''">{{ description }}</p>
    <slot />
  </div>
</template>
