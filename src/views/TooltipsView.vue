<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example
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
      v-btn(
        primary
        v-tooltip:left="{ html: 'Left Tooltip' }"
      ) Left
    markup(slot="markup" lang="xml")
      |&lt;v-btn primary v-tooltip:top="{ html: 'Top Tooltip' }"&gt;...&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn primary v-tooltip:right="{ html: 'Right Tooltip' }"&gt;...&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn primary v-tooltip:bottom="{ html: 'Bottom Tooltip' }"&gt;...&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn primary v-tooltip:left="{ html: 'Left Tooltip' }"&gt;...&lt;/v-btn&gt;
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
          params: [
            [
              '<code>v-tooltip</code>',
              '',
              'Base directive'
            ],
            [
              '<code>modifiers</code>',
              'top, right, bottom, left',
              'Required: true'
            ],
            [
              '<code>html</code>',
              'The content for the tooltip',
              'Required: true'
            ]
          ]
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
    margin: 1rem
</style>