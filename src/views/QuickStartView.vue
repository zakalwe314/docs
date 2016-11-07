<template lang="pug">
  div(class="view" id="quick-start")
    section
      section-text
        strong(slot="title") Getting Started
        p(slot="desc") Using one of Vuetify's Vue CLI packages (based on the official examples), get your project kick started in no time.

    section
      section-header Vue CLI Packages
      p(class="section-text") Below are 4 packages forked from the <a href="#!">official VueJS templates</a>. They contain small modifications to help you get started with Vuetify even quicker.
      v-tabs(id="vue-cli")
        v-tabs-container
          v-tab(href="#simple" selected)
            |Simple <br>
            small (Beginner)
          v-tab(href="#webpack-simple")
            |Webpack Simple <br>
            small (Intermediate)
          v-tab(href="#webpack")
            |Webpack <br>
            small (Advanced)
          v-tab(href="#webpack-ssr")
            |Webpack SSR <br>
            small (Expert)
        
        v-tabs-content-container
          v-tab-content(id="simple")
            h4 Simple Quick Start
            p This template is intended for users who want to try out Vue and Vuetify in the most simple way. It contains a basic index.html with no additional fluff. This guide assumes that you have already installed vue-cli. If not, please consult <a href="#!">enter link here</a> for instructions on how to do so.
            markup
              |vue init vuetifyjs.com/simple
          v-tab-content(id="webpack-simple")
            h4 Webpack Simple Quick Start
            p This template is intended for users who are already familiar with Vue/Webpack. This is the basic setup for Vue with Vuetify and the template that is used in the <a href="#!">Vuetify Tutorial</a>. It is recommended for basic prototyping and mockups. This guide assumes that you have already installed vue-cli. If not, please consult <a href="#!">enter link here</a> for instructions on how to do so.
            markup
              |vue init vuetifyjs.com/webpack-simple
          v-tab-content(id="webpack")
            h4 Webpack Quick Start
            p This template is intended for users who are already familiar with Vue/Webpack. This is the basic setup for Vue with Vuetify and the template that is used in the <a href="#!">Vuetify Tutorial</a>. This guide assumes that you have already installed vue-cli. If not, please consult <a href="#!">enter link here</a> for instructions on how to do so.
            markup
              |vue init vuetifyjs.com/webpack
          v-tab-content(id="webpack-ssr")
            h4 Webpack SSR Quick Start
            p This template is intended for users who are already familiar with Vue/Webpack. This is the basic setup for Vue with Vuetify and the template that is used in the <a href="#!">Vuetify Tutorial</a>. This guide assumes that you have already installed vue-cli. If not, please consult <a href="#!">enter link here</a> for instructions on how to do so.
            markup
              |vue init vuetifyjs.com/webpack-ssr
      
      h6 NPM Install
      p Once installed
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Quick Start')
    }
  }
</script>

<style lang="stylus">
  #quick-start
    //
</style>