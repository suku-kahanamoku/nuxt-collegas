<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    containerClass?: string;
  }>(),
  {
    alt: "",
    containerClass: "aspect-video",
  },
);
</script>

<template>
  <div :class="['relative overflow-hidden', containerClass]">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
      format="webp"
      loading="lazy"
      sizes="sm:100vw md:50vw lg:33vw xl:33vw"
    />
  </div>
</template>
