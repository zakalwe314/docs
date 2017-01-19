<template lang="pug">
  doc-view(
    id="progress-linear-view"
    v-bind:doc="doc"
  )
    component-example(header="Determinate" file="progress-linear/1")
      section-text(slot="details") A determinate state is controlled by a model
      v-progress-linear(v-model="valueDeterminate")

    component-example(header="Indeterminate" file="progress-linear/2")
      section-text(slot="details") An indeterminate state represents an unknown duration
      v-progress-linear(v-bind:indeterminate="true")

    component-example(header="Buffer" file="progress-linear/3")
      section-text(slot="details") A buffer state represents two values simultaneously. The primary value is controled by the model, whereas the buffer is controlled by the <code>buffer-value</code> prop.
      v-progress-linear(
        v-model="buffer" 
        buffer 
        v-bind:buffer-value="bufferValue" 
        v-bind:active="bufferActive"
      )

    component-example(header="Query Indeterminate and Determinate" file="progress-linear/4")
      section-text(slot="details") To query state is controlled by the truthiness of indeterminate with the query prop set to true.
      v-progress-linear(
        v-bind:indeterminate="query" 
        v-bind:query="true" 
        v-model="value" 
        v-bind:active="show"
      )

    component-example(header="Custom height and contextual colors", file="progress-linear/5")
      section-text(slot="details") A custom height or contextual color can be applied to a progress bar. The bars primary color is your applications primary color.
      v-progress-linear(value="15" height="15" secondary)
      v-progress-linear(v-bind:value="30" height="15" success)
      v-progress-linear(v-bind:value="45" height="15" info)
      v-progress-linear(v-bind:value="60" height="15" warning)
      v-progress-linear(v-bind:value="75" height="15" error)
</template>

<script>
  export default {
    data () {
      return {
        loader: false,
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
                  '[Number, String]',
                  'None',
                  'The percentage value for the buffer'
                ],
                [
                  'height',
                  '[Number, String]',
                  '7',
                  'The height of the progress bar'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets the indeterminate state of the component'
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
                ]
              ],
              model: {
                types: ['Number', 'String'],
                default: '0'
              }
            }
          }
        },
        buffer: 10,
        bufferValue: 20,
        value: 0,
        valueDeterminate: 0,
        query: false,
        show: true,
        bufferActive: true
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
        this.bufferActive = true

        let int
        let intTwo

        this.$nextTick(() => {
          this.buffer = 10
          this.bufferValue = 50
        })

        setTimeout(() => {
          int = setInterval(() => {
            if (this.bufferValue < 100) {
              this.bufferValue += 5
            }
          }, 700)

          intTwo = setInterval(() => {
            if (this.buffer < 50) {
              this.buffer += Math.random() * (15 - 5) + 5
            } else if (this.bufferValue >= 100) {
              this.buffer = 100
            }

            if (this.buffer === 100) {
              clearInterval(int)
              clearInterval(intTwo)
              this.bufferActive = false
              setTimeout(() => {
                this.buffer = 0
                this.bufferValue = 0
                this.startBuffer()
              }, 2000)
            }
          }, 1500)
        }, 1000)
      },

      determinate () {
        setInterval(() => {
          if (this.valueDeterminate >= 100) {
            this.valueDeterminate = 0
          } else {
            this.valueDeterminate += 5
          }
        }, 1000)
      },

      queryAndIndeterminate () {
        this.query = true
        this.show = true
        this.value = 0
        let int

        setTimeout(() => {
          this.query = false
          int = setInterval(() => {
            if (this.value === 100) {
              clearInterval(int)
              this.show = false
              return setTimeout(this.queryAndIndeterminate, 2000)
            }
            this.value += 25
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
      
    .navbar
      height: 55px
</style>