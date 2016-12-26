<template lang="pug">
  doc-view(
    id="progress"
    v-bind:doc="doc"
  )
    component-example(header="Default")
      v-progress-circular(v-bind:value="20")
      v-progress-circular(v-bind:value="40")
      v-progress-circular(v-bind:value="60")
      v-progress-circular(v-bind:value="80")
      v-progress-circular(v-bind:value="100")
    component-example(header="Colored")
      v-progress-circular(class="blue-grey--text" v-bind:value="100")
      v-progress-circular(class="deep-orange--text" v-bind:value="80")
      v-progress-circular(class="brown--text" v-bind:value="60")
      v-progress-circular(class="lime--text" v-bind:value="40")
      v-progress-circular(class="indigo--text" v-bind:value="20")
    component-example(header="Indeterminate")
      v-progress-circular(class="primary--text" indeterminate)
      v-progress-circular(class="red--text" indeterminate)
      v-progress-circular(class="purple--text" indeterminate)
      v-progress-circular(class="green--text" indeterminate)
      v-progress-circular(class="amber--text" indeterminate)
    component-example(header="Size & Width")
      v-progress-circular(class="primary--text" indeterminate v-bind:size="50")
      v-progress-circular(class="red--text" indeterminate v-bind:width="3")
      v-progress-circular(class="purple--text" v-bind:size="70" v-bind:width="7" indeterminate)
      v-progress-circular(class="green--text" indeterminate v-bind:width="3")
      v-progress-circular(class="amber--text" indeterminate v-bind:size="50")
    component-example(header="Rotate")
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
    div(slot="markup")
      markup(lang="html")
        |&lt;v-progress-circular v-bind:value="10"&gt;&lt;/v-progress-circular&gt;
        |&nbsp;
        |&lt;v-progress-circular v-bind:value="30" class="blue--text"&gt;&lt;/v-progress-circular&gt;
        |&nbsp;
        |&lt;v-progress-circular class="green--text" indeterminate&gt;&lt;/v-progress-circular&gt;
        |&nbsp;
        |&lt;v-progress-circular
        |   class="purple--text"
        |   indeterminate
        |   v-bind:size="50"
        |   v-bind:width="7"
        |&gt;&lt;/v-progress-circular&gt;
        |&nbsp;
        |&lt;v-progress-circular
        |   class="red--text"
        |   v-bind:size="100"
        |   v-bind:width="15"
        |   v-bind:rotate="90"
        |   v-model="score"
        |&gt;
        |   &lt;v-icon&gt;success&lt;/v-icon&gt;
        |&lt;/v-progress-circular&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     score: 87
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Progress Circular',
          desc: 'The <code>v-progress-circular</code> component is used to convey data visually to users. It can also represent an indeterminate amount, such as loading or processing. This component contains a slot that is centered within the component container.',
          params: [
            [
              '<code>v-progress-circular</code>',
              '',
              'Base component'
            ],
            [
              '<code>fill</code>',
              'Sets the fill color of the circle',
              "Default: [intermediate ? 'none' : 'transparent']"
            ],
            [
              '<code>indeterminate</code>',
              'Applies the progress-circular--indeterminate class',
              'Default: false'
            ],
            [
              '<code>rotate</code>',
              'Rotates the circle start point in deg',
              'Default: 0'
            ],
            [
              '<code>size</code>',
              'Sets the size of the circle in pixels',
              'Default: 32'
            ],
            [
              '<code>width</code>',
              'Sets the stroke of the circle in pixels',
              'Default: 4'
            ],
            [
              '<code>v-model</code>',
              '',
              'Default: 0'
            ],
            [
              '<code>slot</code>',
              '',
              'Types: [default]'
            ]
          ]
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