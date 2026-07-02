<script setup lang="ts">
import { resolveComponent } from "vue";

withDefaults(
  defineProps<{
    imgSrc: string;
    imgAlt?: string;
    name: string;
    role: string;
    description?: string;
    to?: string;
  }>(),
  {
    imgAlt: "",
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
    class="flex h-full flex-col group/user-card"
    :class="to ? 'cursor-pointer' : ''"
  >
    <div class="aspect-3/4 overflow-hidden mb-stack-md bg-surface-variant">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt || name"
        class="w-full h-full object-cover group-hover/user-card:scale-105 transition-transform duration-700 grayscale group-hover/user-card:grayscale-0"
        format="webp"
        sizes="sm:100vw md:50vw lg:33vw xl:33vw"
      />
    </div>

    <div class="flex flex-1 flex-col">
      <div class="min-h-24">
        <h3
          class="text-title-md md:text-title-lg text-primary-800 group-hover/user-card:text-secondary transition-colors line-clamp-2"
        >
          {{ name }}
        </h3>
        <p
          class="font-label-caps text-secondary-800 uppercase tracking-widest mt-1 line-clamp-2"
        >
          {{ role }}
        </p>
      </div>

      <div class="min-h-[3rem] flex flex-col justify-end">
        <p
          v-if="description"
          class="font-body-md text-on-surface-variant line-clamp-4"
        >
          {{ description }}
        </p>
        <div v-if="$slots.default" :class="description ? 'mt-4' : ''">
          <slot />
        </div>
      </div>
    </div>
  </component>
</template>
