<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="border border-outline-variant/20 rounded-md p-stack-md transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-secondary-700/35" style="background: linear-gradient(160deg, #ffffff 0%, #f7faf8 100%); box-shadow: 0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 2px 6px rgba(4,41,30,0.04), 0 8px 20px rgba(4,41,30,0.06);">
    <span class="text-headline-lg font-serif text-secondary-700">{{ value }}</span>
    <p class="text-body-md text-on-surface-variant mt-1">{{ label }}</p>
  </div>
</template>
