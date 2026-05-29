<script setup lang="ts">
const props = defineProps({
  to: { type: [String, Object], required: false },
  divider: { type: Boolean, default: true },
});
</script>

<template>
  <UCard
    :ui="{ body: 'h-full p-0' }"
    class="h-full rounded-md border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 shadow-inner shadow-lg"
  >
    <NuxtLink
      v-if="to"
      :to="to"
      class="group block rounded-md p-stack-md focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2 bg-gradient-to-br from-white to-[#f7faf8] h-full"
    >
      <div class="flex flex-col gap-stack-sm h-full">
        <slot name="header" />
        <div v-if="divider" class="w-8 h-0.5 bg-secondary-700/40"></div>
        <slot />
        <div v-if="$slots.footer" class="mt-auto">
          <slot name="footer" />
        </div>
      </div>
    </NuxtLink>
    <div
      v-else
      class="group block rounded-md p-stack-md focus-visible:outline-2 focus-visible:outline-secondary-700/60 focus-visible:outline-offset-2 bg-gradient-to-br from-white to-[#f7faf8] h-full"
    >
      <div class="flex flex-col gap-stack-sm h-full">
        <slot name="header" />
        <div v-if="divider" class="w-8 h-0.5 bg-secondary-700/40"></div>
        <slot />
        <div v-if="$slots.footer" class="mt-auto">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </UCard>
</template>
