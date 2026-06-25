<script setup lang="ts">
const branches = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCrrEjX17PokdjJrf6HsrA6COb-8STCNIO4OdG4z-n4V9uIixRocQoBdXQnO25rPkgB-mQf3DEwcP6Kr2NmPZSHsiZtjXVTY80Bl5tWl_46bsw8Pr7UGnlfOIN1a5AMt5HQleVnPG5SsnxFGS4HLhFmV4-Qr6wxV182yqPdQFHW3VUqmTfyrkiQhuWJYWUlGnNrN1QULuOmCxq7N5aQ3EUb_Xcq4WwVMtnEhJJCU2F_OHIQznpyUiP6_D9dMpDVIuX2aOPY-DFG4Q",
    imgAlt: "Centrála Brno",
    name: "Centrála – Brno",
    address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
    description:
      "Sídlo skupiny Collegas v nejvyšší kancelářské budově na Moravě. Výborná dostupnost z centra Brna, parkování v areálu budovy.",
    managerName: "Tomáš Kalous",
    managerImgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgGsWlwCZT4mXgsytCfRBV6_0bC-rRRDp80GgGQaxYsO8mepaykrowL8W_UTuK2iqnDtCNmOlCb7nAXbc6X8ynNMHevwTJ0mH-dOMe5lsRIvpfXmkQjiRrg0o2Yw7EsYx1XwaBaHN-aPc47nJLYaTFEEAjgwJ2kJ1feFkwAH6rLZFrYhpDYL7SQ3prUsk1Kv-UTR59yMwAah6Fq9jFHtvZeIR8i7jQ8_dWaq6JQdOO6S-LFOGDq2tfuXJ8wp3Z-mQ-k5N4kksyrio",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXXC5L0SKXfkHzdnWLnThxCzqAZcZPnriyWhx2yamt5PWeQT2m9NxTqM756A2lnnQFUY6AvfAK_zO9PlTkGjPZ-PyOqXzBNDJQ7dO6unN-OVJaVxcTApupoBJizqCgiGCF9dREvyaDuLDfFclCqijTYqBuQOH6ETpHc3sDJbltRVEhwVO0biikQQLodClSlQb2hcH_1ofQYJs90aspScpqQGOZ46kfkZJ8pE69mqTzjgvKgJhwKE_yQW0WYG1TlT9WvBxStPMFp4",
    imgAlt: "Pobočka Kroměříž",
    name: "Pobočka – Kroměříž",
    address: "Tovačovského 2784/24, 767 01 Kroměříž",
    description:
      "Kancelář v centru Kroměříže. Schůzky jsou možné po předchozí domluvě s poradcem.",
    managerName: "Lukáš Formánek",
    managerImgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8xUgbx1a2xxVb2STVNl0i630ubjlVhgZGgyWUz91fVmE1fueU7Tnlr6Lv-j7AjqR1gCWUku4CBXGPDghX1WZMWgZvx68dNHhAXlELJgfcFeltuL5YE8NJt06Ko59eGU-uqpQ0QC33p_ECMQODXSu9pgJ_FptSMosBO3SrKGSB1vox6ZYGM8o-t1C884FFw-k3mYAIPGPjYL7JRza_rQyiQHa4IPVEIKMYVdcVQbW8_0MpAdhUyWB1awBQi1riimEqKyi_x5zyqAo",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARMMKh_moDbWKIT_cW97rZhLg4IOtUnpSyW8RJzXMkOupEZ2_74rDazxMNKAPO08uWEwQG8FH2CevL9fQWSLDeMSYrVsDVY51TuwlMLC2V25fI0KqTc7olHZJj6Nlj-KbbY45QN7nJsfodhRfG4LkK74HzviPICpuyrOJjEUXtLTKYfPcMoJC0yTAl7FLR--uvhvOrJrGhMp0cIopPsddx3P8uwB5bg9bEizvCJLhkjGhhjqMu9Dib2Dub8rkzBhf6FoJtLEDIIow",
    imgAlt: "Pobočka Břeclav",
    name: "Pobočka – Břeclav",
    address: "nám. T. G. Masaryka 302/8, 690 02 Břeclav",
    description:
      "Kancelář na hlavním náměstí Břeclavi. Pohodlné parkování přímo před budovou, schůzky po domluvě s poradcem.",
    managerName: "Filip Beneš",
    managerImgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqGjKB_uFq87B5HeULFl9yPkBfVH_quQsgqZNDWjWXhstdLz2STQ0fjHWs1PiND_W_0CtnW9n4eMaevqjgem-dqt4mrVPMAj6CKMyS_M0cPonv_ddS6jdJlOma8f8vC04As2VQs_PizmCSU45gXh0I8n6P2ZwPjUyDoyuK2QBPYSs8fNDXlVUoqaMNNRhVGBvmbMYUUhfxoo77oos40YnnKNRlUZZw57r-AlEpWdKQXMwzv8uwoizlPVsToXCNHyrmMRSdDlveAM",
  },
];
</script>

<template>
  <section class="bg-surface-container-low py-section-gap">
    <UContainer class="mx-auto px-gutter">
      <h2
        class="font-display-xl text-display-xl text-primary-800 mb-stack-lg text-center"
      >
        Naše pobočky
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-stack-md">
        <UiBranchCard
          v-for="branch in branches"
          :key="branch.name"
          v-bind="branch"
        />
      </div>
    </UContainer>
  </section>
</template>
