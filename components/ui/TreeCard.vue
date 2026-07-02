<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  title: string;
  name: string;
  description?: string;
  managerName: string;
  managerImgSrc: string;
  managerImgAlt?: string;
  managerLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <div
    class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
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
      <h3 class="font-headline-md text-headline-sm text-primary-800 mb-base">
        {{ title }}
      </h3>
      <p
        class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
      >
        {{ name }}
      </p>
      <div
        v-if="description"
        class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
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
      <!-- <div
        class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-stack-sm"
      >
        <NuxtImg
          :src="managerImgSrc"
          :alt="managerImgAlt ?? managerName"
          class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
          format="webp"
          loading="lazy"
          sizes="sm:48px md:48px lg:48px xl:48px"
        />
        <div>
          <span
            class="font-label-caps text-label-caps text-secondary-800 block uppercase"
          >
            {{ managerLabel ?? "Vedoucí pobočky" }}
          </span>
          <span class="font-body-md text-body-md text-on-surface font-semibold">
            {{ managerName }}
          </span>
        </div>
      </div> -->
    </div>
  </div>
</template>
