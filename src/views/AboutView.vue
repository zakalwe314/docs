<template lang="pug">
  div.view
    section
      section-text
        strong(slot="title") About
        div(slot="desc") 
          p Vuetify is a collection of components for VueJS 2.0. It aims to provide clean, reusable and semantic components that help kick start your application. Vuetify utilizes Google's <strong>Material Design</strong> design pattern, taking cues from other popular frameworks such as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4. This project is an effort to make building websites with VueJS as easy and efficient as possible.

    section
      v-card
        v-card-title(class="green")
          v-card-title-text
            h2(class="white--text") Features
          v-icon(large class="white--text") playlist_add_check
      section-text
        strong(slot="title") Vuetify Frontend Components
        p(slot="desc") The Vuetify core is designed to provide a variety of reusable, plug and play components that fit a variety of scenarios.

      section-text
        strong(slot="title") Semantic Helper Components
        p(slot="desc") Utilizing the power of Vue's functional components, all class based markup that is used to aid main components, such as a <em>card title</em>, are accessible using <code>v-card-title</code> markup, enabling less cluttered files for a miniscule performance cost.

      section-text
        strong(slot="title") Prototyping Made Easy
        p(slot="desc") Vuetify was made from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building your application. With the core philosophy of write less, do more, getting your project off the ground has never been easier.

      section-text
        strong(slot="title") No Sacrifice Mobile Functionality
        p(slot="desc") Every component and style is designed with mobile in mind. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, Vuetify just works.

      section-text
        strong(slot="title") Separation of Concerns
        p(slot="desc") While auto-injection of css from Vue Components is a very useful feature, for large frameworks, it becomes very expensive when you need the ability to easily change values from defined defaults. Vuetify's stylesheet is separate from its components. Using <strong>Stylus</strong>, <strong>BEM</strong> syntax and utilizing <strong>ITCSS</strong> design principles, Vuetify's stylesheet is compact, clean and easy to expand upon.

      section-text
        strong(slot="title") Modern Browser Support and Server Side Rendering
        p(slot="desc") Using functionalities such as flexbox, Vuetify was designed for the modern browser. This allows the best bang for your buck performance to framework size. Out of the box, Vuetify is setup to work with server side rendering so that you can gain all the benefits of seo with all the power of a component framework.

    section
      v-card
        v-card-title(class="purple")
          v-card-title-text
            h2(class="white--text") Ecosystem
          v-icon(large class="white--text") autorenew
      div(class="section-text") In order to expedite the prototyping and development process, Vuetify comes with optional addons.

      v-list
        v-list-item
          v-list-item-icon color_lens
          v-list-item-title Material Design Color Pack

        v-list-item
          v-list-item-icon play_arrow
          v-list-item-title Vuetify Webpack Starter

        v-list-item
          v-list-item-icon fast_forward
          v-list-item-title Vuetify SSR Webpack Starter

        v-list-item
          v-list-item-icon security
          v-list-item-title
            span Vuetify Admin Components <v-chip label class="green white--text">Coming Soon</v-chip>

    section(id="quick")
      v-container(class="container--fluid")
        v-row
          v-col(xs12 md6 lg6)
            v-card(class="orange darken-2 white--text" height="200px")
              v-card-title
                h5(class="white--text") Quick Start
              v-card-text
                p Get up and running fast with Vuetify's Quick Start Guide
              v-card-actions(class="orange darken-3")
                v-btn(large block flat class="white--text") Get Started <v-icon>fast_forward</v-icon>
          v-col(xs12 md6 lg6)
            v-card(class="green darken-2 white--text" height="200px")
              v-card-title
                h5(class="white--text") Tutorial
              v-card-text
                p Walk through the beginning steps of your first application with Vuetify
              v-card-actions(class="green darken-3")
                v-btn(large block flat class="white--text") Start Tutorial <v-icon>help</v-icon>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Vuetify')
    }
  }
</script>

<style lang="stylus">
  #quick
    padding-top: 1rem
    
    .card
      margin: 1rem 0
</style>