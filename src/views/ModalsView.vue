<template lang="pug">
  doc-view(v-bind:doc="doc" id="modals")
    component-example(header="Variants" file="modals/1" v-bind:data="$data")
      section-text(slot="details") If you want to programmatically open or close the modal, you can do so by using <code>v-model</code> with a boolean value. Keep in mind, if the trigger for the opening is not contained within the <code>activator</code> slot and is done so by a click, you must <strong>stopPropagation</strong> to avoid immediately triggering a close event.
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
          desc: 'The <code>v-modal</code> component is useful for calling a users attention to information or a particular action. It is merely a wrapper for whatever component you choose to place in it. In the examples below, a <code>v-card</code> is used.',
          props: {
            'v-modal': {
              params: [
                [
                  'bottom',
                  'Boolean',
                  'False',
                  'Modal will be set to the bottom'
                ],
                [
                  'persistent',
                  'Boolean',
                  'False',
                  'Modal does not close on outside-click'
                ],
                [
                  'origin',
                  'String',
                  'center center',
                  'The transition origin of the modal'
                ],
                [
                  'transition',
                  'String',
                  'v-modal-transition',
                  'The transition used'
                ]
              ]
            }
          },
          slots: {
            'v-modal': {
              params: [
                [
                  'activator',
                  'The element that will activate the modal'
                ]
              ],
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
      }
    }
  }
</script>
