<template lang="pug">
  doc-view(v-bind:doc="doc" id="layout-view")
    component-example(header="Toolbar and Footer" file="layouts/1" v-bind:data="example")
    component-example(header="Toolbar and Sidebar" file="layouts/2" v-bind:data="example")
    component-example(header="Toolbar, Sidebar & Footer" file="layouts/3" v-bind:data="example")
</template>

<script>
  export default {
    data () {
      return {
        example: {
          nav1: true,
          nav2: false,
          nav3: false
        },
        doc: {
          title: 'Layouts',
          desc: 'Vuetify supports numerous different pre-defined layouts, right out of the box. The total number of variations is not limited to the examples below.',
          props: {
            'v-app': {
              params: [
                [
                  'toolbar',
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
  @import '../../node_modules/vuetify/src/stylus/generic/_z-depths'
  
  #layout-view
    .component-example
      main
        min-height: 300px
        padding-left: 0
        
      .toolbar
        height: 5rem
        
      .sidebar
        position: absolute
        z-index: 1
        
      .footer
        padding: 0 1rem
        z-index: 0
        
      .with
        @extend .z-depth-2
        min-height: auto
        position: relative
        overflow: hidden
        width: 100%
    
    #example-2
      padding: initial
</style>
