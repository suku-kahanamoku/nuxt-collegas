<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <UiBaseCard>
    <template #header>
      <div class="shrink-0 flex items-start pt-0.5">
        <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem">{{ icon }}</span>
      </div>
      <h3 class="text-title-md font-serif text-primary-900 mb-stack-xs">{{ title }}</h3>
    </template>
    <p class="text-body-md text-on-surface-variant">{{ description }}</p>
  </UiBaseCard>
</template>
