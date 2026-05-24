<script setup lang="ts">
definePageMeta({ title: "Developerské projekty | Finanční poradenství" });
useHead({
  title: "Developerské projekty | Finanční poradenství",
  meta: [{ name: "description", content: "Developerské projekty vnímáme jako komplexní proces, kde se propojuje vize, kapitál, trh i správné načasování. Podílíme se na celém procesu od analýzy příležitosti až po finální prodej." }],
});

const relatedLinks = [
  { label: "Péče o investiční majetek", to: "/services/investment-asset-management" },
  { label: "Správa nemovitostí", to: "/services/property-management" },
  { label: "Realitní služby", to: "/services/real-estate" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
];
</script>

<template>
  <div class="w-full">

    <UiIntro
      eyebrow="Kapitálové investice"
      title="Developerské projekty"
      description="Developerské projekty vnímáme jako komplexní proces, kde se propojuje vize, kapitál, trh i správné načasování. Nejde jen o samotnou výstavbu, ale o vytvoření projektu, který má dlouhodobou hodnotu – pro investora i pro budoucí uživatele. Každý krok, od výběru lokality až po finální prodej, má zásadní vliv na celkový výsledek."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <section class="bg-surface-container-low py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">

          <div class="lg:col-span-8 space-y-section-gap">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="order-2 md:order-1 space-y-stack-md">
                <p class="text-body-md text-on-surface-variant">
                  Podílíme se na celém procesu – od analýzy příležitosti, návrhu projektu a ekonomického modelu až
                  po jeho realizaci a následný prodej. Zajišťujeme přípravu projektu, koordinaci jednotlivých profesí,
                  financování i nastavení prodejní strategie.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Díky znalosti trhu dokážeme správně nastavit produkt, cenu i načasování tak, aby projekt dával
                  smysl nejen na papíře, ale i v praxi.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem jsou projekty, které jsou funkční, ekonomicky udržitelné a atraktivní pro trh. Pro investory
                  to znamená jasně řízený proces a kontrolu nad kapitálem, pro klienty pak kvalitní a promyšlené
                  bydlení či investiční příležitost.
                </p>
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Zapojte se do developerských projektů
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </NuxtLink>
              </div>
              <div class="order-1 md:order-2 bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  class="w-full h-full object-cover"
                  alt="Architektonický detail moderní budovy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB3ex9wSUxLroSQvcTshXAvZ2w3G94V2d6wFRbOiptcLcz3J6QFD4QKJh0xcZRH1aH8_o1BtmYaa-hqBft9MNxAHDBS3ZWj5KSGCpeNNpteBpGNiczfb9lwRjBcZGZ6ZDANcCZGqGageYcw_526l3s5HoxiTRMOWSFNrlc_VRcY4qs4w_c3xG-3-O6d_V1cPPSmExzUPcf9AO8USYGNGPdx3erBbS8iK_bswez8QXKPnThvwwiEzrlRe8DlpA_xyXbkFbjDZUZeL8"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
              <div class="bg-surface-container-highest overflow-hidden" style="aspect-ratio: 4/5;">
                <img
                  class="w-full h-full object-cover"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
              <div class="space-y-stack-md">
                <h2 class="text-headline-lg font-serif text-primary-900">Investiční příležitosti</h2>
                <p class="text-body-md text-on-surface-variant">
                  Investiční příležitosti nevznikají každý den – a ještě méně těch, které dávají skutečný smysl v širším
                  kontextu vašeho portfolia. Naším cílem není nabídnout „cokoliv, co zrovna funguje", ale vybírat a
                  vytvářet příležitosti, které obstojí z pohledu výnosu, rizika i dlouhodobé strategie.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Aktivně vyhledáváme projekty a investice napříč oblastmi, jako jsou nemovitosti, developerské
                  záměry nebo další kapitálové příležitosti. Každou z nich detailně analyzujeme – z pohledu
                  návratnosti, struktury, rizik i reálného potenciálu. Díky tomu vám předkládáme pouze ty příležitosti,
                  za kterými si dokážeme stát a které dávají smysl nejen na papíře, ale i v praxi.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem je přístup k investicím, ke kterým se běžný investor často nedostane, a zároveň jistota,
                  že každé rozhodnutí zapadá do vaší celkové strategie. Investování tak přestává být o náhodě a
                  stává se řízeným procesem s jasným cílem – dlouhodobě růst a chránit váš kapitál.
                </p>
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-stack-sm text-secondary-700 text-label-caps font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Získejte přístup k investičním příležitostem
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </NuxtLink>
              </div>
            </div>

          </div>

          <UiAside title="Související služby" :menus="relatedLinks" />

        </div>
      </div>
    </section>

  </div>
</template>
