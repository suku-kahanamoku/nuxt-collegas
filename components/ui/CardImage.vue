<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    containerClass?: string;
    imgClass?: string;
  }>(),
  {
    alt: "",
    containerClass: "aspect-video",
    imgClass: "object-cover",
  },
);
</script>

<template>
  <div :class="['relative overflow-hidden object-contain', containerClass]">
    <NuxtImg
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full hover:opacity-80 transition-opacity duration-300',
        imgClass,
      ]"
      format="webp"
      loading="lazy"
      sizes="sm:100vw md:50vw lg:33vw xl:33vw"
    />
  </div>
</template>
