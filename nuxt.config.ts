// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@formkit/auto-animate'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config:{
      plugins: [require('@tailwindcss/forms')],
      extends: {},
    }
  },
  image: {
    inject: true,
  }
})
