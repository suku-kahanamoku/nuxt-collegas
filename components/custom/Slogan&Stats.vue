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
  <CustomTextComment label="Naše filozofie">
    <template #heading>
      Vše jde udělat lépe. <br />Rozhodli jsme se to dokázat.
    </template>

    <template #body>
      Více než 20 let stavíme naši práci na individuálním přístupu, analytickém
      myšlení a měřitelných výsledcích. Neprodáváme produkty. Navrhujeme
      strategie, které dávají ekonomický smysl – ať už jde o financování
      bydlení, ochranu majetku nebo dlouhodobé budování kapitálu.
    </template>

    <template #quote>
      „Skutečná kvalita finančního plánování se neprojevuje v době růstu, ale ve
      chvílích nejistoty. Právě tehdy se ukáže, zda byla strategie nastavena
      odpovědně."
    </template>

    <template #attribution>
      — Tomáš Kalous &amp; Marek Butula, zakladatelé
    </template>

    <template #footer>
      <div class="flex flex-wrap justify-between items-center gap-12">
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
    </template>
  </CustomTextComment>
</template>
