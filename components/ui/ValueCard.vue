<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="bg-surface rounded-md p-stack-lg flex flex-col gap-stack-sm overflow-hidden transition-[transform,box-shadow] duration-300 ease-in-out hover:scale-[1.02]" style="box-shadow: 0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 2px 6px rgba(4,41,30,0.04), 0 8px 20px rgba(4,41,30,0.06); background: linear-gradient(160deg, #ffffff 0%, #f7faf8 100%);">
    <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem;">{{ icon }}</span>
    <h3 class="text-title-lg font-serif text-primary-900">{{ title }}</h3>
    <p class="text-body-md text-on-surface-variant">{{ description }}</p>
  </div>
</template>
