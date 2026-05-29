<script setup lang="ts">
definePageMeta({ title: "Právní poradenství | Finanční poradenství" });
useHead({
  title: "Právní poradenství | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Dlouhodobé partnerství postavené na důvěře. Smluvní agenda, převody nemovitostí, vlastnické struktury a ochrana majetku.",
    },
  ],
});

const services = [
  {
    icon: "description",
    title: "Smluvní agenda",
    description:
      "Příprava, revize a připomínkování smluv – kupní, nájemní, věřitelské i rámcové.",
  },
  {
    icon: "home",
    title: "Převody nemovitostí",
    description:
      "Kompletní právní servis při prodeji, koupi nebo darování nemovitého majetku.",
  },
  {
    icon: "account_tree",
    title: "Vlastnické struktury",
    description:
      "Nastavení holdingových a rodinných struktur s cílem ochrany a předání majetku.",
  },
  {
    icon: "shield",
    title: "Ochrana majetku",
    description:
      "Právní zajištění majetku před riziky podnikání, věřiteli i dědickými spory.",
  },
];

const relatedLinks = [
  { label: "Daňové poradenství", to: "/services/tax-advisory" },
  { label: "Realitní služby", to: "/services/real-estate" },
  { label: "Správa nemovitostí", to: "/services/property-management" },
  { label: "Odškodnění", to: "/services/compensation" },
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
              Právní poradenství
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Právní poradenství u nás není jednorázová služba, ale dlouhodobá
          spolupráce postavená na důvěře, diskrétnosti a profesionalitě. Proto
          ke každému klientovi přistupujeme individuálně a s respektem k jeho
          situaci i soukromí.
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
                  Specializujeme se především na oblasti, které přímo souvisejí
                  s vaším majetkem a jeho správou – smluvní agenda, převody
                  nemovitostí, nastavení vlastnických struktur, investiční
                  vztahy nebo ochrana majetku. Neřešíme trestní právo ani
                  obecnou právní agendu, ale soustředíme se na to, kde dokážeme
                  přinést skutečnou hodnotu a odbornost. Díky tomu víte, že
                  pracujete s odborníky, kteří se pohybují ve svém oboru a
                  rozumí jeho detailům.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Naším cílem není jen reagovat na vzniklé situace, ale
                  především jim předcházet. Pomáháme nastavovat právní vztahy
                  tak, aby byly funkční, srozumitelné a dlouhodobě udržitelné.
                  Výsledkem je klid, jistota a vědomí, že vaše rozhodnutí stojí
                  na pevných základech a jsou podpořena profesionálním zázemím.
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
                  Opřete se o právní partnerství
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
              <UiBaseCard v-for="s in services" :key="s.title">
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
            callout-title="Potřebujete právní podporu?"
            callout-description="Kontaktujte nás a zjistěte, jak vám právní poradenství skupiny COLLEGA může pomoci."
            callout-label="Sjednat konzultaci"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>
  </div>
</template>
