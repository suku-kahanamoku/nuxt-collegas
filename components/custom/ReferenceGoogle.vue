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
        loading: "lazy" as const,
      },
    },
    quote:
      "Nuxt UI Pro saves 100s of hours of dev and design time while delivering a clean professional look on any device.",
  },
  {
    user: {
      name: "Michael Hoffmann",
      description: "Senior Frontend Developer",
      avatar: {
        src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/mokkapps",
        srcset: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps 2x",
        loading: "lazy" as const,
      },
    },
    quote:
      "I decided to replace my custom-built components with a component library and chose Nuxt UI Pro. It only took me a few hours, and the new UI looks more professional. Integrating the library is easy; the components are well-documented and highly customizable. I can only recommend it; this library is my new choice for new SaaS products.",
  },
  {
    user: {
      name: "Harlan Wilton",
      description: "Nuxt core team member",
      avatar: {
        src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/harlan-zw",
        srcset: "https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw 2x",
        loading: "lazy" as const,
      },
    },
    quote:
      "Nuxt UI Pro is my go to component library. Out-of-the-box it handles all of the UI demands I throw at it while looking great. The customisation is really worth thought out, allowing you to override components in a breeze. Always amazed at the improvements dropped in each update as well, the team is doing an amazing job.",
  },
  {
    user: {
      name: "Benjamin Code",
      description: "YouTuber and SaaS builder",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg",
        loading: "lazy" as const,
      },
    },
    quote:
      "Nuxt UI has allowed me to develop my SaaS without any prior mockups. The design quality of their components and the intelligence of the DX meant that I was able to try many different layouts for my application until I found the perfect UX for my users. Nuxt UI is the ui-kit I would have dreamed of building myself, and Nuxt UI Pro makes things even easier when you want to go further with your SaaS. Kudos to the team.",
  },
];

const selectedIndex = ref<number | null>(null);
const selectedReference = computed(() => {
  return references[selectedIndex.value ?? 0];
});

function onCardClick(index: number) {
  selectedIndex.value = index;
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <UPageCTA
      v-if="selectedReference"
      :title="selectedReference.user.name"
      :description="selectedReference.quote"
      orientation="horizontal"
      variant="naked"
      reverse
      :ui="{
        container: 'pt-4! pb-12! px-4! gap-4!',
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
        @click="onCardClick(index)"
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
  </div>
</template>
