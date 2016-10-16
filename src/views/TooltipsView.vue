<template lang="pug">
  doc-view(v-bind:doc="doc")
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
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Tooltip',
          desc: 'Soon',
          types: [
            'directive'
          ],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Tooltips')
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 0 2rem
</style>