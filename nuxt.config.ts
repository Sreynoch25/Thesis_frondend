// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/iconify.ts', 
    '~/plugins/i18n.config.ts',
  ],
  googleFonts: {
    outputDir: 'assets/fonts/google',
    fontsDir: 'assets/fonts/google',
    base64: true,
    families: {
      Roboto: true,
      Battambang: [400, 500, 600, 700, 800, 900],
    },
    download: true,
    display: 'swap',
    preload: true,
    useStylesheet: true,
  },

})