<script setup lang="ts">
const references = [
  {
    name: "Kevin Olson",
    description: "Founder of Fume.app",
    avatar: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/acidjazz",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Michael Hoffmann",
    description: "Senior Frontend Developer",
    avatar: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Harlan Wilton",
    description: "Nuxt core team member",
    avatar: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nec vehicula.",
  },
  {
    name: "Benjamin Code",
    description: "YouTuber and SaaS builder",
    avatar:
      "https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg",
    quote:
      "Nulla facilisi. Maecenas vel enim sit amet orci tincidunt rhoncus. Vivamus lacinia odio vitae vestibulum vestibulum. Donec in efficitur leo, in commodo odio.",
  },
  {
    name: "Sarah Mitchell",
    description: "CFO, Venture Partners",
    avatar: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/danielroe",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Tomáš Veselý",
    description: "Podnikatel, Praha",
    avatar: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/atinux",
    quote:
      "Spolupráce s Collegasem byla přesně to, co jsem hledal – jasná doporučení bez zbytečného žargonu.",
  },
];

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);
</script>

<template>
  <section class="py-section-gap bg-surface-container-low overflow-hidden">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-900">Reference</h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          Důvěra klientů je naším největším oceněním. Přečtěte si, co o
          spolupráci říkají sami.
        </p>
      </div>

      <!-- Selected reference detail -->
      <UPageCTA
        :key="selectedIndex"
        :title="selected.name"
        :description="selected.quote"
        orientation="horizontal"
        variant="naked"
        reverse
        :ui="{
          container: 'pt-10! px-4! gap-8!',
          title: 'text-title-md font-serif text-primary-900',
          description:
            'text-body-lg text-on-surface-variant italic before:content-[open-quote] after:content-[close-quote]',
        }"
        class="mb-stack-sm"
      >
        <template #default>
          <div class="flex flex-col items-center gap-3">
            <div
              class="w-full aspect-square overflow-hidden mx-auto max-w-xs rounded-lg"
            >
              <img
                :src="selected.avatar"
                :alt="selected.name"
                class="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
            <p class="text-sm text-on-surface-variant text-center">
              {{ selected.description }}
            </p>
          </div>
        </template>
      </UPageCTA>
    </UContainer>

    <!-- Marquee -->
    <UMarquee
      pause-on-hover
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <button
        v-for="(ref, i) in references"
        :key="ref.name"
        type="button"
        class="flex flex-col items-center gap-3 w-44 shrink-0 group cursor-pointer"
        @click="selectedIndex = i"
      >
        <div
          class="w-28 h-28 rounded-full overflow-hidden bg-surface-container border-2 transition-all duration-200"
          :class="
            selectedIndex === i
              ? 'border-secondary-700 scale-105'
              : 'border-secondary-700/10 group-hover:border-secondary-700/40'
          "
        >
          <img
            :src="ref.avatar"
            :alt="ref.name"
            class="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div class="text-center">
          <p
            class="text-body-md font-semibold leading-tight transition-colors duration-200"
            :class="
              selectedIndex === i ? 'text-secondary-700' : 'text-primary-900'
            "
          >
            {{ ref.name }}
          </p>
          <p class="text-sm text-on-surface-variant mt-0.5 leading-tight">
            {{ ref.description }}
          </p>
        </div>
      </button>
    </UMarquee>
  </section>
</template>
