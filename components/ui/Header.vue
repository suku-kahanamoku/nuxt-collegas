<script setup lang="ts">
const navItems = [
  {
    label: "Naše služby",
    to: "/services",
    children: [
      {
        label: "Finance",
        to: "/services/finance",
        icon: "i-material-symbols-account-balance-wallet",
      },
      {
        label: "Správa kapitálu",
        to: "/services/capital-management",
        icon: "i-material-symbols-trending-up",
      },
      {
        label: "Daně a právo",
        to: "/services/tax-legal",
        icon: "i-material-symbols-balance",
      },
      {
        label: "Reality a energie",
        to: "/services/real-estate-energy",
        icon: "i-material-symbols-home-work",
      },
    ],
  },
  { label: "Holding", to: "/holding" },
  { label: "Naši lidé", to: "/our-people" },
  { label: "O nás", to: "/about" },
  { label: "Kariéra", to: "/career" },
  {
    label: "Ostatní",
    children: [
      { label: "FAQ", to: "/faq", icon: "i-material-symbols-help-outline" },
      { label: "Aktuality", to: "/news", icon: "i-material-symbols-newspaper" },
      {
        label: "Kalkulačky",
        to: "/calculators",
        icon: "i-material-symbols-calculate",
      },
      {
        label: "Online šanon",
        to: "/document-portal",
        icon: "i-material-symbols-folder-open",
      },
    ],
  },
  { label: "Kontakt", to: "/contact" },
];
</script>

<template>
  <UHeader mode="slideover" :toggle="{ size: 'xl' }">
    <template #title>
      <NuxtLink to="/" aria-label="Collegas" class="block">
        <img src="/img/logo.svg" alt="Collegas" class="h-10 w-auto" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="navItems"
      variant="link"
      color="primary"
      :ui="{ link: 'text-sm font-semibold uppercase tracking-wider' }"
    />

    <template #right>
      <UButton
        to="/client-zone"
        color="primary"
        variant="outline"
        size="sm"
        icon="i-material-symbols-lock-person"
        class="uppercase tracking-widest font-semibold text-xs px-4 py-2 whitespace-nowrap"
      >
        Klientská zóna
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        variant="link"
        color="primary"
        orientation="vertical"
        :ui="{ list: 'space-y-1', link: 'text-lg' }"
      />
      <div class="mt-4 px-2">
        <UButton
          to="/client-zone"
          color="primary"
          variant="outline"
          size="sm"
          icon="i-material-symbols-lock-person"
          block
          class="uppercase tracking-widest font-semibold text-xs"
        >
          Klientská zóna
        </UButton>
      </div>
    </template>
  </UHeader>
</template>
