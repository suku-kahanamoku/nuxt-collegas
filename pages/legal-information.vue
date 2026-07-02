<script setup lang="ts">
definePageMeta({ title: "Právní informace | COLLEGAS" });

useHead({
  title: "Právní informace | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Informace o právních záležitostech ve společnosti Collegas s.r.o.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <section class="py-stack-lg md:py-section-gap bg-surface-container-lowest">
      <UContainer class="mx-auto px-gutter max-w-4xl">
        <h1
          class="text-headline-lg md:text-display-xl text-primary-800 mb-stack-md leading-tight"
        >
          Právní informace
        </h1>
        <p class="font-body-md text-on-surface-variant mb-stack-lg">
          Collegas s.r.o. je vázaný zástupce samostatného zprostředkovatele
          pojištění Collega Brokers a.s., investičního zprostředkovatele Collega
          Investice s.r.o. a úvěrového zprostředkovatele Gepard Finance a.s.
        </p>
      </UContainer>
    </section>
  </div>
</template>
