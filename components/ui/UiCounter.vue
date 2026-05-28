<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { useRafFn } from "@vueuse/core";

const props = defineProps<{
  value: string | number;
  duration?: number; // ms
  interval?: number; // ms
  preserveOnSSR?: boolean; // if true, keep server-rendered text when it matches target
}>();

const display = ref(String(props.value));
const el = ref<HTMLElement | null>(null);
let rafControls: ReturnType<typeof useRafFn> | null = null;

function parseTarget(v: string | number) {
  const s = String(v);
  const m = s.match(/(\d+(?:\.\d+)?)/);
  const target = m ? Number(m[0]) : 0;
  const suffix = m ? s.replace(m[0], "") : "";
  return { target, suffix };
}

function startCounter(v: string | number) {
  const { target, suffix } = parseTarget(v);
  if (!target) {
    display.value = String(v);
    return;
  }

  // If SSR already rendered the final value and we want to preserve it,
  // do not reset to 0 or start the animation (prevents visual jump).
  if (props.preserveOnSSR !== false && el.value) {
    const ssrText = (el.value.textContent || "").trim();
    if (ssrText === String(v)) {
      display.value = ssrText;
      return;
    }
  }

  // stop previous animation if running
  if (rafControls && rafControls.pause) rafControls.pause();

  const duration = props.duration ?? 2000;
  // use requestAnimationFrame to drive smooth animation
  let elapsed = 0;
  rafControls = useRafFn(
    ({ delta }) => {
      elapsed += delta;
      const progress = Math.min(1, elapsed / duration);
      const valueNow = Math.round(progress * target);
      display.value = `${valueNow}${suffix}`;
      if (progress >= 1 && rafControls && rafControls.pause)
        rafControls.pause();
    },
    { immediate: true },
  );
}

onBeforeUnmount(() => {
  if (rafControls && rafControls.pause) rafControls.pause();
});

watch(
  () => props.value,
  (v) => startCounter(v),
  { immediate: true },
);

onMounted(() => startCounter(props.value));
</script>

<template>
  <span
    ref="el"
    role="button"
    tabindex="0"
    class="cursor-pointer select-none"
    @click="startCounter(props.value)"
    @keydown.enter.prevent="startCounter(props.value)"
    @keydown.space.prevent="startCounter(props.value)"
  >
    {{ display }}
  </span>
</template>
