<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";

type CaseStudyCategory = keyof typeof caseStudiesData;
type CaseStudyItem = (typeof caseStudiesData)[CaseStudyCategory][number];

const route = useRoute();
const slugParam = computed(() => String(route.params.id || ""));

const allCaseStudies = (
  Object.keys(caseStudiesData) as CaseStudyCategory[]
).flatMap((key) => caseStudiesData[key]);

const caseStudy = computed<CaseStudyItem | undefined>(() =>
  allCaseStudies.find((item) => item.slug === slugParam.value),
);

if (!caseStudy.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Modelová studie nebyla nalezena",
  });
}

const serviceLabel: Record<string, string> = {
  finance: "Finance",
  capital: "Správa kapitálu",
  tax: "Daně a právo",
  "real-estate": "Reality a energie",
};

const metaDescription = computed(() => {
  const raw = caseStudy.value?.description || "Detail modelové studie.";
  const maxLength = 155;

  if (raw.length <= maxLength) return raw;

  return `${raw.slice(0, maxLength - 1).trimEnd()}…`;
});

useHead(() => ({
  title: `${caseStudy.value?.title || "Modelová studie"} | Finanční poradenství`,
  meta: [
    {
      name: "description",
      content: metaDescription.value,
    },
  ],
}));
</script>

<template>
  <div class="w-full" v-if="caseStudy">
    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <NuxtLink
          to="/case-studies"
          class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1 mb-stack-lg"
        >
          Zpět na modelové studie
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-start">
          <div class="overflow-hidden rounded-sm bg-surface-variant">
            <NuxtImg
              :src="caseStudy.imgSrc"
              :alt="caseStudy.imgAlt"
              class="w-full h-full object-cover"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:100vw lg:50vw xl:50vw"
            />
          </div>

          <div class="space-y-stack-md">
            <div class="flex items-center gap-4">
              <span class="font-label-caps text-outline uppercase">{{
                serviceLabel[caseStudy.serviceCategory] ||
                caseStudy.serviceCategory
              }}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              <span class="font-label-caps text-outline uppercase">{{
                caseStudy.year
              }}</span>
            </div>

            <h1 class="font-headline-lg text-headline-lg text-primary-800">
              {{ caseStudy.title }}
            </h1>

            <div class="space-y-stack-lg">
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                {{ caseStudy.description }}
              </p>

              <div class="grid grid-cols-1 gap-stack-md">
                <article class="space-y-3">
                  <h2 class="font-headline-md text-primary-800">
                    Výchozí situace
                  </h2>
                  <p class="font-body-lg text-body-lg text-on-surface-variant">
                    {{ caseStudy.detail.overview }}
                  </p>
                </article>

                <article class="space-y-3">
                  <h2 class="font-headline-md text-primary-800">Výzva</h2>
                  <p class="font-body-lg text-body-lg text-on-surface-variant">
                    {{ caseStudy.detail.challenge }}
                  </p>
                </article>

                <article class="space-y-3">
                  <h2 class="font-headline-md text-primary-800">Řešení</h2>
                  <p class="font-body-lg text-body-lg text-on-surface-variant">
                    {{ caseStudy.detail.solution }}
                  </p>
                </article>

                <article class="space-y-3">
                  <h2 class="font-headline-md text-primary-800">Výsledek</h2>
                  <p class="font-body-lg text-body-lg text-on-surface-variant">
                    {{ caseStudy.detail.result }}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
