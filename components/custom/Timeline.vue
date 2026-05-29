<script setup lang="ts">
import { useElementBounding, useWindowSize } from "@vueuse/core";

interface TimelineEvent {
  year?: string | null;
  name: string;
  note?: string | null;
}

const timelineTrackRef = ref<HTMLElement | null>(null);
const stripeHeight = 70;
const trackPadding = 20;

const { top, bottom, height } = useElementBounding(timelineTrackRef);
const { height: viewportHeight } = useWindowSize();

const stripeVisible = computed(
  () => bottom.value > 0 && top.value < viewportHeight.value,
);

const stripeTop = computed(() => {
  const stripeHalf = stripeHeight / 2;
  const minCenter = trackPadding + stripeHalf;
  const maxCenter = Math.max(
    minCenter,
    height.value - trackPadding - stripeHalf,
  );
  const rawCenter = viewportHeight.value / 1.6 - top.value;
  const clampedCenter = Math.min(maxCenter, Math.max(minCenter, rawCenter));

  return clampedCenter - stripeHalf;
});

const activeDotIndex = computed(() => {
  const trackEl = timelineTrackRef.value;
  if (!trackEl || !stripeVisible.value) return -1;

  const stripeCenter = stripeTop.value + stripeHeight / 2;
  const trackTop = top.value;

  const dots = Array.from(
    trackEl.querySelectorAll<HTMLElement>("[data-tl-dot]"),
  );
  let bestIndex = -1;
  let bestDistance = 20; // px threshold

  dots.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    const dotCenter = rect.top + rect.height / 2 - trackTop;
    const distance = Math.abs(dotCenter - stripeCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i;
    }
  });

  return bestIndex;
});

const events: TimelineEvent[] = [
  { year: "2013", name: "Collegas, s.r.o.", note: "Založení skupiny" },
  { year: null, name: "Collegas Reality, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Collega Brokers, a.s.", note: "Vznik společnosti" },
  { year: null, name: "Collega Makléř, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Fiduciam consilio, s.r.o.", note: "Vznik společnosti" },
  {
    year: null,
    name: "Collegas odškodnění, s.r.o.",
    note: "Vznik společnosti",
  },
  { year: null, name: "Bula a Collegas, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Diamond FISH, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Collegas SK, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Člen Vše", note: "Vstup do asociace" },
  { year: null, name: "AZ Tower", note: "Koupení reprezentativních prostor" },
  {
    year: null,
    name: "Collega Brokers",
    note: "Koupení kancelářských prostor",
  },
  { year: "2022", name: "Nová kancelář Břeclav", note: null },
  { year: "2023", name: "Nová kancelář Kroměříž", note: null },
  { year: "2024", name: "Nová kancelář Boskovice", note: null },
  { year: "2024", name: "Nové logo skupiny", note: null },
  { year: null, name: "Výstava Praha – Inter Ree", note: null },
  { year: "2025", name: "Nový design & rekonstrukce systému", note: null },
  { year: "2026", name: "Finanční plánování na prestižní úrovni", note: null },
];
</script>

<template>
  <section
    class="py-section-gap px-gutter bg-primary-900"
    style="
      background-image: linear-gradient(
        90deg,
        rgba(4, 41, 30, 1) 0%,
        rgba(4, 41, 30, 0.96) 24%,
        rgba(255, 222, 163, 0.07) 50%,
        rgba(4, 41, 30, 0.96) 76%,
        rgba(4, 41, 30, 1) 100%
      );
    "
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-24 max-w-2xl mx-auto">
        <span
          class="block text-label-caps font-semibold tracking-widest uppercase text-secondary-fixed mb-stack-md"
        >
          Historie skupiny
        </span>
        <h2
          class="font-serif text-on-primary"
          style="font-size: 3.5rem; line-height: 1.1; letter-spacing: -0.01em"
        >
          Naše milníky
        </h2>
      </header>

      <!-- Timeline track -->
      <div ref="timelineTrackRef" class="relative max-w-3xl mx-auto">
        <!-- Central vertical line -->
        <div
          class="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,222,163,0.42),rgba(228,194,131,0.85),rgba(255,222,163,0.42))]"
        ></div>
        <div
          class="pointer-events-none absolute left-1/2 z-5 w-0.75 -translate-x-1/2 rounded-full transition-[transform,opacity] duration-150 ease-out"
          :style="{
            top: `${stripeTop}px`,
            height: '64px',
            opacity: stripeVisible ? 1 : 0,
            background:
              'linear-gradient(180deg, rgba(255,222,163,0) 0%, rgba(255,224,168,0.95) 24%, rgba(255,214,130,1) 50%, rgba(255,224,168,0.95) 76%, rgba(255,222,163,0) 100%)',
            boxShadow:
              '0 0 16px rgba(255,214,130,0.55), 0 0 28px rgba(255,214,130,0.35)',
          }"
        ></div>

        <div
          v-for="(ev, i) in events"
          :key="i"
          class="group grid gap-0 mb-5"
          :class="
            i % 2 === 0
              ? 'grid-cols-[1fr_48px_1fr] sm:grid-cols-[1fr_48px_1fr]'
              : 'grid-cols-[1fr_48px_1fr]'
          "
        >
          <!-- LEFT: even = card, odd = empty -->
          <div v-if="i % 2 === 0" class="tl-card-left">
            <div
              class="from-bottom bg-white rounded-sm p-3 sm:p-4 sm:mr-4 border border-primary-100/35 shadow-[0_4px_20px_rgba(0,0,0,0.22),0_1px_4px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-400/55 hover:shadow-[0_8px_28px_rgba(0,0,0,0.28),0_2px_6px_rgba(0,0,0,0.12),0_0_0_1px_rgba(228,194,131,0.28),inset_0_1px_0_rgba(255,255,255,0.8)]"
              style="border-top: 2px solid rgba(116, 91, 38, 0.36)"
            >
              <span
                v-if="ev.year"
                class="block text-xs font-bold tracking-widest uppercase text-secondary-700 mb-1"
                >{{ ev.year }}</span
              >
              >
              <div
                class="font-serif font-bold text-primary-900 text-sm leading-snug"
              >
                {{ ev.name }}
              </div>
              <template v-if="ev.note">
                <div
                  class="w-7 h-px my-2 ml-auto"
                  style="
                    background: linear-gradient(
                      90deg,
                      #745b26,
                      #e4c283,
                      #745b26
                    );
                  "
                ></div>
                <div
                  class="text-xs font-semibold uppercase tracking-wide text-secondary-700 text-right"
                >
                  {{ ev.note }}
                </div>
              </template>
            </div>
          </div>
          <div v-else class="hidden sm:block"></div>

          <!-- CENTER: dot -->
          <div
            class="hidden sm:flex justify-center items-start pt-5 relative z-10"
          >
            <div
              data-tl-dot
              class="rounded-full border-2 transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out group-hover:scale-110"
              :class="[
                ev.year ? 'w-4 h-4' : 'w-3 h-3',
                activeDotIndex === i
                  ? 'bg-secondary-200 border-secondary-200 scale-150'
                  : ev.year
                    ? 'bg-secondary-400 border-secondary-700'
                    : 'bg-secondary-fixed border-secondary-700',
              ]"
              :style="
                activeDotIndex === i
                  ? 'box-shadow: 0 0 0 5px rgba(255,222,163,0.45), 0 0 20px 6px rgba(255,214,130,0.75);'
                  : 'box-shadow: 0 0 0 3px rgba(255, 222, 163, 0.32);'
              "
            ></div>
          </div>

          <!-- RIGHT: odd = card, even = empty -->
          <div v-if="i % 2 !== 0" class="tl-card-right">
            <div
              class="from-bottom bg-white rounded-sm p-3 sm:p-4 sm:ml-4 border border-primary-100/35 shadow-[0_4px_20px_rgba(0,0,0,0.22),0_1px_4px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-400/55 hover:shadow-[0_8px_28px_rgba(0,0,0,0.28),0_2px_6px_rgba(0,0,0,0.12),0_0_0_1px_rgba(228,194,131,0.28),inset_0_1px_0_rgba(255,255,255,0.8)]"
              style="border-top: 2px solid rgba(116, 91, 38, 0.36)"
            >
              <span
                v-if="ev.year"
                class="block text-xs font-bold tracking-widest uppercase text-secondary-700 mb-1"
                >{{ ev.year }}</span
              >
              >
              <div
                class="font-serif font-bold text-primary-900 text-sm leading-snug"
              >
                {{ ev.name }}
              </div>
              <template v-if="ev.note">
                <div
                  class="w-7 h-px my-2"
                  style="
                    background: linear-gradient(
                      90deg,
                      #745b26,
                      #e4c283,
                      #745b26
                    );
                  "
                ></div>
                <div
                  class="text-xs font-semibold uppercase tracking-wide text-secondary-700"
                >
                  {{ ev.note }}
                </div>
              </template>
            </div>
          </div>
          <div v-else class="hidden sm:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  .tl-card-left {
    grid-column: 1;
  }
  .tl-card-right {
    grid-column: 3;
  }
}
</style>
