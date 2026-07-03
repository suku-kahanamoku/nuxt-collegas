<script setup lang="ts">
withDefaults(
  defineProps<{
    bg?: string;
    bgImage?: string;
    imgAlt?: string;
    imgClass?: string;
    cols?: "md" | "lg";
    leftClass?: string;
    rightClass?: string;
    overlayClass?: string;
  }>(),
  {
    bg: "bg-surface",
    imgAlt: "",
    imgClass: "",
    cols: "md",
    leftClass: "",
    rightClass: "",
    overlayClass:
      "-bottom-10 -right-10 w-64 h-64 bg-primary-900 p-stack-md hidden lg:flex flex-col justify-end",
  },
);
</script>

<template>
  <section :class="['py-stack-lg md:py-section-gap', bg]">
    <UContainer>
      <div
        :class="[
          'grid grid-cols-1 items-center gap-stack-lg lg:gap-stack-xl',
          cols === 'lg' ? 'lg:grid-cols-2' : 'md:grid-cols-2',
        ]"
      >
        <!-- Left: image + overlay (visually first on desktop via CSS order) -->
        <div
          :class="[
            cols === 'lg' ? 'lg:order-first' : 'md:order-first',
            'order-last',
            leftClass,
          ]"
        >
          <div class="aspect-4/5 relative">
            <NuxtImg
              v-if="bgImage"
              :src="bgImage"
              :alt="imgAlt"
              :class="[
                'inset-0 w-full h-full object-cover object-top',
                imgClass,
              ]"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:50vw xl:50vw"
            />
            <div
              v-else
              :class="['w-full h-full bg-surface-container', imgClass]"
            />
            <!-- Overlay box -->
            <div
              v-if="$slots.overlay"
              :class="['absolute text-on-primary from-bottom', overlayClass]"
            >
              <slot name="overlay" />
            </div>
          </div>
        </div>

        <!-- Right: content (first in DOM = first on mobile) -->
        <div
          :class="[
            cols === 'lg' ? 'lg:order-last' : 'md:order-last',
            'order-first',
            rightClass,
          ]"
        >
          <slot />
        </div>
      </div>
    </UContainer>
  </section>
</template>
