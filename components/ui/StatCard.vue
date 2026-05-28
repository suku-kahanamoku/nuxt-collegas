<script setup lang="ts">
import UiCounter from "./UiCounter.vue";

const { value, label, counterDuration, counterInterval } = defineProps<{
  value: string | number;
  label: string;
  counterDuration?: number;
  counterInterval?: number;
}>();
</script>

<template>
  <div
    class="rounded-md p-stack-md border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35 bg-gradient-to-br from-white to-[#f7faf8] shadow-inner shadow-lg"
  >
    <span class="text-headline-lg font-serif text-secondary-700">
      <UiCounter
        :value="value"
        :duration="counterDuration"
        :interval="counterInterval"
      />
    </span>
    <p class="text-body-md text-on-surface-variant mt-1">{{ label }}</p>
  </div>
</template>
