<script setup lang="ts">
import references from "~/assets/data/references.json";

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);
</script>
<template>
  <CustomUserPic&desc
    bg="bg-surface-container-low"
    cols="lg"
    gap="gap-20"
    img-class="border-12 border-white rounded-md shadow-lg"
    :bg-image="selected?.avatar"
    overlay-class="-bottom-8 -right-8 bg-primary-800 p-6 max-w-xs hidden md:flex flex-col"
  >
    <template #overlay>
      <p class="text-body-lg italic mb-4">"{{ selected?.quote }}"</p>
      <span class="font-label-caps text-secondary-fixed"
        >— {{ selected?.name }}</span
      >
    </template>

    <span
      class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
      >Ohlasy klientů</span
    >
    <h2 class="font-headline-lg text-headline-lg text-primary-800 mb-6">
      {{ selected?.name }}
    </h2>

    <div class="space-y-8">
      <div class="border-l-2 pl-6 border-secondary">
        <p class="text-body-lg text-on-surface-variant italic mb-3">
          {{ selected?.quote }}
        </p>
        <span class="font-label-caps text-primary-800">{{
          selected?.description
        }}</span>
      </div>
    </div>

    <UMarquee
      pause-on-hover
      :overlay="false"
      :ui="{
        root: '[--gap:--spacing(4)] mt-20',
        content: 'w-auto py-1 cursor-pointer',
      }"
    >
      <UPageCard
        v-for="(ref, i) in references"
        :key="ref.name"
        variant="subtle"
        :description="ref.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
        }"
        :class="[
          'w-64 shrink-0',
          selectedIndex === i && 'border-secondary/50 border-[0.5px]',
        ]"
        @click="selectedIndex = i"
      >
        <template #footer>
          <UUser
            :name="ref.name"
            :description="ref.description"
            :avatar="{ src: ref.avatar, alt: ref.name }"
            size="md"
            :ui="{ description: 'line-clamp-1' }"
          />
        </template>
      </UPageCard>
    </UMarquee>
  </CustomUserPic&desc>
</template>
