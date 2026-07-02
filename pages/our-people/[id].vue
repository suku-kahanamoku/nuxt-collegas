<script setup lang="ts">
import { useRoute, useHead } from "#imports";
import { ref, onMounted, computed } from "vue";

import { useIntroAnimate } from "~/composables/useIntroAnimate";
import usersData from "~/assets/data/users.json";

const route = useRoute();
const slug = route.params.id as string;

const user = (
  Array.isArray(usersData)
    ? usersData.find((u: any) => u.slug === slug)
    : undefined
) as any;

if (!user) {
  throw createError({ statusCode: 404, statusMessage: "Profil nenalezen" });
}

useHead({
  title: `${user.name} — ${user.role} | Collegas`,
  meta: [
    {
      name: "description",
      content: user.intro || user.about || user.description || "",
    },
  ],
});

const email = user.email || `${slug.replace(/-/g, ".")}@collegas.cz`;
const phone = user.phone || "";

const { mounted, splitChars } = useIntroAnimate({
  stagger: 30,
  initialDelay: 80,
});

const nameParts = computed(() => splitChars(user.name));

const metrics = computed(
  () =>
    user.metrics || [
      { value: "10+", label: "Let Praxe" },
      { value: "PFP", label: "Oborový Titul" },
      { value: "100+", label: "Spokojených Klientů" },
    ],
);

const references = computed(
  () =>
    user.references || [
      {
        quote:
          "Řešil jsem odhad nemovitosti, pronájem bytu, pojistku domácnosti a povinné ručení na druhé auto v rodině. Dal jsem na radu přítele a obrátil se na collegas. Vše se mnou vyřešil 1 člověk, během jednoho telefonátu a jedné schůzky. Po telefonu jsem jim popsal, co potřebuji, na následující osobní schůzce mi byly prezentovány různé modely služeb ( vč. hotových smluv ) od několika zprostředkovatelů s tím, že si stačilo jen vybrat, podepsat a odejít....",
        author: "Tomáš Pečenka (Google recenze)",
      },
      {
        quote:
          'Oceňuji přátelský a osobní přístup, vysvětlení problematiky a zaměření se na konkrétní potřeby klienta. Na rozdíl od běžného "finančního poradenství" vás netlačí do nesmyslných pojistek...',
        author: "Ondřej Daněk (Google recenze)",
      },
      {
        quote:
          "Během mnohaleté spolupráce mi vždy dobře poradili a našli tu nejvýhodnější možnost, ať už v otázce pojištění, vyřízení hypotéky, či kde investovat. Služeb využívá celá naše rodina a jsme moc spokojení. Díky za skvělý servis a osobní přístup!",
        author: "Martina Donátová (Google recenze)",
      },
    ],
);
</script>

<template>
  <div class="w-full bg-primary-950">
    <!-- Hero: full-viewport dark + warm radial gradient -->
    <section
      class="relative min-h-screen flex items-center overflow-hidden bg-primary-900"
    >
      <!-- Photo (right side, fades left) -->
      <div class="absolute inset-0 pointer-events-none select-none">
        <NuxtImg
          :src="user.photo"
          :alt="user.name"
          class="absolute right-0 top-0 h-full w-auto object-cover mask-gradient-to-right-light"
          format="webp"
          loading="lazy"
          sizes="sm:100vw md:100vw lg:60vw xl:50vw"
        />
      </div>

      <!-- Text content -->
      <div
        class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-stack-lg md:py-section-gap"
      >
        <!-- Role badge -->
        <p
          class="text-xs font-bold uppercase tracking-widest mb-5 transition-all duration-700 text-secondary-400"
          :class="
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          "
        >
          {{ user.role }}
        </p>

        <!-- Animated name -->
        <h1
          class="text-headline-lg md:text-display-xl font-bold text-white leading-tight mb-6"
        >
          <span
            v-for="(part, i) in nameParts"
            :key="i"
            class="inline-block transition-all duration-500 ease-out"
            :style="{ transitionDelay: part.delay }"
            :class="
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            "
            >{{ part.ch === " " ? "\u00A0" : part.ch }}</span
          >
        </h1>

        <!-- Quote -->
        <p
          v-if="user.slogan"
          class="text-lg font-semibold mb-10 transition-all duration-700 delay-500 text-secondary-50"
          :class="
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          "{{ user.slogan }}"
        </p>

        <!-- Contact info row -->
        <div
          class="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-white text-sm mb-10 transition-all duration-700 delay-700"
          :class="
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          "
        >
          <NuxtLink
            v-if="phone"
            :to="`tel:${phone}`"
            class="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <UIcon
              name="mdi:phone"
              class="w-5 h-5 shrink-0 text-secondary-400"
            />
            {{ phone }}
          </NuxtLink>
          <NuxtLink
            :to="`mailto:${email}`"
            class="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <UIcon
              name="i-material-symbols-mail"
              class="w-5 h-5 shrink-0 text-secondary-400"
            />
            {{ email }}
          </NuxtLink>
          <span v-if="user.location" class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-location-on"
              class="w-5 h-5 shrink-0 text-secondary-400"
            />
            {{ user.location }}
          </span>
        </div>

        <!-- CTA -->
        <div
          class="transition-all duration-700 delay-1000"
          :class="
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <UiButton :to="`/contact?to=${email}`" class="rounded-full"
            >Naplánovat Konzultaci</UiButton
          >
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="py-24 bg-primary-950">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            class="overflow-hidden rounded-2xl bg-primary-900/80"
            style="aspect-ratio: 4/5"
          >
            <NuxtImg
              :src="user.photo"
              :alt="user.name"
              class="w-full h-full object-cover object-top"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:100vw lg:50vw xl:50vw"
            />
          </div>
          <div>
            <p
              class="text-xs font-bold uppercase tracking-widest mb-4 text-secondary-400"
            >
              O mně
            </p>
            <h2
              class="text-headline-md md:text-headline-lg font-bold text-white mb-8 leading-tight"
            >
              Něco Málo O Mně
            </h2>
            <p class="text-base leading-relaxed text-white/60">
              {{ user.about || user.description }}
            </p>
          </div>
        </div>

        <!-- Metrics -->
        <!-- <div class="mt-20 grid grid-cols-3 gap-8 border-t pt-16 border-white/8">
          <div v-for="(m, idx) in metrics" :key="idx" class="text-center">
            <p
              class="text-5xl font-bold mb-2"
              style="
                background: linear-gradient(
                  24deg,
                  var(--color-secondary-400) 0%,
                  rgba(255, 255, 255, 0.55) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              "
            >
              {{ m.value }}
            </p>
            <p class="text-sm text-white/40">
              {{ m.label }}
            </p>
          </div>
        </div> -->

        <div class="mt-16 text-center">
          <UiButton :to="`/contact?to=${email}`" class="rounded-full"
            >Naplánovat Konzultaci</UiButton
          >
        </div>
      </div>
    </section>

    <!-- references -->
    <section class="py-24 bg-primary-950">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <h2
          class="text-headline-md md:text-headline-lg font-bold text-white mb-16 text-center leading-tight"
        >
          Výsledky a Reference
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(t, i) in references"
            :key="i"
            class="rounded-2xl p-6 border border-primary-800 shadow-lg"
            style="
              background: linear-gradient(
                230deg,
                rgba(4, 41, 30, 0.35) 0%,
                transparent 97%
              );
            "
          >
            <p class="text-white leading-relaxed mb-6 text-sm">
              "{{ t.quote }}"
            </p>
            <p class="text-sm font-medium text-white/75">
              {{ t.author }}
            </p>
            <div class="flex gap-1 mt-3">
              <UIcon
                v-for="s in 5"
                :key="s"
                name="i-material-symbols-star"
                class="w-4 h-4 text-secondary-400"
              />
            </div>
          </div>
        </div>
        <div class="mt-16 text-center">
          <UiButton :to="`/contact?to=${email}`" class="rounded-full"
            >Naplánovat Konzultaci</UiButton
          >
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section class="py-24 border-t border-white/6 bg-primary-950">
      <UContainer class="grid grid-cols-1 lg:grid-cols-2">
        <div class="max-w-7xl mx-auto px-6 lg:px-16">
          <p
            class="text-xs font-bold uppercase tracking-widest mb-4 text-secondary-400"
          >
            Kontakt
          </p>
          <h2 class="text-headline-md md:text-headline-lg font-bold text-white mb-12">Kde mě najdete</h2>
          <div class="space-y-5">
            <NuxtLink
              v-if="phone"
              :to="`tel:${phone}`"
              class="flex items-center gap-4 text-white hover:opacity-75 transition-opacity text-base"
            >
              <UIcon
                name="mdi:phone"
                class="w-6 h-6 shrink-0 text-secondary-400"
              />
              {{ phone }}
            </NuxtLink>
            <NuxtLink
              :to="`mailto:${email}`"
              class="flex items-center gap-4 text-white hover:opacity-75 transition-opacity text-base"
            >
              <UIcon
                name="i-material-symbols-mail"
                class="w-6 h-6 shrink-0 text-secondary-400"
              />
              {{ email }}
            </NuxtLink>
            <span
              v-if="user.location"
              class="flex items-center gap-4 text-white text-base"
            >
              <UIcon
                name="i-material-symbols-location-on"
                class="w-6 h-6 shrink-0 text-secondary-400"
              />
              {{ user.location }}
            </span>
          </div>
        </div>
        <div v-if="user.location" class="h-64 rounded-2xl overflow-hidden">
          <iframe
            class="w-full h-full border-0"
            :src="`https://maps.google.com/maps?q=${encodeURIComponent(user.location)}&z=15&output=embed`"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </UContainer>
    </section>

    <PeopleCarousel />
  </div>
</template>
