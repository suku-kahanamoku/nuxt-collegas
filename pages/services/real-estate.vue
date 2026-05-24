<script setup lang="ts">
definePageMeta({ title: "Realitní služby | Finanční poradenství" });
useHead({
  title: "Realitní služby | Finanční poradenství",
  meta: [{ name: "description", content: "Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání." }],
});

const steps = [
  { icon: "search", title: "Analýza a ocenění", description: "Tržní analýza a stanovení správné ceny nemovitosti pro maximalizaci výnosu." },
  { icon: "campaign", title: "Marketing a prezentace", description: "Profesionální fotografie, 3D virtuální prohlídky a cílené oslovení potenciálních kupců." },
  { icon: "groups", title: "Prohlídky a jednání", description: "Organizace a vedení prohlídek, komunikace se zájemci a sjednání nejvýhodnějších podmínek." },
  { icon: "gavel", title: "Právní a finanční servis", description: "Kompletní smluvní dokumentace, úschova kupní ceny a bezpečné vypořádání transakce." },
];
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Realitní služby"
      subtitle="Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Prodej nebo pronájem bez starostí</h2>
            <p class="text-body-md text-on-surface-variant">
              Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Realitní služby u nás nejsou jen o zprostředkování prodeje nebo pronájmu, ale o kompletním zajištění
              celého procesu od prvního rozhodnutí až po úspěšné předání nemovitosti. Každý krok má svůj
              význam – správné nastavení ceny, kvalitní prezentace, výběr vhodného zájemce i právní zajištění.
              Právě v detailu se často rozhoduje o výsledku.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Zajišťujeme profesionální přípravu nemovitosti včetně konzultace ceny, homestagingu a kvalitních
              fotografií či videoprohlídek. Postaráme se o inzerci, marketing a komunikaci se zájemci, organizaci
              prohlídek i samotné vyjednávání podmínek. Samozřejmostí je kompletní právní servis – příprava
              smluv, úschova kupní ceny, kontrola dokumentace i bezpečné vypořádání celé transakce.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Výsledkem je hladký průběh bez zbytečných komplikací a maximální možný výsledek pro vás.
              Nemusíte řešit desítky detailů ani nést rizika spojená s prodejem či pronájmem – máte jistotu, že vše
              probíhá profesionálně a pod kontrolou.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Chci pro svou nemovitost maximální hodnotu
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="s in steps" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Chcete prodat nebo pronajmout nemovitost?"
      body="Kontaktujte nás pro bezplatné ocenění a konzultaci strategie prodeje."
      primary-label="Bezplatné ocenění"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
