<template lang="pug">
  header
    v-navbar
      div(class="navbar__side-icon hidden-md-and-up")
        a(href="#!" v-side-bar:mainsidebar="")
          v-icon reorder
      div(class="navbar__side-title")
        h1(class="text-xs-center text-md-left" v-text="title")
        span(class="hidden-md-and-down" v-html="subTitle")
      div(class="navbar__links")
        a(href="https://github.com/vuetifyjs/vuetify" target="_blank")
          img(src="~public/github.png")
</template>

<script>
  export default {
    data () {
      return {
        subTitle: ''
      }
    },

    props: {
      title: String
    },

    watch: {
      title () {
        this.determineSubTitle()
      }
    },

    mounted () {
      this.determineSubTitle()
    },

    methods: {
      determineSubTitle () {
        switch (true) {
          case this.match('components'):
            this.subTitle = 'Vue components built semantically&mdash;easy to use, easy to remember'
          break
          case this.match('directives'):
            this.subTitle = 'Vue directives designed to enchance user experience'
          break
          case this.match('functions'):
            this.subTitle = 'Built in functions to customize your user experience'
          break
          case this.match('quick-start'):
            this.subTitle = 'Vue premade templates&mdash;out of the box, ready to go'
          break
          case this.match('overview'):
            this.subTitle = 'Learn how to use the Vuetify framework in your first project'
          break
          case this.match('css'):
            this.subTitle = 'CSS classes to help reduce the need for manual class declaration'
          break
          case this.match('layouts'):
            this.subTitle = 'Select a layout for your next application'
          break
          case this.match('bus'):
            this.subTitle = 'Learn how Vuetify communicates throughout an application'
          break
          default:
            this.subTitle = 'Learn about the features of the Vuetify Framework'
          break
        }
      },

      match (str) {
        return this.$route.path.match(str) !== null
      }
    }
  }
</script>