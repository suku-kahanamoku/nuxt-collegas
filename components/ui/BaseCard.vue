<script setup lang="ts">
import { resolveComponent, computed, ref } from "vue";

const props = defineProps({
  to: { type: [String, Object], required: false },
  highlight: { type: Boolean, default: false },
});

const isInternal = (to?: string | object) => {
  if (typeof to === "string") return to.startsWith("/");
  return true;
};
const NuxtLinkComponent = resolveComponent("NuxtLink");

const spotlightStyle = ref<Record<string, string>>({
  "--spotlight-x": "-9999px",
  "--spotlight-y": "-9999px",
  "--shadow-x": "0px",
  "--shadow-y": "2px",
  "--shadow-opacity": "0",
});

function onMouseMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;
  const nx = (relX / rect.width - 0.5) * 2;
  const ny = (relY / rect.height - 0.5) * 2;
  spotlightStyle.value = {
    "--spotlight-x": `${relX}px`,
    "--spotlight-y": `${relY}px`,
    "--shadow-x": `${nx * 6}px`,
    "--shadow-y": `${ny * 6}px`,
    "--shadow-opacity": "1",
  };
}

function onMouseLeave() {
  spotlightStyle.value = {
    "--spotlight-x": "-9999px",
    "--spotlight-y": "-9999px",
    "--shadow-x": "0px",
    "--shadow-y": "2px",
    "--shadow-opacity": "0",
  };
}

const rootClass =
  "group relative flex flex-col rounded-md h-full " +
  "[--spotlight-size:420px] " +
  "[box-shadow:calc(var(--shadow-x,0px))_calc(var(--shadow-y,2px))_12px_0px_color-mix(in_srgb,var(--shadow-color)_calc(var(--shadow-opacity,0)*10%),transparent)] " +
  "transition-shadow duration-200 ease-out";

const spotlightColors = computed(() => {
  const isHighlight = props.highlight;
  return isHighlight
    ? "[--spotlight-color:var(--color-secondary-fixed)] [--shadow-color:var(--color-secondary-fixed)]"
    : "[--spotlight-color:var(--color-secondary-700)] [--shadow-color:var(--color-secondary-700)]";
});
</script>

<template>
  <component
    :is="props.to ? (isInternal(props.to) ? NuxtLinkComponent : 'a') : 'div'"
    v-bind="
      props.to
        ? isInternal(props.to)
          ? { to: props.to }
          : { href: props.to, target: '_blank', rel: 'noopener' }
        : {}
    "
    :style="spotlightStyle"
    :class="[
      rootClass,
      spotlightColors,
      props.to && 'focus-visible:outline-2 focus-visible:outline-offset-2',
      props.to && highlight
        ? 'focus-visible:outline-secondary-fixed'
        : props.to && 'focus-visible:outline-secondary-700/60',
    ]"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- glow layer: 1px outside, visible only through the border ring -->
    <div
      class="absolute -inset-px rounded-[inherit] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color),transparent_60%)]"
    />
    <!-- background + border layer: covers the inside, exposes the 1px glow ring -->
    <div
      class="absolute inset-0 rounded-[inherit] pointer-events-none z-1 border-[0.2px] transition-colors duration-200"
      :class="
        highlight
          ? 'bg-primary-900 border-primary-900 group-hover:bg-primary-800'
          : 'bg-surface border-secondary-700/10 group-hover:border-secondary-700/35'
      "
    />
    <!-- content -->
    <div class="relative z-2 flex flex-col gap-stack-sm flex-1 p-8">
      <slot name="header" />
      <slot />
      <div v-if="$slots.footer" class="mt-auto">
        <slot name="footer" />
      </div>
    </div>
  </component>
</template>
