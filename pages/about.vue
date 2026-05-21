<script setup lang="ts">
definePageMeta({ title: "O nás | COLLEGA ENTERPRISE" });
useHead({
  title: "O nás | COLLEGA ENTERPRISE",
  meta: [{ name: "description", content: "Příběh vzniku a hodnoty skupiny COLLEGA ENTERPRISE a.s. – diskrétnost, nezávislost a odpovědnost od roku 2014." }],
});

const stats = [
  { value: "3", label: "Licencované subjekty pod ČNB" },
  { value: "10+", label: "Let v oboru" },
  { value: "9+", label: "Společností ve skupině" },
  { value: "100%", label: "Nezávislost na bankách" },
];

const values = [
  { icon: "lock", title: "Diskrétnost", description: "Vaše finanční situace, cíle a rozhodnutí zůstávají striktně mezi vámi a vaším poradcem. Žádné sdílení dat, žádné transparentní reporty třetím stranám." },
  { icon: "balance", title: "Nezávislost", description: "Nejsme vázáni žádnou bankou ani pojišťovnou. Doporučujeme pouze to, co skutečně slouží vašim zájmům – nikoli zájmům produktové nabídky." },
  { icon: "verified", title: "Odpovědnost", description: "Za každé doporučení stojíme plnou váhou svého jména. Licencujeme se, vzděláváme se a podléháme dohledu ČNB – protože důvěra se nezíská, ale zaslouží." },
];

const principles = [
  { icon: "search", title: "Nejprve pochopit", description: "Než cokoli navrhneme, nejprve důkladně poznáme vás – vaše cíle, hodnoty, závazky a rizika. Dobrý plán začíná hlubokou analýzou, ne produktovým katalogem." },
  { icon: "handshake", title: "Mluvit otevřeně", description: "Říkáme věci, jak jsou. Upozorníme vás na rizika, která jiní zamlčí. Naše přidaná hodnota není v pěkných tabulkách – je v upřímném rozhovoru." },
  { icon: "settings", title: "Řešení na míru", description: "Každý klient je jiný. Nepracujeme s šablonami – navrhujeme strategie, které přesně odpovídají vaší situaci a časovému horizontu." },
  { icon: "update", title: "Průběžná péče", description: "Spolupráce nekončí podpisem smlouvy. Jsme k dispozici, sledujeme vývoj situace a proaktivně reagujeme na změny – ve vašem životě i na trzích." },
];
</script>

<template>
  <div class="w-full">

    <!-- ── Hero ── -->
    <UiPageHero
      eyebrow="Náš příběh"
      title="O nás"
      decor-text="2014"
      decor-label="rok vzniku"
    >
      <p class="text-body-lg text-on-surface-variant max-w-2xl">
        Všechno začalo jednoduchou myšlenkou dvou přátel – budovat poradenství jinak.
        Bez kompromisů, bez závislosti na bankách, bez skrytých zájmů.
      </p>
    </UiPageHero>

    <!-- ── Příběh ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">

          <div class="lg:col-span-7 flex flex-col gap-stack-lg">
            <div>
              <span class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold">Jak to začalo</span>
              <h2 class="text-headline-lg font-serif text-primary-900 mb-stack-md">
                Dvě myšlenky.<br />Jeden závazek.
              </h2>
              <div class="flex flex-col gap-stack-md text-body-lg text-on-surface-variant">
                <p>
                  Všechno začalo jednoduchou myšlenkou dvou přátel. Viděli jsme, jak finanční poradenství
                  funguje v praxi – prodej produktů, plnění kvót, tlak na objem. A rozhodli jsme se, že
                  to může fungovat jinak.
                </p>
                <p>
                  V roce 2014 jsme se rozhodli odejít z korporátního prostředí a vybudovat poradenství,
                  kde klient je vždy na prvním místě. Ne produkt. Ne provize. Ne plán prodeje.
                </p>
                <p>
                  Dnes máme tři licencované subjekty pod dohledem ČNB, tým zkušených poradců a správce
                  a klienty, kteří nám důvěřují s tím nejcennějším – svým majetkem, rodinou a budoucností.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-center gap-stack-lg">
            <div class="grid grid-cols-2 gap-stack-sm">
              <UiStatCard v-for="s in stats" :key="s.label" :value="s.value" :label="s.label" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Hodnoty ── -->
    <section class="py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Naše hodnoty"
          title="Diskrétnost. Nezávislost. Odpovědnost."
          description="Tři slova, která nejsou jen sloganem. Jsou závazkem, který dodržujeme každý den – vůči každému klientovi, v každém rozhodnutí."
          :centered="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiValueCard v-for="v in values" :key="v.title" :icon="v.icon" :title="v.title" :description="v.description" />
        </div>
      </div>
    </section>

    <!-- ── Principy ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Jak pracujeme"
          title="Principy spolupráce"
          description="Každý vztah s klientem stavíme na čtyřech základních principech. Nejde o proces – jde o způsob myšlení."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <UiPrincipleCard v-for="p in principles" :key="p.title" :icon="p.icon" :title="p.title" :description="p.description" />
        </div>
      </div>
    </section>

    <!-- ── Citát ── -->
    <section class="py-section-gap">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold">Náš závazek</span>
          <blockquote class="text-headline-lg font-serif text-primary-900 leading-snug">
            „Důvěra není výsledek marketingu.<br />Je to výsledek každého rozhodnutí, které jste udělali správně."
          </blockquote>
          <p class="text-body-lg text-on-surface-variant mt-stack-md">
            Každý den pracujeme na tom, aby klienti, kteří nám svěřili péči o svůj majetek,
            nikdy neměli důvod litovat tohoto rozhodnutí.
          </p>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <UiCtaSection
      title="Začněme nezávaznou konzultací"
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGA pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
      primary-label="Kontaktovat nás"
      primary-to="/contact"
      variant="dark"
    />

  </div>
</template>
