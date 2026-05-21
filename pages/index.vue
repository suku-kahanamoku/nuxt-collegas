<script setup lang="ts">
definePageMeta({
  title: "Úvod",
});

useHead({
  title: "Collegas",
  meta: [{ name: "description", content: "Vítejte na stránkách Collegas." }],
});
</script>

<template>
  <div class="w-full overflow-hidden">
    <section
      class="min-h-[60vh] flex items-center justify-center bg-primary-900 text-white"
    >
      <div class="max-w-3xl mx-auto px-5 text-center space-y-6">
        <h1 class="font-serif text-5xl font-bold">Collegas</h1>
        <p class="text-xl text-white/80">
          Vítejte na stránkách Collegas. Obsah bude brzy doplněn.
        </p>
        <UButton to="#" size="xl" color="secondary" variant="solid">
          Zjistit více
        </UButton>
      </div>
    </section>
  </div>
</template>
