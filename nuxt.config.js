export default {

  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  axios: {
    baseURL: 'https://devrich.herokuapp.com/api/',
    credentials: false,
    proxyHeaders: false
  },


  head: {
    title: 'richurl',

  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],



  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',

    '@nuxtjs/robots'

  ],


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'RichURL',
      description: 'Create Rich Deep Links for free',
      useWebmanifestExtension: false,
      short_name: 'RichURL',
      lang: 'en',
      share_target: {
        action: '/',
        method: 'GET',
        params: {

          text: 'videolink'
        }
      }

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
