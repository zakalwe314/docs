<template lang="pug">
  section
    v-row
      v-col(xs12)
        section-header Accordion
        v-collapsible
          li(v-for="item in 5")
            v-collapsible-header Item
            v-collapsible-body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    v-col(xs12)
        section-header Expandable
        v-collapsible(expand)
          li(v-for="item in 2")
            v-collapsible-header Item
            v-collapsible-body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>
  export default {
    name: 'collapsible-view',

    mounted () {
      this.$emit('view', 'Collapsible')
    }
  }
</script>