<script setup lang="ts">
const offices = [
  {
    label: "Centrála – AZ Tower",
    address: "Pražákova 1008/69, 11. patro\n639 00 Brno",
    note: "Recepce budovy 24/7 · Kancelář Po–Pá 8:00–16:30",
    icon: "location_city",
    highlight: true,
    phone: "+420 800 100 200",
    email: "info@collegas.cz",
    mapUrl: "https://maps.app.goo.gl/AZTower",
  },
  {
    label: "Břeclav",
    address: "nám. T. G. Masaryka 302/8\n690 02 Břeclav",
    icon: "location_on",
    highlight: false,
    phone: null,
    email: null,
    mapUrl: null,
  },
  {
    label: "Kroměříž",
    address: "Tovačovského 2784/24\n767 01 Kroměříž",
    icon: "location_on",
    highlight: false,
    phone: null,
    email: null,
    mapUrl: null,
  },
  {
    label: "Pardubice",
    address: "Pardubice",
    icon: "location_on",
    highlight: false,
    phone: null,
    email: null,
    mapUrl: null,
  },
  {
    label: "Boskovice",
    address: "Boskovice",
    icon: "location_on",
    highlight: false,
    phone: null,
    email: null,
    mapUrl: null,
  },
];
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <span
          class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
          >Kde nás najdete</span
        >
        <h2 class="text-headline-lg font-serif text-primary-800">
          Naše pobočky
        </h2>
        <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">
          Působíme celorepublikově. Setkejte se s námi osobně nebo nás kontaktujte online.
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-stack-md">
        <div
          v-for="office in offices"
          :key="office.label"
          :class="[
            'flex flex-col gap-3 p-6 border transition-all duration-200',
            office.highlight
              ? 'bg-primary-800 border-primary-700 text-on-primary lg:col-span-2'
              : 'bg-white border-outline-variant/30 text-primary-800 hover:border-secondary-700/50',
          ]"
        >
          <span
            class="material-symbols-outlined text-3xl"
            :class="office.highlight ? 'text-secondary-fixed' : 'text-secondary-700'"
          >{{ office.icon }}</span>

          <h3
            class="text-title-md font-serif leading-tight"
            :class="office.highlight ? 'text-on-primary' : 'text-primary-800'"
          >
            {{ office.label }}
          </h3>

          <p
            class="text-body-sm whitespace-pre-line"
            :class="office.highlight ? 'text-on-primary/80' : 'text-on-surface-variant'"
          >
            {{ office.address }}
          </p>

          <p
            v-if="office.note"
            class="text-body-sm"
            :class="office.highlight ? 'text-secondary-fixed/90' : 'text-secondary-700'"
          >
            {{ office.note }}
          </p>

          <div v-if="office.phone || office.email" class="mt-auto space-y-1 pt-2 border-t" :class="office.highlight ? 'border-primary-700' : 'border-outline-variant/30'">
            <a
              v-if="office.phone"
              :href="`tel:${office.phone}`"
              class="flex items-center gap-2 text-body-sm hover:opacity-70 transition-opacity"
              :class="office.highlight ? 'text-secondary-fixed' : 'text-secondary-700'"
            >
              <span class="material-symbols-outlined text-base">phone</span>
              {{ office.phone }}
            </a>
            <a
              v-if="office.email"
              :href="`mailto:${office.email}`"
              class="flex items-center gap-2 text-body-sm hover:opacity-70 transition-opacity"
              :class="office.highlight ? 'text-secondary-fixed' : 'text-secondary-700'"
            >
              <span class="material-symbols-outlined text-base">mail</span>
              {{ office.email }}
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-stack-xl">
        <UButton
          to="/contact"
          size="lg"
          color="secondary"
          variant="solid"
          trailing-icon="i-material-symbols-arrow-forward"
          class="bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors px-10 py-4 text-base"
          :ui="{
            trailingIcon:
              'transition-transform duration-200 group-hover:translate-x-1 size-5',
          }"
        >
          Kontaktovat nás
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
