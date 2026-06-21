<script setup lang="ts">
import usersData from "~/assets/data/users.json";
const people = (Array.isArray(usersData) ? usersData : []) as any[];
</script>

<template>
  <section class="py-section-gap bg-background">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-800">Náš tým</h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          Odborníci, kteří se postarají o vaši finanční budoucnost
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <NuxtLink
          v-for="person in people"
          :key="person.slug || person.name"
          :to="`/our-people/${person.slug}`"
          class="w-72 shrink-0 block group"
        >
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
          <h3 class="font-headline-md text-2xl text-primary-800 mb-1">
            {{ person.name }}
          </h3>
          <p class="font-label-caps text-secondary-800 uppercase mb-stack-sm">
            {{ person.role }}
          </p>
          <div
            class="inline-flex items-center text-on-surface-variant hover:text-secondary transition-colors font-label-caps uppercase tracking-widest gap-2"
          >
            Zobrazit profil
            <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
          </div>
        </NuxtLink>
      </UMarquee>
    </UContainer>
  </section>
</template>
