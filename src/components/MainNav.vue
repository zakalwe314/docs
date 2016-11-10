<template lang="pug">
  header
    v-navbar
      div(class="navbar__side-icon hidden-sm")
        a(href="#!" v-side-bar:mainsidebar="")
          v-icon reorder
      div(class="navbar__side--title")
        h1(v-text="title")
        span(v-html="subTitle")
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
            this.subTitle = 'Vue components built semmantically&mdash;easy to remember, easy to use'
          break
          case this.match('directives'):
            this.subTitle = 'Vue directives designed to enchance user experience'
          break
          case this.match('functions'):
            this.subTitle = 'Built in functions to customize your user\'s experience'
          break
          case this.match('quick-start'):
            this.subTitle = 'Kickstart your project with a premade Vue template'
          break
          case this.match('css'):
            this.subTitle = 'CSS classes to help reduce the need for manual class declaration'
          break
          case this.match('layouts'):
            this.subTitle = 'Setup the perfect layout in a flash'
          break
          default:
            this.subTitle = 'Learn about the Vuetify framework'
          break
        }
      },

      match (str) {
        return this.$route.path.match(str) !== null
      }
    }
  }
</script>