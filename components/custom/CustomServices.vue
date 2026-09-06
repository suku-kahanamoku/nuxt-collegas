<script setup lang="ts">
import services from "~/assets/data/service-menu.json";

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    background?: string;
  }>(),
  {
    title: "Naše služby",
    description: "",
    background: "bg-surface-container-low",
  },
);
</script>

<template>
  <section :class="['py-stack-lg md:py-section-gap', background]">
    <UContainer>
      <UiSectionHeading
        :title="title"
        :description="description"
        :divider="Boolean(description)"
        class="mb-stack-lg"
      />

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(16rem,100%),1fr))] gap-stack-md"
      >
        <UiBaseCard
          v-for="service in services"
          :key="service.key"
          :to="service.to"
          :highlight="service.highlight"
        >
          <UIcon
            :name="service.icon"
            :class="[
              'text-4xl',
              service.highlight ? 'text-secondary-fixed' : 'text-secondary-700',
            ]"
          />

          <h3
            :class="[
              'text-title-md md:text-title-lg font-serif leading-tight',
              service.highlight ? 'text-on-primary' : 'text-primary-800',
            ]"
          >
            {{ service.title }}
          </h3>

          <p
            :class="[
              'text-body-md flex-1 whitespace-break-spaces',
              service.highlight
                ? 'text-on-primary/70'
                : 'text-on-surface-variant',
            ]"
          >
            {{ service.description }}
          </p>

          <template #footer>
            <span
              :class="[
                'inline-flex items-center gap-1 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity',
                service.highlight
                  ? 'text-secondary-fixed'
                  : 'text-secondary-700',
              ]"
            >
              {{ service.ctaLabel }}
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
