<script setup lang="ts">
import serviceDetails from "~/assets/data/service-details";

const route = useRoute();
const serviceKey = String(route.params.id || "");
const config = serviceDetails[serviceKey];

if (!config) {
  throw createError({
    statusCode: 404,
    statusMessage: "Služba nebyla nalezena",
  });
}

useHead({
  title: config.seoTitle,
  meta: [{ name: "description", content: config.metaDescription }],
});
</script>

<template>
  <CustomServiceDetailPage :service-key="serviceKey" :config="config" />
</template>
