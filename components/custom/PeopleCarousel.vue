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
  <section class="py-section-gap bg-surface-container-low overflow-hidden">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-900">Náš tým</h2>
        <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">
          Za každou radou stojí konkrétní člověk s odborností, zkušeností a odpovědností.
        </p>
      </div>
    </UContainer>

    <UMarquee
      pause-on-hover
      reverse
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <div
        v-for="person in people"
        :key="person.name"
        class="flex flex-col items-center gap-3 w-44 shrink-0"
      >
        <div class="w-28 h-28 rounded-full overflow-hidden bg-surface-container border border-secondary-700/10">
          <img
            :src="person.photo"
            :alt="person.name"
            class="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div class="text-center">
          <p class="text-body-md font-semibold text-primary-900 leading-tight">{{ person.name }}</p>
          <p class="text-sm text-on-surface-variant mt-0.5 leading-tight">{{ person.role }}</p>
        </div>
      </div>
    </UMarquee>

    <UContainer class="mt-stack-lg text-center">
      <UiButton
        to="/our-people"
        color="primary"
        variant="outline"
        trailing-icon="i-material-symbols-arrow-forward"
        size="lg"
        :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-x-1 size-5' }"
      >
        Poznat celý tým
      </UiButton>
    </UContainer>
  </section>
</template>
