<script setup lang="ts">
const props = defineProps({
  to: { type: [String, Object], required: false },
});
</script>

<template>
  <UCard
    :ui="{ body: 'h-full' }"
    class="h-full rounded-md border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 shadow-inner shadow-lg"
  >
    <NuxtLink
      v-if="to"
      :to="to"
      class="group block rounded-md focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2 h-full"
    >
      <div class="flex flex-col gap-stack-sm h-full">
        <slot name="header" />

        <slot />

        <div v-if="$slots.footer" class="mt-auto">
          <slot name="footer" />
        </div>
      </div>
    </NuxtLink>
    <div
      v-else
      class="group block rounded-md focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2 h-full"
    >
      <div class="flex flex-col gap-stack-sm h-full">
        <slot name="header" />

        <slot />

        <div v-if="$slots.footer" class="mt-auto">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </UCard>
</template>
