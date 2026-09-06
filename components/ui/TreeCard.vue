<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  title: string;
  names?: string[];
  description?: string;
  href?: string;
  linkLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <div
    class="h-full bg-surface-container-lowest border border-outline-variant/30 flex flex-col overflow-hidden"
  >
    <UiCardImage
      :src="imgSrc"
      :alt="imgAlt ?? title"
      container-class="h-40"
    />
    <div class="p-stack-md grow flex flex-col">
      <h3 class="text-title-md md:text-title-lg text-primary-800 mb-stack-sm">
        {{ title }}
      </h3>
      <div v-if="names?.length" class="mb-stack-sm space-y-1">
        <p
          v-for="name in names"
          :key="name"
          class="font-body-md text-body-md text-on-surface font-semibold"
        >
          {{ name }}
        </p>
      </div>
      <div
        v-if="description"
        class="font-body-md text-body-md text-on-surface-variant whitespace-break-spaces grow"
      >
        <p>
          {{ description }}
        </p>
      </div>

      <img
        v-if="logoSrc"
        :src="logoSrc"
        :alt="logoAlt || title"
        class="h-12 w-auto max-w-full pt-4 object-contain grayscale saturate-0 contrast-125 brightness-75 opacity-90"
        loading="lazy"
      />

      <UiLinkRoot
        v-if="href"
        :to="href"
        class="mt-stack-md inline-flex items-center gap-2 self-start border-b border-secondary-700 pb-1 font-label-caps uppercase text-secondary-800 transition-colors hover:text-secondary-700"
      >
        {{ linkLabel || "Navštívit web" }}
        <UIcon name="i-material-symbols-open-in-new" class="size-4" />
      </UiLinkRoot>
    </div>
  </div>
</template>
