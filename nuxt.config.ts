// https://nuxt.com/docs/api/configuration/nuxt-config
const defaultSiteUrl = "https://collegas.netlify.app";
const siteUrl = process.env.FRONTEND_HOST || defaultSiteUrl;

export default defineNuxtConfig({
  compatibilityDate: "2026-05-04",
  ssr: true,

  // @ts-expect-error added by @nuxtjs/seo runtime config extension
  site: {
    url: siteUrl,
    name: "COLLEGA ENTERPRISE",
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/seo",
    "@suku-kahanamoku/auth-module",
    "@suku-kahanamoku/menu-module",
    "@suku-kahanamoku/form-module",
    "@suku-kahanamoku/notify-module",
    "@suku-kahanamoku/ui-module",
    "@suku-kahanamoku/lang-module",
    "@suku-kahanamoku/common-module",
    "@suku-kahanamoku/seo-module",
    "nuxt-gtag",
  ],

  image: {
    domains: ["lh3.googleusercontent.com"],
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },

  css: ["@/assets/css/main.css"],

  ui: {
    prefix: "U",
  },

  runtimeConfig: {
    phpApiBaseUrl: process.env.PHP_API_BASE_URL,
    phpFileRoot: process.env.PHP_FILE_ROOT,
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  nitro: {
    preset:
      process.env.NITRO_PRESET ||
      (process.env.NETLIFY ? "netlify" : "node-server"),
  },

  i18n: {
    defaultLocale: "cs",
    langDir: "locales/",
    locales: [
      {
        code: "cs",
        language: "cs-CZ",
        icon: "emojione:flag-for-czechia",
        file: "./cs.json",
      },
      {
        code: "en",
        language: "en-US",
        icon: "emojione:flag-for-united-kingdom",
        file: "./en.json",
      },
    ],
    experimental: {
      localeDetector: "./localeDetector.ts",
    },
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  pwa: {
    manifest: {
      name: "Collegas",
      short_name: "Collegas",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "@vueuse/core",
        "nuxt-storage",
      ],
    },
  },
});
