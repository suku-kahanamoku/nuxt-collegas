<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import type { ServiceDetailConfig } from "~/assets/data/service-details";
import servicePages from "~/assets/data/service-pages.json";
import services from "~/assets/data/service-menu.json";

const props = defineProps<{
  serviceKey: string;
  config: ServiceDetailConfig;
}>();

type ServicePageKey = keyof typeof servicePages;
type CaseStudyCategory = keyof typeof caseStudiesData;

const service = computed(() =>
  services.find((item) => item.key === props.serviceKey),
);
const page = computed(() => servicePages[props.serviceKey as ServicePageKey]);

const caseStudies = computed(() => {
  if (!props.config.caseStudyCategory) return [];

  return caseStudiesData[
    props.config.caseStudyCategory as CaseStudyCategory
  ].map((item) => ({
    ...item,
    to: `/case-studies/${item.slug}`,
  }));
});

const sectionLabels = computed(() =>
  Object.fromEntries(
    page.value.asideMenus.map((item) => [item.to.split("#")[1], item.label]),
  ),
);

const consultationCallout = {
  title: "Nezávazná konzultace",
  description: "Rádi posoudíme vaši situaci a navrhneme další kroky.",
  label: "Nezávazná konzultace",
  to: "/contact#contact-form",
};
</script>

<template>
  <div v-if="service && page" class="w-full">
    <CustomTextComment heading-tag="h1" label="Naše služby">
      <template #heading>{{ service.navLabel }}</template>
      <template #body>
        <div class="space-y-stack-sm">
          <p v-for="paragraph in config.intro.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </template>
      <template #quote>„{{ config.intro.quote }}“</template>
      <template #attribution>{{ config.intro.attribution }}</template>
    </CustomTextComment>

    <section
      v-if="caseStudies.length"
      class="py-stack-lg md:py-section-gap bg-surface-container-lowest"
    >
      <UContainer class="mx-auto px-gutter">
        <div class="flex items-center justify-between mb-stack-lg">
          <h2 class="text-headline-md text-primary-800 md:text-headline-lg">
            Modelové situace
          </h2>
          <NuxtLink
            class="hidden items-center gap-2 border-b border-secondary-800 py-1 font-label-caps text-secondary-800 md:flex"
            to="/contact#contact-form"
          >
            KONZULTOVAT SITUACI
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-stack-lg md:grid-cols-2 lg:grid-cols-3">
          <UiArticleCard
            v-for="caseStudy in caseStudies"
            :key="caseStudy.title"
            v-bind="caseStudy"
          />
        </div>
        <div class="mt-stack-lg md:hidden">
          <NuxtLink
            class="flex w-full items-center justify-center gap-2 border border-secondary-800 py-4 font-label-caps text-secondary-800"
            to="/contact#contact-form"
          >
            KONZULTOVAT SITUACI
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <CustomConsultationBanner
      v-if="!config.primaryCta.afterDetails"
      :title="config.primaryCta.title"
      :body="config.primaryCta.body"
      primary-label="Domluvit konzultaci"
    />

    <CustomPrinciplesFeature
      v-if="config.principles"
      v-bind="config.principles"
    />

    <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="grid grid-cols-1 gap-stack-xl lg:grid-cols-12">
          <div class="space-y-section-gap lg:col-span-8">
            <UiImageText
              v-for="section in config.sections"
              :id="section.id"
              :key="section.id"
              :img-src="section.imgSrc"
              :img-alt="section.imgAlt"
              :img-right="section.imgRight"
            >
              <h2
                class="text-headline-md font-serif text-primary-800 md:text-headline-lg"
              >
                {{ sectionLabels[section.id] }}
              </h2>
              <p
                v-for="paragraph in section.paragraphs"
                :key="paragraph"
                class="text-body-md text-on-surface-variant"
              >
                {{ paragraph }}
              </p>
            </UiImageText>
          </div>

          <UiAside
            title="Naše služby"
            :menus="page.asideMenus"
            :callout="consultationCallout"
          />
        </div>
      </UContainer>
    </section>

    <CustomConsultationBanner
      v-if="config.primaryCta.afterDetails"
      :title="config.primaryCta.title"
      :body="config.primaryCta.body"
      primary-label="Domluvit konzultaci"
    />

    <UiImgDarkBanner
      v-if="config.imageBanner"
      bg-image="/img/intro/stamp.png"
      v-bind="config.imageBanner"
      heading-tag="h2"
    />

    <section
      v-if="config.showRelated"
      class="py-stack-lg md:py-section-gap bg-surface"
    >
      <UContainer class="mx-auto px-gutter">
        <div
          class="flex flex-col items-end justify-between gap-stack-md mb-stack-lg md:flex-row"
        >
          <div class="max-w-2xl">
            <span
              class="font-label-caps text-secondary-800 block mb-stack-sm uppercase"
            >
              Související služby
            </span>
            <h2 class="text-headline-md text-primary-800 md:text-headline-lg">
              {{ page.related.title }}
            </h2>
          </div>
          <p class="font-body-md text-on-surface-variant max-w-sm md:text-right">
            {{ page.related.description }}
          </p>
        </div>
        <div
          class="grid grid-cols-[repeat(auto-fit,minmax(min(16rem,100%),1fr))] gap-stack-md"
        >
          <UiBaseCard
            v-for="relatedService in page.related.cards"
            :key="relatedService.to"
            :to="relatedService.to"
          >
            <template #header>
              <h3
                class="text-title-md text-primary-800 transition-colors group-hover:text-secondary md:text-title-lg"
              >
                {{ relatedService.title }}
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              {{ relatedService.description }}
            </p>
            <template #footer>
              <div
                class="inline-flex items-center gap-2 border-b border-transparent py-1 font-label-caps text-secondary-800 transition-all group-hover:border-secondary"
              >
                ZOBRAZIT SLUŽBU
                <UIcon name="i-material-symbols-north-east" class="text-sm" />
              </div>
            </template>
          </UiBaseCard>
        </div>
      </UContainer>
    </section>

    <CustomConsultationBanner
      v-if="config.showFinalCta"
      title="Začněme nezávaznou konzultací"
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGAS pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
      secondary-label="Naše pobočky"
    />
  </div>
</template>
