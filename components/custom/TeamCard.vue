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
  <div class="border border-outline-variant/30 bg-surface rounded-md flex flex-col shadow-[0_1px_2px_rgba(4,41,30,0.05),0_8px_24px_rgba(4,41,30,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-secondary-700/35 hover:shadow-[0_2px_6px_rgba(4,41,30,0.08),0_16px_36px_rgba(4,41,30,0.11)]">

    <!-- Photo -->
    <div class="aspect-video bg-surface-container overflow-hidden">
      <img
        v-if="photo"
        :src="photo"
        :alt="name"
        class="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-surface-container">
        <span class="material-symbols-outlined text-on-surface-variant/30" style="font-size: 4rem;">person</span>
      </div>
    </div>

    <!-- Info -->
    <div class="p-stack-md flex flex-col gap-stack-sm flex-1">
      <div>
        <h3 class="text-title-lg font-serif text-primary-900">{{ name }}</h3>
        <p class="text-label-caps text-secondary-700 uppercase tracking-widest font-semibold">{{ role }}</p>
      </div>

      <p class="text-body-md text-on-surface-variant flex-1">{{ bio }}</p>

      <!-- Contact links -->
      <div class="flex flex-col gap-1 pt-stack-sm border-t border-outline-variant/30">
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
    </div>

  </div>
</template>
