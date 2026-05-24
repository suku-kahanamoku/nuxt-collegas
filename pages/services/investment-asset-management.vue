<script setup lang="ts">
definePageMeta({ title: "Péče o investiční majetek | Finanční poradenství" });
useHead({
  title: "Péče o investiční majetek | Finanční poradenství",
  meta: [{ name: "description", content: "Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli." }],
});

const features = [
  { icon: "analytics", title: "Analýza portfolia", description: "Detailní vyhodnocení stávajícího investičního portfolia – výkonnost, rizika a poplatky." },
  { icon: "pie_chart", title: "Diverzifikace", description: "Optimální rozložení aktiv mezi různé třídy investic v souladu s vašimi cíli a horizontem." },
  { icon: "trending_up", title: "Sledování výkonnosti", description: "Průběžný monitoring a pravidelné reporty o vývoji a výkonnosti portfolia." },
  { icon: "autorenew", title: "Rebalancování", description: "Aktivní správa a přizpůsobování portfolia změnám na trzích i ve vaší životní situaci." },
];
</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Finanční poradenství"
      title="Péče o investiční majetek"
      subtitle="Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Váš majetek pracuje pro vás</h2>
            <p class="text-body-md text-on-surface-variant">
              Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Péči o investiční majetek vnímáme jako dlouhodobé partnerství, jehož cílem je chránit a rozvíjet váš
              kapitál v souladu s vašimi ambicemi i životním stylem. Nejde pouze o výběr investic, ale o citlivé a
              kontinuální řízení celého portfolia s ohledem na vaše priority, časový horizont i toleranci k riziku.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Vaše investice průběžně analyzujeme, vyhodnocujeme jejich výkonnost a aktivně je přizpůsobujeme
              aktuální situaci na trzích i vašim individuálním potřebám. Dbáme na vyváženost portfolia, diverzifikaci
              i ochranu majetku v obdobích volatility. Každé rozhodnutí má své opodstatnění a zapadá do širší
              strategie, která směřuje k dlouhodobému růstu a stabilitě.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Díky tomuto přístupu získáváte nejen výkonnější správu majetku, ale především klid a jistotu, že se o
              vaše finance stará někdo, kdo rozumí souvislostem a přemýšlí v širším kontextu. Vaše investice tak
              nejsou jen „uložené", ale řízené s jasným záměrem a důrazem na dlouhodobou hodnotu.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Svěřte kapitál do individuální péče
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Chcete, aby váš majetek pracoval efektivně?"
      body="Nechte nás vyhodnotit vaše stávající investice a navrhnout optimální strategii."
      primary-label="Analýza portfolia zdarma"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
