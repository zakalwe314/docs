<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="steppers/1" v-bind:data="$data")
    component-example(header="Editable steps" file="steppers/2")
    component-example(header="Non-editable steps" file="steppers/3")
    //- component-example(header="Mobile")
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
          desc: 'The <code>v-stepper</code> directive is useful for conveying information when a user hovers over an element.',
          props: {
            'v-stepper': {
              params: [
                [
                  'modifiers',
                  'String',
                  'Required',
                  'top, right, bottom, left',
                ],
                [
                  'html',
                  'String',
                  'Required',
                  'The content for the stepper',
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
      meta () {
        return {
          title: 'stepper Directive | Vuetify.js',
          h1: 'steppers',
          description: 'stepper directive for Vuetify Framework',
          keywords: 'vuetify, steppers, directives'
        }
      }
    }
  }
</script>