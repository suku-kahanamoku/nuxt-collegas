<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    headingTag?: "h1" | "h2";
    bg?: string;
  }>(),
  {
    headingTag: "h2",
  },
);
</script>

<template>
  <section class="py-stack-lg md:py-section-gap" :class="props.bg ?? 'bg-surface'">
    <UContainer class="space-y-20">
      <div
        class="mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center"
      >
        <!-- Levá strana: label + heading + body -->
        <div class="md:col-span-7">
          <span
            v-if="props.label"
            class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
            >{{ props.label }}</span
          >
          <slot name="label" />
          <component
            :is="props.headingTag"
            :class="[
              props.headingTag === 'h1'
                ? 'text-headline-lg md:text-display-xl'
                : 'text-headline-md md:text-headline-lg',
              'text-primary-800 mb-8 leading-tight',
            ]"
          >
            <slot name="heading" />
          </component>
          <div
            class="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            <slot name="body" />
          </div>
        </div>

        <!-- Pravá strana: citát box -->
        <div class="md:col-span-5 from-right">
          <div
            class="relative p-stack-lg border border-outline-variant/30 bg-white shadow-sm"
          >
            <div
              class="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-secondary-700"
            ></div>
            <p
              class="font-body-md text-body-md italic text-primary-800 leading-relaxed"
            >
              <slot name="quote" />
            </p>
            <p class="mt-6 font-label-caps text-secondary-700">
              <slot name="attribution" />
            </p>
          </div>
        </div>
      </div>

      <!-- Volitelný footer slot (např. trust badges) -->
      <div v-if="$slots.footer" class="mx-auto px-gutter">
        <slot name="footer" />
      </div>
    </UContainer>
  </section>
</template>
