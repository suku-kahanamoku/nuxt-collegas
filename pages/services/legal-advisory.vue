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
      eyebrow="Finanční poradenství"
      title="Právní poradenství"
      description="Právní poradenství u nás není jednorázová služba, ale dlouhodobá spolupráce postavená na důvěře, diskrétnosti a profesionalitě. Proto ke každému klientovi přistupujeme individuálně a s respektem k jeho situaci i soukromí."
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
                <NuxtLink
                  to="/contact"
                  class="group inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Opřete se o právní partnerství
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
                v-for="s in services"
                :key="s.title"
                :icon="s.icon"
                :title="s.title"
                :description="s.description"
              />
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
