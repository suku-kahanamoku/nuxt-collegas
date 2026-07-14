<script setup lang="ts">
const stats = [
  { value: "20+", label: "LET ZKUŠENOSTÍ PRO VÁS", duration: 3000, interval: 400 },
  {
    value: "3",
    label: "LICENCOVANÉ SUBJEKTY POD ČNB",
    duration: 3000,
    interval: 1000,
  },
  {
    value: "9+",
    label: "SPOLEČNOSTÍ VE SKUPINĚ",
    duration: 3000,
    interval: 300,
  },
  {
    value: "100%",
    label: "NEZÁVISLOST NA BANKÁCH",
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
      Naši práci opíráme o více než 20 let praktických zkušeností našich
      poradců. Zakládáme si na individuálním přístupu, analytickém myšlení a
      měřitelných výsledcích. Jsme vaším spolehlivým partnerem při důležitých
      finančních rozhodnutích a vždy hledáme řešení, která dávají smysl v
      širších souvislostech.
    </template>

    <template #quote>
      „Skutečná kvalita finančního plánování se neprojevuje v době růstu, ale ve
      chvílích nejistoty. Právě tehdy se ukáže, zda byla strategie nastavena
      odpovědně."
    </template>

    <template #attribution> — Marek Butula, zakladatel </template>

    <template #footer>
      <div
        class="flex flex-wrap justify-between items-center gap-8 from-bottom"
      >
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-verified-user-outline"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >REGULOVÁNO <br />ČNB</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-history-edu"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >20+ LET <br />ZKUŠENOSTÍ PRO VÁS</span
          >
        </div>
        <div class="flex items-center gap-4">
          <UIcon
            name="i-material-symbols-language"
            class="text-headline-lg text-secondary-800"
          />
          <span class="font-label-caps text-xs tracking-widest uppercase"
            >CELOREPUBLIKOVÁ <br />PŮSOBNOST</span
          >
        </div>
      </div>
    </template>
  </CustomTextComment>
</template>
