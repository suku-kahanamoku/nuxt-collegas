<script setup lang="ts">
const requestURL = useRequestURL();

const organizationSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "COLLEGA ENTERPRISE",
  url: requestURL.origin,
  logo: `${requestURL.origin}/img/logo/logo.svg`,
  description:
    "Nezávislé finanční poradenství a komplexní správa majetku pro jednotlivce i firmy.",
}));

useHead(() => ({
  script: [
    {
      key: "organization-schema",
      type: "application/ld+json",
      children: JSON.stringify(organizationSchema.value),
    },
  ],
}));
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
