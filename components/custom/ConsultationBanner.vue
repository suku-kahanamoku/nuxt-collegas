<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    body: string;
    primaryLabel?: string;
    primaryTo?: string;
    secondaryLabel?: string;
    secondaryTo?: string;
  }>(),
  {
    primaryLabel: "Kontaktovat nás",
    primaryTo: "/contact#contact-form",
    secondaryTo: "/contact#contact-form",
  },
);
</script>

<template>
  <UiDarkBanner :title="title" :body="body">
    <div class="flex flex-col justify-center gap-stack-md sm:flex-row">
      <UiButton
        :to="primaryTo"
        variant="solid"
        class="group justify-center px-10 py-4 text-base bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors"
      >
        {{ primaryLabel }}
        <UIcon
          name="i-material-symbols-arrow-forward"
          class="size-5 transition-transform duration-200 group-hover:translate-x-1"
        />
      </UiButton>
      <UiButton
        v-if="secondaryLabel"
        :to="secondaryTo"
        variant="outline"
        class="justify-center px-10 py-4 text-base border-on-primary text-on-primary hover:bg-on-primary/10"
      >
        {{ secondaryLabel }}
      </UiButton>
    </div>
  </UiDarkBanner>
</template>
