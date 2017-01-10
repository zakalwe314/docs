<template lang="pug">
  div(class="view" id="quick-start-view")
    div
      section-def
        dt(slot="title") Getting Started
        dd(slot="desc") Use one of the Vuetify.js Vue CLI packages <em>(based on the official examples)</em> to get your project started in no time. Vuetify.js supports Vue SSR (server-side rendering), SPA (single page application) and standard HTML pages.

    section
      section-header Required Files
      section-text Vuetify.js requires Google's Roboto Font and Material Icons.
      markup(lang="html")
        |&lt;link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css"&gt;

    section
      section-header Manual Install
      section-text To test using Vuetify.js without installing a template from Vue CLI, include the files below into your <code>index</code> file of your application after Vue. Vuetify will automatically install into Vue and be ready to use. This will <strong>also require</strong> the dependency above.
      markup(lang="html")
        |&lt;link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet" type="text/css"&gt;
        |&nbsp;
        |&lt;script src="https://unpkg.com/vuetify/dist/vuetify.min.js"&gt;&lt;/script&gt;

      h6 Existing Projects
      section-text If you are wanting to use Vuetify in an existing project, you can install by using npm or yarn.
      markup(lang="cli")
        |$  npm install vuetify --save-dev
        |&nbsp;
        |$  yarn add vuetify --dev
      section-text Now, in your index.js, import Vuetify and apply the plugin to Vue.
      markup(lang="js")
        |import Vue from 'vue'
        |import Vuetify from 'vuetify'
        |&nbsp;
        |Vue.use(Vuetify)
      section-text Once you have Vuetify installed, add the Vuetify <code>init</code> function to the Vue mounted hook. This is normally in your application <code>App.vue</code>, the main entry-point for your application.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.init()
        |}
      section-text The <code>init</code> function must be called in order for Vuetify.js components to communicate together. This method starts the <strong>bus</strong>, which is used by all components to communicate with each other. This bus is exposed for you to hook into. For additional information, view the <router-link to="/event-bus">Event Bus</router-link> section.
    section
      section-header Vue CLI
      section-text Vuetify has 3 pre-made Vue CLI templates, 2 being forked from <a href="#!">official Vue.js templates</a>. They contain small modifications to help you get started with Vuetify even faster. These packages require <code>vue-cli</code>. For more information on vue-cli, visit the official <a href="https://github.com/vuejs/vue-cli" target="_blank">Github</a> repository.
      v-tabs(id="vue-cli" class="z-depth-1" grow icons)
        v-tabs-tabs
          v-tab-item(ripple v-bind:item="{ href: '#simple', text: 'Simple HTML', icon: 'accessibility' }")
          v-tab-item(ripple v-bind:item="{ href: '#webpack', text: 'Webpack', icon: 'web' }")
          v-tab-item(ripple v-bind:item="{ href: '#webpack-ssr', text: 'Webpack SSR', icon: 'cloud_circle' }")
        
        v-tabs-items
          v-tabs-item(id="simple")
            v-card
              v-card-text
                h4 Simple HTML Quick Start
                p This template is intended for users who want to try out Vue.js and Vuetify.js in the most simple way. It contains a basic index.html with no additional functionality. This is useful for developers who want to easily preview the features of the framework.
                markup(lang="cli")
                  |$  vue init vuetifyjs/simple
          v-tabs-item(id="webpack")
            v-card
              v-card-text
                h4 Webpack Quick Start
                p This template is intended for users who are already familiar with Vue/Webpack. It contains a very simple webpack setup and is targetted at developers creating prototype or basic applications.
                markup(lang="cli")
                  |$  vue init vuetifyjs/webpack
          v-tabs-item(id="webpack-ssr")
            v-card
              v-card-text
                h4 Webpack SSR Quick Start
                p This template is for advanced users looking to utilize the new Vue SSR (server-side rendering). Based off of the structure in the Vue.js 2 <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Hackernews</a> repository. The Vuetify.js SSR template provides next generation functionality for advanced Vue applications.
                markup(lang="cli")
                  |$  vue init vuetifyjs/webpack-ssr
      
      h6 NPM Install
      section-text After the vue-cli installation finishes, <kbd>cd</kbd> into your project directory and type <kbd>npm install</kbd>. Alternatively, if you are using Facebook's recently released <a href="https://yarnpkg.com/" target="_blank">yarn package manager</a>, you can simply type <kbd>yarn</kbd>.

      section-text If you are using the <code>simple</code> vue-cli package, you are ready to go. Open up <code>index.html</code> in any browser. 

      section-text For any other package, type <kbd>npm run dev</kbd> into your console. This will start a <a href="https://nodejs.org/en/" target="_blank">nodejs</a> server locally which can be accessed by navigating to <a href="http://localhost:8080" target="_blank">http://localhost:8080</a> in your browser.
    section
      section-header Theme
      section-text Changing your theme is as easy as updating a few variables in your <code>main.styl</code> file. Navigate to this file, <kbd>src/App.vue</kbd> for webpack and <kbd>src/stylus/main.styl</kbd> for webpack-ssr. The available theme array looks like this:
      markup(lang="stylus")
        |$theme := {
        |   primary: $blue.darken-2
        |   accent: $blue.accent-2
        |   secondary: $grey.darken-3
        |   info: $blue.base
        |   warning: $amber.base
        |   error: $red.base
        |   success: $green.base
        |}
      section-text You can modify any of these properties by typing <code>$theme.attribute</code>. If you want to use a built in color, pick a color from the <router-link to="/css/colors">Colors</router-link> section and update the variable.
    section
      section-header Color Pack
      section-text Vuetify comes pre-built with a Material Design Color Pack (thanks <a href="http://materializecss.com/color.html" target="_blank">Materialize.css</a>) by default. While convenient, this also increases the css export size by ~30kb. This can be disabled in both the webpack and webpack-ssr Vue cli templates.
      div(class="title pt-3 pb-3") Webpack
      section-text Navigate to <kbd>src/App.vue</kbd>. Scroll to the style element and set <code>$color-pack = false</code> above the Vuetify css import.

      div(class="title pt-3 pb-3") Webpack-SSR
      section-text Navigate to <kbd>src/stylus/main.styl</kbd>. At the top of the file, declare <code>$color-pack = false</code>.

    section
      whats-next(route="/server-side-rendering" text="Vue SSR") Now that you have your project setup and ready to go, it's time to start your ssr application with the Vuetify.js <strong>webpack-ssr</strong> template.
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
          title: 'Quick Start | Vuetify.js',
          h1: 'Quick Start',
          description: 'Get started with Vue and Vuetify in no time.',
          keywords: 'vuetify quick start, vuetify templates, server side rendering'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #quick-start-view
    .tabs
      max-width: 800px
</style>