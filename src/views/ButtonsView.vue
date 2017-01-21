<template lang="pug">
  doc-view(v-bind:doc="doc" id="buttons-view")
    //- component-example(header="Normal" file="buttons/1")
    //-   v-btn Default
    //-   v-btn(success) Success
    //-   v-btn(info) Info
    //-   v-btn(warning) Warning
    //-   v-btn(error) Error
    //-   v-btn(disabled) Default Disabled
    //-   v-btn(success disabled) Success Disabled
    //-   v-btn(info disabled) Info Disabled
    //-   v-btn(warning disabled) Warning Disabled
    //-   v-btn(error disabled) Error Disabled
    component-example(header="Flat" file="buttons/2" id="e1")
      v-container(fluid class="text-xs-center")
        v-row
          v-col(xs6)
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
          v-col(xs6)
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

    component-example(header="Raised" file="buttons/2")
      v-container(fluid class="text-xs-center")
        v-row
          v-col(xs6)
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
          v-col(xs6)
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

    component-example(header="Button Dropdown")
      div
        v-btn-dropdown(v-bind:items="dropdown" v-model="selected")
</template>

<script>
  export default {
    data () {
      return {
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
          { title: 'State 10' }
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
        // setTimeout(() => this[load] = false, 3000)
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
    #e1
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
</style>