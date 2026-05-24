<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  to: string;
  linkLabel?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block border border-outline-variant/30 bg-surface rounded-md p-stack-lg shadow-[0_1px_2px_rgba(4,41,30,0.05),0_8px_24px_rgba(4,41,30,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-700/35 hover:shadow-[0_2px_6px_rgba(4,41,30,0.08),0_16px_36px_rgba(4,41,30,0.11)] focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2"
  >
    <div class="flex flex-col gap-stack-sm h-full">
      <span class="material-symbols-outlined text-secondary-700 text-2xl">{{ icon }}</span>
      <h3 class="text-headline-md font-serif text-primary-900">{{ title }}</h3>
      <div class="w-8 h-0.5 bg-secondary-700/40"></div>
      <p class="text-body-md text-on-surface-variant flex-1">{{ description }}</p>
      <span class="inline-flex items-center gap-1 text-secondary-700 text-label-caps font-semibold uppercase tracking-widest mt-stack-sm group-hover:opacity-70 transition-opacity">
        {{ linkLabel || "Více informací" }}
        <span class="material-symbols-outlined text-body-md transition-transform group-hover:translate-x-1">arrow_forward</span>
      </span>
    </div>
  </NuxtLink>
</template>
