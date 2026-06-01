<script setup lang="ts">
type SectionItem = {
  name: string;
  year?: string;
  icon?: string;
};

type Section = {
  label: string;
  icon: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    label: "Odbornost",
    icon: "i-lucide-graduation-cap",
    items: [
      { name: "Finanční plánování a poradenství" },
      { name: "Investiční strategie a portfolia" },
      { name: "Pojistná ochrana a rizikový management" },
      { name: "Hypoteční a úvěrové financování" },
    ],
  },
  {
    label: "Seniorita",
    icon: "i-lucide-trophy",
    items: [
      { name: "15+ let praxe ve finančním poradenství" },
      { name: "Stovky spokojených klientů" },
      { name: "Zkušenosti s komplexními případy" },
      { name: "Pravidelné vzdělávání a certifikace" },
    ],
  },
  {
    label: "Certifikáty",
    icon: "i-lucide-badge-check",
    items: [
      {
        name: "Certifikát CFP® (Certified Financial Planner)",
        year: "2015",
        icon: "i-lucide-award",
      },
      { name: "Makléřská licence ČNB", year: "2012", icon: "i-lucide-award" },
      {
        name: "Certifikát EFA (European Financial Advisor)",
        year: "2018",
        icon: "i-lucide-award",
      },
      {
        name: "Licence pojišťovacího zprostředkovatele",
        year: "2010",
        icon: "i-lucide-award",
      },
    ],
  },
  {
    label: "Vzdělání",
    icon: "i-lucide-book-open",
    items: [
      {
        name: "Ing. Ekonomie – VŠE Praha",
        year: "2009",
        icon: "i-lucide-award",
      },
      {
        name: "MBA – Finance & Management, CEMI",
        year: "2014",
        icon: "i-lucide-award",
      },
      {
        name: "Kurz Financial Risk Manager (FRM)",
        year: "2017",
        icon: "i-lucide-award",
      },
      {
        name: "Kontinuální vzdělávání AFIZ",
        year: "průběžně",
        icon: "i-lucide-award",
      },
    ],
  },
];
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="text-headline-lg font-serif text-primary-900">
          Odbornost & certifikace
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <UiBaseCard v-for="section in sections" :key="section.label">
          <template #header>
            <UiTitle :title="section.label" size="sm">
              <template #eyebrow>
                <UIcon :name="section.icon" class="size-8 text-secondary-700" />
              </template>
              <template #title>
                <h3 class="text-title-md font-serif text-primary-900">
                  {{ section.label }}
                </h3>
              </template>
            </UiTitle>
          </template>
          <ul class="space-y-2">
            <li
              v-for="item in section.items"
              :key="item.name"
              class="flex items-start justify-between gap-4 text-sm"
            >
              <span class="flex items-start gap-2 text-muted">
                <UIcon
                  v-if="item.icon"
                  :name="item.icon"
                  class="size-4 text-secondary-700 shrink-0 mt-0.5"
                />
                {{ item.name }}
              </span>
            </li>
          </ul>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
