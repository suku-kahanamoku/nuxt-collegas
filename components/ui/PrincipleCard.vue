<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="rounded-md p-stack-lg flex gap-stack-md border border-outline-variant/20 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-700/35 hover:shadow-[0_2px_6px_rgba(4,41,30,0.08),0_16px_36px_rgba(4,41,30,0.11)]" style="background: linear-gradient(160deg, #ffffff 0%, #f7faf8 100%); box-shadow: 0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 2px 6px rgba(4,41,30,0.04), 0 8px 20px rgba(4,41,30,0.06);">
    <div class="shrink-0 flex items-start pt-0.5">
      <span class="material-symbols-outlined text-secondary-700" style="font-size: 1.75rem;">{{ icon }}</span>
    </div>
    <div>
      <h3 class="text-title-md font-serif text-primary-900 mb-stack-xs">{{ title }}</h3>
      <p class="text-body-md text-on-surface-variant">{{ description }}</p>
    </div>
  </div>
</template>
