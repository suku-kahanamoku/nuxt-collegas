<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  /** Background image for full-bleed hero */
  bgImage?: string;
}>();
</script>

<template>
  <UiIntro
    :eyebrow="eyebrow"
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :bg-image="bgImage"
  />
</template>
