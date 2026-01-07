// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  app: {
    head: {
      title: 'Basically Brogramming',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "I'm a dude. He's a dude. She's a dude. We're all dudes. HEY!",
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Global CSS
  css: ['~/assets/global.css'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vite-pwa/nuxt',
  ],

  // Content module configuration
  content: {},

  // PWA configuration
  pwa: {
    manifest: {
      name: 'Basically Brogramming',
      short_name: 'BasicBrogramming',
      description: "I'm a dude. He's a dude. She's a dude. We're all dudes. HEY!",
    },
  },

  // Development tools
  devtools: { enabled: true },

  // Nitro configuration for static generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  compatibilityDate: '2025-01-07',
})
