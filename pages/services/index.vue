<script setup lang="ts">
definePageMeta({ title: "Naše služby | Finanční poradenství" });

useHead({
  title: "Naše služby | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Přehled služeb COLLEGAS: finance, investice, pojištění, úvěry a financování, reality a energie, daně a právo. Každou oblast propojujeme do funkčního celku.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <UiPageIntro
      eyebrow="Naše služby"
      title="Naše služby"
      description="Šest klíčových oblastí, ve kterých pomáháme našim klientům – finance, investice, pojištění, úvěry a financování, reality a energie, daně a právo. Každá oblast je propojená, aby tvořila jeden funkční celek."
    />

    <CustomServices />
  </div>
</template>
