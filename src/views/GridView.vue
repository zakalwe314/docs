<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    section(slot="documentation" class='documentation-slot')
      h6 Viewport breakpoints
      ul
        li <code>xs</code> - extra small viewport devices (&lt; 576px)
        li <code>sm</code> - small viewport devices (&lt; 768px)
        li <code>md</code> - medium viewport devices (&lt; 992px)
        li <code>lg</code> - large viewport devices (&lt; 1200px)
        li <code>xl</code> - extra large viewport devices (&gt; 1200px)

    component-example(header="Grid" file="grid/1")
    component-example(header="Offset" file="grid/2")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Grid',
          desc: 'Vuetify.js uses a 12 point grid system. The grid is used to layout an applications content and contains 5 types of media breakpoints.',
          props: {
            'v-container': {
              params: [
                [
                  'fluid',
                  'Boolean',
                  'False',
                  'Applies the .container--fluid class'
                ]
              ]
            },
            'v-col': {
              params: [
                [
                  'Width',
                  'Boolean',
                  'False',
                  'xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
                ]
                [
                  'Offset',
                  'Boolean',
                  'False',
                  'offset- xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
                ]
              ]
            }
          },
          functional: {
            'grid': {
              params: [
                ['<v-content>', 'The main content wrapper for your application'],
                ['<v-row>', 'The .row class'],
                ['<v-spacer>', 'Spacer for flexbox grids']
              ]
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
          title: 'Grid | Vuetify.js',
          h1: 'Grid',
          description: 'Grid for the Vuetify Framework',
          keywords: 'vuetify, grid'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #grid-view
    .component-example
      .card
        color: #fff
        text-align: center
        padding: 1rem 0
        margin: .5rem 0

        &__text
          padding: 0

  .documentation-slot
    margin-bottom: 2rem
</style>
