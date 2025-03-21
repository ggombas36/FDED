// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  build: {
    transpile: ["bootstrap", "jwt-decode"],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  ssr: true,
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        /* your redis configuration */
      },
    },
  },
  plugins: [
    // ...existing plugins...
    '~/plugins/toast.client.js'
  ],
});
