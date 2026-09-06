<script setup lang="ts">
type FilterOption = {
  label: string;
  value: string;
  count?: number;
};

const props = withDefaults(
  defineProps<{
    options: FilterOption[];
    theme?: "light" | "dark";
    ariaLabel?: string;
  }>(),
  {
    theme: "light",
    ariaLabel: "Filtrovat obsah",
  },
);

const model = defineModel<string>({ required: true });
const isDark = computed(() => props.theme === "dark");
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-2"
    role="group"
    :aria-label="ariaLabel"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :aria-pressed="model === option.value"
      :class="[
        'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
        model === option.value
          ? isDark
            ? 'border-secondary-400 bg-secondary-400 text-primary-950'
            : 'border-secondary-800 bg-secondary-800 text-white'
          : isDark
            ? 'border-primary-700 text-white hover:border-secondary-400'
            : 'border-secondary-800 text-secondary-800 hover:bg-secondary-50',
      ]"
      @click="model = option.value"
    >
      {{ option.label }}<template v-if="option.count !== undefined">
        ({{ option.count }})</template
      >
    </button>
  </div>
</template>
