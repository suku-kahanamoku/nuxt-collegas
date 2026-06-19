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

    <!-- Insights / News -->
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
      <UButton
        color="secondary"
        variant="solid"
        size="lg"
        class="bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors px-8 shrink-0"
      >
        Domluvit konzultaci
      </UButton>
    </UiDarkBanner>

    <section class="py-section-gap bg-surface">
      <UContainer
        class="mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center"
      >
        <div class="relative">
          <img
            class="w-full aspect-square object-cover shadow-sm"
            data-alt="A high-end, close-up portrait of an experienced financial advisor in a tailored dark charcoal suit. He is looking off-camera with a thoughtful and confident expression. The background is a blurred, warm-toned private library with leather-bound books. The lighting is soft and directional, emphasizing textures and conveying deep trust and wisdom in a light-mode corporate setting."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsqrCbxLjupY1TswzG_UjcLT4wKDuirdPU7r3ElhKn2SkBwSBHEFFzSwf9cy7D_c-WPEHJfJJG_3_lvG_g4sS3Ab8y3EvUXvdc20wLP7emhzsK4c_wLnvtkGO4zLVVFKuAU9kmSxGnsuv51fZQeQxzpbkdVv2RkIB39NlYU0_ZPcIR9DASMnUbUbYrjB_MqqOO6Pmzi8RHa1lEfN-GWRg_HgncCVrTmLjE7xx2hDOfWfbewKqAPTadL-vp8J5AbuQNQ1eRP5_Jy48"
          />
          <div
            class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-900 p-stack-md hidden lg:flex flex-col justify-end text-on-primary"
          >
            <span class="font-display-xl text-display-xl leading-none"
              >20+</span
            >
            <span class="font-label-caps uppercase tracking-widest"
              >Let v oboru</span
            >
          </div>
        </div>
        <div class="space-y-stack-md">
          <span
            class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
            >Naše zásady</span
          >
          <h2 class="text-headline-lg font-serif text-primary-800">
            Naše principy
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Základem je důkladná analýza a otevřená komunikace. Nejprve
            definujeme vaše cíle, časový horizont a toleranci k riziku. Teprve
            poté navrhujeme konkrétní strukturu řešení.
          </p>
          <p
            class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
          >
            „Nepracujeme s iluzí bezrizikového výnosu. Každé rozhodnutí má své
            scénáře – pozitivní i negativní. Naší rolí je tato rizika
            transparentně pojmenovat, kvantifikovat a řídit."
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-section-gap bg-white">
      <UContainer class="mx-auto px-gutter">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-16 fade-in"
        >
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
          <div class="fade-in">
            <div class="aspect-3/4 mb-6 overflow-hidden">
              <div
                class="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                style="
                  background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo&quot;);
                "
              ></div>
            </div>
            <h3 class="font-headline-md text-[24px] text-primary-800">
              Lukáš Formánek
            </h3>
            <p
              class="font-label-caps text-secondary-800 uppercase tracking-widest mb-4"
            >
              Specialista na zajištění rizik
            </p>
            <p class="font-body-md text-on-surface-variant">
              Přes 10 let zkušeností s nastavováním pojistné ochrany pro fyzické
              osoby i podnikatele. Certifikovaný finanční poradce.
            </p>
          </div>
          <!-- Member 2 -->
          <div class="fade-in" style="transition-delay: 100ms">
            <div class="aspect-3/4 mb-6 overflow-hidden">
              <div
                class="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                style="
                  background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs&quot;);
                "
              ></div>
            </div>
            <h3 class="font-headline-md text-[24px] text-primary-800">
              Filip Beneš
            </h3>
            <p
              class="font-label-caps text-secondary-800 uppercase tracking-widest mb-4"
            >
              Poradce pro pojistnou ochranu
            </p>
            <p class="font-body-md text-on-surface-variant">
              Specializuje se na komplexní zajištění rizik v oblasti majetkového
              a životního pojištění. Člen AFIZ.
            </p>
          </div>
          <!-- Member 3 -->
          <div class="fade-in" style="transition-delay: 200ms">
            <div class="aspect-3/4 mb-6 overflow-hidden">
              <div
                class="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                style="
                  background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw&quot;);
                "
              ></div>
            </div>
            <h3 class="font-headline-md text-[24px] text-primary-800">
              Tomáš Kalous
            </h3>
            <p
              class="font-label-caps text-secondary-800 uppercase tracking-widest mb-4"
            >
              Zakladatel & senior poradce
            </p>
            <p class="font-body-md text-on-surface-variant">
              Zakladatel skupiny Collegas s více než 20 lety praxe v oblasti
              finančního plánování a řízení rizik.
            </p>
          </div>
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
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Detailně analyzujeme vaše stávající pojistné smlouvy a
                  identifikujeme nedostatečné krytí, zbytečné duplicity i
                  oblasti, kde naopak platíte více, než je nutné. Výsledkem je
                  řešení, které dává smysl nejen z pohledu ceny, ale především
                  kvality ochrany.
                </p>
                <UiButton
                  to="/contact"
                  color="secondary"
                  trailing-icon="i-material-symbols-arrow-forward"
                  :ui="{
                    trailingIcon:
                      'transition-transform duration-200 group-hover:translate-x-1',
                  }"
                >
                  Nechte si nastavit ochranu, na kterou se můžete opravdu
                  spolehnout
                </UiButton>
              </div>
              <div
                class="order-1 md:order-2 bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  src="/img/risk-shield.svg"
                  alt="Zajištění rizik"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div
                class="bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                  alt="Finanční poradce při konzultaci"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              <div class="space-y-stack-md">
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
                  Správně nastavené zajištění vám přináší především klid. Víte,
                  že ať se stane cokoliv, máte oporu a vaše finanční stabilita
                  není ohrožena jednou nečekanou událostí. Přistupujeme k vám
                  individuálně.
                </p>
              </div>
            </div>
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

    <section
      class="relative h-153.5 min-h-125 flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        data-alt="A cinematic, wide-angle landscape shot of a misty mountain range at dawn, reflecting in a perfectly still alpine lake. The lighting is soft and ethereal, using a sophisticated palette of deep forest greens and cool slate grays. The composition is clean and minimalist, evoking a sense of enduring legacy and quiet luxury suitable for a premium wealth management brand."
        style="
          background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4&quot;);
        "
      ></div>
      <div class="absolute inset-0 hero-gradient"></div>
      <UContainer class="relative z-10 mx-auto px-gutter w-full">
        <span class="font-label-caps text-secondary-fixed mb-stack-sm block"
          >ZAJIŠTĚNÍ RIZIK</span
        >
        <h1 class="font-display-xl text-display-xl text-on-primary max-w-2xl">
          Chráníme to, na čem záleží
        </h1>
        <p
          class="font-body-lg text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Správně nastavená pojistná ochrana je základem každé stabilní finanční
          strategie. Pomáháme vám identifikovat rizika a nastavit krytí, které
          vás skutečně ochrání.
        </p>
      </UContainer>
    </section>

    <section class="bg-surface-container-low py-section-gap">
      <UContainer class="mx-auto px-gutter">
        <h2
          class="font-display-xl text-display-xl text-primary-800 mb-stack-lg text-center"
        >
          Naše pobočky
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <!-- London Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="London Headquarters"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrrEjX17PokdjJrf6HsrA6COb-8STCNIO4OdG4z-n4V9uIixRocQoBdXQnO25rPkgB-mQf3DEwcP6Kr2NmPZSHsiZtjXVTY80Bl5tWl_46bsw8Pr7UGnlfOIN1a5AMt5HQleVnPG5SsnxFGS4HLhFmV4-Qr6wxV182yqPdQFHW3VUqmTfyrkiQhuWJYWUlGnNrN1QULuOmCxq7N5aQ3EUb_Xcq4WwVMtnEhJJCU2F_OHIQznpyUiP6_D9dMpDVIuX2aOPY-DFG4Q"
              />
            </div>
            <div class="p-stack-md grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                Centrála – Brno
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Sídlo skupiny Collegas v nejvyšší kancelářské budově na Moravě.
                Výborná dostupnost z centra Brna, parkování v areálu budovy.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Tomáš Kalous"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgGsWlwCZT4mXgsytCfRBV6_0bC-rRRDp80GgGQaxYsO8mepaykrowL8W_UTuK2iqnDtCNmOlCb7nAXbc6X8ynNMHevwTJ0mH-dOMe5lsRIvpfXmkQjiRrg0o2Yw7EsYx1XwaBaHN-aPc47nJLYaTFEEAjgwJ2kJ1feFkwAH6rLZFrYhpDYL7SQ3prUsk1Kv-UTR59yMwAah6Fq9jFHtvZeIR8i7jQ8_dWaq6JQdOO6S-LFOGDq2tfuXJ8wp3Z-mQ-k5N4kksyrio"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Vedoucí pobočky</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Tomáš Kalous</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Zürich Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="Zürich Office"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPXXC5L0SKXfkHzdnWLnThxCzqAZcZPnriyWhx2yamt5PWeQT2m9NxTqM756A2lnnQFUY6AvfAK_zO9PlTkGjPZ-PyOqXzBNDJQ7dO6unN-OVJaVxcTApupoBJizqCgiGCF9dREvyaDuLDfFclCqijTYqBuQOH6ETpHc3sDJbltRVEhwVO0biikQQLodClSlQb2hcH_1ofQYJs90aspScpqQGOZ46kfkZJ8pE69mqTzjgvKgJhwKE_yQW0WYG1TlT9WvBxStPMFp4"
              />
            </div>
            <div class="p-stack-md grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                Pobočka – Kroměříž
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                Tovačovského 2784/24, 767 01 Kroměříž
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Kancelář v centru Kroměříže. Schůzky jsou možné po předchozí
                domluvě s poradcem.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Lukáš Formánek"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8xUgbx1a2xxVb2STVNl0i630ubjlVhgZGgyWUz91fVmE1fueU7Tnlr6Lv-j7AjqR1gCWUku4CBXGPDghX1WZMWgZvx68dNHhAXlELJgfcFeltuL5YE8NJt06Ko59eGU-uqpQ0QC33p_ECMQODXSu9pgJ_FptSMosBO3SrKGSB1vox6ZYGM8o-t1C884FFw-k3mYAIPGPjYL7JRza_rQyiQHa4IPVEIKMYVdcVQbW8_0MpAdhUyWB1awBQi1riimEqKyi_x5zyqAo"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Vedoucí pobočky</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Lukáš Formánek</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Luxembourg Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="Luxembourg Office"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARMMKh_moDbWKIT_cW97rZhLg4IOtUnpSyW8RJzXMkOupEZ2_74rDazxMNKAPO08uWEwQG8FH2CevL9fQWSLDeMSYrVsDVY51TuwlMLC2V25fI0KqTc7olHZJj6Nlj-KbbY45QN7nJsfodhRfG4LkK74HzviPICpuyrOJjEUXtLTKYfPcMoJC0yTAl7FLR--uvhvOrJrGhMp0cIopPsddx3P8uwB5bg9bEizvCJLhkjGhhjqMu9Dib2Dub8rkzBhf6FoJtLEDIIow"
              />
            </div>
            <div class="p-stack-md grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                Pobočka – Břeclav
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                nám. T. G. Masaryka 302/8, 690 02 Břeclav
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Kancelář na hlavním náměstí Břeclavi. Pohodlné parkování přímo
                před budovou, schůzky po domluvě s poradcem.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Filip Beneš"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxqGjKB_uFq87B5HeULFl9yPkBfVH_quQsgqZNDWjWXhstdLz2STQ0fjHWs1PiND_W_0CtnW9n4eMaevqjgem-dqt4mrVPMAj6CKMyS_M0cPonv_ddS6jdJlOma8f8vC04As2VQs_PizmCSU45gXh0I8n6P2ZwPjUyDoyuK2QBPYSs8fNDXlVUoqaMNNRhVGBvmbMYUUhfxoo77oos40YnnKNRlUZZw57r-AlEpWdKQXMwzv8uwoizlPVsToXCNHyrmMRSdDlveAM"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Vedoucí pobočky</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Filip Beneš</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-0 mb-section-gap"
    >
      <!-- Levá strana: info + mapa -->
      <div
        class="bg-surface-container-lowest p-stack-lg lg:p-16 border border-outline-variant/30"
      >
        <div class="space-y-stack-lg mb-stack-lg">
          <div>
            <span
              class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
            >
              Identifikace společnosti
            </span>
            <h2
              class="text-headline-md font-serif text-primary-800 mb-stack-xs"
            >
              Finanční poradenství
            </h2>
            <dl class="space-y-stack-sm">
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  IČO
                </dt>
                <dd class="text-body-md text-on-surface">022 62 975</dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  Spisová značka
                </dt>
                <dd class="text-body-md text-on-surface-variant">
                  C 80725 vedená u Krajského soudu v Brně
                </dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  Sídlo
                </dt>
                <dd class="text-body-md text-on-surface-variant">
                  Pražákova 1008/69, Brno-město, 639 00 Brno
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <span
              class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
              >Provozovny</span
            >
            <ul class="space-y-stack-sm">
              <li
                v-for="office in [
                  {
                    name: 'Centrála',
                    address:
                      'AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno',
                  },
                  {
                    name: 'Kancelář Kroměříž',
                    address: 'Tovačovského 2784/24, Kroměříž',
                  },
                  {
                    name: 'Kancelář Břeclav',
                    address: 'nám. T. G. Masaryka 302/8, Břeclav',
                  },
                ]"
                :key="office.name"
                class="flex gap-3 items-start"
              >
                <UIcon
                  name="i-material-symbols-location-on"
                  class="text-secondary-800 text-base mt-0.5 shrink-0"
                />
                <div>
                  <p class="text-body-md font-semibold text-on-surface">
                    {{ office.name }}
                  </p>
                  <p class="text-body-md text-on-surface-variant">
                    {{ office.address }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="relative w-full aspect-video lg:aspect-4/3 overflow-hidden rounded-sm bg-surface-container shadow-sm border border-outline-variant/20"
        >
          <img
            class="w-full h-full object-cover map-container"
            alt="Mapa lokace kanceláře – AZ Tower Brno"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzq1xi-LrxBGgAOlUUWsEFi_-Va0u2-g8Pg117jQnZrBQB0-RGR9r7RkieGawy1vegyxxea0UAPVymcqUUndqydpyFhVU2iJ0-WlFscTvipBVNiVcTjo4-1oRxwh-Ps1l_AwnUrVTAB5jH6RMQqY2DZFLl4li3SQIEWWGzvyGjb5cXjXl9h8LYlmjAAcCxNnqGBKkfot4xShX2-wYEhnQd1ldyYJL-495Bl6OlF1JKhJNcGh1Wxu3lfRtzsITdijoIm8aQjWKbGyQ"
          />
          <div
            class="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              class="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
            >
              <UIcon
                name="i-material-symbols-location-on"
                class="text-white text-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pravá strana: formulář -->
      <div
        class="bg-primary-900 p-stack-lg lg:p-16 flex flex-col justify-center"
      >
        <div class="mb-stack-lg">
          <span
            class="text-label-caps text-secondary-fixed block mb-stack-sm uppercase tracking-widest font-semibold"
          >
            Sjednejte konzultaci
          </span>
          <h2 class="text-headline-md font-serif text-on-primary">
            Nezávazná konzultace zdarma
          </h2>
          <p class="text-body-md text-on-primary-container mt-stack-xs">
            Vyplňte formulář a my se vám ozveme pro domluvení termínu osobního
            setkání.
          </p>
        </div>

        <form class="space-y-stack-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Jméno a příjmení
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jan Novák"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline"
              />
            </div>
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                E-mailová adresa
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="jan.novak@email.cz"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Oblast zájmu
              </label>
              <select
                name="interest"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              ></select>
            </div>
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Velikost portfolia
              </label>
              <select
                name="portfolio"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              ></select>
            </div>
          </div>

          <div>
            <label
              class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
            >
              Popis situace
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Stručně popište, s čím Vám můžeme pomoci..."
              class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline resize-none"
            ></textarea>
          </div>

          <div class="pt-stack-md">
            <UiButton
              type="submit"
              color="secondary"
              variant="solid"
              trailing-icon="i-material-symbols-arrow-forward"
              size="xl"
              class="w-full md:w-auto justify-center px-10 bg-secondary-fixed! text-primary-800! hover:bg-secondary-fixed/80! transition-colors"
              :ui="{
                trailingIcon:
                  'transition-transform duration-200 group-hover:translate-x-1 size-5',
              }"
            >
              Odeslat poptávku
            </UiButton>
          </div>

          <p
            class="text-label-caps text-on-primary-container mt-stack-md opacity-60 tracking-widest"
          >
            * Veškerá komunikace je přísně důvěrná a podléhá zásadám ochrany
            osobních údajů.
          </p>
        </form>
      </div>
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
