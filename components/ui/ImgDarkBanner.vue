<script setup lang="ts">
withDefaults(
  defineProps<{
    bgImage: string;
    label?: string;
    title: string;
    body?: string;
    headingTag?: "h1" | "h2";
  }>(),
  {
    headingTag: "h2",
  },
);
</script>

<template>
  <section
    class="relative h-153.5 min-h-125 flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />
    <div class="absolute inset-0 hero-gradient" />
    <UContainer class="relative z-10 mx-auto px-gutter w-full from-left">
      <span
        v-if="label"
        class="font-label-caps text-secondary-fixed mb-stack-sm block uppercase"
      >
        {{ label }}
      </span>
      <component
        :is="headingTag"
        class="font-display-xl text-display-xl text-on-primary max-w-2xl"
      >
        {{ title }}
      </component>
      <p
        v-if="body"
        class="font-body-lg text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
      >
        {{ body }}
      </p>
      <slot />
    </UContainer>
  </section>
</template>
