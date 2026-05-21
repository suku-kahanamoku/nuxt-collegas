<script setup lang="ts">
definePageMeta({ title: "Daňové poradenství | Finanční poradenství" });
useHead({
  title: "Daňové poradenství | Finanční poradenství",
  meta: [{ name: "description", content: "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte." }],
});
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Daňové poradenství"
      subtitle="Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          <div class="lg:col-span-8 space-y-stack-lg">
            <h2 class="text-headline-lg font-serif text-primary-900">Daňová optimalizace jako celek</h2>
            <p class="text-body-md text-on-surface-variant">
              Přistupujeme k daňové problematice komplexně – neřešíme pouze daňové přiznání, ale celkovou
              daňovou situaci klienta. Propojujeme příjmy z různých zdrojů, podnikatelskou aktivitu, investice
              a majetek do jednoho uceleného obrazu.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Identifikujeme legální možnosti optimalizace, upozorňujeme na rizika a navrhujeme struktury, které
              jsou efektivní z daňového pohledu – aniž by narušovaly celkové finanční nastavení klienta.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Spolupracujeme s certifikovanými daňovými poradci, aby každé naše doporučení bylo odborně podloženo
              a odpovídalo aktuální legislativě.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Chci přestat přeplácet daně
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
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
