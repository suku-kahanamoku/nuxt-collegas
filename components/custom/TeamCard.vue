<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  websiteLabel?: string;
  photo?: string | null;
  bio: string;
}>();
</script>

<template>
  <UCard
    :ui="{
      body: 'p-stack-md flex flex-col h-full',
      footer: 'pt-stack-sm border-t border-outline-variant/30',
    }"
    class="h-full rounded-md border border-secondary-700/8 transition-[border-color] duration-200 ease-out hover:border-secondary-700/35"
    style="
      background: linear-gradient(160deg, #ffffff 0%, #f7faf8 100%);
      box-shadow:
        0 2px 0 rgba(255, 255, 255, 0.9) inset,
        0 -1px 0 rgba(4, 41, 30, 0.06) inset,
        0 2px 6px rgba(4, 41, 30, 0.04),
        0 8px 20px rgba(4, 41, 30, 0.06);
    "
  >
    <!-- Photo -->
    <div class="aspect-video bg-surface-container overflow-hidden">
      <img
        v-if="photo"
        :src="photo"
        :alt="name"
        class="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-surface-container"
      >
        <span
          class="material-symbols-outlined text-on-surface-variant/30 text-7xl"
          >person</span
        >
      </div>
    </div>

    <!-- Info -->
    <div class="flex flex-col gap-stack-sm flex-1">
      <div>
        <h3 class="text-title-lg font-serif text-primary-800">{{ name }}</h3>
        <p
          class="text-label-caps text-secondary-fixed uppercase tracking-widest font-semibold"
        >
          {{ role }}
        </p>
      </div>

      <p class="text-body-md text-on-surface-variant flex-1">{{ bio }}</p>
    </div>

    <template #footer>
      <div class="flex flex-col gap-1">
        <a
          v-if="email"
          :href="`mailto:${email}`"
          class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-secondary-700 transition-colors"
        >
          <span class="material-symbols-outlined text-base">mail</span>
          {{ email }}
        </a>
        <a
          v-if="phone"
          :href="`tel:${phone.replace(/\s+/g, '')}`"
          class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-secondary-700 transition-colors"
        >
          <span class="material-symbols-outlined text-base">phone</span>
          {{ phone }}
        </a>
        <a
          v-if="website"
          :href="website"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 text-body-md text-secondary-700 hover:underline transition-colors"
        >
          <span class="material-symbols-outlined text-base">open_in_new</span>
          {{ websiteLabel || "Osobní web" }}
        </a>
      </div>
    </template>
  </UCard>
</template>
