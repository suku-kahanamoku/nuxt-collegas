<script setup lang="ts">
const items = [
  "/img/intro/main.png",
  "/img/intro/stamp.png",
  "/img/intro/notes.png",
  "/img/intro/cafe.png",
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
      class="absolute inset-0 min-h-screen"
      :ui="{
        item: 'w-full ps-0 h-full bg-primary-900',
        container: 'ms-0 h-full',
      }"
    >
      <NuxtImg
        class="w-full h-full object-cover mask-gradient-to-right min-h-screen"
        :src="item"
        alt=""
        format="webp"
        loading="eager"
        fetchpriority="high"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw"
      />
    </UCarousel>

    <UContainer class="relative z-20 w-full py-stack-lg">
      <div class="max-w-2xl">
        <span class="font-label-caps text-secondary-fixed mb-stack-sm block">
          <span class="inline-block from-top">
            NEZÁVISLÉ FINANČNÍ PORADENSTVÍ
          </span>
        </span>

        <h1
          class="text-headline-lg md:text-display-xl max-w-lg text-on-primary mb-stack-md leading-tight"
        >
          <UiTypewriter
            :words="['Finanční jistota, na které záleží']"
            :loop="false"
            :show-cursor="false"
          />
        </h1>

        <p
          class="font-body-lg text-body-lg text-on-primary/70 mb-stack-lg from-bottom"
        >
          Stojíme při vás, když řešíte důležité životní kroky. Jako
          profesionální poradenský tým dáváme financím jasný řád a logiku.
          Postaráme se o to, abyste měli nejvýhodnější hypotéku, bezpečně
          chráněný majetek a spolehlivý plán pro dlouhodobé zhodnocování peněz.
        </p>

        <div class="flex gap-stack-md items-center flex-wrap from-bottom">
          <UiButton variant="solid" to="/contact#contact-form">
            Domluvit konzultaci
          </UiButton>
          <UiButton
            variant="outline"
            class="group flex items-center gap-2"
            to="/about"
          >
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
