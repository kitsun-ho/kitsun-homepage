export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      title: 'Kitsun — 個人首頁與專案',
      meta: [
        { name: 'theme-color', content: '#f4f1e9' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2026-06-30',
  typescript: {
    strict: true,
  },
})
