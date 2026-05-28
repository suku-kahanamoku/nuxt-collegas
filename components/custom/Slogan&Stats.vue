<script setup lang="ts">
const stats = [
  {
    value: "3",
    label: "Licencované subjekty pod ČNB",
    duration: 3000,
    interval: 1000,
  },
  { value: "10+", label: "Let v oboru", duration: 3000, interval: 400 },
  {
    value: "9+",
    label: "Společností ve skupině",
    duration: 3000,
    interval: 300,
  },
  {
    value: "100%",
    label: "Nezávislost na bankách",
    duration: 3500,
    interval: 60,
  },
];
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-gutter">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
        <div class="lg:col-span-7 flex flex-col gap-stack-lg">
          <blockquote
            class="text-headline-md font-serif italic text-primary-700 leading-snug"
          >
            „Důvěra není výsledek marketingu.<br />Je to výsledek každého
            rozhodnutí, které jste udělali správně."
          </blockquote>
          <div
            class="flex flex-col gap-stack-md text-body-lg text-on-surface-variant"
          >
            <p>
              O Vaši spokojenost se postará specialista z každého odvětví.
              Vyřešíme s vámi financování vašeho bydlení, pojištění veškerého
              majetku a nezapomeneme pokrýt vaše životní rizika. Nepodceňujeme
              finanční plán pro věci blízké i budoucí. Záleží nám i na vašem
              zajištění v důchodovém věku, nebo řešení důležitých životních
              situací.
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-center gap-stack-lg">
          <div class="grid grid-cols-2 gap-stack-sm">
            <UiStatCard
              v-for="s in stats"
              :key="s.label"
              :value="s.value"
              :label="s.label"
              :counter-duration="s.duration"
              :counter-interval="s.interval"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
