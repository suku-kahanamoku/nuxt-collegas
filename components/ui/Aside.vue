<script setup lang="ts">
defineProps<{
  title: string;
  menus: Array<{ label: string; to: string }>;
  calloutTitle?: string;
  calloutDescription?: string;
  calloutLabel?: string;
  calloutTo?: string;
}>();
</script>

<template>
  <aside class="lg:col-span-4 space-y-stack-md">
    <div
      class="bg-surface-container-highest p-stack-lg border-t-4 border-secondary-700"
    >
      <h3 class="text-headline-md font-serif text-primary-900 mb-stack-md">
        {{ title }}
      </h3>
      <nav class="space-y-stack-md">
        <UButton
          v-for="link in menus"
          :key="link.to"
          :to="link.to"
          variant="link"
          color="secondary"
          trailing-icon="i-material-symbols-arrow-forward"
          class="w-full justify-between py-stack-sm border-b border-outline-variant/50 last:border-b-0 !text-primary-900 hover:!text-secondary-700"
          :ui="{
            trailingIcon:
              'transition-transform duration-200 group-hover:translate-x-1 text-secondary-700',
          }"
        >
          <span class="text-body-sm font-semibold">{{ link.label }}</span>
        </UButton>
      </nav>
    </div>
    <div v-if="calloutTitle" class="bg-surface-container p-stack-lg">
      <h4 class="text-lg font-serif text-primary-900 mb-stack-sm">
        {{ calloutTitle }}
      </h4>
      <p
        v-if="calloutDescription"
        class="text-body-sm text-on-surface-variant mb-stack-md"
      >
        {{ calloutDescription }}
      </p>
      <UButton
        v-if="calloutLabel && calloutTo"
        :to="calloutTo"
        variant="link"
        color="secondary"
        trailing-icon="i-material-symbols-arrow-forward"
        class="!p-0"
        :ui="{
          trailingIcon:
            'transition-transform duration-200 group-hover:translate-x-1',
        }"
      >
        {{ calloutLabel }}
      </UButton>
    </div>
  </aside>
</template>
