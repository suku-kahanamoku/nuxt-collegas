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
    overlayClass?: string;
  }>(),
  {
    bg: "bg-surface",
    imgClass: "",
    cols: "md",
    gap: "gap-section-gap",
    leftClass: "",
    rightClass: "",
    overlayClass: "-bottom-10 -right-10 w-64 h-64 bg-primary-900 p-stack-md hidden lg:flex flex-col justify-end",
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
              :style="
                bgImage ? { backgroundImage: `url(${bgImage})` } : undefined
              "
            />
            <!-- Overlay box -->
            <div
              v-if="$slots.overlay"
              :class="['absolute text-on-primary', overlayClass]"
            >
              <slot name="overlay" />
            </div>
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
