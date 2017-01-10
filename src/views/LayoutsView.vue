<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Navbar and Footer" file="layouts/1")
      v-container(fluid)
        v-row
          v-col(xs12 sm4)
            div(class="layout z-depth-1")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__content") Content
          v-col(xs12 sm4)
            div(class="layout z-depth-1")
              div(class="layout__main")
                div(class="layout__content") Content
              nav(class="navbar primary") Navbar
          v-col(xs12 sm4)
            div(class="layout z-depth-1")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__content") Content
              div(class="layout__footer primary") Footer
    component-example(header="Navbar and Sidebar" file="layouts/2")
      v-container(fluid)
        v-row
          v-col(xs12 sm6 md6 lg6)
            div(class="layout z-depth-1")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__sidebar secondary") Sidebar
                div(class="layout__content") Content
          v-col(xs12 sm6 md6 lg6)
            div(class="layout layout--4 z-depth-1")
              div(class="layout__sidebar secondary") Sidebar
              div(class="layout__main")
                nav(class="navbar primary") Navbar
                div(class="layout__content") Content
    component-example(header="Navbar, Sidebar and Footer" file="layouts/3")
      v-container(fluid)
        v-row
          v-col(xs12 sm6 md6 lg6)
            div(class="layout z-depth-1")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__sidebar secondary") Sidebar
                div(class="layout__content") Content
              div(class="layout__footer primary") Footer
          v-col(xs12 sm6 md6 lg6)
            div(class="layout layout--4 z-depth-1")
              div(class="layout__sidebar secondary") Sidebar
              div(class="layout__main")
                nav(class="navbar primary") Navbar
                div(class="layout__content") Content
                div(class="layout__footer primary") Footer
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Layouts',
          desc: 'Vuetify supports numerous different pre-defined layouts, right out of the box. The total number of variations is not limited to the examples below.',
          props: {
            'v-app': {
              params: [
                [
                  'navbar',
                  'Boolean',
                  'False',
                  'Variations: top, bottom, top-fixed, bottom-fixed'
                ],
                [
                  'sidebar',
                  'Boolean',
                  'False',
                  'Variations: left, right, left-fixed, right-fixed',
                ],
                [
                  'footer',
                  'Boolean',
                  'False',
                  '',
                ]
              ]
            }
          },
          slots: {
            'v-app': {
              default: true
            }
          }
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Layouts | Vuetify.js',
          h1: 'Layouts',
          description: 'Layouts for the Vuetify Framework',
          keywords: 'vuetify, layouts'
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_colors'
  
  .layout
    background: #fff
    display: flex
    height: 200px
    flex-direction: column
    margin: .5rem 0
    overflow-y: hidden
    overflow-x: hidden
    position: relative
      
    .navbar
      background: $blue.lighten-2 !important
      height: 15%
      color: #fff
      justify-content: center
      align-items: center
      text-align: center
      padding: 0 !important
      
    &__footer
      background: $blue.lighten-2 !important
      display: flex
      flex: 0 1 10%
      color: #fff
      justify-content: center
      align-items: center
      
    &__main
      display: flex
      flex: 1
      
    &__content
      display: flex
      justify-content: center
      align-items: center
      flex: 1
      
    &__sidebar
      height: 100%
      flex: 0 1 20%
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      
    &--4
      flex-direction: row
      
      .layout__main
        flex-direction: column
</style>
