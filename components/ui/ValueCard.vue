<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="border border-outline-variant/20 bg-surface rounded-md p-stack-lg flex flex-col gap-stack-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-secondary-700/35" style="box-shadow: 0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 2px 6px rgba(4,41,30,0.04), 0 8px 20px rgba(4,41,30,0.06); background: linear-gradient(160deg, #ffffff 0%, #f7faf8 100%);" @mouseover="$el.style.boxShadow='0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 4px 10px rgba(4,41,30,0.06), 0 12px 28px rgba(4,41,30,0.09)'" @mouseleave="$el.style.boxShadow='0 2px 0 rgba(255,255,255,0.9) inset, 0 -1px 0 rgba(4,41,30,0.06) inset, 0 2px 6px rgba(4,41,30,0.04), 0 8px 20px rgba(4,41,30,0.06)'">
    <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem;">{{ icon }}</span>
    <h3 class="text-title-lg font-serif text-primary-900">{{ title }}</h3>
    <p class="text-body-md text-on-surface-variant">{{ description }}</p>
  </div>
</template>
