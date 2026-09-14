<script setup lang="ts">
const qrCodeServiceUrl = "https://api.qrserver.com/v1/create-qr-code/";

defineProps<{
  platform: {
    id: string;
    name: string;
    rating: string;
    countLabel: string;
    href: string;
  };
}>();

function getQrCodeSrc(href: string) {
  return `${qrCodeServiceUrl}?size=320x320&data=${encodeURIComponent(href)}`;
}
</script>

<template>
  <a
    :href="platform.href"
    class="block min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-secondary-300 hover:shadow-md"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Hodnocení COLLEGAS na ${platform.name}`"
  >
    <div class="flex items-stretch gap-4">
      <div class="min-w-0 flex-1 self-center space-y-2">
        <div class="flex items-center gap-3">
          <svg
            v-if="platform.id === 'google'"
            class="h-8 w-8 shrink-0"
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
            class="h-8 min-w-0 max-w-32 object-contain"
            src="/img/logo/seznam.svg"
            alt="Seznam.cz"
          />

          <span v-else class="text-sm font-semibold text-gray-900">
            {{ platform.name }}
          </span>

          <span
            v-if="platform.id === 'google'"
            class="text-sm font-semibold text-gray-900"
          >
            {{ platform.name }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-800">
          <strong class="text-sm text-gray-950">
            {{ platform.rating }}
          </strong>
          <span class="text-sm whitespace-nowrap">
            {{ platform.countLabel }}
          </span>
        </div>
      </div>

      <img
        v-if="platform.id === 'google' || platform.id === 'seznam'"
        :src="getQrCodeSrc(platform.href)"
        :alt="`QR kód pro otevření hodnocení na ${platform.name}`"
        class="h-20 w-20 shrink-0 rounded-lg border border-gray-200 bg-white object-contain p-2 sm:h-24 sm:w-24"
        loading="lazy"
      />
    </div>
  </a>
</template>
