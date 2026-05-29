<script setup lang="ts">
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description?: string;
    /** Background image for full-bleed hero */
    bgImage?: string;
    /** UI overrides, e.g. `{ bg: false }` to disable background */
    ui?: { bg?: boolean };
  }>(),
  {
    ui: () => ({ bg: true }),
  },
);

const { eyebrow, title, subtitle, description, bgImage, ui } = toRefs(props);
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
      <span
        v-if="eyebrow"
        class="text-label-caps text-secondary-fixed mb-stack-sm block tracking-widest font-semibold uppercase"
      >
        {{ eyebrow }}
      </span>

      <h1
        class="text-display-xl font-serif text-on-primary max-w-2xl leading-none"
      >
        <slot name="title">{{ title }}</slot>
      </h1>

      <div class="mt-stack-md">
        <slot name="description">
          <p
            v-if="subtitle || description"
            class="text-body-lg text-on-primary-container max-w-xl opacity-90"
          >
            {{ subtitle || description }}
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>
