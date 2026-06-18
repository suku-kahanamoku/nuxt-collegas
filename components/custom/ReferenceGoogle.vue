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
const others = computed(() =>
  references.filter((_, i) => i !== selectedIndex.value).slice(0, 2),
);
</script>
<template>
  <section class="py-section-gap bg-surface">
    <UContainer class="space-y-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Left: portrait with overlay quote -->
        <div class="fade-in">
          <div class="aspect-4/5 relative" v-if="selected">
            <div
              class="w-full h-full bg-cover bg-center border-12 border-white rounded-md shadow-lg"
              :style="{ backgroundImage: `url(${selected.avatar})` }"
              :aria-label="selected.name"
            ></div>

            <div
              v-if="selected"
              class="absolute -bottom-8 -right-8 bg-primary-800 p-6 text-on-primary max-w-xs hidden md:block"
            >
              <p class="text-body-lg italic mb-4">“{{ selected.quote }}”</p>
              <span class="font-label-caps text-secondary-fixed"
                >— {{ selected.name }}</span
              >
            </div>
          </div>
        </div>

        <!-- Right: heading + a couple of highlights -->
        <div class="fade-in">
          <span
            class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
            >Hlasy klientů</span
          >
          <h2 class="font-headline-lg text-headline-lg text-primary-800 mb-6">
            Reference
          </h2>
          <p class="text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            Důvěra klientů je naším největším oceněním. Přečtěte si, co o
            spolupráci říkají sami.
          </p>

          <div class="space-y-8">
            <div
              v-for="(r, idx) in others"
              :key="r.name"
              class="border-l-2 pl-6"
              :class="
                idx === 0 ? 'border-secondary' : 'border-outline-variant/40'
              "
            >
              <p class="text-body-lg text-on-surface-variant italic mb-3">
                {{ r.quote }}
              </p>
              <span class="font-label-caps text-primary-800">{{
                r.description
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Compact marquee for switching selected reference -->
    <div class="mt-8">
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <button
          v-for="(ref, i) in references"
          :key="ref.name"
          @click="selectedIndex = i"
          type="button"
          class="flex flex-col items-center gap-2 w-44 shrink-0 group cursor-pointer"
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
          <p
            class="text-body-md font-semibold text-center"
            :class="
              selectedIndex === i ? 'text-secondary-800' : 'text-primary-900'
            "
          >
            {{ ref.name }}
          </p>
          <p class="text-sm text-on-surface-variant text-center">
            {{ ref.description }}
          </p>
        </button>
      </UMarquee>
    </div>
  </section>
</template>
