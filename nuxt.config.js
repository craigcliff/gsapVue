const pkg = require('./package')

module.exports = {
    mode: 'universal',

    // or
    transition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter(el) {
            console.log('Before enter...');
        }
    },


    /*
     ** Headers of the page
     */
    head: {

        title: pkg.name,
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js' },
            { src: 'https://www.greensock.com/js/src/utils/SplitText.min.js' }
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },


    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3B8070' },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~plugins/vue-scrollto.js'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'
    ],

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        },

        vendor: [
            'gsap'
        ]
    }
}