<script setup lang="ts">
definePageMeta({ title: "Naše služby | Finanční poradenství" });

useHead({
  title: "Naše služby | Finanční poradenství",
  meta: [
    {
      name: "description",
      content:
        "Přehled služeb skupiny COLLEGA – audit, poradenství, správa majetku a další.",
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
            <h1 class="text-display-xl font-serif text-on-primary leading-none">
              Naše služby
            </h1>
          </template>
        </UiTitle>
      </template>

      <template #description>
        <p
          class="text-body-lg text-on-primary-container max-w-xl mt-stack-md opacity-90"
        >
          Přehled služeb a oblastí, ve kterých pomáháme našim klientům — od
          auditu přes právní poradenství po správu nemovitostí a developerské
          projekty.
        </p>
      </template>
    </UiIntro>

    <CustomServices />
  </div>
</template>
