<template lang="pug">
  section
    v-row
      v-col(xs12)
        section-header Headings
        v-card
          v-card-text
            h1 Heading h1
            h2 Heading h2
            h3 Heading h3
            h4 Heading h4
            h5 Heading h5
            h6 Heading h6
      v-col(xs12)
        section-header Blockquotes
        blockquote Hello
</template>

<script>
  export default {
    name: 'typography-view',

    mounted () {
      this.$emit('view', 'Typography')
    }
  }
</script>