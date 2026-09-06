<script setup lang="ts">
import { computed } from "vue";

type ContextLink = {
  label: string;
  to: string;
};

const props = defineProps<{
  quote: string;
  author: string;
  avatar?: string;
  authorDescription?: string;
  rating?: number;
  date?: string;
  source?: string;
  href?: string;
  contextLinks?: ContextLink[];
}>();

const sourceLabels: Record<string, string> = {
  google: "Google recenze",
  seznam: "Seznam.cz recenze",
  facebook: "Facebook recenze",
  other: "Klientská reference",
};

const resolvedSource = computed(() => {
  if (props.source) return props.source.toLowerCase();

  const author = props.author.toLowerCase();
  if (author.includes("seznam")) return "seznam";
  if (author.includes("facebook")) return "facebook";
  if (author.includes("google")) return "google";
  return "other";
});

const sourceLabel = computed(
  () => sourceLabels[resolvedSource.value] || sourceLabels.other,
);

const authorName = computed(() =>
  props.author.replace(/\s*\([^)]*recenze\)\s*$/i, ""),
);
</script>

<template>
  <article
    class="flex h-full min-w-0 flex-col rounded-2xl border border-primary-800 bg-primary-950 p-6 shadow-lg"
    style="
      background-image: linear-gradient(
        230deg,
        rgba(4, 41, 30, 0.35) 0%,
        transparent 97%
      );
    "
  >
    <div class="mb-5 flex items-center gap-3">
      <span
        class="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-secondary-300"
      >
        {{ sourceLabel }}
      </span>
      <span v-if="date" class="ml-auto text-xs text-white/45">
        {{ date }}
      </span>
    </div>

    <p class="mb-6 text-sm leading-relaxed text-white whitespace-break-spaces">
      „{{ quote }}“
    </p>

    <div class="mt-auto">
      <component
        :is="href ? 'a' : 'div'"
        :href="href"
        :target="href ? '_blank' : undefined"
        :rel="href ? 'noopener noreferrer' : undefined"
        class="inline-block max-w-full"
      >
        <UUser
          :name="authorName"
          :avatar="
            avatar
              ? {
                  src: avatar,
                  alt: authorName,
                  loading: 'lazy',
                }
              : undefined
          "
          size="md"
          :ui="{
            name: 'text-white',
            description: 'line-clamp-1 text-white/60',
          }"
        >
          <template v-if="rating || authorDescription" #description>
            <span
              v-if="rating"
              class="flex gap-0.5"
              :aria-label="`${rating} z 5 hvězdiček`"
            >
              <UIcon
                v-for="star in rating"
                :key="star"
                name="i-material-symbols-star"
                class="h-3 w-3 text-secondary-400"
              />
            </span>
            <span v-else>{{ authorDescription }}</span>
          </template>
        </UUser>
      </component>

      <p
        v-if="contextLinks?.length"
        class="mt-4 border-t border-white/8 pt-4 text-xs text-white/45"
      >
        Spolupráce s
        <template v-for="(link, index) in contextLinks" :key="link.to">
          <span v-if="index > 0">, </span>
          <NuxtLink
            :to="link.to"
            class="text-secondary-300 transition-colors hover:text-secondary-200"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </p>
    </div>
  </article>
</template>
