// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@formkit/auto-animate', '@nuxtjs/google-fonts', 'nuxt-icon-tw', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config:{
      plugins: [require('@tailwindcss/forms')],
      extends: {},
    }
  },
  image: {
    inject: true,
  },
  // googleFonts: {
  //   angerine: true,
  // }
})
