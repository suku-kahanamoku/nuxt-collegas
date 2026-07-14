<script setup lang="ts">
import caseStudiesData from "~/assets/data/case-studies.json";
import usersData from "~/assets/data/users.json";
import servicePages from "~/assets/data/service-pages.json";

definePageMeta({ title: "Reality a energie | Finanční poradenství" });
useHead({
  title: "Reality a energie | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Energetická optimalizace, realitní služby, správa nemovitostí a development. Pomáháme snižovat náklady a dlouhodobě zvyšovat hodnotu majetku.",
    },
  ],
});

const realEstatePage = servicePages["real-estate-energy"];

const caseStudies = caseStudiesData["real-estate"].map((cs) => ({
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
      <template #heading>Reality a energie</template>

      <template #body>
        Energetická optimalizace a práce s nemovitostmi nejsou oddělené oblasti,
        ale propojený celek, který rozhoduje o dlouhodobé hodnotě vašeho
        majetku. Pomáháme vám řídit náklady, zvyšovat výnos a nastavovat
        rozhodnutí tak, aby dávala smysl v praxi.
      </template>

      <template #quote>
        „Energie i nemovitosti mají fungovat ve váš prospěch. Cílem je systém,
        který je ekonomicky udržitelný, provozně zvládnutelný a dlouhodobě pod
        kontrolou."
      </template>

      <template #attribution>
        — Chci pro svou nemovitost maximální hodnotu
      </template>
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
      title="Připraveni řídit energii i nemovitosti efektivněji?"
      body="Nastavíme vám strategii pro energie, realitní transakce, správu portfolia i developerské příležitosti tak, aby váš majetek dlouhodobě rostl na hodnotě."
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
          Jak přistupujeme k vašemu majetku
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Každé rozhodnutí stavíme na datech, znalosti trhu a provozní realitě.
          V energiích i realitách hledáme konkrétní kroky, které přinášejí
          měřitelný efekt a dlouhodobou stabilitu.
        </p>
        <p
          class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
        >
          „Neřešíme jen jednotlivé transakce. Nastavujeme systém, který chrání
          hodnotu majetku, zvyšuje výkonnost a snižuje každodenní provozní
          starosti."
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
              Poradci pro reality a energii
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
              id="energy"
              img-src="/img/other/energy_optimalization.png"
              img-alt="Energetická optimalizace"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Energetická optimalizace
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Energetická optimalizace není jen o změně dodavatele, ale o
                  celkovém řízení toho, jak a za kolik energii využíváte.
                  Největší úspory často vznikají kombinací správně nastavených
                  smluv, tarifů, spotřeby a technického řešení.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Analyzujeme vaši spotřebu, smluvní podmínky, distribuční sazby
                  i způsob využívání energie v domácnosti nebo firmě.
                  Identifikujeme slabá místa a navrhujeme efektivnější
                  nastavení, které vede ke snížení nákladů.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="real-estate"
              img-src="/img/other/reality.png"
              img-alt="Realitní služby"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Realitní služby
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Realitní služby u nás nejsou jen o zprostředkování prodeje
                  nebo pronájmu, ale o kompletním zajištění celého procesu od
                  prvního rozhodnutí až po úspěšné předání nemovitosti.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Zajišťujeme profesionální přípravu nemovitosti, inzerci,
                  marketing, komunikaci se zájemci, vyjednávání i kompletní
                  právní servis včetně bezpečného vypořádání transakce.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="property-management"
              img-src="/img/other/building.png"
              img-alt="Správa nemovitostí"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Správa nemovitostí
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Správa nemovitostí znamená, že váš majetek funguje tak, jak má
                  - bez zbytečných starostí, výpadků příjmů nebo neřešených
                  problémů. Zajišťujeme kompletní správu od výběru nájemníků po
                  technický servis a ekonomickou agendu.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je nemovitost, která vydělává, aniž by vás
                  zatěžovala. Máte jistotu, že se o váš majetek stará někdo, kdo
                  hlídá jeho hodnotu i výkonnost.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="development"
              img-src="/img/other/develop_project.png"
              img-alt="Developerské projekty"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  Developerské projekty
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Developerské projekty vnímáme jako komplexní proces, kde se
                  propojuje vize, kapitál, trh i správné načasování. Od výběru
                  lokality po finální prodej má každý krok zásadní vliv na
                  celkový výsledek.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Podílíme se na analýze příležitosti, přípravě projektu,
                  financování, koordinaci realizace i prodejní strategii tak,
                  aby projekt dával smysl nejen na papíře, ale i v praxi.
                </p>
              </div>
            </UiImageText>
          </div>

          <UiAside
            title="Naše služby"
            :menus="[...realEstatePage.asideMenus]"
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
      label="REALITY A ENERGIE"
      title="Hodnota majetku pod kontrolou"
      body="Od energetické optimalizace přes realitní služby až po správu nemovitostí a developerské projekty. Nastavujeme systém, který dlouhodobě chrání i rozvíjí váš majetek."
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
              {{ realEstatePage.related.title }}
            </h2>
          </div>
          <p
            class="font-body-md text-on-surface-variant max-w-sm md:text-right"
          >
            {{ realEstatePage.related.description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          <UiBaseCard
            v-for="service in realEstatePage.related.cards"
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
