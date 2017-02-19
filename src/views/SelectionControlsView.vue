<template lang="pug">
  doc-view(v-bind:doc="doc" id="selection-controls-view")
    h4 Checkboxes
    component-example(header="Boolean" file="selection-controls/1" v-bind:data="$data")
    component-example(header="Array" file="selection-controls/2" v-bind:data="$data")
    component-example(header="States" file="selection-controls/3" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/4" v-bind:data="$data")
    h4 Radios
    component-example(header="Default" file="selection-controls/5" v-bind:data="$data")
    component-example(header="States" file="selection-controls/6" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/7" v-bind:data="$data")
    h4 Switches
    component-example(header="Boolean" file="selection-controls/8" v-bind:data="$data")
    component-example(header="Array" file="selection-controls/9" v-bind:data="$data")
    component-example(header="States" file="selection-controls/10" v-bind:data="$data")
    component-example(header="Contextual" file="selection-controls/11" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        ex1: true,
        ex2: false,
        ex3: true,
        ex4: false,
        ex5: ['John'],
        ex6: ['John'],
        ex7: false,
        ex8: null,
        ex9: null,
        ex10: null,
        ex11: true,
        ex12: false,
        ex13: true,
        ex14: false,
        ex15: ['John'],
        ex16: ['John'],
        ex17: false,
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

<style lang="stylus" id="selection-controls-view">
  table
    tr
      border-top: none !important
      height: 75px
      
      &:hover
        background: transparent !important
      
    td, th
      text-align: center
      
    td
      .input-group
        justify-content: center
</style>