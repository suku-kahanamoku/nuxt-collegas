<script setup lang="ts">
import services from "~/assets/data/service-menu.json";
</script>

<template>
  <!-- ── Naše služby ── -->
  <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
          Naše služby
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        <UiBaseCard v-for="s in services" :key="s.key" :to="s.to">
          <template #header>
            <UiTitle size="sm">
              <template #eyebrow>
                <UIcon :name="s.icon" class="text-secondary-700 text-4xl" />
              </template>
              <template #title>
                <h3 class="text-title-md md:text-title-lg font-serif text-primary-800">
                  {{ s.title }}
                </h3>
              </template>
            </UiTitle>
          </template>

          <p class="text-body-md text-on-surface-variant flex-1 whitespace-break-spaces">
            {{ s.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-secondary-700 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
            >
              {{ s.ctaLabel }}
              <UIcon
                name="i-material-symbols-arrow-forward"
                class="text-body-md transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </template>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
