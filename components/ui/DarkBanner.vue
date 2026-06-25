<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    body?: string;
    accent?: boolean;
  }>(),
  {
    body: "",
    accent: true,
  },
);
</script>

<template>
  <section
    class="bg-primary-900 py-section-gap text-center relative overflow-hidden"
  >
    <UContainer class="max-w-2xl mx-auto relative z-10">
      <h2 class="font-headline-lg text-headline-lg text-on-primary mb-stack-md">
        {{ title }}
      </h2>
      <p v-if="body" class="font-body-lg text-on-primary/70 mb-stack-lg">
        {{ body }}
      </p>
      <slot />
    </UContainer>

    <div
      v-if="accent"
      aria-hidden="true"
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent"
    />
  </section>
</template>
