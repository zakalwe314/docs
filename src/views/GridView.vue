<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    component-example(header="Grid" file="grid/1")
      v-container(fluid)
        v-row
          v-col(xs12)
            v-card(class="primary")
              v-card-text 12
          v-col(xs6 v-for="i in 2")
            v-card(class="secondary")
              v-card-text 6
          v-col(xs4 v-for="i in 3")
            v-card(class="primary")
              v-card-text 4
          v-col(xs3 v-for="i in 4")
            v-card(class="secondary")
              v-card-text 3
          v-col(xs2 v-for="i in 6")
            v-card(class="primary")
              v-card-text 2
          v-col(xs1 v-for="i in 12")
            v-card(class="secondary")
              v-card-text 1
    markup(lang="xml" slot="markup")
      |&lt;v-container fluid&gt;
      |   &lt;v-row&gt;
      |     &lt;v-col xs12 sm6 md4 lg3&gt;
      |       ...
      |     &lt;/v-col&gt;
      |     &lt;v-col xs6 offset-xs3&gt;
      |       ...
      |     &lt;/v-col&gt;
      |   &lt;/v-row&gt;
      |&lt;/v-container&gt;
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