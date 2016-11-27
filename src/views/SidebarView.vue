<template lang="pug">
  doc-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Sidebar',
          desc: 'Soon',
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Sidebar')
    }
  }
</script>