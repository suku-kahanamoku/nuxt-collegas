<script setup lang="ts">
defineProps<{
  title: string;
  menus: Array<{ label: string; to: string }>;
  calloutTitle?: string;
  calloutDescription?: string;
  calloutLabel?: string;
  calloutTo?: string;
}>();
</script>

<template>
  <aside class="lg:col-span-4 space-y-stack-md">
    <div class="bg-surface-container-highest p-stack-lg border-t-4 border-secondary-700">
      <h3 class="text-headline-md font-serif text-primary-900 mb-stack-md">{{ title }}</h3>
      <nav class="space-y-stack-md">
        <NuxtLink
          v-for="link in menus"
          :key="link.to"
          :to="link.to"
          class="group flex justify-between items-center py-stack-sm border-b border-outline-variant/50 hover:text-secondary-700 hover:opacity-70 transition-opacity last:border-b-0"
        >
          <span class="text-body-md font-semibold">{{ link.label }}</span>
          <span class="material-symbols-outlined text-secondary-700 transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
        </NuxtLink>
      </nav>
    </div>
    <div v-if="calloutTitle" class="bg-surface-container p-stack-lg">
      <h4 class="text-headline-md font-serif text-primary-900 mb-stack-sm">{{ calloutTitle }}</h4>
      <p v-if="calloutDescription" class="text-body-md text-on-surface-variant mb-stack-md">{{ calloutDescription }}</p>
      <NuxtLink
        v-if="calloutLabel && calloutTo"
        :to="calloutTo"
        class="group inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
      >
        {{ calloutLabel }}
        <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </NuxtLink>
    </div>
  </aside>
</template>
