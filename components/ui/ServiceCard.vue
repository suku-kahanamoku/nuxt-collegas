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
    class="group block rounded-md p-stack-lg border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2 bg-gradient-to-br from-white to-[#f7faf8] shadow-inner shadow-lg"
  >
    <div class="flex flex-col gap-stack-sm h-full">
      <span class="material-symbols-outlined text-secondary-700" style="font-size: 2rem;">{{ icon }}</span>
      <h3 class="text-headline-md font-serif text-primary-900">{{ title }}</h3>
      <div class="w-8 h-0.5 bg-secondary-700/40"></div>
      <p class="text-body-md text-on-surface-variant flex-1">{{ description }}</p>
      <span class="inline-flex items-center gap-1 text-secondary-700 text-label-caps font-semibold uppercase tracking-widest mt-stack-sm group-hover:opacity-70 transition-opacity">
        {{ linkLabel || "Více informací" }}
        <span class="material-symbols-outlined text-body-md transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </span>
    </div>
  </NuxtLink>
</template>
