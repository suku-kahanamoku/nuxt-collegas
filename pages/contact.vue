<script setup lang="ts">
definePageMeta({ title: "Kontakt | Collegas s.r.o." });
useHead({
  title: "Kontakt | Collegas s.r.o.",
  meta: [
    {
      name: "description",
      content:
        "Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně najdeme ten správný první krok k Vaší finanční stabilitě.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <!-- ── Hero ── -->
    <UiIntro variant="light" :ui="{ bg: false }">
      <template #header>
        <UiTitle eyebrow="Kontakt" size="md">
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-primary-800 leading-tight"
            >
              Spojte se s námi
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p>
          Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně
          najdeme ten správný první krok.
        </p>
      </template>
    </UiIntro>

    <!-- ── Dvousloupcový obsah ── -->
    <section
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-0 mb-section-gap"
    >
      <!-- Levá strana: info + mapa -->
      <CustomContactInfo />

      <!-- Pravá strana: formulář -->
      <CustomContactForm />
    </section>

    <CustomBranches />
  </div>
</template>
