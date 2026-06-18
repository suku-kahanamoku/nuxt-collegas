<script setup lang="ts">
const people = [
  {
    name: "Tomáš Kalous",
    role: "Zakladatel",
    photo: "https://collegas.cz/img/T_Kalous01.jpg",
  },
  {
    name: "Marek Butula",
    role: "Zakladatel",
    photo: "https://collegas.cz/img/new_team/marek_butula.jpg",
  },
  {
    name: "Lukáš Formánek",
    role: "Senior finanční specialista",
    photo: "https://collegas.cz/img/new_team/formanek_new.jpg",
  },
  {
    name: "Filip Beneš",
    role: "Senior finanční konzultant",
    photo: "https://collegas.cz/img/F_Bene%C5%A102.jpg",
  },
  {
    name: "Jan Radosta",
    role: "Specialista pro privátní klientelu",
    photo: "https://collegas.cz/img/radosta-1.jpg",
  },
  {
    name: "Eva Pánková",
    role: "Majetkový specialista",
    photo: "https://collegas.cz/img/new_team/eva_pankova.jpg",
  },
  {
    name: "Iveta Butulová",
    role: "Senior finanční specialista",
    photo: "https://collegas.cz/img/new_team/iveta_butulova.jpg",
  },
  {
    name: "Josef Zídek",
    role: "Senior finanční konzultant",
    photo: "https://collegas.cz/img/J_Zidek.jpg",
  },
  {
    name: "David Strnad",
    role: "Senior finanční konzultant",
    photo: "https://collegas.cz/img/new_team/david_strnad.jpg",
  },
  {
    name: "Igor Stránský",
    role: "Senior finanční konzultant",
    photo: "https://collegas.cz/img/new_team/igor_stransky.jpg",
  },
  {
    name: "Lukáš Bajgar",
    role: "Senior finanční konzultant",
    photo: "https://collegas.cz/img/new_team/lukas_bajgar.jpg",
  },
];
</script>

<template>
  <section class="py-section-gap bg-background">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-800">Leadership</h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          The Stewards of Your Future
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <div v-for="person in people" :key="person.name" class="w-72 shrink-0">
          <div
            class="aspect-3/4 mb-stack-sm overflow-hidden bg-surface-container relative"
          >
            <img
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
              :alt="person.name"
              :src="person.photo"
              loading="lazy"
            />
          </div>
          <h3 class="font-headline-md text-2xl text-primary mb-1">
            {{ person.name }}
          </h3>
          <p class="font-label-caps text-secondary uppercase mb-stack-sm">
            {{ person.role }}
          </p>
          <a
            class="inline-flex items-center text-on-surface-variant hover:text-secondary transition-colors font-label-caps uppercase tracking-widest gap-2"
            href="/our-people"
          >
            View Biography
            <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
          </a>
        </div>
      </UMarquee>
    </UContainer>
  </section>
</template>
