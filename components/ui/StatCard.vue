<script setup lang="ts">
// use global UiCounter (auto-registered from components/ui)

const { value, label, counterDuration, counterInterval } = defineProps<{
  value: string | number;
  label: string;
  counterDuration?: number;
  counterInterval?: number;
}>();
</script>

<template>
  <UiBaseCard>
    <template #header>
      <span class="text-headline-lg font-serif text-secondary-700">
        <UiCounter :value="value" :duration="counterDuration" :interval="counterInterval" />
      </span>
      <h3 class="sr-only">{{ label }}</h3>
    </template>
    <p class="text-body-md text-on-surface-variant mt-1">{{ label }}</p>
  </UiBaseCard>
</template>
