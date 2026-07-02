<script setup lang="ts">
import usersData from "~/assets/data/users.json";

const props = defineProps<{
  title?: string;
  description?: string;
}>();

const people = (Array.isArray(usersData) ? usersData : []) as any[];
</script>

<template>
  <section class="py-stack-lg md:py-section-gap bg-background">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
          {{ props.title || "Náš tým" }}
        </h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          {{
            props.description ||
            "Odborníci, kteří se postarají o vaši finanční budoucnost"
          }}
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{
          root: '[--gap:--spacing(4)] [--duration:150s]',
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

      <div class="text-center mt-stack-xl">
        <NuxtLink
          to="/our-people"
          class="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary-700 hover:text-secondary-800 transition-colors"
        >
          Poznat celý tým
          <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
