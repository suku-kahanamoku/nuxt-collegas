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
  <section
    class="relative min-h-screen flex items-center overflow-hidden bg-primary-900"
  >
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :autoplay="{ delay: 4000 }"
      loop
      wheel-gestures
      class="absolute inset-0"
      :ui="{
        item: 'w-full ps-0 h-full bg-primary-900',
        container: 'ms-0 h-full',
      }"
    >
      <img
        class="w-full h-full object-cover mask-gradient-to-right"
        :src="item"
      />
    </UCarousel>

    <UContainer class="relative z-20 w-full">
      <div class="max-w-2xl">
        <span class="font-label-caps text-secondary-fixed mb-stack-sm block"
          >NEZÁVISLÉ FINANČNÍ PORADENSTVÍ</span
        >
        <h1
          class="font-display-xl text-display-xl text-on-primary mb-stack-md leading-tight"
        >
          Finanční jistota,<br />na které záleží
        </h1>
        <p class="font-body-lg text-body-lg text-on-primary/70 mb-stack-lg">
          Jsme poradenský tým specializovaný na komplexní finanční plánování.
          Klientům pomáháme zvládat zásadní životní rozhodnutí – od financování
          bydlení přes ochranu majetku až po dlouhodobé budování kapitálu.
        </p>
        <div class="flex gap-stack-md items-center flex-wrap">
          <Button variant="solid">
            Domluvit konzultaci
          </Button>
          <Button variant="outline" class="flex items-center gap-2">
            Naše filozofie
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </Button>
        </div>
      </div>
    </UContainer>
  </section>
</template>
