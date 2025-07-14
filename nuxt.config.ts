// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NUXT_DEVTOOLS === 'true' },
  sourcemap: {
    server: process.env.NUXT_SOURCEMAP === 'true',
    client: process.env.NUXT_SOURCEMAP === 'true'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts'
  ]
})