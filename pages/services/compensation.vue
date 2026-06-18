<script setup lang="ts">
definePageMeta({ title: "Odškodnění | Finanční poradenství" });
useHead({
  title: "Odškodnění | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši.",
    },
  ],
});

const types = [
  {
    icon: "directions_car",
    title: "Autonehody",
    description:
      "Odškodnění z povinného ručení a havarijního pojištění – bolestné, ztráta výdělku, trvalé následky.",
  },
  {
    icon: "construction",
    title: "Pracovní úrazy",
    description:
      "Uplatňování nároků vůči zaměstnavateli a pojišťovně při pracovním úrazu nebo nemoci z povolání.",
  },
  {
    icon: "school",
    title: "Školní úrazy",
    description:
      "Odškodnění za úrazy způsobené při školní výuce, akcích nebo sportu.",
  },
  {
    icon: "local_hospital",
    title: "Zdravotní pochybení",
    description: "Pomoc při uplatňování nároků za pochybení ve zdravotní péči.",
  },
];

const relatedLinks = [
  { label: "Zajištění rizik", to: "/services/risk-management" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  { label: "Daňové poradenství", to: "/services/tax-advisory" },
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
              Odškodnění
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-2xl mt-stack-md opacity-90"
        >
          Odškodnění je oblast, do které se člověk dostane nečekaně – často ve
          chvíli, kdy řeší zdravotní, pracovní nebo osobní komplikace. A právě
          tehdy je nejdůležitější mít po svém boku někoho, kdo se v procesu
          vyzná a dokáže vás jím bezpečně provést.
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
                  Ať už jde o pracovní úrazy, autonehody, školní úrazy nebo jiné
                  pojistné události, cílem je jediné – získat spravedlivé
                  odškodnění v plné výši.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Pomáháme vám zorientovat se v nárocích, které vám skutečně
                  vznikají, a postaráme se o jejich uplatnění vůči pojišťovnám
                  nebo odpovědným subjektům. Řešíme celý proces – od prvotního
                  posouzení přes komunikaci až po samotnou likvidaci pojistné
                  události. Díky zkušenostem víme, kde často dochází k
                  podhodnocení nebo opomenutí nároků, a umíme tyto situace
                  efektivně řešit.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je nejen vyšší finanční kompenzace, ale především
                  úleva. Nemusíte se orientovat ve složitém procesu ani bojovat
                  o svá práva sami. Máte jistotu, že se o vaši situaci stará
                  někdo, kdo ví, jak postupovat a jak dosáhnout maximálního
                  možného výsledku.
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
                  Postavte se za mé nároky
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
              <UiBaseCard v-for="t in types" :key="t.title">
                <template #header>
                  <UiTitle size="sm">
                    <template #eyebrow>
                      <span
                        class="material-symbols-outlined text-secondary-700"
                        style="font-size: 2rem"
                        >{{ t.icon }}</span
                      >
                    </template>
                    <template #title>
                      <h3 class="text-title-lg font-serif text-primary-900">
                        {{ t.title }}
                      </h3>
                    </template>
                  </UiTitle>
                </template>
                <p class="text-body-md text-on-surface-variant">
                  {{ t.description }}
                </p>
              </UiBaseCard>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Máte nárok na odškodnění?',
              description:
                'Bezplatně posoudíme váš případ a sdělíme vám, na co máte nárok.',
              label: 'Bezplatná konzultace',
              to: '/contact',
            }"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
