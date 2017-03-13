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
        ex1val: null,
        ex2val: null,
        ex3val: null,
        ex4val: null,
        ex5val: null,
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
          title: 'Select',
          desc: 'Select fields components are used for collecting user provided information from a list of options.',
          props: {
            'v-select': {
              params: [
                [
                  'defaultText',
                  'String',
                  'Select...',
                  'Sets default option text'
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  'Sets the multiple attribute'
                ],
                [
                  'options',
                  'Array',
                  `{ id: 1, text: 'Value' }`,
                  'The options array'
                ]
              ],
              model: {
                types: ['Array', 'String', 'Number'],
                default: 'null'
              }
            },
            'v-text-field': {
              params: [
                [
                  'type',
                  'String',
                  'text',
                  'Sets the type attribute'
                ],
              ],
              model: {
                types: ['*'],
                default: 'null'
              }
            },
            'v-radio': {
              params: [
                [
                  'gap',
                  'Boolean',
                  'False',
                  'Creates a gap between the selected circle and the outer border'
                ]
              ],
              model: {
                types: ['String', 'Number', 'Boolean'],
                default: 'null'
              }
            },
            'v-checkbox': {
              params: [
                [
                  'gap',
                  'Boolean',
                  'False',
                  'Creates a gap between the selected box and the outer border'
                ],
                [
                  'filled',
                  'Boolean',
                  'False',
                  'Fills the checkbox when selected'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets the indeterminate state'
                ]
              ],
              model: {
                types: ['String', 'Number', 'Boolean'],
                default: 'null'
              }
            },
            'All Components': {
              params: [
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Sets the disabled attribute',
                ],
                [
                  'label',
                  'String',
                  "''",
                  'Sets the label text',
                ],
                [
                  'id',
                  "String",
                  "''",
                  'Sets the input id',
                ],
                [
                  'name',
                  "String",
                  "''",
                  'Sets the label text',
                ],
                [
                  'placeholder',
                  "String",
                  "''",
                  'Sets the placeholder text',
                ]
              ]
            }
          }
        },
        input: null,
        multiple: ['1', '2'],
        options: [
          {
            value: 1,
            text: 'Option 1'
          },
          {
            value: 2,
            text: 'Option 2'
          },
          {
            value: 3,
            text: 'Option 3'
          }
        ],
        text: null,
        errors: ['Username or Password is incorrect']
=======
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
          }
        }
>>>>>>> dev
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
<<<<<<< HEAD
          title: 'Select Input Components | Vuetify.js',
          h1: 'Select fields',
          description: 'Select fields input components for Vuetify Framework',
          keywords: 'vuetify, form, components'
=======
          title: 'Select Component | Vuetify.js',
          h1: 'Selects',
          description: 'Select component for Vuetify Framework',
          keywords: 'vuetify, selects, directives'
>>>>>>> dev
        }
      }
    }
  }
<<<<<<< HEAD
</script>

<style lang="stylus">
  #forms-view
    .with
      min-height: 0
      
    main
      min-height: 0
      padding-left: 0
      
    .toolbar
      max-height: 64px
      
    .component-example__container
      justify-content: space-between
      flex-wrap: wrap
      
      > div > *
        margin: 2rem 0
        flex: 1 0 100%
</style>
=======
</script>
>>>>>>> dev
