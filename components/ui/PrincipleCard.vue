<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="bg-surface border border-outline-variant/30 p-stack-lg flex gap-stack-md">
    <div class="shrink-0 w-10 h-10 bg-secondary-700/10 flex items-center justify-center">
      <span class="material-symbols-outlined text-secondary-700" style="font-size: 1.25rem;">{{ icon }}</span>
    </div>
    <div>
      <h3 class="text-title-md font-serif text-primary-900 mb-stack-xs">{{ title }}</h3>
      <p class="text-body-md text-on-surface-variant">{{ description }}</p>
    </div>
  </div>
</template>
