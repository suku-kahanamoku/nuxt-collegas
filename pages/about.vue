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
    icon: "i-material-symbols-search",
    title: "Nejprve pochopit",
    description:
      "Než cokoli navrhneme, nejprve důkladně poznáme vás – vaše cíle, hodnoty, závazky a rizika. Dobrý plán začíná hlubokou analýzou, ne produktovým katalogem.",
  },
  {
    icon: "i-material-symbols-handshake",
    title: "Mluvit otevřeně",
    description:
      "Říkáme věci, jak jsou. Upozorníme vás na rizika, která jiní zamlčí. Naše přidaná hodnota není v pěkných tabulkách – je v upřímném rozhovoru.",
  },
  {
    icon: "i-material-symbols-settings",
    title: "Řešení na míru",
    description:
      "Každý klient je jiný. Nepracujeme s šablonami – navrhujeme strategie, které přesně odpovídají vaší situaci a časovému horizontu.",
  },
  {
    icon: "i-material-symbols-update",
    title: "Průběžná péče",
    description:
      "Spolupráce nekončí podpisem smlouvy. Jsme k dispozici, sledujeme vývoj situace a proaktivně reagujeme na změny – ve vašem životě i na trzích.",
  },
];
</script>

<template>
  <div class="w-full">
    <!-- ── Intro ── -->
    <section
      class="bg-primary-900 py-section-gap relative min-h-screen overflow-hidden"
    >
      <UContainer
        class="mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center"
      >
        <div class="relative order-2 lg:order-1">
          <div class="aspect-4/5 bg-primary-container overflow-hidden">
            <NuxtImg
              class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              data-alt="A professional portrait of a senior financial advisor in a dark, tailored charcoal suit, captured in a grand, oak-paneled library. The lighting is warm and cinematic, mimicking the soft glow of a desk lamp, casting gentle highlights on the subject's face. The mood is authoritative and trustworthy, reflecting a sense of legacy and quiet luxury in a dark forest green and gold-accented environment."
              alt="Zakladatelé COLLEGA ENTERPRISE"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUxJagcbV6rZEBpcKTuLhy-PpSJgHnunDgtRE0pUGLjcjSaOscifWfZmsS8p7Fec5eT6tCBinrhk1RbQSnaDJS9IXiBNbGnPQb_qCQW93T12RutSBm2wm--HdBEyY4Q1arVE_F7BjOIDg75FJVblUW3wouNOT_yDqQ4FXq1vpu5UOK8ql_22ULX7nk3u1EbKPpxgBOEHyYrqXyyzJ6Ultl7bmXjdoGKOsWHuWWwBXuaA4_GeE1JE7jicrk5euPw3VIJsAQdhkrWa4"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:50vw xl:50vw"
            />
          </div>
          <div
            class="absolute -bottom-8 -right-8 bg-secondary-fixed p-stack-md max-w-xs shadow-xl hidden lg:block from-bottom"
          >
            <p
              class="text-on-secondary-fixed font-headline-md italic leading-tight"
            >
              „Nechtěli jsme jen plnit plán. Chtěli jsme nést odpovědnost."
            </p>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <span
            class="font-label-caps text-secondary-fixed uppercase tracking-widest block mb-4"
            >SLOVO ZAKLADATELŮ</span
          >
          <h1 class="sr-only">O nás</h1>
          <h2 class="text-headline-lg font-serif text-on-primary mb-stack-md">
            Všechno začalo jednoduchou myšlenkou dvou přátel
          </h2>
          <div class="space-y-stack-md mb-stack-lg">
            <div
              v-for="(val, i) in values"
              :key="val.title"
              class="flex gap-stack-md"
            >
              <span class="text-secondary-fixed font-headline-md shrink-0">{{
                String(i + 1).padStart(2, "0")
              }}</span>
              <div>
                <h4 class="font-body-lg font-bold text-on-primary mb-1">
                  {{ val.title }}
                </h4>
                <p class="text-on-primary-container">
                  {{ val.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <CustomSlogan&Stats />

    <section class="py-section-gap relative overflow-hidden">
      <UContainer
        class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center"
      >
        <div class="lg:col-span-8 from-left">
          <span
            class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
            >Co je pro nás podstatné</span
          >
          <h2 class="text-headline-lg font-serif text-primary-800 mb-stack-md">
            Každý klient má jinou výchozí situaci
          </h2>
          <p
            class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            Každý klient má jinou výchozí situaci, jiné cíle i jiné rizikové
            preference. Proto pracujeme napříč obory – financování, pojištění,
            investice i ochrana příjmů – a řešení vždy koncipujeme jako
            provázaný celek. Zaměřujeme se nejen na aktuální potřeby, ale
            především na dlouhodobou stabilitu a růst majetku. Finanční
            rozhodnutí posuzujeme v širším kontextu – s ohledem na budoucí
            vývoj, rodinnou situaci i makroekonomické vlivy.
          </p>
        </div>
        <div class="lg:col-span-4 flex justify-end">
          <div class="w-full aspect-4/5 bg-surface-container overflow-hidden">
            <NuxtImg
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-alt="A sophisticated architectural detail of a modern corporate headquarters in London. The image features clean lines of dark wood and brushed metal with soft, natural morning light filtering through large windows. The atmosphere is quiet, professional, and reflects a sense of enduring legacy and high-end financial stability using a palette of deep greens and neutral tones."
              alt="Sídlo a zázemí skupiny COLLEGA"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:33vw xl:33vw"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <CustomUserPic&desc
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuDsqrCbxLjupY1TswzG_UjcLT4wKDuirdPU7r3ElhKn2SkBwSBHEFFzSwf9cy7D_c-WPEHJfJJG_3_lvG_g4sS3Ab8y3EvUXvdc20wLP7emhzsK4c_wLnvtkGO4zLVVFKuAU9kmSxGnsuv51fZQeQxzpbkdVv2RkIB39NlYU0_ZPcIR9DASMnUbUbYrjB_MqqOO6Pmzi8RHa1lEfN-GWRg_HgncCVrTmLjE7xx2hDOfWfbewKqAPTadL-vp8J5AbuQNQ1eRP5_Jy48"
      img-class="shadow-sm"
    >
      <template #overlay>
        <span class="font-display-xl text-display-xl leading-none">20+</span>
        <span class="font-label-caps uppercase tracking-widest"
          >Let v oboru</span
        >
      </template>

      <div class="space-y-stack-md from-right">
        <span
          class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
          >Naše zásady</span
        >
        <h2 class="text-headline-lg font-serif text-primary-800">
          Naše principy
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Základem je důkladná analýza a otevřená komunikace. Nejprve definujeme
          vaše cíle, časový horizont a toleranci k riziku. Teprve poté
          navrhujeme konkrétní strukturu řešení.
        </p>
        <p
          class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
        >
          „Nepracujeme s iluzí bezrizikového výnosu. Každé rozhodnutí má své
          scénáře – pozitivní i negativní. Naší rolí je tato rizika
          transparentně pojmenovat, kvantifikovat a řídit."
        </p>
      </div>
    </CustomUserPic&desc>

    <section
      class="py-section-gap bg-primary-900 text-on-primary overflow-hidden"
    >
      <UContainer class="mx-auto px-gutter">
        <div class="text-center mb-stack-xl">
          <span
            class="font-label-caps text-secondary-fixed uppercase tracking-widest block mb-4"
            >Jak pracujeme</span
          >
          <h2 class="text-headline-lg font-serif text-on-primary">
            Naše principy spolupráce
          </h2>
          <div class="w-12 h-px bg-secondary-fixed/50 mx-auto mt-stack-md" />
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-lg"
        >
          <UiBaseCard
            v-for="principle in principles"
            :key="principle.title"
            :highlight="true"
            class="border border-primary-container"
          >
            <template #header>
              <UIcon
                :name="principle.icon"
                class="text-secondary-fixed size-10 mb-stack-md block"
              />
              <h3 class="font-headline-md text-headline-md mb-stack-sm">
                {{ principle.title }}
              </h3>
            </template>
            <p
              class="font-body-md text-on-primary-container group-hover:text-on-primary transition-colors"
            >
              {{ principle.description }}
            </p>
          </UiBaseCard>
        </div>
      </UContainer>
    </section>

    <!-- ── Timeline ── -->
    <CustomTimeline />

    <!-- ── Skupinové foto ── -->
    <section class="py-section-gap bg-surface-container-lowest">
      <UContainer>
        <div class="text-center mb-stack-lg">
          <span
            class="font-label-caps text-secondary-700 uppercase tracking-widest block mb-4"
            >Náš tým</span
          >
          <h2 class="text-headline-lg font-serif text-primary-800">
            Lidé, kteří stojí za COLLEGA
          </h2>
          <p
            class="text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl mx-auto"
          >
            Tým odborníků, kteří sdílejí společnou filozofii – pracovat poctivě,
            mluvit otevřeně a stavět na dlouhodobých vztazích.
          </p>
          <div class="w-12 h-px bg-secondary-700 mx-auto mt-stack-md" />
        </div>

        <div class="w-full aspect-21/9 bg-surface-container overflow-hidden">
          <NuxtImg
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
            alt="Tým Collegas – skupinové foto"
            class="w-full h-full object-cover object-top"
            format="webp"
            loading="lazy"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw"
          />
        </div>

        <div class="text-center mt-stack-lg">
          <NuxtLink
            to="/our-people"
            class="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary-700 hover:text-secondary-800 transition-colors"
          >
            Poznat celý tým
            <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- ── CTA ── -->
    <UiDarkBanner
      title="Začněme nezávaznou konzultací"
      body="Zjistěte, jak vám může nezávislé poradenství skupiny COLLEGA pomoci dosáhnout vašich cílů. Bez závazků, bez poplatků za první schůzku."
    >
      <div class="flex flex-col sm:flex-row justify-center gap-stack-md">
        <UiButton
          to="/contact"
          variant="solid"
          class="group justify-center px-10 py-4 text-base bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors"
        >
          Kontaktovat nás
          <UIcon
            name="i-material-symbols-arrow-forward"
            class="size-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </UiButton>
        <UiButton
          to="/contact"
          variant="outline"
          class="justify-center px-10 py-4 text-base border-on-primary text-on-primary hover:bg-on-primary/10"
        >
          Naše pobočky
        </UiButton>
      </div>
    </UiDarkBanner>
  </div>
</template>
