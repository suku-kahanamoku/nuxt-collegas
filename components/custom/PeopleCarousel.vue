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
        :ui="{
          root: '[--gap:--spacing(4)] [--duration:40s]',
          content: 'w-auto py-1',
        }"
      >
        <UiUserCard
          v-for="person in people"
          :key="person.slug || person.name"
          class="w-72 shrink-0"
          :img-src="person.photo"
          :img-alt="person.name"
          :name="person.name"
          :role="person.role"
          :to="`/our-people/${person.slug}`"
        >
          <div
            class="inline-flex items-center text-on-surface-variant group-hover/user-card:text-secondary transition-colors font-label-caps uppercase tracking-widest gap-2"
          >
            Zobrazit profil
            <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
          </div>
        </UiUserCard>
      </UMarquee>
    </UContainer>
  </section>
</template>
