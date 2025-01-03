// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@stefanobartoletti/nuxt-social-share'
  ],
  css: [],
  colorMode: {
    classSuffix: ''
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  content: {
    documentDriven: true
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false,
      ignore: [
        '/api/_content',
        '/assets/builds'
      ]
    }
  
  },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  socialShare: {
    baseUrl: 'https://www.yoursite.com' // required!
    // other optional module options
  }
})