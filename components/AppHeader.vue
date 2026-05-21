<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get: () => colorMode.value === "dark",
  set: (val) => {
    colorMode.preference = val ? "dark" : "light";
  },
});

const menuItems = [
  {
    label: "Úvod",
    to: "/",
  },
];
</script>

<template>
  <UHeader mode="slideover" :toggle="{ size: 'xl' }">
    <template #title>
      <NuxtLink
        to="/"
        aria-label="Collegas"
        class="font-serif text-xl font-bold text-primary-600"
      >
        Collegas
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="menuItems"
      variant="link"
      color="primary"
      :ui="{ link: 'text-sm font-semibold' }"
    />

    <template #right>
      <UButton
        :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
        color="neutral"
        variant="ghost"
        size="xl"
        :aria-label="isDark ? 'Světlý režim' : 'Tmavý režim'"
        @click="isDark = !isDark"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="menuItems"
        variant="link"
        color="primary"
        orientation="vertical"
        :ui="{ list: 'space-y-1', link: 'text-lg' }"
      />
    </template>
  </UHeader>
</template>
