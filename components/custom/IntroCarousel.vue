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
          >PRIVATE WEALTH MANAGEMENT</span
        >
        <h1
          class="font-display-xl text-display-xl text-on-primary mb-stack-md leading-[1.1]"
        >
          Investice s vizí,<br />správa s respektem
        </h1>
        <p class="font-body-lg text-body-lg text-on-primary/70 mb-stack-lg">
          Dedicated to the preservation and growth of multi-generational wealth.
          We combine traditional values with modern investment strategies to
          ensure long-term stability for your legacy.
        </p>
        <div class="flex gap-stack-md items-center flex-wrap">
          <button
            class="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all"
          >
            Arrange a Consultation
          </button>
          <button
            class="border border-on-primary/30 text-on-primary px-8 py-4 font-label-caps uppercase tracking-widest hover:border-secondary-fixed hover:text-secondary-fixed transition-all flex items-center gap-2"
          >
            Our Philosophy
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </UContainer>
  </section>
</template>
