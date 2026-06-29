<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/core";

const email = ref("");
const submitted = ref(false);
const loading = ref(false);

const { display } = useToastify();

const { start, stop } = useTimeoutFn(
  () => {
    submitted.value = false;
    email.value = "";
  },
  5000,
  { immediate: false },
);

async function handleSubmit() {
  if (!email.value || loading.value) return;

  loading.value = true;

  try {
    await useApi("/api/email/contact", {
      method: "POST",
      body: { email: email.value },
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
  <UiDarkBanner
    title="Zanechte nám kontakt"
    body="Ozveme se vám do 24 hodin a domluvíme se na prvním kroku bez závazků."
  >
    <div v-if="submitted" class="mt-stack-lg flex flex-col items-center gap-3">
      <UIcon
        name="i-material-symbols-check-circle"
        class="text-secondary-fixed text-5xl"
      />
      <p class="text-body-lg text-secondary-fixed font-medium">
        Díky! Ozveme se vám brzy.
      </p>
    </div>

    <form
      v-else
      class="mt-stack-lg flex flex-col gap-3 justify-center sm:flex-row"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="email"
        type="email"
        placeholder="váš@email.cz"
        required
        class="text-body-md flex-1 max-w-sm rounded-md border border-primary-container/40 bg-primary-container/20 px-5 py-3 text-on-primary outline-none transition-colors placeholder:text-on-primary/40 focus:border-secondary-fixed/60"
      />

      <UiButton type="submit" :loading="loading" class="shrink-0">
        Zanechat kontakt
      </UiButton>
    </form>
  </UiDarkBanner>
</template>
