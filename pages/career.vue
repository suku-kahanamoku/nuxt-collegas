<script setup lang="ts">
definePageMeta({ title: "Kariéra | COLLEGA ENTERPRISE" });
useHead({
  title: "Kariéra | COLLEGA ENTERPRISE",
  meta: [
    {
      name: "description",
      content:
        "Přidejte se k týmu skupiny COLLEGA ENTERPRISE a.s. Zjistěte více o naší kultuře, vzdělávání a benefitech.",
    },
  ],
});

const pfpItems = [
  {
    icon: "school",
    title: "Přípravné kurzy",
    description: "Plně hrazené školení od zkušených lektorů.",
  },
  {
    icon: "workspace_premium",
    title: "Certifikát PFP",
    description: "Uznávaná certifikace na trhu finančního poradenství.",
  },
  {
    icon: "menu_book",
    title: "Studijní materiály",
    description: "Kompletní přístupy k výukovým zdrojům.",
  },
  {
    icon: "trending_up",
    title: "Kariérní postup",
    description: "Certifikace otevírá cestu k seniorním rolím.",
  },
];

const charityItems = [
  {
    icon: "favorite",
    title: "Nadace",
    description:
      "Dlouhodobě podporujeme vybrané nadace a charitativní organizace přispívající komunitě.",
  },
  {
    icon: "child_care",
    title: "Nedoklubko",
    description:
      "Podporujeme Nedoklubko – organizaci pomáhající předčasně narozeným dětem a jejich rodinám.",
  },
  {
    icon: "volunteer_activism",
    title: "Dobrovolnictví",
    description:
      "Naši kolegové se aktivně zapojují do dobrovolnických akcí a sbírek.",
  },
];

const mediaItems = [
  { icon: "videocam", label: "Vánoční večírek" },
  { icon: "sports_soccer", label: "Sportovní den" },
  { icon: "flight", label: "Team trip" },
];
</script>

<template>
  <div class="w-full">
    <!-- ── Intro ── -->
    <UiIntro
      eyebrow="Přidejte se k nám"
      title="Kariéra"
      description="Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou odpovědností a skutečným zájmem o klienta. Nabízíme prostředí, kde se rozvíjíte, ne jen prodáváte."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <!-- ── Firemní kultura ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Kdo jsme jako tým"
          title="Pracovat v COLLEGA"
          description="Nejsme korporát. Jsme tým lidí, kteří si věří, slaví úspěchy dohromady a vzájemně si pomáhají. Podívejte se, jak to u nás vypadá."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-sm">
          <UiMediaCard
            v-for="item in mediaItems"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
          />
        </div>
      </div>
    </section>

    <!-- ── PFP certifikace ── -->
    <section class="py-section-gap bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-xl items-center">
          <div>
            <span
              class="text-label-caps text-secondary-700 uppercase block mb-stack-sm tracking-widest font-semibold"
              >Vzdělávání</span
            >
            <h2
              class="text-headline-lg font-serif text-primary-900 mb-stack-md"
            >
              Certifikace PFP
            </h2>
            <div
              class="flex flex-col gap-stack-md text-body-lg text-on-surface-variant"
            >
              <p>
                Podporujeme všechny naše poradce v získání certifikace PFP
                (Personal Finance Planner) – nejvyššího standardu finančního
                plánování v ČR.
              </p>
              <p>
                Hradíme přípravné kurzy, studijní materiály a poplatky za
                zkoušky. Váš profesní růst je naší investicí.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-stack-sm">
            <UiFeatureCard
              v-for="item in pfpItems"
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Charita ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Společenská odpovědnost"
          title="Pomáháme tam, kde je to třeba"
          description="Jako tým věříme, že zodpovědnost přesahuje finanční poradenství. Podporujeme projekty, které dávají smysl."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiValueCard
            v-for="c in charityItems"
            :key="c.title"
            :icon="c.icon"
            :title="c.title"
            :description="c.description"
          />
        </div>
      </div>
    </section>

    <!-- ── Otevřené pozice ── -->
    <section
      id="otevrene-pozice"
      class="py-section-gap bg-surface-container-low"
    >
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader eyebrow="Volná místa" title="Otevřené pozice" />
        <div
          class="border border-outline-variant/30 bg-surface p-16 text-center"
        >
          <span
            class="material-symbols-outlined text-on-surface-variant/30"
            style="font-size: 3rem"
            >work_outline</span
          >
          <p class="text-body-lg text-on-surface-variant mt-stack-sm">
            Aktuálně nepřijímáme přihlášky na konkrétní pozice, ale vždy rádi
            uvítáme
            <strong>spontánní přihlášku</strong> od šikovného člověka.
          </p>
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-2 mt-stack-md bg-primary-900 text-on-primary px-6 py-stack-md text-label-caps font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Napsat nám
            <span
              class="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1"
              >arrow_forward</span
            >
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
