<script setup lang="ts">
const props = defineProps<{
  name: string;
  role: string;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  websiteLabel?: string;
  photo?: string | null;
  bio: string;
}>();

const isInternal = computed(() => !!props.website?.startsWith("/"));
</script>

<template>
  <div
    class="group h-full flex flex-col overflow-hidden rounded-2xl border border-primary-100 hover:border-secondary-300 transition-all duration-300"
    style="
      background: linear-gradient(160deg, #ffffff 0%, #f0f7f4 100%);
      box-shadow:
        0 1px 3px rgba(4, 41, 30, 0.05),
        0 6px 24px rgba(4, 41, 30, 0.09);
    "
  >
    <!-- Photo — portrait -->
    <div
      class="relative overflow-hidden bg-primary-50"
      style="aspect-ratio: 3/4"
    >
      <NuxtImg
        v-if="photo"
        :src="photo"
        :alt="name"
        class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw xl:25vw"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-primary-50"
      >
        <UIcon
          name="i-material-symbols-person"
          class="size-20 text-primary-200"
        />
      </div>

      <!-- Dark gradient overlay at bottom -->
      <div
        class="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary-950/90 to-transparent pointer-events-none"
      />

      <!-- Role badge on photo -->
      <p
        class="absolute bottom-4 left-5 right-5 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary-400"
      >
        {{ role }}
      </p>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-1 px-6 py-5 gap-4">
      <!-- Accent line + name -->
      <div>
        <div class="w-8 h-px bg-secondary-400 mb-3" />
        <h3
          class="text-title-md md:text-title-lg font-serif font-bold text-primary-800 leading-snug"
        >
          {{ name }}
        </h3>
      </div>

      <p class="text-sm text-on-surface-variant leading-relaxed flex-1 whitespace-break-spaces">
        {{ bio }}
      </p>

      <!-- Contacts -->
      <div
        v-if="phone || email"
        class="flex flex-col gap-1.5 pt-3 border-t border-primary-100"
      >
        <a
          v-if="phone"
          :href="`tel:${phone.replace(/\s+/g, '')}`"
          class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary-800 transition-colors"
        >
          <UIcon
            name="mdi:phone"
            class="size-3.5 shrink-0 text-secondary-500"
          />
          {{ phone }}
        </a>
        <a
          v-if="email"
          :href="`mailto:${email}`"
          class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary-800 transition-colors"
        >
          <UIcon
            name="i-material-symbols-mail"
            class="size-3.5 shrink-0 text-secondary-500"
          />
          {{ email }}
        </a>
      </div>

      <!-- Profile CTA -->
      <NuxtLink
        v-if="website && isInternal"
        :to="website"
        class="inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-all duration-200 group-hover:gap-3"
      >
        {{ websiteLabel || "Zobrazit profil" }}
        <UIcon name="i-material-symbols-arrow-forward" class="text-base" />
      </NuxtLink>
      <a
        v-else-if="website"
        :href="website"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-colors"
      >
        {{ websiteLabel || "Osobní web" }}
        <UIcon name="i-material-symbols-open-in-new" class="text-base" />
      </a>
    </div>
  </div>
</template>
