<script setup lang="ts">
import { resolveComponent } from "vue";

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

const isInternal = (to?: string) => !!to && to.startsWith("/");
const NuxtLinkComponent = resolveComponent("NuxtLink");
</script>

<template>
  <component
    :is="to ? (isInternal(to) ? NuxtLinkComponent : 'a') : 'article'"
    v-bind="
      to
        ? isInternal(to)
          ? { to }
          : { href: to, target: '_blank', rel: 'noopener' }
        : {}
    "
    class="flex flex-col group cursor-pointer"
  >
    <div class="overflow-hidden aspect-video mb-stack-md bg-surface-variant">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw xl:33vw"
      />
    </div>

    <div v-if="category || year" class="flex items-center gap-4 mb-3">
      <span v-if="category" class="font-label-caps text-outline uppercase">{{
        category
      }}</span>
      <span
        v-if="category && year"
        class="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"
      />
      <span v-if="year" class="font-label-caps text-outline uppercase">{{
        year
      }}</span>
    </div>

    <h3
      class="text-title-md text-primary-800 group-hover:text-secondary transition-colors mb-4"
    >
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="font-body-md text-on-surface-variant line-clamp-3 whitespace-break-spaces"
    >
      {{ description }}
    </p>

    <slot />
  </component>
</template>
