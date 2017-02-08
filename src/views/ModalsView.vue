<template lang="pug">
  doc-view(v-bind:doc="doc" id="modals")
    component-example(header="Variants" file="modals/1" v-bind:data="$data")
</template>

<script>
  export default {
    name: 'modals-view',

    data () {
      return {
        modal: false,
        bottom: false,
        doc: {
          title: 'Modal',
          desc: 'The <code>v-modal</code> component is useful for calling a users attention to information or a particular action. It is merely a wrapper for whatever component you choose to place in it. In the examples below, a <code>v-card</code> is used. To close a modal, you must manually publish and event to the Vuetify bus, or click outside of the modal. This is helpful for when you want to capture information by callback after a native click.',
          props: {
            'v-modal': {
              params: [
                [
                  'id',
                  'Boolean',
                  'True',
                  'The id to bind the directive'
                ],
                [
                  'bottom',
                  'Boolean',
                  'False',
                  'Applies the modal--bottom class'
                ]
              ]
            }
          },
          slots: {
            'v-modal': {
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
          title: 'Modal Component | Vuetify.js',
          h1: 'Modals',
          description: 'Modal component for Vuetify Framework',
          keywords: 'vuetify, modals, components'
        }
      },

      modal (id) {
      }
    }
  }
</script>