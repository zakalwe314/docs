<template lang="pug">
  doc-view(v-bind:doc="doc" id="buttons-view")
    component-example(header="Flat" file="buttons/2" id="e1-1")
      v-container(fluid class="text-xs-center")
        v-row
          v-col(xs12 sm6)
            span Light Theme
            v-card(class="grey lighten-4 z-depth-0" height="300px")
              v-card-text
                div
                  v-btn(flat) Normal
                div
                  v-btn(flat class="btn-flat-focused") Focused
                div
                  v-btn(flat class="btn-flat-pressed") Pressed
                div
                  v-btn(flat disabled) Disabled
          v-col(xs12 sm6)
            span Dark Theme
            v-card(class="secondary z-depth-0" height="300px")
              v-card-text
                div
                  v-btn(flat dark) Normal
                div
                  v-btn(flat dark class="btn-flat-focused-dark") Focused
                div
                  v-btn(flat dark class="btn-flat-pressed-dark") Pressed
                div
                  v-btn(flat dark disabled) Disabled

    component-example(header="Raised" file="buttons/2" id="e1-2")
      v-container(fluid class="text-xs-center")
        v-row
          v-col(xs12 sm6)
            span Raised Light Theme
            v-card(class="grey lighten-4 z-depth-0" height="300px")
              v-card-text
                div
                  v-btn Normal
                div
                  v-btn(class="btn-focused") Focused
                div
                  v-btn(class="btn-pressed z-depth-2") Pressed
                div
                  v-btn(disabled) Disabled
          v-col(xs12 sm6)
            span Raised Dark Theme
            v-card(class="secondary z-depth-0" height="300px")
              v-card-text
                div
                  v-btn(primary dark) Normal
                div
                  v-btn(primary dark class="btn-focused") Focused
                div
                  v-btn(primary dark class="btn-pressed z-depth-2") Pressed
                div
                  v-btn(primary dark disabled) Disabled

    component-example(header="Button Dropdown" id="e2-1")
      v-card(class="grey lighten-4 z-depth-0 py-5")
        v-card-text
          v-container(fluid)
            v-row
              v-col(xs12 sm4 class="py-2")
                v-btn-dropdown(v-bind:items="dropdown.slice(0, 4)" max-height="auto")
              v-col(xs12 sm4 class="py-2")
                v-btn-dropdown(v-bind:items="dropdown.slice(0, 7)")
              v-col(xs12 sm4 class="py-2")
                v-btn-dropdown(v-bind:items="dropdown")

    component-example(header="Button Dropdown Variants" id="e2-2")
      v-card(class="grey lighten-4 z-depth-0 py-5")
        v-card-text
          v-container(fluid)
            v-row
              v-col(xs12 sm4 class="py-2")
                p Overflow
                v-btn-dropdown(v-bind:items="dropdown_font" max-height="auto" overflow)
              v-col(xs12 sm4 class="py-2")
                p Segmented
                v-btn-dropdown(v-bind:items="dropdown_icon" segmented)
              v-col(xs12 sm4 class="py-2")
                p Editable
                v-btn-dropdown(v-bind:items="dropdown_edit" max-height="auto" editable)

    component-example(header="Button Toggle" id="e3")
      v-card(class="grey lighten-4 z-depth-0 py-5")
        v-card-text
          v-container(fluid)
            v-row
              v-col(xs12 sm12 md6 class="py-2")
                p Exclusive
                v-btn-toggle(v-bind:items="toggle_options" v-model="toggle_exclusive")
              v-col(xs12 sm12 md6 class="py-2")
                p Multiple
                v-btn-toggle(v-bind:items="toggle_options_multiple" multiple v-model="toggle_multiple")
              v-col(xs12 sm12 md6 class="py-2")
                p No Options Selected
                v-btn-toggle(v-bind:items="toggle_options" v-model="toggle_none")
              v-col(xs12 sm12 md6 class="py-2")
                p One Option Selected
                v-btn-toggle(v-bind:items="toggle_options_multiple" multiple v-model="toggle_one")  
              v-col(xs12 sm12 md6 class="py-2")
                p Text Options
                v-btn-toggle(v-bind:items="toggle_text" v-model="text")
              v-col(xs12 sm12 md6 class="py-2")
                p Text &amp; Icon Options
                v-btn-toggle(v-bind:items="toggle_text_icon" v-model="icon")

    component-example(header="Icon" id="e4")
      v-card(class="grey lighten-4 z-depth-0 py-5")
        v-card-text
          v-container(fluid)
            v-row
              v-col(xs12)
                p Normal
              v-col(xs3)
                v-btn(icon class="pink--text")
                  v-icon favorite
              v-col(xs3)
                v-btn(icon class="indigo--text")
                  v-icon star
              v-col(xs3)
                v-btn(icon class="green--text")
                  v-icon cached
              v-col(xs3)
                v-btn(icon class="deep-orange--text")
                  v-icon thumb_up
            v-row(class="mt-5")
              v-col(xs12)
                p Disabled
              v-col(xs3)
                v-btn(icon disabled class="pink--text")
                  v-icon favorite
              v-col(xs3)
                v-btn(icon disabled class="indigo--text")
                  v-icon star
              v-col(xs3)
                v-btn(icon disabled class="green--text")
                  v-icon cached
              v-col(xs3)
                v-btn(icon disabled class="deep-orange--text")
                  v-icon thumb_up
    component-example(header="App Bar")
      v-app-bar
        v-btn-dropdown(
          v-bind:items="dropdown_font"
          max-height="auto"
          overflow
          v-model="text"
        )
        v-btn-dropdown(
          v-bind:items="dropdown_edit"
          max-height="auto"
          overflow
          editable
        )
        v-btn-toggle(
          class="hidden-md-and-down"
          v-bind:items="toggle_options_multiple" 
          v-model="toggle_multiple"
          multiple 
        )
        v-btn-toggle(
          class="hidden-sm-and-down"
          v-bind:items="toggle_options" 
          v-model="toggle_exclusive"
        )

    component-example(header="Floating")
      v-btn(floating)
        v-icon add

    component-example(header="Progress")
      v-progress-circular(button class="deep-orange--text" size="56")
        v-btn(progress class="indigo white--text")
          v-icon list

    component-example(header="Sizing")
      v-btn(small) Small

    h4 Custom Styles

    component-example(header="Outline")
      v-btn(outline) Button

    component-example(header="Round")
      v-btn(round) Button

    component-example(header="Block")
      v-btn(block) Button
</template>

<script>
  export default {
    data () {
      return {
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
          { title: 'State 1' },
          { title: 'State 2' },
          { title: 'State 3' },
          { title: 'State 4' },
          { title: 'State 5' },
          { title: 'State 6' },
          { title: 'State 7' },
          { title: 'State 8' },
          { title: 'State 9' },
          { title: 'State 10' },
        ],
        dropdown_font: [
          { title: 'Arial' },
          { title: 'Calibri' },
          { title: 'Courier' },
          { title: 'Verdana' }
        ],
        dropdown_icon: [
          { action: 'list' },
          { action: 'favorite' },
          { action: 'delete' },
        ],
        dropdown_edit: [
          { title: '100%' },
          { title: '75%' },
          { title: '50%' },
          { title: '25%' },
          { title: '0%' }
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
                  'False',
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
                ]
              ]
            }
          },
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

    methods: {
      loader (load) {
        this[load] = !this[load]
      },

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
    #e1-1, #e1-2
      .card
        margin: 2rem 0
        
        .card__text > div
          margin: 1rem 0
          
      .btn-focused
        &:after
          background-color: $button-focus-background-color
          
        &-dark
          &:after
            background-color: $button-focus-dark-background-color
          
      .btn-pressed
        &:after
          background-color: $button-active-background-color
          
        &-dark
          &:after
            background-color: $button-active-dark-background-color
          
      .btn-flat-focused
        &:after
          background-color: $button-flat-focus-background-color
          
        &-dark
          &:after
            background-color: $button-flat-dark-focus-background-color
        
      .btn-flat-pressed
        &:after
          background-color: $button-flat-active-background-color
        
        &-dark
          &:after
            background-color: $button-flat-dark-active-background-color
            
    #e2-1, #e2-2, #e3, #e4
      .card
        width: 100%
        text-align: center
</style>