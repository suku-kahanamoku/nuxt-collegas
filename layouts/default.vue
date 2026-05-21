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

  <UMain>
    <slot />
  </UMain>

  <footer
    class="border-t border-gray-200 dark:border-gray-800 bg-primary-900 dark:bg-gray-950 text-white mt-auto"
  >
    <div class="max-w-7xl mx-auto px-5 py-10 text-center">
      <p class="text-sm text-white/70">
        &copy; {{ new Date().getFullYear() }} Collegas. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
</template>
