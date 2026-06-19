<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  name: string;
  role: string;
  description?: string;
  delay?: string;
}>();
</script>

<template>
  <div class="fade-in" :style="delay ? { transitionDelay: delay } : undefined">
    <div class="aspect-3/4 mb-6 overflow-hidden">
      <div
        class="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
        :style="{ backgroundImage: `url(${imgSrc})` }"
      ></div>
    </div>
    <h3 class="font-headline-md text-[24px] text-primary-800">{{ name }}</h3>
    <p class="font-label-caps text-secondary-800 uppercase tracking-widest mb-4">
      {{ role }}
    </p>
    <p v-if="description" class="font-body-md text-on-surface-variant">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
