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
        "Tým poradců a asistentů skupiny COLLEGAS – zkušení odborníci, kteří pečují o vaše finance a majetek.",
    },
  ],
});

const users = (Array.isArray(usersData) ? usersData : []) as any[];

function toCardProps(u: any) {
  return {
    name: u.name,
    role: u.role,
    description: u.intro || u.about || "",
    photo: u.photo,
    email: u.email,
    phone: u.phone,
    website: `/our-people/${u.slug}`,
    websiteLabel: "Profil",
  };
}

const groupDefinitions = [
  {
    key: "founders",
    title: "Zakladatelé",
    description:
      "Lidé, kteří dali skupině COLLEGA její směr, hodnoty a dlouhodobý přístup ke klientské práci.",
    background: "bg-surface-container-lowest",
    gridClass: "lg:w-2/3 md:grid-cols-2",
  },
  {
    key: "senior",
    title: "Tým seniorních poradců",
    description:
      "Profesionální konzultanti, kteří vás osobně provázejí klíčovými rozhodnutími a pomáhají vám stavět bezpečná finanční řešení s dlouhodobým výhledem.",
    background: "bg-surface-container-low",
    gridClass: "md:grid-cols-2 lg:grid-cols-3",
  },
  {
    key: "consultants",
    title: "Konzultanti a specialisté",
    description:
      "Lidé, kteří každý den pracují s klienty, rozvíjejí jejich finanční témata a pomáhají převádět strategii do konkrétních kroků.",
    background: "bg-surface-container-lowest",
    gridClass: "md:grid-cols-2 lg:grid-cols-3",
  },
  {
    key: "junior",
    title: "Juniorní tým",
    description:
      "Lidé, kteří každý den pracují s klienty, rozvíjejí jejich finanční témata a pomáhají převádět strategii do konkrétních kroků.",
    background: "bg-surface-container-low",
    gridClass: "md:grid-cols-2 lg:grid-cols-3",
  },
  {
    key: "backoffice",
    title: "Backoffice a podpora",
    description:
      "Profesionální interní tým, který drží administrativu, servis i klientskou zkušenost přesnou, rychlou a spolehlivou.",
    background: "bg-surface-container-lowest",
    gridClass: "md:grid-cols-2 lg:grid-cols-3",
  },
] as const;

const teamGroups = computed(() =>
  groupDefinitions.map((group) => ({
    ...group,
    people: users.filter((user) => user.group === group.key).map(toCardProps),
  })),
);
</script>

<template>
  <div class="w-full">
    <UiPageIntro
      eyebrow="Kdo jsme"
      title="Naši lidé"
      description="Za každým řešením stojí konkrétní člověk. Tým poradců, specialistů a podpůrných rolí skupiny COLLEGAS přistupuje ke každému klientovi individuálně – s odpovědností, diskrétností a důrazem na dlouhodobou spolupráci."
      bg-image="/img/other/wall.png"
    />

    <section
      v-for="group in teamGroups"
      :key="group.key"
      :class="['py-stack-lg md:py-section-gap', group.background]"
    >
      <UContainer>
        <UiSectionHeading
          :title="group.title"
          :description="group.description"
          class="mb-stack-lg"
        />
        <div
          :class="[
            'grid grid-cols-1 gap-stack-md justify-center mx-auto',
            group.gridClass || 'md:grid-cols-2 lg:grid-cols-3',
          ]"
        >
          <CustomTeamCard
            v-for="person in group.people"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── CTA ── -->
    <CustomConsultationBanner
      title="Chcete se přidat?"
      body="Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou odpovědností a skutečným zájmem o klienta."
      primary-label="Napište nám"
    />
  </div>
</template>
