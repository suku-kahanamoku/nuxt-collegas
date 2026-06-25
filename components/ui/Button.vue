<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "solid" | "outline";
    type?: "button" | "submit" | "reset";
    to?: string;
    loading?: boolean;
    class?: string;
  }>(),
  {
    variant: "solid",
    type: "button",
    loading: false,
  },
);

const buttonClass = computed(() => {
  const variantClass =
    props.variant === "outline"
      ? "border border-on-primary/30 text-on-primary px-8 py-4 font-label-caps uppercase tracking-widest hover:border-secondary-fixed hover:text-secondary-fixed transition-all"
      : "bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all";

  return `${variantClass} ${props.loading ? "opacity-60 cursor-not-allowed" : ""} ${props.class || ""}`;
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="['inline-flex items-center gap-2', buttonClass]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="props.type"
    :disabled="props.loading"
    :class="['inline-flex items-center gap-2', buttonClass]"
  >
    <UIcon
      v-if="loading"
      name="i-material-symbols-progress-activity"
      class="animate-spin size-4 shrink-0"
    />
    <slot />
  </button>
</template>
