<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    body?: string;
  }>(),
  {
    body: "",
  },
);
</script>

<template>
  <section
    class="bg-primary-900 py-stack-lg md:py-section-gap text-center relative overflow-hidden"
  >
    <UContainer class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-headline-md md:text-headline-lg text-on-primary mb-stack-md">
        {{ title }}
      </h2>
      <p v-if="body" class="font-body-lg text-on-primary/70 mb-stack-lg">
        {{ body }}
      </p>
      <slot />
    </UContainer>
  </section>
</template>
