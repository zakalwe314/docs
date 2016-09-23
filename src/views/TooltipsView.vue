<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="directive")
      section-text Soon
      component-example
        div
          v-btn(
            primary
            v-tooltip:left="{ html: 'Left Tooltip' }"
          ) Left
          v-btn(
            primary
            v-tooltip:top="{ html: 'Top tooptip' }"
          ) Top
          v-btn(
            primary
            v-tooltip:right="{ html: 'Right tooptip' }"
          ) Right
          v-btn(
            primary
            v-tooltip:bottom="{ html: 'Bottom tooptip' }"
          ) Bottom
      component-options
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Tooltips')
    }
  }
</script>

<style lang="stylus">
  .btn
    margin: 0 2rem
</style>