<script setup lang="ts">
definePageMeta({ title: "Naše služby | Finanční poradenství" });

useHead({
  title: "Naše služby | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Přehled služeb COLLEGAS: finance, správa kapitálu, daně a právo, reality i energie. Každou oblast propojujeme do funkčního celku.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <UiIntro>
      <template #header>
        <UiTitle size="md">
          <template #eyebrow>
            <span
              class="text-label-caps text-secondary-fixed uppercase block tracking-widest font-semibold"
              >Naše služby</span
            >
          </template>
          <template #title>
            <h1
              class="text-headline-lg md:text-display-xl font-serif text-on-primary leading-tight"
            >
              Naše služby
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90 leading-relaxed"
        >
          Čtyři klíčové oblasti, ve kterých pomáháme našim klientům – finance,
          správa kapitálu, daně a právo, reality a energie. Každá oblast je
          propojená, aby tvořila jeden funkční celek.
        </p>
      </template>
    </UiIntro>

    <CustomServices />
  </div>
</template>
