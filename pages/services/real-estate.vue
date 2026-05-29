<script setup lang="ts">
definePageMeta({ title: "Realitní služby | Finanční poradenství" });
useHead({
  title: "Realitní služby | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání.",
    },
  ],
});

const steps = [
  {
    icon: "search",
    title: "Analýza a ocenění",
    description:
      "Tržní analýza a stanovení správné ceny nemovitosti pro maximalizaci výnosu.",
  },
  {
    icon: "campaign",
    title: "Marketing a prezentace",
    description:
      "Profesionální fotografie, 3D virtuální prohlídky a cílené oslovení potenciálních kupců.",
  },
  {
    icon: "groups",
    title: "Prohlídky a jednání",
    description:
      "Organizace a vedení prohlídek, komunikace se zájemci a sjednání nejvýhodnějších podmínek.",
  },
  {
    icon: "gavel",
    title: "Právní a finanční servis",
    description:
      "Kompletní smluvní dokumentace, úschova kupní ceny a bezpečné vypořádání transakce.",
  },
];
const relatedLinks = [
  { label: "Správa nemovitostí", to: "/services/property-management" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  { label: "Developerské projekty", to: "/services/development-projects" },
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
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Finanční poradenství</span
            >
          </template>
          <template #title>
            <h1 class="text-display-xl font-serif text-on-primary leading-none">
              Realitní služby
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Realitní služby u nás nejsou jen o zprostředkování prodeje nebo
          pronájmu, ale o kompletním zajištění celého procesu od prvního
          rozhodnutí až po úspěšné předání nemovitosti. Každý krok má svůj
          význam – správné nastavení ceny, kvalitní prezentace, výběr vhodného
          zájemce i právní zajištění. Právě v detailu se často rozhoduje o
          výsledku.
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
                  Zajišťujeme profesionální přípravu nemovitosti včetně
                  konzultace ceny, homestagingu a kvalitních fotografií či
                  videoprohlídek. Postaráme se o inzerci, marketing a komunikaci
                  se zájemci, organizaci prohlídek i samotné vyjednávání
                  podmínek. Samozřejmostí je kompletní právní servis – příprava
                  smluv, úschova kupní ceny, kontrola dokumentace i bezpečné
                  vypořádání celé transakce.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je hladký průběh bez zbytečných komplikací a
                  maximální možný výsledek pro vás. Nemusíte řešit desítky
                  detailů ani nést rizika spojená s prodejem či pronájmem – máte
                  jistotu, že vše probíhá profesionálně a pod kontrolou.
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
                  Chci pro svou nemovitost maximální hodnotu
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
              <UiBaseCard v-for="s in steps" :key="s.title">
                <template #header>
                  <UiTitle size="sm">
                    <template #eyebrow>
                      <span
                        class="material-symbols-outlined text-secondary-700"
                        style="font-size: 2rem"
                        >{{ s.icon }}</span
                      >
                    </template>
                    <template #title>
                      <h3 class="text-title-lg font-serif text-primary-900">
                        {{ s.title }}
                      </h3>
                    </template>
                  </UiTitle>
                </template>
                <p class="text-body-md text-on-surface-variant">
                  {{ s.description }}
                </p>
              </UiBaseCard>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Bezplatné ocenění',
              description:
                'Získejte bezplatné odborné ocenění vaší nemovitosti.',
              label: 'Požádat o ocenění',
              to: '/contact',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
