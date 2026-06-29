<template>
  <footer
    class="bg-primary-900 text-on-primary w-full py-stack-lg border-t border-primary-container"
  >
    <div
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-md"
    >
      <div class="space-y-stack-sm">
        <NuxtImg
          src="/img/logo/logo.svg"
          alt="Collegas"
          class="h-10 w-auto brightness-0 invert"
          format="webp"
          loading="lazy"
          sizes="sm:160px md:160px lg:160px xl:160px"
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
            variant="link"
            color="primary"
            to="/legal-information"
            class="text-on-primary-container hover:text-secondary-fixed p-0 text-base normal-case tracking-normal font-normal"
            >Právní informace</UButton
          >
          >
          <UButton
            variant="link"
            color="primary"
            to="/privacy-policy"
            class="text-on-primary-container hover:text-secondary-fixed p-0 text-base normal-case tracking-normal font-normal"
            >Ochrana soukromí</UButton
          >
          >
          <UButton
            variant="link"
            color="primary"
            to="/contact"
            class="text-on-primary-container hover:text-secondary-fixed p-0 text-base normal-case tracking-normal font-normal"
            >Kontakt</UButton
          >
        </div>
        <div class="flex gap-stack-md mt-stack-lg items-center">
          <UButton
            variant="link"
            color="secondary"
            to="/client-zone"
            aria-label="Klientská zóna"
            class="text-secondary-fixed! hover:text-secondary-fixed/60! transition-colors"
          >
            <UIcon
              name="i-material-symbols-lock-open-outline"
              style="width: 1.75rem; height: 1.75rem"
            />
          </UButton>
          <UButton
            variant="link"
            color="secondary"
            aria-label="Jazyk"
            class="text-secondary-fixed! hover:text-secondary-fixed/60! transition-colors"
          >
            <UIcon
              name="i-material-symbols-language"
              style="width: 1.75rem; height: 1.75rem"
            />
          </UButton>
          <UButton
            variant="link"
            color="secondary"
            to="/contact"
            aria-label="Kontakt"
            class="text-secondary-fixed! hover:text-secondary-fixed/60! transition-colors"
          >
            <UIcon
              name="i-material-symbols-mail-outline"
              style="width: 1.75rem; height: 1.75rem"
            />
          </UButton>
        </div>
      </div>
    </div>
  </footer>
</template>
