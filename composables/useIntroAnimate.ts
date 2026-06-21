import { ref, onMounted } from "vue";

export function useIntroAnimate(options?: {
  stagger?: number;
  initialDelay?: number;
}) {
  const stagger = options?.stagger ?? 30;
  const initialDelay = options?.initialDelay ?? 80;
  const mounted = ref(false);

  onMounted(() => setTimeout(() => (mounted.value = true), initialDelay));

  function splitChars(text = "") {
    return (text || "")
      .split("")
      .map((ch, idx) => ({ ch, delay: `${idx * stagger}ms` }));
  }

  function animClass(direction?: "bottom" | "left" | "right") {
    if (direction === "left") return "from-left";
    if (direction === "right") return "from-right";
    return "from-bottom";
  }

  return { mounted, splitChars, animClass };
}
