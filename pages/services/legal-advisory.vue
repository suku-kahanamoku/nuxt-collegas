<script setup lang="ts">
definePageMeta({ title: "Právní poradenství | Finanční poradenství" });
useHead({
  title: "Právní poradenství | Finanční poradenství",
  meta: [{ name: "description", content: "Dlouhodobé partnerství postavené na důvěře. Smluvní agenda, převody nemovitostí, vlastnické struktury a ochrana majetku." }],
});

const services = [
  { icon: "description", title: "Smluvní agenda", description: "Příprava, revize a připomínkování smluv – kupní, nájemní, věřitelské i rámcové." },
  { icon: "home", title: "Převody nemovitostí", description: "Kompletní právní servis při prodeji, koupi nebo darování nemovitého majetku." },
  { icon: "account_tree", title: "Vlastnické struktury", description: "Nastavení holdingových a rodinných struktur s cílem ochrany a předání majetku." },
  { icon: "shield", title: "Ochrana majetku", description: "Právní zajištění majetku před riziky podnikání, věřiteli i dědickými spory." },
];
</script>

<template>
  <div class="w-full">

    <UiServiceHero
      eyebrow="Finanční poradenství"
      title="Právní poradenství"
      subtitle="Dlouhodobé partnerství postavené na důvěře. Smluvní agenda, převody nemovitostí, vlastnické struktury a ochrana majetku."
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter space-y-section-gap">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-stack-md">
            <h2 class="text-headline-lg font-serif text-primary-900">Právo v kontextu Vašeho majetku</h2>
            <p class="text-body-md text-on-surface-variant">
              Právní poradenství u nás není izolovanou službou – je nedílnou součástí komplexní péče o váš majetek.
              Pracujeme ruku v ruce s finančními poradci, aby každé právní řešení odpovídalo i vašim finanční a
              daňové situaci.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Spolupracujeme s advokátní kanceláří BULA & COLLEGAS s.r.o., která disponuje zkušenostmi
              v oblasti soukromého, obchodního i majetkového práva.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiValueCard v-for="s in services" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" />
        </div>

      </div>
    </section>

    <UiCtaSection
      title="Potřebujete právní podporu?"
      body="Kontaktujte nás a zjistěte, jak vám právní poradenství skupiny COLLEGA může pomoci."
      primary-label="Sjednat konzultaci"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
