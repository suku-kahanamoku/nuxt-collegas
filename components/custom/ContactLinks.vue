<script setup lang="ts">
withDefaults(
  defineProps<{
    phone?: string;
    email?: string;
    location?: string;
    size?: "sm" | "md";
  }>(),
  {
    phone: "",
    email: "",
    location: "",
    size: "sm",
  },
);

const contactClass =
  "flex items-center text-white hover:opacity-75 transition-opacity";
</script>

<template>
  <div :class="size === 'md' ? 'space-y-5' : 'flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-8'">
    <UiLinkRoot
      v-if="phone"
      :to="`tel:${phone}`"
      :class="[contactClass, size === 'md' ? 'gap-4 text-base' : 'gap-2 text-sm']"
    >
      <UIcon
        name="mdi:phone"
        :class="[
          'shrink-0 text-secondary-400',
          size === 'md' ? 'h-6 w-6' : 'h-5 w-5',
        ]"
      />
      {{ phone }}
    </UiLinkRoot>
    <UiLinkRoot
      v-if="email"
      :to="`mailto:${email}`"
      :class="[contactClass, size === 'md' ? 'gap-4 text-base' : 'gap-2 text-sm']"
    >
      <UIcon
        name="i-material-symbols-mail"
        :class="[
          'shrink-0 text-secondary-400',
          size === 'md' ? 'h-6 w-6' : 'h-5 w-5',
        ]"
      />
      {{ email }}
    </UiLinkRoot>
    <span
      v-if="location"
      :class="[
        'flex items-center text-white',
        size === 'md' ? 'gap-4 text-base' : 'gap-2 text-sm',
      ]"
    >
      <UIcon
        name="i-material-symbols-location-on"
        :class="[
          'shrink-0 text-secondary-400',
          size === 'md' ? 'h-6 w-6' : 'h-5 w-5',
        ]"
      />
      {{ location }}
    </span>
  </div>
</template>
