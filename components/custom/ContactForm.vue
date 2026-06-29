<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/core";

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

const initialForm = {
  name: "",
  email: "",
  interest: interestOptions[0],
  phone: "",
  message: "",
};

const form = reactive({ ...initialForm });

const submitted = ref(false);
const loading = ref(false);

const { display } = useToastify();

function resetForm() {
  Object.assign(form, initialForm);
}

const { start, stop } = useTimeoutFn(
  () => {
    submitted.value = false;
    resetForm();
  },
  5000,
  { immediate: false },
);

async function handleSubmit() {
  if (!form.name || !form.email || !form.phone || loading.value) return;

  loading.value = true;

  try {
    await useApi("/api/email/contact-form", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        interest: form.interest,
        phone: form.phone,
        message: form.message,
      },
    });

    submitted.value = true;
    stop();
    start();

    display({
      type: "success",
      message: "$.contact.success_msg",
    });
  } catch (error: any) {
    display({
      type: "error",
      message: error?.data?.message || error?.message,
    });
  } finally {
    loading.value = false;
  }
}

onBeforeUnmount(stop);
</script>

<template>
  <div
    id="contact-form"
    class="bg-primary-900 p-stack-lg lg:p-16 flex flex-col justify-center"
  >
    <div class="mb-stack-lg">
      <span
        class="text-label-caps text-secondary-fixed block mb-stack-sm uppercase tracking-widest font-semibold"
      >
        Sjednejte konzultaci
      </span>

      <h2 class="text-headline-md font-serif text-on-primary">
        Nezávazná konzultace
      </h2>

      <p class="text-body-md text-on-primary-container mt-stack-xs">
        Vyplňte formulář a my se vám ozveme pro domluvení termínu osobního
        setkání.
      </p>
    </div>

    <div
      v-if="submitted"
      class="flex flex-col items-center justify-center gap-3 py-stack-lg text-center"
    >
      <UIcon
        name="i-material-symbols-check-circle"
        class="text-secondary-fixed text-5xl"
      />

      <p class="text-body-lg text-secondary-fixed font-medium">
        Díky! Ozveme se vám brzy.
      </p>
    </div>

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
