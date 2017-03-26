<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    component-example(header="Grid" file="grid/1")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Grid',
          desc: 'The Vuetify.js uses a 12 point grid system. The grid is used to layout an applications content and contains 5 types (xs, sm, md, lg, xl) of media breakpoints.',
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
                  'static attrs',
                  'Boolean',
                  'False',
                  'xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
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
</style>