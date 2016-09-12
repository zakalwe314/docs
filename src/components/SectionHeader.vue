<template lang="pug">
  h3(v-bind:class="classes")
    slot
</template>

<script>
  export default {
    computed: {
      classes () {
        return {
          'secondary--text': true
        }
      }
    }
  }
</script>

<style lang="stylus"
       scoped
>
  h3
    font-weight: 200
    letter-spacing: .4rem
    margin: 2.5rem 0
    text-align: left !important
</style>