<script setup lang="ts">
import { computed, ref, watch } from "vue";

import reviewPlatforms from "~/assets/data/review-platforms.json";
import usersData from "~/assets/data/users.json";
import {
  getReviewerName,
  getReviewSource,
  reviewSourceLabels,
} from "~/utils/reviews";

definePageMeta({ title: "Reference | COLLEGAS" });
useHead({
  title: "Reference a hodnocení klientů | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Přečtěte si zkušenosti klientů s finančními poradci COLLEGAS a podívejte se na naše hodnocení na Googlu a Seznamu.",
    },
  ],
});

type Adviser = {
  name: string;
  slug: string;
};

type RawReference = {
  quote: string;
  author?: string;
  reviewerName?: string;
  authorImage?: string;
  rating?: number;
  date?: string;
  reviewId?: string;
  googleProfile?: string;
  source?: string;
};

type Person = {
  name: string;
  slug: string;
  references?: RawReference[];
};

type Reference = RawReference & {
  key: string;
  source: string;
  reviewerName: string;
  advisers: Adviser[];
};

const references = computed<Reference[]>(() => {
  const unique = new Map<string, Reference>();

  for (const person of usersData as Person[]) {
    for (const reference of person.references || []) {
      const key =
        reference.reviewId ||
        `${reference.reviewerName || reference.author || ""}|${reference.quote}`;
      const existing = unique.get(key);

      if (existing) {
        if (
          !existing.advisers.some((adviser) => adviser.slug === person.slug)
        ) {
          existing.advisers.push({ name: person.name, slug: person.slug });
        }
        continue;
      }

      const source = getReviewSource(reference.source, reference.author);
      unique.set(key, {
        ...reference,
        key,
        source,
        reviewerName:
          reference.reviewerName ||
          (reference.author && getReviewerName(reference.author)) ||
          "Klient COLLEGAS",
        advisers: [{ name: person.name, slug: person.slug }],
      });
    }
  }

  return Array.from(unique.values());
});

const availableSources = computed(() =>
  ["google", "seznam", "facebook"]
    .map((id) => ({
      id,
      label: reviewSourceLabels[id as keyof typeof reviewSourceLabels],
      count: references.value.filter((reference) => reference.source === id)
        .length,
    }))
    .filter((source) => source.count > 0),
);

const filterOptions = computed(() => [
  { label: "Všechny", value: "all", count: references.value.length },
  ...availableSources.value.map((source) => ({
    label: source.label,
    value: source.id,
    count: source.count,
  })),
]);

const activeSource = ref("all");
const visibleCount = ref(12);
const filteredReferences = computed(() =>
  activeSource.value === "all"
    ? references.value
    : references.value.filter(
        (reference) => reference.source === activeSource.value,
      ),
);
const visibleReferences = computed(() =>
  filteredReferences.value.slice(0, visibleCount.value),
);

watch(activeSource, () => {
  visibleCount.value = 12;
});
</script>

<template>
  <div class="w-full">
    <UiPageIntro
      eyebrow="Zkušenosti našich klientů"
      title="Reference"
      description="Nejlépe o naší práci vypovídají lidé, kterým pomáháme pečovat o finance, majetek a jejich dlouhodobé plány."
    />

    <section class="bg-surface-container-lowest py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="mx-auto mb-stack-lg max-w-2xl text-center">
          <span
            class="mb-4 block font-label-caps uppercase tracking-widest text-secondary-800"
          >
            Nezávislá hodnocení
          </span>
          <h2 class="text-headline-md text-primary-800 md:text-headline-lg">
            Jak nás hodnotí klienti
          </h2>
        </div>

        <div class="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <CustomReviewPlatformCard
            v-for="platform in reviewPlatforms"
            :key="platform.id"
            :platform="platform"
            featured
          />
        </div>
      </UContainer>
    </section>

    <section class="bg-primary-950 py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="mx-auto mb-stack-lg max-w-3xl text-center">
          <span
            class="mb-4 block font-label-caps uppercase tracking-widest text-secondary-400"
          >
            Ohlasy klientů
          </span>
          <h2 class="text-headline-md text-white md:text-headline-lg">
            Co o spolupráci říkají
          </h2>
          <p class="mt-stack-sm text-body-lg text-white/60">
            Na jednom místě najdete všechny recenze, které jsou přiřazené k
            našim poradcům.
          </p>
        </div>

        <UiFilterTabs
          v-if="availableSources.length > 1"
          v-model="activeSource"
          :options="filterOptions"
          theme="dark"
          aria-label="Filtrovat reference podle zdroje"
          class="mb-stack-lg"
        />

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CustomReviewCard
            v-for="reference in visibleReferences"
            :key="reference.key"
            :quote="reference.quote"
            :author="reference.reviewerName"
            :avatar="reference.authorImage"
            :rating="reference.rating"
            :date="reference.date"
            :source="reference.source"
            :href="reference.googleProfile"
            :context-links="
              reference.advisers.map((adviser) => ({
                label: adviser.name,
                to: `/our-people/${adviser.slug}`,
              }))
            "
          />
        </div>

        <div
          v-if="visibleCount < filteredReferences.length"
          class="mt-stack-lg text-center"
        >
          <UiButton
            type="button"
            color="secondary"
            class="rounded-full"
            @click="visibleCount += 12"
          >
            Zobrazit další reference
          </UiButton>
          <p class="mt-3 text-xs text-white/45">
            Zobrazeno {{ visibleReferences.length }} z
            {{ filteredReferences.length }} referencí
          </p>
        </div>
      </UContainer>
    </section>
  </div>
</template>
