<script setup lang="ts">
definePageMeta({ title: "Zajištění rizik | Finanční poradenství" });
useHead({
  title: "Zajištění rizik | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Správně nastavené zajištění rizik je základem každé stabilní finanční strategie. Analyzujeme vaše smlouvy, identifikujeme nedostatky a nastavíme ochranu, která vás skutečně chrání.",
    },
  ],
});

const relatedLinks = [
  { label: "Daňové poradenství", to: "/services/tax-advisory" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  { label: "Odškodnění", to: "/services/compensation" },
  {
    label: "Péče o investiční majetek",
    to: "/services/investment-asset-management",
  },
];

const caseStudies = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyMCJXuap5zYsd6-EcXAOJc272ZF2horQ16S9yI4zoOTZBOXpa1C3AbQTj5EvLoa264GVAdDRfd5uFvI06sdOCpGmDavFqS3lILinQveRoZxIH_kU6_w4ZIDz1eFdFOKvN96N2G4j7ntbwme1_fJUgUSoraa7JVA01w7vHBedDiF4Sxb-gSQeS7xT3XsgkftY32khRKOpC8kOTNkGngh3fVxZgSR0N-sUda8QzTXDnm-2NxXFpvUe3NsR7yT5pgt8ISXlKUwAWGgQ",
    imgAlt: "Rodina na horách – příklad správně nastaveného zajištění",
    category: "Životní pojištění",
    year: "2024",
    title: "Úraz na sjezdovce: pojistné plnění 780 000 Kč",
    description:
      "Klientka Karolína T. D. utrpěla při lyžování zlomeninu páteře. Díky správně nastavenému zajištění získala plné pojistné plnění a mohla se bez stresu věnovat léčbě.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LgD9NDR-JFsNYPVhMLNMhpUrYdjTmTpsEqU9DgH6cvTfkjcutzQ53N_t5IrvwJhYHfytH4EXNWO9LREq0-ptivi9eoWBH-uVzdL4Z1XRgNZI-H7LufK_CGiZ2mLoYz0nuSZ6a1feL7AQU2-TmxF6ezTpY2UUnswEbPCl60YzX3Ge-nfSk80Erxx3oy-SAXJHWQ-iKfnn4K4vBZHwlwF-WRbFmW5d7v_uw3Y-N-Eo5YAqVG11bDzgNXbTjcYe14kOBZJEgu37OP8",
    imgAlt: "Podnikatel konzultuje s poradcem nastavení pojistné ochrany",
    category: "Podnikatelé",
    year: "2023",
    title: "Ochrana podnikatele: jak nepřijít o firmu při nemoci",
    description:
      "OSVČ s jedinou firmou neměl žádné zajištění. Po diagnostikování vážné nemoci mu správně nastavené pojištění příjmu umožnilo udržet podnikání v chodu celých 14 měsíců.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChj0M9c4RWC7HJZPOLrRNFwo6-2-8sKhJlyvWH4sn1gRnphBu8mbBbKYYRxWFhTl9b14dNZ5JBIkKY-xSfCGAy0l8gE3OPKlr3rhARzLLez_kDuyBbaja_jJl96FUu8BbcYFHQqT67vEoqhtIXgtvHqX-0OaxyFK7PFOJKeT6rLa4AskGB8M6up9FEVtubalwiWoeE8Hqz_pUBkDH5sBy5LwX9NrY3nJhZl0x-SxZorQNqlMx3GHiGcSdPHSwUCallfzKlRydPI5Y",
    imgAlt: "Rodina se dvěma dětmi – nastavení rodinné finanční ochrany",
    category: "Rodina",
    year: "2024",
    title: "Ztráta příjmu živitele: rodina bez existenčních starostí",
    description:
      "Klient s hypotékou a dvěma dětmi přišel o práci ze zdravotních důvodů. Včas nastavené pojištění invalidity a příjmu pokrylo splátky i běžné náklady rodiny po celou dobu rekonvalescence.",
  },
];
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Finanční poradenství">
      <template #heading>Zajištění rizik</template>

      <template #body>
        Zajištění rizik je základním stavebním kamenem každé stabilní finanční
        strategie. Nejde jen o to mít sjednané pojištění, ale mít ho nastavené
        tak, aby vás skutečně chránilo v situacích, kdy to nejvíce potřebujete.
        Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je správně
        vyhodnotit rizika a nastavit krytí, které odpovídá vaší reálné situaci.
      </template>

      <template #quote>
        „Správně nastavené zajištění vám přináší především klid. Víte, že ať se
        stane cokoliv, máte oporu a vaše finanční stabilita není ohrožena jednou
        nečekanou událostí."
      </template>

      <template #attribution>
        — Nechte si nastavit ochranu, na kterou se můžete opravdu spolehnout
      </template>
    </CustomTextComment>

    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex justify-between items-center mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary-800">
            Case studies
          </h2>
          <a
            class="hidden md:flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1"
            href="/contact"
            >KONZULTOVAT PŘÍPAD</a
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
            >KONZULTOVAT PŘÍPAD</a
          >
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Připraveni zajistit vaši budoucnost?"
      body="Nechte si nastavit ochranu, na kterou se můžete skutečně spolehnout. Naši poradci jsou připraveni posoudit vaši situaci bez závazků."
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
      right-class="space-y-stack-md"
    >
      <template #overlay>
        <span class="font-display-xl text-display-xl leading-none">20+</span>
        <span class="font-label-caps uppercase tracking-widest"
          >Let v oboru</span
        >
      </template>

      <span
        class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
        >Naše zásady</span
      >
      <h2 class="text-headline-lg font-serif text-primary-800">
        Naše principy
      </h2>
      <p class="font-body-md text-body-md text-on-surface-variant">
        Základem je důkladná analýza a otevřená komunikace. Nejprve definujeme
        vaše cíle, časový horizont a toleranci k riziku. Teprve poté navrhujeme
        konkrétní strukturu řešení.
      </p>
      <p
        class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
      >
        „Nepracujeme s iluzí bezrizikového výnosu. Každé rozhodnutí má své
        scénáře – pozitivní i negativní. Naší rolí je tato rizika transparentně
        pojmenovat, kvantifikovat a řídit."
      </p>
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
              Poradci pro zajištění rizik
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
            role="Specialista na zajištění rizik"
            description="Přes 10 let zkušeností s nastavováním pojistné ochrany pro fyzické osoby i podnikatele. Certifikovaný finanční poradce."
          />
          <!-- Member 2 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs"
            name="Filip Beneš"
            role="Poradce pro pojistnou ochranu"
            description="Specializuje se na komplexní zajištění rizik v oblasti majetkového a životního pojištění. Člen AFIZ."
            delay="100ms"
          />
          <!-- Member 3 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw"
            name="Tomáš Kalous"
            role="Zakladatel & senior poradce"
            description="Zakladatel skupiny Collegas s více než 20 lety praxe v oblasti finančního plánování a řízení rizik."
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
              img-src="/img/risk-shield.svg"
              img-alt="Zajištění rizik"
              img-right
            >
              <p class="text-body-md text-on-surface-variant">
                Detailně analyzujeme vaše stávající pojistné smlouvy a
                identifikujeme nedostatečné krytí, zbytečné duplicity i oblasti,
                kde naopak platíte více, než je nutné. Výsledkem je řešení,
                které dává smysl nejen z pohledu ceny, ale především kvality
                ochrany.
              </p>
              <UiButton to="/contact">
                Nechte si nastavit ochranu, na kterou se můžete opravdu
                spolehnout
              </UiButton>
            </UiImageText>

            <UiImageText
              img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
              img-alt="Finanční poradce při konzultaci"
            >
              <h2 class="text-headline-lg font-serif text-primary-800">
                Komplexní ochrana
              </h2>
              <p class="text-body-md text-on-surface-variant">
                V případě podnikání nebo většího majetku pracujeme i s
                komplexnějšími scénáři, kde je cílem zajistit kontinuitu a
                minimalizovat dopady neočekávaných událostí. Řešíme nejen
                standardní životní a majetkové pojištění, ale i specifická
                rizika spojená s podnikatelskou činností, nemovitostmi nebo
                investičním portfoliem.
              </p>
              <p class="text-body-md text-on-surface-variant">
                Správně nastavené zajištění vám přináší především klid. Víte, že
                ať se stane cokoliv, máte oporu a vaše finanční stabilita není
                ohrožena jednou nečekanou událostí. Přistupujeme k vám
                individuálně.
              </p>
            </UiImageText>
          </div>

          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Nezávazná konzultace',
              description: 'Rádi posoudíme vaši situaci a navrhneme řešení.',
              label: 'Nezávazná konzultace',
              to: '/contact',
            }"
          />
        </div>
      </UContainer>
    </section>

    <UiImgDarkBanner
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
      label="ZAJIŠTĚNÍ RIZIK"
      title="Chráníme to, na čem záleží"
      body="Správně nastavená pojistná ochrana je základem každé stabilní finanční strategie. Pomáháme vám identifikovat rizika a nastavit krytí, které vás skutečně ochrání."
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
              Komplexní finanční péče
            </h2>
          </div>
          <p
            class="font-body-md text-on-surface-variant max-w-sm md:text-right"
          >
            Zajištění rizik je součástí širšího finančního plánování. Nabízíme i
            další služby, které spolu přirozeně navazují.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <!-- Service 1 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Daňové poradenství
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Optimalizace daňové zátěže, zpracování daňových přiznání a
              zastupování před finančním úřadem. Vše v souladu s platnou
              legislativou a ve váš prospěch.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/tax-advisory"
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
              Právní poradenství
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Právní ochrana majetku, smluvní dokumentace a poradenství v
              oblasti dědictví a rodinného práva. Nezávislé právní zastoupení ve
              váš prospěch.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/legal-advisory"
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
              Péče o investiční majetek
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Správa investičního portfolia, výběr vhodných instrumentů a
              průběžný dohled nad vývojem vašich aktiv s ohledem na váš rizikový
              profil.
            </p>
            <a
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              href="/services/investment-asset-management"
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
