<template lang="pug">
  doc-view(v-bind:doc="doc" id="expansion-panel")
    component-example(header="Accordion" file="expansion-panel/1")
      div
        v-expansion-panel
          v-expansion-panel-content(v-for="item in 5")
            div(slot="header") Item
            v-card
              v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    component-example(header="Expand" file="expansion-panel/2")
      div
        v-expansion-panel(expand)
          v-expansion-panel-content(v-for="item in 5")
            div(slot="header") Item
            v-card
              v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            }
          },
          functional: {
            'v-expansion-panel': {
              params: [
                [
                  'v-expansion-panel-header',
                  '.expansion-panel__header'
                ],
                [
                  'v-expansion-panel-body',
                  '.expansion-panel__body'
                ]
              ]
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