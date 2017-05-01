<template lang="pug">
  v-view(v-bind:doc="doc")
    component-example(header="Structure" file="layouts/1")
      div(slot="desc") The default structure of the Vuetify layout is one of the few opinionated designs you will encounter in the framework. It is done so that each layout is easy to understand and works as expected for any given scenario. Below is the <strong>baseline</strong> structure for a layout. It includes a navigation drawer, toolbar, right navigation drawer, content and footer.
    component-example(header="Permanent drawer" file="layouts/2")
      div(slot="desc") Permanent navigation drawers are default open. These are used for applications that are desktop only and are not openable or closeable.
    component-example(header="Permanent clipped drawer" file="layouts/3")
    component-example(header="Permanent floating drawer" file="layouts/4")
    component-example(header="Permanent floating drawer in a card" file="layouts/5")
    component-example(header="Persistent" file="layouts/6")
    component-example(header="Temporary" file="layouts/7")
    component-example(header="Dark theme" file="layouts/8")
      div(slot="desc") Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents.
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Layouts',
          id: 'layout-view',
          edit: 'LayoutsView',
          component: 'app',
          desc: 'The layout system is the heart of every application. Below are the officially supported examples, ranging from desktop to mobile applications.',
          props: []
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
  @import '../../node_modules/vuetify/src/stylus/tools/_elevations'
  
  #layout-view
    #example-8
      .card
        background: #424242

    .component-example
      position: relative
      z-index: 0

      [data-app]
        overflow: hidden
        height: 400px
        elevation(2)
        
        .navigation-drawer, .toolbar, .overlay
          position: absolute

        main
          min-height: calc(400px - 36px)

        .navigation-drawer
          height: 400px !important
</style>
