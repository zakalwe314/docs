<template lang="pug">
  doc-view(v-bind:doc="doc" id="selects-view")
    component-example(header="Standard select" file="selects/1" v-bind:data="$data")
      span(class="subheading" slot="details") Light Theme
    component-example(file="selects/2" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Theme
</template>

<script>
  export default {
    data () {
      return {
        e1: [],
        e2: [],
        e3: [],
        e4: [],
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' }
        ],
        doc: {
          title: 'Select',
          desc: ``,
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
          title: 'Select Component | Vuetify.js',
          h1: 'Selects',
          description: 'Select component for Vuetify Framework',
          keywords: 'vuetify, selects, directives'
        }
      }
    }
  }
</script>