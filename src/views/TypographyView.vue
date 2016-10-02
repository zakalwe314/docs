<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(
      id="typo"
      header="Headers"
    )
        h1 Heading h1
        h2 Heading h2
        h3 Heading h3
        h4 Heading h4
        h5 Heading h5
        h6 Heading h6
    component-example(header="Blockquotes")
      blockquote Hello
</template>

<script>
  export default {
    name: 'typography-view',

    data () {
      return {
        doc: {
          intro: 'Soon',
          types: [],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Typography')
    }
  }
</script>

<style lang="stylus">
  #typo .component-example
    flex-direction: column !important
</style>