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
            <UiBaseCard
              v-for="s in stats"
              :key="s.label"
              compact
            >
              <template #header>
                <UiTitle size="sm">
                  <template #eyebrow>
                    <span class="text-headline-lg font-serif text-secondary-700">
                      <UiCounter :value="s.value" :duration="s.duration" :interval="s.interval" />
                    </span>
                  </template>
                  <template #title>
                    <h3 class="sr-only">{{ s.label }}</h3>
                  </template>
                </UiTitle>
              </template>
              <p class="text-body-md text-on-surface-variant mt-1">{{ s.label }}</p>
            </UiBaseCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
