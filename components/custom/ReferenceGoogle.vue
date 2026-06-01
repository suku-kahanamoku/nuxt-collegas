<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { UserProps } from "@nuxt/ui";

const references: { user: UserProps; quote: string }[] = [
  {
    user: {
      name: "Kevin Olson",
      description: "Founder of Fume.app",
      avatar: {
        src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/acidjazz",
        srcset: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/acidjazz 2x",
        loading: "lazy",
      },
    },
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    user: {
      name: "Michael Hoffmann",
      description: "Senior Frontend Developer",
      avatar: {
        src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/mokkapps",
        srcset: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps 2x",
        loading: "lazy",
      },
    },
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    user: {
      name: "Harlan Wilton",
      description: "Nuxt core team member",
      avatar: {
        src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/harlan-zw",
        srcset: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw 2x",
        loading: "lazy",
      },
    },
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nec vehicula.",
  },
  {
    user: {
      name: "Benjamin Code",
      description: "YouTuber and SaaS builder",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg",
        loading: "lazy",
      },
    },
    quote:
      "Nulla facilisi. Maecenas vel enim sit amet orci tincidunt rhoncus. Vivamus lacinia odio vitae vestibulum vestibulum. Donec in efficitur leo, in commodo odio.",
  },
];

const selectedIndex = ref<number | null>(null);
const selectedReference = computed(() => {
  return references[selectedIndex.value ?? 0];
});
</script>

<template>
  <section class="py-section-gap">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-900">Reference</h2>
      </div>

      <UPageCTA
        v-if="selectedReference"
        :title="selectedReference.user.name"
        :description="selectedReference.quote"
        orientation="horizontal"
        variant="naked"
        reverse
        :ui="{
          container: 'pt-0! px-4! gap-4!',
        }"
      >
        <template #default>
          <NuxtImg
            :src="selectedReference.user.avatar?.src"
            :alt="selectedReference.user.name"
            class="h-90 rounded-lg object-cover mx-auto"
            loading="lazy"
          />
        </template>
      </UPageCTA>

      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <UPageCard
          v-for="(testimonial, index) in references"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
          }"
          class="w-64 shrink-0 cursor-pointer"
          @click="selectedIndex = index"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="xl"
              :ui="{ description: 'line-clamp-1' }"
            />
          </template>
        </UPageCard>
      </UMarquee>
    </UContainer>
  </section>
</template>
