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
    <section class="bg-primary-900 py-section-gap relative overflow-hidden">
      <UContainer
        class="mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center"
      >
        <div class="relative order-2 md:order-1">
          <div class="aspect-[4/5] bg-primary-container overflow-hidden">
            <img
              class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              data-alt="A professional portrait of a senior financial advisor in a dark, tailored charcoal suit, captured in a grand, oak-paneled library. The lighting is warm and cinematic, mimicking the soft glow of a desk lamp, casting gentle highlights on the subject's face. The mood is authoritative and trustworthy, reflecting a sense of legacy and quiet luxury in a dark forest green and gold-accented environment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUxJagcbV6rZEBpcKTuLhy-PpSJgHnunDgtRE0pUGLjcjSaOscifWfZmsS8p7Fec5eT6tCBinrhk1RbQSnaDJS9IXiBNbGnPQb_qCQW93T12RutSBm2wm--HdBEyY4Q1arVE_F7BjOIDg75FJVblUW3wouNOT_yDqQ4FXq1vpu5UOK8ql_22ULX7nk3u1EbKPpxgBOEHyYrqXyyzJ6Ultl7bmXjdoGKOsWHuWWwBXuaA4_GeE1JE7jicrk5euPw3VIJsAQdhkrWa4"
            />
          </div>
          <div
            class="absolute -bottom-8 -right-8 bg-secondary-fixed p-stack-md max-w-xs shadow-xl hidden lg:block"
          >
            <p
              class="text-on-secondary-fixed font-headline-md italic leading-tight"
            >
              "Integrity is the bedrock of every successful legacy."
            </p>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <span class="font-label-caps text-secondary-fixed block mb-stack-sm"
            >THE AURELIUS PROMISE</span
          >
          <h2
            class="font-headline-lg text-headline-lg text-on-primary mb-stack-md"
          >
            Why Excellence is Our Minimum Standard
          </h2>
          <div class="space-y-stack-md mb-stack-lg">
            <div class="flex gap-stack-md">
              <span class="text-secondary-fixed font-headline-md">01</span>
              <div>
                <h4 class="font-body-lg font-bold text-on-primary mb-1">
                  Uncompromising Privacy
                </h4>
                <p class="text-on-primary-container">
                  Total discretion is at the heart of our partnership,
                  protecting your interests and your identity.
                </p>
              </div>
            </div>
            <div class="flex gap-stack-md">
              <span class="text-secondary-fixed font-headline-md">02</span>
              <div>
                <h4 class="font-body-lg font-bold text-on-primary mb-1">
                  Global Market Insight
                </h4>
                <p class="text-on-primary-container">
                  Leveraging a proprietary network of analysts to identify
                  institutional-grade opportunities.
                </p>
              </div>
            </div>
            <div class="flex gap-stack-md">
              <span class="text-secondary-fixed font-headline-md">03</span>
              <div>
                <h4 class="font-body-lg font-bold text-on-primary mb-1">
                  Generational Continuity
                </h4>
                <p class="text-on-primary-container">
                  We focus on long-term stewardship, ensuring wealth passes
                  seamlessly to the next generation.
                </p>
              </div>
            </div>
          </div>
          <Button variant="soft">Our History</Button>
        </div>
      </UContainer>
    </section>

    <CustomSlogan&Stats />

    <section class="py-section-gap relative overflow-hidden">
      <UContainer
        class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-end"
      >
        <div class="lg:col-span-8">
          <span
            class="font-label-caps text-secondary-800 uppercase mb-stack-sm block"
            >Our Heritage</span
          >
          <h2
            class="font-display-xl text-display-xl text-primary-800 mb-stack-md"
          >
            A Legacy of Discrete Excellence
          </h2>
          <p
            class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            Founded on the principles of integrity and meticulous stewardship,
            Aurelius Private Wealth Management serves as the cornerstone for
            intergenerational prosperity. We translate complex financial
            landscapes into clear, actionable paths for the world's most
            discerning families.
          </p>
        </div>
        <div class="lg:col-span-4 flex justify-end">
          <div class="w-full aspect-[4/5] bg-surface-container overflow-hidden">
            <img
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-alt="A sophisticated architectural detail of a modern corporate headquarters in London. The image features clean lines of dark wood and brushed metal with soft, natural morning light filtering through large windows. The atmosphere is quiet, professional, and reflects a sense of enduring legacy and high-end financial stability using a palette of deep greens and neutral tones."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-section-gap bg-surface">
      <UContainer
        class="mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center"
      >
        <div class="relative">
          <img
            class="w-full aspect-square object-cover shadow-sm"
            data-alt="A high-end, close-up portrait of an experienced financial advisor in a tailored dark charcoal suit. He is looking off-camera with a thoughtful and confident expression. The background is a blurred, warm-toned private library with leather-bound books. The lighting is soft and directional, emphasizing textures and conveying deep trust and wisdom in a light-mode corporate setting."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsqrCbxLjupY1TswzG_UjcLT4wKDuirdPU7r3ElhKn2SkBwSBHEFFzSwf9cy7D_c-WPEHJfJJG_3_lvG_g4sS3Ab8y3EvUXvdc20wLP7emhzsK4c_wLnvtkGO4zLVVFKuAU9kmSxGnsuv51fZQeQxzpbkdVv2RkIB39NlYU0_ZPcIR9DASMnUbUbYrjB_MqqOO6Pmzi8RHa1lEfN-GWRg_HgncCVrTmLjE7xx2hDOfWfbewKqAPTadL-vp8J5AbuQNQ1eRP5_Jy48"
          />
          <div
            class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-900 p-stack-md hidden lg:flex flex-col justify-end text-on-primary"
          >
            <span class="font-display-xl text-display-xl leading-none"
              >25+</span
            >
            <span class="font-label-caps uppercase tracking-widest"
              >Years of Stewardship</span
            >
          </div>
        </div>
        <div class="space-y-stack-md">
          <h2 class="font-headline-lg text-headline-lg text-primary-800">
            Quiet Luxury in Private Banking
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Our journey began with a singular focus: to provide a sanctuary for
            wealth that transcends mere capital growth. At Aurelius, we believe
            that true wealth is measured by the freedom it affords and the
            legacy it leaves behind.
          </p>
          <p
            class="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary pl-stack-md italic"
          >
            "Financial management is not merely about numbers; it is about the
            preservation of values across generations."
          </p>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Each client relationship is managed with the same level of precision
            and exclusivity as the assets themselves. Our bespoke approach
            ensures that every strategy is as unique as the family it serves.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- ── Timeline ── -->
    <CustomTimeline />

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
