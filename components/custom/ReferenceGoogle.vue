<script setup lang="ts">
import references from "~/assets/data/references.json";
import reviewPlatforms from "~/assets/data/review-platforms.json";

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);

function selectReference(index: number) {
  selectedIndex.value = index;
}
</script>

<template>
  <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
    <UContainer>
      <div class="grid grid-cols-1 gap-stack-lg lg:grid-cols-2 lg:gap-stack-xl">
        <div class="order-2 lg:order-1 lg:row-span-2">
          <div class="relative aspect-4/5">
            <NuxtImg
              v-if="selected"
              :src="selected.avatar"
              :alt="selected.name"
              class="h-full w-full rounded-md border-12 border-white object-cover object-top shadow-lg"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:100vw lg:50vw xl:50vw"
            />
            <div
              v-if="selected"
              class="from-bottom absolute -right-8 -bottom-8 hidden max-w-xs flex-col bg-primary-800 p-6 text-on-primary lg:flex"
            >
              <p class="mb-4 text-body-lg italic whitespace-break-spaces">
                „{{ selected.quote }}“
              </p>
              <span class="font-label-caps text-secondary-fixed">
                — {{ selected.name }},
                {{ selected.company || selected.destination }}
              </span>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <span
            class="mb-4 block font-label-caps uppercase tracking-widest text-secondary-800"
          >
            Ohlasy klientů
          </span>
          <h2
            class="mb-6 text-headline-md text-primary-800 md:text-headline-lg"
          >
            {{ selected?.name }}
          </h2>

          <div class="border-l-2 border-secondary pl-6">
            <p
              class="mb-3 text-body-lg italic text-on-surface-variant whitespace-break-spaces"
            >
              {{ selected?.quote }}
            </p>
            <span
              class="font-label-caps text-primary-800 whitespace-break-spaces"
            >
              {{ selected?.description }}
            </span>
          </div>
        </div>

        <div class="order-3 min-w-0 lg:order-3">
          <UMarquee
            pause-on-hover
            :overlay="false"
            :ui="{
              root: '[--gap:--spacing(4)]',
              content: 'w-auto py-1 cursor-pointer',
            }"
          >
            <CustomReviewCard
              v-for="(ref, i) in references"
              :key="ref.name"
              :quote="ref.quote"
              :author="ref.name"
              :avatar="ref.avatar"
              :author-description="ref.company || ref.destination"
              theme="light"
              :max-quote-lines="3"
              uniform-height
              :class="[
                'w-72 shrink-0 cursor-pointer transition-shadow',
                selectedIndex === i && 'ring-2 ring-secondary-400',
              ]"
              role="button"
              tabindex="0"
              @click="selectReference(i)"
              @keydown.enter="selectReference(i)"
              @keydown.space.prevent="selectReference(i)"
            />
          </UMarquee>

          <div class="mt-12 flex gap-4">
            <CustomReviewPlatformCard
              v-for="platform in reviewPlatforms"
              :key="platform.id"
              :platform="platform"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
