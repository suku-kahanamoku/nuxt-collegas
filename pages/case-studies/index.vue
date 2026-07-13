<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import services from "~/assets/data/service-menu.json";

definePageMeta({ title: "Modelové studie | Finanční poradenství" });

useHead({
  title: "Modelové studie | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Souhrn modelových studií napříč oblastmi finance, správa kapitálu, daně a právo, reality a energie.",
    },
  ],
});

type CaseStudyCategory = keyof typeof caseStudiesData;
type CaseStudyItem = (typeof caseStudiesData)[CaseStudyCategory][number];
type FilterValue = "all" | CaseStudyCategory;

const serviceLabel = Object.fromEntries(
  services.map((service) => [service.serviceCategory, service.title]),
) as Record<string, string>;

const filterOptions: Array<{ label: string; value: FilterValue }> = [
  { label: "Vše", value: "all" },
  { label: "Finance", value: "finance" },
  { label: "Správa kapitálu", value: "capital" },
  { label: "Daně a právo", value: "tax" },
  { label: "Reality a energie", value: "real-estate" },
];

const selectedFilter = ref<FilterValue>("all");

const caseStudies = (Object.keys(caseStudiesData) as CaseStudyCategory[])
  .flatMap((key) =>
    caseStudiesData[key].map((item: CaseStudyItem) => ({
      ...item,
      serviceLabel: serviceLabel[item.serviceCategory] || item.serviceCategory,
      to: `/case-studies/${item.slug}`,
    })),
  )
  .sort((a, b) => Number(b.year) - Number(a.year));

const filteredCaseStudies = computed(() => {
  if (selectedFilter.value === "all") {
    return caseStudies;
  }

  return caseStudies.filter(
    (item) => item.serviceCategory === selectedFilter.value,
  );
});
</script>

<template>
  <div class="w-full">
    <UiIntro>
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Případové studie</span
            >
          </template>
          <template #title>
            <h1 class="text-headline-lg md:text-display-xl font-serif text-on-primary leading-none">
              Modelové studie
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Souhrn reálných situací, na kterých ukazujeme náš přístup napříč
          financemi, správou kapitálu, daněmi a právem i realitami a energiemi.
        </p>
      </template>
    </UiIntro>

    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex flex-wrap gap-3 mb-stack-lg">
          <button
            v-for="option in filterOptions"
            :key="option.value"
            type="button"
            class="px-4 py-2 border text-sm uppercase tracking-wide transition-colors"
            :class="
              selectedFilter === option.value
                ? 'border-secondary-800 bg-secondary-800 text-white'
                : 'border-secondary-800 text-secondary-800 hover:bg-secondary-50'
            "
            @click="selectedFilter = option.value"
          >
            {{ option.label }}
          </button>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <UiArticleCard
            v-for="item in filteredCaseStudies"
            :key="item.slug"
            :img-src="item.imgSrc"
            :img-alt="item.imgAlt"
            :category="item.serviceLabel"
            :year="item.year"
            :title="item.title"
            :description="item.description"
            :to="item.to"
          />
        </div>

        <p
          v-if="filteredCaseStudies.length === 0"
          class="mt-stack-md text-body-md text-on-surface-variant"
        >
          V této kategorii zatím nejsou dostupné žádné modelové studie.
        </p>
      </UContainer>
    </section>
  </div>
</template>
