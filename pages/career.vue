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
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
    >
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Přidejte se k nám</span
            >
          </template>
          <template #title>
            <h1 class="text-display-xl font-serif text-on-primary leading-none">
              Kariéra
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou
          odpovědností a skutečným zájmem o klienta. Nabízíme prostředí, kde se
          rozvíjíte, ne jen prodáváte.
        </p>
      </template>
    </UiIntro>

    <!-- ── Firemní kultura ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-900">Pracovat v COLLEGA</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Nejsme korporát. Jsme tým lidí, kteří si věří, slaví úspěchy dohromady a vzájemně si pomáhají. Podívejte se, jak to u nás vypadá.</p>
        </div>
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
              class="text-label-caps text-secondary-fixed uppercase block mb-stack-sm tracking-widest font-semibold"
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
            <UiBaseCard v-for="item in pfpItems" :key="item.title">
              <template #header>
                <UiTitle size="sm">
                  <template #eyebrow>
                    <div class="shrink-0 flex items-start pt-0.5">
                      <span
                        class="material-symbols-outlined text-secondary-700"
                        style="font-size: 2rem"
                        >{{ item.icon }}</span
                      >
                    </div>
                  </template>
                  <template #title>
                    <h3
                      class="text-title-md font-serif text-primary-900 mb-stack-xs"
                    >
                      {{ item.title }}
                    </h3>
                  </template>
                </UiTitle>
              </template>
              <p class="text-body-md text-on-surface-variant">
                {{ item.description }}
              </p>
            </UiBaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Charita ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-900">Pomáháme tam, kde je to třeba</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Jako tým věříme, že zodpovědnost přesahuje finanční poradenství. Podporujeme projekty, které dávají smysl.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <UiBaseCard v-for="c in charityItems" :key="c.title">
            <template #header>
              <UiTitle size="sm">
                <template #eyebrow>
                  <span
                    class="material-symbols-outlined text-secondary-700"
                    style="font-size: 2rem"
                    >{{ c.icon }}</span
                  >
                </template>
                <template #title>
                  <h3 class="text-title-lg font-serif text-primary-900">
                    {{ c.title }}
                  </h3>
                </template>
              </UiTitle>
            </template>
            <p class="text-body-md text-on-surface-variant">
              {{ c.description }}
            </p>
          </UiBaseCard>
        </div>
      </div>
    </section>

    <!-- ── Otevřené pozice ── -->
    <section
      id="otevrene-pozice"
      class="py-section-gap bg-surface-container-low"
    >
      <div class="max-w-7xl mx-auto px-gutter">
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-900">Otevřené pozice</h2>
        </div>
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
          <UiButton
            to="/contact"
            color="primary"
            variant="solid"
            trailing-icon="i-material-symbols-arrow-forward"
            size="xl"
            class="mt-stack-md"
            :ui="{
              trailingIcon:
                'transition-transform duration-200 group-hover:translate-x-1 size-5',
            }"
          >
            Napsat nám
          </UiButton>
        </div>
      </div>
    </section>
  </div>
</template>
