<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="bg-surface rounded-md p-stack-lg flex flex-col gap-stack-sm border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 bg-gradient-to-br from-white to-[#f7faf8] shadow-inner shadow-lg">
    <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem;">{{ icon }}</span>
    <h3 class="text-title-lg font-serif text-primary-900">{{ title }}</h3>
    <p class="text-body-md text-on-surface-variant">{{ description }}</p>
  </div>
</template>
