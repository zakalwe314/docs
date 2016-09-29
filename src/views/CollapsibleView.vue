<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      component-chip(type="slot")
      section-text(v-html="text")
    section
      section-header Examples
      component-header Accordion
      component-example
        div
          v-collapsible
            li(v-for="item in 5")
              v-collapsible-header Item
              v-collapsible-body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      component-header Expandable
      component-example
        div
          v-collapsible(expand)
            li(v-for="item in 2")
              v-collapsible-header Item
              v-collapsible-body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      component-options(v-bind:items="options")
</template>

<script>
  export default {
    name: 'collapsible-view',

    data () {
      return {
        text: `Soon`,
        options: [
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
    },

    mounted () {
      this.$emit('view', 'Collapsible')
    }
  }
</script>