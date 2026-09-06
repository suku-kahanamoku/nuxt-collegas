<script setup lang="ts">
import usersData from "~/assets/data/users.json";

const userOptions = usersData.map((user) => ({
  value: user.slug,
  label: user.name,
}));

const interestOptions = [
  "Audit rodinných financí",
  "Finanční plán",
  "Péče o investiční majetek",
  "Zajištění rizik",
  "Daňové poradenství",
  "Právní poradenství",
  "Odškodnění",
  "Jiné",
];

const initialForm = {
  name: "",
  email: "",
  interest: interestOptions[0],
  phone: "",
  message: "",
  consultant: "",
};

const form = reactive({ ...initialForm });

function resetForm() {
  Object.assign(form, initialForm);
}

const { submitted, loading, submit } = useFormSubmission(
  () =>
    useApi("/api/email/contact-form", {
      method: "POST",
      body: { ...form },
    }),
  resetForm,
);

async function handleSubmit() {
  if (!form.name || !form.email || !form.phone) return;
  await submit();
}
</script>

<template>
  <div
    id="contact-form"
    class="bg-primary-900 p-stack-md md:p-stack-lg flex flex-col justify-center"
  >
    <div class="mb-stack-lg">
      <span
        class="text-label-caps text-secondary-fixed block mb-stack-sm uppercase tracking-widest font-semibold"
      >
        Sjednejte konzultaci
      </span>

      <h2
        class="text-headline-md md:text-headline-lg font-serif text-on-primary"
      >
        Nezávazná konzultace
      </h2>

      <p class="text-body-md text-on-primary-container mt-stack-xs">
        Vyplňte formulář a my se vám ozveme pro domluvení termínu osobního
        setkání.
      </p>
    </div>

    <UiSubmissionSuccess v-if="submitted" class="py-stack-lg" />

    <form v-else class="space-y-stack-md" @submit.prevent="handleSubmit">
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
              :value="opt"
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
            Telefonní číslo
          </label>

          <input
            v-model="form.phone"
            type="tel"
            name="phone"
            required
            placeholder="+420 123 456 789"
            class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors placeholder:text-outline"
          />
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div>
          <label
            class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
          >
            Finanční poradce (volitelné)
          </label>

          <select
            v-model="form.consultant"
            name="consultant"
            class="w-full bg-transparent border-0 border-b border-outline-variant/40 text-on-primary py-stack-xs focus:outline-none focus:border-secondary-fixed transition-colors appearance-none cursor-pointer"
          >
            <option
              v-for="opt in userOptions"
              :key="opt.value"
              :value="opt.value"
              class="bg-primary-900"
            >
              {{ opt.label }}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          class="text-label-caps text-on-primary-container block mb-stack-xs uppercase tracking-widest font-semibold"
        >
          Popis situace (volitelné)
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
        <UiButton type="submit" :loading="loading"> Odeslat poptávku </UiButton>
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
