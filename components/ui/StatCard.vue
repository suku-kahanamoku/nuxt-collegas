<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="border border-outline-variant/30 bg-surface p-stack-md">
    <span class="text-headline-lg font-serif text-secondary-700">{{ value }}</span>
    <p class="text-body-md text-on-surface-variant mt-1">{{ label }}</p>
  </div>
</template>
