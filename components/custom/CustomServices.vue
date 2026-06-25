<script setup lang="ts">
const services = [
  {
    icon: "i-material-symbols-account-balance-wallet",
    title: "Finance",
    description:
      "Nezávislý finanční audit, finanční plán, zajištění rizik a odškodnění v jednom celku. Pomáháme vám mít finance pod kontrolou, chránit majetek a rozhodovat se s jistotou.",
    to: "/services/finance",
  },
  {
    icon: "i-material-symbols-trending-up",
    title: "Správa kapitálu",
    description:
      "Péče o investiční majetek, financování bydlení a dalších projektů, hledání vhodných investičních příležitostí. Budujeme váš majetek s dlouhodobou strategií.",
    to: "/services/capital-management",
  },
  {
    icon: "i-material-symbols-balance",
    title: "Daně a právo",
    description:
      "Daňové poradenství a právní zázemí pro majetek, podnikání a investice. Zajišťujeme právní zabezpečení a minimalizujeme daňovou zátěž.",
    to: "/services/tax-legal",
  },
  {
    icon: "i-material-symbols-home-work",
    title: "Reality a energie",
    description:
      "Realitní služby, správa nemovitostí, optimalizace energetických nákladů a developerské projekty. Efektivní správa a využití majetku.",
    to: "/services/real-estate-energy",
  },
];
</script>

<template>
  <!-- ── Naše služby ── -->
  <section class="bg-surface-container-low py-section-gap">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-800">
          Naše služby
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        <UiBaseCard
          v-for="s in services"
          :key="s.to"
          :to="s.to"
        >
          <template #header>
            <UiTitle size="sm">
              <template #eyebrow>
                <UIcon :name="s.icon" class="text-secondary-700 text-4xl" />
              </template>
              <template #title>
                <h3 class="text-title-md font-serif text-primary-800">
                  {{ s.title }}
                </h3>
              </template>
            </UiTitle>
          </template>

          <p class="text-body-md text-on-surface-variant flex-1">
            {{ s.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-secondary-700 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
            >
              Více informací
              <UIcon name="i-material-symbols-arrow-forward" class="text-body-md transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </template>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
