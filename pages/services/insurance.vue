<script setup lang="ts">
import services from "~/assets/data/service-menu.json";
import servicePages from "~/assets/data/service-pages.json";

definePageMeta({ title: "Pojištění | Finanční poradenství" });

useHead({
  title: "Pojištění | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Pojištění rizik, která mohou ohrozit klientův život nebo majetek. Ochrana zdraví a majetku, optimalizace pojistných smluv a pomoc s odškodněním.",
    },
  ],
});

const insurancePage = servicePages.insurance;
const insuranceService = services.find(
  (service) => service.key === "insurance",
)!;
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Naše služby">
      <template #heading>{{ insuranceService.navLabel }}</template>

      <template #body>
        Pojištění rizik, která mohou ohrozit klientův život nebo majetek, je
        základním stavebním kamenem každé stabilní finanční strategie. Nejde jen
        o to mít sjednané pojištění, ale mít ho nastavené tak, aby vás skutečně
        chránilo v situacích, kdy to nejvíce potřebujete.
      </template>
    </CustomTextComment>

    <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-section-gap">
            <UiImageText
              id="health-and-property"
              img-src="/img/other/risk_headging.png"
              img-alt="Ochrana vašeho zdraví a majetku"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ insurancePage.asideMenus[0]?.label }}
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Život přináší příležitosti, ale i nečekaná rizika. Správně
                  nastavená ochrana zdraví a majetku je základním kamenem každé
                  úspěšné dlouhodobé strategie. Navrhneme pro vás řešení, které
                  minimalizuje hrozby a zajistí stabilitu vašeho rodinného i
                  firemního zázemí.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="contract-optimization"
              img-src="/img/intro/notes.png"
              img-alt="Optimalizace vašich pojistných smluv"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ insurancePage.asideMenus[1]?.label }}
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Život přináší příležitosti, ale i nečekaná rizika. Správně
                  nastavená ochrana zdraví a majetku je základním kamenem každé
                  úspěšné dlouhodobé strategie. Navrhneme pro vás řešení, které
                  minimalizuje hrozby a zajistí stabilitu vašeho rodinného i
                  firemního zázemí.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="compensation"
              img-src="/img/other/compensation.png"
              img-alt="Pomoc s odškodnění pojistné události"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ insurancePage.asideMenus[2]?.label }}
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
            :menus="[...insurancePage.asideMenus]"
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

    <UiDarkBanner
      title="Nastavme ochranu, na kterou se můžete spolehnout."
      body="Prověříme vaše současné smlouvy, navrhneme odpovídající krytí a pomůžeme vám také při řešení pojistné události."
    >
      <UiButton to="/contact#contact-form" class="shrink-0 group">
        Domluvit konzultaci
        <UIcon
          name="i-material-symbols-arrow-forward"
          class="text-xl transition-transform duration-200 group-hover:translate-x-1"
        />
      </UiButton>
    </UiDarkBanner>
  </div>
</template>
