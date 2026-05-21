<script setup lang="ts">
definePageMeta({ title: "Kontakt | Finanční poradenství" });
useHead({
  title: "Kontakt | Finanční poradenství",
  meta: [{ name: "description", content: "Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně najdeme ten správný první krok k Vaší finanční stabilitě." }],
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

const portfolioOptions = [
  "5–10 mil. Kč",
  "10–50 mil. Kč",
  "50 mil. Kč a více",
];

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
    <section class="max-w-7xl mx-auto px-gutter pt-stack-lg pb-stack-md">
      <h1 class="text-display-xl font-serif text-primary-900 mb-stack-xs leading-none">Spojte se s námi</h1>
      <p class="text-body-lg text-on-surface-variant max-w-2xl">
        Každá dobrá spolupráce začíná rozhovorem. Ozvěte se nám a společně najdeme ten správný první krok.
      </p>
    </section>

    <!-- ── Dvousloupcový obsah ── -->
    <section class="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-0 mb-section-gap">

      <!-- Levá strana: info + mapa -->
      <div class="bg-surface-container-lowest p-stack-lg lg:p-16 border border-outline-variant/30">
        <div class="space-y-stack-lg mb-stack-lg">
          <div>
            <span class="text-label-caps text-secondary-700 block mb-stack-sm uppercase tracking-widest font-semibold">
              Identifikace společnosti
            </span>
            <h2 class="text-headline-md font-serif text-primary-900 mb-stack-xs">Finanční poradenství</h2>
            <dl class="space-y-stack-sm">
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt class="text-label-caps text-secondary-700 uppercase shrink-0 w-40 tracking-widest font-semibold">IČO</dt>
                <dd class="text-body-md text-on-surface">022 62 975</dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt class="text-label-caps text-secondary-700 uppercase shrink-0 w-40 tracking-widest font-semibold">Spisová značka</dt>
                <dd class="text-body-md text-on-surface-variant">C 80725 vedená u Krajského soudu v Brně</dd>
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-4">
                <dt class="text-label-caps text-secondary-700 uppercase shrink-0 w-40 tracking-widest font-semibold">Sídlo</dt>
                <dd class="text-body-md text-on-surface-variant">Pražákova 1008/69, Brno-město, 639 00 Brno</dd>
              </div>
            </dl>
          </div>

          <div>
            <span class="text-label-caps text-secondary-700 block mb-stack-sm uppercase tracking-widest font-semibold">Provozovny</span>
            <ul class="space-y-stack-sm">
              <li v-for="office in [
                { name: 'Centrála', address: 'AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno' },
                { name: 'Kancelář Kroměříž', address: 'Tovačovského 2784/24, Kroměříž' },
                { name: 'Kancelář Břeclav', address: 'nám. T. G. Masaryka 302/8, Břeclav' },
              ]" :key="office.name" class="flex gap-3 items-start">
                <span class="material-symbols-outlined text-secondary-700 text-base mt-0.5 shrink-0">location_on</span>
                <div>
                  <p class="text-body-md font-semibold text-on-surface">{{ office.name }}</p>
                  <p class="text-body-md text-on-surface-variant">{{ office.address }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Mapa placeholder -->
        <div class="relative w-full overflow-hidden bg-surface-container shadow-sm border border-outline-variant/20" style="aspect-ratio: 4/3;">
          <div class="w-full h-full bg-surface-container map-container flex items-center justify-center">
            <span class="text-on-surface-variant/30 text-body-md">Mapa – AZ Tower Brno</span>
          </div>
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">location_on</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pravá strana: formulář -->
      <div class="bg-primary-900 p-stack-lg lg:p-16 flex flex-col justify-center">
        <div class="mb-stack-lg">
          <span class="text-label-caps text-secondary-fixed block mb-stack-sm uppercase tracking-widest font-semibold">
            Sjednejte konzultaci
          </span>
          <h2 class="text-headline-md font-serif text-on-primary">Nezávazná konzultace zdarma</h2>
          <p class="text-body-md text-on-primary-container mt-stack-xs">
            Vyplňte formulář a my se vám ozveme pro domluvení termínu osobního setkání.
          </p>
        </div>

        <form class="space-y-stack-md" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold">
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
              <label class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold">
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
              <label class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold">
                Oblast zájmu
              </label>
              <select
                v-model="form.interest"
                name="interest"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              >
                <option v-for="opt in interestOptions" :key="opt" class="bg-primary-900">{{ opt }}</option>
              </select>
            </div>
            <div>
              <label class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold">
                Velikost portfolia
              </label>
              <select
                v-model="form.portfolio"
                name="portfolio"
                class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
              >
                <option v-for="opt in portfolioOptions" :key="opt" class="bg-primary-900">{{ opt }}</option>
              </select>
            </div>
          </div>

          <div>
            <label class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold">
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
            <button
              type="submit"
              class="w-full md:w-auto px-stack-lg py-stack-sm bg-secondary-fixed text-primary-900 text-label-caps font-semibold uppercase tracking-widest hover:bg-secondary-100 transition-all flex items-center justify-center gap-stack-xs"
            >
              Odeslat poptávku
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <p class="text-label-caps text-on-primary-container mt-stack-md opacity-60 tracking-widest">
            * Veškerá komunikace je přísně důvěrná a podléhá zásadám ochrany osobních údajů.
          </p>
        </form>
      </div>

    </section>

  </div>
</template>
