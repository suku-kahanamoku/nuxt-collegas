<script setup lang="ts">
import { useRoute, useHead } from "#imports";
import { ref, onMounted, computed } from "vue";
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

const mounted = ref(false);
onMounted(() => setTimeout(() => (mounted.value = true), 80));

const nameParts = computed(() =>
  (user.name || "")
    .split("")
    .map((ch: string, idx: number) => ({ ch, delay: `${idx * 30}ms` })),
);

const metrics = computed(
  () =>
    user.metrics || [
      { value: "10+", label: "Let Praxe" },
      { value: "PFP", label: "Oborový Titul" },
      { value: "100+", label: "Spokojených Klientů" },
    ],
);

const testimonials = computed(
  () =>
    user.testimonials || [
      {
        quote:
          "Díky spolupráci s Collegas mám konečně jasno ve svých financích. Každý krok mi byl srozumitelně vysvětlen.",
        author: "Jana K. (32 let, maminka na mateřské)",
      },
      {
        quote:
          "Profesionální, férový přístup. Oceňuji, že poradce opravdu naslouchá a navrhuje konkrétní řešení.",
        author: "Petr S. (45 let, podnikatel)",
      },
      {
        quote:
          "Hledala jsem někoho, kdo mi vše vysvětlí bez složitých výrazů. Přesně to se povedlo.",
        author: "Marie L. (58 let, zaměstnankyně)",
      },
    ],
);
</script>

<template>
  <div class="w-full" style="background-color: #000">
    <!-- Hero: full-viewport dark + warm radial gradient -->
    <section
      class="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style="
        background: radial-gradient(
          ellipse 90% 80% at 65% 35%,
          rgba(140, 65, 18, 0.65) 0%,
          rgba(10, 8, 6, 0.88) 70%
        );
      "
    >
      <!-- Photo (right side, fades left) -->
      <div class="absolute inset-0 pointer-events-none select-none">
        <img
          :src="user.photo"
          :alt="user.name"
          class="absolute right-0 top-0 h-full w-auto object-cover object-top"
          style="
            max-width: 65%;
            -webkit-mask-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.7) 40%,
              rgba(0, 0, 0, 0) 100%
            );
            mask-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.7) 40%,
              rgba(0, 0, 0, 0) 100%
            );
          "
        />
        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.25) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          "
        />
      </div>

      <!-- Text content -->
      <div
        class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-24 pt-36"
      >
        <!-- Role badge -->
        <p
          class="text-xs font-bold uppercase tracking-widest mb-5 transition-all duration-700"
          style="color: rgb(237, 108, 11)"
          :class="
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          "
        >
          {{ user.role }}
        </p>

        <!-- Animated name -->
        <h1
          class="font-bold text-white leading-none mb-6"
          style="font-size: clamp(3rem, 8vw, 7rem)"
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
          class="text-lg font-semibold mb-10 transition-all duration-700 delay-500"
          style="color: rgb(255, 241, 230)"
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
          <a
            v-if="phone"
            :href="`tel:${phone}`"
            class="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="w-5 h-5 shrink-0"
              style="fill: rgb(237, 108, 11)"
            >
              <path
                d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"
              />
            </svg>
            {{ phone }}
          </a>
          <a
            :href="`mailto:${email}`"
            class="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="w-5 h-5 shrink-0"
              style="fill: rgb(237, 108, 11)"
            >
              <path
                d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
              />
            </svg>
            {{ email }}
          </a>
          <span v-if="user.location" class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              class="w-5 h-5 shrink-0"
              style="fill: rgb(237, 108, 11)"
            >
              <path
                d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"
              />
            </svg>
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
          <a
            :href="`/contact?to=${email}`"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-opacity"
            style="background-color: rgb(237, 108, 11)"
            >Naplánovat Konzultaci</a
          >
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="py-24" style="background-color: #0a0a0a">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              class="text-xs font-bold uppercase tracking-widest mb-4"
              style="color: rgb(237, 108, 11)"
            >
              O mně
            </p>
            <h2
              class="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Něco Málo O Mně
            </h2>
            <p
              class="text-base leading-relaxed"
              style="color: rgb(180, 180, 180)"
            >
              {{ user.about || user.description }}
            </p>
          </div>
          <div
            class="overflow-hidden rounded-2xl"
            style="background: rgba(30, 15, 5, 0.8); aspect-ratio: 4/5"
          >
            <img
              :src="user.photo"
              :alt="user.name"
              class="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <!-- Metrics -->
        <div
          class="mt-20 grid grid-cols-3 gap-8 border-t pt-16"
          style="border-color: rgba(255, 255, 255, 0.08)"
        >
          <div v-for="(m, idx) in metrics" :key="idx" class="text-center">
            <p
              class="text-5xl font-bold mb-2"
              style="
                background: linear-gradient(
                  24deg,
                  rgb(237, 108, 11) 0%,
                  rgba(255, 255, 255, 0.55) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              "
            >
              {{ m.value }}
            </p>
            <p class="text-sm" style="color: rgb(122, 122, 122)">
              {{ m.label }}
            </p>
          </div>
        </div>

        <div class="mt-16 text-center">
          <a
            :href="`/contact?to=${email}`"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-opacity"
            style="background-color: rgb(237, 108, 11)"
            >Naplánovat Konzultaci</a
          >
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24" style="background-color: #000">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-16">
          Výsledky a Reference
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="rounded-2xl p-6 border"
            style="
              border-color: rgb(43, 43, 43);
              background: linear-gradient(
                230deg,
                rgba(92, 41, 3, 0.21) 0%,
                rgba(0, 0, 0, 0) 97%
              );
              box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 15px 0px;
            "
          >
            <p class="text-white leading-relaxed mb-6 text-sm">
              "{{ t.quote }}"
            </p>
            <p
              class="text-sm font-medium"
              style="color: rgba(255, 255, 255, 0.75)"
            >
              {{ t.author }}
            </p>
            <div class="flex gap-1 mt-3">
              <svg
                v-for="s in 5"
                :key="s"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                style="fill: rgb(237, 108, 11)"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-16 text-center">
          <a
            :href="`/contact?to=${email}`"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-opacity"
            style="background-color: rgb(237, 108, 11)"
            >Naplánovat Konzultaci</a
          >
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section
      class="py-24 border-t"
      style="background-color: #0a0a0a; border-color: rgba(255, 255, 255, 0.06)"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <p
          class="text-xs font-bold uppercase tracking-widest mb-4"
          style="color: rgb(237, 108, 11)"
        >
          Kontakt
        </p>
        <h2 class="text-4xl font-bold text-white mb-12">Kontakt</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-5">
            <a
              v-if="phone"
              :href="`tel:${phone}`"
              class="flex items-center gap-4 text-white hover:opacity-75 transition-opacity text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                class="w-6 h-6 shrink-0"
                style="fill: rgb(237, 108, 11)"
              >
                <path
                  d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"
                /></svg
              >{{ phone }}
            </a>
            <a
              :href="`mailto:${email}`"
              class="flex items-center gap-4 text-white hover:opacity-75 transition-opacity text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                class="w-6 h-6 shrink-0"
                style="fill: rgb(237, 108, 11)"
              >
                <path
                  d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                /></svg
              >{{ email }}
            </a>
            <span
              v-if="user.location"
              class="flex items-center gap-4 text-white text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                class="w-6 h-6 shrink-0"
                style="fill: rgb(237, 108, 11)"
              >
                <path
                  d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"
                /></svg
              >{{ user.location }}
            </span>
          </div>
          <div v-if="user.location" class="h-64 rounded-2xl overflow-hidden">
            <iframe
              class="w-full h-full border-0"
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(user.location)}&z=15&output=embed`"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>

    <PeopleCarousel />
  </div>
</template>
