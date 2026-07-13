<script setup lang="ts">
import destinations from "~/assets/data/service-menu.json";
</script>

<template>
  <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
          Kde vám můžeme pomoci?
        </h2>
        <p
          class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
        >
          Vyberte oblast, která vás zajímá, a zjistěte, co pro vás COLLEGA může
          udělat.
        </p>
        <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
        <UiBaseCard
          v-for="dest in destinations"
          :key="dest.key"
          :to="dest.to"
          :highlight="dest.highlight"
        >
          <UIcon
            :name="dest.icon"
            class="text-4xl"
            :class="
              dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'
            "
          />

          <h3
            class="text-title-md md:text-title-lg font-serif leading-tight"
            :class="dest.highlight ? 'text-on-primary' : 'text-primary-800'"
          >
            {{ dest.title }}
          </h3>

          <p
            class="text-body-md flex-1 whitespace-break-spaces"
            :class="
              dest.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'
            "
          >
            {{ dest.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
              :class="
                dest.highlight ? 'text-secondary-fixed' : 'text-secondary-700'
              "
            >
              {{ dest.ctaLabel }}
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
