<script setup lang="ts">
import references from "~/assets/data/references.json";

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
          <h2 class="mb-6 text-headline-md text-primary-800 md:text-headline-lg">
            {{ selected?.name }}
          </h2>

          <div class="border-l-2 border-secondary pl-6">
            <p
              class="mb-3 text-body-lg italic text-on-surface-variant whitespace-break-spaces"
            >
              {{ selected?.quote }}
            </p>
            <span class="font-label-caps text-primary-800 whitespace-break-spaces">
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
            <UPageCard
              v-for="(ref, i) in references"
              :key="ref.name"
              variant="subtle"
              :description="ref.quote"
              :ui="{
                description:
                  'before:content-[open-quote] after:content-[close-quote] line-clamp-3 whitespace-break-spaces',
              }"
              :class="[
                'w-64 shrink-0',
                selectedIndex === i && 'border-secondary/50 border-[0.5px]',
              ]"
              @click="selectReference(i)"
            >
              <template #footer>
                <UUser
                  :name="ref.name"
                  :description="ref.company || ref.destination"
                  :avatar="{ src: ref.avatar, alt: ref.name }"
                  size="md"
                  :ui="{ description: 'line-clamp-1' }"
                />
              </template>
            </UPageCard>
          </UMarquee>

          <div class="mt-12 flex gap-4">
            <a
              href="https://www.google.com/search?q=Collegas+s.r.o.+Recenze"
              class="block min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Recenze COLLEGAS na Googlu"
            >
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <svg class="h-8 w-8 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z" />
                    <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z" />
                    <path fill="#FBBC05" d="M6.5 14.1a6 6 0 0 1 0-4.2V7.3H3.2a10 10 0 0 0 0 9.4l3.3-2.6Z" />
                    <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.2 7.3l3.3 2.6A5.8 5.8 0 0 1 12 5.9Z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-900">Google</span>
                  <UIcon
                    name="i-material-symbols-open-in-new"
                    class="ml-auto size-4 shrink-0 text-gray-500"
                  />
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <strong class="text-gray-950">5/5</strong>
                  <span class="whitespace-nowrap text-gray-800">239 recenzí</span>
                </div>
              </div>
            </a>

            <a
              href="https://www.firmy.cz/detail/13020239-collegas-brno-styrice.html#rating"
              class="block min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Recenze COLLEGAS na Seznamu"
            >
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <NuxtImg
                    class="h-8 min-w-0 max-w-32 object-contain"
                    src="/img/logo/seznam.svg"
                    alt="Seznam.cz"
                  />
                  <UIcon
                    name="i-material-symbols-open-in-new"
                    class="ml-auto size-4 shrink-0 text-gray-500"
                  />
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <strong class="text-gray-950">5,0</strong>
                  <span class="whitespace-nowrap text-gray-800">162 recenzí</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
