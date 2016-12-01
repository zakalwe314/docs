<template lang="pug">
  div.view
    v-card(class="blue lighten-3 white--text version")
      v-card-text
        |v0.6.12
    section
      section-text
        strong(slot="title") About
        div(slot="desc") 
          p Vuetify is a component framework for VueJS 2.0. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify utilizes Google's <strong>Material Design</strong> design pattern, taking cues from other popular frameworks such as <a href="http://materializecss.com/" target="_blank">Materialize.css</a>, <a href="https://getmdl.io/" target="_blank">Material Design Lite</a>, <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a> and <a href="https://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a>.
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
                v-list-item-title Semantic Helper Components
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
                v-list-item-title No Sacrifice Mobile Functionality
                  v-list-item-sub-title All Vuetify components are designed for mobile. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, it just works.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) call_split
                v-list-item-title Separation of Concerns
                  v-list-item-sub-title Vuetify is sculpted with Stylus in a separated stylesheet. With no component specific styles in the component, your application is smaller, easier to change, and easier to build upon.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) open_in_browser
                v-list-item-title Built for Server Side Rendering
                  v-list-item-sub-title Using an internal bus, Vuetify is ready from installation for SSR based application. This bus is exposed and available for hooking into, further customizing your application.

    section
      section-header Ecosystem
      div(class="section-text") Vuetify also comes with a subset of packages to help expedite the prototyping process, add additional functionality and additional components.

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

      whats-next(route="/quick-start" text="Quick Start") Select from 4 premade Vuetify vue-cli templates. These are based off of the official releases, pre-configured for the <strong>vuetify</strong> package.
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Vuetify')
    },

    preFetch () {
      return {
        title: 'Vuetify | Vue JS 2 Components',
        h1: 'Vuetify',
        meta: {
          description: 'Reusable material design components for Vue JS 2.0.',
          keywords: 'vue, vue 2.0, vue js, material design, vue components, material design components'
        }
      }
    }
  }
</script>