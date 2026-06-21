<script setup lang="ts">
definePageMeta({ title: "Naši lidé | COLLEGA ENTERPRISE" });
useHead({
  title: "Naši lidé | COLLEGA ENTERPRISE",
  meta: [
    {
      name: "description",
      content:
        "Tým poradců a asistentů skupiny COLLEGA ENTERPRISE a.s. – zkušení odborníci, kteří pečují o vaše finance a majetek.",
    },
  ],
});

interface TeamMember {
  name: string;
  role: string;
  website: string;
  websiteLabel: string;
  photo: string;
  bio: string;
}

function createMember(
  name: string,
  role: string,
  slug: string,
  photo: string,
  bio: string,
): TeamMember {
  return {
    name,
    role,
    website: `https://collegas.cz/team/${slug}.php`,
    websiteLabel: "Profil",
    photo,
    bio,
  };
}

const founders = [
  createMember(
    "Tomáš Kalous",
    "Zakladatel",
    "tomas-kalous",
    "https://collegas.cz/img/T_Kalous01.jpg",
    "Spoluzakládá směr skupiny COLLEGA a dlouhodobě se věnuje strategickému rozvoji klientských služeb.",
  ),
  createMember(
    "Marek Butula",
    "Zakladatel",
    "marek-butula",
    "https://collegas.cz/img/new_team/marek_butula.jpg",
    "Podílí se na budování značky a rozvoji poradenského přístupu postaveného na důvěře a dlouhodobých vztazích.",
  ),
];

const seniorTeam = [
  createMember(
    "Lukáš Formánek",
    "Senior finanční specialista",
    "lukas-formanek",
    "https://collegas.cz/img/new_team/formanek_new.jpg",
    "Věnuje se práci s klienty, kteří hledají promyšlené a dlouhodobě udržitelné finanční řešení.",
  ),
  createMember(
    "Filip Beneš",
    "Senior finanční konzultant",
    "filip-benes",
    "https://collegas.cz/img/F_Bene%C5%A102.jpg",
    "Specializuje se na konzultace, které propojují osobní cíle klienta s jasnou finanční strategií.",
  ),
  createMember(
    "Jan Radosta",
    "Specialista pro privátní klientelu",
    "jan-radosta",
    "https://collegas.cz/img/radosta-1.jpg",
    "Zaměřuje se na náročnější klientskou agendu a individuální práci s majetkem a dlouhodobým plánem.",
  ),
  createMember(
    "Eva Pánková",
    "Majetkový specialista",
    "eva-pankova",
    "https://collegas.cz/img/new_team/eva_pankova.jpg",
    "Pomáhá klientům řešit správu majetku v širších souvislostech a s důrazem na stabilitu a přehled.",
  ),
  createMember(
    "Iveta Butulová",
    "Senior finanční specialista",
    "iveta-butulova",
    "https://collegas.cz/img/new_team/iveta_butulova.jpg",
    "Přináší zkušený pohled na finanční řešení, která vyžadují citlivé nastavení i dlouhodobou kontinuitu.",
  ),
  createMember(
    "Josef Zídek",
    "Senior finanční konzultant",
    "josef-zidek",
    "https://collegas.cz/img/J_Zidek.jpg",
    "Věnuje se klientům, kteří chtějí mít své finance řízené systematicky, srozumitelně a odpovědně.",
  ),
  createMember(
    "David Strnad",
    "Senior finanční konzultant",
    "david-strnad",
    "https://collegas.cz/img/new_team/david_strnad.jpg",
    "Zaměřuje se na dlouhodobé vztahy s klienty a řešení, která obstojí i v čase a proměnlivých podmínkách.",
  ),
  createMember(
    "Igor Stránský",
    "Senior finanční konzultant",
    "igor-stransky",
    "https://collegas.cz/img/new_team/igor_stransky.jpg",
    "Klade důraz na individuální přístup a jasné nastavení priorit v osobních i rodinných financích.",
  ),
  createMember(
    "Lukáš Bajgar",
    "Senior finanční konzultant",
    "lukas-bajgar",
    "https://collegas.cz/img/new_team/lukas_bajgar.jpg",
    "Pomáhá klientům převádět složitější finanční rozhodnutí do srozumitelných a praktických kroků.",
  ),
];

const consultants = [
  createMember(
    "Tomáš Rozsypal",
    "Finanční konzultant",
    "tomas-rozsypal",
    "https://collegas.cz/img/T_Rozsypal.jpg",
    "Věnuje se klientům, kteří chtějí mít finance nastavené přehledně a v souladu se svými cíli.",
  ),
  createMember(
    "Lenka Ságlová",
    "Finanční specialista",
    "lenka-saglova",
    "https://collegas.cz/img/lenka_new.jpg",
    "Pomáhá klientům orientovat se ve finančních tématech s důrazem na praktičnost a klidné vedení spolupráce.",
  ),
  createMember(
    "Zuzana Čapková",
    "Finanční specialista",
    "zuzana-capkova",
    "https://collegas.cz/img/new_team/zuzana_capkova.jpg",
    "Součástí její práce je hledání řešení, která odpovídají konkrétní životní situaci každého klienta.",
  ),
  createMember(
    "Jakub Zemánek",
    "Junior finanční konzultant",
    "jakub-zemanek",
    "https://collegas.cz/img/new_team/jakub_zemanek.jpg",
    "Sbírá zkušenosti v klientské práci a podílí se na přípravě finančních řešení s důrazem na detail.",
  ),
  createMember(
    "Jakub Plachý",
    "Junior finanční konzultant",
    "jakub-plachy",
    "https://collegas.cz/img/new_team/jakub_plachy.jpg",
    "Zapojen je do každodenní podpory klientské agendy a postupně rozvíjí vlastní poradenskou praxi.",
  ),
  createMember(
    "Martin Martinčík",
    "Finanční konzultant",
    "martin-martincik",
    "https://collegas.cz/img/M_Martincik.jpg",
    "Pomáhá klientům nastavovat finance tak, aby byly funkční v běžném životě i dlouhodobém horizontu.",
  ),
  createMember(
    "Nicola Růsková",
    "Junior finanční konzultant",
    "nicola-ruskova",
    "https://collegas.cz/img/H_Nicola01.jpg",
    "Podílí se na péči o klienty a na přípravě podkladů pro finanční řešení přizpůsobená konkrétní situaci.",
  ),
  createMember(
    "Pavel Prudil",
    "Finanční konzultant",
    "pavel-prudil",
    "https://collegas.cz/img/P_Prudil01.jpg",
    "Věnuje se klientům, kteří hledají dlouhodobého partnera pro správu financí a odpovědné rozhodování.",
  ),
  createMember(
    "Nikola Nováková",
    "Finanční konzultant",
    "nikola-novakova",
    "https://collegas.cz/img/new_team/nikola_novakova.jpg",
    "Pomáhá hledat jasná a srozumitelná řešení pro klienty v různých fázích osobního i profesního života.",
  ),
  createMember(
    "Zuzana Rokošinyi",
    "Finanční konzultant",
    "zuzana-rokosinyi",
    "https://collegas.cz/img/new_team/zuzana_rosinyi.jpg",
    "Zaměřuje se na individuální poradenský přístup a systematickou práci s klientskými potřebami.",
  ),
  createMember(
    "Antonín Jež",
    "Finanční konzultant",
    "antonin-jez",
    "https://collegas.cz/img/new_team/antonin_jez.jpg",
    "Je součástí poradenského týmu a podílí se na řešeních, která propojují každodenní finance s dlouhodobými cíli.",
  ),
];

const backoffice = [
  createMember(
    "Hana Kurečková",
    "Finanční oddělení",
    "hana-kureckova",
    "https://collegas.cz/img/new_team/hana_kureckova.jpg",
    "Je součástí interního zázemí, které podporuje plynulý chod klientských i administrativních procesů.",
  ),
  createMember(
    "Lucie Bohatá",
    "Asistentka",
    "lucie-bohata",
    "https://collegas.cz/img/new_team/lucie_bohata.jpg",
    "Zajišťuje organizační a komunikační podporu, aby spolupráce s klienty probíhala hladce a bez zdržení.",
  ),
  createMember(
    "Anna Kupková",
    "Registrační oddělení",
    "anna-kupkova",
    "https://collegas.cz/img/new_team/anna_kupkova.jpg",
    "Stará se o správnost a návaznost interních procesů spojených s registrací a evidencí klientské agendy.",
  ),
  createMember(
    "Nikola Bednaříková",
    "Zpracování smluv",
    "nikola-bednarikova",
    "https://collegas.cz/img/new_team/nikola_bednarikova.jpg",
    "Věnuje se přípravě a administraci smluvní dokumentace s důrazem na přesnost a přehlednost.",
  ),
  createMember(
    "Nikola Šmídová",
    "Manažer backoffice",
    "nikola-smidova",
    "https://collegas.cz/img/new_team/nikola_smidova.jpg",
    "Koordinuje backoffice podporu a pomáhá nastavovat procesy, které drží služby pro klienty v pohybu.",
  ),
  createMember(
    "Hanka Hanke",
    "Provizní oddělení",
    "hanka-hanke",
    "https://collegas.cz/img/new_team/hanka_hanke.jpg",
    "Zajišťuje agendu provizního oddělení a administrativní návaznost klíčových interních činností.",
  ),
  createMember(
    "Petra Hrachovinová",
    "Asistentka",
    "petra-hrachovinova",
    "https://collegas.cz/img/new_team/petra_harichova.jpg",
    "Podporuje každodenní chod týmu a dbá na to, aby komunikace i administrativa fungovaly bez zbytečných prodlev.",
  ),
  createMember(
    "Jana Grebenščiková",
    "Asistentka",
    "jana-grebenscikova",
    "https://collegas.cz/img/new_team/jana_gregen%C5%A1%C4%8Dikov%C3%A1.jpg",
    "Je součástí servisního zázemí, které pomáhá držet klientskou zkušenost přesnou, rychlou a profesionální.",
  ),
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
              >Kdo jsme</span
            >
          </template>
          <template #title>
            <h1 class="text-display-xl font-serif text-on-primary leading-none">
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
    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-800">Zakladatelé</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Lidé, kteří dali skupině COLLEGA její směr, hodnoty a dlouhodobý přístup ke klientské práci.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <CustomTeamCard
            v-for="person in founders"
            :key="person.name"
            v-bind="person"
          />
        </div>
      </UContainer>
    </section>

    <!-- ── Seniorní tým ── -->
    <section class="py-section-gap bg-surface-container-low">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-800">Seniorní tým</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Zkušení konzultanti a specialisté, kteří vedou klientské vztahy a pomáhají nastavovat komplexní řešení s dlouhodobou perspektivou.</p>
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
    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-800">Konzultanti a specialisté</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Lidé, kteří každý den pracují s klienty, rozvíjejí jejich finanční témata a pomáhají převádět strategii do konkrétních kroků.</p>
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

    <!-- ── Backoffice ── -->
    <section class="py-section-gap bg-surface-container-low">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <h2 class="text-headline-lg font-serif text-primary-800">Backoffice a podpora</h2>
          <p class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto">Profesionální interní tým, který drží administrativu, servis i klientskou zkušenost přesnou, rychlou a spolehlivou.</p>
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
    <UiCtaSection
      title="Chcete se přidat?"
      body="Hledáme lidi, kteří chtějí dělat finanční poradenství s plnou odpovědností a skutečným zájmem o klienta."
      primary-label="Podívat se na kariéru"
      primary-to="/career"
      variant="dark"
    />
  </div>
</template>
