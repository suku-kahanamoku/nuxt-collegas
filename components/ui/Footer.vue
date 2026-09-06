<script setup lang="ts">
const footerLinks = [
  { label: "Právní informace", to: "/legal-information" },
  { label: "Ochrana soukromí", to: "/privacy-policy" },
  { label: "Kontakt", to: "/contact" },
];

const utilityLinks = [
  {
    label: "Klientská zóna",
    to: "/client-zone",
    icon: "i-material-symbols-lock-open-outline",
  },
  { label: "Jazyk", icon: "i-material-symbols-language" },
  {
    label: "Kontakt",
    to: "/contact",
    icon: "i-material-symbols-mail-outline",
  },
];
</script>

<template>
  <footer
    class="bg-primary-900 text-on-primary w-full py-stack-lg border-t border-primary-container"
  >
    <div
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-md"
    >
      <div class="space-y-stack-sm">
        <img
          src="/img/logo/logo.svg"
          alt="Collegas"
          class="h-10 w-auto brightness-0 invert"
          loading="lazy"
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
          <UButton
            v-for="link in footerLinks"
            :key="link.to"
            variant="link"
            color="primary"
            :to="link.to"
            class="text-on-primary-container hover:text-secondary-fixed p-0 text-base normal-case tracking-normal font-normal"
          >
            {{ link.label }}
          </UButton>
        </div>
        <div class="flex gap-stack-md mt-stack-lg items-center">
          <UButton
            v-for="link in utilityLinks"
            :key="link.label"
            variant="link"
            color="secondary"
            :to="link.to"
            :aria-label="link.label"
            class="text-secondary-fixed! hover:text-secondary-fixed/60! transition-colors"
          >
            <UIcon
              :name="link.icon"
              style="width: 1.75rem; height: 1.75rem"
            />
          </UButton>
        </div>
      </div>
    </div>
  </footer>
</template>
