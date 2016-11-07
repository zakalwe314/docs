<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Layout Designer")
      v-container
        v-row
          v-col(xs12)
            v-card(class="z-depth-0")
              v-card-text
                v-container(fluid)
                  v-row
                    v-col(xs3)
                      v-checkbox(
                        label="Sidebar"
                        v-model="sidebar"
                        id="sidebar"
                        name="sidebar"
                      )
                      v-checkbox(
                        label="Fixed"
                        v-model="fixed"
                        id="fixed"
                        name="fixed"
                        v-bind:disabled="!sidebar"
                      )
                    v-col(xs3)
                      v-checkbox(
                        label="Navbar"
                        v-model="navbar"
                        id="navbar"
                        name="navbar"
                      )
                      v-checkbox(
                        label="Fixed"
                        v-model="navFixed"
                        id="nav-fixed"
                        name="nav-fixed"
                        v-bind:disabled="!navbar"
                      )
            div(class="layout layout--1")
              v-navbar(
                v-if="navbar"
                v-bind:fixed="navFixed"
              )
              div(class="layout__main")
                v-sidebar(
                  id="layout-1-sidebar"
                  v-if="sidebar"
                  class="secondary"
                  v-bind:fixed="fixed"
                )
                div(class="layout__content") Content
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Layouts',
          desc: 'Soon'
        },
        fixed: false,
        navbar: true,
        navFixed: false,
        sidebar: false
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
    height: 500px
    flex-direction: column
    margin: .5rem 0
    overflow-y: auto
    overflow-x: hidden
    position: relative
    
    .sidebar
      height: 500px !important

    .sidebar--fixed
      position: absolute
      height: 600px !important
      
    .navbar
      min-height: 100px
      
    &__main
      display: flex
      height: 500px
      
    &__content
      display: flex
      justify-content: center
      align-items: center
      flex: 1
      height: 500px
</style>