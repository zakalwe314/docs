<template lang="pug">
  div(class="view")
    section
      section-text
        strong(slot="title") Overview
        div(slot="desc")
          p This overview is designed to help you become fluent in the work-flow utilizing <strong>Vuetify</strong>. In this section, you will cover the basics of using the <code>webpack ssr</code> template. If you have not already installed the <code>webpack ssr</code> template, please do so <router-link to="/quick-start#webpack-ssr">here</router-link>.
    section
      section-header Introduction
      p(class="section-text") Now that you have <strong>Vuetify</strong> installed, you are ready to make your first site. Make sure you have your local server running. If you do not, from within your project directory, type:
      markup(lang="js")
        |npm run dev
      p(class="section-text") Let's get aquainted with the folder structure which should look like this:
      markup(lang="xml")
        | / project
        |   / build
        |     - setup-dev-server.js
        |     - vue-loader.config.js
        |     - webpack.base.config.js
        |     - webpack.client.config.js
        |     - webpack.server.config.js
        |   / dist
        |   / public
        |   / src
        |     / components
        |     / router
        |     / store
        |     / css
        |     / views
        |     - app.js
        |     - App.vue
        |     - client-entry.js
        |     - critical.js
        |     - index.template.html
        |     - server-entry.js
        |   - .babelrc
        |   - .gitignore
        |   - README.md
        |   - index.html
        |   - package.json
        |   - server.js
      div(class="section-text") 
        p The <strong>Build</strong> folder contains all of the webpack specific build configurations for your project. <strong>Src</strong> is where all the development project files reside. Notice that the <code>vuetify ssr</code> template is out-of-the-box configured to use <a href="#!">Vue Router</a>, <a href="#!">Vuex</a>, and the <a href="#!">Vue Server Renderer</a>. This will allow you to make simple or complex applications that are not only fast/efficient, but <strong>SEO</strong> friendly.
      h3 Application
      div(class="section-text")
        p Navigate to the <strong>src</strong> folder and open up <code>App.vue</code>. Vuetify is a semantic-focused framework. The code you write should be easy to remember, and easy to manage. To do this, one of the main components of Vuetify is the <code>v-app</code> component. This will allow you to define your application layout without any heavy lifting.
        p The markup below tells the application that you have a <code>top navbar</code> and <code>footer</code>. Once defined, the content area will be resized to accommodate. For more information on layouts, navigate to the <router-link to="/layouts">Layouts</router-link> section.
      markup(lang="xml")
        |&lt;v-app top-navbar footer&gt;
        |   &lt;header&gt;
        |     &lt;v-navbar&gt;
        |       &lt;h1&gt;Portfolio&lt;/h1&gt;
        |     &lt;/v-navbar&gt;
        |   &lt;/header&gt;
        |   &lt;main&gt;
        |     &lt;v-content&gt;
        |       &lt;v-container&gt;
        |         &lt;router-view&gt;&lt;/router-view&gt;
        |       &lt;/v-container&gt;
        |     &lt;/v-content&gt;
        |   &lt;/main&gt;
        |   &lt;v-footer&gt;2016&lt;/v-footer&gt;
        |&lt;/v-app&gt;
      h3 Routing
      p(class="section-text") Vuetify SSR uses the official Vue Router for controller application flow. Located in <code>/src/route/index.js</code>, all of your application routes will be defined here.
      markup(lang="js")
        |routes: [
        |   { path: '/', component: HomeView },
        |   { path: '/about', component: AboutView }
        |]
      div(class="section-text")
        p These routes can be accessed be creating a link to the specified path, or by using Vue Router's <code>&lt;router-link&gt;</code> component. For more information, review the official Vue Router <a href="https://router.vuejs.org/en/" target="_blank">documentation</a>.
      h3 State Control
      div(class="section-text")
        p State control is managed by the official Vuex library. This follows Facebooks' Reflux design pattern. Navigate to <code>/src/store/index.js</code>. By default, Vuex is setup to prefetch data for the store before your page is initially rendered. To hook into this functionality, create a <code>preFetch</code> method on your view component.
      markup(lang="js")
        |preFetch (store) {
        |   store.dispatch('GET_USER', 2)
        |}
      div(class="section-text")
        p For more information on State Control and Vuex, view the official <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">documentation</a>.
      whats-next(route="/layouts", text="Layouts")
        p Now that you are more familiar with Vuetify and the Vue resources that it utilizes, take a look at the Layout's section and choose a design for your next application!
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Overview')
    },

    preFetch () {
      return {
        title: 'Overview',
        meta: {}
      }
    }
  }
</script>