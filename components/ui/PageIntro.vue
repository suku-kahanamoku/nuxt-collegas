<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    description?: string;
    bgImage?: string;
    theme?: "dark" | "light";
  }>(),
  {
    description: "",
    theme: "dark",
  },
);

const isDark = computed(() => props.theme === "dark");
</script>

<template>
  <UiIntro :bg-image="bgImage" :ui="{ bg: isDark }">
    <template #header>
      <UiTitle size="md">
        <template #eyebrow>
          <span
            :class="[
              'text-label-caps uppercase block tracking-widest font-semibold',
              isDark ? 'text-secondary-fixed' : 'text-secondary-800',
            ]"
          >
            {{ eyebrow }}
          </span>
        </template>
        <template #title>
          <h1
            :class="[
              'text-headline-lg md:text-display-xl font-serif leading-tight',
              isDark ? 'text-on-primary' : 'text-primary-800',
            ]"
          >
            {{ title }}
          </h1>
        </template>
      </UiTitle>
    </template>

    <template #description>
      <slot name="description">
        <p
          v-if="description"
          :class="[
            'text-body-lg max-w-2xl mt-stack-md whitespace-break-spaces',
            isDark
              ? 'text-on-primary-container opacity-90'
              : 'text-on-surface-variant',
          ]"
        >
          {{ description }}
        </p>
      </slot>
    </template>
  </UiIntro>
</template>
