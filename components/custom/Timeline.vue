<script setup lang="ts">
interface TimelineEvent {
  year?: string | null;
  name: string;
  note?: string | null;
}

const events: TimelineEvent[] = [
  { year: "2013", name: "Collegas, s.r.o.", note: "Založení skupiny" },
  { year: null, name: "Collegas Reality, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Collega Brokers, a.s.", note: "Vznik společnosti" },
  { year: null, name: "Collega Makléř, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Fiduciam consilio, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Collegas odškodnění, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Bula a Collegas, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Diamond FISH, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Collegas SK, s.r.o.", note: "Vznik společnosti" },
  { year: null, name: "Člen Vše", note: "Vstup do asociace" },
  { year: null, name: "AZ Tower", note: "Koupení reprezentativních prostor" },
  { year: null, name: "Collega Brokers", note: "Koupení kancelářských prostor" },
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
  <section class="py-section-gap px-gutter" style="background: linear-gradient(160deg, #04291e 0%, #0b3d2b 45%, #1d3f33 100%);">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <header class="text-center mb-24 max-w-2xl mx-auto">
        <span class="block text-label-caps font-semibold tracking-widest uppercase text-secondary-fixed mb-stack-md">
          Historie skupiny
        </span>
        <h2 class="font-serif text-on-primary" style="font-size: 3.5rem; line-height: 1.1; letter-spacing: -0.01em;">
          Naše milníky
        </h2>
      </header>

      <!-- Timeline track -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Central vertical line -->
        <div class="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/25"></div>

        <div
          v-for="(ev, i) in events"
          :key="i"
          class="grid gap-0 mb-5"
          :class="i % 2 === 0 ? 'grid-cols-[1fr_48px_1fr] sm:grid-cols-[1fr_48px_1fr]' : 'grid-cols-[1fr_48px_1fr]'"
        >
          <!-- LEFT: even = card, odd = empty -->
          <div v-if="i % 2 === 0" class="tl-card-left">
            <div class="bg-white rounded-sm p-4 mr-4 border border-primary-100/35" style="border-top: 2px solid rgba(4,41,30,0.25);">
              <span v-if="ev.year" class="block text-xs font-bold tracking-widest uppercase text-secondary-700 mb-1">{{ ev.year }}</span>
              <div class="font-serif font-bold text-primary-900 text-sm leading-snug">{{ ev.name }}</div>
              <template v-if="ev.note">
                <div class="w-7 h-px my-2 ml-auto" style="background: linear-gradient(90deg, #745b26, #e4c283, #745b26);"></div>
                <div class="text-xs font-semibold uppercase tracking-wide text-secondary-700 text-right">{{ ev.note }}</div>
              </template>
            </div>
          </div>
          <div v-else class="hidden sm:block"></div>

          <!-- CENTER: dot -->
          <div class="flex justify-center items-start pt-5 relative z-10">
            <div
              class="rounded-full border-2 border-primary-900"
              :class="ev.year ? 'w-4 h-4 bg-secondary-400' : 'w-3 h-3 bg-secondary-fixed'"
              style="box-shadow: 0 0 0 3px rgba(255,222,163,0.25);"
            ></div>
          </div>

          <!-- RIGHT: odd = card, even = empty -->
          <div v-if="i % 2 !== 0" class="tl-card-right">
            <div class="bg-white rounded-sm p-4 ml-4 border border-primary-100/35" style="border-top: 2px solid rgba(4,41,30,0.25);">
              <span v-if="ev.year" class="block text-xs font-bold tracking-widest uppercase text-secondary-700 mb-1">{{ ev.year }}</span>
              <div class="font-serif font-bold text-primary-900 text-sm leading-snug">{{ ev.name }}</div>
              <template v-if="ev.note">
                <div class="w-7 h-px my-2" style="background: linear-gradient(90deg, #745b26, #e4c283, #745b26);"></div>
                <div class="text-xs font-semibold uppercase tracking-wide text-secondary-700">{{ ev.note }}</div>
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
  .tl-card-left,
  .tl-card-right {
    grid-column: span 2;
  }
}
</style>
