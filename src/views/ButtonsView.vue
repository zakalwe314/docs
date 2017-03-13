<template lang="pug">
  doc-view(v-bind:doc="doc" id="buttons-view")
    component-example(header="Flat" file="buttons/1" id="e1-1" v-bind:data="$data")
    component-example(header="Raised" file="buttons/2" id="e1-2" v-bind:data="$data")
    component-example(header="Button Dropdown" file="buttons/3" id="e2-1" v-bind:data="$data")
    markup(lang="js")
      |dropdown: [
      |  { text: 'State 1' },
      |  { text: 'State 2' },
      |  { text: 'State 3' },
      |  { text: 'State 4' },
      |  { text: 'State 5' },
      |  { text: 'State 6' },
      |  { text: 'State 7' },
      |  { text: 'State 8' },
      |  { text: 'State 9' },
      |  { text: 'State 10' }
      |]
    component-example(header="Button Dropdown Variants" file="buttons/4" id="e2-2" v-bind:data="$data")
    markup(lang="js")
      |data () {
      |   return {
      |     dropdown_font: [
      |       { text: 'Arial' },
      |       { text: 'Calibri' },
      |       { text: 'Courier' },
      |       { text: 'Verdana' }
      |     ],
      |&nbsp;
      |     dropdown_icon: [
      |       { action: 'list' },
      |       { action: 'favorite' },
      |       { action: 'delete' },
      |     ],
      |&nbsp;
      |     dropdown_edit: [
      |       { text: '100%' },
      |       { text: '75%' },
      |       { text: '50%' },
      |       { text: '25%' },
      |       { text: '0%' }
      |     ]
      |   }
      |}
    component-example(header="Button Toggle" file="buttons/5" id="e3" v-bind:data="$data")
    markup(lang="js")
      |data () {
      |   return {
      |      toggle_text_icon: [
      |        { text: 'Left', icon: 'format_align_left', value: 1 },
      |        { text: 'Center', icon: 'format_align_center', value: 2 },
      |        { text: 'Right', icon: 'format_align_right', value: 3 },
      |        { text: 'Justify', icon: 'format_align_justify', value: 4 },
      |      ],
      |&nbsp;
      |      toggle_text: [
      |        { text: 'Left', value: 1 },
      |        { text: 'Center', value: 2 },
      |        { text: 'Right', value: 3 },
      |        { text: 'Justify', value: 4 },
      |      ],
      |&nbsp;
      |      toggle_options: [
      |        { icon: 'format_align_left', value: 1 },
      |        { icon: 'format_align_center', value: 2 },
      |        { icon: 'format_align_right', value: 3 },
      |        { icon: 'format_align_justify', value: 4 },
      |      ],
      |&nbsp;
      |      toggle_options_multiple: [
      |        { icon: 'format_bold', value: 1 },
      |        { icon: 'format_italic', value: 2 },
      |        { icon: 'format_underlined', value: 3 },
      |        { icon: 'format_color_fill', value: 4 },
      |      ]
      |   }
      |}
    component-example(header="Icon" file="buttons/6" id="e4" v-bind:data="$data")
    component-example(header="App Bar" file="buttons/7" v-bind:data="$data")
    component-example(header="Floating" file="buttons/8" v-bind:data="$data")
    component-example(header="Loaders" file="buttons/9" v-bind:data="$data")
    markup(lang="stylus")
      |.custom-loader
      |   animation: loader 1s infinite
      |   display: flex
      |&nbsp;
      |@keyframes loader
      |   from
      |     transform: rotate(0)
      |&nbsp;
      |   to
      |     transform: rotate(360deg)
    blockquote Vue 2 handles component events differently than previously. All events must have an added <strong>.native</strong> modifier.
    component-example(header="Sizing" file="buttons/10" v-bind:data="$data")

    h4 Custom Styles

    component-example(header="Outline" file="buttons/11" v-bind:data="$data")
    component-example(header="Round" file="buttons/12" v-bind:data="$data")
    component-example(header="Block" file="buttons/13" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        text: 4,
        icon: null,
        toggle_none: null,
        toggle_one: [2],
        toggle_exclusive: 2,
        toggle_multiple: [1, 2, 3],
        toggle_text_icon: [
          { text: 'Left', icon: 'format_align_left', value: 1 },
          { text: 'Center', icon: 'format_align_center', value: 2 },
          { text: 'Right', icon: 'format_align_right', value: 3 },
          { text: 'Justify', icon: 'format_align_justify', value: 4 },
        ],
        toggle_text: [
          { text: 'Left', value: 1 },
          { text: 'Center', value: 2 },
          { text: 'Right', value: 3 },
          { text: 'Justify', value: 4 },
        ],
        toggle_options: [
          { icon: 'format_align_left', value: 1 },
          { icon: 'format_align_center', value: 2 },
          { icon: 'format_align_right', value: 3 },
          { icon: 'format_align_justify', value: 4 },
        ],
        toggle_options_multiple: [
          { icon: 'format_bold', value: 1 },
          { icon: 'format_italic', value: 2 },
          { icon: 'format_underlined', value: 3 },
          { icon: 'format_color_fill', value: 4 },
        ],
        dropdown: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
          { text: 'State 8' },
          { text: 'State 9' },
          { text: 'State 10' },
        ],
        dropdown_font: [
          { text: 'Arial' },
          { text: 'Calibri' },
          { text: 'Courier' },
          { text: 'Verdana' }
        ],
        dropdown_icon: [
          { action: 'list' },
          { action: 'favorite' },
          { action: 'delete' },
        ],
        dropdown_edit: [
          { text: '100%' },
          { text: '75%' },
          { text: '50%' },
          { text: '25%' },
          { text: '0%' }
        ],
        selected: null,
        doc: {
          title: 'Button',
          desc: `
            <p>
              The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
            </p>
          `,
          props: {
            'v-btn': {
              params: [
                [
                  'light',
                  'Boolean',
                  'True',
                  'Applies the btn--light class'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the btn--dark class'
                ],
                [
                  'block',
                  'Boolean',
                  'False',
                  'Applies the btn--block class'
                ],
                [
                  'flat',
                  'Boolean',
                  'False',
                  'Applies the btn--flat class'
                ],
                [
                  'floating',
                  'Boolean',
                  'False',
                  'Applies the btn--floating class'
                ],
                [
                  'icon',
                  'Boolean',
                  'False',
                  'Applies the btn--icon class'
                ],
                [
                  'large',
                  'Boolean',
                  'False',
                  'Applies the btn--large class'
                ],
                [
                  'loading',
                  'Boolean',
                  'False',
                  'Applies the btn--loading class'
                ],
                [
                  'outline',
                  'Boolean',
                  'False',
                  'Applies the btn--outline class'
                ],
                [
                  'round',
                  'Boolean',
                  'False',
                  'Applies the btn--round class'
                ],
                [
                  'raised',
                  'Boolean',
                  'True',
                  'Applies the btn--raised class'
                ],
                [
                  'ripple',
                  'Boolean',
                  'True',
                  'Applies the ripple directive',
                ],
                [
                  'small',
                  'Boolean',
                  'False',
                  'Applies the btn--small class',
                ],
                [
                  'type',
                  'String',
                  'button',
                  'Sets the buttons type attribute',
                ],
                [
                  'primary',
                  'Boolean',
                  'False',
                  'Applies the primary--text class',
                ],
                [
                  'secondary',
                  'Boolean',
                  'False',
                  'Applies the secondary--text class',
                ],
                [
                  'success',
                  'Boolean',
                  'False',
                  'Applies the success--text class',
                ],
                [
                  'info',
                  'Boolean',
                  'False',
                  'Applies the info--text class',
                ],
                [
                  'warning',
                  'Boolean',
                  'False',
                  'Applies the warning--text class',
                ],
                [
                  'error',
                  'Boolean',
                  'False',
                  'Applies the error--text class',
                ]
              ]
            },
            'v-btn-dropdown': {
              params: [
                [
                  'light',
                  'Boolean',
                  'True',
                  'Applies the btn-dropdown--light class'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the btn-dropdown--dark class'
                ],
                [
                  'editable',
                  'Boolean',
                  'False',
                  'Makes the value editable'
                ],
                [
                  'options',
                  'Array',
                  '[]',
                  'Option Props: [text, icon]'
                ],
                [
                  'max-height',
                  'String, Number',
                  '200',
                  'Designate the maximum height of the dropdown'
                ],
                [
                  'overflow',
                  'Boolean',
                  'False',
                  'Designates the dropdown as an overflow btn'
                ],
                [
                  'label',
                  'String',
                  'Select',
                  'Sets placeholder text if no model value present'
                ],
                [
                  'segmented',
                  'Boolean',
                  'False',
                  'Designates the dropdown as a segmented btn'
                ]
              ],
              model: {
                types: ['String', 'Object'],
                default: 'null',
                description: 'Sets selected value'
              }
            },
            'v-btn-toggle': {
              params: [
                [
                  'options',
                  'Array',
                  '[]',
                  'Option Props: [text, icon, value]'
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  'Designates the toggle accepts and returns an array'
                ]
              ],
              model: {
                types: ['String'],
                default: 'null',
                description: 'Sets mode: toggle_exclusive, toggle_multiple, toggle_none, toggle_one, text, icon'
              }
            }
          },
          // functional: {
          //   'v-app-bar': {
          //     params: [
          //       [
          //         'v-app-bar',
          //         '.app-bar'
          //       ]
          //     ]
          //   }
          // },
          slots: {
            'v-btn': {
              default: true,
              params: [
                [
                  'loader',
                  'Used for specifying custom loader'
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

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },

    methods: {
      meta () {
        return {
          title: 'Button Component | Vuetify.js',
          h1: 'Buttons',
          description: 'Button component for Vuetify Framework',
          keywords: 'vuetify, buttons, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_colors'
  @import '../../node_modules/vuetify/src/stylus/settings/_variables'

  #buttons-view
    .card
      margin: 2rem 0

      .card__text > div
        margin: 1rem 0

    .custom-loader
      animation: loader 1s infinite
      display: flex

    @keyframes loader
      from
        transform: rotate(0)

      to
        transform: rotate(360deg)

    .btn--light-flat-focused:after
      background-color: $button-light-overlay

    .btn--light-flat-pressed:after
      background-color: rgba(#000, .3)

    .btn--dark-flat-focused:after
      background-color: $button-dark-overlay

    .btn--dark-flat-pressed:after
      background-color: rgba(#fff, .3)

    #e2-1, #e2-2, #e3, #e4
      .card
        width: 100%
        text-align: center
</style>
