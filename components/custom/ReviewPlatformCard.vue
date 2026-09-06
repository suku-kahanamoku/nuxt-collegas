<script setup lang="ts">
defineProps<{
  platform: {
    id: string;
    name: string;
    rating: string;
    countLabel: string;
    href: string;
  };
  featured?: boolean;
}>();
</script>

<template>
  <a
    :href="platform.href"
    :class="[
      'block min-w-0 rounded-lg border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:border-secondary-300 hover:shadow-md',
      featured ? 'p-6 md:p-8' : 'flex-1 p-4',
    ]"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Hodnocení COLLEGAS na ${platform.name}`"
  >
    <div :class="['flex flex-col', featured ? 'gap-5' : 'gap-2']">
      <div class="flex items-center gap-3">
        <svg
          v-if="platform.id === 'google'"
          :class="featured ? 'h-10 w-10' : 'h-8 w-8'"
          class="shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z"
          />
          <path
            fill="#34A853"
            d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z"
          />
          <path
            fill="#FBBC05"
            d="M6.5 14.1a6 6 0 0 1 0-4.2V7.3H3.2a10 10 0 0 0 0 9.4l3.3-2.6Z"
          />
          <path
            fill="#EA4335"
            d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.2 7.3l3.3 2.6A5.8 5.8 0 0 1 12 5.9Z"
          />
        </svg>

        <NuxtImg
          v-else-if="platform.id === 'seznam'"
          :class="featured ? 'h-10 max-w-40' : 'h-8 max-w-32'"
          class="min-w-0 object-contain"
          src="/img/logo/seznam.svg"
          alt="Seznam.cz"
        />

        <span
          v-else
          :class="featured ? 'text-title-lg' : 'text-sm'"
          class="font-semibold text-gray-900"
        >
          {{ platform.name }}
        </span>

        <span
          v-if="platform.id === 'google'"
          :class="featured ? 'text-title-md' : 'text-sm'"
          class="font-semibold text-gray-900"
        >
          {{ platform.name }}
        </span>

        <UIcon
          name="i-lucide-external-link"
          class="ml-auto size-5 shrink-0 text-gray-500"
        />
      </div>

      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-800">
        <strong
          :class="featured ? 'text-headline-md' : 'text-sm'"
          class="text-gray-950"
        >
          {{ platform.rating }}
        </strong>
        <span :class="featured ? 'text-body-md' : 'text-sm whitespace-nowrap'">
          {{ platform.countLabel }}
        </span>
      </div>
    </div>
  </a>
</template>
