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
              Realitní trh je komplexní a každá nemovitost je jedinečná. Přistupujeme k prodeji nebo pronájmu
              strategicky – s ohledem na tržní situaci, cíle klienta a specifika konkrétní nemovitosti.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Zajišťujeme celý proces od A do Z: počínaje stanovením ceny a přípravou nemovitosti, přes marketing
              a prohlídky, až po smluvní dokumentaci a bezpečné vypořádání kupní ceny.
            </p>
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
