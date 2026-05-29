<script setup lang="ts">
definePageMeta({ title: "Holdingová struktura | COLLEGA ENTERPRISE" });
useHead({
  title: "Holdingová struktura | COLLEGA ENTERPRISE",
  meta: [
    {
      name: "description",
      content:
        "Přehled holdingové struktury skupiny COLLEGA ENTERPRISE a.s. – přehled dceřiných společností a jejich zaměření.",
    },
  ],
});

const pillars = [
  {
    icon: "account_balance",
    title: "Finance & Investice",
    description:
      "COLLEGA BROKERS a.s. a COLLEGA INVESTICE s.r.o. zajišťují finanční poradenství, investiční strategie, developerské projekty a správu investičního majetku.",
  },
  {
    icon: "gavel",
    title: "Právo & Administrativa",
    description:
      "COLLEGAS SOLUTION s.r.o., BULA & COLLEGAS s.r.o. a COLLEGAS s.r.o. poskytují právní poradenství, odškodnění, compliance a administrativní podporu celé skupině.",
  },
  {
    icon: "apartment",
    title: "Reality & Design",
    description:
      "COLLEGA DESIGN s.r.o. a COLLEGAS REALITY s.r.o. pokrývají architektonický návrh, interiérový design, správu nemovitostí a jejich prodej.",
  },
];
</script>

<template>
  <div class="w-full">
    <!-- ── Hero ── -->
    <UiPageHero
      eyebrow="Skupina COLLEGA"
      title="Holdingová<br />struktura"
      decor-text="9+"
      decor-label="společností ve skupině"
    >
      <p class="text-body-lg text-on-surface-variant max-w-2xl">
        Skupina COLLEGA ENTERPRISE a.s. sdružuje přední společnosti z oblasti
        financí, investic, realitního rozvoje, práva a podpůrných služeb.
        Propojená struktura nám umožňuje poskytovat komplexní řešení pod jednou
        střechou – od financování a pojištění přes architektonický design až po
        správu a prodej nemovitostí.
      </p>
    </UiPageHero>

    <!-- ── Holding Tree ── -->
    <CustomHoldingTree />

    <!-- ── Pilíře ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Naše pilíře"
          title="Tři klíčové oblasti skupiny"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiBaseCard
            v-for="p in pillars"
            :key="p.title"
          >
            <template #header>
              <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem">{{ p.icon }}</span>
              <h3 class="text-title-lg font-serif text-primary-900">{{ p.title }}</h3>
            </template>
            <p class="text-body-md text-on-surface-variant">{{ p.description }}</p>
          </UiBaseCard>
        </div>
      </div>
    </section>

    <!-- ── Timeline ── -->
    <CustomTimeline />
  </div>
</template>
