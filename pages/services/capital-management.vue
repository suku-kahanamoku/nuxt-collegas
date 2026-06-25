<script setup lang="ts">
definePageMeta({ title: "Správa kapitálu | Finanční poradenství" });
useHead({
  title: "Správa kapitálu | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Péče o investiční majetek, chytré financování a investiční příležitosti v jednom celku. Pomáháme vám dlouhodobě chránit i rozvíjet kapitál.",
    },
  ],
});

const relatedLinks = [
  {
    label: "Péče o investiční majetek",
    to: "/services/capital-management#asset-care",
  },
  {
    label: "Financování",
    to: "/services/capital-management#financing",
  },
  {
    label: "Investiční příležitosti",
    to: "/services/capital-management#opportunities",
  },
];

const caseStudies = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyMCJXuap5zYsd6-EcXAOJc272ZF2horQ16S9yI4zoOTZBOXpa1C3AbQTj5EvLoa264GVAdDRfd5uFvI06sdOCpGmDavFqS3lILinQveRoZxIH_kU6_w4ZIDz1eFdFOKvN96N2G4j7ntbwme1_fJUgUSoraa7JVA01w7vHBedDiF4Sxb-gSQeS7xT3XsgkftY32khRKOpC8kOTNkGngh3fVxZgSR0N-sUda8QzTXDnm-2NxXFpvUe3NsR7yT5pgt8ISXlKUwAWGgQ",
    imgAlt: "Klient konzultuje složení investičního portfolia",
    category: "Péče o majetek",
    year: "2024",
    title: "Rebalancí portfolia k vyšší stabilitě výnosu",
    description:
      "Portfolio klienta jsme průběžně upravili podle vývoje trhů i jeho cílů. Výsledkem byla vyváženější struktura, nižší kolísání a lepší dlouhodobá výkonnost.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LgD9NDR-JFsNYPVhMLNMhpUrYdjTmTpsEqU9DgH6cvTfkjcutzQ53N_t5IrvwJhYHfytH4EXNWO9LREq0-ptivi9eoWBH-uVzdL4Z1XRgNZI-H7LufK_CGiZ2mLoYz0nuSZ6a1feL7AQU2-TmxF6ezTpY2UUnswEbPCl60YzX3Ge-nfSk80Erxx3oy-SAXJHWQ-iKfnn4K4vBZHwlwF-WRbFmW5d7v_uw3Y-N-Eo5YAqVG11bDzgNXbTjcYe14kOBZJEgu37OP8",
    imgAlt: "Pár řeší financování bydlení s poradcem",
    category: "Financování",
    year: "2023",
    title: "Hypotéka a rekonstrukce bez přetížení rozpočtu",
    description:
      "Nastavili jsme financování bydlení a rekonstrukce tak, aby bylo dlouhodobě zvládnutelné a současně zachovalo dostatečnou likviditu pro další investiční kroky.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChj0M9c4RWC7HJZPOLrRNFwo6-2-8sKhJlyvWH4sn1gRnphBu8mbBbKYYRxWFhTl9b14dNZ5JBIkKY-xSfCGAy0l8gE3OPKlr3rhARzLLez_kDuyBbaja_jJl96FUu8BbcYFHQqT67vEoqhtIXgtvHqX-0OaxyFK7PFOJKeT6rLa4AskGB8M6up9FEVtubalwiWoeE8Hqz_pUBkDH5sBy5LwX9NrY3nJhZl0x-SxZorQNqlMx3GHiGcSdPHSwUCallfzKlRydPI5Y",
    imgAlt: "Investor hodnotí developerskou příležitost",
    category: "Investiční příležitosti",
    year: "2024",
    title: "Výběr příležitosti s důrazem na výnos a riziko",
    description:
      "Po detailní analýze několika projektů jsme doporučili variantu, která zapadla do strategie klienta. Díky správné struktuře zvýšil potenciál růstu při kontrolovaném riziku.",
  },
];
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Správa kapitálu">
      <template #heading>Správa kapitálu</template>

      <template #body>
        Péče o investiční majetek vnímáme jako dlouhodobé partnerství, jehož
        cílem je chránit a rozvíjet váš kapitál v souladu s vašimi ambicemi i
        životním stylem. Nejde pouze o výběr investic, ale o citlivé a
        kontinuální řízení celého portfolia s ohledem na vaše priority, časový
        horizont i toleranci k riziku.
      </template>

      <template #quote>
        „Vaše investice tak nejsou jen uložené, ale řízené s jasným záměrem a
        důrazem na dlouhodobou hodnotu."
      </template>

      <template #attribution> — Svěřte kapitál do individuální péče </template>
    </CustomTextComment>

    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex justify-between items-center mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary-800">
            Modelové situace
          </h2>
          <a
            class="hidden md:flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1"
            href="/contact"
            >KONZULTOVAT SITUACI</a
          >
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <UiArticleCard
            v-for="cs in caseStudies"
            :key="cs.title"
            v-bind="cs"
          />
        </div>
        <div class="mt-stack-lg md:hidden">
          <a
            class="w-full justify-center flex items-center gap-2 font-label-caps text-secondary-800 border border-secondary-800 py-4"
            href="/contact"
            >KONZULTOVAT SITUACI</a
          >
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Připraveni posunout kapitál dál?"
      body="Nastavíme péči o investice, financování i výběr příležitostí tak, aby vaše rozhodnutí zapadala do dlouhodobé strategie a podporovala růst majetku."
    >
      <UiButton to="/contact">
        Domluvit konzultaci
        <UIcon
          name="i-material-symbols-arrow-forward"
          class="size-5 transition-transform duration-200 group-hover:translate-x-1"
        />
      </UiButton>
    </UiDarkBanner>

    <CustomUserPic&desc
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuDsqrCbxLjupY1TswzG_UjcLT4wKDuirdPU7r3ElhKn2SkBwSBHEFFzSwf9cy7D_c-WPEHJfJJG_3_lvG_g4sS3Ab8y3EvUXvdc20wLP7emhzsK4c_wLnvtkGO4zLVVFKuAU9kmSxGnsuv51fZQeQxzpbkdVv2RkIB39NlYU0_ZPcIR9DASMnUbUbYrjB_MqqOO6Pmzi8RHa1lEfN-GWRg_HgncCVrTmLjE7xx2hDOfWfbewKqAPTadL-vp8J5AbuQNQ1eRP5_Jy48"
      img-class="shadow-sm"
    >
      <template #overlay>
        <span class="font-display-xl text-display-xl leading-none">20+</span>
        <span class="font-label-caps uppercase tracking-widest"
          >Let v oboru</span
        >
      </template>

      <div class="space-y-stack-md from-right">
        <span
          class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
          >Naše zásady</span
        >
        <h2 class="text-headline-lg font-serif text-primary-800">
          Naše principy
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Kapitál řídíme v souvislostech. Vyhodnocujeme výkonnost portfolia,
          pracujeme s diverzifikací a průběžně přizpůsobujeme strategii změnám
          na trzích i vašim aktuálním prioritám.
        </p>
        <p
          class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
        >
          „Nehledáme náhodné příležitosti. Každé rozhodnutí musí dávat smysl z
          pohledu výnosu, rizika i dlouhodobé stability celého portfolia."
        </p>
      </div>
    </CustomUserPic&desc>

    <section class="py-section-gap bg-white">
      <UContainer class="mx-auto px-gutter">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span
              class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
              >Naši specialisté</span
            >
            <h2 class="font-headline-lg text-headline-lg text-primary-800">
              Poradci pro správu kapitálu
            </h2>
          </div>
          <a
            class="font-label-caps text-primary-800 border-b border-primary pb-1 mb-2 hover:text-secondary hover:border-secondary transition-all"
            href="/our-people"
            >Zobrazit celý tým</a
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <!-- Member 1 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo"
            name="Lukáš Formánek"
            role="Specialista na péči o investiční majetek"
            description="Věnuje se dlouhodobému řízení portfolií, vyhodnocení výkonnosti a strategickému rebalancování v návaznosti na cíle klienta."
          />
          <!-- Member 2 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs"
            name="Filip Beneš"
            role="Poradce pro financování"
            description="Pomáhá klientům s financováním bydlení, rekonstrukcí i projektů a nastavuje strukturu, která zůstává bezpečná i při změnách trhu."
            delay="100ms"
          />
          <!-- Member 3 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw"
            name="Tomáš Kalous"
            role="Senior poradce pro investiční příležitosti"
            description="Zaměřuje se na výběr a strukturování investičních příležitostí tak, aby zapadaly do širší strategie a podporovaly dlouhodobý růst kapitálu."
            delay="200ms"
          />
        </div>
      </UContainer>
    </section>

    <section class="bg-surface-container-low py-section-gap">
      <UContainer>
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
        >
          <!-- Obsah -->
          <div class="lg:col-span-8 space-y-section-gap">
            <UiImageText
              id="asset-care"
              img-src="/img/intro/notes.png"
              img-alt="Péče o investiční majetek"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Péče o investiční majetek
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Vaše investice průběžně analyzujeme, vyhodnocujeme jejich
                  výkonnost a aktivně je přizpůsobujeme aktuální situaci na
                  trzích i vašim individuálním potřebám. Dbáme na vyváženost
                  portfolia, diverzifikaci i ochranu majetku v obdobích
                  volatility.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Díky tomuto přístupu získáváte nejen výkonnější správu
                  majetku, ale především klid a jistotu, že se o vaše finance
                  stará někdo, kdo rozumí souvislostem a přemýšlí v širším
                  kontextu.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="financing"
              img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
              img-alt="Financování bydlení a projektů"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Financování
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Ať už kupujete první nemovitost, rekonstruujete nebo řešíte
                  změnu současného úvěru, cílem je nastavit financování tak, aby
                  pro vás bylo dlouhodobě zvládnutelné, přehledné a bezpečné.
                  Pomáháme vám zorientovat se v možnostech a projít celým
                  procesem bez zbytečného stresu.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Správně nastavené využití bankovního kapitálu může výrazně
                  zvýšit efektivitu práce s vlastními prostředky. Výsledkem je
                  financování, které odpovídá vaší situaci dnes a zároveň vás
                  neomezuje do budoucna.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="opportunities"
              img-src="/img/intro/notes.png"
              img-alt="Investiční příležitosti"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Investiční příležitosti
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Investiční příležitosti nevznikají každý den. Naším cílem není
                  nabídnout cokoliv, co zrovna funguje, ale vybírat a vytvářet
                  příležitosti, které obstojí z pohledu výnosu, rizika i
                  dlouhodobé strategie.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Aktivně vyhledáváme projekty a investice napříč oblastmi,
                  například v nemovitostech nebo developerských záměrech. Každou
                  příležitost detailně analyzujeme a předkládáme pouze ty, za
                  kterými si dokážeme stát.
                </p>
              </div>
            </UiImageText>
          </div>

          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Nezávazná konzultace',
              description:
                'Rádi posoudíme vaši situaci a navrhneme další kroky.',
              label: 'Nezávazná konzultace',
              to: '/contact',
            }"
          />
        </div>
      </UContainer>
    </section>

    <UiImgDarkBanner
      bg-image="/img/intro/stamp.png"
      label="SPRAVA KAPITALU"
      title="Růst, stabilita a příležitosti"
      body="Kapitál řídíme aktivně a v souvislostech. Propojujeme péči o investice, financování i přístup k příležitostem s cílem dlouhodobě chránit a rozvíjet váš majetek."
      heading-tag="h1"
    />

    <CustomBranches />

    <section
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-0 mb-section-gap"
    >
      <!-- Levá strana: info + mapa -->
      <CustomContactInfo />

      <!-- Pravá strana: formulář -->
      <CustomContactForm />
    </section>

    <section class="py-section-gap bg-surface">
      <UContainer class="mx-auto px-gutter">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-stack-md"
        >
          <div class="max-w-2xl">
            <span
              class="font-label-caps text-secondary-800 block mb-stack-sm uppercase"
              >Související služby</span
            >
            <h2 class="font-headline-lg text-headline-lg text-primary-800">
              Strategie růstu kapitálu
            </h2>
          </div>
          <p
            class="font-body-md text-on-surface-variant max-w-sm md:text-right"
          >
            Propojujeme dlouhodobou správu investic, financování a výběr
            příležitostí do jednoho funkčního systému.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <!-- Service 1 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Péče o investiční majetek
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Kontinuální řízení portfolia, pravidelné vyhodnocování výkonnosti
              a úpravy strategie podle vývoje trhu i vašich cílů.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/capital-management#asset-care"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </a>
          </div>
          <!-- Service 2 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Financování
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Nastavení úvěrů pro bydlení, rekonstrukce i projekty tak, aby byly
              bezpečné, přehledné a zároveň podporovaly další růst kapitálu.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/capital-management#financing"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </a>
          </div>
          <!-- Service 3 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Investiční příležitosti
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Vyhledáváme a analyzujeme příležitosti, které dávají smysl z
              pohledu výnosu, struktury i rizik a zapadají do strategie vašeho
              portfolia.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/capital-management#opportunities"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ── CTA ── -->
    <UiCtaSection
      title="Začněme nezávaznou konzultací"
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGA pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
      primary-label="Kontaktovat nás"
      primary-to="/contact"
      secondary-label="Naše pobočky"
      secondary-to="/contact"
    />
  </div>
</template>
