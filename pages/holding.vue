<script setup lang="ts">
definePageMeta({ title: "Holding | COLLEGAS" });
useHead({
  title: "Holding | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Přehled holdingové struktury skupiny COLLEGAS – přehled dceřiných společností a jejich zaměření.",
    },
  ],
});

const pillars = [
  {
    icon: "i-material-symbols-account-balance",
    title: "Finance & Investice",
    description:
      "COLLEGA BROKERS a.s. a COLLEGA INVESTICE s.r.o. zajišťují finanční poradenství, investiční strategie, developerské projekty a správu investičního majetku.",
  },
  {
    icon: "i-material-symbols-gavel",
    title: "Právo & Administrativa",
    description:
      "COLLEGAS SOLUTION s.r.o., BULA & COLLEGAS s.r.o. a COLLEGAS s.r.o. poskytují právní poradenství, odškodnění, compliance a administrativní podporu celé skupině.",
  },
  {
    icon: "i-material-symbols-apartment",
    title: "Reality & Design",
    description:
      "COLLEGA DESIGN s.r.o. a COLLEGAS REALITY s.r.o. pokrývají architektonický návrh, interiérový design, správu nemovitostí a jejich prodej.",
  },
];
</script>

<template>
  <div class="w-full">
    <!-- ── Hero ── -->
    <UiIntro variant="light" :ui="{ bg: false }">
      <template #header>
        <UiTitle eyebrow="COLLEGAS" size="md">
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-primary-800 leading-tight"
            >
              Holding
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-end">
          <div class="lg:col-span-8">
            <p class="text-body-lg text-on-surface-variant max-w-2xl">
              Collegas sdružuje přední společnosti z oblasti
              financí, práva, realit a designu. Naše holdingová struktura
              umožňuje efektivní spolupráci mezi jednotlivými dceřinými
              společnostmi a poskytuje komplexní služby našim klientům.
            </p>
          </div>

          <div class="lg:col-span-4 flex justify-end items-end">
            <div class="text-right">
              <span
                class="text-headline-lg md:text-display-xl font-serif text-primary-800/10 leading-none select-none"
                >14+</span
              >
              <p
                class="text-label-caps text-secondary-fixed uppercase tracking-widest font-semibold"
              >
                společností ve skupině
              </p>
            </div>
          </div>
        </div>
      </template>
    </UiIntro>

    <!-- ── Holding Tree ── -->
    <CustomHoldingTree />

    <!-- ── Pilíře ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Tři klíčové oblasti skupiny
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiBaseCard v-for="p in pillars" :key="p.title" class="h-full">
            <template #header>
              <UiTitle size="sm">
                <template #eyebrow>
                  <UIcon :name="p.icon" class="text-secondary-700 size-8" />
                </template>
                <template #title>
                  <h3 class="text-title-md md:text-title-lg font-serif text-primary-800">
                    {{ p.title }}
                  </h3>
                </template>
              </UiTitle>
            </template>
            <p class="text-body-md text-on-surface-variant">
              {{ p.description }}
            </p>
          </UiBaseCard>
        </div>
      </UContainer>
    </section>

    <!-- ── Timeline ── -->
    <!-- <CustomTimeline /> -->
  </div>
</template>
