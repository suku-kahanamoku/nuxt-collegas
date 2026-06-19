<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt?: string;
  imgRight?: boolean;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
    <div
      class="bg-surface-container-highest overflow-hidden aspect-4/5"
      :class="imgRight ? 'order-1 md:order-2' : undefined"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt ?? ''"
        class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
      />
    </div>
    <div
      class="space-y-stack-md"
      :class="imgRight ? 'order-2 md:order-1' : undefined"
    >
      <slot />
    </div>
  </div>
</template>
