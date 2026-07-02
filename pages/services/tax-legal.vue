<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import usersData from "~/assets/data/users.json";

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

const specialistSlugs = ["lukas-formanek", "filip-benes", "tomas-kalous"];

const teamMembers = specialistSlugs
  .map((slug) => {
    const user = usersData.find((item) => item.slug === slug);

    if (!user) return null;

    return {
      imgSrc: user.photo,
      name: user.name,
      role: user.role,
      description: user.intro || user.about || "",
      to: `/our-people/${user.slug}`,
    };
  })
  .filter((member): member is NonNullable<typeof member> => member !== null);
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

    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex justify-between items-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg text-primary-800">
            Modelové situace
          </h2>
          <NuxtLink
            class="hidden md:flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1"
            to="/contact?#contact-form"
            >KONZULTOVAT SITUACI</NuxtLink
          >
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg"
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
            to="/contact?#contact-form"
            >KONZULTOVAT SITUACI</NuxtLink
          >
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Připraveni nastavit daně i právo s jistotou?"
      body="Pomůžeme vám snížit zbytečnou daňovou zátěž a vybudovat právní zázemí, které podpoří vaše rozhodování v majetku, podnikání i investicích."
    >
      <UiButton to="/contact?#contact-form" class="shrink-0 group">
        Domluvit konzultaci
        <UIcon
          name="i-material-symbols-arrow-forward"
          class="text-xl transition-transform duration-200 group-hover:translate-x-1"
        />
      </UiButton>
    </UiDarkBanner>

    <CustomUserPic&desc bg-image="/img/intro/stamp.png" img-class="shadow-sm">
      <template #overlay>
        <span class="text-headline-lg md:text-display-xl leading-none"
          >20+</span
        >
        <span class="font-label-caps uppercase tracking-widest"
          >Let v oboru</span
        >
      </template>

      <div class="space-y-stack-md from-right">
        <span
          class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
          >Naše zásady</span
        >
        <h2
          class="text-headline-md md:text-headline-lg font-serif text-primary-800"
        >
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

    <!-- <section class="py-stack-lg md:py-section-gap bg-white">
      <UContainer class="mx-auto px-gutter">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-stack-lg"
        >
          <div>
            <span
              class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
              >Naši specialisté</span
            >
            <h2 class="text-headline-md md:text-headline-lg text-primary-800">
              Poradci pro daně a právo
            </h2>
          </div>
          <NuxtLink
            class="font-label-caps text-primary-800 border-b border-primary pb-1 mb-2 hover:text-secondary hover:border-secondary transition-all"
            to="/our-people"
            >Zobrazit celý tým</NuxtLink
          >
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg"
        >
          <UiUserCard
            v-for="member in teamMembers"
            :key="member.name"
            :img-src="member.imgSrc"
            :name="member.name"
            :role="member.role"
            :description="member.description"
            :to="member.to"
          />
        </div>
      </UContainer>
    </section> -->

    <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <!-- Obsah -->
          <div class="lg:col-span-8 space-y-section-gap">
            <UiImageText
              id="tax"
              img-src="/img/intro/notes.png"
              img-alt="Daňové poradenství"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              img-src="/img/other/man.png"
              img-alt="Právní poradenství"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              to: '/contact?#contact-form',
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
      heading-tag="h2"
    />

    <section class="py-stack-lg md:py-section-gap bg-surface">
      <UContainer class="mx-auto px-gutter">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-stack-md"
        >
          <div class="max-w-2xl">
            <span
              class="font-label-caps text-secondary-800 block mb-stack-sm uppercase"
              >Související služby</span
            >
            <h2 class="text-headline-md md:text-headline-lg text-primary-800">
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
          <UiBaseCard to="/services/tax-legal#tax">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Daňové poradenství
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Optimalizace daňové zátěže v návaznosti na příjmy, majetek,
              podnikání a investice. Srozumitelně, legálně a dlouhodobě.
            </p>
            <template #footer>
              <div
                class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent group-hover:border-secondary py-1 transition-all"
              >
                ZOBRAZIT SLUŽBU
                <UIcon name="i-material-symbols-north-east" class="text-sm" />
              </div>
            </template>
          </UiBaseCard>
          <!-- Service 2 -->
          <UiBaseCard to="/services/tax-legal#legal">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Právní poradenství
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Smluvní agenda, převody nemovitostí, vlastnické struktury a
              investiční vztahy nastavené s důrazem na jistotu a prevenci rizik.
            </p>
            <template #footer>
              <div
                class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent group-hover:border-secondary py-1 transition-all"
              >
                ZOBRAZIT SLUŽBU
                <UIcon name="i-material-symbols-north-east" class="text-sm" />
              </div>
            </template>
          </UiBaseCard>
          <!-- Service 3 -->
          <UiBaseCard to="/services/tax-legal#tax-legal-overview">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Daňové a právní zázemí
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Propojený přístup, který snižuje nejistotu, předchází problémům a
              pomáhá dělat důležitá rozhodnutí s klidem a kontrolou.
            </p>
            <template #footer>
              <div
                class="inline-flex items-center gap-2 font-label-caps text-secondary-800 border-b border-transparent group-hover:border-secondary py-1 transition-all"
              >
                ZOBRAZIT SLUŽBU
                <UIcon name="i-material-symbols-north-east" class="text-sm" />
              </div>
            </template>
          </UiBaseCard>
        </div>
      </UContainer>
    </section>

    <!-- ── CTA ── -->
    <UiDarkBanner
      title="Začněme nezávaznou konzultací"
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGAS pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
    >
      <div class="flex flex-col sm:flex-row justify-center gap-stack-md">
        <UiButton
          to="/contact?#contact-form"
          variant="solid"
          class="group justify-center px-10 py-4 text-base bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors"
        >
          Kontaktovat nás
          <UIcon
            name="i-material-symbols-arrow-forward"
            class="size-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </UiButton>
        <UiButton
          to="/contact?#contact-form"
          variant="outline"
          class="justify-center px-10 py-4 text-base border-on-primary text-on-primary hover:bg-on-primary/10"
        >
          Naše pobočky
        </UiButton>
      </div>
    </UiDarkBanner>
  </div>
</template>
