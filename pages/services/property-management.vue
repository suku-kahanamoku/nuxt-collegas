<script setup lang="ts">
definePageMeta({ title: "Správa nemovitostí | Finanční poradenství" });
useHead({
  title: "Správa nemovitostí | Finanční poradenství",
  meta: [{ name: "description", content: "Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí." }],
});

const included = [
  { icon: "person_search", title: "Výběr nájemníků", description: "Prověřování zájemců, bonita, reference a sjednání nájemní smlouvy." },
  { icon: "build", title: "Technická správa", description: "Koordinace oprav, revizí, rekonstrukcí a pravidelné technické kontroly." },
  { icon: "receipt", title: "Administrativa", description: "Vyúčtování služeb, evidence plateb, komunikace s nájemníky a úřady." },
  { icon: "bar_chart", title: "Ekonomická agenda", description: "Přehledné reporty, optimalizace výnosů a daňová evidence pronájmu." },
];
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Správa nemovitostí"
      subtitle="Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Investujte, my se postaráme</h2>
            <p class="text-body-md text-on-surface-variant">
              Vlastnictví investičních nemovitostí přináší výnosy, ale i povinnosti – výběr nájemníků, technická
              údržba, administrativa i daňová evidence. To vše přebíráme za vás, abyste se mohli soustředit na
              to, co je pro vás důležité.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Naší prioritou je maximalizovat výnosnost vašeho majetku při minimalizaci rizik a starostí. Pravidelně
              reportujeme o stavu nemovitostí, finančních výsledcích a plánovaných investicích.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="item in included" :key="item.title" :icon="item.icon" :title="item.title" :description="item.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Chcete nemovitosti bez starostí?"
      body="Svěřte správu svých nemovitostí do rukou odborníků a soustřeďte se na to, co je pro vás důležité."
      primary-label="Nezávazná konzultace"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
