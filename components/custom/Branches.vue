<script setup lang="ts">
import usersData from "~/assets/data/users.json";

const branches = [
  {
    imgSrc: "/img/branch/brno.png",
    imgAlt: "Centrála Brno",
    name: "Centrála – Brno",
    address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
    description:
      "Sídlo skupiny Collegas v nejvyšší kancelářské budově na Moravě. Výborná dostupnost z centra Brna, parkování v areálu budovy.",
    managerSlug: "marek-butula",
  },
  {
    imgSrc: "/img/branch/kromeriz.webp",
    imgAlt: "Pobočka Kroměříž",
    name: "Pobočka – Kroměříž",
    address: "Tovačovského 2784/24, 767 01 Kroměříž",
    description:
      "Kancelář v centru Kroměříže. Schůzky jsou možné po předchozí domluvě s poradcem.",
    managerSlug: "igor-stransky",
  },
  {
    imgSrc: "/img/branch/breclav.png",
    imgAlt: "Pobočka Břeclav",
    name: "Pobočka – Břeclav",
    address: "nám. T. G. Masaryka 302/8, 690 02 Břeclav",
    description:
      "Kancelář na hlavním náměstí Břeclavi. Pohodlné parkování přímo před budovou, schůzky po domluvě s poradcem.",
    managerSlug: "zuzana-capkova",
  },
  {
    imgSrc: "/img/branch/boskovice.png",
    imgAlt: "Pobočka Boskovice",
    name: "Pobočka – Boskovice",
    address: "Masarykovo náměstí 36/35, Boskovice",
    description:
      "Kancelář na hlavním náměstí Boskovic. Pohodlné parkování přímo před budovou, schůzky po domluvě s poradcem.",
    managerSlug: "iveta-butulova",
  },
];

const branchesWithManagers = branches.map((branch) => {
  const manager = usersData.find((user) => user.slug === branch.managerSlug);

  return {
    ...branch,
    managerName: manager?.name ?? "",
    managerImgSrc: manager?.photo ?? "",
    managerImgAlt: manager?.name ?? "",
  };
});
</script>

<template>
  <section class="bg-surface-container-low py-stack-lg md:py-section-gap">
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
