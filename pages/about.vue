<script setup lang="ts">
definePageMeta({ title: "O nás | COLLEGA ENTERPRISE" });
useHead({
  title: "O nás | COLLEGA ENTERPRISE",
  meta: [
    {
      name: "description",
      content:
        "Příběh vzniku a hodnoty skupiny COLLEGA ENTERPRISE a.s. – diskrétnost, nezávislost a odpovědnost od roku 2014.",
    },
  ],
});

const values = [
  {
    icon: "lock",
    title: "Diskrétnost",
    description:
      "Vaše finanční situace, cíle a rozhodnutí zůstávají striktně mezi vámi a vaším poradcem. Žádné sdílení dat, žádné transparentní reporty třetím stranám.",
  },
  {
    icon: "balance",
    title: "Nezávislost",
    description:
      "Nejsme vázáni žádnou bankou ani pojišťovnou. Doporučujeme pouze to, co skutečně slouží vašim zájmům – nikoli zájmům produktové nabídky.",
  },
  {
    icon: "verified",
    title: "Odpovědnost",
    description:
      "Za každé doporučení stojíme plnou váhou svého jména. Licencujeme se, vzděláváme se a podléháme dohledu ČNB – protože důvěra se nezíská, ale zaslouží.",
  },
];

const principles = [
  {
    icon: "search",
    title: "Nejprve pochopit",
    description:
      "Než cokoli navrhneme, nejprve důkladně poznáme vás – vaše cíle, hodnoty, závazky a rizika. Dobrý plán začíná hlubokou analýzou, ne produktovým katalogem.",
  },
  {
    icon: "handshake",
    title: "Mluvit otevřeně",
    description:
      "Říkáme věci, jak jsou. Upozorníme vás na rizika, která jiní zamlčí. Naše přidaná hodnota není v pěkných tabulkách – je v upřímném rozhovoru.",
  },
  {
    icon: "settings",
    title: "Řešení na míru",
    description:
      "Každý klient je jiný. Nepracujeme s šablonami – navrhujeme strategie, které přesně odpovídají vaší situaci a časovému horizontu.",
  },
  {
    icon: "update",
    title: "Průběžná péče",
    description:
      "Spolupráce nekončí podpisem smlouvy. Jsme k dispozici, sledujeme vývoj situace a proaktivně reagujeme na změny – ve vašem životě i na trzích.",
  },
];
</script>

<template>
  <div class="w-full">
    <!-- ── Intro ── -->
    <UiIntro
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
    >
      <template #header>
        <UiTitle eyebrow="Náš příběh" size="md">
          <template #title>
            <h1
              class="text-display-xl font-serif text-primary-900 leading-none"
            >
              O nás
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p>
          Všechno začalo jednoduchou myšlenkou dvou přátel – budovat poradenství
          jinak. Bez kompromisů, bez závislosti na bankách, bez skrytých zájmů.
        </p>
      </template>
    </UiIntro>

    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Naše hodnoty"
          title="Diskrétnost. Nezávislost. Odpovědnost."
          description="Tři slova, která nejsou jen sloganem. Jsou závazkem, který dodržujeme každý den – vůči každému klientovi, v každém rozhodnutí."
          :centered="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiBaseCard v-for="v in values" :key="v.title">
            <template #header>
              <UiTitle :divider="false">
                <template #eyebrow>
                  <span
                    class="material-symbols-outlined text-secondary-700"
                    style="font-size: 2rem"
                    >{{ v.icon }}</span
                  >
                </template>
                <template #title>
                  <h3 class="text-title-lg font-serif text-primary-900">
                    {{ v.title }}
                  </h3>
                </template>
              </UiTitle>
            </template>
            <p class="text-body-md text-on-surface-variant">
              {{ v.description }}
            </p>
          </UiBaseCard>
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
          <UiBaseCard v-for="p in principles" :key="p.title">
            <template #header>
              <UiTitle :divider="false">
                <template #eyebrow>
                  <div class="shrink-0 flex items-start pt-0.5">
                    <span
                      class="material-symbols-outlined text-secondary-700"
                      style="font-size: 1.75rem"
                      >{{ p.icon }}</span
                    >
                  </div>
                </template>
                <template #title>
                  <h3
                    class="text-title-md font-serif text-primary-900 mb-stack-xs"
                  >
                    {{ p.title }}
                  </h3>
                </template>
              </UiTitle>
            </template>
            <p class="text-body-md text-on-surface-variant">
              {{ p.description }}
            </p>
          </UiBaseCard>
        </div>
      </div>
    </section>

    <!-- ── Citát ── -->
    <section class="py-section-gap bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="max-w-3xl mx-auto text-center">
          <span
            class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold"
            >Náš závazek</span
          >
          <blockquote
            class="text-headline-md font-serif italic text-primary-700 leading-snug"
          >
            „Důvěra není výsledek marketingu.<br />Je to výsledek každého
            rozhodnutí, které jste udělali správně."
          </blockquote>
          <p class="text-body-lg text-on-surface-variant mt-stack-md">
            Každý den pracujeme na tom, aby klienti, kteří nám svěřili péči o
            svůj majetek, nikdy neměli důvod litovat tohoto rozhodnutí.
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
