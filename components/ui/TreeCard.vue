<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  title: string;
  name: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <div
    class="h-full bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
  >
    <div class="h-40 relative overflow-hidden">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt ?? name"
        class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw xl:33vw"
      />
    </div>
    <div class="p-stack-md grow flex flex-col">
      <h3 class="text-title-md md:text-title-lg text-primary-800 mb-base">
        {{ title }}
      </h3>
      <p
        class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
      >
        {{ name }}
      </p>
      <div
        v-if="description"
        class="font-body-md text-body-md text-on-surface-variant"
      >
        <p>
          {{ description }}
        </p>

        <img
          v-if="logoSrc"
          :src="logoSrc"
          :alt="logoAlt || title"
          class="h-12 w-auto max-w-full pt-4 object-contain grayscale saturate-0 contrast-125 brightness-75 opacity-90"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
