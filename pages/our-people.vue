<script setup lang="ts">
definePageMeta({ title: "Naši lidé | COLLEGA ENTERPRISE" });
useHead({
  title: "Naši lidé | COLLEGA ENTERPRISE",
  meta: [{ name: "description", content: "Tým poradců a asistentů skupiny COLLEGA ENTERPRISE a.s. – zkušení odborníci, kteří pečují o vaše finance a majetek." }],
});

const advisors = [
  {
    name: "Jméno Příjmení",
    role: "Finanční poradce",
    email: "poradce@collega.cz",
    phone: "+420 000 000 000",
    website: "https://example.com",
    photo: null,
    bio: "Specializuje se na správu investičního majetku a finanční plánování pro soukromé klienty.",
  },
  {
    name: "Jméno Příjmení",
    role: "Poradce pro pojištění",
    email: "poradce2@collega.cz",
    phone: "+420 000 000 001",
    website: null,
    photo: null,
    bio: "Zkušenosti v oblasti zajištění rizik a analýzy pojistných potřeb klientů z řad podnikatelů.",
  },
  {
    name: "Jméno Příjmení",
    role: "Realitní poradce",
    email: "poradce3@collega.cz",
    phone: "+420 000 000 002",
    website: null,
    photo: null,
    bio: "Zaměřuje se na realitní investice, správu nemovitostí a developerské poradenství.",
  },
];

const assistants = [
  {
    name: "Jméno Příjmení",
    role: "Asistent poradce",
    email: "asistent@collega.cz",
    phone: "+420 000 000 003",
    website: null,
    photo: null,
    bio: "Zajišťuje administrativní podporu a koordinaci schůzek pro tým poradců.",
  },
  {
    name: "Jméno Příjmení",
    role: "Klientský servis",
    email: "servis@collega.cz",
    phone: "+420 000 000 004",
    website: null,
    photo: null,
    bio: "Stará se o každodenní komunikaci s klienty a správu dokumentace.",
  },
];
</script>

<template>
  <div class="w-full">

    <!-- ── Intro ── -->
    <UiIntro
      eyebrow="Kdo jsme"
      title="Naši lidé"
      description="Za každým řešením stojí konkrétní člověk. Tým poradců a asistentů skupiny COLLEGA přistupuje ke každému klientovi individuálně – s plnou odpovědností za svěřená rozhodnutí."
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVntdIC9G0Z1TSRxOgQATix4drSoAWBzH79eQZq_gfDem_bPLXUv9WdqaHI7GGPKkbjeAWvRdJZmJ3TOlx7MfsYdwNO3-mMULrYzC_PrHm89BqEMh94tit4qPvylW3ton35PCNuTBeX3sCKqFTdK4E9pTS6-D68KSSgO8igbGVUeAm0xUnfm5QgICzD204eGOF7XdP8QmJJY8A_6FSFQWIMDSk6ly68sQLcn9smfvbGCSnh4deEkVPaekvQoDBHf3kguHNvsXw3Q4"
    />

    <!-- ── Poradci ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Odbornost"
          title="Poradci"
          description="Naši poradci jsou držiteli příslušných licencí ČNB a pravidelně se vzdělávají, aby vám vždy mohli nabídnout řešení odpovídající aktuálním podmínkám."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          <CustomTeamCard v-for="p in advisors" :key="p.email" v-bind="p" />
        </div>
      </div>
    </section>

    <!-- ── Asistenti ── -->
    <section class="py-section-gap bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-gutter">
        <UiSectionHeader
          eyebrow="Podpora"
          title="Asistenti a servis"
          description="Profesionální zázemí, které zajišťuje, aby komunikace s vámi byla vždy rychlá, přesná a diskrétní."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          <CustomTeamCard v-for="p in assistants" :key="p.email" v-bind="p" />
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <UiCtaSection
      title="Chcete se přidat?"
      body="Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou odpovědností a skutečným zájmem o klienta."
      primary-label="Podívat se na kariéru"
      primary-to="/career"
      variant="dark"
    />

  </div>
</template>
