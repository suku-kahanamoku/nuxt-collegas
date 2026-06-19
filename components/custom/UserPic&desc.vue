<script setup lang="ts">
withDefaults(
  defineProps<{
    bg?: string;
    bgImage?: string;
    imgClass?: string;
    cols?: "md" | "lg";
    gap?: string;
    leftClass?: string;
    rightClass?: string;
  }>(),
  {
    bg: "bg-surface",
    imgClass: "",
    cols: "md",
    gap: "gap-section-gap",
    leftClass: "",
    rightClass: "",
  },
);
</script>

<template>
  <section :class="['py-section-gap', bg]">
    <UContainer>
      <div
        :class="[
          'grid grid-cols-1 items-center',
          cols === 'lg' ? 'lg:grid-cols-2' : 'md:grid-cols-2',
          gap,
        ]"
      >
        <!-- Left: image + overlay -->
        <div :class="['relative', leftClass]">
          <div class="aspect-4/5 relative">
            <div
              :class="['w-full h-full bg-cover bg-center', imgClass]"
              :style="bgImage ? { backgroundImage: `url(${bgImage})` } : undefined"
            />
            <slot name="overlay" />
          </div>
        </div>

        <!-- Right: content -->
        <div :class="rightClass">
          <slot />
        </div>
      </div>
    </UContainer>
  </section>
</template>
