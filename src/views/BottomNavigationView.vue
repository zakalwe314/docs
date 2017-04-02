<template lang="pug">
  doc-view(v-bind:doc="doc" id="bottom-navigation-view")
    component-example(header="Icons and text" file="bottom-navigation/1" v-bind:data="$data")
    component-example(header="Color & shift" file="bottom-navigation/2" v-bind:data="$data")
    component-example(header="Toggle" file="bottom-navigation/3" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        e1: 2,
        e2: 2,
        e31: true,
        e3: null,
        doc: {
          title: 'Bottom navigation',
          desc: ``,
          props: {
            'v-bottom-navigation': {}
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
          title: 'Bottom navigation Component | Vuetify.js',
          h1: 'Bottom navigation',
          description: 'Bottom navigation component for Vuetify Framework',
          keywords: 'vuetify, bottom navigation, navigation, component'
        }
      }
    }
  }
</script>