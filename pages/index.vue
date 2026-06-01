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
    <CustomTimeline />

    <!-- 6. Lidi carousel -->
    <CustomPeopleCarousel />

    <!-- 7. Rozcestník -->
    <CustomRozcestnik />

    <!-- Naše služby -->
    <CustomServices />

    <!-- CTA – zanechat email -->
    <CustomEmailCapture />

    <!-- CTA – navigační -->
    <UiCtaSection
      title="Chci jasno ve svých financích"
      body="Audit vám nepřinese jen seznam změn, ale především klid a kontrolu. Budete přesně vědět, jak na tom jste a jaké kroky dávají smysl dál."
      primary-label="Chci jasno ve svých financích"
      primary-to="/contact"
      secondary-label="Chci plánovat dnes i v budoucnu"
      secondary-to="/contact"
      variant="dark"
    />

    <!-- 8. Kontakty -->
    <section class="py-section-gap bg-surface-container-low">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-900">Kontaktujte nás</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">
            Jsme k dispozici osobně, telefonicky i online. Rádi si najdeme čas na váš případ.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-stack-md text-center">
          <div class="flex flex-col items-center gap-3">
            <span class="material-symbols-outlined text-secondary-700 text-4xl">location_on</span>
            <p class="text-title-sm font-semibold text-primary-900">Adresa</p>
            <p class="text-body-md text-on-surface-variant">
              AZ Tower, Pražákova 1008/69<br />619 00 Brno
            </p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <span class="material-symbols-outlined text-secondary-700 text-4xl">phone</span>
            <p class="text-title-sm font-semibold text-primary-900">Telefon</p>
            <a href="tel:+420775123456" class="text-body-md text-on-surface-variant hover:text-secondary-700 transition-colors">
              +420 775 123 456
            </a>
          </div>
          <div class="flex flex-col items-center gap-3">
            <span class="material-symbols-outlined text-secondary-700 text-4xl">mail</span>
            <p class="text-title-sm font-semibold text-primary-900">E-mail</p>
            <a href="mailto:info@collegas.cz" class="text-body-md text-on-surface-variant hover:text-secondary-700 transition-colors">
              info@collegas.cz
            </a>
          </div>
        </div>
        <div class="text-center mt-stack-lg">
          <UButton
            to="/contact"
            color="primary"
            variant="solid"
            trailing-icon="i-material-symbols-arrow-forward"
            size="lg"
          >
            Otevřít kontaktní formulář
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
