<script setup lang="ts">
import { computed } from "vue";
import usersData from "~/assets/data/users.json";

definePageMeta({ title: "Naši lidé | COLLEGAS" });
useHead({
  title: "Naši lidé | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Tým poradců a asistentů skupiny COLLEGAS a.s. – zkušení odborníci, kteří pečují o vaše finance a majetek.",
    },
  ],
});

const users = (Array.isArray(usersData) ? usersData : []) as any[];

function toCardProps(u: any) {
  return {
    name: u.name,
    role: u.role,
    bio: u.intro || u.about || "",
    photo: u.photo,
    email: u.email,
    phone: u.phone,
    website: `/our-people/${u.slug}`,
    websiteLabel: "Profil",
  };
}

const founders = computed(() =>
  users.filter((u) => u.group === "founders").map(toCardProps),
);
const seniorTeam = computed(() =>
  users.filter((u) => u.group === "senior").map(toCardProps),
);
const consultants = computed(() =>
  users.filter((u) => u.group === "consultants").map(toCardProps),
);
const juniors = computed(() =>
  users.filter((u) => u.group === "junior").map(toCardProps),
);
const backoffice = computed(() =>
  users.filter((u) => u.group === "backoffice").map(toCardProps),
);
</script>

<template>
  <div class="w-full">
    <!-- ── Intro ── -->
    <UiIntro bg-image="/img/other/wall.png">
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Kdo jsme</span
            >
          </template>
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-on-primary leading-tight"
            >
              Naši lidé
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Za každým řešením stojí konkrétní člověk. Tým poradců, specialistů a
          podpůrných rolí skupiny COLLEGA přistupuje ke každému klientovi
          individuálně – s odpovědností, diskrétností a důrazem na dlouhodobou
          spolupráci.
        </p>
      </template>
    </UiIntro>

    <!-- ── Zakladatelé ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Zakladatelé
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Lidé, kteří dali skupině COLLEGA její směr, hodnoty a dlouhodobý
            přístup ke klientské práci.
          </p>
        </div>
        <div
          class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-stack-md justify-center mx-auto"
        >
          <CustomTeamCard
            v-for="person in founders"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── Seniorní tým ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-low">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Seniorní tým
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Zkušení konzultanti a specialisté, kteří vedou klientské vztahy a
            pomáhají nastavovat komplexní řešení s dlouhodobou perspektivou.
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <CustomTeamCard
            v-for="person in seniorTeam"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── Konzultanti a specialisté ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Konzultanti a specialisté
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Lidé, kteří každý den pracují s klienty, rozvíjejí jejich finanční
            témata a pomáhají převádět strategii do konkrétních kroků.
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <CustomTeamCard
            v-for="person in consultants"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── Juniorní tým ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-low">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Juniorní tým
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Lidé, kteří každý den pracují s klienty, rozvíjejí jejich finanční
            témata a pomáhají převádět strategii do konkrétních kroků.
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <CustomTeamCard
            v-for="person in juniors"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── Backoffice ── -->
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-md md:text-headline-lg font-serif text-primary-800">
            Backoffice a podpora
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Profesionální interní tým, který drží administrativu, servis i
            klientskou zkušenost přesnou, rychlou a spolehlivou.
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md"
        >
          <CustomTeamCard
            v-for="person in backoffice"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── CTA ── -->
    <UiDarkBanner
      title="Chcete se přidat?"
      body="Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou odpovědností a skutečným zájmem o klienta."
    >
      <div class="flex justify-center">
        <UiButton
          to="/contact"
          variant="solid"
          class="group justify-center px-10 py-4 text-base bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors"
        >
          Napište nám
          <UIcon
            name="i-material-symbols-arrow-forward"
            class="size-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </UiButton>
      </div>
    </UiDarkBanner>
  </div>
</template>
