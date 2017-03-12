<template lang="pug">
  doc-view(
    id="progress-linear-view"
    v-bind:doc="doc"
  )
    component-example(header="Determinate" file="progress-linear/1" v-bind:data="example")
    component-example(header="Indeterminate" file="progress-linear/2" v-bind:data="example")
    component-example(header="Buffer" file="progress-linear/3" v-bind:data="example")
      section-text(slot="details") A buffer state represents two values simultaneously. The primary value is controled by the model, whereas the buffer is controlled by the <code>buffer-value</code> prop.

    component-example(header="Query Indeterminate and Determinate" file="progress-linear/4" v-bind:data="example")
      section-text(slot="details") To query state is controlled by the truthiness of indeterminate with the query prop set to true.

    component-example(header="Custom height and contextual colors", file="progress-linear/5" v-bind:data="example")
      section-text(slot="details") A custom height or contextual color can be applied to a progress bar. The bars primary color is your applications primary color.
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Progress Linear',
          desc: 'The <code>v-progress-linear</code> component is used to convey data visually to users. It has 4 potential states with 5 color variations. Determinate, which is % value defined by model. Indeterminate which conveys processing. Buffer, which is used to show varying states of progress and Query, which is Indeterminate in reverse.',
          props: {
            'v-progress-linear': {
              params: [
                [
                  'buffer',
                  'Boolean',
                  'False',
                  'Designates whether the buffer bar is shown'
                ],
                [
                  'bufferValue',
                  'Number',
                  'None',
                  'The percentage value for the buffer'
                ],
                [
                  'height',
                  'number',
                  '7',
                  'The height of the progress bar'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets the indeterminate state of the component. Use when loading progress is unknown'
                ],
                [
                  'active',
                  'Boolean',
                  'True',
                  'When disabled, the component will shrink up'
                ],
                [
                  'query',
                  'Boolean',
                  'False',
                  'Sets the query state of the component'
                ],
                [
                  'secondary',
                  'Boolean',
                  'False',
                  'Sets the progress context to "Secondary"'
                ],
                [
                  'success',
                  'Boolean',
                  'False',
                  'Sets the progress context to "Success"'
                ],
                [
                  'info',
                  'Boolean',
                  'False',
                  'Sets the progress context to "Info"'
                ],
                [
                  'warning',
                  'Boolean',
                  'False',
                  'Sets the progress context to "Warning"'
                ],
                [
                  'error',
                  'Boolean',
                  'False',
                  'Sets the progress context to "Error"'
                ],
              ],
              model: {
                types: ['Number'],
                default: '0',
                description: 'The percentage value for current progress'
              }
            }
          }
        },
        example: {
          active: false,
          buffer: 10,
          bufferValue: 20,
          loader: false,
          value: 0,
          valueDeterminate: 0,
          query: false,
          show: true,
          bufferActive: true
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())

      this.queryAndIndeterminate()
      this.determinate()
      this.startBuffer()
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      startBuffer () {
        this.example.bufferActive = true

        let int
        let intTwo

        this.$nextTick(() => {
          this.example.buffer = 10
          this.example.bufferValue = 50
        })

        setTimeout(() => {
          int = setInterval(() => {
            if (this.example.bufferValue < 100) {
              this.example.bufferValue += 5
            }
          }, 700)

          intTwo = setInterval(() => {
            if (this.example.buffer < 50) {
              this.example.buffer += Math.random() * (15 - 5) + 5
            } else if (this.example.bufferValue >= 100) {
              this.example.buffer = 100
            }

            if (this.example.buffer === 100) {
              clearInterval(int)
              clearInterval(intTwo)
              this.example.bufferActive = false
              setTimeout(() => {
                this.example.buffer = 0
                this.example.bufferValue = 0
                this.startBuffer()
              }, 2000)
            }
          }, 1500)
        }, 1000)
      },

      determinate () {
        setInterval(() => {
          if (this.example.valueDeterminate >= 100) {
            this.example.valueDeterminate = 0
          } else {
            this.example.valueDeterminate += 5
          }
        }, 1000)
      },

      queryAndIndeterminate () {
        this.example.query = true
        this.example.show = true
        this.example.value = 0
        let int

        setTimeout(() => {
          this.example.query = false
          int = setInterval(() => {
            if (this.example.value === 100) {
              clearInterval(int)
              this.example.show = false
              return setTimeout(this.queryAndIndeterminate, 2000)
            }
            this.example.value += 25
          }, 1000)
        }, 3500)
      },

      meta () {
        return {
          title: 'Progress Linear Component | Vuetify.js',
          h1: 'Progress Linear',
          description: 'The progress linear component is used to convey data visually to users. It has 4 potential states with 5 color variations.',
          keywords: 'vuetify, progress, progress bar, progress linear, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #progress-linear-view .component-example__container
    > .progress-linear
      margin: 2rem 0

    .toolbar
      height: 55px
</style>
