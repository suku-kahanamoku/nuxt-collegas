<script setup lang="ts">
const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];
</script>

<template>
  <UCarousel
    v-slot="{ item, index }"
    :items="items"
    :autoplay="{ delay: 4000 }"
    loop
    dots
    wheel-gestures
    :ui="{
      item: 'w-full ps-0',
      container: 'ms-0',
    }"
  >
    <div
      class="w-full h-[60vh] lg:h-[70vh] bg-center bg-cover"
      :style="{ backgroundImage: `url(${item})` }"
      :aria-label="`Slide ${index + 1}`"
    />
  </UCarousel>
</template>
