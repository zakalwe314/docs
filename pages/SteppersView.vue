<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="steppers/1" v-bind:data="$data")
    component-example(header="Editable steps" file="steppers/2")
    component-example(header="Non-editable steps" file="steppers/3")
    component-example(header="Optional steps" file="steppers/5")
    component-example(header="Horizontal steppers" file="steppers/6")
    component-example(header="Vertical steppers" file="steppers/7" v-bind:data="$data")
    component-example(header="Linear steppers" file="steppers/8")
    component-example(header="Non-linear steppers" file="steppers/9")
    component-example(header="Alternative labels" file="steppers/10")
    component-example(header="Multi-line error state" file="steppers/11")
    component-example(header="Alternative label multi-line error state" file="steppers/12")
    component-example(header="Vertical multi-line error state" file="steppers/13" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        e6: 2,
        e13: 4,
        doc: {
          title: 'stepper',
          desc: 'The <code>v-stepper</code> component displays progress through numbered steps.',
          props: {
            'v-stepper': {
              params: [
                [
                  'alt-labels',
                  'Boolean',
                  'False',
                  'Places the labels beneath the step',
                ],
                [
                  'vertical',
                  'Boolean',
                  'False',
                  'Display steps vertically',
                ],
              ],
              model: {
                types: ['Number', 'String'],
                default: '-',
                description: 'Sets current selected step'
              }
            },
            'v-stepper-step': {
              params: [
                [
                  'completed',
                  'Boolean',
                  'False',
                  'Marks step as completed',
                ],
                [
                  'complete-icon',
                  'String',
                  'check',
                  'Icon to display when step is marked as completed',
                ],
                [
                  'edit-icon',
                  'String',
                  'edit',
                  'Icon to display when step is editable',
                ],
                [
                  'error-icon',
                  'String',
                  'warning',
                  'Icon to display when step has an error',
                ],
                [
                  'editable',
                  'Boolean',
                  'False',
                  'Marks step as editable',
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  'If any rule is falsy, step will marked with error',
                ],
                [
                  'step',
                  'Number, String',
                  '-',
                  'Will be displayed inside the step circle',
                ],
              ]
            },
            'v-stepper-content': {
              params: [
                [
                  'step',
                  'Number, String',
                  '-',
                  'Sets step to associate the content to',
                ],
              ]
            }
          },
          functional: {
            'v-stepper': {
              params: [
                [
                  'v-stepper-header',
                  '.stepper__header'
                ],
              ]
            }
          },
          events: {
            'v-stepper': {
              events: [
                ['input', "Number, String", 'Current step'],
              ]
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
          title: 'Stepper Component | Vuetify.js',
          h1: 'Steppers',
          description: 'Stepper component for Vuetify Framework',
          keywords: 'vuetify, steppers, components'
        }
      }
    }
  }
</script>
