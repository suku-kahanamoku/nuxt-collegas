<script setup lang="ts">
import { computed } from "vue";
import { useIntroAnimate } from "~/composables/useIntroAnimate";

const items = [
  "/img/intro/main.png",
  "/img/intro/stamp.png",
  "/img/intro/notes.png",
  "/img/intro/cafe.png",
];

const { mounted, splitChars } = useIntroAnimate({
  stagger: 30,
  initialDelay: 80,
});

const headingA = computed(() =>
  splitChars("Finanční jistota, na které záleží"),
);
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
      <NuxtImg
        class="w-full h-full object-cover mask-gradient-to-right"
        :src="item"
        alt=""
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw"
      />
    </UCarousel>

    <UContainer class="relative z-20 w-full">
      <div class="max-w-2xl">
        <span class="font-label-caps text-secondary-fixed mb-stack-sm block">
          <span class="inline-block from-top">
            NEZÁVISLÉ FINANČNÍ PORADENSTVÍ
          </span>
        </span>

        <h1
          class="max-w-lg font-display-xl text-display-xl text-on-primary mb-stack-md leading-tight"
        >
          <span
            v-for="(part, i) in headingA"
            :key="i"
            class="inline-block transition-all duration-500 ease-out"
            :style="{ transitionDelay: part.delay }"
            :class="
              mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            "
            >{{ part.ch === " " ? "\u00A0" : part.ch }}</span
          >
        </h1>

        <p
          class="font-body-lg text-body-lg text-on-primary/70 mb-stack-lg from-bottom"
        >
          Jsme poradenský tým specializovaný na komplexní finanční plánování.
          Klientům pomáháme zvládat zásadní životní rozhodnutí – od financování
          bydlení přes ochranu majetku až po dlouhodobé budování kapitálu.
        </p>

        <div class="flex gap-stack-md items-center flex-wrap from-bottom">
          <UiButton variant="solid" to="/contact"> Domluvit konzultaci </UiButton>
          <UiButton variant="outline" class="group flex items-center gap-2" to="/about">
            Naše filozofie
            <UIcon
              name="i-material-symbols-arrow-forward"
              class="text-xl transition-transform duration-200 group-hover:translate-x-1"
            />
          </UiButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
