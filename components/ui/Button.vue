<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const props = defineProps<ButtonProps>();

const spotlightStyle = ref<Record<string, string>>({
  "--spotlight-x": "-9999px",
  "--spotlight-y": "-9999px",
  "--shadow-x": "0px",
  "--shadow-y": "2px",
  "--shadow-opacity": "0",
});

const isHovered = ref(false);

function onMouseMove(e: MouseEvent) {
  isHovered.value = true;
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
  isHovered.value = false;
  spotlightStyle.value = {
    "--spotlight-x": "-9999px",
    "--spotlight-y": "-9999px",
    "--shadow-x": "0px",
    "--shadow-y": "2px",
    "--shadow-opacity": "0",
  };
}
</script>

<template>
  <div
    class="relative inline-flex [--spotlight-size:300px] [--spotlight-color:var(--color-secondary-700)] [--shadow-color:var(--color-secondary-700)] [box-shadow:calc(var(--shadow-x,0px))_calc(var(--shadow-y,2px))_20px_2px_color-mix(in_srgb,var(--shadow-color)_calc(var(--shadow-opacity,0)*20%),transparent)] transition-shadow duration-200 ease-out rounded-[inherit]"
    :style="spotlightStyle"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- glow border layer -->
    <div
      class="absolute -inset-px rounded-[inherit] pointer-events-none z-0 transition-opacity duration-400 bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_var(--spotlight-x)_var(--spotlight-y),var(--spotlight-color),transparent_60%)]"
      :class="isHovered ? 'opacity-100' : 'opacity-0'"
    />
    <UButton v-bind="props" class="relative z-[1]">
      <slot />
    </UButton>
  </div>
</template>
