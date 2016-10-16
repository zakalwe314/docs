<template lang="pug">
  div
    component-header {{ header }}
    div(
      class="component-example"
    )
      slot
</template>

<script>
  export default {
    props: ['header']
  }
</script>

<style lang="stylus">
  .component-example
    display: flex
    justify-content: center
    padding: 2rem 1rem
    background: rgba(0, 0, 0, .03)
    margin: 0 -1rem 5rem
    flex-wrap: wrap
</style>