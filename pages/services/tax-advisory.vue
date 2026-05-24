<script setup lang="ts">
definePageMeta({ title: "Daňové poradenství | Finanční poradenství" });
useHead({
  title: "Daňové poradenství | Finanční poradenství",
  meta: [{ name: "description", content: "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte." }],
});
</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Finanční poradenství"
      title="Daňové poradenství"
      subtitle="Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          <div class="lg:col-span-8 space-y-stack-lg">
            <h2 class="text-headline-lg font-serif text-primary-900">Daňová optimalizace jako celek</h2>
            <p class="text-body-md text-on-surface-variant">
              Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Daně asi nikdy nebudou vaše oblíbené téma. To ale neznamená, že byste jim měli zbytečně nechávat
              víc, než je nutné. Stát si vezme svoje – otázka je, kolik mu necháte navíc jen proto, že systém není
              nastavený chytře.
            </p>
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
                class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Ozvěte se a přestaňte platit „daň z neznalosti"
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Chci (ne)platit daně
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </NuxtLink>
            </div>
          </div>
          <aside class="lg:col-span-4">
            <div class="border border-outline-variant/30 bg-surface p-stack-lg space-y-stack-md">
              <h3 class="text-headline-md font-serif text-primary-900">Zahrnuje</h3>
              <ul class="space-y-stack-sm">
                <li v-for="item in ['Analýza daňové situace', 'Daňové přiznání DPFO/DPPO', 'Optimalizace odvodů', 'Daně z investic a nemovitostí', 'Mezinárodní daňová problematika', 'Zastupování před FÚ']" :key="item" class="flex items-center gap-2 text-body-md text-on-surface-variant">
                  <span class="material-symbols-outlined text-secondary-700 text-base">check_circle</span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <UiCtaSection
      title="Platíte víc, než musíte?"
      body="Nechte nás zkontrolovat vaši daňovou situaci a najít legální možnosti úspor."
      primary-label="Sjednat konzultaci"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
