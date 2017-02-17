<template lang="pug">
  doc-view(v-bind:doc="doc" id="selection-controls-view")
    component-example(file="selection-controls/1" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        sel: true,
        doc: {
          title: 'Selection controls',
          desc: 'Text fields components are used for collecting user provided information.',
          props: {}
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
          title: 'Selection controls Input Components | Vuetify.js',
          h1: 'Selection controls',
          description: 'Selection controls input components for Vuetify Framework',
          keywords: 'vuetify, form, components'
        }
      }
    }
  }
</script>