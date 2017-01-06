<template lang="pug">
  doc-view(
    id="progress"
    v-bind:doc="doc"
  )
    component-example(header="Default" file="progress-circular/1")
      v-progress-circular(v-bind:value="20")
      v-progress-circular(v-bind:value="40")
      v-progress-circular(v-bind:value="60")
      v-progress-circular(v-bind:value="80")
      v-progress-circular(v-bind:value="100")
    component-example(header="Colored" file="progress-circular/2")
      v-progress-circular(class="blue-grey--text" v-bind:value="100")
      v-progress-circular(class="deep-orange--text" v-bind:value="80")
      v-progress-circular(class="brown--text" v-bind:value="60")
      v-progress-circular(class="lime--text" v-bind:value="40")
      v-progress-circular(class="indigo--text" v-bind:value="20")
    component-example(header="Indeterminate" file="progress-circular/3")
      v-progress-circular(class="primary--text" indeterminate)
      v-progress-circular(class="red--text" indeterminate)
      v-progress-circular(class="purple--text" indeterminate)
      v-progress-circular(class="green--text" indeterminate)
      v-progress-circular(class="amber--text" indeterminate)
    component-example(header="Size & Width" file="progress-circular/4")
      v-progress-circular(class="primary--text" indeterminate v-bind:size="50")
      v-progress-circular(class="red--text" indeterminate v-bind:width="3")
      v-progress-circular(class="purple--text" v-bind:size="70" v-bind:width="7" indeterminate)
      v-progress-circular(class="green--text" indeterminate v-bind:width="3")
      v-progress-circular(class="amber--text" indeterminate v-bind:size="50")
    component-example(header="Rotate" file="progress-circular/5")
      v-progress-circular(
        class="teal--text" 
        v-bind:size="100" 
        v-bind:width="15" 
        v-bind:rotate="360"
        v-bind:value="value"
      ) {{ value }}
      v-progress-circular(
        class="primary--text" 
        v-bind:size="100" 
        v-bind:width="15" 
        v-bind:rotate="-90"
        v-bind:value="value"
      ) {{ value }}
      v-progress-circular(
        class="red--text" 
        v-bind:size="100" 
        v-bind:width="15" 
        v-bind:rotate="90"
        v-bind:value="value"
      ) {{ value }}
      v-progress-circular(
        class="pink--text" 
        v-bind:size="100" 
        v-bind:width="15" 
        v-bind:rotate="180"
        v-bind:value="value"
      ) {{ value }}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Progress Circular',
          desc: 'The <code>v-progress-circular</code> component is used to convey data visually to users. It can also represent an indeterminate amount, such as loading or processing. This component contains a slot that is centered within the component container.',
          props: {
            'v-progress-circular': {
              params: [
                [
                  'fill',
                  'String',
                  "[intermediate ? 'none' : 'transparent']",
                  'Sets the fill color of the circle'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Applies the progress-circular--indeterminate class'
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
                  'Sets the size of the circle in pixels'
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
                default: '0'
              }
            }
          },
          slots: {
            'v-progress-circular': {
              default: true
            }
          }
        },
        value: 40
      }
    },

    mounted () {
      this.$emit('view', this.meta())

      setInterval(() => {
        if (this.value === 100) {
          return this.value = 0
        }
        this.value += 10
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
  #progress .component-example
    .progress-circular
      margin: 1rem
</style>