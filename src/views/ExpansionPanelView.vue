<template lang="pug">
  doc-view(v-bind:doc="doc" id="expansion-panel")
    component-example(header="Accordion" file="expansion-panel/1")
    component-example(header="Expand" file="expansion-panel/2")
</template>

<style lang="stylus">
  #expansion-panel
    .component-example__container
      > div
        width: 100%
</style>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Expansion Panel',
          desc: `The <code>v-expansion-panel</code> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time, however, with the <code>expandable</code> property, the expansion-panel can remain open until explicity closed.`,
          props: {
            'v-expansion-panel': {
              params: [
                [
                  'expand',
                  'Boolean',
                  'False',
                  'Leaves expansion-panel open when selecting another'
                ]
              ]
            },
            'v-expansion-panel-content': {
              params: [
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Applies the ripple directive'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False',
                description: 'Designates whether content is expanded or not'
              }
            }
          },
          slots: {
            'v-expansion-panel': {
              default: true
            },
            'v-expansion-panel-content': {
              params: [
                [
                  'header',
                  'Expansion header content'
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
          title: 'Collapsible Component | Vuetify.js',
          h1: 'Collapsible',
          description: 'Collapsible component for Vuetify Framework',
          keywords: 'vuetify, expansion-panel, components'
        }
      }
    }
  }
</script>
