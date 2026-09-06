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
        "Souhrn modelových studií napříč oblastmi finance, Růst a ochrana majetku, daně a právo, reality a energie.",
    },
  ],
});

type CaseStudyCategory = keyof typeof caseStudiesData;
type CaseStudyItem = (typeof caseStudiesData)[CaseStudyCategory][number];

const serviceLabel = Object.fromEntries(
  services.map((service) => [service.serviceCategory, service.title]),
) as Record<string, string>;

const filterOptions = [
  { label: "Vše", value: "all" },
  { label: "Finance", value: "finance" },
  { label: "Růst a ochrana majetku", value: "capital" },
  { label: "Daně a právo", value: "tax" },
  { label: "Reality a energie", value: "real-estate" },
];

const selectedFilter = ref("all");

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
    <UiPageIntro
      eyebrow="Případové studie"
      title="Modelové studie"
      description="Souhrn reálných situací, na kterých ukazujeme náš přístup napříč financemi, růstem a ochranou majetku, daněmi a právem i realitami a energiemi."
    />

    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <UiFilterTabs
          v-model="selectedFilter"
          :options="filterOptions"
          aria-label="Filtrovat modelové studie podle oblasti"
          class="mb-stack-lg justify-start"
        />

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
