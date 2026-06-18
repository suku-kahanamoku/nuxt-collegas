<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'solid' | 'outline';
    type?: 'button' | 'submit' | 'reset';
    class?: string;
  }>(),
  {
    variant: 'solid',
    type: 'button',
  }
);

const buttonClass = computed(() => {
  const variantClass = props.variant === 'outline'
    ? 'border border-on-primary/30 text-on-primary px-8 py-4 font-label-caps uppercase tracking-widest hover:border-secondary-fixed hover:text-secondary-fixed transition-all'
    : 'bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all';
  
  return `${variantClass} ${props.class || ''}`;
});
</script>

<template>
  <button :type="props.type" :class="buttonClass">
    <slot />
  </button>
</template>
