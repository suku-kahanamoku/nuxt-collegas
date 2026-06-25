<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";

definePageMeta({ title: "Daně a právo | Finanční poradenství" });
useHead({
  title: "Daně a právo | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Daňové a právní poradenství v souvislostech. Pomáháme vám snižovat zbytečnou daňovou zátěž a budovat právní zázemí pro majetek, podnikání i investice.",
    },
  ],
});

const relatedLinks = [
  {
    label: "Daňové poradenství",
    to: "/services/tax-legal#tax",
  },
  {
    label: "Právní poradenství",
    to: "/services/tax-legal#legal",
  },
];

const caseStudies = caseStudiesData.tax.map((cs) => ({
  ...cs,
  to: `/case-studies/${cs.slug}`,
}));
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Naše služby">
      <template #heading>Daně a právo</template>

      <template #body>
        Daně asi nikdy nebudou vaše oblíbené téma. To ale neznamená, že byste
        jim měli zbytečně nechávat víc, než je nutné. Díváme se na vaše daně v
        souvislostech, ne izolovaně, a hledáme logiku, která funguje dlouhodobě.
      </template>

      <template #quote>
        „Výsledkem není jen nižší daňová zátěž, ale hlavně klid. Víte, že máte
        věci nastavené správně a nic vás nepřekvapí ve chvíli, kdy to nejméně
        čekáte."
      </template>

      <template #attribution> — Chci (ne)platit daně </template>
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
            >KONZULTOVAT SITUACI</NuxtLink
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
          <NuxtLink
            class="w-full justify-center flex items-center gap-2 font-label-caps text-secondary-800 border border-secondary-800 py-4"
            to="/contact"
            >KONZULTOVAT SITUACI</NuxtLink
          >
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Připraveni nastavit daně i právo s jistotou?"
      body="Pomůžeme vám snížit zbytečnou daňovou zátěž a vybudovat právní zázemí, které podpoří vaše rozhodování v majetku, podnikání i investicích."
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
          Daňové a právní otázky řešíme jako jeden celek. Zaměřujeme se na to,
          aby každé rozhodnutí dávalo ekonomický i právní smysl a obstálo i v
          dlouhodobém horizontu.
        </p>
        <p
          class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
        >
          „Naším cílem není jen reagovat na vzniklé situace, ale především jim
          předcházet. Pomáháme nastavovat vztahy tak, aby byly funkční,
          srozumitelné a udržitelné."
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
              Poradci pro daně a právo
            </h2>
          </div>
          <NuxtLink
            class="font-label-caps text-primary-800 border-b border-primary pb-1 mb-2 hover:text-secondary hover:border-secondary transition-all"
            to="/our-people"
            >Zobrazit celý tým</NuxtLink
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <!-- Member 1 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo"
            name="Lukáš Formánek"
            role="Specialista na daňové poradenství"
            description="Pomáhá klientům nastavovat daňovou strukturu příjmů, podnikání a majetku tak, aby byla efektivní, srozumitelná a dlouhodobě bezpečná."
          />
          <!-- Member 2 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs"
            name="Filip Beneš"
            role="Poradce pro právní agendu majetku"
            description="Specializuje se na smluvní dokumentaci, převody nemovitostí, investiční vztahy a právní nastavení vlastnických struktur."
            delay="100ms"
          />
          <!-- Member 3 -->
          <UiUserCard
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw"
            name="Tomáš Kalous"
            role="Senior poradce pro daňové a právní strategie"
            description="Propojuje daňové a právní poradenství do jednoho funkčního rámce, který klientům pomáhá rozhodovat se bezpečně a s dlouhodobou jistotou."
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
              id="tax"
              img-src="/img/intro/notes.png"
              img-alt="Daňové poradenství"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Daňové poradenství
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Díváme se na vaše daně v souvislostech, ne izolovaně. Příjmy,
                  podnikání, investice i majetek tvoří jeden celek - a právě v
                  tom celku často vznikají příležitosti, které běžně zůstávají
                  nevyužité.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Ukážeme vám, kde dává smysl upravit strukturu, co využít a co
                  naopak nedělat, abyste se vyhnuli zbytečným nákladům i
                  rizikům. Nehledáme kličky, hledáme logiku, která funguje
                  dlouhodobě.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="legal"
              img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
              img-alt="Právní poradenství"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Právní poradenství
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Právní poradenství u nás není jednorázová služba, ale
                  dlouhodobá spolupráce postavená na důvěře, diskrétnosti a
                  profesionalitě. Specializujeme se na oblasti, které přímo
                  souvisejí s vaším majetkem a jeho správou.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Naším cílem není jen reagovat na vzniklé situace, ale
                  především jim předcházet. Pomáháme nastavovat právní vztahy
                  tak, aby byly funkční, srozumitelné a dlouhodobě udržitelné.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="tax-legal-overview"
              img-src="/img/intro/notes.png"
              img-alt="Daně a právo v souvislostech"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2 class="text-headline-lg font-serif text-primary-800">
                  Daňové a právní zázemí
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Daňová a právní oblast jsou v praxi úzce propojené. Když se
                  řeší odděleně, vznikají zbytečné náklady, rizika a nejistota.
                  Když se řeší společně, získáte pevný rámec pro správu majetku,
                  podnikání i investic.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je klid, jistota a vědomí, že vaše rozhodnutí stojí
                  na pevných základech a jsou podpořena profesionálním zázemím.
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
      label="DANE A PRAVO"
      title="Jistota v danich i pravu"
      body="Propojujeme daňové a právní poradenství do jednoho funkčního rámce. Získáte nižší zbytečné náklady, pevnější ochranu majetku a klid při rozhodování."
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
              Daňové a právní služby
            </h2>
          </div>
          <p
            class="font-body-md text-on-surface-variant max-w-sm md:text-right"
          >
            Daně a právo nastavujeme v souvislostech, aby rozhodnutí dávala
            smysl nejen dnes, ale i v dlouhodobém horizontu.
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
              Optimalizace daňové zátěže v návaznosti na příjmy, majetek,
              podnikání a investice. Srozumitelně, legálně a dlouhodobě.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/tax-legal#tax"
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
              Právní poradenství
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Smluvní agenda, převody nemovitostí, vlastnické struktury a
              investiční vztahy nastavené s důrazem na jistotu a prevenci rizik.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/tax-legal#legal"
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
              Daňové a právní zázemí
            </h3>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Propojený přístup, který snižuje nejistotu, předchází problémům a
              pomáhá dělat důležitá rozhodnutí s klidem a kontrolou.
            </p>
            <NuxtLink
              class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent hover:border-secondary py-1 transition-all"
              to="/services/tax-legal#tax-legal-overview"
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
