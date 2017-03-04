<template lang="pug">
  doc-view(v-bind:doc="doc" id="forms-view")
    component-example(header="With Label" file="forms/1" v-bind:data="$data")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/2" v-bind:data="$data")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Single Line" file="forms/3" v-bind:data="$data")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/4" v-bind:data="$data")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="With Icon" file="forms/5" v-bind:data="$data")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/6" v-bind:data="$data")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Multi-Line" file="forms/7" v-bind:data="$data")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/8" v-bind:data="$data")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Character counter" file="forms/9" v-bind:data="$data")
    component-example(header="Password input" file="forms/10" v-bind:data="$data")
        span(class="subheading" slot="details") Light Theme
    component-example(header="Multi-line with character counter" file="forms/11" v-bind:data="$data")
    component-example(header="Full-width text field with character counter" file="forms/12" v-bind:data="$data")
    component-example(header="Required fields" file="forms/13" v-bind:data="$data")
    component-example(header="Hint text" file="forms/14" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        password: '',
        doc: {
          title: 'Text fields',
          desc: 'Text fields components are used for collecting user provided information.',
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
        e91: 'Preliminary report describing the',
        e92: 'Preliminary report describing the state of California',
        e111: 'Let me only say that it fared with him as with the storm-tossed ship, that miserably drives along the leeward land.',
        e112: 'Let me only say that it fared with him as with the storm-tossed ship, that miserably drives along the leeward land. The port',
        e12: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa',
        e131: null,
        e132: null,
        e133: null,
        e14: [],
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
        rules: [
          () => 'Username or Password is incorrect'
        ]
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
          title: 'Text fields Input Components | Vuetify.js',
          h1: 'Text fields',
          description: 'Text fields input components for Vuetify Framework',
          keywords: 'vuetify, form, components'
        }
      }
    }
  }
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
</style>