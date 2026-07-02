<script setup lang="ts">
const props = withDefaults(
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
    class="relative h-153.5 min-h-125 flex items-center justify-center overflow-hidden bg-primary-900"
  >
    <div
      class="absolute inset-0 bg-cover bg-center mask-gradient-to-right"
      :style="{ backgroundImage: `url(${props.bgImage})` }"
    />
    <UContainer class="relative z-10 mx-auto px-gutter w-full from-left">
      <span
        v-if="props.label"
        class="font-label-caps text-secondary-fixed mb-stack-sm block uppercase"
      >
        {{ props.label }}
      </span>
      <component
        :is="props.headingTag"
        :class="[
          props.headingTag === 'h1'
            ? 'text-headline-lg md:text-display-xl'
            : 'text-headline-md md:text-headline-lg',
          'text-on-primary max-w-2xl',
        ]"
      >
        {{ props.title }}
      </component>
      <p
        v-if="props.body"
        class="font-body-lg text-body-lg text-primary-100 max-w-xl mt-stack-md"
      >
        {{ props.body }}
      </p>
      <slot />
    </UContainer>
  </section>
</template>
