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
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Odškodnění"
      subtitle="Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Spravedlivé odškodnění bez kompromisů</h2>
            <p class="text-body-md text-on-surface-variant">
              Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Odškodnění je oblast, do které se člověk dostane nečekaně – často ve chvíli, kdy řeší zdravotní,
              pracovní nebo osobní komplikace. A právě tehdy je nejdůležitější mít po svém boku někoho, kdo se v
              procesu vyzná a dokáže vás jím bezpečně provést. Ať už jde o pracovní úrazy, autonehody, školní
              úrazy nebo jiné pojistné události, cílem je jediné – získat spravedlivé odškodnění v plné výši.
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
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="t in types" :key="t.title" :icon="t.icon" :title="t.title" :description="t.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Máte nárok na odškodnění?"
      body="Bezplatně posoudíme váš případ a sdělíme vám, na co máte nárok."
      primary-label="Bezplatná konzultace"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
