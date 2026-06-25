<script setup lang="ts">
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
  <div class="bg-primary-900 p-stack-lg lg:p-16 flex flex-col justify-center">
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
        <UiButton type="submit"> Odeslat poptávku </UiButton>
      </div>

      <p
        class="text-label-caps text-on-primary-container mt-stack-md opacity-60 tracking-widest"
      >
        * Veškerá komunikace je přísně důvěrná a podléhá zásadám ochrany
        osobních údajů.
      </p>
    </form>
  </div>
</template>
