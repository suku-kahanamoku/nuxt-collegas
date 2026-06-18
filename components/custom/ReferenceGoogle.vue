<script setup lang="ts">
const references = [
  {
    name: "Kevin Olson",
    description: "Founder of Fume.app",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Michael Hoffmann",
    description: "Senior Frontend Developer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Harlan Wilton",
    description: "Nuxt core team member",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nec vehicula.",
  },
  {
    name: "Benjamin Code",
    description: "YouTuber and SaaS builder",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Nulla facilisi. Maecenas vel enim sit amet orci tincidunt rhoncus. Vivamus lacinia odio vitae vestibulum vestibulum. Donec in efficitur leo, in commodo odio.",
  },
  {
    name: "Sarah Mitchell",
    description: "CFO, Venture Partners",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Tomáš Veselý",
    description: "Podnikatel, Praha",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Spolupráce s Collegasem byla přesně to, co jsem hledal – jasná doporučení bez zbytečného žargonu.",
  },
];

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);
</script>
<template>
  <section class="py-section-gap bg-surface-container-low">
    <UContainer>
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
            :ui="{ root: '[--gap:--spacing(4)] mt-20', content: 'w-auto py-1' }"
          >
            <!-- Horizontal card marquee -->
            <UPageCard
              v-for="(ref, i) in references"
              :key="ref.name"
              variant="subtle"
              :description="ref.quote"
              :ui="{
                description:
                  'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
              }"
              class="w-64 shrink-0"
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
        </div>
      </div>
    </UContainer>
  </section>
</template>
