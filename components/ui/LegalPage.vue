<script setup lang="ts">
defineProps<{
  title: string;
  intro: string;
}>();
</script>

<template>
  <div class="w-full">
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter max-w-4xl">
        <h1
          class="text-headline-lg md:text-display-xl text-primary-800 mb-stack-md leading-tight"
        >
          {{ title }}
        </h1>
        <p class="font-body-md text-on-surface-variant mb-stack-lg">
          {{ intro }}
        </p>
        <slot />
      </UContainer>
    </section>
  </div>
</template>
