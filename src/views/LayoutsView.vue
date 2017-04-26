<template lang="pug">
  doc-view(v-bind:doc="doc" id="layout-view")
    component-example(header="Layouts" file="layouts/1" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        e3: {
          open: true,
          fixed: false,
          right: false
        },
        e4: {
          open: true,
          fixed: false,
          right: false
        },
        e5: {
          open: true,
          fixed: false,
          right: false
        },
        e6: {
          open: true,
          fixed: false,
          right: false
        },
        e7: {
          open: true,
          fixed: false,
          right: false
        },
        e8: {
          open: true,
          fixed: false,
          right: false
        },
        doc: {
          title: 'Layouts',
          desc: 'Vuetify supports numerous different pre-defined layouts, right out of the box. The total number of variations is not limited to the examples below.',
          props: {
            'v-app': {
              params: [
                [
                  'sidebar',
                  'Boolean',
                  'False',
                  'Variations: left, right, left-fixed, right-fixed',
                ],
                [
                  'id',
                  'String',
                  'app',
                  'The mounting point id'
                ],
                [
                  'sidebar-under-toolbar',
                  'Boolean',
                  'False',
                  'Positions a fixed sidebar under the toolbar'
                ],
                [
                  'scroll-y',
                  'Class',
                  'null',
                  'Add vertical scrollbar to "v-content" or any other div container making the content scrollable.'
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
  @import '../../node_modules/vuetify/src/stylus/tools/_elevations'
  

  .component-example__container
    z-index: 0

    [data-app]
      height: 400px
      elevation(4)
      
      .content
        height: 500px
      
      .sidebar
        height: 500px !important
</style>
