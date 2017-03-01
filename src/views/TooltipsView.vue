<template lang="pug">
  doc-view(v-bind:doc="doc")
    //- component-example(file="tooltips/1")
    v-stepper(v-model="step")
      v-stepper-header
        v-stepper-step(step="1" editable) Select campaign settings
        v-divider
        v-stepper-step(step="2") Create an ad group
          small Optional
        v-divider
        v-stepper-step(step="3") Create an ad
      v-stepper-content(step="1")
        p Step 1
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 2") Continue
      v-stepper-content(step="2")
        p Step 2
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 3") Continue
      v-stepper-content(step="3")
        p Step 3
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 1") Continue
    v-stepper(v-model="step" vertical class="mt-5")
      v-stepper-step(step="1" editable) Select campaign settings
      v-stepper-content(step="1")
        p Step 1
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 2") Continue
      v-stepper-step(step="2") Create an ad group
        small Optional
      v-stepper-content(step="2")
        p Step 2
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 3") Continue
      v-stepper-step(step="3") Create an ad
      v-stepper-content(step="3")
        p Step 3
        v-btn(flat) Cancel
        v-btn(primary light v-on:click.native="step = 1") Continue
</template>

<script>
  export default {
    data () {
      return {
        step: 2,
        doc: {
          title: 'Tooltip',
          desc: 'The <code>v-tooltip</code> directive is useful for conveying information when a user hovers over an element.',
          props: {
            'v-tooltip': {
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
                  'The content for the tooltip',
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
          title: 'Tooltip Directive | Vuetify.js',
          h1: 'Tooltips',
          description: 'Tooltip directive for Vuetify Framework',
          keywords: 'vuetify, tooltips, directives'
        }
      }
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 1rem
</style>
