<template lang="pug">
  doc-view(v-bind:doc="doc" id="forms-view")
    component-example(header="With Label" file="forms/1" v-bind:data="example")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/2" v-bind:data="example")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Single Line" file="forms/3" v-bind:data="example")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/4" v-bind:data="example")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="With Icon" file="forms/5" v-bind:data="example")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/6" v-bind:data="example")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Multi-Line" file="forms/7" v-bind:data="example")
        span(class="subheading" slot="details") Light Theme
    component-example(file="forms/8" v-bind:data="example")
        span(class="subheading" slot="details") Dark Theme
    component-example(header="Character counter" file="forms/9" v-bind:data="example")
    component-example(header="Password input" file="forms/10" v-bind:data="example")
        span(class="subheading" slot="details") Light Theme
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Form Inputs',
          desc: 'Form components are used for collecting user provided information.',
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
            'v-text-input': {
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
        example: {
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
          text: null
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
          title: 'Form Input Components | Vuetify.js',
          h1: 'Form Inputs',
          description: 'Form input components for Vuetify Framework',
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
      
      > div > *
        margin: 2rem 0
        flex: 1 0 100%
</style>