<template lang="pug">
  doc-view(v-bind:doc="doc" id="sliders-view")
    div(class="mt-5")
      v-container(fluid)
        v-row
          v-col(xs10)
            v-slider(v-model="slider")
          v-col(xs2)
            v-text-field(v-model="slider" type="number")
</template>

<script>
  export default {
    data () {
      return {
        slider: 0,
        doc: {
          title: 'Slider',
          desc: 'Soon',
          props: {
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