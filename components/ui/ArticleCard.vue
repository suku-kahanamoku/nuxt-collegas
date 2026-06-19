<script setup lang="ts">
withDefaults(
  defineProps<{
    imgSrc: string;
    imgAlt?: string;
    category?: string;
    year?: string | number;
    title: string;
    description?: string;
    to?: string;
  }>(),
  {
    imgAlt: "",
    category: "",
    year: "",
    description: "",
    to: "",
  },
);
</script>

<template>
  <component
    :is="to ? 'a' : 'article'"
    v-bind="to ? { href: to } : {}"
    class="flex flex-col group cursor-pointer"
  >
    <div class="overflow-hidden aspect-video mb-stack-md bg-surface-variant">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    <div v-if="category || year" class="flex items-center gap-4 mb-3">
      <span v-if="category" class="font-label-caps text-outline uppercase">{{ category }}</span>
      <span v-if="category && year" class="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
      <span v-if="year" class="font-label-caps text-outline uppercase">{{ year }}</span>
    </div>

    <h4 class="font-headline-md text-2xl text-primary-800 group-hover:text-secondary transition-colors mb-4">
      {{ title }}
    </h4>

    <p v-if="description" class="font-body-md text-on-surface-variant line-clamp-3">
      {{ description }}
    </p>

    <slot />
  </component>
</template>
