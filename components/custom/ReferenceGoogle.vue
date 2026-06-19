<script setup lang="ts">
const references = [
  {
    name: "Aleš T.",
    description: "Kroměříž",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Díky analýze od firmy Collegas jsem dokázal ušetřit téměř polovinu na splátkách svých úvěrů.",
  },
  {
    name: "Alena Š.",
    description: "Soběšice",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzmzismqyaSNJx4aPbOAOCzhzgz3dzC3GRDjoggfMSAWEaXTcIUHuKL5wZsLbaq4rKA4sGsr7iC1Ka5wk4F9rfhSWx34IYrW0SXxTrqTXdYEy7SuqZGxqIrxrGBlqrIWx0flYLQ_QQki9XOH7Wnt2uLTXdGuAY3Mi6a-IRaMSAgxotleLnPeD1h0JQcziYoSoTV-qnXTVhmBrvdOg69WDMVdmrawe3dXz1HuekLI6u0b-h4DOSXTaqrQG861DzpoBrLCm-ynl7Ogs",
    quote:
      "Pokaždé když něčemu ve svých smlouvách nerozumím, obracím se už jen na vás.",
  },
  {
    name: "Roman A.",
    description: "Brno",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbYOB4SgdZUbHZ0M1NLLUdfBp3XmnvinI8oi9CastYD1Q7YZiFgFrgGvXJGfKlj5ZEdz46qWu0SoKlUUF4egPU6BTitGOV_MxKLM9VnZxm0MgzcylW17_hTw_7IFAKFWKI8EI5OSyoE6sQocpxN_FYznfRAGw5INcLcBRtkEXl2MH8RV9u7-qeM1ZAmq9mzdIYS42hx9G2nDyKrpOckF40iCgvrfXM2gYPqx6LbYkpLwFDv--StWGARN4g0YhytQRhSQoCHJWvdPw",
    quote:
      "Na vašem semináři o investičním zlatě jsem měl po dlouhé době pocit, že jsem něco pochopil!",
  },
  {
    name: "Karolína T. D.",
    description: "Šlapanice",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCzMVVbUiGDldEdjzoH0uh_tz8LFX5gUkIUrc37-84ytVq8ThVCqHJqUO0TIWSGeJYtQfCOYgNGagSdDprrZhxv1mWLY4kgwTMG2LNooznZU1GEuyKtZpS-I3yIScUN9vEUbuS4o1VHa3a7Xc4Bvb6qXmiL5fKeAAywb0IrX8R-dUUm7cHxuOAC5PeOO9m6MK1fo7apWRgYi7ehMmHFdQ-BB0mSsdhBNaeEMMJXGUmIBp5TXddP51kdf3vs-pkJXhFYHftRMgtssg",
    quote:
      "Díky Collegas mi pojišťovna po úrazu vyplatila o 30 procent více než původně chtěla.",
  },
  {
    name: "Petr P.",
    description: "Hradec Králové",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHtWHo56DD7xsjXPoFqxSHADwFGWEKN1DAR9yHDsU8ltGKDig7N7faZaDABQd7kCqGO3AGEy8EbYQnxHBKqJWQASzBOUNBd7a7gfdPfrBfMHOBH0NLDiftZTGsBlXPO_4Ty92f0DoWMbeQVv9mTQK5qy2E9GC4Y_ZPAshHOebxWhFIEWfhkZyQEyg5re0dVxcdjFVzrczMgJ0Qj5PRbrFFJSWMLcqcjIvMfdgYe4qrgTJRUmv4W0iLP9H3olq17adyOLIfcWmhQ4A",
    quote:
      "Nikdy jsem nevěřil, že by se i o moje finance mohl postarat tak profesionální tým odborníků.",
  },
  {
    name: "Jana D.",
    description: "Brno",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP8BHVaAZipz4DbyKsGK9u4TLFqyx98IaLnMp-j4RknuMJPoVAkJ8_Nx-P1dhvIJq61fBywGbaNBw45th_cIJq0EIoR-TkJJY0kw-FNMyUl8f4FHRt4Ohxn0vtr6OXHSHEm68nJBbYZ0ULfmn9rC75oxmRCQJiyd2n_JQFBBOuweKBLgsWLS-08IipBnuPCXeYO8d0vOv0SYXcUFHwooZRdQPVjS_0gEeKXTj2EqGNbqj97fiOldaJzVk2319dFtpskVqTUIMFSqk",
    quote:
      "Díky společnosti Collegas jsem na poplatcích ušetřila skoro 800 Kč měsíčně.",
  },
  {
    name: "Martin K.",
    description: "Brno",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWD_YiLDfai0SI335pR_nnf-7AKqb0E0Gy-TTre0hFoLi1oYBZBSKndKMRraA8U-4Z8c62gqIPWRuNMbgvVr6b2wE5oGsjjSSiWSoTE8tFqPXYoqj88rhkrA1_HcP7yjRovl4oo-pd9RNwH7ZShCByYl1rx5cF3cDQxBZeKS9VzJ_r2_lX7wNKRUFPw4EZQYg9eBuuk2tnqdBqf9OGCMSgej8RKC-063BW6iG_u_GJRiwWduYxYm1kOPeT6GjwNUofSjyWrtYdzMo",
    quote:
      "Do detailu mi vysvětlili mé produkty a díky tomu teď vím, jak se lépe zabezpečit.",
  },
];

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);
</script>
<template>
  <section class="py-section-gap bg-surface-container-low">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Left: portrait with overlay quote -->
        <div class="fade-in">
          <div class="aspect-4/5 relative" v-if="selected">
            <div
              class="w-full h-full bg-cover bg-center border-12 border-white rounded-md shadow-lg"
              :style="{ backgroundImage: `url(${selected.avatar})` }"
              :aria-label="selected.name"
            ></div>

            <div
              v-if="selected"
              class="absolute -bottom-8 -right-8 bg-primary-800 p-6 text-on-primary max-w-xs hidden md:block"
            >
              <p class="text-body-lg italic mb-4">“{{ selected.quote }}”</p>
              <span class="font-label-caps text-secondary-fixed"
                >— {{ selected.name }}</span
              >
            </div>
          </div>
        </div>

        <!-- Right: heading + a couple of highlights -->
        <div class="fade-in">
          <span
            class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
            >Ohlasy klientů</span
          >
          <h2 class="font-headline-lg text-headline-lg text-primary-800 mb-6">
            {{ selected?.name }}
          </h2>

          <div class="space-y-8">
            <div class="border-l-2 pl-6 border-secondary">
              <p class="text-body-lg text-on-surface-variant italic mb-3">
                {{ selected?.quote }}
              </p>
              <span class="font-label-caps text-primary-800">{{
                selected?.description
              }}</span>
            </div>
          </div>

          <UMarquee
            pause-on-hover
            :overlay="false"
            :ui="{
              root: '[--gap:--spacing(4)] mt-20',
              content: 'w-auto py-1 cursor-pointer',
            }"
          >
            <!-- Horizontal card marquee -->
            <UPageCard
              v-for="(ref, i) in references"
              :key="ref.name"
              variant="subtle"
              :description="ref.quote"
              :ui="{
                description:
                  'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
              }"
              class="w-64 shrink-0"
              @click="selectedIndex = i"
            >
              <template #footer>
                <UUser
                  :name="ref.name"
                  :description="ref.description"
                  :avatar="{ src: ref.avatar, alt: ref.name }"
                  size="md"
                  :ui="{ description: 'line-clamp-1' }"
                />
              </template>
            </UPageCard>
          </UMarquee>
        </div>
      </div>
    </UContainer>
  </section>
</template>
