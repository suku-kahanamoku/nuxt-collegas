<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="border border-outline-variant/30 bg-surface p-stack-lg flex flex-col gap-stack-sm">
    <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem;">{{ icon }}</span>
    <h3 class="text-title-lg font-serif text-primary-900">{{ title }}</h3>
    <p class="text-body-md text-on-surface-variant">{{ description }}</p>
  </div>
</template>
