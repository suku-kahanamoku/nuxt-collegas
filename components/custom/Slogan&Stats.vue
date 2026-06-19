<script setup lang="ts">
const stats = [
  { value: "20+", label: "Let v oboru", duration: 3000, interval: 400 },
  {
    value: "3",
    label: "Licencované subjekty pod ČNB",
    duration: 3000,
    interval: 1000,
  },
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
            >Naše filozofie</span
          >
          <h2
            class="font-headline-lg text-headline-lg text-primary-800 mb-8 leading-tight"
          >
            Vše jde udělat lépe. <br />Rozhodli jsme se to dokázat.
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Více než 20 let stavíme naši práci na individuálním přístupu,
            analytickém myšlení a měřitelných výsledcích. Neprodáváme produkty.
            Navrhujeme strategie, které dávají ekonomický smysl – ať už jde o
            financování bydlení, ochranu majetku nebo dlouhodobé budování
            kapitálu.
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
              „Skutečná kvalita finančního plánování se neprojevuje v době
              růstu, ale ve chvílích nejistoty. Právě tehdy se ukáže, zda
              byla strategie nastavena odpovědně."
            </p>
            <p class="mt-6 font-label-caps text-secondary-700">
              — Tomáš Kalous &amp; Marek Butula, zakladatelé
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
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Regulováno <br />ČNB</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-history-edu"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >20+ let <br />v oboru</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-language"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Celorepubliková <br />působnost</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-military-tech"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >Člen AFIZ <br />&amp; AFAM ČR</span
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
