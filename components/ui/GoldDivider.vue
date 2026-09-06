<script setup lang="ts">
withDefaults(
  defineProps<{
    widthClass?: string;
  }>(),
  {
    widthClass: "w-20",
  },
);
</script>

<template>
  <div
    :class="['h-0.5 rounded-full', widthClass]"
    style="
      background: linear-gradient(
        90deg,
        rgb(116, 91, 38),
        rgb(228, 194, 131),
        rgb(116, 91, 38)
      );
      box-shadow: rgba(228, 194, 131, 0.45) 0px 1px 6px;
    "
  />
</template>
