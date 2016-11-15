<template lang="pug">
  div(class="doc")
    section
      section-text
        dt(slot="title") Grid
        dd(slot="desc") Soon
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Grid')
    },

    preFetch () {
      return {
        title: 'Grid',
        meta: {}
      }
    }
  }
</script>