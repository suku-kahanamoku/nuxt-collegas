<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useIntervalFn } from "@vueuse/core";

const props = defineProps<{
  value: string | number;
  duration?: number; // ms
  interval?: number; // ms
  preserveOnSSR?: boolean; // if true, keep server-rendered text when it matches target
}>();

const display = ref(String(props.value));
const el = ref<HTMLElement | null>(null);

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
    const ssrText = (el.value.textContent || '').trim();
    if (ssrText === String(v)) {
      display.value = ssrText;
      return;
    }
  }

  const duration = props.duration ?? 2000;
  const intervalMs = props.interval ?? 50;
  const frames = Math.max(1, Math.round(duration / intervalMs));
  const step = Math.max(1, Math.ceil(target / frames));
  const current = ref(0);
  const { pause } = useIntervalFn(
    () => {
      current.value += step;
      if (current.value >= target) {
        current.value = target;
        display.value = `${current.value}${suffix}`;
        pause();
      } else {
        display.value = `${current.value}${suffix}`;
      }
    },
    intervalMs,
    { immediate: true },
  );
}

watch(
  () => props.value,
  (v) => startCounter(v),
  { immediate: true },
);

onMounted(() => startCounter(props.value));
</script>

<template>
  <span ref="el">{{ display }}</span>
</template>
