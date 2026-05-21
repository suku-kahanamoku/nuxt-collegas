<script setup lang="ts">
definePageMeta({ title: "Péče o investiční majetek | Finanční poradenství" });
useHead({
  title: "Péče o investiční majetek | Finanční poradenství",
  meta: [{ name: "description", content: "Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli." }],
});

const features = [
  { icon: "analytics", title: "Analýza portfolia", description: "Detailní vyhodnocení stávajícího investičního portfolia – výkonnost, rizika a poplatky." },
  { icon: "pie_chart", title: "Diverzifikace", description: "Optimální rozložení aktiv mezi různé třídy investic v souladu s vašimi cíli a horizontem." },
  { icon: "trending_up", title: "Sledování výkonnosti", description: "Průběžný monitoring a pravidelné reporty o vývoji a výkonnosti portfolia." },
  { icon: "autorenew", title: "Rebalancování", description: "Aktivní správa a přizpůsobování portfolia změnám na trzích i ve vaší životní situaci." },
];
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Péče o investiční majetek"
      subtitle="Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Váš majetek pracuje pro vás</h2>
            <p class="text-body-md text-on-surface-variant">
              Péče o investiční majetek není jednorázová záležitost – je to kontinuální proces přizpůsobování
              strategie podmínkám na trzích, vašim cílům a životní situaci. Sledujeme vaše portfolio průběžně
              a reagujeme proaktivně, ne reaktivně.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Nezávisle analyzujeme investiční produkty a volíme řešení, která nejlépe odpovídají vašim
              potřebám – bez vazby na konkrétní instituce nebo produkty s vyšší provizí.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Pracujeme s celým spektrem investičních nástrojů – od kapitálového trhu a dluhopisů přes
              nemovitosti a alternativní investice až po strukturované produkty.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Chcete, aby váš majetek pracoval efektivně?"
      body="Nechte nás vyhodnotit vaše stávající investice a navrhnout optimální strategii."
      primary-label="Analýza portfolia zdarma"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
