<template>
  <footer
    class="bg-primary-900 text-on-primary w-full py-stack-lg border-t border-primary-container"
  >
    <div
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-md"
    >
      <div class="space-y-stack-sm">
        <img
          src="/img/logo.svg"
          alt="Collegas"
          class="h-10 w-auto brightness-0 invert"
        />
        <p class="text-body-md text-on-primary-container max-w-sm">
          Finanční poradenství s přehledem a jistotou. Nezávislost,
          transparentnost a dlouhodobé partnerství.
        </p>
        <p class="text-body-md text-on-primary-container mt-stack-md">
          &copy; {{ new Date().getFullYear() }} Všechna práva vyhrazena.
        </p>
      </div>

      <div class="flex flex-col md:items-end justify-between">
        <div
          class="flex flex-wrap gap-x-stack-md gap-y-stack-sm md:justify-end"
        >
          <NuxtLink
            class="text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors"
            to="#"
            >Ochrana soukromí</NuxtLink
          >
          <NuxtLink
            class="text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors"
            to="#"
            >Obchodní podmínky</NuxtLink
          >
          <NuxtLink
            class="text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors"
            to="#"
            >Regulatorní info</NuxtLink
          >
          <NuxtLink
            class="text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors"
            to="#"
            >Cookies</NuxtLink
          >
          <NuxtLink
            class="text-body-md text-on-primary-container hover:text-secondary-fixed transition-colors"
            to="/contact"
            >Kontakt</NuxtLink
          >
        </div>
        <div class="flex gap-stack-md mt-stack-lg">
          <span
            class="material-symbols-outlined text-secondary-fixed cursor-pointer hover:opacity-80"
            >lock_open</span
          >
          <span
            class="material-symbols-outlined text-secondary-fixed cursor-pointer hover:opacity-80"
            >language</span
          >
          <span
            class="material-symbols-outlined text-secondary-fixed cursor-pointer hover:opacity-80"
            >mail</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
