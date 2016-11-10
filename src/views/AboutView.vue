<template lang="pug">
  div.view
    section
      section-text
        strong(slot="title") About
        div(slot="desc") 
          p Vuetify is a collection of components for VueJS 2.0. It aims to provide clean, reusable and semantic components that help kick start your application. Vuetify utilizes Google's <strong>Material Design</strong> design pattern, taking cues from other popular frameworks such as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4. This project is an effort to make building websites with VueJS as easy and efficient as possible.

    section
      section-header Features
      v-container(class="container--fluid")
        v-row
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) widgets
                v-list-item-title Vuetify Frontend Components
                  v-list-item-sub-title The Vuetify core is designed to provide a variety of reusable, plug and play components that fit a variety of scenarios.
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) extension
                v-list-item-title Semantic Helper Components
                  v-list-item-sub-title Utilizing the power of Vue's functional components, all class based markup that is used to aid main components, such as a <em>card title</em>, are accessible using <code>v-card-title</code> markup, enabling less cluttered files for a miniscule performance cost.
          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) view_quilt
                v-list-item-title Prototyping Made Easy
                  v-list-item-sub-title Vuetify was made from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building your application. With the core philosophy of write less, do more, getting your project off the ground has never been easier.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) phone_android
                v-list-item-title No Sacrifice Mobile Functionality
                  v-list-item-sub-title Every component and style is designed with mobile in mind. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, Vuetify just works.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) call_split
                v-list-item-title Separation of Concerns
                  v-list-item-sub-title While auto-injection of css from Vue Components is a very useful feature, for large frameworks, it becomes very expensive when you need the ability to easily change values from defined defaults. Vuetify's stylesheet is separate from its components. Using <strong>Stylus</strong>, <strong>BEM</strong> syntax and utilizing <strong>ITCSS</strong> design principles, Vuetify's stylesheet is compact, clean and easy to expand upon.

          v-col(xs12 md6 lg6)
            v-list
              v-list-item
                v-list-item-avatar(class="primary" x-large) open_in_browser
                v-list-item-title Modern Browser Support and Server Side Rendering
                  v-list-item-sub-title Using modern web technologies such as flexbox, Vuetify was designed for the future. This allows the best bang for your buck performance to framework size. Vuetify was built on top of server side renderering. That means, besides working with normal client processed single page applications, your application is out of the box ready for whatever task you have.

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
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Vuetify')
    },

    preFetch () {
      return {
        title: 'Vuetify',
        meta: {}
      }
    }
  }
</script>

<style lang="stylus">
  #quick
    padding-top: 1rem
    
    .card
      margin: 1rem 0
</style>