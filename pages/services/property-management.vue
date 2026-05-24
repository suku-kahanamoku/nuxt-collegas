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
              Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Správa nemovitostí znamená především to, že váš majetek funguje tak, jak má – bez zbytečných
              starostí, výpadků příjmů nebo neřešených problémů. Ať už vlastníte jednu investiční nemovitost nebo
              celé portfolio, klíčem je systematická péče, která zajišťuje stabilní výnos a dlouhodobou hodnotu.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Zajišťujeme kompletní správu – od výběru a prověření nájemníků, nastavení nájemních smluv a
              přebírání plateb až po řešení běžné komunikace, servisu a případných problémů. Postaráme se o
              technický stav nemovitosti, koordinaci oprav, revize i kontrolu nákladů. Součástí je také
              administrativní a ekonomická agenda, abyste měli vždy přehled o výnosech i výdajích.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Výsledkem je nemovitost, která vám vydělává, aniž by vás zatěžovala. Nemusíte řešit každodenní
              provoz ani nečekané situace – máte jistotu, že se o váš majetek stará někdo, kdo hlídá jeho hodnotu
              i výkonnost.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Zažijte správu bez starostí
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
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
