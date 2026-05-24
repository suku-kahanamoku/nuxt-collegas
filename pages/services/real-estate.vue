<script setup lang="ts">
definePageMeta({ title: "Realitní služby | Finanční poradenství" });
useHead({
  title: "Realitní služby | Finanční poradenství",
  meta: [{ name: "description", content: "Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání." }],
});

const steps = [
  { icon: "search", title: "Analýza a ocenění", description: "Tržní analýza a stanovení správné ceny nemovitosti pro maximalizaci výnosu." },
  { icon: "campaign", title: "Marketing a prezentace", description: "Profesionální fotografie, 3D virtuální prohlídky a cílené oslovení potenciálních kupců." },
  { icon: "groups", title: "Prohlídky a jednání", description: "Organizace a vedení prohlídek, komunikace se zájemci a sjednání nejvýhodnějších podmínek." },
  { icon: "gavel", title: "Právní a finanční servis", description: "Kompletní smluvní dokumentace, úschova kupní ceny a bezpečné vypořádání transakce." },
];
const relatedLinks = [
  { label: 'Správa nemovitostí', to: '/services/property-management' },
  { label: 'Právní poradenství', to: '/services/legal-advisory' },
  { label: 'Developerské projekty', to: '/services/development-projects' },
  { label: 'Péče o investiční majetek', to: '/services/investment-asset-management' },
];</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Finanční poradenství"
      title="Realitní služby"
      description="Realitní služby u nás nejsou jen o zprostředkování prodeje nebo pronájmu, ale o kompletním zajištění celého procesu od prvního rozhodnutí až po úspěšné předání nemovitosti. Každý krok má svůj význam – správné nastavení ceny, kvalitní prezentace, výběr vhodného zájemce i právní zajištění."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          <div class="lg:col-span-8 space-y-stack-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="order-2 md:order-1 space-y-stack-md">
            <p class="text-body-md text-on-surface-variant">
              Právě v detailu se často rozhoduje o výsledku.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Zajišťujeme profesionální přípravu nemovitosti včetně konzultace ceny, homestagingu a kvalitních
              fotografií či videoprohlídek. Postaráme se o inzerci, marketing a komunikaci se zájemci, organizaci
              prohlídek i samotné vyjednávání podmínek. Samozřejmostí je kompletní právní servis – příprava
              smluv, úschova kupní ceny, kontrola dokumentace i bezpečné vypořádání celé transakce.
            </p>
            <p class="text-body-md text-on-surface-variant">
              Výsledkem je hladký průběh bez zbytečných komplikací a maximální možný výsledek pro vás.
              Nemusíte řešit desítky detailů ani nést rizika spojená s prodejem či pronájmem – máte jistotu, že vše
              probíhá profesionálně a pod kontrolou.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Chci pro svou nemovitost maximální hodnotu
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
              </div>
              <div class="order-1 md:order-2 bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  class="w-full h-full object-cover"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              <UiValueCard v-for="s in steps" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" />
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            callout-title="Chcete prodat nebo pronajmout nemovitost?"
            callout-description="Kontaktujte nás pro bezplatné ocenění a konzultaci strategie prodeje."
            callout-label="Bezplatné ocenění"
            callout-to="/contact"
          />
        </div>
      </div>
    </section>

  </div>
</template>
