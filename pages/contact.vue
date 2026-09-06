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
    <UiPageIntro
      eyebrow="Kontakt"
      title="Spojte se s námi"
      description="Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně najdeme ten správný první krok."
      theme="light"
    />

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
