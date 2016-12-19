<template lang="pug">
  div(class="view")
    section
      section-def
        strong(slot="title") About
        div(slot="desc") 
          p Vuetify is a component framework for Vue.js 2. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify utilizes Google's <strong><a href="https://material.io/" target="_blank">Material Design</a></strong> design pattern, taking cues from other popular frameworks such as <a href="http://materializecss.com/" target="_blank">Materialize.css</a>, <a href="https://getmdl.io/" target="_blank">Material Design Lite</a>, <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a> and <a href="https://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a>.
    section
      section-header Features
      v-container(fluid)
        v-row
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) widgets
                v-list-item-title Vuetify Frontend Components
                  v-list-item-sub-title The Vuetify core is designed to provide a variety of reusable, plug and play components that fit any project spec.
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) extension
                v-list-item-title Vue Semantic Components
                  v-list-item-sub-title Utilizing the power of Vue's functional components, all class based markup that is used to aid main components, such as a <em>card title</em>, are accessible using <code>v-card-title</code>. This added benefit enables less cluttering of files for a miniscule performance cost.
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) view_quilt
                v-list-item-title Prototyping Made Easy
                  v-list-item-sub-title Vuetify was built from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building your application. With the core philosophy of write less, do more, getting your project off the ground has never been easier.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) phone_android
                v-list-item-title Made for Mobile
                  v-list-item-sub-title All Vuetify components are designed for mobile. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, it just works.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) add_to_queue
                v-list-item-title Premade Vue CLI Templates
                  v-list-item-sub-title Vuetify comes with 3 Vue CLI templates, preconfigured, and ready to go. <router-link to="/quick-start#simple">Simple HTML</router-link>, <router-link to="/quick-start#webpack">Webpack</router-link>, and <router-link to="/quick-start#webpack-ssr">Webpack SSR</router-link> <em>(Server Side Rendering)</em>.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) open_in_browser
                v-list-item-title Built with Vue Server Side Rendering
                  v-list-item-sub-title Using an internal bus, Vuetify is ready from installation for SSR based applications. This bus is also exposed, making it available for hooking into, further customizing your application.

    section
      section-header Ecosystem
      section-text Vuetify also comes with a subset of packages to help expedite the prototyping process, add additional functionality and additional components.

      v-list
        v-list-item
          v-list-item-icon color_lens
          v-list-item-title Material Design Color Pack

        v-list-item
          v-list-item-icon play_arrow
          v-list-item-title Vue CLI Templates including SSR

        v-list-item
          v-list-item-icon security
          v-list-item-title
            span Vuetify Admin Components <v-chip label class="green white--text">Coming Soon</v-chip>

    section
      section-header Roadmap
      section-text With the baseline complete, some of the goals of this project before launch:
      ul
        li Continued fleshing out of the Documentation
        li Adding more depth to existing components
        li Create a guide for taking Vuetify SSR to production
        li Add Accessiblity support
        li Complete unreleased components, i.e. (Progress, Tables)
        li Bug fixing and support
    section
      whats-next(route="/quick-start" text="Quick Start") Select from 3 premade Vuetify vue-cli templates. These packages are based off of the official releases, pre-configured for the <strong>vuetify</strong> package.
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
          title: 'Vue.js 2 Component Framework | Vuetify',
          h1: 'Vuetify',
          description: 'Reusable semantic component framework for Vue.js 2.',
          keywords: 'vue, vue 2, vue js, material design, vue components, material design components'
        }
      }
    }
  }
</script>
