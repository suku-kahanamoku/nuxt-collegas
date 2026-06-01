<script setup lang="ts">
const destinations = [
  {
    icon: "search",
    title: "Chci finanční audit",
    description: "Zjistěte, jak skutečně fungují vaše finance. Nezávislé posouzení smluv, struktur a nastavení.",
    label: "Začít audit",
    to: "/contact",
    highlight: true,
  },
  {
    icon: "account_balance",
    title: "Hledám poradenství",
    description: "Investice, pojištění, realitní služby nebo daně – ukažte nám téma a najdeme správné řešení.",
    label: "Naše služby",
    to: "/services",
    highlight: false,
  },
  {
    icon: "group",
    title: "Chci vás poznat",
    description: "Přes 10 let praxe, desítky odborníků a stovky klientů. Podívejte se, kdo za COLLEGA stojí.",
    label: "O nás",
    to: "/about",
    highlight: false,
  },
  {
    icon: "work",
    title: "Hledám práci v oboru",
    description: "Staňte se součástí týmu, kde si věříme, vzdělávame se a stavíme kariéru na pevných základech.",
    label: "Kariéra",
    to: "/career",
    highlight: false,
  },
];
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-900">Kde vám můžeme pomoci?</h2>
        <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">
          Vyberte oblast, která vás zajímá, a zjistěte, co pro vás COLLEGA může udělat.
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
          <span
            class="material-symbols-outlined text-4xl"
            :class="dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'"
          >{{ dest.icon }}</span>

          <h3
            class="text-title-md font-serif leading-tight"
            :class="dest.highlight ? 'text-on-primary' : 'text-primary-900'"
          >
            {{ dest.title }}
          </h3>

          <p
            class="text-body-md flex-1"
            :class="dest.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'"
          >
            {{ dest.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
              :class="dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'"
            >
              {{ dest.label }}
              <span class="material-symbols-outlined text-body-md transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
            </span>
          </template>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
