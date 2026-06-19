<script setup lang="ts">
definePageMeta({ title: "Kontakt | Finanční poradenství" });
useHead({
  title: "Kontakt | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně najdeme ten správný první krok k Vaší finanční stabilitě.",
    },
  ],
});

const interestOptions = [
  "Finanční audit",
  "Finanční plán",
  "Péče o investiční majetek",
  "Zajištění rizik",
  "Daňové poradenství",
  "Právní poradenství",
  "Odškodnění",
  "Jiné",
];

const portfolioOptions = ["5–10 mil. Kč", "10–50 mil. Kč", "50 mil. Kč a více"];

const form = reactive({
  name: "",
  email: "",
  interest: interestOptions[0],
  portfolio: portfolioOptions[0],
  message: "",
});

function handleSubmit() {
  // TODO: integrate with backend
  alert("Děkujeme za zprávu. Ozveme se vám co nejdříve.");
}
</script>

<template>
  <div class="w-full">
    <!-- ── Hero ── -->
    <UiIntro variant="light" :ui="{ bg: false }">
      <template #header>
        <UiTitle eyebrow="Kontakt" size="md">
          <template #title>
            <h1
              class="text-display-xl font-serif text-primary-800 leading-none"
            >
              Spojte se s námi
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p>
          Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně
          najdeme ten správný první krok.
        </p>
      </template>
    </UiIntro>

    <!-- ── Dvousloupcový obsah ── -->
    <section
      class="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-0 mb-section-gap"
    >
      <!-- Levá strana: info + mapa -->
      <div
        class="bg-surface-container-lowest p-stack-lg lg:p-16 border border-outline-variant/30"
      >
        <div class="space-y-stack-lg mb-stack-lg">
          <div>
            <span
              class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
            >
              Identifikace společnosti
            </span>
            <h2
              class="text-headline-md font-serif text-primary-800 mb-stack-xs"
            >
              Finanční poradenství
            </h2>
            <dl class="space-y-stack-sm">
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  IČO
                </dt>
                <dd class="text-body-md text-on-surface">022 62 975</dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  Spisová značka
                </dt>
                <dd class="text-body-md text-on-surface-variant">
                  C 80725 vedená u Krajského soudu v Brně
                </dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt
                  class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
                >
                  Sídlo
                </dt>
                <dd class="text-body-md text-on-surface-variant">
                  Pražákova 1008/69, Brno-město, 639 00 Brno
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <span
              class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
              >Provozovny</span
            >
            <ul class="space-y-stack-sm">
              <li
                v-for="office in [
                  {
                    name: 'Centrála',
                    address:
                      'AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno',
                  },
                  {
                    name: 'Kancelář Kroměříž',
                    address: 'Tovačovského 2784/24, Kroměříž',
                  },
                  {
                    name: 'Kancelář Břeclav',
                    address: 'nám. T. G. Masaryka 302/8, Břeclav',
                  },
                ]"
                :key="office.name"
                class="flex gap-3 items-start"
              >
                <UIcon
                  name="i-material-symbols-location-on"
                  class="text-secondary-800 text-base mt-0.5 shrink-0"
                />
                <div>
                  <p class="text-body-md font-semibold text-on-surface">
                    {{ office.name }}
                  </p>
                  <p class="text-body-md text-on-surface-variant">
                    {{ office.address }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="relative w-full aspect-video lg:aspect-4/3 overflow-hidden rounded-sm bg-surface-container shadow-sm border border-outline-variant/20"
        >
          <img
            class="w-full h-full object-cover map-container"
            alt="Mapa lokace kanceláře – AZ Tower Brno"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzq1xi-LrxBGgAOlUUWsEFi_-Va0u2-g8Pg117jQnZrBQB0-RGR9r7RkieGawy1vegyxxea0UAPVymcqUUndqydpyFhVU2iJ0-WlFscTvipBVNiVcTjo4-1oRxwh-Ps1l_AwnUrVTAB5jH6RMQqY2DZFLl4li3SQIEWWGzvyGjb5cXjXl9h8LYlmjAAcCxNnqGBKkfot4xShX2-wYEhnQd1ldyYJL-495Bl6OlF1JKhJNcGh1Wxu3lfRtzsITdijoIm8aQjWKbGyQ"
          />
          <div
            class="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              class="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
            >
              <UIcon
                name="i-material-symbols-location-on"
                class="text-white text-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pravá strana: formulář -->
      <div
        class="bg-primary-900 p-stack-lg lg:p-16 flex flex-col justify-center"
      >
        <div class="mb-stack-lg">
          <span
            class="text-label-caps text-secondary-fixed block mb-stack-sm uppercase tracking-widest font-semibold"
          >
            Sjednejte konzultaci
          </span>
          <h2 class="text-headline-md font-serif text-on-primary">
            Nezávazná konzultace zdarma
          </h2>
          <p class="text-body-md text-on-primary-container mt-stack-xs">
            Vyplňte formulář a my se vám ozveme pro domluvení termínu osobního
            setkání.
          </p>
        </div>

        <form class="space-y-stack-md" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Jméno a příjmení
              </label>
              <input
                v-model="form.name"
                type="text"
                name="name"
                required
                placeholder="Jan Novák"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline"
              />
            </div>
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                E-mailová adresa
              </label>
              <input
                v-model="form.email"
                type="email"
                name="email"
                required
                placeholder="jan.novak@email.cz"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Oblast zájmu
              </label>
              <select
                v-model="form.interest"
                name="interest"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              >
                <option
                  v-for="opt in interestOptions"
                  :key="opt"
                  class="bg-primary-900"
                >
                  {{ opt }}
                </option>
              </select>
            </div>
            <div>
              <label
                class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
              >
                Velikost portfolia
              </label>
              <select
                v-model="form.portfolio"
                name="portfolio"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              >
                <option
                  v-for="opt in portfolioOptions"
                  :key="opt"
                  class="bg-primary-900"
                >
                  {{ opt }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
            >
              Popis situace
            </label>
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Stručně popište, s čím Vám můžeme pomoci..."
              class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline resize-none"
            ></textarea>
          </div>

          <div class="pt-stack-md">
            <UiButton
              type="submit"
              color="secondary"
              variant="solid"
              trailing-icon="i-material-symbols-arrow-forward"
              size="xl"
              class="w-full md:w-auto justify-center px-10 bg-secondary-fixed! text-primary-800! hover:bg-secondary-fixed/80! transition-colors"
              :ui="{
                trailingIcon:
                  'transition-transform duration-200 group-hover:translate-x-1 size-5',
              }"
            >
              Odeslat poptávku
            </UiButton>
          </div>

          <p
            class="text-label-caps text-on-primary-container mt-stack-md opacity-60 tracking-widest"
          >
            * Veškerá komunikace je přísně důvěrná a podléhá zásadám ochrany
            osobních údajů.
          </p>
        </form>
      </div>
    </section>

    <section class="bg-surface-container-low py-section-gap">
      <UContainer class="mx-auto px-gutter">
        <h2
          class="font-display-xl text-display-xl text-primary-800 mb-stack-lg text-center"
        >
          Naše mezinárodní pobočky
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <!-- London Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="London Headquarters"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrrEjX17PokdjJrf6HsrA6COb-8STCNIO4OdG4z-n4V9uIixRocQoBdXQnO25rPkgB-mQf3DEwcP6Kr2NmPZSHsiZtjXVTY80Bl5tWl_46bsw8Pr7UGnlfOIN1a5AMt5HQleVnPG5SsnxFGS4HLhFmV4-Qr6wxV182yqPdQFHW3VUqmTfyrkiQhuWJYWUlGnNrN1QULuOmCxq7N5aQ3EUb_Xcq4WwVMtnEhJJCU2F_OHIQznpyUiP6_D9dMpDVIuX2aOPY-DFG4Q"
              />
            </div>
            <div class="p-stack-md flex-grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                London Headquarters
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                48 Berkeley Square, Mayfair, London, W1J 5AX
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Pobočka se nachází v srdci Mayfair. Nejbližší stanice metra je
                Green Park (Jubilee, Piccadilly a Victoria lines). Parkování je
                možné v podzemních garážích na Berkeley Square.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Marcus Aurelius Thorne"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgGsWlwCZT4mXgsytCfRBV6_0bC-rRRDp80GgGQaxYsO8mepaykrowL8W_UTuK2iqnDtCNmOlCb7nAXbc6X8ynNMHevwTJ0mH-dOMe5lsRIvpfXmkQjiRrg0o2Yw7EsYx1XwaBaHN-aPc47nJLYaTFEEAjgwJ2kJ1feFkwAH6rLZFrYhpDYL7SQ3prUsk1Kv-UTR59yMwAah6Fq9jFHtvZeIR8i7jQ8_dWaq6JQdOO6S-LFOGDq2tfuXJ8wp3Z-mQ-k5N4kksyrio"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Medailonek vedoucího</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Marcus Aurelius Thorne</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Zürich Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="Zürich Office"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPXXC5L0SKXfkHzdnWLnThxCzqAZcZPnriyWhx2yamt5PWeQT2m9NxTqM756A2lnnQFUY6AvfAK_zO9PlTkGjPZ-PyOqXzBNDJQ7dO6unN-OVJaVxcTApupoBJizqCgiGCF9dREvyaDuLDfFclCqijTYqBuQOH6ETpHc3sDJbltRVEhwVO0biikQQLodClSlQb2hcH_1ofQYJs90aspScpqQGOZ46kfkZJ8pE69mqTzjgvKgJhwKE_yQW0WYG1TlT9WvBxStPMFp4"
              />
            </div>
            <div class="p-stack-md flex-grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                Zürich Office
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                Talstrasse 1, 8001 Zürich, Switzerland
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Pobočka se nachází v blízkosti Bürkliplatz. Z hlavního nádraží
                tramvají č. 11. Parkování je k dispozici přímo v budově pro
                ohlášené klienty.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Helena Van der Meer"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8xUgbx1a2xxVb2STVNl0i630ubjlVhgZGgyWUz91fVmE1fueU7Tnlr6Lv-j7AjqR1gCWUku4CBXGPDghX1WZMWgZvx68dNHhAXlELJgfcFeltuL5YE8NJt06Ko59eGU-uqpQ0QC33p_ECMQODXSu9pgJ_FptSMosBO3SrKGSB1vox6ZYGM8o-t1C884FFw-k3mYAIPGPjYL7JRza_rQyiQHa4IPVEIKMYVdcVQbW8_0MpAdhUyWB1awBQi1riimEqKyi_x5zyqAo"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Medailonek vedoucího</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Helena Van der Meer</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Luxembourg Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant/30 flex flex-col"
          >
            <div class="aspect-video overflow-hidden">
              <img
                alt="Luxembourg Office"
                class="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARMMKh_moDbWKIT_cW97rZhLg4IOtUnpSyW8RJzXMkOupEZ2_74rDazxMNKAPO08uWEwQG8FH2CevL9fQWSLDeMSYrVsDVY51TuwlMLC2V25fI0KqTc7olHZJj6Nlj-KbbY45QN7nJsfodhRfG4LkK74HzviPICpuyrOJjEUXtLTKYfPcMoJC0yTAl7FLR--uvhvOrJrGhMp0cIopPsddx3P8uwB5bg9bEizvCJLhkjGhhjqMu9Dib2Dub8rkzBhf6FoJtLEDIIow"
              />
            </div>
            <div class="p-stack-md flex-grow flex flex-col">
              <h3
                class="font-headline-md text-headline-md text-primary-800 mb-base"
              >
                Luxembourg Office
              </h3>
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-stack-sm"
              >
                12 Rue de la Chapelle, 1325 Luxembourg
              </p>
              <p
                class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
              >
                Sídlo v historickém centru v blízkosti Boulevard Royal. Dobrá
                dostupnost tramvají T1. Veřejné parkoviště Glacis je vzdáleno 5
                minut chůze.
              </p>
              <div
                class="mt-auto pt-stack-md border-t border-outline-variant/20 flex items-center gap-base"
              >
                <img
                  alt="Julian Sterling"
                  class="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxqGjKB_uFq87B5HeULFl9yPkBfVH_quQsgqZNDWjWXhstdLz2STQ0fjHWs1PiND_W_0CtnW9n4eMaevqjgem-dqt4mrVPMAj6CKMyS_M0cPonv_ddS6jdJlOma8f8vC04As2VQs_PizmCSU45gXh0I8n6P2ZwPjUyDoyuK2QBPYSs8fNDXlVUoqaMNNRhVGBvmbMYUUhfxoo77oos40YnnKNRlUZZw57r-AlEpWdKQXMwzv8uwoizlPVsToXCNHyrmMRSdDlveAM"
                />
                <div>
                  <span
                    class="font-label-caps text-label-caps text-secondary-800 block uppercase"
                    >Medailonek vedoucího</span
                  >
                  <span
                    class="font-body-md text-body-md text-on-surface font-semibold"
                    >Julian Sterling</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
