<template lang="pug">
  div(class="view")
    section-def
      dt(slot="title") About
      dd(slot="desc") 
        p Vuetify.js is a component framework for Vue.js 2. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify.js utilizes Google's <strong><a href="https://material.io/" target="_blank">Material Design</a></strong> design pattern, taking cues from other popular frameworks such as <a href="http://materializecss.com/" target="_blank">Materialize.css</a>, <a href="https://getmdl.io/" target="_blank">Material Design Lite</a>, <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a> and <a href="https://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a>.
    section
      section-header Features
      v-container(fluid)
        v-row
          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) widgets
                v-list-item-title
                  span Vuetify.js Frontend Components
                  v-list-item-sub-title The Vuetify.js core is designed to provide a variety of reusable, plug and play components that fit any project spec.
          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) extension
                v-list-item-title
                  span Vue Semantic Components
                  v-list-item-sub-title Utilizing the power of Vue.js 2 functional components, all class based markup that is used to aid main components, such as a <em>card title</em>, are accessible using <code>v-card-title</code>. This added benefit enables less cluttering of files for a miniscule performance cost.
          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) view_quilt
                v-list-item-title
                  span Prototyping Made Easy
                  v-list-item-sub-title Vuetify.js was built from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building your application. With the core philosophy of write less, do more, getting your project off the ground has never been easier.

          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) phone_android
                v-list-item-title
                  span Made for Mobile
                  v-list-item-sub-title All Vuetify.js components are designed for mobile. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, it just works.

          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) add_to_queue
                v-list-item-title
                  span Premade Vue CLI Templates
                  v-list-item-sub-title Vuetify.js comes with 3 Vue CLI templates, pre-configured, and ready to go. <router-link to="/quick-start#simple">Simple HTML</router-link>, <router-link to="/quick-start#webpack">Webpack</router-link>, and <router-link to="/quick-start#webpack-ssr">Webpack SSR</router-link> <em>(Server Side Rendering)</em>.

          v-col(xs12 sm12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) open_in_browser
                v-list-item-title
                  span Built with Vue.js Server Side Rendering
                  v-list-item-sub-title Using an internal bus, Vuetify.js is ready from installation for SSR based applications. This bus is also exposed, making it available for hooking into, further customizing your application.

    section
      section-header Ecosystem
      section-text Vuetify.js also comes with a subset of packages to help expedite the prototyping process, add additional functionality and additional components.

      v-list
        v-list-item
          v-list-item-icon color_lens
          v-list-item-title Material Design Color Pack

        v-list-item
          v-list-item-icon play_arrow
          v-list-item-title Vue.js CLI Templates including SSR

        v-list-item
          v-list-item-icon security
          v-list-item-title
            span Vuetify.js Admin Components <v-chip label class="green white--text">Coming Soon</v-chip>

    section
      section-header Roadmap
      section-text For information regarding future plans, please visit the official <strong>Roadmap</strong> on <a href="https://github.com/vuetifyjs/vuetify/projects/1" target="_blank">Github</a>.
    section
      section-header Sponsors
      section-text Vuetify.js is proudly sponsored by:
      v-container(fluid)
        v-row
          v-col(xs12)
            a(href="https://www.browserstack.com" target="_blank")
              img(src="~public/doc-images/browser-stack.svg" height="35" alt="browser-stack")
    section
      whats-next(route="/quick-start" text="Quick Start") Select from 3 premade Vuetify vue-cli templates. These packages are based off of the official releases, pre-configured for the <strong>Vuetify.js</strong> package.
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Vue.js 2 Component Framework | Vuetify.js',
          h1: 'Vuetify.js',
          description: 'Vuetify.js is a reusable semantic component framework for Vue.js 2. It aims to provide clean, semantic and reusable components.',
          keywords: 'vue, vue 2, vue js, vue.js, material design, vue components, material design components, vuetify, vuetify.js'
        }
      }
    }
  }
</script>
