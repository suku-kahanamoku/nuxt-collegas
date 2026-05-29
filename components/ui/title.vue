<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    /** sm | md | lg */
    size?: "sm" | "md" | "lg";
    divider?: boolean;
    titleClass?: string;
  }>(),
  {
    size: "md",
    divider: true,
  },
);

const titleCls = computed(() => {
  if (props.titleClass) return props.titleClass;
  switch (props.size) {
    case "sm":
      return "text-headline-md";
    case "lg":
      return "text-display-2xl";
    default:
      return "text-display-xl";
  }
});
</script>

<template>
  <div class="w-full flex flex-col items-start gap-stack-md">
    <slot name="eyebrow">
      <span
        v-if="eyebrow"
        class="text-label-caps text-secondary-700 uppercase block tracking-widest font-semibold"
      >
        {{ eyebrow }}
      </span>
    </slot>

    <slot name="title">
      <span :class="[titleCls, 'font-serif text-primary-900 leading-none']">
        {{ title }}
      </span>
    </slot>

    <div
      v-if="divider"
      class="h-0.5 w-20 rounded-full"
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
