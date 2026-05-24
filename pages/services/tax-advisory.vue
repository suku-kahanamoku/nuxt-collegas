<script setup lang="ts">
definePageMeta({ title: "Daňové poradenství | Finanční poradenství" });
useHead({
  title: "Daňové poradenství | Finanční poradenství",
  meta: [{ name: "description", content: "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte." }],
});

const relatedLinks = [
  { label: 'Zajištění rizik', to: '/services/risk-management' },
  { label: 'Právní poradenství', to: '/services/legal-advisory' },
  { label: 'Péče o investiční majetek', to: '/services/investment-asset-management' },
  { label: 'Realitní služby', to: '/services/real-estate' },
];
</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Finanční poradenství"
      title="Daňové poradenství"
      description="Daně asi nikdy nebudou vaše oblíbené téma. To ale neznamená, že byste jim měli zbytečně nechávat víc, než je nutné. Stát si vezme svoje – otázka je, kolik mu necháte navíc jen proto, že systém není nastavený chytře."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          <div class="lg:col-span-8 space-y-stack-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="order-2 md:order-1 space-y-stack-lg">
            <p class="text-body-md text-on-surface-variant">
              Díváme se na vaše daně v souvislostech, ne izolovaně. Příjmy, podnikání, investice i majetek tvoří
              jeden celek – a právě v tom celku často vznikají příležitosti, které běžně zůstávají nevyužité. Ukážeme
              vám, kde dává smysl upravit strukturu, co využít a co naopak nedělat, abyste se vyhnuli zbytečným
              nákladům i rizikům. Nehledáme kličky, hledáme logiku, která funguje dlouhodobě.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Výsledkem není jen nižší daňová zátěž, ale hlavně klid. Víte, že máte věci nastavené správně, že
              neplatíte víc, než musíte, a že vás nic nepřekvapí ve chvíli, kdy to nejméně čekáte.
            </p>
            <div class="flex flex-col gap-stack-sm">
              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Ozvěte se a přestaňte platit „daň z neznalosti"
                <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Chci (ne)platit daně
                <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
              </NuxtLink>
            </div>
              </div>
              <div class="order-1 md:order-2 bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            callout-title="Platíte víc, než musíte?"
            callout-description="Nechte nás zkontrolovat vaši daňovou situaci a najít legální možnosti úspor."
            callout-label="Sjednat konzultaci"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>

  </div>
</template>
