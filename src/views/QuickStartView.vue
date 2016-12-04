<template lang="pug">
  div(class="view" id="quick-start")
    section
      section-text
        strong(slot="title") Getting Started
        p(slot="desc") Using one of Vuetify's Vue CLI packages (based on the official examples), get your project started in no time. Vuetify supports Vue JS server side rendering, as well as standard spa and html pages.

    section
      section-header Required Files
      p(class="section-text") Vuetify requires Google's Roboto Font and Material Icons.
      markup(lang="html")
        |&lt;link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css"&gt;

    section
      section-header Manual Install
      p(class="section-text") If you would like to test Vuetify without installing a template from Vue CLI, just include the files below into your <code>index</code> file of your application after Vue. Vuetify will automatically install into Vue and be ready to use! This will also require the dependency above.
      markup(lang="html")
        |&lt;link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet" type="text/css"&gt;
        |&lt;script src="https://unpkg.com/vuetify/dist/vuetify.min.js"&gt;&lt;/script&gt;

      h6 Existing Projects
      p(class="section-text") If you are wanting to use Vuetify in an existing project, you can install by using npm or yarn.
      markup(lang="bash")
        |npm install vuetify --save-dev
        |&nbsp;
        |yarn add vuetify --dev
      p(class="section-text") Now, in your index.js, import Vuetify and apply the plugin to Vue.
      markup(lang="js")
        |import Vue from 'vue'
        |import Vuetify from 'vuetify'
        |&nbsp;
        |Vue.use(Vuetify)
      p(class="section-text") Once you have Vuetify installed, in your main App.vue file, add the Vuetify <code>init</code> function to the Vue mounted hook.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.init()
        |}

    section
      section-header Vue CLI
      p(class="section-text") Below are 3 packages forked from the <a href="#!">official VueJS templates</a>. They contain small modifications to help you get started with <strong class="primary--text">Vuetify</strong> even faster. These packages require <code>vue-cli</code>. For more information on vue-cli, visit the official <a href="https://github.com/vuejs/vue-cli" target="_blank">Github</a> repository.
      v-tabs(id="vue-cli")
        v-tabs-tabs
          v-tab(href="#simple" selected)
            |Simple HTML <br>
            small (Beginner)
          v-tab(href="#webpack")
            |Webpack <br>
            small (Intermediate)
          v-tab(href="#webpack-ssr")
            |Webpack SSR <br>
            small (Advanced)
        
        v-tabs-items
          v-tabs-item(id="simple")
            h4 Simple HTML Quick Start
            p This template is intended for users who want to try out Vue and Vuetify in the most simple way. It contains a basic index.html with no additional functionality. 
            markup(lang="bash")
              |vue init vuetifyjs/simple
          v-tabs-item(id="webpack")
            h4 Webpack Quick Start
            p This template is intended for users who are already familiar with Vue/Webpack. This is a basic setup for Vue with Vuetify.. It is recommended for basic prototyping and mockups.
            markup(lang="bash")
              |vue init vuetifyjs/webpack
          v-tabs-item(id="webpack-ssr")
            h4 Webpack SSR Quick Start
            p This template is for advanced users looking to utilize the new Vue Server Renderer. Based off of structure setup in the VueJS 2 <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Hackernews</a> repository, the Vuetify SSR template provides next generation functionality for advanced web applications.
            markup(lang="bash")
              |vue init vuetifyjs/webpack-ssr
      
      h6 NPM Install
      p(class="section-text") After the vue-cli installation finishes:
      markup(code="bash")
        |cd &lt;package-name&gt;
        |npm install
      p Or alernatively, using Facebook's recently released <a href="https://yarnpkg.com/" target="_blank">yarn package manager</a>.
      markup(lang="bash")
        |cd &lt;package-name&gt;
        |yarn
      p(class="section-text") If you are using the <code>simple</code> vue-cli package, you are ready to go. Simply open up <code>index.html</code> in any browser. For any other package, type:
      markup(lang="bash")
        |npm run dev
      p(class="section-text") into your console. This will start a <a href="https://nodejs.org/en/" target="_blank">nodejs</a> server locally which can be accessed by navigating to <a href="http://localhost:8080" target="_blank">http://localhost:8080</a> in your browser.
    section
      whats-next(route="/overview" text="Overview") Now that you have your project setup and ready to go, let's go over application structure of the <strong>webpack ssr</strong> template.
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
          title: 'Quick Start | Vuetify',
          h1: 'Quick Start',
          description: 'Get started with Vue and Vuetify in no time.',
          keywords: 'vuetify quick start, vuetify templates, server side rendering'
        }
      }
    }
  }
</script>