<script setup lang="ts">
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    /** Background image for full-bleed hero */
    bgImage?: string;
    /** UI overrides, e.g. `{ bg: false }` to disable background */
    ui?: { bg?: boolean };
  }>(),
  {
    ui: () => ({ bg: true }),
  },
);

const { bgImage, ui } = toRefs(props);
</script>

<template>
  <!-- Hero with full-bleed bg image -->
  <section
    class="relative min-h-96 flex items-center justify-center overflow-hidden"
  >
    <div
      v-if="bgImage && ui && ui.bg"
      class="absolute inset-0 bg-cover bg-center"
      :style="`background-image: url('${bgImage}')`"
    ></div>

    <div
      v-if="bgImage && ui && ui.bg"
      class="absolute inset-0 hero-gradient"
    ></div>
    <div v-else-if="ui && ui.bg" class="absolute inset-0 bg-primary-900"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-gutter w-full pt-16 pb-24">
      <div class="mb-stack-md">
        <slot name="header"></slot>
      </div>

      <div class="mt-stack-md">
        <slot name="description"></slot>
      </div>
    </div>
  </section>
</template>
