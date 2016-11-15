<template lang="pug">
  div(class="doc")
    section
      section-text
        dt(slot="title") Colors
        dd(slot="desc") Soon
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Colors')
    },

    preFetch () {
      return {
        title: 'Colors',
        meta: {}
      }
    }
  }
</script>