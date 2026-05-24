<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="border border-outline-variant/30 bg-surface rounded-md p-stack-md shadow-[0_1px_2px_rgba(4,41,30,0.05),0_8px_24px_rgba(4,41,30,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-700/35 hover:shadow-[0_2px_6px_rgba(4,41,30,0.08),0_16px_36px_rgba(4,41,30,0.11)]">
    <span class="text-headline-lg font-serif text-secondary-700">{{ value }}</span>
    <p class="text-body-md text-on-surface-variant mt-1">{{ label }}</p>
  </div>
</template>
