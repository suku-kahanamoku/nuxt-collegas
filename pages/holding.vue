<script setup lang="ts">
definePageMeta({ title: "Holding | COLLEGAS" });
useHead({
  title: "Holding | COLLEGAS",
  meta: [
    {
      name: "description",
      content:
        "Holding COLLEGAS sdružuje společnosti z oblasti finančního poradenství, realit, daní, IT řešení a investic.",
    },
  ],
});
</script>

<template>
  <div class="w-full">
    <UiPageIntro eyebrow="COLLEGAS" title="Holding" theme="light">
      <template #description>
        <p class="text-body-lg text-on-surface-variant max-w-3xl">
          Collegas sdružuje společnosti z oblasti finančního poradenství,
          realit, daní, IT řešení a investic. Naše holdingová struktura umožňuje
          efektivní spolupráci mezi jednotlivými dceřinými společnostmi a
          poskytuje komplexní služby našim klientům.
        </p>
      </template>
    </UiPageIntro>

    <!-- ── Holding Tree ── -->
    <CustomHoldingTree />

  </div>
</template>
