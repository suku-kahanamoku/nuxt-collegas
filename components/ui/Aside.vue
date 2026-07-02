<script setup lang="ts">
defineProps<{
  title?: string;
  menus: Array<{
    label: string;
    to: string;
    target?: string;
    rel?: string;
    img?: string;
    alt?: string;
    abbr?: string;
  }>;
  callout?: {
    title?: string;
    description?: string;
    label?: string;
    to?: string;
  };
}>();
</script>

<template>
  <UPageAside
    class="lg:col-span-4 p-0! self-start sticky top-8 mt-0"
    :ui="{ container: 'space-y-stack-md' }"
  >
    <div
      class="bg-surface-container-highest p-stack-lg border-t-4 border-secondary-700"
    >
      <h3
        v-if="title"
        class="text-title-md md:text-title-lg font-serif text-primary-800 mb-stack-md"
      >
        {{ title }}
      </h3>
      <nav class="space-y-stack-md">
        <UButton
          v-for="(link, index) in menus"
          :key="link.to"
          :to="link.to"
          :target="link.target"
          :rel="link.rel"
          variant="link"
          color="secondary"
          trailing-icon="i-material-symbols-arrow-forward"
          class="w-full justify-between py-stack-sm border-b border-outline-variant/50 last:border-b-0 !text-primary-800 hover:!text-secondary-700"
          :ui="{
            trailingIcon:
              'transition-transform duration-200 group-hover:translate-x-1 text-secondary-700',
          }"
        >
          <slot name="item" :link="link" :index="index">
            <span class="text-body-sm font-semibold">{{ link.label }}</span>
          </slot>
        </UButton>
      </nav>
    </div>

    <div
      v-if="callout && callout.title"
      class="bg-surface-container p-stack-lg"
    >
      <h4 class="text-title-md font-serif text-primary-800 mb-stack-sm">
        {{ callout.title }}
      </h4>
      <p
        v-if="callout.description"
        class="text-body-sm text-on-surface-variant mb-stack-md"
      >
        {{ callout.description }}
      </p>
      <UButton
        v-if="callout.label && callout.to"
        :to="callout.to"
        variant="link"
        color="secondary"
        trailing-icon="i-material-symbols-arrow-forward"
        class="!p-0"
        :ui="{
          trailingIcon:
            'transition-transform duration-200 group-hover:translate-x-1',
        }"
      >
        {{ callout.label }}
      </UButton>
    </div>
  </UPageAside>
</template>
