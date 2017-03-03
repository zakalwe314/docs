<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="tooltips/1" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        ex1val: {},
        ex2val: {},
        ex3val: [],
        ex4val: [],
        ex5val: [],
        ex1: {
          items: [
            {
              text: 'foo',
              value: 1
            },
            {
              text: 'foobar',
              value: 2
            },
            {
              text: 'bar',
              value: 3
            },
            {
              text: 'baz',
              value: 4
            },
            {
              text: 'baaaaaaaaaaz2',
              value: 5
            },
            {
              text: 'baaaaaaaaaaaaaz3',
              value: 6
            },
            {
              text: 'baaaaaaaaaaaaaaaz4',
              value: 7
            },
            {
              text: 'baaaaaaaaaaaaaaaaaz5',
              value: 8
            },
            {
              text: 'baaaaaaaaaaaz6',
              value: 9
            },
            {
              text: 'baaaaaaaaaaz7',
              value: 10
            },
            {
              text: 'baaaaaaaaaaz8',
              value: 11
            },
            {
              text: 'baz9',
              value: 12
            },
            {
              text: 'baaaaaaaz10',
              value: 13
            }
          ]
        },
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
