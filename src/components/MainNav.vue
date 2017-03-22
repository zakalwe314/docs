<template lang="pug">
  header
    v-toolbar(fixed)
      v-toolbar-side-icon(
        class="side-icon hidden-lg-and-up"
        v-on:click.native.stop="$emit('sidebar')"
      )
      div(class="toolbar__side-title")
        h1(class="text-xs-center text-md-left" v-text="title")
        span(class="hidden-md-and-down" v-html="subTitle")
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
            this.subTitle = 'Vue directives designed to enhance user experience'
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
            this.subTitle = 'Custom styles to help reduce class clutter'
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

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  header
    .toolbar
      align-items: center
      color: #fff
      
      &__side-title
        display: flex
        flex: 1
        align-items: space-between
        justify-content: space-between
        flex-direction: column
        margin: 0 4rem
        
        @media screen and (max-width: $grid-breakpoints.md)
          margin: 0 4rem 0 0
        
        span
          font-weight: 200
          font-size: 1.7rem
          max-width: 600px
          line-height: 1.7rem
      
      h1
        letter-spacing: 1px
        color: #fff
        font-size: 3.5rem
        font-weight: 400
        margin: 0
        word-break: break-word
        text-transform: uppercase
        
  @media screen and (max-width: $grid-breakpoints.md)
    header
      .toolbar
        height: 50px
        
        h1
          font-size: 4vw
          
    #app
      padding-top: 50px
</style>