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
  <section class="py-section-gap bg-surface">
    <UContainer class="space-y-20">
      <div
        class="mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center"
      >
        <div class="md:col-span-7 fade-in">
          <span
            class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
            >The Aurelius Vision</span
          >
          <h2
            class="font-headline-lg text-headline-lg text-primary-800 mb-8 leading-tight"
          >
            Integrity as our Foundation, <br />Excellence as our Standard.
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            O Vaši spokojenost se postará specialista z každého odvětví.
            Vyřešíme s vámi financování vašeho bydlení, pojištění veškerého
            majetku a nezapomeneme pokrýt vaše životní rizika. Nepodceňujeme
            finanční plán pro věci blízké i budoucí. Záleží nám i na vašem
            zajištění v důchodovém věku, nebo řešení důležitých životních
            situací.
          </p>
        </div>

        <div class="md:col-span-5 fade-in">
          <div
            class="relative p-stack-lg border border-outline-variant/30 bg-white shadow-sm"
          >
            <div
              class="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-secondary-700"
            ></div>
            <p
              class="font-body-md text-body-md italic text-primary-800 leading-relaxed"
            >
              „Důvěra není výsledek marketingu. Je to výsledek každého
              rozhodnutí, které jste udělali správně."
            </p>
            <p class="mt-6 font-label-caps text-secondary-700">
              — Nuští kolegové
            </p>
          </div>
        </div>
      </div>

      <div
        class="mx-auto px-gutter flex flex-wrap justify-between items-center gap-12"
      >
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-verified-user-outline"
            class="text-headline-lg text-secondary-fixed"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >FCA Regulated <br />Institution</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-history-edu"
            class="text-headline-lg text-secondary-fixed"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Centennial <br />Legacy</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-language"
            class="text-headline-lg text-secondary-fixed"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Global Asset <br />Network</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-military-tech"
            class="text-headline-lg text-secondary-fixed"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Award Winning <br />Portfolio Management</span
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
