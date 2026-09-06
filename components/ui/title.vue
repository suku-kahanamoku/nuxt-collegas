<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    /** sm | md | lg */
    size?: "sm" | "md" | "lg";
    divider?: boolean;
  }>(),
  {
    size: "md",
    divider: true,
  },
);

const dividerWidths: Record<string, string> = {
  sm: "w-12",
  md: "w-20",
  lg: "w-28",
};
</script>

<template>
  <div :class="['w-full flex flex-col items-start', 'gap-stack-' + props.size]">
    <slot name="eyebrow">
      <span
        v-if="eyebrow"
        class="text-label-caps text-secondary-800 uppercase block tracking-widest font-semibold"
      >
        {{ eyebrow }}
      </span>
    </slot>

    <slot name="title">
      <h3 class="text-title-md md:text-title-lg font-serif text-primary-800 leading-none">
        {{ title }}
      </h3>
    </slot>

    <UiGoldDivider
      v-if="divider"
      :width-class="dividerWidths[props.size] ?? 'w-20'"
    />
  </div>
</template>
