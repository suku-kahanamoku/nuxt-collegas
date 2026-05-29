<script setup lang="ts">
definePageMeta({
  title: "Nezávislý finanční audit | Finanční poradenství",
});

useHead({
  title: "Nezávislý finanční audit | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Nezávislý finanční audit je první krok k tomu, abyste ve svých financích měli skutečný přehled a jistotu. Projdeme vaše smlouvy, nastavení i celkovou strukturu financí.",
    },
  ],
});

// services list moved into CustomServices component (default)
</script>

<template>
  <div class="w-full overflow-hidden">
    <CustomIntroCarousel />
    <CustomSlogan&Stats />

    <CustomServices />

    <!-- ── CTA ── -->
    <UiCtaSection
      title="Chci jasno ve svých financích"
      body="Audit vám nepřinese jen seznam změn, ale především klid a kontrolu. Budete přesně vědět, jak na tom jste a jaké kroky dávají smysl dál."
      primary-label="Chci jasno ve svých financích"
      primary-to="/contact"
      secondary-label="Chci plánovat dnes i v budoucnu"
      secondary-to="/contact"
      variant="dark"
    />
  </div>
</template>
