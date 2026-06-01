<script setup lang="ts">
const email = ref("");
const submitted = ref(false);
const loading = ref(false);

async function handleSubmit() {
  if (!email.value || loading.value) return;
  loading.value = true;
  // TODO: wire up to actual backend/newsletter endpoint
  await new Promise((resolve) => setTimeout(resolve, 600));
  submitted.value = true;
  loading.value = false;
}
</script>

<template>
  <section class="py-section-gap bg-primary-900">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-headline-lg font-serif text-on-primary">
          Zanechte nám kontakt
        </h2>
        <p class="text-body-lg text-on-primary/70 mt-stack-sm">
          Ozveme se vám do 24 hodin a domluvíme se na prvním kroku bez závazků.
        </p>

        <Transition name="fade" mode="out-in">
          <div v-if="submitted" class="mt-stack-lg flex flex-col items-center gap-3">
            <span class="material-symbols-outlined text-secondary-fixed text-5xl">check_circle</span>
            <p class="text-body-lg text-secondary-fixed font-medium">Díky! Ozveme se vám brzy.</p>
          </div>

          <form v-else class="mt-stack-lg flex flex-col sm:flex-row gap-3 justify-center" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="email"
              placeholder="váš@email.cz"
              required
              class="flex-1 max-w-sm rounded-md border border-primary-container/40 bg-primary-container/20 px-5 py-3 text-on-primary placeholder:text-on-primary/40 outline-none focus:border-secondary-fixed/60 transition-colors text-body-md"
            />
            <UiButton
              type="submit"
              color="secondary"
              variant="solid"
              size="lg"
              :loading="loading"
              class="bg-secondary-fixed text-primary-900 hover:bg-secondary-fixed/80 transition-colors px-8 shrink-0"
            >
              Zanechat kontakt
            </UiButton>
          </form>
        </Transition>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
