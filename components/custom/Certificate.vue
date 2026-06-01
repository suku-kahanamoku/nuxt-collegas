<script setup lang="ts">
const certifications = [
  {
    name: "CFP® – Certified Financial Planner",
    abbr: "CFP®",
    year: "2015",
    img: "https://www.cfp.net/assets/images/logo-cfp-board-black-white.svg",
    alt: "CFP® Certified Financial Planner",
  },
  {
    name: "EFA – European Financial Advisor",
    abbr: "EFA",
    year: "2018",
    img: "https://efpa.cz/static/img/10281/footer/EFPA_logo_paticka.png",
    alt: "EFPA ČR – European Financial Advisor",
  },
  {
    name: "Makléřská licence ČNB",
    abbr: "ČNB",
    year: "2012",
    img: "https://www.cnb.cz/export/system/modules/cz.nelasoft.opencms.cnb/resources/img/LOGO-2RC_RGB.svg",
    alt: "Česká národní banka",
  },
  {
    name: "Člen AFIZ",
    abbr: "AFIZ",
    year: "průběžně",
    img: "",
    alt: "AFIZ – Asociace finančních zprostředkovatelů a poradců",
  },
  {
    name: "Licence pojišťovacího zprostředkovatele",
    abbr: "ČNB",
    year: "2010",
    img: "https://www.cnb.cz/export/system/modules/cz.nelasoft.opencms.cnb/resources/img/LOGO-2RC_RGB.svg",
    alt: "Česká národní banka",
  },
  {
    name: "Člen AFAM ČR",
    abbr: "AFAM",
    year: "průběžně",
    img: "",
    alt: "AFAM ČR – Asociace finančních a majetkových poradců",
  },
];

const imgErrorByIndex = ref<boolean[]>(certifications.map(() => false));
function onImgErrorByIndex(i: number) {
  imgErrorByIndex.value[i] = true;
}
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-xl items-center">
        <!-- Left: title + list + CTA -->
        <div class="flex flex-col gap-stack-lg">
          <h2
            class="text-headline-lg font-serif text-primary-900 leading-tight"
          >
            Certifikovaná odbornost a nezávislost
          </h2>

          <ul class="flex flex-col gap-stack-sm">
            <li
              v-for="cert in certifications"
              :key="cert.name"
              class="flex items-center gap-3"
            >
              <span
                class="material-symbols-outlined text-secondary-700 text-base shrink-0"
                >verified</span
              >
              <span class="text-body-md text-primary-900">
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

        <!-- Right: certification badge images grid -->
        <div class="grid grid-cols-3 gap-4 items-stretch">
          <UiBaseCard
            v-for="(cert, i) in certifications"
            :key="cert.name"
          >
            <div class="flex items-center justify-center aspect-[3/2]">
              <img
                v-if="cert.img && !imgErrorByIndex[i]"
                :src="cert.img"
                :alt="cert.alt"
                class="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                @error="onImgErrorByIndex(i)"
              />
              <span
                v-else
                class="text-title-md font-serif font-bold text-primary-900 tracking-wide"
                >{{ cert.abbr }}</span
              >
            </div>
          </UiBaseCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
