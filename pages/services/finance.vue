<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import usersData from "~/assets/data/users.json";
import servicePages from "~/assets/data/service-pages";

definePageMeta({ title: "Finance | Finanční poradenství" });
useHead({
  title: "Finance | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Nezávislý audit, finanční plán, zajištění rizik a odškodnění v jednom celku. Pomáháme chránit majetek a rozhodovat se s jistotou.",
    },
  ],
});

const financePage = servicePages.finance;

const caseStudies = caseStudiesData.finance.map((cs) => ({
  ...cs,
  to: `/case-studies/${cs.slug}`,
}));

const relatedLinks = [...financePage.asideMenus];
const serviceCards = [...financePage.related.cards];

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
      <template #heading>Finance</template>

      <template #body>
        Je prvním krokem k tomu, abyste získali dokonalý přehled a klid. Za
        vašimi financemi nevidíme jen stohy papírů a smluv, ale vnímáme je v
        celkovém kontextu vašeho života. Společně projdeme, co vám už teď skvěle
        funguje, případně kde efektivně snížit výdaje a kde naopak maximalizovat
        růst vašeho majetku.
      </template>

      <template #quote>
        „Našim dlouhodobým účelem je pomáhat rodinám, jednotlivcům ale také
        firmám orientovat se ve světě financí, daní a realit. Tím pomáháme lidem
        vyřešit to podstatné aby měli čas, klid a pohodu na věci, které je baví
        a v kterých vynikají, a v důsledku toho jim také pomáháme zkvalitňovat
        život. My vynikáme v precizní práci finančních poradců a analytiků
        rodinných a firemních financí."
      </template>

      <template #attribution> — Jsme Collegas </template>
    </CustomTextComment>

    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter">
        <div class="flex justify-between items-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg text-primary-800">
            Modelové situace
          </h2>
          <NuxtLink
            class="hidden md:flex items-center gap-2 font-label-caps text-secondary-800 border-b border-secondary-800 py-1"
            to="/contact#contact-form"
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
            to="/contact#contact-form"
            >KONZULTOVAT SITUACI</NuxtLink
          >
        </div>
      </UContainer>
    </section>

    <UiDarkBanner
      title="Získejte kontrolu nad svými financemi ještě dnes."
      body="Nezávisle posoudíme vaši situaci, nastavíme finanční plán, ochranu rizik i odškodnění tak, aby vaše finance pracovaly dlouhodobě ve váš prospěch."
    >
      <UiButton to="/contact#contact-form" class="shrink-0 group">
        Domluvit konzultaci
        <UIcon
          name="i-material-symbols-arrow-forward"
          class="text-xl transition-transform duration-200 group-hover:translate-x-1"
        />
      </UiButton>
    </UiDarkBanner>

    <CustomUserPic&desc bg-image="/img/other/compass.png" img-class="shadow-sm">
      <template #overlay>
        <span class="text-headline-lg md:text-display-xl leading-none"
          >20+</span
        >
        <span class="font-label-caps uppercase tracking-widest"
          >LET ZKUŠENOSTÍ PRO VÁS</span
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
              Poradci pro finance
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
              id="audit"
              img-src="/img/intro/notes.png"
              img-alt="Nezávislý audit vašich rodinných financí a plán"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Nezávislý audit vašich rodinných financí
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Nezávislý audit vašich rodinných financí je první krok k tomu,
                  abyste ve svých financích měli skutečný přehled a jistotu.
                  Nehodnotíme jen jednotlivé produkty, ale díváme se na vaše
                  finance jako na celek - jak spolu jednotlivé části fungují,
                  kde dávají smysl a kde naopak vznikají zbytečné náklady nebo
                  rizika.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Detailně projdeme vaše smlouvy, nastavení i celkovou strukturu
                  financí a přeložíme vám je do srozumitelného obrazu. Díky tomu
                  získáte jasný základ pro další rozhodování - bez tlaku, bez
                  chaosu a nezávisle na konkrétních produktech nebo institucích.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="plan"
              img-src="/img/other/man.png"
              img-alt="Finanční poradce při konzultaci"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              img-src="/img/other/risk_headging.png"
              img-alt="Zajištění rizik"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              img-src="/img/other/compensation.png"
              img-alt="Odškodnění"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Collegas Odškodnění
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Do situace, kdy musíte řešit pojistnou událost, se většinou
                  dostanete nečekaně – často ve chvíli, kdy prožíváte náročné
                  zdravotní, pracovní nebo osobní komplikace. Právě v takových
                  momentech potřebujete mít vedle sebe partnera, který se v
                  celém procesu dokonale vyzná a bezpečně vás jím provede.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  V rámci divize Collegas Odškodnění vám pomůžeme přesně
                  vyčíslit a zorientovat se v nárocích, na které máte skutečné
                  právo. Kompletně se postaráme o jejich uplatnění vůči
                  pojišťovnám i viníkům. Výsledkem pro vás bude nejen
                  spravedlivé finanční odškodnění, ale především obrovská úleva.
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
              to: '/contact#contact-form',
            }"
          />
        </div>
      </UContainer>
    </section>

    <UiImgDarkBanner
      bg-image="/img/intro/stamp.png"
      label="FINANCE"
      title="Jasno, plán a ochrana"
      body="Od nezávislého rodinného auditu přes finanční plán až po ochranu rizik a odškodnění. Vaše finance nastavíme jako funkční celek, který dává smysl dnes i v budoucnu."
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
              {{ financePage.related.title }}
            </h2>
          </div>
          <p
            class="font-body-md text-on-surface-variant max-w-sm md:text-right"
          >
            {{ financePage.related.description }}
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md"
        >
          <UiBaseCard
            v-for="service in serviceCards"
            :key="service.to"
            :to="service.to"
          >
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                {{ service.title }}
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              {{ service.description }}
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
          to="/contact#contact-form"
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
          to="/contact#contact-form"
          variant="outline"
          class="justify-center px-10 py-4 text-base border-on-primary text-on-primary hover:bg-on-primary/10"
        >
          Naše pobočky
        </UiButton>
      </div>
    </UiDarkBanner>
  </div>
</template>
