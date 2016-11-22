<template lang="pug">
  h2(
    class="section-header secondary--text primary--after"
    v-bind:style="styles"
  )
    slot
    v-icon(x-large class="primary--text") short_text
</template>

<script>
  export default {
    props: {
      first: Boolean
    },

    computed: {
      styles () {
        let styles = {}

        if (this.first) {
          styles['margin-top'] = 0
        }

        return styles
      }
    }
  }
</script>