<script setup lang="ts">
definePageMeta({ title: "Správa nemovitostí | Finanční poradenství" });
useHead({
  title: "Správa nemovitostí | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí.",
    },
  ],
});

const included = [
  {
    icon: "person_search",
    title: "Výběr nájemníků",
    description:
      "Prověřování zájemců, bonita, reference a sjednání nájemní smlouvy.",
  },
  {
    icon: "build",
    title: "Technická správa",
    description:
      "Koordinace oprav, revizí, rekonstrukcí a pravidelné technické kontroly.",
  },
  {
    icon: "receipt",
    title: "Administrativa",
    description:
      "Vyúčtování služeb, evidence plateb, komunikace s nájemníky a úřady.",
  },
  {
    icon: "bar_chart",
    title: "Ekonomická agenda",
    description:
      "Přehledné reporty, optimalizace výnosů a daňová evidence pronájmu.",
  },
];

const relatedLinks = [
  { label: "Realitní služby", to: "/services/real-estate" },
  { label: "Developerské projekty", to: "/services/development-projects" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  {
    label: "Péče o investiční majetek",
    to: "/services/investment-asset-management",
  },
];
</script>

<template>
  <div class="w-full">
    <UiIntro
      eyebrow="Finanční poradenství"
      title="Správa nemovitostí"
      description="Správa nemovitostí znamená především to, že váš majetek funguje tak, jak má – bez zbytečných starostí, výpadků příjmů nebo neřešených problémů. Ať už vlastníte jednu investiční nemovitost nebo celé portfolio, klíčem je systematická péče, která zajišťuje stabilní výnos a dlouhodobou hodnotu."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
        >
          <div class="lg:col-span-8 space-y-stack-xl">
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Zajišťujeme kompletní správu – od výběru a prověření
                  nájemníků, nastavení nájemních smluv a přebírání plateb až po
                  řešení běžné komunikace, servisu a případných problémů.
                  Postaráme se o technický stav nemovitosti, koordinaci oprav,
                  revize i kontrolu nákladů. Součástí je také administrativní a
                  ekonomická agenda, abyste měli vždy přehled o výnosech i
                  výdajích.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je nemovitost, která vám vydělává, aniž by vás
                  zatěžovala. Nemusíte řešit každodenní provoz ani nečekané
                  situace – máte jistotu, že se o váš majetek stará někdo, kdo
                  hlídá jeho hodnotu i výkonnost.
                </p>
                <NuxtLink
                  to="/contact"
                  class="group inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Zažijte správu bez starostí
                  <span
                    class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1"
                    >arrow_forward</span
                  >
                </NuxtLink>
              </div>
              <div
                class="order-1 md:order-2 bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-stack-md"
            >
              <UiValueCard
                v-for="item in included"
                :key="item.title"
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
              />
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            callout-title="Chcete nemovitosti bez starostí?"
            callout-description="Svěřte správu svých nemovitostí do rukou odborníků a soustřeďte se na to, co je pro vás důležité."
            callout-label="Nezávazná konzultace"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>
  </div>
</template>
