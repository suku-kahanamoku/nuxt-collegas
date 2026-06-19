<script setup lang="ts">
withDefaults(
  defineProps<{
    bg?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgClass?: string;
    gap?: string;
    cols?: "md" | "lg";
    leftClass?: string;
    rightClass?: string;
  }>(),
  {
    bg: "bg-surface",
    imgAlt: "",
    imgClass: "w-full aspect-square object-cover shadow-sm",
    gap: "gap-section-gap",
    cols: "md",
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
          <slot name="image">
            <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :class="imgClass" />
          </slot>
          <slot name="overlay" />
        </div>

        <!-- Right: content -->
        <div :class="rightClass">
          <slot />
        </div>
      </div>
    </UContainer>
  </section>
</template>
