<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Accordion")
      div
        v-collapsible
          li(v-for="item in 5")
            v-collapsible-header Item
            v-collapsible-body 
              v-card
                v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    component-example(header="Expandable")
      div
        v-collapsible(expand)
          li(v-for="item in 2")
            v-collapsible-header Item
            v-collapsible-body 
              v-card
                v-card-text(class="grey lighten-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<style lang="stylus">
  .component-example
    > div
      width: 100%
</style>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Collapsible',
          desc: `Soon`,
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-collapsible expand&gt;</code>',
              '<code>expand</code>',
              'Does not contract when multiple are open',
              'Default: false'
            ],
            [
              '<code>&lt;v-collapsible-header&gt;</code>',
              '',
              'Helper component with the collapsible__header class',
              'Functional Component'
            ],
            [
              '<code>&lt;v-collapsible-body&gt;</code>',
              '',
              'Helper component with the collapsible__body class',
              'Functional Component'
            ]
          ]
        }
      }
    },

    mounted () {
      this.$emit('view', 'Collapsible')
    }
  }
</script>