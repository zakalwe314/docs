<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example
      progress(value="25", max="100")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          intro: 'Soon',
          types: ['comp'],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Progress')
    }
  }
</script>