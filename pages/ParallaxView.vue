<template lang="pug">
  doc-view(v-bind:doc="doc" id="parallax-view")
    component-example(file="parallax/1")
</template>

<script>
  export default {
    name: 'parallax-view',

    data () {
      return {
        doc: {
          title: 'Parallax',
          desc: 'The <code>v-parallax</code> component creates a 3d effect that makes an image appear to scroll slower than the window.',
          props: {
            'v-parallax': {
              params: [
                [
                  'src',
                  'String',
                  'Required',
                  'The image to parallax'
                ],
                [
                  'height',
                  'Number',
                  '500',
                  'The height of the parallax container'
                ]
              ]
            }
          },
          slots: {
            'v-parallax': {
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
          title: 'Parallax Component | Vuetify.js',
          h1: 'Parallax',
          description: 'Parallax component for Vuetify Framework',
          keywords: 'vuetify, parallax, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #parallax-view
    .parallax
      margin: 0 0 25rem

    .parallax__content
      h1
        font-weight: 300
        white-space: nowrap

      p
        font-weight: 100
      h1
        margin: 2rem 0

      p
        font-size: 1.2rem

      .btn
        border-radius: 0
        margin: 4rem 2rem 0 0
</style>
