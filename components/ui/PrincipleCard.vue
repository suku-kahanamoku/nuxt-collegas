<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="rounded-md p-stack-lg flex gap-stack-md border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 bg-gradient-to-br from-white to-[#f7faf8] shadow-inner shadow-lg">
    <div class="shrink-0 flex items-start pt-0.5">
      <span class="material-symbols-outlined text-secondary-700" style="font-size: 1.75rem;">{{ icon }}</span>
    </div>
    <div>
      <h3 class="text-title-md font-serif text-primary-900 mb-stack-xs">{{ title }}</h3>
      <p class="text-body-md text-on-surface-variant">{{ description }}</p>
    </div>
  </div>
</template>
