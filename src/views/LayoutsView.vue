<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Navbar and Footer")
      v-container(fluid)
        v-row
          v-col(sm6 md4 lg4)
            div(class="layout")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__content") Content
          v-col(sm6 md4 lg4)
            div(class="layout")
              div(class="layout__main")
                div(class="layout__content") Content
              nav(class="navbar primary") Navbar
          v-col(sm6 md4 lg4)
            div(class="layout")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__content") Content
              div(class="layout__footer primary") Footer
    component-example(header="Navbar and Sidebar")
      v-container(fluid)
        v-row
          v-col(sm6 md6 lg6)
            div(class="layout")
              nav(class="navbar primary") Navbar
              div(class="layout__main")
                div(class="layout__sidebar secondary") Sidebar
                div(class="layout__content") Content
          v-col(sm6 md6 lg6)
            div(class="layout layout--4")
              div(class="layout__sidebar secondary") Sidebar
              div(class="layout__main")
                nav(class="navbar primary") Navbar
                div(class="layout__content") Content
    component-example(header="Navbar, Sidebar and Footer")
      v-container(fluid)
        v-row
          v-col(sm6 md6 lg6)
            div(class="layout")
              nav(class="navbar primary")
              div(class="layout__main")
                div(class="layout__sidebar secondary")
                div(class="layout__content") Content
              div(class="layout__footer primary")
          v-col(sm6 md6 lg6)
            div(class="layout layout--4")
              div(class="layout__sidebar secondary")
              div(class="layout__main")
                nav(class="navbar primary")
                div(class="layout__content") Content
                div(class="layout__footer primary")

</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Layouts',
          desc: 'Vuetify supports numerous different pre-defined layouts, right out of the box.'
        }
      }
    },

    mounted () {
      this.$emit('view', 'Layouts')
    }
  }
</script>

<style lang="stylus">
  .layout
    background: #fff
    display: flex
    height: 200px
    flex-direction: column
    margin: .5rem 0
    overflow-y: auto
    overflow-x: hidden
    position: relative
      
    .navbar
      min-height: 15%
      color: #fff
      justify-content: center
      align-items: center
      
    &__footer
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