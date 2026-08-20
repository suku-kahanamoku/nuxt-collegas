<script setup lang="ts">
import services from "~/assets/data/service-menu.json";
import servicePages from "~/assets/data/service-pages.json";

definePageMeta({ title: "Úvěry a financování | Finanční poradenství" });

useHead({
  title: "Úvěry a financování | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Hypoteční úvěry na bydlení, spotřebitelské úvěry, konsolidace a podnikatelské financování nastavené bezpečně a dlouhodobě udržitelně.",
    },
  ],
});

const loansPage = servicePages["loans-financing"];
const loansService = services.find(
  (service) => service.key === "loans-financing",
)!;
</script>

<template>
  <div class="w-full">
    <CustomTextComment heading-tag="h1" label="Naše služby">
      <template #heading>{{ loansService.navLabel }}</template>

      <template #body>
        Ať už kupujete první nemovitost, rekonstruujete nebo řešíte změnu
        současného úvěru, cílem je nastavit financování tak, aby pro vás bylo
        dlouhodobě zvládnutelné, přehledné a bezpečné. Pomáháme vám zorientovat
        se v možnostech a projít celým procesem bez zbytečného stresu.
        <br />
        <br />
        Správně nastavené využití bankovního kapitálu může výrazně zvýšit
        efektivitu práce s vlastními prostředky. Výsledkem je financování, které
        odpovídá vaší situaci dnes a zároveň vás neomezuje do budoucna.
      </template>

      <template #quote>
        „Zajistíme pro vás strukturu financování, která přesně odpovídá vašim
        záměrům, chrání vaše vlastní úspory a neomezuje vás do budoucna.“
      </template>

      <template #attribution>
        — Svěřte správu svých závazků do rukou specialistů a domluvte si
        individuální konzultaci.
      </template>
    </CustomTextComment>

    <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          <div class="lg:col-span-8 space-y-section-gap">
            <UiImageText
              id="mortgages"
              img-src="/img/other/financing.png"
              img-alt="Hypoteční úvěry na bydlení"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ loansPage.asideMenus[0].label }}
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Pomůžeme vám bezpečně projít cestou k vlastnímu bydlení, ať už
                  kupujete, stavíte nebo rekonstruujete. Najdeme pro vás
                  nejvýhodnější podmínky na trhu a zajistíme, aby pro vás byla
                  hypotéka dlouhodobě udržitelná.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="consumer-loans"
              img-src="/img/intro/notes.png"
              img-alt="Spotřebitelské úvěry a konsolidace"
            >
              <div class="grid space-y-stack-md items-center from-bottom">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ loansPage.asideMenus[1].label }}
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Financujte své aktuální potřeby chytře a bez zbytečně vysokých
                  úroků. Sloučením stávajících půjček do jedné konsolidace
                  snížíme vaše měsíční splátky a vneseme do vašich financí jasný
                  řád.
                </p>
              </div>
            </UiImageText>

            <UiImageText
              id="business-loans"
              img-src="/img/other/building.png"
              img-alt="Podnikatelské úvěry"
              img-right
            >
              <div class="grid space-y-stack-md items-center from-left">
                <h2
                  class="text-headline-md md:text-headline-lg font-serif text-primary-800"
                >
                  {{ loansPage.asideMenus[2].label }}
                </h2>
                <p class="text-body-md text-on-surface-variant">
                  Poskytneme vašemu podnikání potřebný impuls pro stabilizaci
                  provozu nebo investice do dalšího rozvoje. Navrhneme strukturu
                  financování, která podpoří růst vaší firmy a neohrozí její
                  cash flow.
                </p>
              </div>
            </UiImageText>
          </div>

          <UiAside
            title="Naše služby"
            :menus="[...loansPage.asideMenus]"
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
      title="Najděme financování, které vás nebude omezovat."
      body="Porovnáme dostupné možnosti a provedeme vás celým procesem od prvního návrhu až po bezpečné nastavení úvěru."
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
