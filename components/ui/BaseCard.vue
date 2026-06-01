<script setup lang="ts">
const props = defineProps({
  to: { type: [String, Object], required: false },
  highlight: { type: Boolean, default: false },
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group flex flex-col gap-stack-sm rounded-md border p-8 h-full transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="
      highlight
        ? 'bg-primary-900 border-primary-900 hover:bg-primary-800 focus-visible:outline-secondary-fixed'
        : 'bg-surface border-secondary-700/10 hover:border-secondary-700/35 focus-visible:outline-secondary-700/60'
    "
  >
    <slot name="header" />
    <slot />
    <div v-if="$slots.footer" class="mt-auto">
      <slot name="footer" />
    </div>
  </NuxtLink>
  <div
    v-else
    class="group flex flex-col gap-stack-sm rounded-md border p-8 h-full transition-all duration-200 ease-out"
    :class="
      highlight
        ? 'bg-primary-900 border-primary-900'
        : 'bg-surface border-secondary-700/10 hover:border-secondary-700/35'
    "
  >
    <slot name="header" />
    <slot />
    <div v-if="$slots.footer" class="mt-auto">
      <slot name="footer" />
    </div>
  </div>
</template>
