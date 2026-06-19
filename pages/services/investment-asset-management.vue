<script setup lang="ts">
definePageMeta({ title: "Péče o investiční majetek | Finanční poradenství" });
useHead({
  title: "Péče o investiční majetek | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli.",
    },
  ],
});

const features = [
  {
    icon: "i-material-symbols-analytics",
    title: "Analýza portfolia",
    description:
      "Detailní vyhodnocení stávajícího investičního portfolia – výkonnost, rizika a poplatky.",
  },
  {
    icon: "i-material-symbols-pie-chart",
    title: "Diverzifikace",
    description:
      "Optimální rozložení aktiv mezi různé třídy investic v souladu s vašimi cíli a horizontem.",
  },
  {
    icon: "i-material-symbols-trending-up",
    title: "Sledování výkonnosti",
    description:
      "Průběžný monitoring a pravidelné reporty o vývoji a výkonnosti portfolia.",
  },
  {
    icon: "i-material-symbols-autorenew",
    title: "Rebalancování",
    description:
      "Aktivní správa a přizpůsobování portfolia změnám na trzích i ve vaší životní situaci.",
  },
];

const relatedLinks = [
  { label: "Developerské projekty", to: "/services/development-projects" },
  { label: "Správa nemovitostí", to: "/services/property-management" },
  { label: "Daňové poradenství", to: "/services/tax-advisory" },
  { label: "Zajištění rizik", to: "/services/risk-management" },
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
              Péče o investiční majetek
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Péči o investiční majetek vnímáme jako dlouhodobé partnerství, jehož
          cílem je chránit a rozvíjet váš kapitál v souladu s vašimi ambicemi i
          životním stylem. Nejde pouze o výběr investic, ale o citlivé a
          kontinuální řízení celého portfolia s ohledem na vaše priority, časový
          horizont i toleranci k riziku.
        </p>
      </template>
    </UiIntro>

    <section class="bg-surface-container-low py-section-gap">
      <UContainer>
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
        >
          <div class="lg:col-span-8 space-y-stack-xl">
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Vaše investice průběžně analyzujeme, vyhodnocujeme jejich
                  výkonnost a aktivně je přizpůsobujeme aktuální situaci na
                  trzích i vašim individuálním potřebám. Dbáme na vyváženost
                  portfolia, diverzifikaci i ochranu majetku v obdobích
                  volatility. Každé rozhodnutí má své opodstatnění a zapadá do
                  širší strategie, která směřuje k dlouhodobému růstu a
                  stabilitě.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Díky tomuto přístupu získáváte nejen výkonnější správu
                  majetku, ale především klid a jistotu, že se o vaše finance
                  stará někdo, kdo rozumí souvislostem a přemýšlí v širším
                  kontextu. Vaše investice tak nejsou jen „uložené", ale řízené
                  s jasným záměrem a důrazem na dlouhodobou hodnotu.
                </p>
                <UiButton
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
                  Svěřte kapitál do individuální péče
                </UiButton>
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
              <UiBaseCard v-for="f in features" :key="f.title">
                <template #header>
                  <UiTitle size="sm">
                    <template #eyebrow>
                      <UIcon :name="f.icon" class="text-secondary-700 size-8" />
                    </template>
                    <template #title>
                      <h3 class="text-title-lg font-serif text-primary-800">
                        {{ f.title }}
                      </h3>
                    </template>
                  </UiTitle>
                </template>
                <p class="text-body-md text-on-surface-variant">
                  {{ f.description }}
                </p>
              </UiBaseCard>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Analýza portfolia zdarma',
              description:
                'Získejte bezplatnou analýzu vašeho investičního portfolia a doporučení na míru.',
              label: 'Požádat o analýzu',
              to: '/contact',
            }"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
