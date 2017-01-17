<template lang="pug">
  doc-view(
    id="progress-linear-view"
    v-bind:doc="doc"
  )
    component-example(header="Determinate")
      v-progress-linear(v-model="valueDeterminate")

    component-example(header="Indeterminate")
      v-progress-linear(v-bind:indeterminate="true")

    component-example(header="Buffer")
      v-progress-linear(
        v-model="buffer" 
        buffer 
        v-bind:buffer-value="bufferValue" 
        v-bind:active="bufferHide"
      )

    component-example(header="Query Indeterminate and Determinate")
      v-progress-linear(
        v-bind:indeterminate="query" 
        v-bind:query="true" 
        v-model="value" 
        v-bind:active="show"
      )

    component-example(header="In Navbar")
      v-navbar(class="indigo white--text")
        v-navbar-toolbar
          v-icon search
        v-progress-linear(v-bind:indeterminate="query" v-bind:query="true" v-model="value" v-bind:active="show")
</template>

<script>
  export default {
    data () {
      return {
        loader: false,
        doc: {
          title: 'Progress Linear',
          desc: 'The <code>v-progress-linear</code> component is used to convey data visually to users. It can also represent an indeterminate amount, such as loading or processing. This component contains a slot that is centered within the component container.',
          props: {
          },
          slots: {
          }
        },
        buffer: 10,
        bufferValue: 20,
        value: 0,
        valueDeterminate: 0,
        query: false,
        show: true,
        bufferHide: false
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
        this.bufferHide = false

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
              this.bufferHide = true
              clearInterval(int)
              clearInterval(intTwo)
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
          description: 'Progress Linear component for Vuetify Framework',
          keywords: 'vuetify, progress, progress circle, progress circular, components'
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