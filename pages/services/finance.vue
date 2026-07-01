<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import usersData from "~/assets/data/users.json";

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

const relatedLinks = [
  { label: "Nezávislý finanční audit", to: "/services/finance#audit" },
  { label: "Finanční plán", to: "/services/finance#plan" },
  { label: "Zajištění rizik", to: "/services/finance#risk" },
  {
    label: "Odškodnění",
    to: "/services/finance#compensation",
  },
];

const caseStudies = caseStudiesData.finance.map((cs) => ({
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
        <div class="flex justify-between items-center">
          <h2 class="font-headline-lg text-headline-lg text-primary-800">
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
      title="Připraveni získat kontrolu nad financemi?"
      body="Nezávisle posoudíme vaši situaci, nastavíme finanční plán, ochranu rizik i odškodnění tak, aby vaše finance pracovaly dlouhodobě ve váš prospěch."
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
              img-src="/img/other/wall.png"
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
              img-src="/img/other/building.png"
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
              to: '/contact?#contact-form',
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
      heading-tag="h2"
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
          <UiBaseCard to="/services/finance#audit">
            <template #header>
              <h3
                class="font-headline-md text-primary-800 group-hover:text-secondary transition-colors"
              >
                Nezávislý finanční audit
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Detailní rozbor smluv, nákladů a nastavení vašich financí. Získáte
              jasný přehled, odhalení slabých míst a doporučení konkrétních
              kroků.
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
          <UiBaseCard to="/services/finance#plan">
            <template #header>
              <h3
                class="font-headline-md text-primary-800 group-hover:text-secondary transition-colors"
              >
                Finanční plán
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Strategie, která propojuje rezervy, investice i financování v
              souladu s vašimi cíli. Praktický plán pro dnešní rozhodování i
              budoucí etapy života.
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
          <UiBaseCard to="/services/finance#risk">
            <template #header>
              <h3
                class="font-headline-md text-primary-800 group-hover:text-secondary transition-colors"
              >
                Zajištění rizik
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Ať už jde o ochranu majetku, zdraví nebo podnikání, klíčové je
              správně vyhodnotit rizika a nastavit krytí, které odpovídá vaší
              reálné situaci.
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
          <!-- Service 4 -->
          <UiBaseCard to="/services/finance#compensation">
            <template #header>
              <h3
                class="font-headline-md text-primary-800 group-hover:text-secondary transition-colors"
              >
                Odškodnění
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Ať už jde o pracovní úrazy, autonehody, školní úrazy nebo jiné
              pojistné události, cílem je jediné: získat spravedlivé odškodnění
              v plné výši.
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
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGA pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
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
