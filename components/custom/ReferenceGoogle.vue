<script setup lang="ts">
import references from "~/assets/data/references.json";

const selectedIndex = ref(0);
const selected = computed(() => references[selectedIndex.value]);
</script>
<template>
  <CustomUserPic&desc
    bg="bg-surface-container-low"
    cols="lg"
    img-class="border-12 border-white rounded-md shadow-lg"
    :bg-image="selected?.avatar"
    overlay-class="-bottom-8 -right-8 bg-primary-800 p-6 max-w-xs hidden md:flex flex-col"
  >
    <template #overlay>
      <p class="text-body-lg italic mb-4">"{{ selected?.quote }}"</p>
      <span class="font-label-caps text-secondary-fixed"
        >— {{ selected?.name }},
        {{ selected?.company || selected?.destination }}</span
      >
    </template>

    <span
      class="font-label-caps text-secondary-800 tracking-widest uppercase block mb-4"
      >Ohlasy klientů</span
    >
    <h2 class="text-headline-md md:text-headline-lg text-primary-800 mb-6">
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
      <UPageCard
        v-for="(ref, i) in references"
        :key="ref.name"
        variant="subtle"
        :description="ref.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
        }"
        :class="[
          'w-64 shrink-0',
          selectedIndex === i && 'border-secondary/50 border-[0.5px]',
        ]"
        @click="selectedIndex = i"
      >
        <template #footer>
          <UUser
            :name="ref.name"
            :description="ref.company || ref.destination"
            :avatar="{ src: ref.avatar, alt: ref.name }"
            size="md"
            :ui="{ description: 'line-clamp-1' }"
          />
        </template>
      </UPageCard>
    </UMarquee>

    <div class="flex mt-12 gap-4">
      <a
        href="https://www.google.com/search?sca_esv=2ab59e100257b972&hl=cs-NO&sxsrf=APpeQnsm0nioqT-J9M4bADEBy69s-QLCMQ:1782994150220&q=Collegas+s.r.o.+Recenze&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_6xdsvf21WEZ21B6MUoF9EQ1dcYIyzo2zp5mh5qe-Q7uIizLzA_1-ep5hr3f6UQUU2qnmpQ%3D&uds=AJ5uw1-SFE1ME9tIqnlIOIWp9JjqjWz4o-qH1gNhmG6NPerL4QQG0pNI5BSvynU6hStIVxk2QCI5pi_1tTBdq9JNnOb1Lqg0AnO7f07xdDltVEHZFy2J7mpTZbNM7C0xOaNAWSKRiO8R&sa=X&ved=2ahUKEwioi9fn-rOVAxU4GBAIHdvAPIgQ3PALegQINRAF&biw=1870&bih=1047&dpr=1"
        class="block rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <div class="flex items-center" aria-hidden="true">
                <img
                  class="h-8 w-8"
                  id="tsuid_AStCas2iIPia1fIPj4_asQ8_80"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEVHcEz4gyr/zAcbvFJawxcvhv36yQj9SlAoivY2qo4pjurzzQb/TkL/cyf/lRbfugoPumUMuWj/SUUek+ANumT/SEj/YjYMumgth/z8zgbeuwX4ywn9zgRawhgqifgLpa4ak97/RUH/RUD/Yi4Hqp2axQH8TVn9TFVJwh4vhv/+zwkNu2P/RkP9TFYRvFr/SE3/Rj8KtnQ8wCr/wwkIr4wnvz6MxQUfj+gKorX/WTQVltcIqaL/Szz/Zi4bvUz/tgvlywLRyQEOncb/UDnzzAP/iRxzxAu5yAL/nhP/fSL/qQ6nxwBHcExzB5jrAAAATXRSTlMADv2X/h2YWf4NRLaQ/vgryE6tMGx2GvCuSIru5hxqxNvK7Obw5eQq5v//////////////////////////////////////////////AI9+DTkAAAFtSURBVDiNfZDndoIwGIZDsFCRWsRZW2enICqKuAfu1vu/n+YLK/GUvr/IeR6+hVAcWW21u912S5XRHxH0AU2XpN/XS7dc3S+XMe9blsr//jqbUSPilvUhxLz0sFqBwQlWPIlw/AZjD8YgEphJs9nAWOpFWS7qVGB49edCjVk0V5HjwmbjG8xmn+wlpBEYlyMzNB88GoHymMSfDEyUjZTEkWRQI7EAyhhgPEfvDp80ejEgmSQhjzBwLCUJCsLU+EcgLbCBE1soZEiMD4fEIfNkTcK322jNuyB1XyCHArz14h5BKqGACPe88/XmUul7SKcCp/SAu26aE5qTCRgK+RS8M/BTqsbwxm4+B4U+qlfKU0MxxLm36ZQadf/97p6AD8drrZDLFcSy4yymO2I0w4Fcn4/XvV7PNG3bdhbUiMaqsRwMhxp5ZqkvaBAIdlCC4SSiXyAu0eDXJkXEdciJoCm3l6XbiVrZNMuaWGD+/gVLJ1rkaahhuAAAAABJRU5ErkJggg=="
                  data-iid="AStCas2iIPia1fIPj4_asQ8_101"
                  data-deferred="3"
                  alt=""
                  data-csiid="AStCas2iIPia1fIPj4_asQ8_11"
                  data-atf="1"
                  data-ims="1782721282126"
                  data-iml="1782721282152"
                />
              </div>
            </div>

            <span class="text-sm font-medium text-gray-900">Google</span>

            <div class="ml-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                focusable="false"
                class="h-4 w-4 fill-current text-gray-500"
              >
                <path
                  d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="flex items-center gap-2 text-sm">
            <div
              class="font-semibold text-gray-900"
              aria-label="5 z&nbsp;5"
              role="listitem"
            >
              5/5
            </div>

            <span class="text-gray-600" role="listitem">
              239&nbsp;recenzí
            </span>
          </div>
        </div>
      </a>

      <a
        href="https://www.firmy.cz/detail/13020239-collegas-brno-styrice.html#rating"
        class="block rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <div class="flex items-center" aria-hidden="true">
                <img
                  class="h-8 w-32"
                  id="tsuid_AStCas2iIPia1fIPj4_asQ8_80"
                  src="https://www.seznam.cz/media/img/logo_v2.svg"
                  data-iid="AStCas2iIPia1fIPj4_asQ8_101"
                  data-deferred="3"
                  alt=""
                  data-csiid="AStCas2iIPia1fIPj4_asQ8_11"
                  data-atf="1"
                  data-ims="1782721282126"
                  data-iml="1782721282152"
                />
              </div>
            </div>

            <div class="ml-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                focusable="false"
                class="h-4 w-4 fill-current text-gray-500"
              >
                <path
                  d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="flex items-center gap-2 text-sm">
            <div
              class="font-semibold text-gray-900"
              aria-label="5 z&nbsp;5"
              role="listitem"
            >
              5,0
            </div>

            <span class="text-gray-600" role="listitem">
              162&nbsp;recenzí
            </span>
          </div>
        </div>
      </a>
    </div>
  </CustomUserPic&desc>
</template>
