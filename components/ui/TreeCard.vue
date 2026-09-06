<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  title: string;
  names?: string[];
  description?: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <UiLinkRoot
    :to="href"
    fallback-tag="article"
    :aria-label="href ? `${title} – navštívit web` : undefined"
    :class="[
      'group h-full bg-surface-container-lowest border border-outline-variant/30 flex flex-col overflow-hidden transition-all duration-200',
      href &&
        'cursor-pointer hover:-translate-y-1 hover:border-secondary-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400',
    ]"
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
    </div>
  </UiLinkRoot>
</template>
