<template lang="pug">
  div(class="view" id="quick-start")
    section
      section-text
        strong(slot="title") Getting Started
        p(slot="desc") Using one of Vuetify's Vue CLI packages (based on the official examples), get your project started in no time.

    section
      section-header Required Files
      p(class="section-text") Vuetify only has one dependency, Google's Roboto Font and Material Icons.
      markup
        |&lt;link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css"&gt;

    section
      section-header Global Install
      p(class="section-text") To use <strong>Vuetify</strong> globally, just include the file into your <code>index</code> file of your application after Vue. Vuetify will automatically install into Vue and be ready to use! This will require the dependency above, as well as:
      markup
        |&lt;link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet" type="text/css"&gt;
        |&lt;script src="https://unpkg.com/vuetify/dist/vuetify.min.js"&gt;&lt;/script&gt;

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
            markup
              |vue init vuetifyjs/simple
          v-tabs-item(id="webpack")
            h4 Webpack Quick Start
            p This template is intended for users who are already familiar with Vue/Webpack. This is a basic setup for Vue with Vuetify.. It is recommended for basic prototyping and mockups.
            markup
              |vue init vuetifyjs/webpack
          v-tabs-item(id="webpack-ssr")
            h4 Webpack SSR Quick Start
            p This template is for advanced users looking to utilize the new Vue Server Renderer. Based off of structure setup in the VueJS 2 <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Hackernews</a> repository, the Vuetify SSR template provides next generation functionality for advanced web applications.
            markup
              |vue init vuetifyjs/webpack-ssr
      
      h4 NPM Install
      p(class="section-text") After the vue-cli installation finishes:
      markup(lang="js")
        |cd &lt;package-name&gt;
        |npm install
      p Or alernatively, using Facebook's recently released <a href="#!">yarn package manager</a>.
      markup(lang="js")
        |cd &lt;package-name&gt;
        |yarn
      p(class="section-text") If you are using the <code>simple</code> vue-cli package, you are ready to go. Simply open up <code>index.html</code> in any browser. For any other package, type:
      markup(lang="js")
        |npm run dev
      p(class="section-text") into your console. This will start a <a href="#!">nodejs</a> server locally which can be accessed by navigating to <a href="http://localhost:8080" target="_blank">http://localhost:8080</a> in your browser.
    section
      whats-next(route="/overview" text="Overview") Now that you have your project setup and ready to go, let's go over application structure of the <strong>webpack ssr</strong> template.
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
    .markup
      word-break: break-all
</style>