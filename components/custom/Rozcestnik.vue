<script setup lang="ts">
const destinations = [
  {
    icon: "i-material-symbols-account-balance-wallet",
    title: "Finance",
    label: "Začít audit",
    description:
      "Nezávislý finanční audit, finanční plán, zajištění rizik a odškodnění v jednom celku. Pomáháme vám mít finance pod kontrolou, chránit majetek a rozhodovat se s jistotou.",
    to: "/services/finance",
    highlight: true,
  },
  {
    icon: "i-material-symbols-trending-up",
    title: "Správa kapitálu",
    label: "Správa investic",
    description:
      "Péče o investiční majetek, financování bydlení a dalších projektů, hledání vhodných investičních příležitostí. Budujeme váš majetek s dlouhodobou strategií.",
    to: "/services/capital-management",
  },
  {
    icon: "i-material-symbols-balance",
    title: "Daně a právo",
    label: "Chci poradit s daněmi",
    description:
      "Daňové poradenství a právní zázemí pro majetek, podnikání a investice. Zajišťujeme právní zabezpečení a minimalizujeme daňovou zátěž.",
    to: "/services/tax-legal",
  },
  {
    icon: "i-material-symbols-home-work",
    title: "Reality a energie",
    label: "Realitní služby",
    description:
      "Realitní služby, správa nemovitostí, optimalizace energetických nákladů a developerské projekty. Efektivní správa a využití majetku.",
    to: "/services/real-estate-energy",
  },
];
</script>

<template>
  <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
          Kde vám můžeme pomoci?
        </h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          Vyberte oblast, která vás zajímá, a zjistěte, co pro vás COLLEGA může
          udělat.
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
        <UiBaseCard
          v-for="dest in destinations"
          :key="dest.to"
          :to="dest.to"
          :highlight="dest.highlight"
        >
          <UIcon
            :name="dest.icon"
            class="text-4xl"
            :class="
              dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'
            "
          />

          <h3
            class="text-title-md md:text-title-lg font-serif leading-tight"
            :class="dest.highlight ? 'text-on-primary' : 'text-primary-800'"
          >
            {{ dest.title }}
          </h3>

          <p
            class="text-body-md flex-1"
            :class="
              dest.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'
            "
          >
            {{ dest.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
              :class="
                dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'
              "
            >
              {{ dest.label }}
              <UIcon
                name="i-material-symbols-arrow-forward"
                class="text-body-md transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </template>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
