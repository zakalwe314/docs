<template lang="pug">
  doc-view(v-bind:doc="doc" id="layout-view")
    component-example(header="Column Layouts" file="layouts/1")
      section-text(slot="details") This layout features a fixed toolbar with scrollable content.
    component-example(file="layouts/2")
      section-text(slot="details") This layout features a fixed toolbar and footer with scrollable content.
    component-example(v-bind:data="$data" file="layouts/3")
      section-text(slot="details") This layout features a sidebar. It can be configured on the left or the right, be persistent or fixed.
    component-example(v-bind:data="$data" file="layouts/4")
      section-text(slot="details") This layout features a sidebar with an above fixed header. The sidebar can be configured on the left or the right, be persistent or fixed.
    component-example(v-bind:data="$data" file="layouts/5")
      section-text(slot="details") This layout features a sidebar with an above fixed header and below fixed footer. The sidebar can be configured on the left or the right, be persistent or fixed.
    component-example(header="Row Layouts" v-bind:data="$data" file="layouts/6")
      section-text(slot="details") This layout features a sidebar that is offset from the main content area with a fixed toolbar. The sidebar can be configured on the left or the right, be persistent or fixed.
    component-example(v-bind:data="$data" file="layouts/7")
      section-text(slot="details") This layout features a sidebar that is offset from the main content area with a fixed toolbar and footer. The sidebar can be configured on the left or the right, be persistent or fixed.
    component-example(v-bind:data="$data" file="layouts/8")
      section-text(slot="details") This layout features a sidebar that is offset from the main content area with a fixed toolbar and non-fixed footer. The sidebar can be configured on the left or the right, be persistent or fixed.
    component-example(v-bind:data="$data" file="layouts/9")
      section-text(slot="details") This layout features a sidebar that is offset from the main content area with a non-fixed toolbar and non-fixed footer. The sidebar can be configured on the left or the right, be persistent or fixed.
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
        e9: {
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
      
      .content > .container
        min-height: 500px
      
      .sidebar
        height: 500px !important
        
        &--drawer
          position: absolute
        
      .overlay
        position: absolute !important
</style>
