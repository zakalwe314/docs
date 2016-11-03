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

<style lang="stylus" scoped>
  .navbar
    align-items: center
    min-height: 15rem
    color: #fff
    padding: 2rem 0
    
    &__side-icon
      flex-grow: 1
      margin: 0 1rem
    
    &__side--title
      display: flex
      align-items: space-between
      justify-content: space-between
      flex-direction: column
      margin: 0 1rem
      
      span
        font-weight: 200
        font-size: 2rem
        max-width: 600px
        line-height: 2rem
    
    h1
      letter-spacing: 1px
      color: #fff
      font-size: 4rem
      font-weight: 400
      margin-bottom: 1rem
      word-break: break-word
</style>
