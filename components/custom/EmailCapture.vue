<script setup lang="ts">
const email = ref("");
const submitted = ref(false);
const loading = ref(false);
let resetTimeout: ReturnType<typeof setTimeout> | null = null;

async function handleSubmit() {
  if (!email.value || loading.value) return;
  loading.value = true;
  // TODO: wire up to actual backend/newsletter endpoint
  await new Promise((resolve) => setTimeout(resolve, 600));
  submitted.value = true;
  loading.value = false;

  if (resetTimeout) {
    clearTimeout(resetTimeout);
  }

  resetTimeout = setTimeout(() => {
    submitted.value = false;
    email.value = "";
  }, 5000);
}

onBeforeUnmount(() => {
  if (resetTimeout) {
    clearTimeout(resetTimeout);
  }
});
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
      class="mt-stack-lg flex flex-col sm:flex-row gap-3 justify-center"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="email"
        type="email"
        placeholder="váš@email.cz"
        required
        class="flex-1 max-w-sm rounded-md border border-primary-container/40 bg-primary-container/20 px-5 py-3 text-on-primary placeholder:text-on-primary/40 outline-none focus:border-secondary-fixed/60 transition-colors text-body-md"
      />
      <UiButton type="submit" :loading="loading" class="shrink-0">
        Zanechat kontakt
      </UiButton>
    </form>
  </UiDarkBanner>
</template>
