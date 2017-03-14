<template lang="pug">
  doc-view(
    id="progress"
    v-bind:doc="doc"
  )
    component-example(header="Default" file="progress-circular/1" v-bind:data="example")
    component-example(header="Colored" file="progress-circular/2" v-bind:data="example")
    component-example(header="Indeterminate" file="progress-circular/3" v-bind:data="example")
    component-example(header="Size & Width" file="progress-circular/4" v-bind:data="example")
    component-example(header="Rotate" file="progress-circular/5" v-bind:data="example")
</template>

<script>
  export default {
    data () {
      return {
        example: {
          value: 40
        },
        doc: {
          title: 'Progress Circular',
          desc: 'The <code>v-progress-circular</code> component is used to convey data visually to users. It can also represent an indeterminate amount, such as loading or processing. This component contains a slot that is centered within the component container.',
          props: {
            'v-progress-circular': {
              params: [
                [
                  'fill',
                  'String',
                  "[indeterminate ? 'none' : 'transparent']",
                  'Sets the fill color of the circle'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Never stops rotating. Use when loading progress is unknown.'
                ],
                [
                  'rotate',
                  'Number',
                  '0',
                  'Rotates the circle start point in deg'
                ],
                [
                  'size',
                  'Number',
                  '32',
                  'Sets the diameter of the circle in pixels'
                ],
                [
                  'width',
                  'Number',
                  '4',
                  'Sets the stroke of the circle in pixels'
                ]
              ],
              model: {
                types: ['Number'],
                default: '0',
                description: 'The percentage value for current progress'
              }
            }
          },
          slots: {
            'v-progress-circular': {
              default: true
            }
          }
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())

      setInterval(() => {
        if (this.example.value === 100) {
          return this.example.value = 0
        }
        this.example.value += 10
      }, 1000)
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Progress Circular Component | Vuetify.js',
          h1: 'Progress Circular',
          description: 'Progress Circular component for Vuetify Framework',
          keywords: 'vuetify, progress, progress circle, progress circular, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #progress
    .component-example
      .progress-circular
        margin: 1rem

    .component-example__container
      > div
        text-align: center
</style>
