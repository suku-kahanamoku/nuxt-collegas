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
    name: "Člen AFAM ČR",
    abbr: "AFAM",
    year: "průběžně",
    to: "https://www.afamcr.cz/",
    img: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=400,height=400,fit=scale-down,quality=90,anim=true/by9itr17wbldjwhfjs1834be/o6v4q6sviylox2dd2y22i300/qp2LOfTFhpd0qHZoI09PI.png",
    alt: "AFAM ČR – Asociace finančních a majetkových poradců",
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

const imageCertifications = computed(() =>
  certifications.filter((cert) => !!cert.img),
);
</script>

<template>
  <section class="py-section-gap bg-surface-container-lowest">
    <UContainer>
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-stack-xl"
      >
        <div class="lg:col-span-8 space-y-section-gap">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
            <div class="order-2 md:order-1 space-y-stack-md">
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
            <div
              class="order-1 md:order-2 bg-surface-container-highest overflow-hidden aspect-4/5"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB3ex9wSUxLroSQvcTshXAvZ2w3G94V2d6wFRbOiptcLcz3J6QFD4QKJh0xcZRH1aH8_o1BtmYaa-hqBft9MNxAHDBS3ZWj5KSGCpeNNpteBpGNiczfb9lwRjBcZGZ6ZDANcCZGqGageYcw_526l3s5HoxiTRMOWSFNrlc_VRcY4qs4w_c3xG-3-O6d_V1cPPSmExzUPcf9AO8USYGNGPdx3erBbS8iK_bswez8QXKPnThvwwiEzrlRe8DlpA_xyXbkFbjDZUZeL8"
                alt="Certifikace"
                class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
            <div
              class="bg-surface-container-highest overflow-hidden aspect-4/5"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5N-971h-2cMzRDBs9ym4RemDHszAuUr22mg3Arp1DRL39QEZlfZ5mN82t3Bg0cZQ4npYmdvmzLVNTPrbaaM5Ft983hm9I1zb8Ms5046Cp6N8GSZHBAfC-AfBRm1RZZXnioJjubjrULdrgrEv9Qb54gW981NEKAj_yz4wHLzLZarPAk4sfDoUtwOgx_D7E06zWNkljByjwnvebCoF1dnBg0b7DZmXmTxQor-TFVhVnsv4IQAiIx-arr3BFCGVQWZDFf5r1rJnY1s"
                alt="Certifikace"
                class="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <div class="space-y-stack-md">
              <h2 class="text-headline-lg font-serif text-primary-800">
                Odbornost
              </h2>
              <ul class="flex flex-col gap-stack-sm">
                <li
                  v-for="cert in certifications"
                  :key="`list-b-${cert.name}`"
                  class="text-body-md text-on-surface-variant"
                >
                  {{ cert.abbr }}: {{ cert.name }}
                  <span v-if="cert.year">({{ cert.year }})</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <UiAside
          :menus="relatedLinks"
          :callout="{
            title: 'Nezávazná konzultace',
            description:
              'Rádi posoudíme vaši situaci a navrhneme vhodné řešení.',
            label: 'Nezávazná konzultace',
            to: '/contact',
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
