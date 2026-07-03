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
      :class="imgRight ? 'order-2' : 'order-1'"
    >
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt ?? ''"
        class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:50vw xl:50vw"
      />
    </div>
    <div
      class="grid space-y-stack-md items-center"
      :class="imgRight ? 'order-1' : 'md:order-2'"
    >
      <slot />
    </div>
  </div>
</template>
