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
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
    >
      <template #header>
        <UiTitle eyebrow="Finanční poradenství" size="md">
          <template #title>
            <h1 class="text-display-xl font-serif text-primary-900 leading-none">Správa nemovitostí</h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p>
          Správa nemovitostí znamená především to, že váš majetek funguje tak,
          jak má – bez zbytečných starostí, výpadků příjmů nebo neřešených
          problémů. Ať už vlastníte jednu investiční nemovitost nebo celé
          portfolio, klíčem je systematická péče, která zajišťuje stabilní výnos
          a dlouhodobou hodnotu.
        </p>
      </template>
    </UiIntro>

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
                <UButton
                  to="/contact"
                  variant="link"
                  color="secondary"
                  trailing-icon="i-material-symbols-arrow-forward"
                  class="!p-0"
                  :ui="{
                    trailingIcon:
                      'transition-transform duration-200 group-hover:translate-x-1',
                  }"
                >
                  Zažijte správu bez starostí
                </UButton>
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
              <UiBaseCard v-for="item in included" :key="item.title">
                <template #header>
                  <span
                    class="material-symbols-outlined text-secondary-700"
                    style="font-size: 2rem"
                    >{{ item.icon }}</span
                  >
                  <h3 class="text-title-lg font-serif text-primary-900">
                    {{ item.title }}
                  </h3>
                </template>
                <p class="text-body-md text-on-surface-variant">
                  {{ item.description }}
                </p>
              </UiBaseCard>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            callout-title="Nezávazná konzultace"
            callout-description="Rádi posoudíme vaši situaci a navrhneme řešení."
            callout-label="Nezávazná konzultace"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>
  </div>
</template>
