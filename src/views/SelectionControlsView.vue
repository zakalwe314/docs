<template lang="pug">
  doc-view(v-bind:doc="doc" id="selection-controls-view")
    h4 Checkboxes
    component-example(header="Boolean" file="selection-controls/1" v-bind:data="$data")
      section-text(slot="details") A <strong>Boolean</strong> checkbox has no value and only emits a true or false. The checkbox will determine its type based upon the model type given. A checkbox has two themes, light and dark.
    markup(lang="js")
      |data () {
      |   return {
      |     ex1: true,
      |     ex2: false,
      |     ex3: true,
      |     ex4: false
      |   }
      |}
    component-example(header="Array" file="selection-controls/2" v-bind:data="$data")
      section-text(slot="details") An <strong>Array</strong> checkbox must have an assigned <code>value-v</code> prop set.
    markup(lang="js")
      |data () {
      |   return {
      |     ex5: ['John'],
      |     ex6: ['John']
      |   }
      |}
    component-example(header="States" file="selection-controls/3" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/4" v-bind:data="$data")
    h4 Radios
    component-example(header="Default" file="selection-controls/5" v-bind:data="$data")
      section-text(slot="details") Radios are value based selection where only one can be selected.
    markup(slot="js")
      |data () {
      |   return {
      |     ex8: false,
      |     ex9: true
      |   }
      |}
    component-example(header="States" file="selection-controls/6" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/7" v-bind:data="$data")
      section-text(slot="details") Contextual controls correspond to success, info, warning and error colors for your application.
    h4 Switches
    section-text Switches share functionality with <code>v-checkbox</code>. The main difference is in the style.
    component-example(header="Boolean" file="selection-controls/8" v-bind:data="$data")
    component-example(header="Array" file="selection-controls/9" v-bind:data="$data")
    component-example(header="States" file="selection-controls/10" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/11" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        test: [],
        test2: false,
        ex1: true,
        ex2: false,
        ex3: true,
        ex4: false,
        ex5: ['John'],
        ex6: ['John'],
        ex7: [],
        ex8: null,
        ex9: null,
        ex10: null,
        ex11: true,
        ex12: false,
        ex13: true,
        ex14: false,
        ex15: ['John'],
        ex16: ['John'],
        ex17: [],
        doc: {
          title: 'Selection controls',
          desc: 'Selection control components allow a user to select options. These components <strong>must</strong> be used with the <code>v-model</code> prop as they do not maintain their own state.',
          props: {
            'v-checkbox': {
              params: [
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
                  'Disables the checkbox'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets an indeterminate state for the checkbox'
                ],
                [
                  'label',
                  'String',
                  '',
                  'Label text for the checkbox'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme'
                ],
                [
                  'value-v',
                  'None',
                  '',
                  'The value for the checkbox. This is a special property used in conjunction with v-model'
                ]
              ],
              model: {
                types: ['*'],
                default: 'None'
              }
            },
            'v-radio': {
              params: [
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
                  'Disables the checkbox'
                ],
                [
                  'label',
                  'String',
                  '',
                  'Label text for the checkbox'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme'
                ],
                [
                  'value-v',
                  'None',
                  '',
                  'The value for the checkbox. This is a special property used in conjunction with v-model'
                ]
              ],
              model: {
                types: ['*'],
                default: 'None'
              }
            },
            'v-switch': {
              params: [
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
                  'Disables the checkbox'
                ],
                [
                  'label',
                  'String',
                  '',
                  'Label text for the checkbox'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme'
                ],
                [
                  'value-v',
                  'None',
                  '',
                  'The value for the checkbox. This is a special property used in conjunction with v-model'
                ]
              ],
              model: {
                types: ['*'],
                default: 'None'
              }
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
          title: 'Selection controls Input Components | Vuetify.js',
          h1: 'Selection controls',
          description: 'Selection controls input components for Vuetify Framework',
          keywords: 'vuetify, form, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
 #selection-controls-view
   .component-example
      table
        tr
          border-top: none !important
          height: 75px
          
          &:hover
            background: transparent !important
          
        td, th
          text-align: center
          
        td
          .input-group
            justify-content: center
</style>