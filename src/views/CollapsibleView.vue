<template lang="pug">
  doc-view(v-bind:doc="doc" id="collapsible")
    component-example(header="Accordion" file="collapsible/1")
      div
        v-collapsible
          li(v-for="item in 5")
            v-collapsible-header Item
            v-collapsible-body 
              v-card
                v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    component-example(header="Expandable" file="collapsible/1")
      div
        v-collapsible(expand)
          li(v-for="item in 5")
            v-collapsible-header Item
            v-collapsible-body 
              v-card
                v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<style lang="stylus">
  #collapsible
    .component-example__container
      > div
        width: 100%
</style>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Collapsible',
          desc: `The <code>v-collapsible</code> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one collapsible body at a time, however, with the <code>expandable</code> property, the collapsible can remain open until explicity closed.`,
          props: {
            'v-collapsible': {
              params: [
                [
                  'expand',
                  'Boolean',
                  'False',
                  'Leaves collapsible open when selecting another'
                ]
              ]
            }
          },
          functional: {
            'v-collapsible': {
              params: [
                [
                  'v-collapsible-header',
                  '.collapsible__header'
                ],
                [
                  'v-collapsible-body',
                  '.collapsible__body'
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
          keywords: 'vuetify, collapsible, components'
        }
      }
    }
  }
</script>