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
    blockquote The rules prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either <code>true</code> or a <code>String</code>, the error message.
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
            'v-text-field': {
              params: [
                [
                  'append-icon',
                  'String',
                  '-',
                  'Append material icon'
                ],
                [
                  'prepend-icon',
                  'String',
                  '-',
                  'Prepend material icon'
                ],
                [
                  'counter',
                  'Boolean',
                  'False',
                  'Creates counter for input length'
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
                  'Disables the input'
                ],
                [
                  'full-width',
                  'Boolean',
                  'False',
                  'Desginates input type as full-width'
                ],
                [
                  'hint',
                  'String',
                  '-',
                  'Hint text'
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
                  'Sets input label'
                ],
                [
                  'min',
                  'Number',
                  '0',
                  'Sets minimum value'
                ],
                [
                  'max',
                  'Number',
                  '25',
                  'Sets maximum value'
                ],
                [
                  'required',
                  'Boolean',
                  'False',
                  'Designates the input as required'
                ],
                [
                  'multi-line',
                  'Boolean',
                  'False',
                  'Turns into textarea'
                ],
                [
                  'single-line',
                  'Boolean',
                  'False',
                  'Label does not move on focus/dirty'
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  "Array of functions that return either True or a String with an error message"
                ],
                [
                  'type',
                  'String',
                  'text',
                  'Sets input type'
                ],
              ],
              model: {
                types: ['*'],
                default: '-',
                description: 'Current input value'
              }
            }
          },
          events: {
            'v-text-field': {
              events: [
                ['input', 'String', 'Current input value. Fires while typing.'],
                ['focus', '-', 'Input gained focus.'],
                ['blur', '-', 'Input lost focus.'],
                ['change', 'String', 'Input value was changed. Fired on blur.'],
              ]
            },
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
