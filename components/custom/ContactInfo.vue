<script setup lang="ts">
const offices = [
  {
    name: "Centrála",
    address: "AZ TOWER, 11. patro, Pražákova 1008/69, 639 00 Brno",
  },
  {
    name: "Kancelář Kroměříž",
    address: "Tovačovského 2784/24, Kroměříž",
  },
  {
    name: "Kancelář Břeclav",
    address: "nám. T. G. Masaryka 302/8, Břeclav",
  },
];
</script>

<template>
  <div
    class="bg-surface-container-lowest p-stack-lg lg:p-16 border border-outline-variant/30"
  >
    <div class="space-y-stack-lg mb-stack-lg">
      <div>
        <span
          class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
        >
          Identifikace společnosti
        </span>
        <h2 class="text-headline-md font-serif text-primary-800 mb-stack-xs">
          Finanční poradenství
        </h2>
        <dl class="space-y-stack-sm">
          <div class="flex flex-col sm:flex-row sm:gap-4">
            <dt
              class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
            >
              IČO
            </dt>
            <dd class="text-body-md text-on-surface">022 62 975</dd>
          </div>
          <div class="flex flex-col sm:flex-row sm:gap-4">
            <dt
              class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
            >
              Spisová značka
            </dt>
            <dd class="text-body-md text-on-surface-variant">
              C 80725 vedená u Krajského soudu v Brně
            </dd>
          </div>
          <div class="flex flex-col sm:flex-row sm:gap-4">
            <dt
              class="text-label-caps text-secondary-800 uppercase shrink-0 w-40 tracking-widest font-semibold"
            >
              Sídlo
            </dt>
            <dd class="text-body-md text-on-surface-variant">
              Pražákova 1008/69, Brno-město, 639 00 Brno
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <span
          class="text-label-caps text-secondary-800 block mb-stack-sm uppercase tracking-widest font-semibold"
          >Provozovny</span
        >
        <ul class="space-y-stack-sm">
          <li
            v-for="office in offices"
            :key="office.name"
            class="flex gap-3 items-start"
          >
            <UIcon
              name="i-material-symbols-location-on"
              class="text-secondary-800 text-base mt-0.5 shrink-0"
            />
            <div>
              <p class="text-body-md font-semibold text-on-surface">
                {{ office.name }}
              </p>
              <p class="text-body-md text-on-surface-variant">
                {{ office.address }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative w-full aspect-video lg:aspect-4/3 overflow-hidden rounded-sm bg-surface-container shadow-sm border border-outline-variant/20"
    >
      <NuxtImg
        class="w-full h-full object-cover map-container"
        alt="Mapa lokace kanceláře – AZ Tower Brno"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzq1xi-LrxBGgAOlUUWsEFi_-Va0u2-g8Pg117jQnZrBQB0-RGR9r7RkieGawy1vegyxxea0UAPVymcqUUndqydpyFhVU2iJ0-WlFscTvipBVNiVcTjo4-1oRxwh-Ps1l_AwnUrVTAB5jH6RMQqY2DZFLl4li3SQIEWWGzvyGjb5cXjXl9h8LYlmjAAcCxNnqGBKkfot4xShX2-wYEhnQd1ldyYJL-495Bl6OlF1JKhJNcGh1Wxu3lfRtzsITdijoIm8aQjWKbGyQ"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:70vw lg:45vw xl:40vw"
      />
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          class="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
        >
          <UIcon
            name="i-material-symbols-location-on"
            class="text-white text-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
