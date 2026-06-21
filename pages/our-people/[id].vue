<script setup lang="ts">
import { useRoute } from '#imports';
import usersData from '~/assets/data/users.json';

const route = useRoute();
const slug = route.params.id as string;

const user = (Array.isArray(usersData) ? usersData.find((u: any) => u.slug === slug) : undefined) as any;

if (!user) {
  // allow Nuxt to show 404
  throw createError({ statusCode: 404, statusMessage: 'Profil nenalezen' });
}
</script>

<template>
  <div class="w-full">
    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg items-start">
          <div class="lg:col-span-1">
            <div class="aspect-3/4 overflow-hidden bg-surface-container rounded-sm shadow-sm">
              <img :src="user.photo" :alt="user.name" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="lg:col-span-2 space-y-stack-md">
            <h1 class="font-display-xl text-display-xl text-primary-800">{{ user.name }}</h1>
            <p class="text-label-caps text-secondary-700 uppercase tracking-widest">{{ user.role }}</p>
            <p class="text-body-md text-on-surface-variant">{{ user.description }}</p>
            <p class="mt-stack-md font-semibold text-primary-800">"{{ user.slogan }}"</p>
            <p class="mt-stack-md text-sm text-on-surface-variant">Značka: <strong>{{ user.brand }}</strong></p>
          </div>
        </div>
      </UContainer>
    </section>

    <PeopleCarousel />
  </div>
</template>
