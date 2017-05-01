<template lang="pug">
  doc-view(v-bind:doc="doc" id="footer")
    component-example(file="footer/1")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Footer',
          desc: 'The <code>v-footer</code> component is used for displaying general information that a user might want to access from any page within your site.',
          slots: {
            'v-footer': {
              default: true
            }
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
          title: 'Footer Component | Vuetify.js',
          h1: 'Footer',
          description: 'Footer component for Vuetify Framework',
          keywords: 'vuetify, footer, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #footer
    .component-example__container
      > div
        width: 100%
</style>