<script setup lang="ts">
definePageMeta({ title: "Klientská zóna | COLLEGAS" });

useHead({
  title: "Klientská zóna | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Přístup do klientské zóny COLLEGAS. Pokud zatím nemáte přihlašovací údaje, kontaktujte nás a pomůžeme vám s dalším postupem.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <UiIntro variant="light" :ui="{ bg: false }">
      <template #header>
        <UiTitle eyebrow="COLLEGAS" size="md">
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-primary-800 leading-tight"
            >
              Klientská zóna
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p class="text-body-lg text-on-surface-variant max-w-2xl mt-stack-md">
          Přístup do klientské zóny připravujeme. Pokud potřebujete řešit
          dokumenty, přehled spolupráce nebo další servisní požadavky, ozvěte se
          nám a nasměrujeme vás na správný další krok.
        </p>
      </template>
    </UiIntro>

    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="max-w-3xl grid gap-stack-md">
          <UiBaseCard class="border border-outline-variant/40">
            <template #header>
              <h2 class="text-headline-md md:text-headline-lg text-primary-800">
                Potřebujete přístup nebo pomoc?
              </h2>
            </template>

            <p class="text-body-md text-on-surface-variant">
              Napište nám přes kontaktní formulář nebo se spojte přímo s vaším
              konzultantem. Pomůžeme vám s dokumenty, termíny i dalším postupem.
            </p>

            <template #footer>
              <UButton to="/contact" color="secondary">
                Kontaktovat COLLEGAS
              </UButton>
            </template>
          </UiBaseCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>
