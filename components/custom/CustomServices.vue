<script setup lang="ts">
const services = [
  {
    icon: "i-material-symbols-assessment",
    title: "Nezávislý finanční audit",
    description:
      "Komplexní nezávislý audit vašich financí, smluv a nastavení s doporučeními pro další kroky.",
    to: "/services/financial-audit",
  },
  {
    icon: "i-material-symbols-shield",
    title: "Zajištění rizik",
    description:
      "Správně nastavené pojistné krytí, které vás skutečně chrání – bez duplicit, bez zbytečných nákladů a s plnou ochranou majetku i zdraví.",
    to: "/services/risk-management",
  },
  {
    icon: "i-material-symbols-receipt-long",
    title: "Daňové poradenství",
    description:
      "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte.",
    to: "/services/tax-advisory",
  },
  {
    icon: "i-material-symbols-gavel",
    title: "Právní poradenství",
    description:
      "Dlouhodobé partnerství postavené na důvěře. Smluvní agenda, převody nemovitostí, vlastnické struktury a ochrana majetku.",
    to: "/services/legal-advisory",
  },
  {
    icon: "i-material-symbols-balance",
    title: "Odškodnění",
    description:
      "Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši.",
    to: "/services/compensation",
  },
  {
    icon: "i-material-symbols-home-work",
    title: "Realitní služby",
    description:
      "Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání.",
    to: "/services/real-estate",
  },
  {
    icon: "i-material-symbols-apartment",
    title: "Správa nemovitostí",
    description:
      "Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí.",
    to: "/services/property-management",
  },
  {
    icon: "i-material-symbols-trending-up",
    title: "Péče o investiční majetek",
    description:
      "Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli.",
    to: "/services/investment-asset-management",
  },
  {
    icon: "i-material-symbols-domain",
    title: "Developerské projekty",
    description:
      "Komplexní realizace developerských záměrů – od analýzy příležitosti a financování přes projekt až po prodejní strategii.",
    to: "/services/development-projects",
  },
];
</script>

<template>
  <!-- ── Naše služby ── -->
  <section class="bg-surface-container-low py-section-gap">
    <UContainer>
      <div class="text-center mb-stack-lg">
        <h2 class="text-headline-lg font-serif text-primary-800">
          Naše služby
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        <UiBaseCard
          v-for="s in services"
          :key="s.to"
          :to="s.to"
        >
          <template #header>
            <UiTitle size="sm">
              <template #eyebrow>
                <UIcon :name="s.icon" class="text-secondary-700 text-4xl" />
              </template>
              <template #title>
                <h3 class="text-title-md font-serif text-primary-800">
                  {{ s.title }}
                </h3>
              </template>
            </UiTitle>
          </template>

          <p class="text-body-md text-on-surface-variant flex-1">
            {{ s.description }}
          </p>

          <template #footer>
            <span
              class="inline-flex items-center gap-1 text-secondary-700 text-label-caps font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity"
            >
              Více informací
              <UIcon name="i-material-symbols-arrow-forward" class="text-body-md transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </template>
        </UiBaseCard>
      </div>
    </UContainer>
  </section>
</template>
