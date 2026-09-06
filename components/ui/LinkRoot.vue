<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw | null;
    fallbackTag?: string;
  }>(),
  {
    to: null,
    fallbackTag: "div",
  },
);

const isInternal = computed(
  () => typeof props.to !== "string" || props.to.startsWith("/"),
);
const opensNewTab = computed(
  () => typeof props.to === "string" && /^https?:\/\//.test(props.to),
);
const rootComponent = computed(() => {
  if (!props.to) return props.fallbackTag;
  return isInternal.value ? resolveComponent("NuxtLink") : "a";
});
const linkBindings = computed(() => {
  if (!props.to) return {};
  if (isInternal.value) return { to: props.to };

  return opensNewTab.value
    ? {
        href: props.to,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href: props.to };
});
</script>

<template>
  <component :is="rootComponent" v-bind="linkBindings">
    <slot />
  </component>
</template>
