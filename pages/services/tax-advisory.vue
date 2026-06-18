<script setup lang="ts">
definePageMeta({ title: "Daňové poradenství | Finanční poradenství" });
useHead({
  title: "Daňové poradenství | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Daně v širším kontextu – příjmy, podnikání, investice i majetek jako jeden celek. Přestaňte platit víc, než musíte.",
    },
  ],
});

const relatedLinks = [
  { label: "Zajištění rizik", to: "/services/risk-management" },
  { label: "Právní poradenství", to: "/services/legal-advisory" },
  {
    label: "Péče o investiční majetek",
    to: "/services/investment-asset-management",
  },
  { label: "Realitní služby", to: "/services/real-estate" },
];

const topics = [
  {
    icon: "receipt_long",
    title: "Daňová optimalizace",
    description:
      "Nastavení příjmů, majetku a podnikání tak, aby vaše daňová zátěž odpovídala realitě a ne zbytečné neefektivitě.",
  },
  {
    icon: "apartment",
    title: "Daně z nemovitostí",
    description:
      "Poradenství při nákupu, prodeji, držbě i pronájmu nemovitostí včetně dopadů do celkové finanční strategie.",
  },
  {
    icon: "trending_up",
    title: "Investice a výnosy",
    description:
      "Vyhodnocení daňových dopadů investic, kapitálových příjmů i dlouhodobého budování majetku v širších souvislostech.",
  },
  {
    icon: "business_center",
    title: "Podnikání a struktura",
    description:
      "Pomoc s nastavením podnikatelské a majetkové struktury tak, aby dávala smysl provozně, právně i daňově.",
  },
];
</script>

<template>
  <div class="w-full">
    <UiIntro
      bg-image="https://lh3.googleusercontent.com/aida-public/AB6AXuCDseSOT3mOT4qS4gX__-9DxF7GHt1hEjDWzMdt0PoEgPcgWGWwWgeXvRe4xE3ur2kX7fccXirstK97YhT84Lmg-PX7bVTUFLV9vEHmHZkxZ7VFYKMnf_3Ww8EfIOndCK4UZNIHn5LBH2KGUhoN4WftE31YSXfygb8472kXzEwb0yLzvUxH1JhuPiAFYD9ULPiXQ8XuVZl5xqk09zpPgrmzrFkWWTrT68lMOVOEiTv-xT7mT9GA7dqjX2h7EaSy0sUXIJZJGykzwWQ"
    >
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Finanční poradenství</span
            >
          </template>
          <template #title>
            <h1 class="text-display-xl font-serif text-on-primary leading-none">
              Daňové poradenství
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-2xl mt-stack-md opacity-90"
        >
          Daňové poradenství poskytujeme s ohledem na vaše podnikání i osobní
        </p>
      </template>
    </UiIntro>

    <section class="bg-surface-container-low py-section-gap">
      <UContainer>
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
        >
          <div class="lg:col-span-8 space-y-stack-lg">
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start"
            >
              <div class="order-2 md:order-1 space-y-stack-lg">
                <p class="text-body-md text-on-surface-variant">
                  Díváme se na vaše daně v souvislostech, ne izolovaně. Příjmy,
                  podnikání, investice i majetek tvoří jeden celek – a právě v
                  tom celku často vznikají příležitosti, které běžně zůstávají
                  nevyužité. Ukážeme vám, kde dává smysl upravit strukturu, co
                  využít a co naopak nedělat, abyste se vyhnuli zbytečným
                  nákladům i rizikům. Nehledáme kličky, hledáme logiku, která
                  funguje dlouhodobě.
                </p>
                <p class="text-body-md text-on-surface-variant">
                  Výsledkem není jen nižší daňová zátěž, ale hlavně klid. Víte,
                  že máte věci nastavené správně, že neplatíte víc, než musíte,
                  a že vás nic nepřekvapí ve chvíli, kdy to nejméně čekáte.
                </p>
                <UiButton
                  to="/contact"
                  variant="link"
                  color="secondary"
                  trailing-icon="i-material-symbols-arrow-forward"
                  class="!p-0"
                  :ui="{
                    trailingIcon:
                      'transition-transform duration-200 group-hover:translate-x-1',
                  }"
                >
                  Ozvěte se a přestaňte platit „daň z neznalosti“
                </UiButton>
              </div>
              <div
                class="order-1 md:order-2 bg-surface-container-highest overflow-hidden"
                style="aspect-ratio: 4/5"
              >
                <img
                  class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  alt="Finanční poradce při konzultaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-stack-md"
            >
              <UiBaseCard v-for="topic in topics" :key="topic.title">
                <template #header>
                  <UiTitle size="sm">
                    <template #eyebrow>
                      <span
                        class="material-symbols-outlined text-secondary-700"
                        style="font-size: 2rem"
                        >{{ topic.icon }}</span
                      >
                    </template>
                    <template #title>
                      <h3 class="text-title-lg font-serif text-primary-800">
                        {{ topic.title }}
                      </h3>
                    </template>
                  </UiTitle>
                </template>
                <p class="text-body-md text-on-surface-variant">
                  {{ topic.description }}
                </p>
              </UiBaseCard>
            </div>
          </div>
          <UiAside
            title="Naše služby"
            :menus="relatedLinks"
            :callout="{
              title: 'Platíte víc, než musíte?',
              description:
                'Nechte nás zkontrolovat vaši daňovou situaci a najít legální možnosti úspor.',
              label: 'Sjednat konzultaci',
              to: '/contact',
            }"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
