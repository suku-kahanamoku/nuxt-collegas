<script setup lang="ts">
definePageMeta({ title: "Finance | Finanční poradenství" });
useHead({
  title: "Finance | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Nezávislý finanční audit, finanční plán, zajištění rizik a odškodnění v jednom celku. Pomáháme vám mít finance pod kontrolou, chránit majetek a rozhodovat se s jistotou.",
    },
  ],
});

const relatedLinks = [
  { label: "Nezávislý finanční audit", to: "/services/finance#audit" },
  { label: "Finanční plán", to: "/services/finance#plan" },
  { label: "Zajištění rizik", to: "/services/finance#risk" },
  {
    label: "Odškodnění",
    to: "/services/finance#compensation",
  },
];

const caseStudies = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyMCJXuap5zYsd6-EcXAOJc272ZF2horQ16S9yI4zoOTZBOXpa1C3AbQTj5EvLoa264GVAdDRfd5uFvI06sdOCpGmDavFqS3lILinQveRoZxIH_kU6_w4ZIDz1eFdFOKvN96N2G4j7ntbwme1_fJUgUSoraa7JVA01w7vHBedDiF4Sxb-gSQeS7xT3XsgkftY32khRKOpC8kOTNkGngh3fVxZgSR0N-sUda8QzTXDnm-2NxXFpvUe3NsR7yT5pgt8ISXlKUwAWGgQ",
    imgAlt: "Klient při konzultaci nad finančním auditem",
    category: "Finanční audit",
    year: "2024",
    title: "Audit financí: úspora 148 000 Kč ročně",
    description:
      "U klienta jsme při nezávislém auditu odhalili zbytečné náklady a duplicitní smlouvy. Po úpravě struktury získal přehled, nižší náklady a jasný plán dalších kroků.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LgD9NDR-JFsNYPVhMLNMhpUrYdjTmTpsEqU9DgH6cvTfkjcutzQ53N_t5IrvwJhYHfytH4EXNWO9LREq0-ptivi9eoWBH-uVzdL4Z1XRgNZI-H7LufK_CGiZ2mLoYz0nuSZ6a1feL7AQU2-TmxF6ezTpY2UUnswEbPCl60YzX3Ge-nfSk80Erxx3oy-SAXJHWQ-iKfnn4K4vBZHwlwF-WRbFmW5d7v_uw3Y-N-Eo5YAqVG11bDzgNXbTjcYe14kOBZJEgu37OP8",
    imgAlt: "Rodina plánuje dlouhodobé cíle s poradcem",
    category: "Finanční plán",
    year: "2023",
    title: "Rodinný plán: jasná strategie na 15 let",
    description:
      "Rodina řešila bydlení, rezervy i investice bez jasné návaznosti. Nastavili jsme jednotnou strategii, která propojuje každodenní rozhodování s dlouhodobými cíli.",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChj0M9c4RWC7HJZPOLrRNFwo6-2-8sKhJlyvWH4sn1gRnphBu8mbBbKYYRxWFhTl9b14dNZ5JBIkKY-xSfCGAy0l8gE3OPKlr3rhARzLLez_kDuyBbaja_jJl96FUu8BbcYFHQqT67vEoqhtIXgtvHqX-0OaxyFK7PFOJKeT6rLa4AskGB8M6up9FEVtubalwiWoeE8Hqz_pUBkDH5sBy5LwX9NrY3nJhZl0x-SxZorQNqlMx3GHiGcSdPHSwUCallfzKlRydPI5Y",
    imgAlt: "Klient řeší odškodnění po dopravní nehodě",
    category: "Odškodnění",
    year: "2024",
    title: "Po nehodě: navýšení odškodnění o 420 000 Kč",
    description:
      "Klient měl po dopravní nehodě podhodnocené nároky. Převzali jsme celý proces komunikace s pojišťovnou a pomohli uplatnit odškodnění v plné výši.",
  },
];
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Naše služby">
      <template #heading>Finance</template>

      <template #body>
        Nezávislý finanční audit je první krok k tomu, abyste ve svých financích
        měli skutečný přehled a jistotu. Nehodnotíme jen jednotlivé produkty,
        ale díváme se na vaše finance jako na celek. Ukážeme vám, co je
        nastavené správně, kde zbytečně přeplácíte a kde vám naopak unikají
        příležitosti.
      </template>

      <template #quote>
        „Audit vám nepřinese jen seznam změn, ale především klid a kontrolu.
        Budete přesně vědět, jak na tom jste a jaké kroky dávají smysl dál."
      </template>

      <template #attribution> — Chci jasno ve svých financích </template>
    </CustomTextComment>

    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex justify-between items-center mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary-800">
            Modelové situace
          </h2>
          <NuxtLink
            class="hidden md:flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1"
            to="/contact"
            >KONZULTOVAT SITUACI</NuxtLink>
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
          <NuxtLink
            class="w-full justify-center flex items-center gap-2 font-label-caps text-secondary-800 border border-secondary-800 py-4"
            to="/contact"
            >KONZULTOVAT SITUACI</NuxtLink>
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Připraveni získat kontrolu nad financemi?"
      body="Nezávisle posoudíme vaši situaci, nastavíme finanční plán, ochranu rizik i odškodnění tak, aby vaše finance pracovaly dlouhodobě ve váš prospěch."
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
          Finance nastavujeme jako jeden funkční celek, který vychází z vašich
          cílů, priorit a životní situace. Pracujeme s rezervami, investicemi i
          financováním tak, aby se vzájemně podporovaly a dlouhodobě fungovaly.
        </p>
        <p
          class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
        >
          „Nejde jen o produkty, ale o logiku celku. Důraz klademe na
          dlouhodobou udržitelnost, flexibilitu a schopnost reagovat na změny,
          které život přináší."
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
              Poradci pro finance
            </h2>
          </div>
          <NuxtLink
            class="font-label-caps text-primary-800 border-b border-primary pb-1 mb-2 hover:text-secondary hover:border-secondary transition-all"
            to="/our-people"
            >Zobrazit celý tým</NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <!-- Member 1 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo"
            name="Lukáš Formánek"
            role="Specialista na finanční audit"
            description="Pomáhá klientům získat přehled o smlouvách, nákladech a rizicích. Zaměřuje se na optimalizaci struktury financí a dlouhodobou stabilitu."
          />
          <!-- Member 2 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs"
            name="Filip Beneš"
            role="Poradce pro finanční plánování"
            description="Specializuje se na návrh finančních plánů propojujících rezervy, investice i financování do jedné srozumitelné strategie."
            delay="100ms"
          />
          <!-- Member 3 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw"
            name="Tomáš Kalous"
            role="Senior poradce pro ochranu a odškodnění"
            description="Vede klienty při nastavení pojistné ochrany i při uplatnění nároků na odškodnění tak, aby získali maximální možný výsledek."
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
              id="audit"
              img-src="/img/intro/notes.png"
              img-alt="Nezávislý finanční audit a plán"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Nezávislý finanční audit
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Nezávislý finanční audit je první krok k tomu, abyste ve svých
                  financích měli skutečný přehled a jistotu. Nehodnotíme jen
                  jednotlivé produkty, ale díváme se na vaše finance jako na
                  celek - jak spolu jednotlivé části fungují, kde dávají smysl a
                  kde naopak vznikají zbytečné náklady nebo rizika.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Detailně projdeme vaše smlouvy, nastavení i celkovou strukturu
                  financí a přeložíme vám je do srozumitelného obrazu. Díky tomu
                  získáte jasný základ pro další rozhodování - bez tlaku, bez
                  chaosu a bez závislosti na konkrétních produktech nebo
                  institucích.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="plan"
              img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
              img-alt="Finanční poradce při konzultaci"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Finanční plán
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Finanční plán je nástroj, který dává vašim penězům jasný směr
                  a smysl. Nevychází jen z čísel, ale především z vašich cílů,
                  priorit a životní situace. Ať už řešíte bydlení, rodinu,
                  budování majetku nebo finanční nezávislost, vše propojujeme do
                  jednoho funkčního celku.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Společně nastavíme strukturu vašich financí tak, aby
                  odpovídala tomu, kde se právě nacházíte, i tomu, kam chcete
                  dojít. Výsledkem není plán na papíře, ale konkrétní strategie,
                  podle které se můžete rozhodovat každý den.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="risk"
              img-src="/img/intro/notes.png"
              img-alt="Zajištění rizik"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Zajištění rizik
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Zajištění rizik je základním stavebním kamenem každé stabilní
                  finanční strategie. Nejde jen o to mít sjednané pojištění, ale
                  mít ho nastavené tak, aby vás skutečně chránilo v situacích,
                  kdy to nejvíce potřebujete.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Detailně analyzujeme vaše stávající pojistné smlouvy a
                  identifikujeme nedostatečné krytí, zbytečné duplicity i
                  oblasti, kde naopak platíte více, než je nutné. Výsledkem je
                  řešení, které dává smysl nejen z pohledu ceny, ale především
                  kvality ochrany.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="compensation"
              img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
              img-alt="Odškodnění"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Odškodnění
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Odškodnění je oblast, do které se člověk dostane nečekaně -
                  často ve chvíli, kdy řeší zdravotní, pracovní nebo osobní
                  komplikace. A právě tehdy je nejdůležitější mít po svém boku
                  někoho, kdo se v procesu vyzná a dokáže vás jím bezpečně
                  provést.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Pomáháme vám zorientovat se v nárocích, které vám skutečně
                  vznikají, a postaráme se o jejich uplatnění vůči pojišťovnám
                  nebo odpovědným subjektům. Výsledkem je nejen vyšší finanční
                  kompenzace, ale především úleva.
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
      label="FINANCE"
      title="Jasno, plán a ochrana"
      body="Od nezávislého auditu přes finanční plán až po ochranu rizik a odškodnění. Vaše finance nastavíme jako funkční celek, který dává smysl dnes i v budoucnu."
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
            Všechny oblasti financí řešíme v souvislostech. Každá služba
            navazuje na předchozí a podporuje dlouhodobou stabilitu.
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md"
        >
          <!-- Service 1 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Nezávislý finanční audit
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Detailní rozbor smluv, nákladů a nastavení vašich financí. Získáte
              jasný přehled, odhalení slabých míst a doporučení konkrétních
              kroků.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/finance#audit"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </NuxtLink>
          </div>
          <!-- Service 2 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Finanční plán
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Strategie, která propojuje rezervy, investice i financování v
              souladu s vašimi cíli. Praktický plán pro dnešní rozhodování i
              budoucí etapy života.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/finance#plan"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </NuxtLink>
          </div>
          <!-- Service 3 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Zajištění rizik
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je
              správně vyhodnotit rizika a nastavit krytí, které odpovídá vaší
              reálné situaci.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/finance#risk"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </NuxtLink>
          </div>
          <!-- Service 4 -->
          <div
            class="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-secondary transition-all duration-500"
          >
            <h3 class="font-headline-md text-primary-800 mb-stack-sm">
              Odškodnění
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Ať už jde o pracovní úrazy, autonehody, školní úrazy nebo jiné
              pojistné události, cílem je jediné: získat spravedlivé odškodnění
              v plné výši.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/finance#compensation"
            >
              ZOBRAZIT SLUŽBU
              <UIcon name="i-material-symbols-north-east" class="text-sm" />
            </NuxtLink>
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
