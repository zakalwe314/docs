<template lang="pug">
  div(class="view")
    section
      section-text
        strong(slot="title") Tutorial
        div(slot="desc")
          p This tutorial is designed to help you become fluent in the work-flow utilizing <strong>Vuetify</strong>. This tutorial will cover using the <code>webpack ssr</code> template. If you have not already installed a Vuetify starter template, please do so <router-link to="/quick-start">here</router-link>.
    section
      section-header Create a Portfolio Site
      p(class="section-text") Now that you have <strong>Vuetify</strong> installed, you are ready to make your first site. Make sure you have your local server running. If you do not, from within your project directory, type:
      markup(lang="js")
        |npm run dev
      p(class="section-text") Let's get aquainted with the folder structure which should look like this:
      markup(lang="js")
        | / project
        |   / build
        |   / src
        |   - .babelrc
        |   - .gitignore
        |   - README.md
        |   - index.html
        |   - package.json
        |   - server.js
      div(class="section-text") 
        p The <strong>Build</strong> folder contains all of the webpack specific build configurations for your project. <strong>Src</strong> is where all the development project files reside. Notice that the <code>vuetify ssr</code> template is out-of-the-box configured to use <a href="#!">Vue Router</a>, <a href="#!">Vuex</a>, and the <a href="#!">Vue Server Renderer</a>. This will allow you to make simple or complex applications that are not only fast/efficient, but <strong>SEO</strong> friendly.
      h3 Introduction
      div(class="section-text")
        p Navigate to the <strong>src</strong> folder and open up <code>App.vue</code>. Vuetify is a semantic-focused framework. The code you write should be easy to remember, and easy to manage. To do this, one of the main components of Vuetify is the <code>v-app</code> component. This will allow you to define your application layout without any heavy lifting.
        p Modify your <code>App.vue</code> to contain this markup:
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
      p(class="section-text") Now let's navigate to <code>/src/views</code>. Create a new file called <code>PortfolioView.vue</code>. Inside your new component, put some boilerplate markup.
      markup(lang="xml")
        |&lt;template&gt;
        |   &lt;div&gt;
        |     &lt;section&gt;
        |       &lt;h1&gt;Introduction&lt;/h1&gt;
        |     &lt;/section&gt;
        |   &lt;/div&gt;
        |&lt;/template&gt;
      div(class="section-text")
        p Once complete, save the file and then open <code>/src/router/index.js</code>. This is where the routing for your application resides. For this tutorial, we will only be using one route, but as your application expands, this is where you will define that flow.
        p Import your new view:
      markup(lang="js")
        |import PortfolioView from '../views/PortfolioView.vue'
      p(class="section-text") Then update the routes array to look like this:
      markup(lang="js")
        |routes: [
        |   { path: '/', component: PortfolioView },
        |]
      p(class="section-text") After the routes file is updated, refresh the page and you should see:
      div &lt;img&gt;
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Tutorial')
    },

    preFetch () {
      return {
        title: 'Tutorial',
        meta: {}
      }
    }
  }
</script>