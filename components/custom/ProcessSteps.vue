<script setup lang="ts">
const steps = [
  {
    number: "01",
    icon: "i-material-symbols-forum",
    title: "Úvodní konzultace",
    description:
      "Bezplatně a nezávazně probereme vaši situaci, cíle a to, co vás trápí nebo brzdí.",
  },
  {
    number: "02",
    icon: "i-material-symbols-search",
    title: "Analýza a audit",
    description:
      "Projdeme vaše smlouvy, portfolio a celkovou strukturu financí – bez závislosti na produktech.",
  },
  {
    number: "03",
    icon: "i-material-symbols-lightbulb",
    title: "Strategie na míru",
    description:
      "Navrhneme konkrétní plán přesně pro vaši situaci, cíle a časový horizont.",
  },
  {
    number: "04",
    icon: "i-material-symbols-rocket-launch",
    title: "Realizace",
    description:
      "Provedeme vás každým krokem – od výběru produktů po nastavení celé finanční struktury.",
  },
  {
    number: "05",
    icon: "i-material-symbols-update",
    title: "Průběžná péče",
    description:
      "Sledujeme vývoj, reagujeme na změny a jsme tu vždy, kdy nás potřebujete.",
  },
];
</script>

<template>
  <section class="py-section-gap bg-primary-900 relative overflow-hidden">
    <!-- Radial glow -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div
        class="w-[900px] h-[500px] rounded-full blur-[160px]"
        style="
          background: radial-gradient(
            ellipse,
            rgba(228, 194, 131, 0.04) 0%,
            transparent 65%
          );
        "
      />
    </div>

    <UContainer class="relative z-10 zoom-in">
      <!-- Header -->
      <div class="text-center mb-20">
        <span
          class="text-label-caps text-secondary-fixed uppercase tracking-widest font-semibold block mb-stack-sm"
          >Jak to funguje</span
        >
        <h2 class="text-headline-lg font-serif text-on-primary">
          Proces spolupráce
        </h2>
        <p class="text-body-lg text-on-primary/55 mt-stack-sm max-w-xl mx-auto">
          Od prvního rozhovoru po dlouhodobou finanční jistotu – každý krok má
          svůj smysl.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Horizontal connector line (desktop) -->
        <div
          aria-hidden="true"
          class="hidden lg:block absolute top-8 inset-x-0 h-px"
          style="
            background: linear-gradient(
              90deg,
              transparent 4%,
              rgba(228, 194, 131, 0.2) 12%,
              rgba(228, 194, 131, 0.5) 50%,
              rgba(228, 194, 131, 0.2) 88%,
              transparent 96%
            );
          "
        />

        <div class="flex flex-col lg:flex-row">
          <template v-for="(step, i) in steps" :key="step.number">
            <!-- Step block -->
            <div
              class="flex-1 group flex flex-col items-center text-center relative px-4 py-8 lg:py-0"
            >
              <!-- Ghost number watermark -->
              <span
                aria-hidden="true"
                class="absolute bottom-4 lg:bottom-auto lg:top-[-1.5rem] right-6 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 text-[5rem] leading-none font-serif text-on-primary/[0.04] select-none pointer-events-none tracking-tighter"
                >{{ step.number }}</span
              >

              <!-- Icon circle -->
              <div class="relative mb-5 z-10">
                <!-- Hover glow ring -->
                <div
                  class="absolute inset-0 rounded-full bg-secondary-fixed/15 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-[1.7] transition-all duration-500 ease-out"
                />
                <!-- Circle -->
                <div
                  class="w-16 h-16 rounded-full border border-secondary-fixed/35 bg-primary-900 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-secondary-fixed/80 group-hover:bg-secondary-fixed/10"
                >
                  <UIcon
                    :name="step.icon"
                    class="text-secondary-fixed text-2xl"
                  />
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-title-sm font-serif text-on-primary mb-2 transition-colors duration-200 group-hover:text-secondary-fixed"
              >
                {{ step.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-body-sm text-on-primary/55 leading-relaxed max-w-[15rem]"
              >
                {{ step.description }}
              </p>

              <!-- Mobile separator border -->
              <div
                v-if="i < steps.length - 1"
                class="lg:hidden w-px h-8 bg-secondary-fixed/20 mt-6"
              />
            </div>

            <!-- Arrow between steps -->
            <div
              v-if="i < steps.length - 1"
              class="flex items-center justify-center shrink-0 lg:w-10 lg:pb-[5.5rem]"
            >
              <!-- Desktop: right arrow -->
              <div
                class="hidden lg:flex flex-col items-center gap-0.5 relative"
              >
                <UIcon
                  name="i-material-symbols-chevron-right"
                  class="text-secondary-fixed/40 text-xl"
                />
              </div>
              <!-- Mobile: down arrow (shown as border above, handled separately) -->
            </div>
          </template>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <UButton
          to="/contact"
          size="lg"
          color="secondary"
          variant="solid"
          trailing-icon="i-material-symbols-arrow-forward"
          class="bg-secondary-fixed text-primary-800 hover:bg-secondary-fixed/80 transition-colors px-10 py-4 text-base"
          :ui="{
            trailingIcon:
              'transition-transform duration-200 group-hover:translate-x-1 size-5',
          }"
        >
          Začít první krok zdarma
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
