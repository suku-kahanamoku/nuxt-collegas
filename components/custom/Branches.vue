<script setup lang="ts">
import branches from "~/assets/data/branches";
import usersData from "~/assets/data/users.json";

const branchesWithManagers = branches.map((branch) => {
  const manager = usersData.find((user) => user.slug === branch.managerSlug);

  return {
    imgSrc: branch.imgSrc,
    imgAlt: branch.imgAlt,
    name: branch.name,
    address: branch.address,
    description: branch.description,
    managerName: manager?.name ?? "",
    managerImgSrc: manager?.photo ?? "",
    managerImgAlt: manager?.name ?? "",
  };
});
</script>

<template>
  <section
    class="bg-surface-container-low py-stack-lg md:py-section-gap"
    id="contact-form"
  >
    <UContainer class="mx-auto px-gutter">
      <h2
        class="text-headline-md md:text-headline-lg text-primary-800 mb-stack-lg text-center"
      >
        Naše pobočky
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        <UiBranchCard
          v-for="branch in branchesWithManagers"
          :key="branch.name"
          v-bind="branch"
        />
      </div>
    </UContainer>
  </section>
</template>
