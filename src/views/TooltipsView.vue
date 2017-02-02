<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="tooltips/1")
      v-btn(
        class="primary white--text"
        v-tooltip:top="{ html: 'Top tooptip' }"
      ) Top
      v-btn(
        class="primary white--text"
        v-tooltip:right="{ html: 'Right tooptip' }"
      ) Right
      v-btn(
        class="primary white--text"
        v-tooltip:bottom="{ html: 'Bottom tooptip' }"
      ) Bottom
      v-btn(
        class="primary white--text"
        v-tooltip:left="{ html: 'Left Tooltip' }"
      ) Left
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Tooltip',
          desc: 'The <code>v-tooltip</code> directive is useful for conveying information when a user hovers over an element.',
          props: {
            'v-tooltip': {
              params: [
                [
                  'modifiers',
                  'String',
                  'Required',
                  'top, right, bottom, left',
                ],
                [
                  'html',
                  'String',
                  'Required',
                  'The content for the tooltip',
                ]
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
          title: 'Tooltip Directive | Vuetify.js',
          h1: 'Tooltips',
          description: 'Tooltip directive for Vuetify Framework',
          keywords: 'vuetify, tooltips, directives'
        }
      }
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 1rem
</style>
