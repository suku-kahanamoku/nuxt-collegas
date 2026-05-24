<script setup lang="ts">
definePageMeta({ title: "Zajištění rizik | Finanční poradenství" });
useHead({
  title: "Zajištění rizik | Finanční poradenství",
  meta: [{ name: "description", content: "Správně nastavené zajištění rizik je základem každé stabilní finanční strategie. Analyzujeme vaše smlouvy, identifikujeme nedostatky a nastavíme ochranu, která vás skutečně chrání." }],
});
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Zajištění rizik"
      subtitle="Zajištění rizik je základním stavebním kamenem každé stabilní finanční strategie. Nejde jen o to mít sjednané pojištění, ale mít ho nastavené tak, aby vás skutečně chránilo v situacích, kdy to nejvíce potřebujete. Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je správně vyhodnotit rizika a nastavit krytí, které odpovídá vaší reálné situaci."
      hero-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
      hero-alt="Zajištění rizik – ochrana a stabilita"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">

          <!-- Obsah -->
          <div class="lg:col-span-8 space-y-section-gap">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Detailně analyzujeme vaše stávající pojistné smlouvy a identifikujeme nedostatečné krytí, zbytečné
                  duplicity i oblasti, kde naopak platíte více, než je nutné. Výsledkem je řešení, které dává smysl nejen z
                  pohledu ceny, ale především kvality ochrany.
                </p>
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Nechte si nastavit ochranu, na kterou se můžete opravdu spolehnout
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </NuxtLink>
              </div>
              <div class="order-1 md:order-2 bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img src="/img/risk-shield.svg" alt="Zajištění rizik" class="w-full h-full object-cover" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                  alt="Finanční poradce při konzultaci"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="space-y-stack-md">
                <h2 class="text-headline-lg font-serif text-primary-900">Komplexní ochrana</h2>
                <p class="text-body-md text-on-surface-variant">
                  V případě podnikání nebo většího majetku pracujeme i s komplexnějšími scénáři, kde je cílem zajistit
                  kontinuitu a minimalizovat dopady neočekávaných událostí. Řešíme nejen standardní životní a
                  majetkové pojištění, ale i specifická rizika spojená s podnikatelskou činností, nemovitostmi nebo
                  investičním portfoliem.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Správně nastavené zajištění vám přináší především klid. Víte, že ať se stane cokoliv, máte oporu a
                  vaše finanční stabilita není ohrožena jednou nečekanou událostí. Přistupujeme k vám individuálně.
                </p>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-stack-md">
            <div class="border border-outline-variant/30 bg-surface p-stack-lg">
              <h3 class="text-headline-md font-serif text-primary-900 mb-stack-md">Další služby</h3>
              <div class="space-y-2">
                <NuxtLink
                  v-for="link in [
                    { label: 'Daňové poradenství', to: '/services/tax-advisory' },
                    { label: 'Právní poradenství', to: '/services/legal-advisory' },
                    { label: 'Odškodnění', to: '/services/compensation' },
                    { label: 'Realitní služby', to: '/services/real-estate' },
                    { label: 'Správa nemovitostí', to: '/services/property-management' },
                    { label: 'Péče o investiční majetek', to: '/services/investment-asset-management' },
                    { label: 'Developerské projekty', to: '/services/development-projects' },
                  ]"
                  :key="link.to"
                  :to="link.to"
                  class="flex items-center justify-between py-2 text-body-md text-on-surface hover:text-secondary-700 border-b border-outline-variant/20 last:border-b-0 transition-colors group"
                >
                  {{ link.label }}
                  <span class="material-symbols-outlined text-base text-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </NuxtLink>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>

    <UiCtaSection
      title="Chcete zjistit, jak jste zajištěni?"
      body="Kontaktujte nás pro nezávaznou analýzu vašich pojistných smluv."
      primary-label="Sjednat konzultaci"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
