<script setup lang="ts">
definePageMeta({ title: "Zajištění rizik | Finanční poradenství" });
useHead({
  title: "Zajištění rizik | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Správně nastavené zajištění rizik je základem každé stabilní finanční strategie. Analyzujeme vaše smlouvy, identifikujeme nedostatky a nastavíme ochranu, která vás skutečně chrání.",
    },
  ],
});

const relatedLinks = [
  { label: "Daňové poradenství", to: "/services/tax-advisory" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  { label: "Odškodnění", to: "/services/compensation" },
  {
    label: "Péče o investiční majetek",
    to: "/services/investment-asset-management",
  },
];
</script>

<template>
  <div class="w-full">
    <UiIntro bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ">
      <template #title>
        <UiTitle eyebrow="Finanční poradenství" size="md">
          <template #title>Zajištění rizik</template>
        </UiTitle>
      </template>

      <template #description>
        <p>Zajištění rizik je základním stavebním kamenem každé stabilní finanční strategie. Nejde jen o to mít sjednané pojištění, ale mít ho nastavené tak, aby vás skutečně chránilo v situacích, kdy to nejvíce potřebujete. Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je správně vyhodnotit rizika a nastavit krytí, které odpovídá vaší reálné situaci.</p>
      </template>
    </UiIntro>

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
        >
          <!-- Obsah -->
          <div class="lg:col-span-8 space-y-section-gap">
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Detailně analyzujeme vaše stávající pojistné smlouvy a
                  identifikujeme nedostatečné krytí, zbytečné duplicity i
                  oblasti, kde naopak platíte více, než je nutné. Výsledkem je
                  řešení, které dává smysl nejen z pohledu ceny, ale především
                  kvality ochrany.
                </p>
                <UButton
                  to="/contact"
                  variant="link"
                  color="secondary"
                  trailing-icon="i-material-symbols-arrow-forward"
                  class="!p-0"
                  :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-x-1' }"
                >
                  Nechte si nastavit ochranu, na kterou se můžete opravdu spolehnout
                </UButton>
              </div>
              <div
                class="order-1 md:order-2 bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  src="/img/risk-shield.svg"
                  alt="Zajištění rizik"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div
                class="bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                  alt="Finanční poradce při konzultaci"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              <div class="space-y-stack-md">
                <h2 class="text-headline-lg font-serif text-primary-900">
                  Komplexní ochrana
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  V případě podnikání nebo většího majetku pracujeme i s
                  komplexnějšími scénáři, kde je cílem zajistit kontinuitu a
                  minimalizovat dopady neočekávaných událostí. Řešíme nejen
                  standardní životní a majetkové pojištění, ale i specifická
                  rizika spojená s podnikatelskou činností, nemovitostmi nebo
                  investičním portfoliem.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Správně nastavené zajištění vám přináší především klid. Víte,
                  že ať se stane cokoliv, máte oporu a vaše finanční stabilita
                  není ohrožena jednou nečekanou událostí. Přistupujeme k vám
                  individuálně.
                </p>
              </div>
            </div>
          </div>

          <UiAside title="Naše služby" :menus="relatedLinks" />
        </div>
      </div>
    </section>
  </div>
</template>
