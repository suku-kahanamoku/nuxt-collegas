<script setup lang="ts">
import { resolveComponent } from "vue";

withDefaults(
  defineProps<{
    imgSrc: string;
    imgAlt?: string;
    name: string;
    role: string;
    description?: string;
    delay?: string;
    to?: string;
  }>(),
  {
    imgAlt: "",
    description: "",
    delay: "",
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
    :style="delay ? { transitionDelay: delay } : undefined"
    class="flex flex-col group"
    :class="to ? 'cursor-pointer' : ''"
  >
    <div class="aspect-3/4 mb-6 overflow-hidden bg-surface-variant">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt || name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw xl:33vw"
      />
    </div>
    <h3
      class="font-headline-md text-[24px] text-primary-800 group-hover:text-secondary transition-colors"
    >
      {{ name }}
    </h3>
    <p
      class="font-label-caps text-secondary-800 uppercase tracking-widest mb-4"
    >
      {{ role }}
    </p>
    <p v-if="description" class="font-body-md text-on-surface-variant">
      {{ description }}
    </p>
    <slot />
  </component>
</template>
