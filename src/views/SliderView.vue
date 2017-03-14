<template lang="pug">
  doc-view(v-bind:doc="doc" id="sliders-view")
    component-example(header="Continuous" file="sliders/1" v-bind:data="$data")
      span(class="subheading" slot="details") Light Theme
    component-example(file="sliders/2" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Theme
    component-example(header="Icons" file="sliders/3" v-bind:data="$data")
    component-example(header="With an editable numeric value" file="sliders/4" v-bind:data="$data")
    component-example(header="Discrete" file="sliders/5" v-bind:data="$data")
      span(class="subheading" slot="details") Light Theme
    component-example(file="sliders/6" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Theme
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
        e2: 50,
        e3: 100,
        e4: 50,
        media: 20,
        alarm: 50,
        ring: 65,
        r: 255,
        g: 50,
        b: 30,
        doc: {
          title: 'Slider',
          desc: 'Soon',
          props: {
            'v-slider': {
              params: [
                [
                  'append-icon',
                  'String',
                  '-',
                  'Append material icon'
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
                  'Disables the checkbox'
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
                  'Adds label to slider'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme'
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
                  '100',
                  'Sets maximum value'
                ],
                [
                  'prepend-icon',
                  'String',
                  '-',
                  'Prepend material icon'
                ],
                [
                  'required',
                  'Boolean',
                  'False',
                  'Designates the input as required'
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  "Array of cb fn's that return either True or a String with an error message"
                ],
                [
                  'thumb-label',
                  'Boolean',
                  'False',
                  'Show thumb label'
                ],
                [
                  'step',
                  'Number',
                  '-',
                  'If greater than 0, sets step interval for ticks'
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
          title: 'Slider Component | Vuetify.js',
          h1: 'Sliders',
          description: 'Slider component for Vuetify Framework',
          keywords: 'vuetify, sliders, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  .e3, .e4
    max-width: 350px
    margin: 0 auto
</style>
