<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import usersData from "~/assets/data/users.json";

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

const caseStudies = caseStudiesData.capital.map((cs) => ({
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
      title="Připraveni posunout kapitál dál?"
      body="Nastavíme péči o investice, financování i výběr příležitostí tak, aby vaše rozhodnutí zapadala do dlouhodobé strategie a podporovala růst majetku."
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
              Poradci pro správu kapitálu
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
              id="asset-care"
              img-src="/img/intro/notes.png"
              img-alt="Péče o investiční majetek"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              img-src="/img/other/man.png"
              img-alt="Financování bydlení a projektů"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
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
              to: '/contact?#contact-form',
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
          <UiBaseCard to="/services/capital-management#asset-care">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Péče o investiční majetek
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Kontinuální řízení portfolia, pravidelné vyhodnocování výkonnosti
              a úpravy strategie podle vývoje trhu i vašich cílů.
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
          <UiBaseCard to="/services/capital-management#financing">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Financování
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Nastavení úvěrů pro bydlení, rekonstrukce i projekty tak, aby byly
              bezpečné, přehledné a zároveň podporovaly další růst kapitálu.
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
          <UiBaseCard to="/services/capital-management#opportunities">
            <template #header>
              <h3
                class="text-title-md md:text-title-lg text-primary-800 group-hover:text-secondary transition-colors"
              >
                Investiční příležitosti
              </h3>
            </template>
            <p class="font-body-md text-on-surface-variant mb-stack-lg">
              Vyhledáváme a analyzujeme příležitosti, které dávají smysl z
              pohledu výnosu, struktury i rizik a zapadají do strategie vašeho
              portfolia.
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
