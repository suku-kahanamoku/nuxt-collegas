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
    <!-- 1. Carousel -->
    <CustomIntroCarousel />

    <!-- 2. Slogan + Stats -->
    <CustomSlogan&Stats />

    <!-- 3. Reference -->
    <CustomReferenceGoogle />

    <!-- 4. Odbornost & certifikace -->
    <CustomCertificate />

    <!-- 5. Proces spolupráce -->
    <CustomProcessSteps />

    <!-- 6. Lidi carousel -->
    <CustomPeopleCarousel />

    <!-- 7. Rozcestník -->
    <CustomRozcestnik />

    <!-- CTA – zanechat email -->
    <CustomEmailCapture />

    <!-- 8. Kontakty -->
    <CustomKontakty />
  </div>
</template>
