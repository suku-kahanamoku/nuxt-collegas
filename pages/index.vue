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

const services = [
  {
    icon: "shield",
    title: "Zajištění rizik",
    description:
      "Správně nastavené pojistné krytí, které vás skutečně chrání – bez duplicit, bez zbytečných nákladů a s plnou ochranou majetku i zdraví.",
    to: "/services/risk-management",
  },
  {
    icon: "receipt_long",
    title: "Daňové poradenství",
    description:
      "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte.",
    to: "/services/tax-advisory",
  },
  {
    icon: "gavel",
    title: "Právní poradenství",
    description:
      "Dlouhodobé partnerství postavené na důvěře. Smluvní agenda, převody nemovitostí, vlastnické struktury a ochrana majetku.",
    to: "/services/legal-advisory",
  },
  {
    icon: "balance",
    title: "Odškodnění",
    description:
      "Pracovní úrazy, autonehody, školní úrazy i jiné pojistné události. Zajišťujeme spravedlivé odškodnění v plné výši.",
    to: "/services/compensation",
  },
  {
    icon: "home_work",
    title: "Realitní služby",
    description:
      "Kompletní zajištění prodeje nebo pronájmu – od přípravy, marketingu a prohlídek až po právní servis a bezpečné vypořádání.",
    to: "/services/real-estate",
  },
  {
    icon: "apartment",
    title: "Správa nemovitostí",
    description:
      "Kompletní péče o váš investiční majetek – výběr nájemníků, technická správa, administrativa i ekonomická agenda bez zbytečných starostí.",
    to: "/services/property-management",
  },
  {
    icon: "trending_up",
    title: "Péče o investiční majetek",
    description:
      "Průběžná analýza a řízení portfolia s důrazem na dlouhodobý růst, diverzifikaci a ochranu kapitálu v souladu s vašimi cíli.",
    to: "/services/investment-asset-management",
  },
  {
    icon: "domain",
    title: "Developerské projekty",
    description:
      "Komplexní realizace developerských záměrů – od analýzy příležitosti a financování přes projekt až po prodejní strategii.",
    to: "/services/development-projects",
  },
];
</script>

<template>
  <div class="w-full overflow-hidden">

    <!-- ── Hero ── -->
    <UiIntro
      eyebrow="Finanční poradenství"
      title="Nezávislý finanční audit"
      subtitle="Nezávislý finanční audit je první krok k tomu, abyste ve svých financích měli skutečný přehled a jistotu. Nehodnotíme jen jednotlivé produkty, ale díváme se na vaše finance jako na celek – jak spolu jednotlivé části fungují, kde dávají smysl a kde naopak vznikají zbytečné náklady nebo rizika."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
    />

    <!-- ── Audit intro ── -->
    <section class="py-section-gap bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl items-start">
          <div class="lg:col-span-8 space-y-stack-md">
            <p class="text-body-lg text-on-surface-variant">
              Nezávislý finanční audit je první krok k tomu, abyste ve svých financích měli skutečný přehled a jistotu.
              Nehodnotíme jen jednotlivé produkty, ale díváme se na vaše finance jako na celek – jak spolu jednotlivé části
              fungují, kde dávají smysl a kde naopak vznikají zbytečné náklady nebo rizika.
            </p>
            <p class="text-body-lg text-on-surface-variant">
              Detailně projdeme vaše smlouvy, nastavení i celkovou strukturu financí a přeložíme vám je do
              srozumitelného obrazu. Ukážeme vám, co je nastavené správně, kde zbytečně přeplácíte a kde vám
              naopak unikají příležitosti. Díky tomu získáte jasný základ pro další rozhodování – bez tlaku, bez
              chaosu a bez závislosti na konkrétních produktech nebo institucích.
            </p>
            <p class="text-body-lg text-on-surface-variant">
              Audit vám nepřinese jen seznam změn, ale především klid a kontrolu. Budete přesně vědět, jak na
              tom jste a jaké kroky dávají smysl dál – ať už chcete optimalizovat současný stav, nebo se připravit na
              další životní etapu.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity mt-stack-sm"
            >
              Chci jasno ve svých financích
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </NuxtLink>
          </div>
          <div class="lg:col-span-4">
            <div class="w-full bg-surface-container overflow-hidden" style="aspect-ratio: 4/5;">
              <img
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Moderní korporátní budova – čisté linie tmavého dřeva a kovu v přirozeném světle"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Finanční plán ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center">
        <div class="relative order-2 md:order-1">
          <img
            class="w-full aspect-square object-cover shadow-sm"
            alt="Zkušený finanční poradce v profesionálním prostředí – důvěra a odbornost"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsqrCbxLjupY1TswzG_UjcLT4wKDuirdPU7r3ElhKn2SkBwSBHEFFzSwf9cy7D_c-WPEHJfJJG_3_lvG_g4sS3Ab8y3EvUXvdc20wLP7emhzsK4c_wLnvtkGO4zLVVFKuAU9kmSxGnsuv51fZQeQxzpbkdVv2RkIB39NlYU0_ZPcIR9DASMnUbUbYrjB_MqqOO6Pmzi8RHa1lEfN-GWRg_HgncCVrTmLjE7xx2hDOfWfbewKqAPTadL-vp8J5AbuQNQ1eRP5_Jy48"
          />
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-900 p-stack-md hidden lg:flex flex-col justify-end text-on-primary">
            <span class="text-display-xl font-serif leading-none">25+</span>
            <span class="text-label-caps uppercase tracking-widest font-semibold">let zkušeností</span>
          </div>
        </div>
        <div class="space-y-stack-md order-1 md:order-2">
          <h2 class="text-headline-lg font-serif text-primary-900">Finanční plán</h2>
          <p class="text-body-md text-on-surface-variant">
            Finanční plán je nástroj, který dává vašim penězům jasný směr a smysl. Nevychází jen z čísel, ale především
            z vašich cílů, priorit a životní situace. Ať už řešíte bydlení, rodinu, budování majetku nebo finanční
            nezávislost, vše propojujeme do jednoho funkčního celku, který vás systematicky posouvá vpřed.
          </p>
          <p class="text-body-md text-on-surface-variant">
            Společně nastavíme strukturu vašich financí tak, aby odpovídala tomu, kde se právě nacházíte, i tomu, kam
            chcete dojít. Pracujeme s rezervami, investicemi i financováním tak, aby dávaly smysl jako celek a vzájemně
            se podporovaly. Důraz klademe na dlouhodobou udržitelnost, flexibilitu a schopnost reagovat na změny, které život přináší.
          </p>
          <p class="text-body-md text-on-surface-variant">
            Výsledkem není jen plán „na papíře", ale konkrétní strategie, podle které se můžete rozhodovat každý den.
            Získáte jistotu, že vaše finance pracují pro vás a že každý krok, který uděláte, vás přibližuje k vašim cílům.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity mt-stack-sm"
          >
            Chci plánovat dnes i v budoucnu
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Naše služby ── -->
    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="text-center mb-20">
          <span class="text-label-caps text-secondary-700 uppercase mb-stack-sm block tracking-widest font-semibold">
            Naše služby
          </span>
          <h2 class="text-headline-lg font-serif text-primary-900">Kompletní přehled</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          <UiServiceCard
            v-for="s in services"
            :key="s.to"
            :icon="s.icon"
            :title="s.title"
            :description="s.description"
            :to="s.to"
          />
        </div>
      </div>
    </section>

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
