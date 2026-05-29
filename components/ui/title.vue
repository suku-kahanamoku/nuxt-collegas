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
        class="text-label-caps text-secondary-700 uppercase block tracking-widest font-semibold"
      >
        {{ eyebrow }}
      </span>
    </slot>

    <slot name="title">
      <h3 class="text-display-xl font-serif text-primary-900 leading-none">
        {{ title }}
      </h3>
    </slot>

    <div
      v-if="divider"
      :class="['h-0.5', dividerWidths[props.size] ?? 'w-20', 'rounded-full']"
      style="
        background: linear-gradient(
          90deg,
          rgb(116, 91, 38),
          rgb(228, 194, 131),
          rgb(116, 91, 38)
        );
        box-shadow: rgba(228, 194, 131, 0.45) 0px 1px 6px;
      "
    ></div>
  </div>
</template>
