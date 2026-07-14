<script setup lang="ts">
import services from "~/assets/data/service-menu.json";

const navItems = [
  {
    label: "Naše služby",
    to: "/services",
    type: "trigger",
    slot: "services",
    children: [
      {
        label: services[0].navLabel,
        to: services[0].to,
        icon: services[0].icon,
        type: "trigger",
        children: [
          {
            label: "Audit rodinných financí",
            to: "/services/finance#audit",
          },
          {
            label: "Finanční plán",
            to: "/services/finance#plan",
          },
          {
            label: "Zajištění rizik",
            to: "/services/finance#risk",
          },
          {
            label: "Odškodnění",
            to: "/services/finance#compensation",
          },
        ],
      },
      {
        label: services[1].navLabel,
        to: services[1].to,
        icon: services[1].icon,
        type: "trigger",
        children: [
          {
            label: "Péče o investiční majetek",
            to: "/services/capital-management#asset-care",
          },
          {
            label: "Financování",
            to: "/services/capital-management#financing",
          },
          {
            label: "Řešení na míru",
            to: "/services/capital-management#opportunities",
          },
        ],
      },
      {
        label: services[2].navLabel,
        to: services[2].to,
        icon: services[2].icon,
        type: "trigger",
        children: [
          {
            label: "Daňové poradenství",
            to: "/services/tax-legal#tax",
          },
          {
            label: "Právní poradenství",
            to: "/services/tax-legal#legal",
          },
        ],
      },
      {
        label: services[3].navLabel,
        to: services[3].to,
        icon: services[3].icon,
        type: "trigger",
        children: [
          {
            label: "Energetická optimalizace",
            to: "/services/real-estate-energy#energy",
          },
          {
            label: "Realitní služby",
            to: "/services/real-estate-energy#real-estate",
          },
          {
            label: "Správa nemovitostí",
            to: "/services/real-estate-energy#property-management",
          },
          {
            label: "Developerské projekty",
            to: "/services/real-estate-energy#development",
          },
        ],
      },
    ],
  },
  { label: "Holding", to: "/holding" },
  { label: "Naši lidé", to: "/our-people" },
  { label: "O nás", to: "/about" },
  { label: "Kontakt", to: "/contact" },
];
</script>

<template>
  <UHeader mode="slideover" :toggle="{ size: 'xl' }">
    <template #title>
      <NuxtLink to="/" aria-label="Collegas" class="block">
        <img
          src="/img/logo/logo_text.svg"
          alt="Collegas"
          class="h-10 w-auto"
          loading="lazy"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="navItems as any"
      variant="link"
      color="primary"
      :ui="{
        link: 'text-sm font-semibold uppercase tracking-wider',
        viewportWrapper: 'w-3xl',
      }"
    >
      <template #services-content="{ item }">
        <div
          class="font-semibold pt-6 px-6 font-serif text-2xl text-primary-800/80"
        >
          Klientům pomáháme v těchto oblastech:
          <div
            class="h-0.5 rounded-full w-20 mt-5"
            style="
              background: linear-gradient(
                90deg,
                rgb(116, 91, 38),
                rgb(228, 194, 131),
                rgb(116, 91, 38)
              );
              box-shadow: rgba(228, 194, 131, 0.45) 0px 1px 6px;
            "
          ></div>
        </div>
        <div class="grid grid-cols-4 gap-4 p-6">
          <div
            v-for="service in (item as any).children"
            :key="service.label"
            class="space-y-2"
          >
            <ULink
              :to="service.to"
              class="flex items-center gap-2 font-semibold text-secondary-800 hover:text-primary"
            >
              <UIcon :name="service.icon" />
              {{ service.label }}
            </ULink>

            <!-- children v children -->
            <ul v-if="service.children?.length" class="ml-4 space-y-2">
              <li v-for="sub in service.children" :key="sub.label">
                <ULink
                  :to="sub.to"
                  class="flex items-center gap-2 text-sm text-muted hover:text-primary"
                >
                  {{ sub.label }}
                </ULink>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </UNavigationMenu>

    <!-- <template #right>
      <UButton
        to="/client-zone"
        color="primary"
        variant="outline"
        size="sm"
        icon="i-material-symbols-lock-person"
        class="uppercase tracking-widest font-semibold text-xs px-4 py-2 whitespace-nowrap"
      >
        Klientská zóna
      </UButton>
    </template> -->

    <template #body>
      <UNavigationMenu
        :items="navItems"
        variant="link"
        color="primary"
        orientation="vertical"
        :ui="{ list: 'space-y-1', link: 'text-lg' }"
      />
    </template>
  </UHeader>
</template>
