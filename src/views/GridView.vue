<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Grid" id="grid")
      v-container(fluid)
        v-row
          v-col(xs12)
            v-card(class="primary")
              v-card-content 12
          v-col(xs6 v-for="i in 2")
            v-card(class="secondary")
              v-card-content 6
          v-col(xs4 v-for="i in 3")
            v-card(class="primary")
              v-card-content 4
          v-col(xs3 v-for="i in 4")
            v-card(class="secondary")
              v-card-content 3
          v-col(xs2 v-for="i in 6")
            v-card(class="primary")
              v-card-content 2
          v-col(xs1 v-for="i in 12")
            v-card(class="secondary")
              v-card-content 1
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
          desc: 'Soon',
          params: [
            [
              '<code>v-container</code>',
              '',
              'Base component'
            ],
            [
              '<code>fluid</code>',
              'Applies the container--fluid class',
              'Default: false'
            ],
            [
              '<code>v-row</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-col</code>',
              '',
              'Base component'
            ],
            [
              '<code>static attrs</code>',
              'Specify the size of the column',
              'xs:extra small, sm:small, md:medium, lg:large, 1 through 12'
            ]
          ]
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
          title: 'Grid | Vuetify',
          h1: 'Grid',
          description: 'Grid for the Vuetify Framework',
          keywords: 'vuetify, grid'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #grid .component-example
    .card
      color: #fff
      text-align: center
      padding: 1rem 0
      margin: .5rem 0
</style>