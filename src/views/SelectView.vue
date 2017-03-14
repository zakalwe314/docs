<template lang="pug">
  doc-view(v-bind:doc="doc" id="selects-view")
    component-example(header="Standard select" file="selects/1" v-bind:data="$data")
      span(class="subheading" slot="details") Light Theme
    component-example(file="selects/2" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Theme
</template>

<script>
  export default {
    data () {
      return {
        e1: {},
        e2: {},
        e3: {},
        e4: {},
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        doc: {
          title: 'Select',
          desc: ``,
          props: {
            'v-select': {
              params: [
                [
                  'items',
                  'Array',
                  '[]',
                  'Array of items for the select menu'
                ],
                [
                  'item-text',
                  'String',
                  'text',
                  ''
                ],
                [
                  'item-group',
                  'String',
                  'group',
                  ''
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  ''
                ],
                [
                  'autocompleta',
                  'Boolean',
                  'False',
                  ''
                ],
                [
                  'filter',
                  'Function',
                  '-',
                  ''
                ],
                [
                  'single-line',
                  'Boolean',
                  'False',
                  ''
                ],
                [
                  'chips',
                  'Boolean',
                  'False',
                  ''
                ],
                [
                  'close',
                  'Boolean',
                  'False',
                  ''
                ],
                [
                  'debounce',
                  'Number',
                  '200',
                  ''
                ],
                [
                  'light',
                  'Boolean',
                  'True',
                  'Applies the light theme'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the dark theme'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables input'
                ],
                [
                  'hint',
                  'String',
                  '-',
                  'Sets hint text'
                ],
                [
                  'persistent-hint',
                  'Boolean',
                  'False',
                  'Forces hint visible'
                ],
                [
                  'label',
                  'String',
                  '-',
                  'Sets select label'
                ],
                [
                  'append-icon',
                  'String',
                  'arrow_drop_down',
                  ''
                ],
                [
                  'prepend-icon',
                  'String',
                  '-',
                  'Prepend an icon to the select'
                ],
                [
                  'required',
                  'Boolean',
                  'False',
                  'Designates the input as required'
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  "Array of functions that return either True or a String with an error message"
                ],
              ],
              model: {
                types: ['*'],
                default: '-',
                description: 'Current input value'
              }
            },
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
          title: 'Select Component | Vuetify.js',
          h1: 'Selects',
          description: 'Select component for Vuetify Framework',
          keywords: 'vuetify, selects, directives'
        }
      }
    }
  }
</script>
