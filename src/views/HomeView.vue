<template lang="pug">
  div.view
    section
      section-header Welcome
      section-text(v-html="intro")
    section
      section-header Quick Start
      section-text Install vuetify from <strong>npm</strong>, <code>npm install vuetify</code>. Once installed, go to your main js entry point and import/use the module.
        v-card(class="grey lighten-3")
          v-card-text
            strong import Vue from 'vue' <br>
            strong import Vuetify from 'vuetify' <br>
            strong Vue.use(Vuetify)
    section
      section-header About
      section-text(v-html="about")
    section
      section-header Ecosystem
      section-text In order to expedite the development process, Vuetify comes with multiple supplementary features to get the ball rolling.
      v-container
        v-row
          v-col(xs12)
            v-list
              v-list-item
                v-list-item-icon dashboard
                v-list-item-title
                  span
                    | Vuetify Admin Template 
                    v-chip(label, class="green white--text")
                      | Soon
                      v-icon(right) error_outline
              v-list-item
                v-list-item-icon color_lens
                v-list-item-title
                  span
                    | Vuetify Frontend Template 
                    v-chip(label, class="green white--text")
                      | Soon
                      v-icon(right) error_outline
              v-list-item
                v-list-item-icon play_arrow
                v-list-item-title Vuetify Webpack Starter
              v-list-item
                v-list-item-icon fast_forward
                v-list-item-title Vuetify SSR Webpack Starter
                
</template>

<script>
  export default {
    data () {
      return {
        intro: `Vuetify is a collection of components for VueJS 2.0. It aims to provide clean, semantic components that help kick start you application. Vuetify utilizes Google's <strong>Material Design</strong> design pattern, taking cues from other popular frameworks such as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4.`,
        about: `
          Vuetify is an effort to make building applications in VueJS as easy as possible. Making use of Vue 2.0's functional components, Vuetify brings semantics back to web development, allowing the developer to focus on putting the pieces together, instead of having to remember or keep track of an endless stream of css classes.
        `
      }
    },

    mounted () {
      this.$emit('view', 'Intro')
    }
  }
</script>