<script setup lang="ts">
import { computed } from "vue";
import {
  getReviewerName,
  getReviewSource,
  reviewSourceLabels,
} from "~/utils/reviews";

type ContextLink = {
  label: string;
  to: string;
};

const props = withDefaults(
  defineProps<{
    quote: string;
    author: string;
    avatar?: string;
    authorDescription?: string;
    rating?: number;
    date?: string;
    source?: string;
    href?: string;
    contextLinks?: ContextLink[];
    theme?: "light" | "dark";
    maxQuoteLines?: 3;
    uniformHeight?: boolean;
  }>(),
  {
    theme: "dark",
  },
);

const resolvedSource = computed(() => getReviewSource(props.source, props.author));
const isDark = computed(() => props.theme === "dark");

const sourceLabel = computed(
  () =>
    resolvedSource.value === "other"
      ? "Klientská reference"
      : `${reviewSourceLabels[resolvedSource.value]} recenze`,
);

const authorName = computed(() => getReviewerName(props.author));

const userUi = computed(() => ({
  name: isDark.value ? "text-white" : "text-primary-800",
  description: isDark.value
    ? "line-clamp-1 text-white/60"
    : "line-clamp-1 text-on-surface-variant",
}));
</script>

<template>
  <article
    :class="[
      'flex min-w-0 flex-col rounded-2xl border p-6',
      uniformHeight ? 'h-56' : 'h-full',
      isDark
        ? 'border-primary-800 bg-primary-950 shadow-lg [background-image:linear-gradient(230deg,rgba(4,41,30,0.35)_0%,transparent_97%)]'
        : 'border-primary-100 bg-white shadow-sm',
    ]"
  >
    <div class="mb-5 flex items-center gap-3">
      <span
        :class="[
          'rounded-full px-3 py-1 text-xs font-semibold',
          isDark
            ? 'bg-white/8 text-secondary-300'
            : 'bg-surface-container-low text-secondary-800',
        ]"
      >
        {{ sourceLabel }}
      </span>
      <span
        v-if="date"
        :class="[
          'ml-auto text-xs',
          isDark ? 'text-white/45' : 'text-on-surface-variant',
        ]"
      >
        {{ date }}
      </span>
    </div>

    <p
      :class="[
        'mb-6 text-sm leading-relaxed whitespace-break-spaces',
        isDark ? 'text-white' : 'text-on-surface',
        maxQuoteLines === 3 && 'line-clamp-3',
      ]"
    >
      „{{ quote }}“
    </p>

    <div class="mt-auto">
      <UiLinkRoot :to="href" class="inline-block max-w-full">
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
          :ui="userUi"
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
      </UiLinkRoot>

      <p
        v-if="contextLinks?.length"
        :class="[
          'mt-4 border-t pt-4 text-xs',
          isDark
            ? 'border-white/8 text-white/45'
            : 'border-primary-100 text-on-surface-variant',
        ]"
      >
        Spolupráce s
        <template v-for="(link, index) in contextLinks" :key="link.to">
          <span v-if="index > 0">, </span>
          <NuxtLink
            :to="link.to"
            :class="[
              'transition-colors',
              isDark
                ? 'text-secondary-300 hover:text-secondary-200'
                : 'text-secondary-800 hover:text-secondary-700',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </p>
    </div>
  </article>
</template>
