<template lang="pug">
  section(class="center-align")
    section-header Tooltips
    v-row
      v-col(xs3)
        v-btn(primary, v-tooltip:left="'Left Tooltip'") Left
      v-col(xs3)
        v-btn(primary, v-tooltip:top="'Top tooptip'") Top
      v-col(xs3)
        v-btn(primary, v-tooltip:right="'Right tooptip'") Right
      v-col(xs3)
        v-btn(primary, v-tooltip:bottom="'Bottom tooptip'") Bottom
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Tooltips')
    }
  }
</script>

<style lang="stylus">
  .col
    margin: 2rem 0
</style>