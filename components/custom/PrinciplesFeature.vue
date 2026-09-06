<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    body: string;
    quote: string;
    image?: string;
    imageAlt?: string;
  }>(),
  {
    image: "/img/other/compass.png",
    imageAlt: "Naše zásady",
  },
);
</script>

<template>
  <CustomUserPic&desc :bg-image="image" :img-alt="imageAlt" img-class="shadow-sm">
    <template #overlay>
      <span class="text-headline-lg leading-none md:text-display-xl">20+</span>
      <span class="font-label-caps uppercase tracking-widest">
        LET ZKUŠENOSTÍ PRO VÁS
      </span>
    </template>

    <div class="space-y-stack-md from-right">
      <span
        class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
      >
        Naše zásady
      </span>
      <h2 class="text-headline-md font-serif text-primary-800 md:text-headline-lg">
        {{ title }}
      </h2>
      <p class="font-body-md text-body-md text-on-surface-variant">
        {{ body }}
      </p>
      <p
        class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
      >
        „{{ quote }}“
      </p>
    </div>
  </CustomUserPic&desc>
</template>
