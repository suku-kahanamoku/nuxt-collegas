<script setup lang="ts">
definePageMeta({ title: "Odškodnění | Finanční poradenství" });
useHead({
  title: "Odškodnění | Finanční poradenství",
  meta: [{ name: "description", content: "Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši." }],
});

const types = [
  { icon: "directions_car", title: "Autonehody", description: "Odškodnění z povinného ručení a havarijního pojištění – bolestné, ztráta výdělku, trvalé následky." },
  { icon: "construction", title: "Pracovní úrazy", description: "Uplatňování nároků vůči zaměstnavateli a pojišťovně při pracovním úrazu nebo nemoci z povolání." },
  { icon: "school", title: "Školní úrazy", description: "Odškodnění za úrazy způsobené při školní výuce, akcích nebo sportu." },
  { icon: "local_hospital", title: "Zdravotní pochybení", description: "Pomoc při uplatňování nároků za pochybení ve zdravotní péči." },
];

const relatedLinks = [
  { label: 'Zajištění rizik', to: '/services/risk-management' },
  { label: 'Právní poradenství', to: '/services/legal-advisory' },
  { label: 'Daňové poradenství', to: '/services/tax-advisory' },
];
</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Finanční poradenství"
      title="Odškodnění"
      description="Odškodnění je oblast, do které se člověk dostane nečekaně – často ve chvíli, kdy řeší zdravotní, pracovní nebo osobní komplikace. A právě tehdy je nejdůležitější mít po svém boku někoho, kdo se v procesu vyzná a dokáže vás jím bezpečně provést."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          <div class="lg:col-span-8 space-y-stack-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="order-2 md:order-1 space-y-stack-md">
            <p class="text-body-md text-on-surface-variant">
              Ať už jde o pracovní úrazy, autonehody, školní úrazy nebo jiné pojistné události, cílem je jediné – získat spravedlivé odškodnění v plné výši.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Pomáháme vám zorientovat se v nárocích, které vám skutečně vznikají, a postaráme se o jejich
              uplatnění vůči pojišťovnám nebo odpovědným subjektům. Řešíme celý proces – od prvotního
              posouzení přes komunikaci až po samotnou likvidaci pojistné události. Díky zkušenostem víme, kde
              často dochází k podhodnocení nebo opomenutí nároků, a umíme tyto situace efektivně řešit.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Výsledkem je nejen vyšší finanční kompenzace, ale především úleva. Nemusíte se orientovat ve
              složitém procesu ani bojovat o svá práva sami. Máte jistotu, že se o vaši situaci stará někdo, kdo ví,
              jak postupovat a jak dosáhnout maximálního možného výsledku.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Postavte se za mé nároky
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
              </div>
              <div class="order-1 md:order-2 bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  class="w-full h-full object-cover"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              <UiValueCard v-for="t in types" :key="t.title" :icon="t.icon" :title="t.title" :description="t.description" />
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            callout-title="Máte nárok na odškodnění?"
            callout-description="Bezplatně posoudíme váš případ a sdělíme vám, na co máte nárok."
            callout-label="Bezplatná konzultace"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>

  </div>
</template>
