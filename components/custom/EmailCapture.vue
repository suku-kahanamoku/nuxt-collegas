<script setup lang="ts">
const email = ref("");

const { submitted, loading, submit } = useFormSubmission(
  () =>
    useApi("/api/email/contact", {
      method: "POST",
      body: { email: email.value },
    }),
  () => {
    email.value = "";
  },
);

async function handleSubmit() {
  if (!email.value) return;
  await submit();
}
</script>

<template>
  <UiDarkBanner
    title="Zanechte nám kontakt"
    body="Ozveme se vám do 24 hodin a domluvíme se na prvním kroku bez závazků."
  >
    <UiSubmissionSuccess v-if="submitted" class="mt-stack-lg" />

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
