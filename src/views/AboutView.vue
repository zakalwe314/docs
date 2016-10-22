<template lang="pug">
  div.view
    section
      section-text
        strong(slot="title") About
        p(slot="desc") Vuetify is a collection of components for VueJS 2.0. It aims to provide clean, reusable and semantic components that help kick start your application. Vuetify utilizes Google's <strong>Material Design</strong> design pattern, taking cues from other popular frameworks such as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4. This project is an effort to make building websites in VueJS as easy as possible. <strong class="green--text">VueJS</strong> 2.0's new functional component option allows for Vuetify to provide numerous clean and semantic helper components, allowing the developer to focus on putting the pieces together, instead of having to remember or keep track of an endless stream of css classes.

    section
      v-card
        v-card-title(class="green")
          v-card-title-text
            h2(class="white--text") Features
          v-icon(
            large
            class="white--text"
          ) playlist_add_check
      section-text
        strong(slot="title") Vuetify Frontend Components
        p(slot="desc") The Vuetify core is designed to provide a variety of reusable, plug and play components that fit a variety of scenarios.

      section-text
        strong(slot="title") Semantic Helper Components
        p(slot="desc") With the power of functional components, all class based markup that is used to aid main components, such as a <em>card title</em>, are accessible using <code>v-card-title</code> markup, enabling less cluttered files for a miniscule performance cost.

      section-text
        strong(slot="title") Prototyping Made Easy
        div(slot="desc") 
          p Vuetify was made from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building an application. Want a dropdown? Apply the <code>v-dropdown</code> directive to any element with a corresponding <code>v-dropdown</code> element. Need to put together a quick skeleton layout for a page? Use the <code>v-app</code> component to easily position your <code>v-navbar</code> and <code>v-sidebar</code>.

          p No matter what your use case, Vuetify allows you to get there quicker.

      section-text
        strong(slot="title") No Sacrifice Mobile Functionality
        p(slot="desc") Every component and style is designed with mobile in mind. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, Vuetify just works.

      section-text
        strong(slot="title") Separation of Concerns
        p(slot="desc") While auto-injection of css from Vue Components is a very useful feature, for large frameworks, it becomes very expensive when you need the ability to easily change values from defined defaults. Vuetify's stylesheet is separate from the components. Using <strong>Stylus</strong>, <strong>BEM</strong> syntax and utilizing <strong>ITCSS</strong> design principles, Vuetify styles were created with expandability in mind.

      section-text
        strong(slot="title") Modern Browser Support
        p(slot="desc") Using functionalities such as flexbox, Vuetify was designed for the modern browser. This allows the best bang for your buck performance to framework size.
    section
      v-card
        v-card-title(class="purple")
          v-card-title-text
            h2(class="white--text") Ecosystem
          v-icon(
            large
            class="white--text"
          ) autorenew
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
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Vuetify')
    }
  }
</script>