<script setup lang="ts">
const certifications = [
  {
    name: "CFP® – Certified Financial Planner",
    abbr: "CFP®",
    year: "2015",
    to: "https://www.cfp.net/",
    img: "https://www.cfp.net/assets/images/logo-cfp-board-black-white.svg",
    alt: "CFP® Certified Financial Planner",
  },
  {
    name: "EFA – European Financial Advisor",
    abbr: "EFA",
    year: "2018",
    to: "https://efpa.cz/",
    img: "https://efpa.cz/static/img/10281/footer/EFPA_logo_paticka.png",
    alt: "EFPA ČR – European Financial Advisor",
  },
  {
    name: "Makléřská licence ČNB",
    abbr: "ČNB",
    year: "2012",
    to: "https://www.cnb.cz/",
    img: "https://www.cnb.cz/export/system/modules/cz.nelasoft.opencms.cnb/resources/img/LOGO-2RC_RGB.svg",
    alt: "Česká národní banka",
  },
  {
    name: "Člen AFIZ",
    abbr: "AFIZ",
    year: "průběžně",
    to: "https://www.afiz.cz/",
    img: "https://www.registrporadcu.cz/wp-content/uploads/2014/04/logo_afiz.jpg",
    alt: "AFIZ – Asociace finančních zprostředkovatelů a poradců",
  },
  {
    name: "Člen AFP ČR",
    abbr: "AFP",
    year: "průběžně",
    to: "https://www.afpcr.cz/",
    img: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=400,height=400,fit=scale-down,quality=90,anim=true/by9itr17wbldjwhfjs1834be/o6v4q6sviylox2dd2y22i300/qp2LOfTFhpd0qHZoI09PI.png",
    alt: "AFP ČR – Asociace finančních a majetkových poradců",
  },
];

const seniority = [
  {
    icon: "i-material-symbols-library-books",
    text: "Více než 20 let aktivní praxe v oblasti finančního poradenství",
  },
  {
    icon: "i-material-symbols-group",
    text: "Zkušenosti s více než 20 000 klienty napříč celou ČR",
  },
  {
    icon: "i-material-symbols-handshake",
    text: "Dlouhodobá spolupráce s předními pojišťovnami a investičními společnostmi",
  },
  {
    icon: "i-material-symbols-school",
    text: "Pravidelné vzdělávání a sledování legislativních změn",
  },
  {
    icon: "i-material-symbols-workspace-premium",
    text: "Člen odborných asociací AFIZ a AFP ČR od jejich vzniku",
  },
];

const relatedLinks = computed(() =>
  certifications.map((cert) => ({
    label: cert.year ? `${cert.name} (${cert.year})` : cert.name,
    to: cert.to,
    target: "_blank",
    rel: "noopener noreferrer",
    img: cert.img,
    alt: cert.alt,
    abbr: cert.abbr,
  })),
);

const imgErrorByIndex = ref<boolean[]>(certifications.map(() => false));
function onImgErrorByIndex(i: number) {
  imgErrorByIndex.value[i] = true;
}
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
      >
        <div class="lg:col-span-8 space-y-section-gap">
          <UiImageText
            img-src="/img/other/building.png"
            img-alt="Certifikace"
            img-right
          >
            <div class="grid space-y-stack-md items-center from-left">
              <h2
                class="text-headline-lg font-serif text-primary-800 leading-tight"
              >
                Certifikáty
              </h2>
              <ul class="flex flex-col gap-stack-sm">
                <li
                  v-for="cert in certifications"
                  :key="`list-a-${cert.name}`"
                  class="flex items-center gap-3"
                >
                  <UIcon
                    name="i-material-symbols-verified"
                    class="text-secondary-700 text-base shrink-0"
                  />
                  <span class="text-body-md text-primary-800">
                    {{ cert.name }}
                    <span
                      v-if="cert.year"
                      class="text-on-surface-variant font-normal"
                      >&thinsp;({{ cert.year }})</span
                    >
                  </span>
                </li>
              </ul>
            </div>
          </UiImageText>

          <UiImageText img-src="/img/other/man.png" img-alt="Certifikace">
            <div class="grid space-y-stack-md items-center from-bottom">
              <h2 class="text-headline-lg font-serif text-primary-800">
                Zkušenost
              </h2>
              <ul class="flex flex-col gap-stack-sm">
                <li
                  v-for="item in seniority"
                  :key="item.text"
                  class="flex items-center gap-3 text-body-md text-on-surface-variant"
                >
                  <UIcon
                    :name="item.icon"
                    class="text-secondary-700 text-lg shrink-0"
                  />
                  {{ item.text }}
                </li>
              </ul>
            </div>
          </UiImageText>
        </div>

        <UiAside
          :menus="relatedLinks"
          :callout="{
            title: 'Nezávazná konzultace',
            description:
              'Rádi posoudíme vaši situaci a navrhneme vhodné řešení.',
            label: 'Nezávazná konzultace',
            to: '/contact?#contact-form',
          }"
        >
          <template #item="{ link, index }">
            <div class="h-10 w-full flex items-center">
              <img
                v-if="link.img && !imgErrorByIndex[index]"
                :src="link.img"
                :alt="link.alt || link.label"
                class="h-8 w-auto max-w-full object-contain grayscale saturate-0 contrast-125 brightness-75 opacity-90 transition-opacity group-hover:opacity-100"
                loading="lazy"
                @error="onImgErrorByIndex(index)"
              />
              <span v-else class="text-body-sm font-semibold">{{
                link.abbr || link.label
              }}</span>
            </div>
          </template>
        </UiAside>
      </div>
    </UContainer>
  </section>
</template>
