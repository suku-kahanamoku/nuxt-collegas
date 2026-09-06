<script setup lang="ts">
import { computed, ref, watch } from "vue";

import reviewPlatforms from "~/assets/data/review-platforms.json";
import usersData from "~/assets/data/users.json";

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

const sourceLabels: Record<string, string> = {
  google: "Google",
  seznam: "Seznam.cz",
  facebook: "Facebook",
  other: "Klientská",
};

function getSource(reference: RawReference) {
  if (reference.source) return reference.source.toLowerCase();

  const author = reference.author?.toLowerCase() || "";
  if (author.includes("seznam")) return "seznam";
  if (author.includes("facebook")) return "facebook";
  if (author.includes("google")) return "google";
  return "other";
}

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

      const source = getSource(reference);
      unique.set(key, {
        ...reference,
        key,
        source,
        reviewerName:
          reference.reviewerName ||
          reference.author?.replace(/\s*\([^)]*recenze\)\s*$/i, "") ||
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
      label: sourceLabels[id],
      count: references.value.filter((reference) => reference.source === id)
        .length,
    }))
    .filter((source) => source.count > 0),
);

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
    <UiIntro>
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
            >
              Zkušenosti našich klientů
            </span>
          </template>
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-on-primary leading-tight"
            >
              Reference
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-2xl mt-stack-md opacity-90"
        >
          Nejlépe o naší práci vypovídají lidé, kterým pomáháme pečovat o
          finance, majetek a jejich dlouhodobé plány.
        </p>
      </template>
    </UiIntro>

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

        <div
          v-if="availableSources.length > 1"
          class="mb-stack-lg flex flex-wrap justify-center gap-2"
          aria-label="Filtrovat reference podle zdroje"
        >
          <button
            type="button"
            :class="[
              'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
              activeSource === 'all'
                ? 'border-secondary-400 bg-secondary-400 text-primary-950'
                : 'border-primary-700 text-white hover:border-secondary-400',
            ]"
            @click="activeSource = 'all'"
          >
            Všechny ({{ references.length }})
          </button>
          <button
            v-for="source in availableSources"
            :key="source.id"
            type="button"
            :class="[
              'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
              activeSource === source.id
                ? 'border-secondary-400 bg-secondary-400 text-primary-950'
                : 'border-primary-700 text-white hover:border-secondary-400',
            ]"
            @click="activeSource = source.id"
          >
            {{ source.label }} ({{ source.count }})
          </button>
        </div>

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
